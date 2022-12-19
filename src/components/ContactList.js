import React from "react";
import {link} from  "react-router-dom";

import ContactCard from './ContactCard';

const ContactList =(props) => {

    console.log(props);

    const deleteContactHandler =(id) => {
        props.getContactId(id);
    };


    const contacts =[{
        id: "1",
        "name": "shashank",
        "email": "shashank@gmail.com"
    }];
    
    const renderContactList= contacts.map((contact)=> {
    return <ContactCard contact={contact} clickHandler ={deleteContactHandler} key ={contact.id}></ContactCard>
    });


    return(
    <div class="main">
    <h2>ContactList
        <link to="/add">
        <button className ="ui button blue right"> AddContact</button>
        </link> 
        
    </h2>
    <div className="ui celled list">{renderContactList}</div>

    </div>


    );
};

export default ContactList;