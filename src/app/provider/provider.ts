export class Provider {
    id: number;
    firstName: string = '';
    lastName: string = '';
    position: string = '';
    email: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
