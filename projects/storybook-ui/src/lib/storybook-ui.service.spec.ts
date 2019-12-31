import { TestBed } from '@angular/core/testing';

import { StorybookUiService } from './storybook-ui.service';

describe('StorybookUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorybookUiService = TestBed.get(StorybookUiService);
    expect(service).toBeTruthy();
  });
});
