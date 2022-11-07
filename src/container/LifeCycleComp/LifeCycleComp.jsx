import React, { Component, Fragment } from 'react'

class LifeCycleComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount')
        // setTimeout(() => {
        //     this.setState({
        //         counter: 2
        //     })
        // },3000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group('shouldComponentUpdate');
        console.log('nextProps :', nextProps);
        console.log('nextState :', nextState);
        console.log('this state :', this.state.counter);
        console.groupEnd();
        if (nextState.counter  > 4) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    changeCount = () => {
         this.setState({
            counter: this.state.counter + 1,
         });
    };

    render() {
        console.log('render')
        return (
           <Fragment>
             <div>
                <button onClick={this.changeCount}>Component Button {this.state.counter}</button>
            </div>
           </Fragment>
        );
    }
}

export default LifeCycleComp;