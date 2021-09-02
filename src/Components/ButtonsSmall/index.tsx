import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import React from 'react';

export interface IButtonsProps {
    handleClearAll(): void;
}

const ButtonsSmall = ({ handleClearAll }: IButtonsProps): JSX.Element => (
    <Flex justify="space-between" align="center">
        <Text color="blue.600" as="button">
            Раскрыть окно
        </Text>
        <Text onClick={handleClearAll} color="blue.600" as="button">
            Сбросить
        </Text>
    </Flex>
);

export default ButtonsSmall;