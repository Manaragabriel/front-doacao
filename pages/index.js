import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Aside from '../components/aside'
import Footer from '../components/footer'
import Banner from '../components/banner'
import { useEffect, useState } from 'react'
import api from '../libraries/services/api';

export default function Home() {
  const [showMenu, setShowMenu ]= useState(false);
  const [sectors, setSectors] = useState([]);

  const openMenu = () =>{  
    setShowMenu(showMenu ? false : true);
  }

  useEffect(() => {
    api.get('/sectors').then((response) => {
      setSectors(response.data);
      console.log('sectors',sectors)
    });
  }, [api])

  return (
    <div>
        <Navbar openMenu={openMenu}></Navbar>
        <Aside showMenu={showMenu} openMenu={openMenu}></Aside>
        <Banner />

        <section class="p-5">
            <div class="container">
                <div class="row">
                  {sectors.map((value,index) => {
                    return (
                      <div class="col-lg-4 mt-3">
                          <div class="card border-none text-center ">
                            <div class="d-flex justify-content-center">
                                <img src="/familias.png" class="img-cards"/>
                            </div>
                            <div class="px-4 py-4">
                                <h3 class=" py-2 blue-dark titles-cards">
                                  {value.name}
                              </h3>
                              <span class="description-cards blue-light ">
                                  {value.description}  
                              </span>
                              <div class="text-center">
                                <a class=" donation-button donation-button btn col-3 my-2" href={`causas/${value.id}`}>
                                    Doe
                                </a>
                              </div>
                            </div>
                          </div>
                      </div>
                    )
                  })}
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}
