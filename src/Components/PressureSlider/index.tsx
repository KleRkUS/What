import { Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { SliderTypes } from '../../constants/enums/SliderTypes';
import Slider from '../Common/Slider';

interface IProps {
    amount: 1 | 2;
}

const PressureSlider = ({ amount }: IProps): JSX.Element => {
    const [values, setValues] = useState<number[]>([]);
    const arr = new Array(amount);
    const indexes = arr.fill(true);

    const onChange = (index: number) => (value: number) => {
        const newValues = [...values];
        newValues[index] = value / 10;
        setValues(newValues); 
    }

    const presetData = {
        min: { value: 100, view: '10'},
        max: { value: 1220, view: '122'},
        dataset: [
            {
                value: 561,
                mark: '56.1'
            },
            {
                value: 802,
                mark: '80.2'
            }
        ],
    }

    return (
        <Flex direction="column">
            <Text>
                Значение(я): {JSON.stringify(values)}
            </Text>
            {indexes.map((value: boolean, index: number) => (
                <Slider
                    {...presetData}
                    onChange={onChange(index)}
                    type={SliderTypes.Pressure}
                    key={index}
                    indexKey={index}
                />
            ))}
        </Flex>
    )
};

export default PressureSlider;
