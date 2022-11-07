import React, { Component} from 'react';
import BlogPost from '../BlogPost/BlogPost';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import Product from '../Product/Product';
import {
    BrowserRouter as Router, Route, Link
} from "react-router-dom";

class Home extends React.Component {
    state = {
        showComponents: true,
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ showComponents: false });
    //     }, 8000)
    // }

    render() {
        return (
            <BrowserRouter>

                {/* <div>
                <YouTubeComp
                    time="01.01"
                    title="Belajar React JS Bagian 1"
                    desc= "32,1 views  Dec 20, 2018  ReactJS Tutorial" />
                <YouTubeComp
                    time="02.02"
                    title="Belajar React JS Bagian 2"
                    desc= "32,2 views  Dec 20, 2018  ReactJS Tutorial" />
                <YouTubeComp
                    time="03.03"
                    title="Belajar React JS Bagian 3"
                    desc= "32,3 views  Dec 20, 2018  ReactJS Tutorial" />
                <YouTubeComp
                    time="04.04"
                    title="Belajar React JS Bagian 4"
                    desc= "32,4 views  Dec 20, 2018  ReactJS Tutorial" />
                <YouTubeComp />
                <hr />
                <Product />

                <hr />
                <p>LifeCycleComp</p>
                {
                    this.state.showComponents ?
                        <LifeCycleComp /> :
                        null
                }

                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </div> */}
                <Fragment>
                    
                        <Route path='/' exact component={BlogPost} />
                        <Route path='/product' component={Product} />
                        <Route path='/lifecycle' component={LifeCycleComp} />

                </Fragment>

            </BrowserRouter>
        )
    }
};

export default Home;