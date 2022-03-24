import React, { useEffect, useState } from "react";
import { useHistory, useParams} from "react-router-dom";
import axios from 'axios';


const Update = (props) => {
    const {_id} = useParams();

    const [form,setForm] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + _id)
            .then(res => {
                console.log(res)
                setForm(res.data)
            })
            .catch(err => {
                console.log(err.response)
            })
    }, [_id])

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

        axios.patch("http://localhost:8000/api/authors/update/" + _id, form)
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
            <h1>Update Author</h1>
            <form className="w-75 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group my-3">
                    <label htmlFor="title" className="mx-2">Author's Full Name</label>
                    <input type="text" name="name" className="form-control" onChange={onChangeHandler} value={form.name}/>
                    <span className="alert-danger">{error.name && error.name.message}</span>
                </div>

                <input type="submit" className="btn btn-success btn-lg my-3"/>
            </form>
        </div>
    )
}

export default Update