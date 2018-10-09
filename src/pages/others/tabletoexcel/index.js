import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Breadcrumb, Card, Table, Button } from 'antd';
import ReactHTMLTableToExcel from '../../../common/components/TableToExcel';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}];


const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];

class ModalCont extends Component {
    componentDidMount() {
        const tableCon = ReactDOM.findDOMNode(this.refs['table'])
        const table = tableCon.querySelector('table')
        table.setAttribute('id', 'table-to-xls')
    }
    render() {
        return (
            <div>
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item>其他组件</Breadcrumb.Item>
                    <Breadcrumb.Item>Table转Excel</Breadcrumb.Item>
                </Breadcrumb>
                <div className="common-content">
                    <Card
                        title={'excel下载'}
                        extra={<ReactHTMLTableToExcel
                            table="table-to-xls"
                            filename="excel下载"
                            content={<Button icon={"download"} />} />}
                    >
                        <Table columns={columns} dataSource={data} ref='table' />
                    </Card>
                </div>

            </div>
        )
    }
}

export default ModalCont;