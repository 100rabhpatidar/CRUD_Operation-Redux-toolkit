import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../Slices/userReducer";

function Home() {
  const users = useSelector((state) => state.users);
  const Dispatch = useDispatch();

  const handleDelete = (id) => {
          
     Dispatch(deleteUser({
       
        id : id

     }))  

  }



  return (
    <div className="container pt-5">
      <h2>CRUD Operation Using Redux</h2>
      <Link to="/create" type="button" class="btn btn-success my-3">
        Create+
      </Link>
      <table className="table table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td> 
              
              <td>  
                <Link to={`/update/${user.id}`} type="button" class="btn btn-sm btn-primary">
                  Edit
                </Link>
                
                <button onClick={() => handleDelete(user.id)} type="button" class="btn btn-sm btn-danger ms-2">
                  Delete
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
