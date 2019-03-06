import { TestBed } from '@angular/core/testing';

import { PhotoInfoService } from './photo-info.service';

describe('PhotoInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoInfoService = TestBed.get(PhotoInfoService);
    expect(service).toBeTruthy();
  });
});
