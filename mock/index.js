import Mock from 'mockjs';

//用户登录
Mock.mock('/bigdata/user/login',{
    success: true,
    "msg": "登录成功",
    "obj": {
        "accountNonExpired": true,
        "accountNonLocked": true,
        "authorities": [],
        "credentialsNonExpired": true,
        "enabled": true,
        "id": 1,
        "menus": [
            {
                "iconSelectedUrl": "n_ico2.png",
                "iconUrl": "n_ico2.png",
                "id": 150,
                "name": "综合画像",
                "parentId": -1,
                "seq": 11,
                "subMenus": [
                    {
                        "iconSelectedUrl": "",
                        "iconUrl": "",
                        "id": 151,
                        "name": "群体画像",
                        "parentId": 150,
                        "seq": 12,
                        "subMenus": [],
                        "tags": [],
                        "url": "/bigdata/labelbehavior/group"
                    },
                    {
                        "iconSelectedUrl": "",
                        "iconUrl": "",
                        "id": 152,
                        "name": "个人画像",
                        "parentId": 150,
                        "seq": 13,
                        "subMenus": [],
                        "tags": [],
                        "url": "/bigdata/labelbehavior/personal"
                    }
                ],
                "tags": [],
                "url": ""
            },
            {
                "iconSelectedUrl": "n_ico3.png",
                "iconUrl": "n_ico3.png",
                "id": 2,
                "name": "行为轨迹",
                "parentId": -1,
                "seq": 14,
                "subMenus": [
                    {
                        "iconSelectedUrl": "",
                        "iconUrl": "",
                        "id": 3,
                        "name": "重点人群轨迹",
                        "parentId": 2,
                        "seq": 30,
                        "subMenus": [],
                        "tags": [
                            "老师",
                            "学生"
                        ],
                        "url": "/bigdata/behavior/focusgroups"
                    },
                    {
                        "iconSelectedUrl": "",
                        "iconUrl": "",
                        "id": 4,
                        "name": "上网轨迹",
                        "parentId": 2,
                        "seq": 58,
                        "subMenus": [],
                        "tags": [],
                        "url": "/bigdata/behavior/internet"
                    },
                    {
                        "iconSelectedUrl": "",
                        "iconUrl": "",
                        "id": 153,
                        "name": "校园热力分析",
                        "parentId": 2,
                        "seq": 59,
                        "subMenus": [],
                        "tags": [],
                        "url": "/bigdata/behavior/hotmap"
                    }
                ],
                "tags": [],
                "url": ""
            },
            {
                "iconSelectedUrl": "n_ico4.png",
                "iconUrl": "n_ico4.png",
                "id": 21,
                "name": "综合预警",
                "parentId": -1,
                "seq": 200,
                "subMenus": [
                    {
                        "iconSelectedUrl": "",
                        "iconUrl": "",
                        "id": 154,
                        "name": "学业预警",
                        "parentId": 21,
                        "seq": 201,
                        "subMenus": [],
                        "tags": [],
                        "url": "/bigdata/prewarn/schoolwork"
                    },
                    {
                        "iconSelectedUrl": "",
                        "iconUrl": "",
                        "id": 155,
                        "name": "消费预警",
                        "parentId": 21,
                        "seq": 202,
                        "subMenus": [],
                        "tags": [],
                        "url": "/bigdata/prewarn/consumption"
                    },
                    {
                        "iconSelectedUrl": "",
                        "iconUrl": "",
                        "id": 156,
                        "name": "网络预警",
                        "parentId": 21,
                        "seq": 204,
                        "subMenus": [],
                        "tags": [],
                        "url": "/bigdata/prewarn/network"
                    },
                    {
                        "iconSelectedUrl": "",
                        "iconUrl": "",
                        "id": 157,
                        "name": "失联预警",
                        "parentId": 21,
                        "seq": 205,
                        "subMenus": [],
                        "tags": [],
                        "url": "/bigdata/prewarn/loss"
                    },
                    {
                        "iconSelectedUrl": "",
                        "iconUrl": "",
                        "id": 158,
                        "name": "贫困",
                        "parentId": 21,
                        "seq": 206,
                        "subMenus": [],
                        "tags": [],
                        "url": "/bigdata/prewarn/poverty"
                    },
                    {
                        "iconSelectedUrl": "",
                        "iconUrl": "",
                        "id": 159,
                        "name": "预警管理",
                        "parentId": 21,
                        "seq": 207,
                        "subMenus": [],
                        "tags": [],
                        "url": "/bigdata/prewarn/manager"
                    }
                ],
                "tags": [],
                "url": ""
            },
            {
                "iconSelectedUrl": "",
                "iconUrl": "zhinengbi.png",
                "id": 5,
                "name": "智能BI",
                "parentId": -1,
                "seq": 244,
                "subMenus": [
                    {
                        "iconSelectedUrl": "shujuyuan2.png",
                        "iconUrl": "shujuyuan.png",
                        "id": 6,
                        "name": "数据源管理",
                        "parentId": 5,
                        "seq": 249,
                        "subMenus": [],
                        "tags": [],
                        "url": "/bi/datasource/config"
                    },
                    {
                        "iconSelectedUrl": "shujuji2.png",
                        "iconUrl": "shujuji.png",
                        "id": 7,
                        "name": "数据集管理",
                        "parentId": 5,
                        "seq": 251,
                        "subMenus": [],
                        "tags": [],
                        "url": "/bi/dataset/config"
                    },
                    {
                        "iconSelectedUrl": "tubiaosheji2.png",
                        "iconUrl": "tubiaosheji.png",
                        "id": 8,
                        "name": "图表设计",
                        "parentId": 5,
                        "seq": 252,
                        "subMenus": [],
                        "tags": [],
                        "url": "/bi/widget/config"
                    },
                    {
                        "iconSelectedUrl": "kanbansheji2.png",
                        "iconUrl": "kanbansheji.png",
                        "id": 9,
                        "name": "看板设计",
                        "parentId": 5,
                        "seq": 253,
                        "subMenus": [],
                        "tags": [],
                        "url": "/bi/board/config"
                    }
                ],
                "tags": [],
                "url": ""
            },
            {
                "iconSelectedUrl": "xitongguanli2.png",
                "iconUrl": "xitongguanli.png",
                "id": 10,
                "name": "系统管理",
                "parentId": -1,
                "seq": 257,
                "subMenus": [
                    {
                        "iconSelectedUrl": "",
                        "iconUrl": "",
                        "id": 25,
                        "name": "账户管理",
                        "parentId": 10,
                        "seq": 262,
                        "subMenus": [],
                        "tags": [],
                        "url": "/sys/user/manage"
                    },
                    {
                        "iconSelectedUrl": "",
                        "iconUrl": "",
                        "id": 24,
                        "name": "菜单管理",
                        "parentId": 10,
                        "seq": 263,
                        "subMenus": [],
                        "tags": [],
                        "url": "/sys/menu/manage"
                    },
                    {
                        "iconSelectedUrl": "",
                        "iconUrl": "",
                        "id": 26,
                        "name": "权限配置",
                        "parentId": 10,
                        "seq": 264,
                        "subMenus": [],
                        "tags": [],
                        "url": "/sys/permission/manage"
                    }
                ],
                "tags": [],
                "url": ""
            }
        ],
        "name": "Administrator",
        "sex": 1,
        "userId": "",
        "username": "admin"
    },
})