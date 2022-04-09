import { useEffect, useState } from 'react';

const useBook = () => {
    const [books, setBooks] = useState([]);
    
    useEffect( () => {
    fetch("./books.json")
    .then(res => res.json())
    .then(data => setBooks(data));
    },[])
    return [books, setBooks];
};

export default useBook;