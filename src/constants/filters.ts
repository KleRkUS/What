import DownIcon from "../Components/Common/Icons/FilterIcons/DownIcon";
import DropAndDownIcon from "../Components/Common/Icons/FilterIcons/DropAndDownIcon";
import DropIcon from "../Components/Common/Icons/FilterIcons/DropIcon";
import DropTimeIcon from "../Components/Common/Icons/FilterIcons/DropTimeIcon";
import { IWellGroupsFilters } from "../types/WellGroups";
import { WellGroupsTypes } from "./enums/WellGroups";

export const filters: IWellGroupsFilters[] = [
    {
        name: WellGroupsTypes.First,
        icon: DropIcon
    },
    {
        name: WellGroupsTypes.Second,
        icon: DropAndDownIcon
    },
    {
        name: WellGroupsTypes.Third,
        icon: DropTimeIcon
    },
    {
        name: WellGroupsTypes.Fourth,
        icon: DownIcon
    }
]