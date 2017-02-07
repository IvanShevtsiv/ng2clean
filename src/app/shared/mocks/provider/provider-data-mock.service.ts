import { SpyObject } from '../helper';
import { ProviderDataService } from '../../../provider/provider-data.service';
import Spy = jasmine.Spy;

export class ProviderDataMockService extends SpyObject {
  addProvider: Spy;
  deleteProviderById: Spy;
  updateProviderById: Spy;
  getAllProviders: Spy;
  getProviderById: Spy;
  fakeResponse: any;

  constructor() {
    super( ProviderDataService );

    this.fakeResponse = null;
    this.addProvider = this.spy('addProvider').andReturn(this);
    this.deleteProviderById = this.spy('deleteProviderById').andReturn(this);
    this.updateProviderById = this.spy('updateProviderById').andReturn(this);
    this.getAllProviders = this.spy('getAllProviders').andReturn(this);
    this.getProviderById = this.spy('getProviderById').andReturn(this);
  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
