import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import Cep from './components/Cep'; // Importando o componente Cep

import './custom.css';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/cep' component={Cep} /> {/* Rota para o componente Cep */}
                <Route path='/fetch-data' component={FetchData} />
            </Layout>
        );
    }
}
