import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Aside from '../components/aside'
import Footer from '../components/footer'
import Alert from '../components/alert'
import { useState } from 'react'

export default function Cause() {
  const [showMenu, setShowMenu ]= useState(false);
  
  const openMenu = () =>{
    console.log('here')
    setShowMenu(showMenu ? false : true);
  }
  return (
    <div>
        <Navbar openMenu={openMenu}></Navbar>
        <Aside showMenu={showMenu}></Aside>
        <Alert />

       <section class="p-3">
           <div class="container">
               <p class="blue-light">Home > Causas > Enchentes, Jardim das Flores</p>
           </div>
       </section>

       <section class="p-3">
           <div class="container">
               <h4 class="blue-dark">Enchentes, Jardim das flores</h4>
           </div>
       </section>

        <section class="p-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="p-4">
                             <div class="row">
                               

                                <div class="col-lg-8">
                                    <h4 class="fnt-24 fw-normal pe-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                                    <p class="fnt-14 my-5 pe-5">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                    </p>
                                    <img src="/enchente.png"/>
                                </div>

                                <div class="col-lg-4">  
                                    <div class="card border-none shadow py-5 px-5">
                                        <div class="text-center">
                                            <a class="btn mt-3 btn-primary  p-4 w-100 border-none fw-bold bg-pink-dark">Doar</a>
                                        </div>
                                        <div class="mt-3">
                                            <p class="fnt-16 m-0 p-0 blue-light">Arrecadado</p>
                                                        
                                            <p class="fnt-24 green m-0 p-0">R$ 75,00</p>
    
                                            <p class="fnt-16 m-0 p-0 blue-light">Meta</p>
                                            
                                            <p class="fnt-24 blue2 m-0 p-0">R$ 100,00</p>
                                        </div>
                                        <div class="mt-3 text-center">
                                            <img src="/grafico.png" class="chart"/>
                                        </div>
                                        <div class="py-2">
                                            <p class="fnt-14 m-0 p-0 blue-light">Segmento</p>
                                            <p class="fnt-14 m-0 p-0 blue-light fw-bold">Familias Carentes</p>

                                        </div>
                                        <div class="py-2">
                                            <p class="fnt-14 m-0 p-0 blue-light">Responsabilidade da Causa:</p>
                                            <p class="fnt-14 m-0 p-0 blue-light fw-bold"> Susana Gomezs</p>

                                        </div>
                                        <div class="py-2">
                                            <p class="fnt-14 m-0 p-0 blue-light">Data</p>
                                            <p class="fnt-14 m-0 p-0 blue-light fw-bold">13/06/2021</p>

                                        </div>
                                    </div>
                                </div>


                             </div>
                        </div>
                    </div>

                    
                </div>

            </div>
        </section>

        <section>
            <div class="container p-4">
                <p class="fw-bold p-0 m-0 fnt-18">Comentários</p>

                <p class="blue-light fnt-14 mt-4">
                    Os comentários são de responsabilidade exclusiva de seus autores e não representam a opinião deste site. Se achar algo <br />que viole os termos de uso, denuncie. Leia as perguntas mais frequentes para saber o que é impróprio ou ilegal.
                </p>

                <p class="fw-bold p-0 m-0 fnt-18">Comentário</p>
                <textarea class="form-control bg-blue-light border-none" rows="4" placeholder="Deixe aqui o seu comentário sobre está causa..."></textarea>

                <div class="comments my-5 col-7">
                    <p class="fw-bold p-0 m-0 fnt-16">Renato Sanches, em 01/01/2020</p>
                    <p class="fnt-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam quis diam at viverra. Cras eget consectetur felis. Proin viverra nulla et tellus tristique tempor. Donec eu risus et velit egestas congue.</p>

                    <div class="row">
                        <a class="blue-light text-decoration-none col-3" href="#"> <img src="/icon-like.png" /> <span class="ms-2">Curtir 4</span></a>
                        <a class="blue-light text-decoration-none col-3" href="#"> <img src="/icon-resposta.png" /> <span class="ms-2">Responder</span></a>
                        <a class="blue-light text-decoration-none col-3" href="#"> <img src="/icon-flag.png" /><span class="ms-2">Denunciar</span></a>
                    </div>
                </div>
                
                <div class="comments my-5 col-7">
                    <p class="fw-bold p-0 m-0 fnt-16">Renato Sanches, em 01/01/2020</p>
                    <p class="fnt-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam quis diam at viverra. Cras eget consectetur felis. Proin viverra nulla et tellus tristique tempor. Donec eu risus et velit egestas congue.</p>

                    <div class="row">
                        <a class="blue-light text-decoration-none col-3" href="#"> <img src="/icon-like.png" /> <span class="ms-2">Curtir 4</span></a>
                        <a class="blue-light text-decoration-none col-3" href="#"> <img src="/icon-resposta.png" /> <span class="ms-2">Responder</span></a>
                        <a class="blue-light text-decoration-none col-3" href="#"> <img src="/icon-flag.png" /><span class="ms-2">Denunciar</span></a>
                    </div>
                    <div class="child-comment">

                        <div class="comments ms-5 my-5">
                            <p class="fw-bold p-0 m-0 fnt-16">Renato Sanches, em 01/01/2020</p>
                            <p class="fnt-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam quis diam at viverra. Cras eget consectetur felis. Proin viverra nulla et tellus tristique tempor. Donec eu risus et velit egestas congue.</p>

                            <div class="row">
                                <a class="blue-light text-decoration-none col-3" href="#"> <img src="/icon-like.png" /> <span class="ms-2">Curtir 4</span></a>
                                <a class="blue-light text-decoration-none col-3" href="#"> <img src="/icon-resposta.png" /> <span class="ms-2">Responder</span></a>
                                <a class="blue-light text-decoration-none col-3" href="#"> <img src="/icon-flag.png" /><span class="ms-2">Denunciar</span></a>
                            </div>
                         </div>
                    </div>
                </div>
                
                <div class="comments my-5 col-7">
                    <p class="fw-bold p-0 m-0 fnt-16">Renato Sanches, em 01/01/2020</p>
                    <p class="fnt-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam quis diam at viverra. Cras eget consectetur felis. Proin viverra nulla et tellus tristique tempor. Donec eu risus et velit egestas congue.</p>

                    <div class="row">
                        <a class="blue-light text-decoration-none col-3" href="#"> <img src="/icon-like.png" /> <span class="ms-2">Curtir 4</span></a>
                        <a class="blue-light text-decoration-none col-3" href="#"> <img src="/icon-resposta.png" /> <span class="ms-2">Responder</span></a>
                        <a class="blue-light text-decoration-none col-3" href="#"> <img src="/icon-flag.png" /><span class="ms-2">Denunciar</span></a>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}
