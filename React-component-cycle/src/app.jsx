/*
 * @Author: KMKNKK 
 * @Date: 2018-03-16 22:16:14 
 * @Last Modified by: KMKNKK
 * @Last Modified time: 2018-03-18 11:02:59
 */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class App extends React.Component {
    // 构造函数
    constructor(props){
        super(props);
        this.state = ({
            data: 'Old State'
        })
        alert('开始初始化：')
        alert('constructor');
    }
    // 组件将要挂载
    componentWillMount(){
        alert('componentWillMount');
    }
    // 组件挂载完成
    componentDidMount(){
        alert('componentDidMount');
    }
    // 组件接收父组件props
    componentWillReceiveProps(){
        alert('componentWillReceiveProps');
    }
    // 子组件是否应该更新
    shouldComponentUpdate(){
        alert('shouldComponentUpdate()');
        return true;
    }
    // 组件将要更新
    componentWillUpdate(){
        alert('componentWillUpdata');
    }
    // 组件更新完成
    componentDidUpdate(){
        alert('componentDidUpdate');
    }
    // 删除组件
    componentWillUnmount(){
        alert('componentWillUnmount');
    }
    handleClick(){
        alert('下面开始更新子组件：')
        this.setState({
            data: 'New State'
        })
    }
    render(){
        alert('render');
        return(
            <div>
            <p>渲染完成：Hello React! </p>
            <p>子组件：{this.state.data}</p>
            <p>父组件数据：{this.props.data}</p>
            <button className="btn btn-primary" onClick={()=>{this.handleClick()}}>更新子组件</button>
            </div>
        );
    }
}

class Receive extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: 'Old Props',
            hasChild: true
        }
    }
    onPropsChange(){
        alert("下面开始更新父组件传入的数据：");
        this.setState({
            data: 'New Props'
        })
    }
    onDeleteChild(){
        alert("下面删除子组件：")
        this.setState({
            hasChild: false
        })
    }
    onRecoverChild(){
        alert("下面恢复子组件：")
        this.setState({
            hasChild: true
        })
    }
    render(){
        return(
        
        <div >
            <div id="flex">
            <h2>组件生命周期</h2>
            </div>
            {
                this.state.hasChild ? <App data={this.state.data}/> : null
             }
            <button className="btn btn-primary" onClick={()=>{this.onPropsChange()}}>更新父组件数据</button>
            <button className="btn btn-danger"  onClick={()=>{this.onDeleteChild()}}>删除子组件</button>
            <button className="btn btn-success" onClick={()=>{this.onRecoverChild()}}>恢复子组件</button>
        </div>
        );
    }
}


ReactDOM.render(
    <Receive />,
    document.getElementById('app')
);