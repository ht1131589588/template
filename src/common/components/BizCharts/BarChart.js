import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from "bizcharts"
import { DataSet } from '@antv/data-set';
import NoData from '../NoData';

// 柱状图
class BarChart extends Component {
    // 第一次加载完触发事件
    onFirstLoad(ev){
        if(this.props.onFirstLoad){
            this.props.onFirstLoad(ev);
        }
    }
    // 点击事件
    onClickAction(ev){
        if(this.props.onClickAction){
            this.props.onClickAction(ev);
        }
    }
    render() {
        /**
         * 可接受参数设置
         * height  高度，默认350
         * data  数据，json格式
         * padding  设置内边距 数组格式，默认[30, 20, 60, 50]
         * noLegend  是否需要Legend，默认为false，显示Legend
         * colors  颜色设置 数组格式
         * geomType  设置Geom的type类型:
         *              interval(默认)
         *              intervalStack(层叠柱状图)
         *              intervalDodge(分组柱状图)
         *              intervalSymmetric(对称柱状图)
         * onFirstLoad  第一次加载完触发事件
         * onClickAction  点击事件
         */

        const height = this.props.height || 350; // 高度设置，默认值
        const data = this.props.data || []; // 数据
        const ds = new DataSet(); // dateset数据集方法
        const dv = ds.createView().source(data);// 数据转换
        let fields=[], nameKey; // 获取关键字
        if (data && data[0]) {
            nameKey = Object.keys(data[0])[0];// 获取json第一个对象的第一个键名称
            // 获取json对象子节点除去第一个键的其他键字段集合
            Object.keys(data[0]).forEach((item,index)=>{
                if(index!==0){
                    fields.push(item);
                }
            })
        } else {
            // 无数据时
            return (<NoData height={height} data={'nodata'}/>);
        }
        // 初始化参数
        dv.source(data).transform({
            type: 'fold',
            fields: fields.length>0?fields:['null'],
            key: 'type',
            value: 'value'
        });
        return (
            <Chart height={height} data={dv} padding={this.props.padding} forceFit
                onGetG2Instance={(ev)=>this.onFirstLoad(ev)}
                onPlotClick={(ev)=>this.onClickAction(ev)}
                >
                {this.props.transpose?<Coord transpose />:null}
                <Axis name={nameKey} />
                <Axis name="value" />
                {this.props.noLegend?null:<Legend marker={'circle'}/>}
                <Tooltip crosshairs={{type : "y"}}/>
                <Geom 
                    type={this.props.geomType || 'interval'} 
                    position={nameKey+"*value"} 
                    color={['type',this.props.colors]} 
                    adjust={[{type: 'dodge',marginRatio: 1/32}]} />
            </Chart>
        )
    }
}

export default BarChart;