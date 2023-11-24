export type User = {
    Id: number;
    LastName: string;
    FirstName: string;
    Age: number | null;
    Email: string;
    Photo: Buffer | null;
    Password: string;
    PhoneNumber: string | null;
    Address: string | null;
    BadgeList: string | null;
};