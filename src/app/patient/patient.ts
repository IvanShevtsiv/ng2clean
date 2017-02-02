export class Patient {
    id: number;
    firstName: string = '';
    lastName: string = '';
    provider: string = '';
    description: string = '';
    address: string = '';
    phone: string = '';
    email: string = '';
    dob: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
