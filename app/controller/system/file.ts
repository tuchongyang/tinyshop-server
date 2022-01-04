import { Controller } from "egg";
import { bp } from "egg-blueprint";
const fs = require("mz/fs");
const path = require("path");
const dayjs = require("dayjs");
const pump = require("mz-modules/pump");
const auth = require('../../middleware/auth')
/**
 * @Controller 角色
 */
bp.prefix("/system/file", "FileController");
export default class FileController extends Controller {
  /** 分页列表 */
  @bp.get("/", auth('file', 'list'))
  public async index() {
    const { ctx } = this;
    let list = await ctx.service.system.file.list(ctx.query);
    ctx.success(list);
  }
  /** 不分页列表 */
  @bp.get("/list", auth('file', 'list'))
  public async list() {
    const { ctx } = this;
    let list = await ctx.service.system.file.select();
    ctx.success(list);
  }

  @bp.post("/save")
  public async save() {
    const { ctx } = this;
    let params = ctx.request.body;
    let ret = await ctx.service.system.file.save(params);
    if (ret.code == 0) {
      ctx.success();
    } else {
      ctx.fail(ret.message, ret.code);
    }
  }
  @bp.del("/:id")
  public async remove() {
    const { ctx } = this;
    let ret = await ctx.service.system.file.remove(ctx.params.id);
    if (ret.code == 0) {
      ctx.success();
    } else {
      ctx.fail(ret.message, ret.code);
    }
  }

  @bp.get("/:id")
  public async detail() {
    const { ctx } = this;
    const data = await ctx.service.system.file.detail(ctx.params.id);

    ctx.success(data);
  }
  /**
   * @api {post} /api/file/upload 文件上传
   * @apiName fileUpload
   * @apiGroup 系统管理
   *
   **/

  @bp.post("/upload")
  async fileupload() {
    const { ctx } = this;
    const files = ctx.request.files;
    // ctx.logger.warn('files: %j', files);
    const images = <any>[];
    try {
      for (const file of files) {
        // const filename = file.filename.toLowerCase();
        // 基础的目录
        const uplaodBasePath = "app/public/uploads";
        // 生成文件名
        const filename = `${Date.now()}${Math.random() * 1000}${path
          .extname(file.filename)
          .toLocaleLowerCase()}`;
        // 生成文件夹
        const dirname = dayjs(Date.now()).format("YYYY/MM/DD");
        function mkdirsSync(dirname) {
          if (fs.existsSync(dirname)) {
            return true;
          } else {
            if (mkdirsSync(path.dirname(dirname))) {
              fs.mkdirSync(dirname);
              return true;
            }
          }
        }
        mkdirsSync(path.join(uplaodBasePath, dirname));
        // 生成写入路径
        const targetPath = path.join(uplaodBasePath, dirname, filename);

        // const targetPath = path.join(this.config.baseDir, 'app/public', filename);
        const source = fs.createReadStream(file.filepath);
        const target = fs.createWriteStream(targetPath);
        await pump(source, target);
        const fileStat = fs.statSync(targetPath);
        const image = {
          format: file.mime,
          url: "/public/uploads/" + dirname + "/" + filename,
          path: targetPath,
          size: fileStat.size,
          name: filename,
          type: file.mime.split("/").shift(),
          creator: ctx.user,
        };
        const iobj = await this.app.model.SystemFile.create(image);
        images.push(iobj);
        // ctx.logger.warn('save %s to %s', file.filepath, targetPath);
      }
    } finally {
      // delete those request tmp files
      await ctx.cleanupRequestFiles();
    }

    await ctx.success(images.length > 1 ? images : images[0]);
  }
}
