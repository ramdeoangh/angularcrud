export class Employee {
    id:number;
    name:string;
    gender:string;
    email?:string;
    contactPreferences:string;
    phoneNumber?: number;
    dateOfBirth:Date;

    department:string;
    isActive:boolean;
    photoPath:string;
}