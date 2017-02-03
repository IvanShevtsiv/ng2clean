import { Component, OnInit } from '@angular/core';

import { Provider } from '../provider';
import { ProviderDataService } from '../provider-data.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss']
})
export class ProviderListComponent implements OnInit {
  providers: Provider[] = [];

  constructor(private providerDataService: ProviderDataService) { }

  ngOnInit() {
    this.getAllProviders();
  }

  onRemoveProvider(deletedProvider) {
    this.providerDataService.deleteProviderById(deletedProvider.id);
  }

  private getAllProviders() {
    this.providers = this.providerDataService.getAllProviders();
  }
}
