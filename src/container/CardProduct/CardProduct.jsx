import React, { Component } from 'react';

class CardProduct extends Component {
    state = {
        keranjang: 4
    }
    
    // jika menggunakan class komponen pemanggilan harus this.props
    // newValue nilai yang di kirim dari pemanggilan method handleKeranjangChange
    handleKeranjangChange = (newValue) => {
        this.props.onKeranjangChange(newValue)
    };

    btnMinus = () => {
        // if keranjang is minus 0 not working
        if (this.state.keranjang > 0) {
            this.setState({
                keranjang: this.state.keranjang - 1
            },() => {
                this.handleKeranjangChange(this.state.keranjang);
            });
        }
    };

    btnPlus = () => {
        this.setState({
            keranjang: this.state.keranjang + 1
        }, () => {
            this.handleKeranjangChange(this.state.keranjang);
        });
    };
    render() {
        return (
            <div >
                <p>Bagian Button</p>
                <button onClick={this.btnMinus}> - (Minus)</button>
                <input type="text" value={this.state.keranjang} />
                <button onClick={this.btnPlus}> + (Plus)</button>
            </div>
        );
    }
}

export default CardProduct;