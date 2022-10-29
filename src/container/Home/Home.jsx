import React from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product';

class Home extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
};

export default Home;