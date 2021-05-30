import {Navbar, Form, FormControl, Button,NavDropdown, Nav, Container} from 'react-bootstrap'
import Image from 'next/image'

export default function (){
    return (
        <Navbar class="bg-blue-light">
           <Container>
               <div class="d-flex justify-content-between ">
                    <div>
                        <img width="16" height="16" src="/phone.png"/>
                        <span class="ms-2 blue-light">(19) 99999-9999</span>
                        <br/>
                        <img width="16" height="16" src="/email.png"/>
                        <span class="ms-2 blue-light">doacaomogimirim@email.com</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <h1 class="pink h4">Doe MM</h1>
                    </div>
                    <div  class="d-flex align-items-center">
                        <a class="blue-dark">Entre ou cadastre-se</a>
                        <img width="16" height="16" src="/user.png" class="ms-3"/>
                    </div>
               </div>
              
               <div>
                   <input type="text" class="form-control text-center text-white bg-blue mt-3" value="Pesquise aqui"/>
               </div>

               <div class="d-flex justify-content-between p-4">
                    <a class="menu-link blue-dark">Notícias</a>
                    <a class="menu-link blue-dark">Causas</a>
                    <a class="menu-link blue-dark">Ranking</a>
                    <a class="menu-link blue-dark">Sobre nós</a>
                </div>
           </Container>
        </Navbar>
    )
}