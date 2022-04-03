import React from 'react';

const Order = (props) => {
    console.log(props.watch)
    const { name, picture } = props.watch
    return (
        <div className='fw-bold'>
            {/* Name : {props.watch.name} */}
            
            <img src={picture} className='w-25' alt="" />
            name:{name}
        </div>
    );
};

export default Order;