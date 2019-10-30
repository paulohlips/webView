import React from 'react';

import logo from '../../assets/Nubank_Logo.png'

import {Container, Top, Logo, Title} from './styles'; 

import Icon from 'react-native-vector-icons/Ionicons';

//Vai precisar dar yarn add react-native-vector-icons, linkar manualmente e dar um run-android de novo

export default function Header() {
    return(
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Seu nome</Title>
            </Top>
            <Icon name="ios-arrow-down" size={20} color="#FFF" /> 
        </Container>
    );
}