import { TestBed, async, inject } from '@angular/core/testing';

import { Provider } from './provider';
import { ProviderDataService } from './provider-data.service';

describe('ProviderDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProviderDataService]
    });
  });

  it('should ...', inject([ProviderDataService], (service: ProviderDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllProviders()', () => {
    it('should return an empty array by default', inject([ProviderDataService], (service: ProviderDataService): any => {
      expect(service.getAllProviders()).toEqual([]);
      // return service.getAllProviders().subscribe(
      //   res => expect(res).toEqual([])
      // );
    }));

    it('should return all providers', inject([ProviderDataService], (service: ProviderDataService): any => {
      const provider1 = new Provider({firstName: 'Jhon', lastName: 'Doe', position: '', email: ''});
      const provider2 = new Provider({firstName: 'Jane', lastName: 'Doe', position: '', email: ''});

      service.addProvider(provider1);
      service.addProvider(provider2);

      expect(service.getAllProviders()).toEqual([provider1, provider2]);
      // return service.getAllProviders().subscribe(
      //   res => expect(res).toEqual([provider1, provider2])
      // );
    }));
  });

  describe('#save(provider)', () => {
    it('should automatically assign an incrementing id', inject([ProviderDataService], (service: ProviderDataService) => {
      const provider1 = new Provider({firstName: 'Jhon', lastName: 'Doe', position: '', email: ''});
      const provider2 = new Provider({firstName: 'Jane', lastName: 'Doe', position: '', email: ''});

      service.addProvider(provider1);
      service.addProvider(provider2);

      expect(service.getProviderById(1)).toEqual(provider1);
      expect(service.getProviderById(2)).toEqual(provider2);
    }));
  });

  describe('#deleteProviderById(id)', () => {
    it('should remove provider with the corresponding id', inject([ProviderDataService], (service: ProviderDataService) => {
      const provider1 = new Provider({firstName: 'Jhon', lastName: 'Doe', position: '', email: ''});
      const provider2 = new Provider({firstName: 'Jane', lastName: 'Doe', position: '', email: ''});

      service.addProvider(provider1);
      service.addProvider(provider2);

      expect(service.getAllProviders()).toEqual([provider1, provider2]);

      service.deleteProviderById(1);

      expect(service.getAllProviders()).toEqual([provider2]);

      service.deleteProviderById(2);

      expect(service.getAllProviders()).toEqual([]);
    }));

    it('should not removing anything if provider with corresponding id is not found', inject([ProviderDataService],
      (service: ProviderDataService) => {
        const provider1 = new Provider({firstName: 'Jhon', lastName: 'Doe', position: '', email: ''});
        const provider2 = new Provider({firstName: 'Jane', lastName: 'Doe', position: '', email: ''});

        service.addProvider(provider1);
        service.addProvider(provider2);

        expect(service.getAllProviders()).toEqual([provider1, provider2]);

        service.deleteProviderById(3);

        expect(service.getAllProviders()).toEqual([provider1, provider2]);
    }));
  });

  describe('#updateProviderById(id, values)', () => {
    it('should return provider with the corresponding id and updated data',
      inject([ProviderDataService], (service: ProviderDataService) => {
      const provider = new Provider({firstName: 'Jhon', lastName: 'Doe', position: '', email: ''});
      const newName = 'Max';

      service.addProvider(provider);

      const updatedProvider = service.updateProviderById(1, {
        firstName: newName
      });

      expect(updatedProvider.firstName).toEqual(newName);
    }));

    it('should return null if provider is not found', inject([ProviderDataService], (service: ProviderDataService) => {
      const provider: Provider = new Provider({firstName: 'Jhon', lastName: 'Doe', position: '', email: ''});

      service.addProvider(provider);

      const updatedProvider: Provider = service.updateProviderById(2, {
        firstName: 'Max'
      });

      expect(updatedProvider).toEqual(null);
    }));
  });
});
