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
    location: {
        street: {
            number: number;
            name: string;
        };
        country: string;
    };
}
