import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'
import materialSearch from './images/materialSearch-icon.png'
import drop from './images/drop-up-button.png'
import FormData from './FormData'
import { DownOutlined } from '@ant-design/icons';
export default class App extends React.Component {
	render(){
		return(
   		<div>
			<div className="allMaterial-nav-wrapper talkMore">
			            <ul className="allMaterial-nav">
			                <li>客户资料</li>
			                <li>快捷回复</li>
			                <li className="active">存量运营</li>
			                <li>素材中心</li>
			                <div className="clearfix"></div>
			            </ul>
			 </div>
			       
	        <div className="allMaterial-search-wrapper">
	            <div className="allMaterial-search">
	                <img src={materialSearch} alt="" />
	                <input type="text" placeholder="搜索用户" />
	            </div>
	        </div>
	      
	        <div className="stockOperationSelect-wrapper">
	            <ul className="stockOperationSelect">
	           
	                <li>
	                    入群方式
	                    <img src={drop} alt="" />
	                </li>
	                <div className="clearfix"></div>
	            </ul>
	        </div>
	        <FormData />
   
   		</div>
        

		)
	}

}
