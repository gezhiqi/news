# uni-app

## 1.0  uni-app 基础

#### **uni-app和小程序有什么关系？**

- 组件标签靠近小程序规范
- 接口能力（JS API）靠近微信小程序规范
- 完整的小程序的生命周期

#### 这门课程能带给你带来什么？

- 全面了解uni-app技术本身，适配兼容8个平台
- 掌握uni-app的前后台完整开发流程
- 掌握敏捷开发技巧，学会组件化开发思路
- 最佳工具的结合使用，HBuilderX+uni-app+uniCloud

#### uni-app条件编译：#ifdef #ifndef #endif

语法：

// #ifdef %PLATFORM%
这些代码只在该平台编译
// #endif

```
#ifdef ：      if defined  仅在某个平台编译
#ifndef ：     if not defined  在除里该平台的其他编译
#endif ：      end if 结束条件编译
%PLATFORM%     需要编译的平台，上面的MP就是各个小程序的意思
```

**uni-app支持的各个平台**
值 平台 参考文档

```
APP-PLUS	    5+App	HTML5+ 规范
APP-PLUS-NVUE	5+App nvue	Weex 规范
H5	            H5	 
MP-WEIXIN	    微信小程序	微信小程序
MP-ALIPAY	    支付宝小程序	支付宝小程序
MP-BAIDU	    百度小程序	百度小程序
MP-TOUTIAO	    头条小程序	头条小程序
MP-QQ	        QQ小程序	（目前仅cli版支持）
MP	            微信小程序/支付宝小程序/百度小程序/头条小程序/QQ小程序	
```



#### uni-app特色

- 条件编译
- App端的Nvue 开发
- HTML5+

#### 课程概览

- 安装并运行HbuiderX
- 使用vue-cli的方式运行项目

#### 创建项目

1. HbuilderX直接创建
2. 使用vue-cli命令创建

```
vue create -p dcloudio/uni-preset-vue project_name
```



#### 基础学习内容

- 模板语法 (和vue一样)
- 数据绑定 (和vue一样)
- 条件渲染 (和vue一样)
- 列表渲染 (和vue一样)
- 基础组件的使用(和vue一样)
- 自定义组件的使用（简单使用）(和vue一样)
- 基础API的用法（参考uni-app官网）
- 条件编译
- 页面布局



```
// 不建议？ 保留上次的变量值，不会被初始化
data：{ }
// 建议
data() {
	return {
	
	}
}
```



#### 应用生命周期

```
// 应用 初始化完成触发一次，全局值触发一次
onLaunch() {
	console.log('App Launch')
}
//应用启动的时候，或者从后台进入前台会触发
onShow() {
	console.log('App Show')
}，
// 应用从前台进入后台触发
onHide() {
	console.log('App Hide')
}
```

#### 页面生命周期

```
// 监听页面加载
onLoad() {
	console.log('page onload')
}，
// 监听页面的初次渲染完成
onReady() {
	// 如果渲染速度快，会在页面进入动画完成前触发
	console.log('page onReady')
}，
// tabbar 点击触发
onTabItemTap(e) {
	console.log(e)
}，
// 监听页面显示
onShow() {
	console.log('page onShow')
},
// 监听页面隐藏
onHide() {
	console.log('page Hide')
},
// 页面卸载
onUnload() {
	console.log('page Unload')
}
```

#### 组件生命周期

```
// 在实例化之后，数据观测(data observer) 和event、watcher 事件配置之前被调用
brforeCreate() {
	console.log('component beforeCreate')
}，
// 实例创建完成之后立即调用，挂载阶段还没开始
created() {
	console.log('component created')
},
// 挂载到实例上去之后调用
mounted() {
	console.log('component mounted')
}，
// Vue 实例销毁后调用
destroyed() {
	console.log('component destroyed')
}
```



## 2.0  基础配置

目录概述

1. components - 自定义组件的目录
2. pages - 页面存放的目录
3. staic - 静态文件资源目录
4. unpackage - 编译后的文件存放目录
5. utils - 公用的工具类
6. common - 公用的文件
7. App.vue  - 和小程序app.js 的功能一样
8. main.js - 应用入口
9. manifest.json - 项目配置
10. page.json - 页面配置
11. readme.md - 开发文档
12. uni.scss - 全局样式变量



#### 3.0 uni-app中使用sass

工具中安装插件sass



#### 4.0 uniCloud

##### 认识uniCloud

- dcloud联合阿里云和腾讯云为uni-app基于serverless模式和js编程的云开发平台

##### uniCloud的价值

- 用javascript开发前后台整体业务
- 开发成本大幅下降
- 只需专注你的业务
- 非H5，免域名使用服务器
- 对于敏捷性业务，完成不需要前后端分离

<img src="D:\gzq\uni-app\assets\Snipaste_2021-04-06_16-43-16.png" style="zoom:75%;" />



##### uniCloud构成

- 云函数
- 云数据库
- 云存储和CDN



##### 云数据库

```
//添加
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const collection = db.collection('user')
	//添加单个
	let res = await collection.add(
		{
			name:'测试'
		},
		
	)
	//添加多个
	let res = await collection.add([
		{
			name:'测试'
		},
		{
			name:'vue'
		},
	])
	//删除
	let res = await collection.doc('606ecbacc1a72600010b3109').remove()
	//更新  update 只能更新存在的记录
	let res = await collection.doc('606ecb835f1aa0000171d031').update({
		name:'react'
	})
	//更新 set 如果记录存在就更新，如果不存在就添加
 	let res = await collection.doc('606ecb835f1aa0000171d031').set({
		name:'react-test',
		type:'前端'
	})
	//查询
	const res = await collection.doc('606ec83fee6439000172bef2').get()
	const res = await collection.where({name:'react-test'}).get()
	console.log('输出 : ', JSON.stringify(res))
	
	//返回数据给客户端
	return {}
};
```



使用云存储上传文件

```
			open() {
			    //删除
				uniCloud.deleteFile({
					fileList:[
						'eb00e3a7-c55e-4ff7-bafe-476b9bd9158e'
					],
					success(res) {
						console.log(res)
					},
					fail(err) {
						console.log(err)
					}
				})
				//查询
				uniCloud.callFunction({
					name: "get_list",
					data: {
						name:'LiNing',
						age: 18
					},
					success(res) {
						console.log(res)
					},fail() {
						
					}
				})
				 let self = this
				 //选择图片
				 uni.chooseImage({
				 	count:1,
				 	success(res) {
				 		const tempFilePath = res.tempFilePaths[0]
				 		console.log('tempFilePath',tempFilePath)
				 		//上传图片
				 		uniCloud.uploadFile({
				 			cloudPath:tempFilePath,
							success(res) {
								console.log('uploadFile',res)
								console.log(res.fileID)
								console.log(self)
								self.src = tempFilePath
							},
							fail(err) {
								console.log(err)
							}
						})
				 	},
				 	fail(err) {
				 		console.log(err)
				 	}
				 })
			}
```



#### news 项目初始化（启动uniCloud）



头部搜索栏

```
/ 获取手机系统信息
let info = uni.getSystemInfoSync()
// 获取胶囊的位置
const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
```



自定义字体图标

1.插件市场（https://ext.dcloud.net.cn/plugin?id=28）

```
<uni-icons type="search" size="16" color="#999"></uni-icons>
```



切换tab时将文章列表存在对象中，做缓存，不然存在数组中切换时内容会出现闪烁的问题



#### 项目优化与平台兼容

- 当数据通过v-for动态渲染时，最好外面套个壳子不然结构会上下乱掉。



