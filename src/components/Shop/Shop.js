import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Watch from '../Watch/Watch';
import './Shop.css';
const Shop = () => {
    const [watches, setWatches] = useState([])
    // console.log(watches)
    const [cart, setCart] = useState([])
    const [randomWatch, setRandomWatch] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])
    const handleAddCart = (watch) => {
        // console.log(watch)
        const newCart = [...cart, watch]
        setCart(newCart)
    }
    const handleRemoveCart = () => {
        console.log('clicked')
        const remove = []
        setCart(remove)
    }
    const randomSelect = (cart) => {
        const random = Math.floor(Math.random() * cart.length)
        const randomAdd = (cart[random])
        setRandomWatch(randomAdd)
    }
    return (
        <div className='shopping-container row container mx-auto'>
            <div className='col-9'>
                <div className="watch-container row">
                    <h1>Watch Buyer</h1>
                    <h4>Choose your watch</h4>
                    {
                        watches.map(watch => <Watch key={watch.id} watch={watch} handleAddCart={handleAddCart}></Watch>)
                    }
                </div>
            </div>
            <div className="cart-container col-3">
                <Cart cart={cart}
                    handleRemoveCart={handleRemoveCart}
                    randomSelect={randomSelect}
                    randomWatch={randomWatch}
                ></Cart>
            </div>
        </div>
    );
};
export default Shop;