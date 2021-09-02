import React from 'react';
import { mockedData } from '../../constants/mock';
import ButtonsSmall from '../ButtonsSmall';
import Card from '../Common/Card';

const Small = (): JSX.Element => (
    <Card 
        mockedData={mockedData} 
        buttonGroup={ButtonsSmall}
        size="small"
    />
)

export default Small;