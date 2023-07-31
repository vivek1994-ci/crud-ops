import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const history = useNavigate();
    const header = {"Access-Control-Allow-Origin": "*"};
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(
            'https://645bcd90a8f9e4d6e7738b05.mockapi.io/CRUD',
        {
            name : name, 
            email : email,
            header
        })
        .then(()=> {
            history("/read");
        });
        
    };
  return (
    <>
    <div className='d-flex justify-content-between m-4 s-s'>
    <h2 className='s-h'>Create Opearation</h2>
      <Link to="/read">
      <button className='btn btn-primary s-d'>Show Data </button> 
      </Link>
      

    </div>
    <form>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" 
    onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Email Address</label>
    <input type="email" className="form-control" 
    onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </>
  )
}

export default Create