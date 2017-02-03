import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Provider } from './provider';
import { ProviderDataService } from './provider-data.service';

@Injectable()
export class ProviderResolver implements Resolve<Provider> {
  constructor(private providerDataService: ProviderDataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.providerDataService.getProviderById(parseInt(route.params['id'], 10));
  }
}
