/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitItem = (
  {tuit = {"topic": "","userName": "","time": "","title": "","image": ""}}
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
    }

  return(
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
        <img className="wd-rounded-circle wd-list-item-side-img d-inline" height={48} src={`/images/${tuit.image}`}/>
        </div>
        <div className="col-10">
          <div>
            <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
            <span className="fw-bold">{tuit.userName}</span>
            <i className="bi bi-person-check ms-2 me-2 text-primary"></i>{tuit.handle}
        <i className="bi bi-dot"></i>{tuit.time}</div>
          <div>{tuit.tuit}</div>
    <TuitStats tuit={tuit}/>
        </div>
      </div>
    </li>
  )
}
export default TuitItem;