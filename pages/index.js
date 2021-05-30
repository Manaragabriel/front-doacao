import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
export default function Home() {
  return (
    <div>
        <Navbar></Navbar>

        <section class="p-5 bg-pink">

        </section>

        <section class="p-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card border-none text-center ">
                           <div class="d-flex justify-content-center">
                              <img src="/familias.png" class="img-cards"/>
                            </div>
                            <div class="px-4">
                              <h3 class=" py-2 blue-dark titles-cards">
                                Familias Carentes
                            </h3>
                            <span class="description-cards blue-light ">
                                Ajude familias e crianças a superarem a pobreza e fome para terem esperanças em um futuro melhor.  
                            </span>
                            <div class="text-center">
                              <a class=" donation-button donation-button btn col-2 my-2">
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
