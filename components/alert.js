import {Navbar, Form, FormControl, Button,NavDropdown, Nav, Container} from 'react-bootstrap'
import Image from 'next/image'

export default function Alert (props){
    return (
        <section class="p-3 bg-pink" >
            <h4 class="text-center pink fnt-14">Aviso: <span class="normal">Covid-19, por gentileza mantenham-se em casa, garantindo a sua segurança e a do próximo.</span></h4>
        </section>
    )
}