import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from '../httpConfig/http';
import '../assets/css/home.scss'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        this.getGoodsList();
    }
    getGoodsList = () => {
        axios.get('/productlist').then(res => {
            console.log(res.data.result)
            this.setState({
                list: res.data.result
            })
        })
    }
    render() {
        return (
            <div className="home">
                <h2>点餐平台</h2>
                <div className="goods">
                    {
                        this.state.list.map((value) => {
                            return (
                                <div className="goods-list" key={value._id}>
                                    <div className="good-title">{value.title}</div>
                                    <div className="good-box">
                                        {
                                            value.list.map((list) => {
                                                return (
                                                    <div className="goods-box-list" key={list._id} >
                                                        <Link to={`/GoodsInfo/${list._id}`}>
                                                            <img src={`http://a.itying.com/${list.img_url}`} />
                                                            <div className="goods-info">
                                                                <p className="goods-info-title">{list.title}</p>
                                                                <p className="goods-info-price">￥{list.price}</p>
                                                            </div>
                                                        </Link>
                                                    </div>

                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;