import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import SearchIcon from '../Icons/SearchIcon';

interface IProps {
    textFilter: string;
    handleTextInput(e: React.ChangeEvent<HTMLInputElement>): void;
}

const TextFilter = ({ textFilter, handleTextInput }: IProps): JSX.Element => (
    <InputGroup>
        <InputLeftElement
            pointerEvents="none"
            boxSize="32px"
            children={<SearchIcon/>}
        />
        <Input 
            placeholder="Введите номер скважины"
            size="sm"
            value={textFilter}
            onChange={handleTextInput}
        />
    </InputGroup>
);

export default TextFilter;