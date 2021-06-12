import {Navbar, Form, FormControl, Button,NavDropdown, Nav, Container} from 'react-bootstrap'
import Image from 'next/image'


export default function RegisterForm(props) {
    
    return(
        <div class="p-5">
            <div class="d-flex justify-content-end">
                <button type="button" class="btn" onClick={props.openMenu} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <h4 class="text-center">Faça seu cadastro!</h4>
            <p class="text-center">Já possuí uma conta? <a class="pink"  onClick={() => props.changeForm('login')}>Clique aqui para entrar!</a></p>

            
            <div class="form-group my-4">
                <label class="bold">Nome completo</label>
                <input type="text" class="form-control" placeholder="Insira seu nome aqui..."/>
            </div>

            <div class="row my-4">
                <div class="col-lg-6">
                    
                    <div class="form-group ">
                        <input type="radio" name="user_type" />
                        <span class="bold ms-2">Pessoa Física</span>

                    </div>  

                </div>

                <div class="col-lg-6">
                    <div class="form-group">
                        <input type="radio" name="user_type" />
                        <span class="bold ms-2">Pessoa Jurídica</span>

                    </div>
                </div>
            </div>
            
            <div class="form-group my-4">
                <label class="bold">CPF</label>
                <input type="text" class="form-control" placeholder="Insira seu email CPF..."/>
            </div>
        
            <div class="form-group my-4">
                <label class="bold">Email</label>
                <input type="email" class="form-control" placeholder="Insira seu email aqui..."/>
            </div>

            <div class="form-group my-4">
                <label class="bold">Senha</label>
                <input type="password" class="form-control" placeholder="Insira sua senha aqui..."/>
            </div>

            <div class="form-group my-4">
                <label class="bold">Confirmar Senha</label>
                <input type="password" class="form-control" placeholder="Insira novamente sua senha aqui..."/>
            </div>

            <div class="form-group my-4">
                <input type="checkbox" id="agree" />
                <span class="bold ms-2">Concordo com os <a class="pink">termos de uso</a></span>

            </div>
        
            <button class="btn bg-blue text-white mt-3 w-100">Próximo</button>
        
        </div>
    )
}