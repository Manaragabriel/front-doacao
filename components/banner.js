import {Navbar, Form, FormControl, Button,NavDropdown, Nav, Container} from 'react-bootstrap'
import Image from 'next/image'

export default function Banner (props){
    return (
        <section class="py-5 " id="banner">
            
            <div class="d-flex h-100">
                <div class="col-lg-9 bg-banner-left d-flex align-items-center">
                    <div class="container text-center mt-3">
                        <h4 class="text-white">Estudantes da FATEC de Mogi Mirim promovem aplicativo inovador!</h4>
                        <p class="text-white mt-4">Aplicativo de doações online que ajudara diversas instituições que necessitam de sua ajuda para<br/> continuarem a trabalhar e solucionar as causas sociais e ambientais de Mogi Mirim.</p>
                        <a class="pink mt-4 text-decoration-none" href="/causes">Colabore junto com sua cidade.</a>

                    </div>

                </div>
                <div class="col-lg-3 banner-img">
                    
                </div>
            </div>
           
        </section>
    )
}