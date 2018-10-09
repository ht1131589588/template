import React from 'react';
import { Icon } from 'antd';

const config =  [
    {
        name: 'Dashboard',
        icon: <i className="iconfont icon-shujumofang" style={{marginRight: 8}}></i>,
        subMenus:[{
            name: '分析页',
            url: '/dashboard/analysis'
        },{
            name: '关系页',
            url: '/dashboard/relation'
        }]
    },
    {
        name: '地图',
        icon: <i className="iconfont icon-guiji" style={{marginRight: 8}}></i>,
        subMenus:[{
            name: '百度地图',
            url:'/map/baidumaps'
        },{
            name: 'bmap',
            url:'/map/bmap'
        }]
    },
    {
        name: '其他组件',
        icon: <Icon type="radar-chart" theme="outlined" />,
        subMenus:[{
            name: 'React新特性练习',
            url:'/others/reacttest'
        },{
            name: '弹框',
            url:'/others/modal'
        },{
            name: '空数据处理',
            url:'/others/nodata'
        },
        {
            name: 'Table转Excel',
            url:'/others/tabletoexcel'
        }]
    },
    // {
    //     name: '异常页',
    //     icon: <Icon type="exclamation-circle" theme="outlined" />,
    //     subMenus:[{
    //         name: '403',
    //         url:'/error/403'
    //     },{
    //         name: '404',
    //         url:'/error/404'
    //     },{
    //         name: '500',
    //         url:'/error/500'
    //     }]
    // },
    // {
    //     name: '综合预警',
    //     icon: <i className="iconfont icon-yujing" style={{marginRight: 8}}></i>,
    //     url:'/comprehensivewarning'
    // },
    {
        name: '权限管理',
        icon: <i className="iconfont icon-quanxianguanli" style={{marginRight: 8}}></i>,
        subMenus:[
        	{
	            name: '账户管理',
	            url:'/accessmanage/account'
	        },
	        {
	            name: '菜单管理',
	            url:'/accessmanage/menu'
	        },
	        {
	            name: '权限配置',
	            url:'/accessmanage/authority'
	        }
        ]
    },
]

export default config;