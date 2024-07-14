import { createSlice } from '@reduxjs/toolkit';
import { userList } from '../Data/data';



const userSlice = createSlice({
  name: 'users',
  initialState: userList,
  reducers: {
     addUser : (state,action) => {
     
        state.push(action.payload)
     },

     editUser : (state,action) => {
       
          
               const{id, name, email, phone} = action.payload;

               const uu = state.find(user => user.id == id)

               if(uu){
                  uu.name = name;
                  uu.email = email;
                  uu.phone = phone;
               }

     },

     deleteUser : (state,action) => {
               const{id} = action.payload;
               const uu = state.find(user => user.id == id)

               if(uu){
                       return state.filter(f => f.id !== id)
               }

     }

     
  },

});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;