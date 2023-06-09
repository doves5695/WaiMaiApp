/*
* 使用mockjs提供mock数据接口
* */

import Mock from 'mockjs'
import data from './data.json'

// 返回foods的接口
Mock.mock('/foods', {code: 0, data: data.foods})
// 返回ratings的接口
Mock.mock('/ratings', {code: 0, data: data.ratings})
// 返回info的接口
Mock.mock('/info', {code: 0, data: data.info})

// export default   不需要暴露任何数据,只需要保证能执行即可
