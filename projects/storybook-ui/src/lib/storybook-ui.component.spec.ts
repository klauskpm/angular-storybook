import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorybookUiComponent } from './storybook-ui.component';

describe('StorybookUiComponent', () => {
  let component: StorybookUiComponent;
  let fixture: ComponentFixture<StorybookUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorybookUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorybookUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
