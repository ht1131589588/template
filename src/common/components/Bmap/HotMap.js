import React from 'react';
import NoData from '../NoData'; //暂无数据组件
import { isObjectValueEqual } from '../../../utils'
// import { postAction } from './../../../axios';
/**
 * 可接收数据
 * data  数据格式[{"lng":'12222',"lat":'2211',"count":'2212'}]
 */
let BMap = window.BMap; //  全局获取BMap
let BMapLib = window.BMapLib; // 全局获取BMapLib

class HotMap extends React.Component {
	initMap = () => {
        //无BMap时，比如无网络情况下
        if(!BMap){
            return;
        }
        if(typeof this.props.initMap === 'function'){
            let map = new BMap.Map('HotMap');
            this.props.initMap(map);
        }
    }
	makeMap = (data) => {
		//无BMap时，比如无网络情况下
        if(!BMap){
            return;
        }
		let map = new BMap.Map("HotMap");
	    let point = new BMap.Point(data[0].lng, data[0].lat);
	    map.centerAndZoom(point, 17);
	    map.enableScrollWheelZoom();
		let heatmapOverlay = new BMapLib.HeatmapOverlay({
            "radius":30,
            "gradient":{
                .1:'rgb(136, 141, 249)',
                .2:'rgb(115, 233, 250)',
                  .3:'rgb(94, 245, 67)',
                  .4:'rgb(255, 249, 11)',
                  .5:'rgb(255, 10, 0)'
            }
        });
        map.addOverlay(heatmapOverlay);
        
        let average;
		let total = 0;
		data.forEach(
			(item) => {
				total = total + (item.count - 0)
			}
		);
        average = Math.ceil(total / data.length);
        
		heatmapOverlay.setDataSet({data:data,max:average});
		heatmapOverlay.show();
	}
	
	UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.data && !isObjectValueEqual(nextProps.data,this.props.data)) {
            setTimeout(() => {
                // 根据停留点，计算移动点，最终生成所有点的百度坐标， 开始路书配置...
                this.makeMap(nextProps.data)
            },50)
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (isObjectValueEqual(nextProps.data,this.props.data)) {
            return false;
        } else {
            return true;
        }
    }
	
	componentDidMount(){
        setTimeout(() => {
            // 显示初始化地图方法
            this.initMap()
        },50)
    }
	
	render () {
        let h = document.body.clientHeight - 232;
		if (!BMap) {
			return (
                <div style={{ backgroundColor: '#fff' }}><NoData data={'nodata'} height={h}/></div>
            )
		} else{
			return (
				<div id='HotMap' style={{width: "100%", height: h}}></div>
			)
		}
	}
}

export default HotMap;

// const data = [
//     {"longitude":118.721777,"latitude":32.209229,"amount":236},
//     {"longitude":118.72369,"latitude":32.210791,"amount":16},
//     {"longitude":118.722662,"latitude":32.210581,"amount":16},
//     {"longitude":118.721642,"latitude":32.209538,"amount":660}
// ]
// let newPoints = [];
// data.forEach(
//     (item) => {
//         newPoints.push({
//             "lng":item.longitude,
//             "lat":item.latitude,
//             "count": item.amount
//         })
//     }
// );