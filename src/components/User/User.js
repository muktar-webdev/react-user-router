import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = (props) => {
    // console.log(props.user)
    const {name,email,id} = props.user;
    return (
        <div className="user-container">
            <h5>Name : {name}</h5>
            <p>Email : {email}</p>
            <Link to={'/user/' + id}><button className="main-btn">Show User Details {id}</button></Link>
            {/* --Dynamic using Template string(ES6)--
            <Link to={`/user/ ${id}`}> Show User Details</Link> */}
          <br/>
            {/* --using eventHandeler for navigate -- */}
            <button>Show Details {id}</button>
        </div>
    );
};

export default User;