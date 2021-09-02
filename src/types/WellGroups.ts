import { IFilterIconParams } from "../Components/Common/Icons/FilterIcons/types";
import { WellGroupsTypes } from "../constants/enums/WellGroups";

export interface IWellGroupsFilters {
    name: WellGroupsTypes;
    icon: ({ isSelected }: IFilterIconParams) => JSX.Element;
}

export interface IWellsData {
    id: number;
    name: string;
    type: WellGroupsTypes;
}