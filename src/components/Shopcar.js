import React, { Component } from 'react'
import '../assets/css/shopcar.scss'
class shopcar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
    }
    addNum = () => {

        this.setState({
            num: ++this.state.num
        })
        console.log(this.state.num);
    }
    delNum = () => {
        if (this.state.num == 0) {
            this.setState({
                num: 0
            })
        } else {
            this.setState({
                num: --this.state.num
            })
        }
        console.log(this.state.num);
    }
    render() {
        return (
            <div className="shop-car">
                <div className="title">
                    <span>数量：</span>
                </div>
                <div className="input">
                    <span onClick={this.delNum}>-</span>
                    <span>{this.state.num}</span>
                    <span onClick={this.addNum}>+</span>
                </div>
                <div className="add-car">
                    <span>加入购物车</span>
                </div>
            </div>
        );
    }
}

export default shopcar;