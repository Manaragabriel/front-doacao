import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Aside from '../components/aside'
import Footer from '../components/footer'
import Alert from '../components/alert'
import { useState } from 'react'

export default function CreateCause() {
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
               <p class="blue-light">Home > Causas > Cadastrar Causa</p>
           </div>
       </section>

       <section class="p-3">
           <div class="container">
               <h4 class="blue-dark">Cadastro de uma nova Causa</h4>
           </div>
       </section>

       <section class="px-3 py-5">
           <div class="container d-flex justify-content-center">
              <div class="col-10">
                    <p class="fnt-14">Ao cadastrar uma nova causa em seu nome ou em nome da sua empresa, pedimos por gentileza que se atentem aos <a href="#" class="pink">termos de uso</a> da aplicação, evitando eventuais problemas ou controversas no periodo em que a causa estiver publicada.</p>
                    <h4 class="fnt-24">Informações da Causa</h4>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group my-4">
                                <label class="bold">Titulo (até cinco palavras...)</label>
                                <input type="text" class="form-control border-none p-3" placeholder="Titulo"/>
                            </div>
                            <div class="form-group my-4">
                                <label class="bold">SubTitulo (recomendado de uma frase...)</label>
                                <input type="text" class="form-control border-none p-3" placeholder="Deixe aqui seu comentário sobre essa causa..."/>
                            </div>
                            <div class="form-group my-4">
                                <label class="bold">Segmento da Causa</label>
                                <select class="form-control border-none p-3" >
                                    <option>Selecione um segmento</option>
                                </select>
                            </div>
                            <div class="form-group my-4">
                                <label class="bold">Meta de arrecadação (valor em reais)</label>
                                <input type="text" class="form-control border-none p-3" placeholder="Deixe aqui seu comentário sobre essa causa..."/>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="form-group my-4">
                                <label class="bold">Texto/Conteudo:</label>
                                <textarea class="form-control border-none p-3" rows="14" placeholder="Deixe aqui seu comentário sobre essa causa"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="form-group my-4">
                        <label class="bold">Imagem (máximo seis imagens)</label>
                        <div class="row">
                            <div class=" col-2 text-center p-4">
                                <div class="bg-blue-light-2 text-center py-4 px-1">
                                    <img src="/file.png"/>
                                    <a class="fnt-12 text-decoration-none blue-light d-block">Adicionar Imagem</a>
                                </div>
                            </div>

                            <div class=" col-2 text-center p-4">
                                <div class="bg-blue-light-2 text-center py-4 h-100 px-1">
                         
                                </div>
                            </div>
                            <div class=" col-2 text-center p-4">
                                <div class="bg-blue-light-2 text-center py-4 h-100 px-1">
                         
                                </div>
                            </div>
                            <div class=" col-2 text-center p-4">
                                <div class="bg-blue-light-2 text-center py-4 h-100 px-1">
                         
                                </div>
                            </div>
                            <div class=" col-2 text-center p-4">
                                <div class="bg-blue-light-2 text-center py-4 h-100 px-1">
                         
                                </div>
                            </div>
                            <div class=" col-2 text-center p-4">
                                <div class="bg-blue-light-2 text-center py-4 h-100 px-1">
                         
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="btn bg-pink-dark text-white w-100 fnt-24 py-2  fw-bold">Cadastrar Evento</a>
              </div>
           </div>
       </section>
        <Footer />
    </div>
  )
}
