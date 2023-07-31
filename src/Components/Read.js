import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Read = () => {
    const [data,setData] = useState([]);
    const [tabledark , setTableDark] = useState('')
    function getData(){
        axios.get("https://645bcd90a8f9e4d6e7738b05.mockapi.io/CRUD")
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
    }
    function handleDelete(id){
        axios.delete(`https://645bcd90a8f9e4d6e7738b05.mockapi.io/CRUD/${id}`)
        .then(()=>{
            getData(); 
        })
    }

    const setToLocalStorage = (id, name, email) => {
      localStorage.setItem("id" , id)
      localStorage.setItem("name" , name);
      localStorage.setItem("email" , email);
    }
    useEffect(() => {
        getData();
    
    }, [])
    
    
  return (
    <>
    <div className="form-check form-switch">
    <input className="form-check-input m-4" type="checkbox" 
    onClick={()=>{
      if(tabledark === 'table-dark') setTableDark("");
      else setTableDark("table-dark");

    }} />
    </div>
    <div className='d-flex justify-content-between m-4'>
    <h2>Read Opearation</h2>
    <Link to="/">
    <button className='btn btn-secondary'>Create Data</button>
    </Link>
    </div>
    <table className={`table ${tabledark}`}>
  <thead>
    <tr className='table-info'>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  {
    data.map((eachData)=>{
            return(
<>
<tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      <td>
        <Link to ="/update">
        <button className="btn btn-success mx-2" onClick={()=>setToLocalStorage(
          eachData.id,
          eachData.name,
          eachData.email,
          )}><span class="material-symbols-outlined">edit</span></button>
        </Link>
        <button className="btn btn-danger mx-2" onClick={() => handleDelete(eachData.id)}><span class="material-symbols-outlined">
        delete</span></button>
      </td>
    </tr>
  </tbody>
 </>
    )
    })
    
}
</table>
</>
  )
}

export default Read