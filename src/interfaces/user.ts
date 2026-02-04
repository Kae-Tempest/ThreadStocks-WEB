import type {Thread} from "./thread.ts";

export interface User {
    ID: number;
    Username: string;
    Email: string;
    Password: string;
    Threads: Thread[];
}