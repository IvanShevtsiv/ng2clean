export class Person {
    id: number;
    firstName: string = '';
    lastName: string = '';
    dob: Object;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
