import React, { useState } from "react";
import {Link, useHistory} from "react-router-dom";
import axios from 'axios';

const Create = (props) => {
        const [form,setForm] = useState({
            name: "",
        })
    
        const [error,setError] = useState({});
        const history = useHistory();
    
        const onChangeHandler = (event) => {
            setForm({
                ...form,
                [event.target.name]: event.target.value
            })
        }
    
        const onSubmitHandler = (event) => {
            event.preventDefault();
    
            axios.post("http://localhost:8000/api/authors/create", form)
                .then(res=>{
                    console.log(res)
                    history.push("/")
                })
                .catch(err=>{
                    console.log(err.response);
                    setError(err.response.data.err.errors)
                })
        }
    
    
        return(
            <div>
                <h1>Create an Author</h1>
                <form className="w-75 mx-auto" onSubmit={onSubmitHandler}>
                    <div className="form-group my-3">
                        <label htmlFor="name" className="mx-2">Author's Full Name </label>
                        <input type="text" name="name" className="form-control" onChange={onChangeHandler}/>
                        <span className="alert-danger">{error.name && error.name.message}</span>
                    </div>


                    <input type="submit" className="btn btn-success btn-lg my-3"/>
                </form>
            </div>
    )
}

export default Create