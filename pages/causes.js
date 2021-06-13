import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Aside from '../components/aside'
import Footer from '../components/footer'
import Alert from '../components/alert'
import { useState } from 'react'

export default function Causes() {
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
               <p class="blue-light">Home > Causas</p>
           </div>
       </section>

        <section class="p-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="p-4">
                             <div class="row">
                                <div class="col-lg-2 d-flex justify-content-start">  
                                    <h4 class="blue-dark">Causas</h4>
                                </div>

                                <div class="col-lg-10">
                                    <input type="text" class="form-control bg-white border-none" id="search" placeholder="Pesquise aqui o que procura"/>

                              
                                </div>


                             </div>
                        </div>
                    </div>

                    
                </div>
                <div class="row p-4">
                    <div class="col-lg-2">
                        <a class="pink fw-bold mt-4 fnt-14">Cadastrar Causa</a>

                    </div>

                    <div class="col-lg-10">
                         <ul class=" p-0 m-0">
                            <li class="btn blue-dark">Todas</li>
                            <li class="btn  blue-dark">Saúde</li>
                            <li class="btn  blue-dark">Educação</li>
                            <li class="btn  blue-dark">Familias Carentes</li>
                            <li class="btn  blue-dark">Meio Ambiente</li>
                            <li class="btn  blue-dark">Animais Carentes</li>
                            <li class="btn  blue-dark">Minhas causas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="p-5">
            <div class="container">
                <div class="row">
                  
                    <div class="col-lg-12">
                        <h4 class="blue-dark border-b py-2">Causas: Famílias Carentes</h4>
                        {[...Array(8)].map((x,i) => 
                                <div class="card card-cause p-4 mt-3 border-b-1">
                                        <div class="row">
                                            <div class="col-lg-8 d-flex align-items-center">
                                                <div>
                                                    <h4>Enchentes, Jardim das Flores</h4>
                                                    <p class="mt-2 fnt-14">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                                                    <a class="pink fw-bold text-decoration-none mt-4" href="/cause">Ver mais</a>
                                                </div>
                                            </div>
                                        
                                            <div class="col-lg-4">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <img src="/grafico.png" class="chart"/>
                                                    </div>
                                                    <div class="col-6">
                                                        <p class="fnt-12 m-0 p-0">Arrecadado</p>
                                                        
                                                        <p class="fnt-14 green m-0 p-0">R$ 75,00</p>
            
                                                        <p class="fnt-12 m-0 p-0">Meta</p>
                                                        
                                                        <p class="fnt-14 blue2 m-0 p-0">R$ 100,00</p>
                                                    </div>
                                                </div>
                                                <div class="text-end mt-4">
                                                    <span class="blue3 fnt-14">Susana Gomez, 13/06/2021</span>
                                                </div>
                                            </div>
            
            
                                        </div>
                                    </div>
                        )}


                        
                    </div>

                </div>
            </div>
        </section>

     
        <Footer />
    </div>
  )
}
