import {Navbar, Form, FormControl, Button,NavDropdown, Nav, Container} from 'react-bootstrap'
import Image from 'next/image'

export default function  Aside(props){
 
    return (
        <aside  className={(props.showMenu) ? 'position-fixed top-0 end-0 sidebar' : 'd-none'}>
           <div class="p-5">
                <h4 class="text-center">Faça seu login!</h4>
                <p class="text-center">Não possui uma conta ainda? <a class="pink">Cadastre-se aqui!</a></p>

                <div class="form-group my-5">
                    <label class="bold">Email / CNPJ</label>
                    <input type="text" class="form-control" placeholder="Digite seu usuário aqui..."/>
                </div>

              
                <button class="btn bg-blue text-white mt-3 w-100">Próximo</button>
                
           </div>
        </aside>
    )
}