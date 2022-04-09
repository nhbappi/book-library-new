import React from 'react';
import { Row } from 'react-bootstrap';
import useBook from '../../Hook/useBook';
import Book from '../Book/Book';


const Books = () => {
    const [books] = useBook();
    return (
        <div>
            <h4 className='mt-5 text-center'>Popular Books</h4>
            <h1 className='fw-bold text-center'>Books is the pillar of success</h1>
            <Row xs={1} md={3} className={'g-4'}>

                {
                    books.map(book => <Book
                    key={book.id}
                    book={book}
                    
                    ></Book>
                        
                        )
                }
            </Row>
        </div>
    );
};

export default Books;