import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import Form from './Form';

const Create = (props) => {
    const { id } = useParams(); 
    const [name, setName] = useState("");
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    useEffect( () => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res => {
            setName(res.data.name);
            setLoaded(true);
        })
        .catch(err => console.log(err));
    }, []);

    const CreateAuthor = (author) => {
        console.log(author);
        axios.post('http://localhost:8000/api/author', {
            name: author,  
        })
            .then(res => {
                console.log(res);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch((err) => {
                const errorResponse = err.response.data.error.errors;
                console.log('ERROR', errorResponse.errors);
                const errorArray = [];
                    for (let key of Object.keys(errorResponse)) {
                        errorArray.push(errorResponse[key].message)
                    }
                    setErrors(errorArray)
                    console.log('errors', errors);
                })
    }
    return (
        <div>
            <h1>Create an Author</h1>
            { errors ? errors.map( (err, indx) => <p key={indx}>{err}</p>): <p></p>}
            <Form initialName = "" onSubmitProps= { CreateAuthor } errors = {errors}  />
        </div>
    )
}

export default Create; 