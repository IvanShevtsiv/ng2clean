export class Person {
    id: number;
    firstName: string = '';
    lastName: string = '';
    dob: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
