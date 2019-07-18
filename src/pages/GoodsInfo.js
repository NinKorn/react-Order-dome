import React,{Component} from 'react';
import axios from '../httpConfig/http';
import Shopcar from '../components/Shopcar'
import '../assets/css/goodsInfo.scss'
class GoodsInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            params:{},
            goodsInfoList:{}
         };
    }
    componentDidMount(){
        this.getParams();
    }
    // 获取路由参数并获取数据
    getParams=()=>{
        this.setState({
            params:this.props.match.params
        });
        // 获取数据
        axios.get(`productcontent?id=${this.props.match.params.id}`).then(res =>{
            console.log(res.data.result[0]);
            this.setState({
                goodsInfoList:res.data.result[0]
            })
        })
    }
    render() {
        return (
            <div className="goods-info">
                <div className="img">
                    <img src={`http://a.itying.com/${this.state.goodsInfoList.img_url}`}/>
                    <div className="title-box">
                        <p className="title">
                            {this.state.goodsInfoList.title}
                        </p>
                        <p className="price">{this.state.goodsInfoList.price}元/份</p>
                    </div>
                </div>
                <div className="info">
                    <h2>商品详情</h2>
                    <div className="info-p" dangerouslySetInnerHTML={{ __html: this.state.goodsInfoList.content }}>
                    </div>
                </div>
                <Shopcar></Shopcar>
            </div>
        );
    }
}

export default GoodsInfo;