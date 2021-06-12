import {Navbar, Form, FormControl, Button,NavDropdown, Nav, Container} from 'react-bootstrap'
import Image from 'next/image'
import LoginForm from './forms/login-form';
import RegisterForm from './forms/register-form';
import { useState } from 'react'


function ShowLoginForm(props){
    
    if(props.showLogin){
        return <LoginForm openMenu={props.openMenu} showMenu={props.showMenu}  changeForm={props.changeForm} />
    }
    return '';
}

function ShowRegisterForm(props){
    if(props.showRegister){
        return <RegisterForm openMenu={props.openMenu} showMenu={props.showMenu} changeForm={props.changeForm}/>
    }
    return '';
}

export default function  Aside(props){
    
    const [showLogin, setShowLogin] = useState(true);
    const [showRegister, setShowRegister] = useState(false);

    const changeForm = (form)=> {
        console.log('change form >>>>', form)
        if(form == 'login'){
            setShowLogin(true);
            setShowRegister(false);
        }
        if(form == 'register'){
            setShowLogin(false);
            setShowRegister(true);
        }
    }
    return (
        <aside  className={(props.showMenu) ? 'position-fixed top-0 end-0 sidebar ' : 'd-none'}>
            <ShowLoginForm  showLogin={showLogin} openMenu={props.openMenu} showMenu={props.showMenu} changeForm={changeForm}/>
            <ShowRegisterForm showRegister={showRegister} openMenu={props.openMenu} showMenu={props.showMenu} changeForm={changeForm} />
        </aside>
    )
}