import type {User} from "./user";

export interface Thread {
    Id: number;
    User: User;
    ThreadID: string;
    IsE: boolean;
    IsC: boolean;
    Brand: string;
    Count: number;
}