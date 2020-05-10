import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                Voltar
            </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars0.githubusercontent.com/u/13937762?s=460&u=0a50919caf2890ec2208a513377c5412bf1d7bac&v=4" alt="Juliancio" />
                    <div>
                        <strong>juliancio/portfolio</strong>
                        <p>descricao do repositorio</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Starts</span>
                    </li>
                    <li>
                        <strong>1808</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>1808</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="#">
                    <div>
                        <strong>fsdffsfd</strong>
                        <p>fdsfdssdffsdf</p>
                    </div>

                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
