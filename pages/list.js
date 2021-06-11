import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Aside from '../components/aside'
import Footer from '../components/footer'
import Banner from '../components/banner'
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
        <Banner />

        <section class="p-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card p-3">
                             <div class="row">
                                <div class="col-lg-4">
                                    <img class="img-list rounded" src="/idosos.png"/>
                                </div>

                                <div class="col-lg-8 d-flex align-items-center">
                                    <div>
                                        <h4>ONG de Idosos</h4>
                                        <span class="mt-3">Meta de doação: <span class="bold">R$200,00</span></span><br />
                                        <progress class="progress mt-3 w-100" value="50" max="100"> 50% </progress>
                                        <span class="bold">R$100,00 doados</span><br />
                                        <a class="btn mt-3 btn-primary  bg-pink-dark">Doar agora</a>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>

                    <div class="col-lg-6"></div>
                </div>
            </div>
        </section>

     
        <Footer />
    </div>
  )
}
