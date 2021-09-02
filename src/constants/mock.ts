import { IWellsData } from "../types/WellGroups";
import { WellGroupsTypes } from "./enums/WellGroups";

export const mockedData: IWellsData[] = [
    {
        id: 0,
        name: '602',
        type: WellGroupsTypes.First
    },
    {
        id: 1,
        name: '603',
        type: WellGroupsTypes.Second
    },
    {
        id: 2,
        name: '678',
        type: WellGroupsTypes.First
    },
    {
        id: 3,
        name: '602',
        type: WellGroupsTypes.Fourth
    },
    {
        id: 4,
        name: '602',
        type: WellGroupsTypes.First
    },
    {
        id: 5,
        name: '10063000',
        type: WellGroupsTypes.First
    },
    {
        id: 6,
        name: '111',
        type: WellGroupsTypes.Third
    },
    {
        id: 7,
        name: '322',
        type: WellGroupsTypes.Third
    },
    {
        id: 8,
        name: '1337',
        type: WellGroupsTypes.First
    },
    {
        id: 9,
        name: '602',
        type: WellGroupsTypes.Second
    }
];

export const getLargeMock = (): IWellsData[] => {
    let mockArr: IWellsData[] = mockedData;
    for (let i = 1; i <= 3; i++) {
        mockArr = [...mockArr, ...mockedData.map((mock: IWellsData) => {
            const mockId = Number(`${i}${mock.id}`);
            return {
                ...mock,
                id: mockId
            }
        })]
    }
    return mockArr;
}