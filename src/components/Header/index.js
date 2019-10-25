import React from 'react';

import { Container, Top, Logo, Title } from './styles';

import logo from '../../assets/Nubank_Logo.png';

import Icon from 'react-native-vector-icons/Ionicons'

export default function Header() {
    return(
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>André</Title>
            </Top>
            <Icon name="ios-arrow-down" size={20} color="#FFF" />

        </Container>
    )
}