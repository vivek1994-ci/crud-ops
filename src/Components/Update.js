import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
  setId(localStorage.getItem("id")); 
  setName(localStorage.getItem("name"));
  setEmail(localStorage.getItem("email"));
   
  }, [])
  
  const handleUpdate = (e) =>{
    e.preventDefault();
    console.log("Id...", id);
    axios.put(`https://645bcd90a8f9e4d6e7738b05.mockapi.io/CRUD/${id}`,
    {
      name : name,
      email : email,
    }
    ).then(()=>{
      navigate("/read");
    })
  }
  return (
    <>
    <div className='d-flex justify-content-between m-4'>
    <h2>Update Opearation</h2> 
    </div>
    <form>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" value={name} 
    onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Email Address</label>
    <input type="email" className="form-control" value={email}
    onChange={(e)=>setEmail(e.target.value)} />
  </div>

  <button type="submit" className="btn btn-primary mx-2" 
  onClick={handleUpdate}>Update</button>
  <Link to="/read">
  <button className='btn btn-secondary mx-2'> <span class="material-symbols-outlined">
arrow_back</span></button>
  </Link>
 </form>
    </>
  )
}

export default Update