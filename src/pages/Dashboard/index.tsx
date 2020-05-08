import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="#">
                    <img src="https://avatars0.githubusercontent.com/u/13937762?s=460&u=0a50919caf2890ec2208a513377c5412bf1d7bac&v=4"
                        alt="Project WhatsApp" />
                    <div>
                        <strong>juliancioc/whatsapp</strong>
                        <p>This is my project famous!</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="#">
                    <img src="https://avatars0.githubusercontent.com/u/13937762?s=460&u=0a50919caf2890ec2208a513377c5412bf1d7bac&v=4"
                        alt="Project WhatsApp" />
                    <div>
                        <strong>juliancioc/whatsapp</strong>
                        <p>This is my project famous!</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="#">
                    <img src="https://avatars0.githubusercontent.com/u/13937762?s=460&u=0a50919caf2890ec2208a513377c5412bf1d7bac&v=4"
                        alt="Project WhatsApp" />
                    <div>
                        <strong>juliancioc/whatsapp</strong>
                        <p>This is my project famous!</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    )
}

export default Dashboard;
