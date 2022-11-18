/* eslint-disable no-unused-vars */
import axios from 'axios';
const TUITS_API = 'http://3.83.89.199:4000/api/tuits';

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
   }
   
export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
   }
   
   export const deleteTuit = async (tid) => {
    const tidd = tid.toString();
    const response = await axios
      .delete(`${TUITS_API}/${tidd}`)
    return response.data
  }


  export const updateTuit = async (tuit) => {
    const response = await axios
      .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
  }
  