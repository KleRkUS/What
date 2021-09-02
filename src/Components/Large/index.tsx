import React from 'react';
import { getLargeMock } from '../../constants/mock';
import ButtonsLarge from '../ButtonsLarge';
import Card from '../Common/Card';

const Large = (): JSX.Element => {
    const mockedData = getLargeMock();

    return (
        <Card 
            mockedData={mockedData} 
            buttonGroup={ButtonsLarge}
            size="large"
        />
    )
}

export default Large;