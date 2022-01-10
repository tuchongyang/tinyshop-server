# 多商户商城管理系统

![](https://img.shields.io/github/package-json/v/tuchongyang/tinyshop-server)
![](https://img.shields.io/github/package-json/dependency-version/tuchongyang/tinyshop-server/egg)
![](https://img.shields.io/node/v/egg)

### 基于egg.js+jwt+mysql编写的开箱即用的权限管理后台+商城管理后台

## 前言
本项目是基于eggjs开发的一套商城系统，包含服务端、后台管理和移动端。单商户、多商户同时支持。并包含一套细粒度的多角色多权限管理系统。

## 预览
[后台管理](http://tinyshop.tucy.top/admin)

| 角色 |  登录名 | 登录密码 |
|--------|---------|----------|
| 管理员 | admin | 123456 |
| 商家 | tcy | 123456 |

[移动商城](http://tinyshop.tucy.top/)

[API文档](http://tinyshop.tucy.top/doc)




## 项目地址
服务端：eggjs+mysql+jwt  (本仓库) [接口地址](http://tinyshop.tucy.top/api)

管理后台: vue2+element-ui  [仓库地址](https://github.com/tuchongyang/tinyshop-admin)   （vue3重构中...）

移动商城：vue3+vant+vue全家桶  [仓库地址](https://github.com/tuchongyang/tinyshop-vue)  


## 快速开始
1、下载代码 `git clone https://github.com/tuchongyang/tinyshop-server.git`

2、安装依赖 `npm install`

3、配置config文件 `/config/config.local.js`

4、导入数据库文件 `tinyshop.sql`

## 依赖安装

-- 项目启动需要安装redis，window系统请前往[](https://github.com/MicrosoftArchive/redis/releases)下载msi文件直接安装即可。

-- 初次启动，请先调用 `http://localhost:7001/api/init`，将会初始化用户、角色、角色权限、菜单、角色菜单数据。初始化后，将自动创建两个账号，管理员：`admin/123456`，商家：`tcy/123456`


## 近期更新

- [x] 加入redis缓存
- [x] 添加项目初始化数据功能
- [x] 完善所有接口的权限配置
- [ ] 使用vue3重构后台管理系统【进行中】
- [ ] 添加订单发货操作，可填写运单号
- [ ] 添加概览数据统计
- [ ] 添加优惠券功能
- [ ] 添加店铺装修功能
- [ ] 敬请期待...

## 已实现功能
#### 使用之前请先了解`egg.js`，然后把`/config/config.local.js`数据库配置成自己的，只要手动创建数据库就行，

#### 系统管理员
- [x] 角色管理，（增加，删除，修改，角色菜单管理，角色权限管理）
- [x] 用户管理，（增加，删除，修改）
- [x] 权限管理，（添加，删除，修改）
- [x] 菜单管理，（添加，删除，修改）
- [x] 文件管理，（列表，删除，文件上传）
- [x] 日志管理，（列表）
- [x] 商家管理，（添加，删除，修改，详情） 多商家入驻

#### 商家管理员
- [x] 商品管理，（添加，删除，修改，上下架）
- [x] 商品分类，（添加，删除，修改）
- [x] 订单管理，（列表，删除，修改状态）
- [x] 店铺资料设置
- [x] 店铺广告图,(列表，添加，删除，修改)

#### 普通用户
- [ ] 注册
- [x] 登录
- [x] token校验过期处理
- [ ] 微信登录
- [x] 个人资料修改
- [x] 地址管理（列表、添加、删除、设置默认）
- [x] 我的订单（列表，付款，收货，取消）
- [x] 商品列表，（名称搜索，按销量、价格排序，按分类筛选）
- [x] 分类列表
- [x] 广告图列表
- [x] 我的收藏（列表，添加，取消）



## 截图

![菜单管理](http://www.tucy.top/screenshort/tinyshop/admin1.jpg)
![用户管理](http://www.tucy.top/screenshort/tinyshop/admin2.jpg)
![角色管理](http://www.tucy.top/screenshort/tinyshop/admin3.jpg)
![角色管理-角色菜单授权](http://www.tucy.top/screenshort/tinyshop/admin4.jpg)
![角色管理-角色权限授权](http://www.tucy.top/screenshort/tinyshop/admin5.jpg)
![文件管理](http://www.tucy.top/screenshort/tinyshop/admin6.jpg)
![日志管理](http://www.tucy.top/screenshort/tinyshop/admin7.jpg)
![权限管理](http://www.tucy.top/screenshort/tinyshop/admin8.jpg)
![商家管理](http://www.tucy.top/screenshort/tinyshop/admin9.jpg)



👤 **tuchongyang**

* Github: [@tuchongyang](https://github.com/tuchongyang)
* QQ: 779311998
* QQ群: 145679486
* 
## 结语
如果这个项目对你有帮助的话，请给个星点个star

## 交流群
qq群：145679486

