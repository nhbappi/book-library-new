import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Book.css'

const Book = (props) => {
    const{name, image, author, publish } = props.book;
    return (
        <div className='container'>
        <Col>
                        <Card className='m-4 card-section'>
                            <Card.Img className="review-image mx-auto mt-5 img-fluid" src={image} />
                            <Card.Body>
                            <Card.Title><h4 className='text-center'>Name: {name}</h4></Card.Title>
                            <Card.Text>
                            <h5 className='text-center reviews'>Author: {author}</h5>
                            <p className='text-center rating'>Published: {publish}</p>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
        </div>
    );
};

export default Book;