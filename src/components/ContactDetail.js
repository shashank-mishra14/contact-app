import React from 'react'
import{link} from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail= (props) => {
    const {name, email}= props.location.state.contct;

    
  return (
          <div className="main">
              <div className="ui card centered">
                  <div className="image">
                      <img src={user} alt="user"/>
                  </div>
                  <div className="content">
                      <div className="header">{name}</div>
                      <div className="description">{email}</div>
                  </div>
              </div>
              <div className="center-div">
                 <link to ="/">
                  <button className="ui button blue center">Back to Contact List</button>
                  </link>
              </div>
          </div>
  );
};

export default ContactDetail;