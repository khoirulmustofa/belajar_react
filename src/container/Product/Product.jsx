import React, { Component, Fragment } from 'react';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
    state = {
        keranjang: 5
    }

    handleKeranjangChange = (newValue) => {
        this.setState({
            keranjang: newValue
        });
    };
    

    render() {
        return (
            <Fragment>
                <p>Bagian Keranjang</p>
                <div className="keranjang">{this.state.keranjang}</div>
                <hr />
                {/* value mendapat nilai dari anak lemparan props onKeranjangChange */}
                <CardProduct onKeranjangChange={(value) => this.handleKeranjangChange(value)} />
            </Fragment>
        );
    }
}

export default Product;