//Form to enter in the authors 
// {} = destructing and [ ] = is used for setting state
import React, { useState } from 'react'

const Author = (props) => {
    //Using props we can update and edit 
    const { initialName, onSubmitProps, errors} = props
    const [name, setName] = useState(initialName); 
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProps(name);
        setName(initialName);
    }


    return (
        <form onSubmit={onSubmitHandler}>
        <header>Author</header>
            <div>
            {errors.name ? <span>{ errors.name.message }</span>: null}
                {/* {errors ? errors.map ((err, index) => <p key = {index} >{err}</p>):<p></p>
                } */}
                <p>
                    <label>Name</label>
                    <input type="text" value={name} name="name" onChange = {(e)=> setName(e.target.value)}/>
                </p>
            </div>
        {/* ternary or if else statement (react return statement use ternary only) */}
            <input value= "Submit" type="submit"/>
        </form>
    );
};

export default Author;