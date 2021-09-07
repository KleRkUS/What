import { HStack } from '@chakra-ui/react';
import React from 'react';
import PressureSlider from './PressureSlider';
import SkinFactorSlider from './SkinFactorSlider';

const Sliders = (): JSX.Element => (
    <HStack p={10} align="center" spacing="20px">
        <PressureSlider amount={1}/>
        <PressureSlider amount={2}/>
        <SkinFactorSlider/>
    </HStack>
);

export default Sliders