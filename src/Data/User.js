import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class User extends Component{

    
    state = {
        urlCompleto: "",
    }
    

    urlCreate(username,firstname,lastname,email,password) {
        this.state.urlCompleto = this.url+"function=core_user_create_users&moodlewsrestformat=json&users[0][username]="+username+"&users[0][firstname]="+firstname+"&users[0][lastname]="+lastname+"&users[0][email]="+email+"&users[0][password]="+password;
        }

    urlRead(){
        return this.url+"function=tool_dataprivacy_get_users&moodlewsrestformat=json&query=0";
    }

    urlReadOne(id) {
        return this.url+"function=core_user_get_users&moodlewsrestformat=json&criteria[0][key]=id&criteria[0][value]="+id;
    }

    urlRemove(id) {
        return this.url+"function=core_user_delete_users&moodlewsrestformat=json&userids[0]="+id;
    }

    urlUpdate(id,username,password ,firstname ,lastname ,email ,maildisplay ,city, country ) {
        return this.url+"function=core_user_update_users&moodlewsrestformat=json&users[0][username]="+username+"&users[0][firstname]="+firstname+"&users[0][lastname]="+lastname+"&users[0][email]="+email+"[0][password]="+password+"&users[0][id]="+id; // pendiente
    }
}

   
    


    
