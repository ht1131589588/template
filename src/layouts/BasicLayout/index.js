import React from 'react';
import withRouter from 'umi/withRouter';
import { Layout } from 'antd';
import HeaderComponent from './Header';
import LeftComponent from './left';
const { Header, Footer, Sider, Content } = Layout;

function BasicLayout({ children, location }) {
  return (
    <Layout>
      <Header style={{height:80}}>
        <HeaderComponent location={location} />
      </Header>
      <Layout>
          <Sider style={{overflowY:'auto',maxHeight: document.body.clientHeight - 80}}>
              <LeftComponent/>
          </Sider>
          <Content style={{overflowY:'auto',height: document.body.clientHeight - 80}}>
            {children}
            <Footer></Footer>
          </Content>
      </Layout>
    </Layout>
  );
}

export default withRouter(BasicLayout);
