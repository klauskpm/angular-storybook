import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleButtonComponent } from './simple-button.component';

describe('SimpleButtonComponent', () => {
  let component: SimpleButtonComponent;
  let fixture: ComponentFixture<SimpleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
