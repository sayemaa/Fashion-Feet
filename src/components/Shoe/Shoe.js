import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Shoe = ({ shoe, handleAddToCart }) => {
    // console.log(props);
    const { name, price, img } = shoe;
    return (
        <div>
            <Card className="mb-3 border-0 shadow rounded pb-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    <Button onClick={() => handleAddToCart(shoe)} variant="btn btn-outline-dark">
                        Add To Cart
                        <FontAwesomeIcon className="ms-2" icon={faShoppingCart}></FontAwesomeIcon>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Shoe;