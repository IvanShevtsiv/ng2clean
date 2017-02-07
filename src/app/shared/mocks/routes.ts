import { ActivatedRoute, Params, Data } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export class MockActivatedRoute extends ActivatedRoute {
  params: Observable<Params>;
  data: Observable<Data>;

  constructor(parameters?: { [key: string]: any; }, data?: { [key: string]: any; }) {
    super();
    this.params = Observable.of(parameters);
    this.data = Observable.of(data);
  }
}

export class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

