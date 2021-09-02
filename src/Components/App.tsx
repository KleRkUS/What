import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Small from './Small/Small';
import theme from '../theme';
import Large from './Large';

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
        <Small/>
        <Large/>
    </ChakraProvider>
  );
}

export default App;
