import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import { addUser } from '../Slices/userReducer';
import { useNavigate } from 'react-router-dom';


function Create() {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  
  
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
       event.preventDefault();
       
      dispatch(addUser({
        id: users[users.length - 1].id + 1,
        name,
        email,
        phone
      }))
          navigate('/');

  }

  return (

    <div className="container">
  <form onSubmit={handleSubmit} className='mt-5 p-3 text-primary-emphasis bs-body-bg border rounded-3'>
    <div className="mb-3">
      <label htmlFor='name' for="exampleInputEmail1" className="form-label">Name</label>
      <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setName(e.target.value)}></input>
    </div>
    <div className="mb-3">
      <label htmlFor='email' for="exampleInputPassword1" class="form-label">Email</label>
      <input type="email" name='email' className="form-control" id="exampleInputPassword1" onChange={e => setEmail(e.target.value)}></input>
    </div>
    <div className="mb-3">
    <label htmlFor='phone' for="exampleInputPhone1" class="form-label">Phone</label>
      <input type="tel" name='Phone' className="form-control" id="exampleInputPhone1" onChange={e => setPhone(e.target.value)}></input>
    </div>
    <button type="submit" className="btn btn-success">Submit</button>
  </form>
</div>
    
  )
}

export default Create

