/*用户注册的路由组件 */

import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile'
import Logo from '../../components/logo/logo'
const ListItem = List.Item

export default class Register extends Component {
  state = {
    username: '', //用户名
    password: '', //密码
    password2: '', //确认密码
    type: 'laoban' //用户类型
  }
  register = () => {
    console.log(this.state)
  }
  handleChange = (name, val) => {
    this.setState({
      [name]: val
    })
  }
  toLogin = () => {
    this.props.history.replace('/login')
  }

  render() {
    const { type } = this.state
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
              type="password"
              onChange={val => {
                this.handleChange('password', val)
              }}
            >
              密&nbsp;&nbsp;&nbsp;码：
            </InputItem>
            <WhiteSpace size="lg" />
            <InputItem
              placeholder="请输入确认密码"
              type="password"
              onChange={val => {
                this.handleChange('password2', val)
              }}
            >
              确认密码：
            </InputItem>
            <WhiteSpace size="lg" />
            <ListItem>
              <span>用户类型：</span>
              &nbsp;&nbsp;&nbsp;
              <Radio
                checked={type === 'dashen'}
                onChange={() => this.handleChange('type', 'dashen')}
              >
                大神
              </Radio>
              &nbsp;&nbsp;&nbsp;
              <Radio
                checked={type === 'laoban'}
                onChange={() => this.handleChange('type', 'laoban')}
              >
                老板
              </Radio>
            </ListItem>
            <WhiteSpace size="lg" />
            <Button type="primary" onClick={this.register}>
              注&nbsp;&nbsp;&nbsp;册
            </Button>
            <WhiteSpace size="lg" />
            <Button onClick={this.toLogin}>已有账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
