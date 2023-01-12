import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Clicked");

        axios.post(
            'https://63c049a0a177ed68abc41648.mockapi.io/crud-project',
            {
                name: name,
                email: email
            }
        ).then(() => {
            history("/read");
        });

    }



    return (
        <>
            <div className='d-flex justify-content-between'>
                <h2>Create</h2>
                <Link to="/read">
                    <button className='btn btn-primary'>Show Data</button>
                </Link>
            </div>

            <form>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />

                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

            </form>

        </>
    )
}

export default Create