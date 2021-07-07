import React, {Component} from 'react';
import User from '../Data/User.js';
import Button from '@material-ui/core/Button';
import '../Css/UserControl.css';



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },

  
});


const url = "https://local.hmartepost.com/moodle38/webservice/rest/server.php?wstoken=d04e561b2260a760d3bf04b6561c9a28&ws";

export default class UserControl extends Component {

    
    state = {
        user: [],
        loadFetch: true
    }

    componentDidMount(){
        // Este metodo hace que se inicie junto al render, en esta parte lee los datos con el endpoint
        fetch(this.urlRead())
        .then(response => response.json())
        .then(usuario => this.setState({user : usuario , loadFetch : false}) )

        this.state.user.map(user => 
            <User
                firstname = {user.firstname}
                lastname = {User.lastname}
                password ={User.password}
                fullname = {User.fullname}
                email = {User.email}
                maildisplay = {User.maildisplay}
                city = {User.city}
                country = {User.country}
                task={User.task} 
               id = {User.id} 
           />)

            
    }

    render(){
        // Esta parte del codigo muestra los usuarios a la pantalla
        this.UsersList();
        if(this.state.loadFetch){
            return <h1>Cargando..</h1> 
        }

        return this.state.user.map(usuario => 
            <div key={usuario.id}>
                <div></div>
                    <p className="titulo">{usuario.id}</p>
                    <p className="texto">{usuario.fullname}</p>
                    <Button onClick={this.UserRemove.bind(this,usuario.id)}  variant="contained" color="secondary" >
                        Eliminar
                    </Button>
            </div>
            )
    }

    UsersList(){
        <h1>Userslist</h1>
    }
    
    
    
    UserCreate = (username,firstname,lastname,email,password) => {
        fetch(this.urlRemove())
        .then(response => response.json())
        console.log("accionCrear")
    }
    
    
 

    UserRemove = id => {
        fetch(this.urlRemove(id))
        .then(response => response.json())
        .then(window.location.reload())
    }

    UserView(){
        <h2>23</h2>
    }

    UserRead(){
        <h2>23</h2>
    }


    // -- URL -- //

    urlCreate(username,firstname,lastname,email,password) {
        return this.state.urlCompleto = this.url+'function=core_user_create_users&moodlewsrestformat=json&users[0][username]=prueba15434&users[0][firstname]=prueba1221&users[0][lastname]=140&users[0][email]=prueba4374@prueba.com&users[0][password]=prueba12';
    }

    urlRead(){
        return url+"function=tool_dataprivacy_get_users&moodlewsrestformat=json&query=0";
    }

    urlReadOne(id) {
        return url+"function=core_user_get_users&moodlewsrestformat=json&criteria[0][key]=id&criteria[0][value]="+id;
    }

    urlRemove(id) {
        return url+"function=core_user_delete_users&moodlewsrestformat=json&userids[0]="+id;
    }

    urlUpdate(id,username,password ,firstname ,lastname ,email ,maildisplay ,city, country ) {
        return url+"function=core_user_update_users&moodlewsrestformat=json&users[0][username]="+username+"&users[0][firstname]="+firstname+"&users[0][lastname]="+lastname+"&users[0][email]="+email+"[0][password]="+password+"&users[0][id]="+id; // pendiente
    }

}
