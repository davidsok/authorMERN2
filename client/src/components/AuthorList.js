//Displays below renders data from database 
import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './Delete';

const AuthorList = (props) => {
    const {authorList, setAuthorList, removeFromDom} = props;
    // const {authorList, setAuthorList} = useState([]);

    // const deleteAuthor = (id) => {
    //     //Delete back end
    //     axios.delete(`http://localhost:8000/api/author/${id}`)
    //     //Delete front end
    //     .then((res) => {
    //         removeFromDom(id)
    //     })
    // };
        //Delete Button
    // const removeFromDom = id => {
    //     setAuthorList(authorList.filter(AuthorList => AuthorList._id !== id));
    // }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/author")
        .then((res)=>{
            console.log(res.data);
            setAuthorList(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, []);
    
    return (
            <div>
                {/* <Link to={`author/create`}>Add an Author</Link> */}
            {
                authorList.map((author, index)=>{
                return (
                <div key = {index}>
                <Link to={`/author/update/${author._id}`}>
                    <p>
                        {author.name} 
                    </p>
                </Link>
                <DeleteButton authorId = {author._id} successCallBack = {() => removeFromDom(author._id)}  />
                {/* <Link to={`/author/update/${author._id}`}>Update </Link> */}
                {/* <button onClick = {() => deleteAuthor(author._id)}>Delete</button> */}
                </div> 
                )})
            }
        </div>
    )
}

export default AuthorList;