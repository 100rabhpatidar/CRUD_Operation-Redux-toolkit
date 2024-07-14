import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from '../Slices/userReducer';


function Update() {
  
 

  const {id} = useParams();
  const users = useSelector(state=> state.users);
  const existingUser = users.filter(f => f.id == id)
  const {name, email, phone} = existingUser[0];
  const [uname,setName] = useState(name);
  const [uemail,setEmail] = useState(email);
  const [uphone,setPhone] = useState(phone);


const dispatch = useDispatch();
const navigate =  useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault()
    dispatch(editUser({
        id : id,
        name : uname,
        email : uemail,
        phone : uphone

    }))

    navigate("/");
  }

  return (
    <div className="container">
  <form onSubmit={handleUpdate} className='mt-5 p-3 text-primary-emphasis bs-body-bg border rounded-3'>
    <div className="mb-3">
      <label htmlFor='name' for="exampleInputEmail1" class="form-label">Name</label>
      <input type="text" value={uname} onChange={e => setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    </div>
    <div className="mb-3">
      <label htmlFor='email' for="exampleInputPassword1" class="form-label">Email</label>
      <input type="email" value={uemail} onChange={e => setEmail(e.target.value)}  class="form-control" id="exampleInputPassword1"></input>
    </div>
    <div className="mb-3">
    <label htmlFor='phone' for="exampleInputPhone1" class="form-label">Phone</label>
      <input type="tel" value={uphone} name='Phone' className="form-control" id="exampleInputPhone1" onChange={e => setPhone(e.target.value)}></input>
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>
</div>
   
  )
}

export default Update
