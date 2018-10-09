import React, { Component } from 'react';
import { Breadcrumb, Card, Tabs } from 'antd';
import BizChart from './BizChart'
import Progress from './Progress'

const TabPane = Tabs.TabPane;

class Analysis extends Component {
    render() {
        return (
            <div>
                <Breadcrumb  className="breadcrumb">
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>分析页</Breadcrumb.Item>
                </Breadcrumb>
                <div className="common-content">
                    <Card>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="BizChart图表" key="1">
                                <BizChart/>
                            </TabPane>
                            <TabPane tab="进度条" key="2">
                                <Progress/>
                            </TabPane>
                        </Tabs>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Analysis;