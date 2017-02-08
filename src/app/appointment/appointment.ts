export class Appointment {
    id: number;
    patientId: number;
    providerId: number;
    description: string = '';
    startDate: Date;
    endDate: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
