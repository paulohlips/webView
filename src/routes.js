import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// createAppContainer -> criar a navegação
// createSwitchNavigator -> função da navegação que retorna um componente

import Main from './pages/Main'; //Primeiramente só colocar "Main from '' " e explicar o que é

const Routes = createAppContainer(createSwitchNavigator({ Main }));

export default Routes;
