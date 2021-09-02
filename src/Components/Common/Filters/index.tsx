import { Button, HStack, IconButton } from '@chakra-ui/react';
import React from 'react';
import { WellGroupsTypes } from '../../../constants/enums/WellGroups';
import { IWellGroupsFilters } from '../../../types/WellGroups';
import { IFiltersState } from '../Card';

interface IProps {
    filters: IWellGroupsFilters[]; 
    checkedState: IFiltersState;
    checkAll(): void;
    handleCheckboxChange(name: WellGroupsTypes): () => void;
}

const Filters = ({ 
    filters, 
    checkedState,
    checkAll, 
    handleCheckboxChange 
}: IProps): JSX.Element => (
    <HStack spacing={3}>
        <Button
            onClick={checkedState.isAllChecked ? () => {} : checkAll}
            colorScheme={checkedState.isAllChecked ? "blue" : "gray"}
        >
            Все
        </Button>
        {filters.map((filter: IWellGroupsFilters, index: number) => {
            const Icon = filter.icon;
            const isSelected = checkedState.checked.indexOf(filter.name) !== -1;

            return (
                <React.Fragment key={`${filter.name}_${index}`}>
                    <IconButton
                        aria-label={filter.name}
                        icon={<Icon isSelected={isSelected}/>}
                        size="md"
                        variant="solid"
                        onClick={handleCheckboxChange(filter.name)}
                        colorScheme={isSelected ? "blue" : "gray"}
                    />
                </React.Fragment>
            );
        })}
    </HStack>
)

export default Filters;