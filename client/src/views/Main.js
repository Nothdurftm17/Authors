import { useEffect, useState } from "react"
import { Link} from "react-router-dom"
import axios from "axios"

const Main = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/findAll")
            .then(res => {
                console.log(res)
                setAuthors(res.data)
            })
            .catch(err => {
                console.log(err.response)
            })
    }, [])

    const onDeleteHandler = (_id, arrIndex) => {
        console.log('deleting' + arrIndex)
        axios.delete(`http://localhost:8000/api/authors/${_id}`)
            .then(res=>{
                console.log(res);
                const copyState = [...authors];
                copyState.splice(arrIndex,1)
                setAuthors(copyState);
            })
            .catch(err=> {
                console.log(err.response)
            })

    }

    return (
        <div className="w-75 mx-auto">
            <table className='table table-light table-striped table-hover my-5'>
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((item, i) => {
                            return <tr key={i}>
                                <td>{item.name}</td>
                                <td><Link to={`/authors/update/${item._id}`} className="btn btn-primary mx-3"> Edit</Link> <button onClick={() => onDeleteHandler(item._id, i)} className="btn btn-primary mx-2">Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}


export default Main