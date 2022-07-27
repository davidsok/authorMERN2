//Main home page that we see and updates front and back end
import React, {useState, useEffect} from "react";
import axios from 'axios';
// import Form from '../components/Form';
import AuthorList  from '../components/AuthorList';
import { Link } from "react-router-dom";

const Home = (props) =>{
    const [loaded, setLoaded] = useState(false); 
    // const [errors, setErrors] = useState();
    const [authorList, setAuthorList] = useState([]);
    
    //Get Authors List
    useEffect(()=>{
        axios.get("http://localhost:8000/api/author")
        .then((res)=>{
            // console.log(res.data);
            setAuthorList(res.data);
            setLoaded(true);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    
    
    //Delete Button
    const removeFromDom = id => {
        setAuthorList(authorList.filter(AuthorList => AuthorList._id !== id));
    }

    return(
        <>

        {/* If the author list loads it will display and won't show   */}
        { loaded && <AuthorList authorList = {authorList} removeFromDom={removeFromDom} setAuthorList = {setAuthorList} /> }
        <hr/>
        <Link to="/author/create">Create Author</Link>
        </>
    )
}

export default Home;