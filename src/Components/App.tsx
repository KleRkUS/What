import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Small from './Small/Small';
import theme from '../theme';
import Large from './Large';
import Sliders from './Sliders';

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
        <Small/>
        <Large/>
        <Sliders/>
    </ChakraProvider>
  );
}

export default App;
