import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { SliderTypes } from '../../constants/enums/SliderTypes';
import Slider from '../Common/Slider';

const SkinFactorSlider = (): JSX.Element => {
    const [value, setValue] = useState<number>(0); 

    const onChange = (newValue: number) => {
        setValue(newValue);
    }

    const presetData = {
        min: { value: -10, view: '-10'},
        max: { value: 10, view: '10'},
        dataset: [
            {
                value: -1,
                mark: '-1'
            },
            {
                value: 8,
                mark: '8'
            }
        ],
    }

    return (
        <Flex direction="column">
            <Text>Значение: {value}</Text>
            <Slider
                {...presetData}
                onChange={onChange}
                type={SliderTypes.SkinFactor}
            />
        </Flex>
    )
};

export default SkinFactorSlider;
