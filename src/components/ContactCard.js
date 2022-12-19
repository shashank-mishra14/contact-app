import React from 'react'
import{link} from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
    const {id, name, email} = props.contact;


  return (
    <div className="item">
        <div className="ui avatar image" src={user} alt="user"/>
            <div className="content">
                <link to ={{pathname: `/contact/$(id)`, state: {contact:props.contact}}}>
                <div className="header">
                    {name}
                </div>
                <div>{email}</div>
                </link>
            </div>
            <i className="trash alternate outline icon"
            style={{color:"red", marginTop: "7px"}}
            onClick={()=> props.clickHandler(id)}
            > </i>
        </div>
        
  );
};

export default ContactCard;