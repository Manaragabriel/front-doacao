import {Navbar, Form, FormControl, Button,NavDropdown, Nav, Container} from 'react-bootstrap'
import Image from 'next/image'

export default function  Footer(props){
 
    return (
        <footer class="container-fluid p-5 bg-pink-dark">

            <p class="text-center text-white">Visite nossas redes sociais!</p>
            <div class="d-flex justify-content-center">
                <div>
                    <img class="mx-2" src="/facebook.png"/>
                    <img class="mx-2" src="/instagram.png"/>
                    <img class="mx-2" src="/youtube.png"/>
                    <img class="mx-2" src="/twitter.png"/>
                    <img class="mx-2" src="/linkedin.png"/>
                </div>
            </div>
        </footer>
    )
}