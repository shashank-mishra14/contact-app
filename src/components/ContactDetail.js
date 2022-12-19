import React from 'react'
import{link} from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail= (props) => {
    console.log(props);
    
    
  return (
          <div className="main">
              <div className="ui card centered">
                  <div className="image">
                      <img src={user} alt="user"/>
                  </div>
                  <div className="content">
                      <div className="header">shashank</div>
                      <div className="description">shashank@gmail.com</div>
                  </div>
              </div>
          </div>
  );
};

export default ContactDetail;