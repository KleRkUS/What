import { Flex } from '@chakra-ui/layout';
import { Button, ButtonGroup, Text } from '@chakra-ui/react';
import React from 'react';
import { IButtonsProps } from '../ButtonsSmall';

const ButtonsLarge = ({ handleClearAll }: IButtonsProps) => (
    <Flex justify="space-between" align="center">
        <Text onClick={handleClearAll} color="blue.600" as="button">
            Сбросить все
        </Text>

        <ButtonGroup>
            <Button colorScheme="green" sx={{color: '#0E0B1F'}}>
                ОК
            </Button>
            <Button>
                Отмена
            </Button>
        </ButtonGroup>
    </Flex>
);

export default ButtonsLarge;