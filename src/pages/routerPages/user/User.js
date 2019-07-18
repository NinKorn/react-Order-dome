import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
class user extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.getGoodsList();
    }
    getGoodsList = () => {
        console.log(this.props.routes);
    }
    render() {
        return (
            <div className="user">
                <div className="sider">
                    <div>
                        <Link to='/user/'>用户信息</Link>
                    </div>
                    <div>
                        <Link to='/user/useradd'>添加用户</Link>
                    </div>
                </div>
                <div className="main">
                    {this.props.routes.map((route, key) => {
                        if (route.exact) {
                            return (
                                <Route
                                    exact
                                    key={key}
                                    path={route.path}
                                    component={route.component} />)
                        }else {
                            return (
                                <Route
                                    key={key}
                                    path={route.path}
                                    component={route.component} />)
                        }

                    }
                    )}
                </div>
            </div>
        );
    }
}

export default user;