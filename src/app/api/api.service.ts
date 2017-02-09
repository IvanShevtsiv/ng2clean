export class ApiService {
  // Main url
  private api = {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
    baseUrl: 'https://192.168.241.221'
  };

  // Patient api's
  private appointment = '/api/appointment';

  appointment() {
    return `${this.api.baseUrl}${this.appointment}`;
  }

  appointmentById(id) {
    return `${this.api.baseUrl}${this.appointment}/${id}`;
  }

  // Patient api's
  private patient = '/api/patient';

  patient() {
    return `${this.api.baseUrl}${this.patient}`;
  }

  patientById(id) {
    return `${this.api.baseUrl}${this.patient}/${id}`;
  }

  // Provider api's
  private provider = '/api/provider';

  provider() {
    return `${this.api.baseUrl}${this.provider}`;
  }

  providerById(id) {
    return `${this.api.baseUrl}${this.provider}/${id}`;
  }
}
