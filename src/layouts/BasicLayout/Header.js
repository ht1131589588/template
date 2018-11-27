import React, { Component } from "react";
import { connect } from 'dva';
import { Popover, Icon } from 'antd';
import styles from '../index.less';
import ChangePassModal from "./ChangePassModal";

class Header extends Component {
  state = {
    mode: "expend",
    changePassShow: false,
  }

  loginOutAction = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/signout'
    });
  }
  changePass = () => {
    this.setState({
      changePassShow: true,
    });
  }
  handleOk = (values) => {
    console.log(values)
    this.setState({
        changePassShow: false,
    });
  }
  handleCancel = () => {
    this.setState({
      changePassShow: false,
    });
  }
  render() {
    const content = (<div>
      <p><a onClick={this.changePass.bind(this)}><Icon type="form" theme="outlined" style={{ marginRight: 5 }} />修改密码</a></p>
      <p style={{ marginBottom: 0 }}><a onClick={this.loginOutAction.bind(this)}><Icon type="poweroff" theme="outlined" style={{ marginRight: 5 }} />退出登陆</a></p>
    </div>);
    const { name } = this.props.userInfo;
    return (
      <header className={styles.mainHeader}>
        <nav className={styles.navbar}>
          <div className={styles.navbarTitle}>
            大数据应用系统
          </div>
          <div style={{ float: 'right' }}>
            <Popover placement="bottom" content={content}>
              <a className={styles.navbarRight}>
                { name }
                <span style={{ marginLeft: '5px' }}>
                  <Icon type="setting" theme="outlined" style={{fontSize:'18px'}} />
                </span>
              </a>
            </Popover>
          </div>
        </nav>
        {
            this.state.changePassShow ?(
                <ChangePassModal
                    handleOk={this.handleOk}
                    handleCancel={this.handleCancel}
                />
            ):null
        }
      </header>
    );
  }
}

export default connect((state)=>({
  userInfo: state.global.userInfo
}))(Header);
