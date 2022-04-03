import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Watch.css'
import { BsCartCheck } from 'react-icons/bs'
const Watch = (props) => {
    // console.log(props)
    const { watch, handleAddCart } = props
    const { picture, name, price } = watch
    return (
        <div className='watch col-lg-4 col-sm-12'>
            <Card className='mt-5 shadow-lg'>
                <div className='d-flex justify-content-center'>
                    <Card.Img className='card-img' variant="top" src={picture} />
                </div>
                <Card.Body>
                    <Card.Title>Name : {name}</Card.Title>
                    <Card.Text>
                        Price:${price}
                    </Card.Text>
                    <Button className='rounded-pill' variant="dark" onClick={() => handleAddCart(watch)}>
                        <div className='fw-bold'>
                            Add To Cart
                            <BsCartCheck className='ms-2'></BsCartCheck>
                        </div>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Watch;