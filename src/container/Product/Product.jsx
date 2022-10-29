import React, { Component, Fragment } from 'react';

class Product extends Component {
    state = {
        keranjang: 5
    }

    btnMinus = () => {
        if (this.state.keranjang > 0) {
            this.setState({
                keranjang: this.state.keranjang - 1
            });
        }
    };

    btnPlus = () => {
        this.setState({
            keranjang: this.state.keranjang + 1
        });
    };
    render() {
        return (
            <Fragment>
                <p>Bagian Keranjang</p>
                <div className="keranjang">{this.state.keranjang}</div>
                <hr />
                <p>Bagian Button</p>
                <button onClick={this.btnMinus}> - (Minus)</button>
                <input type="text" value={this.state.keranjang} />
                <button onClick={this.btnPlus}> + (Plus)</button>
            </Fragment>
        );
    }
}

export default Product;