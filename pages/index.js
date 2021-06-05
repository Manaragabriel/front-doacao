import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Aside from '../components/aside'
import { useState } from 'react'
export default function Home() {
  const [showMenu, setShowMenu ]= useState(false);
  
  const openMenu = () =>{
    console.log('here')
    setShowMenu(showMenu ? false : true);
  }
  return (
    <div>
        <Navbar openMenu={openMenu}></Navbar>
        <Aside showMenu={showMenu}></Aside>
        <section class="p-5 bg-pink">

        </section>

        <section class="p-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mt-3">
                        <div class="card border-none text-center ">
                           <div class="d-flex justify-content-center">
                              <img src="/familias.png" class="img-cards"/>
                            </div>
                            <div class="px-4 py-4">
                              <h3 class=" py-2 blue-dark titles-cards">
                                Familias Carentes
                            </h3>
                            <span class="description-cards blue-light ">
                                Ajude familias e crianças a superarem a pobreza e fome para terem esperanças em um futuro melhor.  
                            </span>
                            <div class="text-center">
                              <a class=" donation-button donation-button btn col-3 my-2">
                                  Doe
                              </a>
                            </div>
                           </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mt-3">
                        <div class="card border-none text-center ">
                           <div class="d-flex justify-content-center">
                              <img src="/saude.png" class="img-cards"/>
                            </div>
                            <div class="px-4 py-4">
                              <h3 class=" py-2 blue-dark titles-cards">
                                Saúde
                            </h3>
                            <span class="description-cards blue-light ">
                              Ajude hospitais a vencer a guerra do Covid, simples gestos grandes mudanças.  
                            </span>
                            <div class="text-center">
                              <a class=" donation-button donation-button btn col-3 my-2">
                                  Doe
                              </a>
                            </div>
                           </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mt-3">
                        <div class="card border-none text-center ">
                           <div class="d-flex justify-content-center">
                              <img src="/educacao.png" class="img-cards"/>
                            </div>
                            <div class="px-4 py-4">
                              <h3 class=" py-2 blue-dark titles-cards">
                                Educação
                            </h3>
                            <span class="description-cards blue-light ">
                                Contribua com projetos voltados a educação para melhorar cada vez mais a sociedade!  
                            </span>
                            <div class="text-center">
                              <a class=" donation-button donation-button btn col-3 my-2">
                                  Doe
                              </a>
                            </div>
                           </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mt-3">
                        <div class="card border-none text-center ">
                           <div class="d-flex justify-content-center">
                              <img src="/animais.png" class="img-cards"/>
                            </div>
                            <div class="px-4 py-4">
                              <h3 class=" py-2 blue-dark titles-cards">
                                Animais Carentes
                            </h3>
                            <span class="description-cards blue-light ">
                                Ajude os animaizinhos de Mogi Mirim.  
                            </span>
                            <div class="text-center">
                              <a class=" donation-button donation-button btn col-3 my-2">
                                  Doe
                              </a>
                            </div>
                           </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mt-3">
                        <div class="card border-none text-center ">
                           <div class="d-flex justify-content-center">
                              <img src="/meio-ambiente.png" class="img-cards"/>
                            </div>
                            <div class="px-4 py-4">
                              <h3 class=" py-2 blue-dark titles-cards">
                                Meio Ambiente
                            </h3>
                            <span class="description-cards blue-light ">
                                Ajude ambientes a serem revitalizados.  
                            </span>
                            <div class="text-center">
                              <a class=" donation-button donation-button btn col-3 my-2">
                                  Doe
                              </a>
                            </div>
                           </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mt-3">
                        <div class="card border-none text-center ">
                           <div class="d-flex justify-content-center">
                              <img src="/outros.png" class="img-cards"/>
                            </div>
                            <div class="px-4 py-4">
                              <h3 class=" py-2 blue-dark titles-cards">
                                Outros
                            </h3>
                            <span class="description-cards blue-light ">
                                Conheça nossas causas, e ajude-nos a melhorar o planeta!  
                            </span>
                            <div class="text-center">
                              <a class=" donation-button donation-button btn col-3 my-2">
                                  Doe
                              </a>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
