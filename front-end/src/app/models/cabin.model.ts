import { Session } from "./session.model";

export interface Cabin {
    id: number;
    cabinNumber: number;
    session: Session;
}