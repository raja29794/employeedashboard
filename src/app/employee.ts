export interface  Employee {
    id: number,
    name: string,
    email: string,
    designation: string;
    team:string,
    mobile: string,
    gender: string,
    dob: Date,
    isActive: boolean,
    range?: any
    employeeType?: string
}
