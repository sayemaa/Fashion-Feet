import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Shoe from '../Shoe/Shoe';
import './Shop.css'

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
        setCart(newCart);
    }

    return (
        <div>
            <Container className="my-4" >
                <Row className="mt-4">
                    <Col sm={9}>
                        <h3>Women's Shoes</h3>
                        <div className="shoes-container mt-4">
                            {
                                shoes.map(shoe => <Shoe key={shoe.id} shoe={shoe} handleAddToCart={handleAddToCart}
                                ></Shoe>)
                            }
                        </div>
                    </Col>
                    <Col sm={3}>
                        <h3>Cart</h3>
                        <div className='mt-4'>
                            {
                                carts.map(cart => <Cart cart={cart} key={cart.id}></Cart>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Shop;