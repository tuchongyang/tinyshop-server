import { Controller } from 'egg';
import { bp } from 'egg-blueprint'

const auth = require('../middleware/auth')

export default class HomeController extends Controller {
    @bp.get('/')
    public async index() {
        const { ctx } = this;
        ctx.body = "欢迎访问"
    }
    @bp.get('/test',auth())
    public async test() {
        const { ctx } = this;
        ctx.success({
            user: ctx.user
        })
    }
    
}
