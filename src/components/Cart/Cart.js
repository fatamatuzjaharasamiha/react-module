import React from 'react';
import Order from '../Order/Order';
import './Cart.css'
const Cart = (props) => {
    //  console.log(props)
    const { cart, randomSelect, randomWatch } = props

    return (
        <div className=' shadow-lg cart m-5 w-100'>
            <p className='fs-5 fw-bold'>Selected Watch</p>
            <h5>Select item:{cart.length}</h5>
            <div>
                {
                    cart.map(watch => <Order watch={watch} key={watch.id}></Order>)
                }
            </div>

            <div className='m-2'>
                <button className='text-light rounded-pill bg-dark' onClick={() => randomSelect(cart)}>CHOOSE 1 FOR ME</button>
            </div>
            <div className='m-3'>
                <button className='text-light rounded-pill bg-dark' onClick={props.handleRemoveCart}>CHOOSE AGAIN</button>
            </div>
            <h4 className='text-primary'>{randomWatch.name}</h4>


        </div>
    );
};

export default Cart;