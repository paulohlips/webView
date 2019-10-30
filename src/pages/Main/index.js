import React, {Component} from 'react';
import {Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Desc, Note} from './styles'; //explicar que vai ser criado no styles.js
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

/*  COMO FAZIAMOS ANTES
//import { View } from 'react-native';
export default class Main extends Component{

    render() {

    return(
        <View />
    );

}}
*/

/*
export default class Main extends Component{

    render() {

    return(
        <Container />
    );

}}
*/


//COLOCAR O HEADER E O TABS DEPOIS DE FAZER AS CONFIGURAÇÕES

//export default function Main(){


export default class Main extends Component {

    state = {

    };

    render() {
    return(
        <Container>
            <Header />
            <Content>
                <Card>
                    <CardHeader>
                        <Icon name="attach-money" size={28} color="#666" />
                        <Icon name="visibility-off" size={28} color="#666" />
                    </CardHeader>
                    <CardContent>
                        <Title>Saldo disponível</Title>
                        <Desc>R$ 15.000.000,00 </Desc>
                    </CardContent>
                    <CardFooter>
                        <Note>Transferência de R$15.000.000,00 recebida de Dandico's TI </Note>
                    </CardFooter>
                </Card>
            </Content>
            <Tabs />
        </Container>
    );
}
}
