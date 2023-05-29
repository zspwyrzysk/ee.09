import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwarzComponent } from './twarz.component';

describe('TwarzComponent', () => {
  let component: TwarzComponent;
  let fixture: ComponentFixture<TwarzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwarzComponent]
    });
    fixture = TestBed.createComponent(TwarzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
