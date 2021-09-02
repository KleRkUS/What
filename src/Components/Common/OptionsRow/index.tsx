import { HStack, Stack, Text } from '@chakra-ui/layout';
import { Checkbox } from '@chakra-ui/react';
import React from 'react';
import { filters } from '../../../constants/filters';
import { IWellGroupsFilters, IWellsData } from '../../../types/WellGroups';
import { QuestionIcon } from '@chakra-ui/icons'

interface IProps {
    options: IWellsData[];
    chosenOptions: number[];
    handleOptionClick(id: number): () => void;
}

const OptionsRow = ({ options, chosenOptions, handleOptionClick }: IProps): JSX.Element => (
    <Stack 
        align="start" 
        wrap="wrap" 
        direction="column" 
        maxH="298px" 
        spacing="6px"
    >
        {options.map((option: IWellsData) => {
            const Icon = filters.find((filter: IWellGroupsFilters) => filter.name === option.type)?.icon || QuestionIcon;
            return(
                <label 
                    htmlFor={String(option.id)} 
                    key={String(option.id)}
                    className="option__label"
                >
                    <HStack spacing={3}>
                        <Checkbox
                            colorScheme="blue"
                            size="md"
                            id={String(option.id)}
                            onChange={handleOptionClick(option.id)}
                            isChecked={chosenOptions.indexOf(option.id) !== -1}
                        />
                        <Icon/>
                        <Text>{option.name}</Text>
                    </HStack>
                </label>
            );
        })}
    </Stack>
);

export default OptionsRow