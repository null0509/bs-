/*用户登录的路由组件 */

import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile'
import Logo from '../../components/logo/logo'

export default class Login extends Component {
  state = {
    username: '', //用户名
    password: '' //密码
  }
  login= () => {
    console.log(this.state)
  }
  handleChange = (name, val) => {
    this.setState({
      [name]: val
    })
  }
  toRegister = () => {
    this.props.history.replace('/register')
  }
  render() {
    return (
      <div>
        <NavBar>淮&nbsp;师&nbsp;招&nbsp;聘</NavBar>
        <WhiteSpace size="xl" />
        <Logo />
        <WingBlank>
          <List>
            <WhiteSpace />
            <InputItem
              placeholder="请输入用户名"
              onChange={val => {
                this.handleChange('username', val)
              }}
            >
              用户名：
            </InputItem>
            <WhiteSpace size="lg" />
            <InputItem
              placeholder="请输入密码"
              onChange={val => {
                this.handleChange('password', val)
              }}
              type="password"
            >
              密&nbsp;&nbsp;&nbsp;码：
            </InputItem>
            <WhiteSpace size="lg" />
            <Button type="primary" onClick={this.login}>登&nbsp;&nbsp;&nbsp;录</Button>
            <WhiteSpace size="lg" />
            <Button onClick={this.toRegister}>还没有账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
