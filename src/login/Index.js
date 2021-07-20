import React from 'react';
import { BtnIcons, BtnDefaut } from '../components/styled';
import './styled.css';
import { AreaLogin } from './styled';
import { SiFacebook, SiGoogle } from "react-icons/si";


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return(
        
        <AreaLogin>
            <h1>Faça o login de sua conta</h1>

            <BtnIcons>
                <SiFacebook />
                <div className="center">Faça o login com seu Facebook</div>
            </BtnIcons>

            <BtnIcons>
                <SiGoogle />
                <div className="center">Faça o login com o Google</div>
            </BtnIcons>

            <p>Ou</p>

            <form>
                <div className="form-imput">
                    <label>E-mail</label>
                    <input type="email" />
                </div>

                <div className="form-imput">
                    <label>Senha</label>
                    <input type="password" />
                </div>
            </form>

            <BtnDefaut>
                Entrar
            </BtnDefaut>

            <div className="footerLogin">
                Não tem uma conta? 
                Registre-se
            </div>
        </AreaLogin>
    );
}