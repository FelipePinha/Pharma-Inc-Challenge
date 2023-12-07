export interface User {
    name: {
        first: string;
        last: string;
    };
    gender: string;
    email: string;
    registered: {
        date: string;
    };
}
