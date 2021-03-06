import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Shoe from '../Shoe/Shoe';
import './Shop.css'
import Faq from '../Faq/Faq'

const Shop = () => {
    const [shoes, setShoes] = useState([]);
    const [carts, setCart] = useState([]);

    useEffect(() => {
        fetch('shoes.json')
            .then(res => res.json())
            .then(data => setShoes(data))
    }, [])

    const handleAddToCart = (shoe) => {
        const newCart = [...carts, shoe]
        if (newCart.length <= 4) {
            setCart(newCart);
        }
        document.getElementById('cart-container').style.display = "block"
        document.getElementById('choose-one-btn').style.display = "block"
        document.getElementById('choose-again-btn').style.display = "block"

    }

    const handleChooseOne = (carts) => {
        // console.log(carts)
        const arrayId = [];
        let randomChoose;
        for (const cart of carts) {
            // console.log(cart)
            arrayId.push(parseInt(cart.id));
            randomChoose = arrayId[Math.floor(Math.random() * arrayId.length)];
            if (randomChoose === parseInt(cart.id)) {
                setCart([cart]);
            }
        }
    }

    const handleChooseAgain = () => {
        setCart([]);
        document.getElementById('choose-one-btn').style.display = "none"
        document.getElementById('choose-again-btn').style.display = "none"
    }

    return (
        <div>
            <Container className="my-4" >
                <Row className="mt-4 shop-container">
                    <Col sm={9} className='shoes-container'>
                        <h3>Women's Shoes</h3>
                        <div className="shoes mt-4">
                            {
                                shoes.map(shoe => <Shoe key={shoe.id} shoe={shoe} handleAddToCart={handleAddToCart}
                                ></Shoe>)
                            }
                        </div>
                    </Col>
                    <Col sm={3} id="cart-container" className='cart-container mb-5'>
                        <h3>Cart</h3>
                        <div className=' mt-4'>
                            {
                                carts.map(cart => <Cart cart={cart} key={cart.id}></Cart>)
                            }
                            <div className='mt-4 d-flex justify-content-center'>
                                <Button onClick={() => handleChooseOne(carts)} id="choose-one-btn" className='me-2' variant="btn btn-outline-dark">Choose One</Button>
                                <Button onClick={handleChooseAgain} id="choose-again-btn" variant="btn btn-outline-dark">Choose Again</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Faq></Faq>
            </Container>
        </div>
    );
};

export default Shop;