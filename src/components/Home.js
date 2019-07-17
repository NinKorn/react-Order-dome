import React,{Component} from 'react';
import axios from '../httpConfig/http';
import '../assets/css/home.scss'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         };
    }
    componentDidMount(){
        this.getGoodsList();
    }
    getGoodsList=()=>{
        axios.get('/productlist').then(res => {
            console.log(res.data.result)
            this.setState({
                list:res.data.result
            })
        })
    }
    render() {
        return (
            <div className="home">
                <h2>点餐平台</h2>
                <div className="goods">
                    <div className="goods-list">
                        <div className="good-title">精选热菜</div>
                        <div className="good-box">
                            <div className="goods-box-list">
                                <img src={require('../assets/img/1.jpg')} />
                                <div className="goods-info">
                                    <p className="goods-info-title">xxx</p>
                                    <p className="goods-info-price">￥20</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;