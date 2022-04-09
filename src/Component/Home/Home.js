import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import useBook from '../../Hook/useBook';
import Book from '../Book/Book';
import Books from '../Books/Books';
import './Home.css'

const Home = () => {
  const [books] = useBook()
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 img-1"
      src="https://wallpaperaccess.com/full/253451.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-2"
      src="https://wallpapermemory.com/uploads/444/library-background-hd-2048x1152-74766.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-3"
      src="https://picstatio.com/large/qao5ki/books-library.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div>
            <h4 className='mt-5 text-center'>Popular Books</h4>
            <h1 className='fw-bold text-center'>Books is the pillar of success</h1>
            <Row xs={1} md={3} className={'g-4'}>

                {
                    books.slice(0,6).map(book => <Book
                    key={book.id}
                    book={book}
                    
                    ></Book>
                        
                        )
                }
            </Row>
        </div>


        </div>
    );
};

export default Home;