/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventFormServiceService } from './EventFormService.service';

describe('Service: EventFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventFormServiceService]
    });
  });

  it('should ...', inject([EventFormServiceService], (service: EventFormServiceService) => {
    expect(service).toBeTruthy();
  }));
});
