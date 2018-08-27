import {Department} from './Department.model';

export class Student {
    public id: number;
    public fullName: string;
    public address: string;
    public email: string;
    public contact: string;
    public role: string;
    public department: Department;
    public imageUrl: string;
    public active: boolean;


    constructor() {
    }
}
