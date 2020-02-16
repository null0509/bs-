/*
包含n个reducer函数: 根据老的state和指定的action返回一个新的state
 */
import { combineReducers } from 'redux'

function xxx(state = 0, action) {
  return state;
}
function yyy(state = 0, action) {
  return state;
}

export default combineReducers({
  xxx,
  yyy
})
//向外暴露的状态的结构：{xxx:o,yyy:0}
