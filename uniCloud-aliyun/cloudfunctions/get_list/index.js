'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {
		name,
		page = 1,
		pageSize = 10
	} = event
	let matchObj = {}
	if (name !== '全部') {
		matchObj = {
			classify: name
		}
	}


	//聚合：更精细化的去处理数据 求和、分组、指定哪些字段
	const list = await db.collection('article').aggregate().match(matchObj).project({
		content: false
	}).skip(pageSize * (page - 1)).limit(pageSize).end()
	//接受分类，通过分类去筛选数据
	// const list = await db.collection('article').field({
	// 	//true 只返回这个字段， false不返回这个字段
	// 	content:false
	// }).get()

	//返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data: list.data
	}
};
