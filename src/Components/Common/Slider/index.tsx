import React, { useEffect, useRef, useState } from 'react';
import { 
    Box, 
    Flex, 
    Slider as ChakraSlider, 
    SliderThumb, 
    SliderTrack, 
    Text 
} from '@chakra-ui/react';
import { SliderTypes } from '../../../constants/enums/SliderTypes';
import { getStylesByType } from './styles';

interface IProps {
    min: { value: number, view: string};
    max: { value: number, view: string};
    dataset: { value: number, mark: string }[];
    type: SliderTypes;
    indexKey?: number;
    onChange(value: number): void;
}

const Slider = ({
    min, 
    max, 
    dataset,
    type,
    indexKey = 0,
    onChange
}: IProps): JSX.Element => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [rangeValue, setRangeValue] = useState<number>(0);
    
    useEffect(() => {
        if (ref) {
            ref.current?.setAttribute('list', `rangeList_${type}_${indexKey}`);
        }
    }, [])

    const setValue = (value: number) => () => {
        setRangeValue(value);
    }

    useEffect(() => {
        onChange(rangeValue);
    }, [rangeValue])

    return(
        <Flex alignItems="center">
            <Text>{min.view}</Text>

            <ChakraSlider
                m="10px 20px" 
                min={min.value} 
                max={max.value} 
                step={1}
                ref={ref} 
                value={rangeValue}
                onChange={setRangeValue}
                w="322px" 
                h="8px"
            >
                <SliderTrack bg="linear-gradient(270deg, #3B9CE2 0%, #7A6759 103.11%)"/>
                <SliderThumb 
                    bg="#3B9CE2" 
                    width={2} 
                    height="60px"
                    sx={{
                        borderRadius: "1px",
                    }}
                />

                {dataset.map((option: { value: number, mark: string }, index: number) => (
                    <Box
                        as="span"
                        onClick={setValue(option.value)}
                        sx={getStylesByType(`mark${index + 1}_${type}`)}
                    />
                ))}

            </ChakraSlider>
            <datalist id={`rangeList_${type}_${indexKey}`}>
                {dataset.map((option: { value: number, mark: string }) => (
                    <option>{option.value}</option>
                ))}
            </datalist>

            
            <Text>{max.view}</Text>
        </Flex>
    );
}

export default Slider;