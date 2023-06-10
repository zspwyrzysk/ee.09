import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObliczeniaComponent } from './obliczenia.component';

describe('ObliczeniaComponent', () => {
  let component: ObliczeniaComponent;
  let fixture: ComponentFixture<ObliczeniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObliczeniaComponent]
    });
    fixture = TestBed.createComponent(ObliczeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
