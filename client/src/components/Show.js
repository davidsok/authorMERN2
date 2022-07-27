import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link} from "react-router-dom";

const Show = (props) => {
    const { id } = useParams(); 
    const [name, setName] = useState("");
    useEffect( () => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res => {
            setName(res.data.name);
        })
        .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <h1>Deatailed Information of Author</h1>
            <p>Author's Name: {name}</p>
            <Link to={'/'}>Back to All Authors</Link>
        </div>
    )
}

export default Show;