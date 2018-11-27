import React from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import BasicLayout from './BasicLayout';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

let currHref = '';

function Layout({ children, location, login, loading, dispatch }) {
  
  const href = window.location.href;    // 浏览器地址栏中地址
  if (currHref !== href) {  // currHref 和 href 不一致时说明进行了页面跳转
      NProgress.start();    // 页面开始加载时调用 start 方法
      if (!loading.global) {  // loading.global 为 false 时表示加载完毕
          NProgress.done();  // 页面请求完毕时调用 done 方法
          currHref = href;   // 将新页面的 href 值赋值给 currHref
      }
  }

  if(login){
    return (
      <LocaleProvider locale={zhCN}>
        <Switch>
          <Route path="/login" render={(props) => <Redirect to='/'/>}/>
          <Route path="/*" render={(props) => (
            <BasicLayout children={children} location={location} />
          )}/>
        </Switch>
      </LocaleProvider>
    );
  } else {
    return (
      <LocaleProvider locale={zhCN}>
        <Switch>
          <Route path="/login" render={(props) => (
            <div>
              {children}
            </div>
          )}/>
          <Route path="/*" render={(props) => <Redirect to='/login'/>}/>
        </Switch>
      </LocaleProvider>
      
    );
  }
}

function mapStateToProps(state) {
  const { login } = state.global;
  return {
    login,
    loading: state.loading
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
