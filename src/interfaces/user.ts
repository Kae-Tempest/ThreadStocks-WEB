import type {Thread} from "./thread.ts";

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    threads: Thread[];
}