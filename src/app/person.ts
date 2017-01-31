export class Person {
    id: number;
    firstName = '';
    lastName = '';
    dob: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
