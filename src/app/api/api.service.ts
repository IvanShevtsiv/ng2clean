export class ApiService {
  // Main url
  public apiConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json; charset=utf-8'
    },
    baseUrl: 'https://192.168.241.221'
  };

  // Patient api's
  private appointmentApi = '/api/appointment';

  appointment() {
    return `${this.apiConfig.baseUrl}${this.appointmentApi}`;
  }

  appointmentById(id) {
    return `${this.apiConfig.baseUrl}${this.appointmentApi}/${id}`;
  }

  // Patient api's
  private patientApi = '/api/patient';

  patient() {
    return `${this.apiConfig.baseUrl}${this.patientApi}`;
  }

  patientById(id) {
    return `${this.apiConfig.baseUrl}${this.patientApi}/${id}`;
  }

  // Provider api's
  private providerApi = '/api/provider';

  provider() {
    return `${this.apiConfig.baseUrl}${this.providerApi}`;
  }

  providerById(id) {
    return `${this.apiConfig.baseUrl}${this.providerApi}/${id}`;
  }
}
