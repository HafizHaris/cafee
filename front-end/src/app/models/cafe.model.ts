import { Cabin } from "./cabin.model";

export interface Cafe {
    id: number;
    cafeName: string;
    totalCabins: number;
    cabins: Cabin[];
}