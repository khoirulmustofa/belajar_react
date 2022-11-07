import React, { Component, Fragment } from "react";
import {
    BrowserRouter,
    Route,
    Routes,
    Link
} from "react-router-dom";
import BlogPost from "../BlogPost/BlogPost";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import Product from "../Product/Product";

class ReactRouter extends Component {
    state = {}
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">BlogPost</Link>
                        </li>
                        <li>
                            <Link to="/product">Product</Link>
                        </li>
                        <li>
                            <Link to="/lifecycle">LifeCycleComp</Link>
                        </li>
                    </ul>

                    <hr />



                    <Routes>
                        <Fragment>
                        <Route path="/" exact component={BlogPost}>
                        </Route>
                        <Route path="/product" component={Product}>
                        </Route>
                        <Route path="/lifecycle" component={LifeCycleComp}>
                        </Route>
                        </Fragment>
                        
                    </Routes>

                </div>
            </BrowserRouter>
        );
    }
}

export default ReactRouter;