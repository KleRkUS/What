import { Box, VStack } from '@chakra-ui/layout';
import { Heading, Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Filters from '../Filters';
import { filters } from '../../../constants/filters';
import { WellGroupsTypes } from '../../../constants/enums/WellGroups';
import OptionsRow from '../OptionsRow';
import { IWellsData } from '../../../types/WellGroups';
import { IButtonsProps } from '../../ButtonsSmall';
import TextFilter from '../TextFilter';

export interface IFiltersState {
    isAllChecked: boolean;
    checked: WellGroupsTypes[];
}

const initialCheckedState: IFiltersState = {
    isAllChecked: true,
    checked: []
}

interface IProps {
    mockedData: IWellsData[],
    size: 'small' | 'large',
    buttonGroup: ({ handleClearAll }: IButtonsProps) => JSX.Element,
}

const Card = ({ mockedData, size, buttonGroup }: IProps): JSX.Element => {
    const [filtersState, setFiltersState] = useState<IFiltersState>(initialCheckedState);
    const [textFilter, setTextFilter] = useState<string>('');
    const [chosenOptions, setChosenOptions] = useState<number[]>([]);
    const [allOptions, setAllOptions] = useState<IWellsData[]>(mockedData);

    const handleSetAllFilters = () => {
        setFiltersState({
            isAllChecked: true,
            checked: []
        });
    }

    const handleFiltersChange = (name: WellGroupsTypes) => () => {
        const newState: IFiltersState = {
            isAllChecked: true,
            checked: []
        };

        const checked = filtersState.checked.indexOf(name) === -1
        ? [...filtersState.checked, name]
        : [...filtersState.checked].filter((checkedName: WellGroupsTypes) => checkedName !== name);
        console.log(checked.length);

        if (checked.length !== filters.length && checked.length !== 0) {
            newState.isAllChecked = false;
            newState.checked = checked;
        }
        setFiltersState(newState);
    }

    const handleOptionChoose = (id: number) => () => {
        const chosen = chosenOptions.indexOf(id) === -1
        ? [...chosenOptions, id]
        : [...chosenOptions].filter((option: number) => option !== id); 

        setChosenOptions(chosen);
    }

    const handleResetAll = () => {
        setChosenOptions([]);
        setFiltersState({
            isAllChecked: true,
            checked: []
        });
        setTextFilter('');
    }

    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTextFilter(value);
    }

    useEffect(() => {
        const filteredOptions = [...filtersState.isAllChecked 
        ? mockedData
        : mockedData.filter((option: IWellsData) => filtersState.checked.indexOf(option.type) !== -1)]
        .filter((option: IWellsData) => option.name.includes(textFilter));
        setAllOptions(filteredOptions);
    }, [textFilter, filtersState])

    const ButtonGroup = buttonGroup;
    return(
        <Container p={10}>
            <Box 
                p={4} 
                borderWidth="1px" 
                borderRadius="sm"
                w={`${size === 'large' ? "856px" : "282px"}`}
            >
                <VStack align="stretch">
                    <Heading size="md">Группы скважин</Heading>

                    <TextFilter textFilter={textFilter} handleTextInput={handleTextInput}/>

                    <Filters 
                        filters={filters}
                        checkedState={filtersState}
                        checkAll={handleSetAllFilters}
                        handleCheckboxChange={handleFiltersChange}
                    />
                    
                    <Box maxH="298px">
                        <OptionsRow
                            options={allOptions}
                            chosenOptions={chosenOptions}
                            handleOptionClick={handleOptionChoose}
                        />
                    </Box>

                    <ButtonGroup handleClearAll={handleResetAll}/>
                </VStack>
            </Box>
        </Container>
    )
}

export default Card;