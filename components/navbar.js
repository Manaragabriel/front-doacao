import {Navbar, Form, FormControl, Button,NavDropdown, Nav, Container} from 'react-bootstrap'
import Image from 'next/image'
import Head from 'next/head'
export default function (props){
    return (
        <Navbar class="py-3">
             <Head>
               
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
           <Container>
               <div class="d-flex justify-content-between ">
                    
                    <div class="d-flex align-items-center">
                        <h1 class="pink h4 logo"><a href="/" class="text-decoration-none pink">Sou MM</a></h1>
                    </div>
                    <div class="d-flex justify-content-between ">
                        <a class="menu-link blue-dark px-5 d-flex align-items-center">Notícias</a>
                        <a class="menu-link blue-dark px-5 d-flex align-items-center" href="/causes">Causas</a>
                        <a class="menu-link blue-dark px-5 d-flex align-items-center">Parceiros</a>
                        <a class="menu-link blue-dark px-5 d-flex align-items-center">Sobre nós</a>
                    </div>
                    <div  class="d-flex align-items-center">
                        <a class="blue-dark btn" onClick={props.openMenu}>Entre ou cadastre-se</a>
                        <img width="16" height="16" src="/user.png" class="ms-3"/>
                    </div>
               </div>
              
              

            
           </Container>
        </Navbar>
    )
}