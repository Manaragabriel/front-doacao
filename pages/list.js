import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Aside from '../components/aside'
import Footer from '../components/footer'
import Alert from '../components/alert'
import { useState } from 'react'
export default function List() {
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
               <p class="blue-light">Home > Causas > Famílias carentes</p>
           </div>
       </section>

        <section class="p-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card p-4">
                             <div class="row">
                                <div class="col-lg-9">
                                    <h4 class="blue-dark">Doe para todas as causas de: <b>Familias Carentes</b></h4>
                                    <p class="blue-light">
                                        Doação por segmento é um modelo para cooperar e ajudar todas as causas de uma só vez. O valor doado será distribuido igualmente entre todas as causas cadastradas com o segmento em destaque “Familias Carentes”, <br /><br />Contamos com você para salvar o mundo!
                                    </p>
                                </div>

                                <div class="col-lg-3 d-flex align-items-center justify-content-center">
                                                                        
                                    <a class="btn mt-3 btn-primary col-6 p-3  bg-pink-dark">Doar</a>
                                   
                                </div>
                             </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>

        <section class="p-5">
            <div class="container">
                <div class="row">
                  
                    <div class="col-lg-8">
                        <h4 class="blue-dark border-b py-2">Causas: Famílias Carentes</h4>
                        {[...Array(8)].map((x,i) => 
                                <div class="card card-cause p-4 mt-3 border-b-1">
                                        <div class="row">
                                            <div class="col-lg-8 d-flex align-items-center">
                                                <div>
                                                    <h4>Enchentes, Jardim das Flores</h4>
                                                    <p class="mt-2 fnt-14">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                                                    <a class="pink fw-bold text-decoration-none mt-4"  href="/cause">Ver mais</a>
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


                    <div class="col-lg-4">
                       <div class="bg-blue-light-2 px-3 h-100">
                            <h4 class="blue-dark  py-2">Doadores</h4>
                            <p class="pink  text-decoration-none">Leia abaixo alguns dos depoimentos e comentarios feitos pelos apoiadores.</p>
                            <div class="donators px-3">
                                <h4 class="blue fnt-16">João da Silva Ribeiro</h4>
                                <p class="fnt-14">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                                </p>
                            </div>
                            {[...Array(8)].map((val,index) =>
                                <div class="donators px-3">
                                    <h4 class="blue fnt-16">João da Silva Ribeiro</h4>
                                    <p class="fnt-14">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                                    </p>
                                </div>
                            )}
                       </div>
                    </div>
                </div>
            </div>
        </section>

     
        <Footer />
    </div>
  )
}
