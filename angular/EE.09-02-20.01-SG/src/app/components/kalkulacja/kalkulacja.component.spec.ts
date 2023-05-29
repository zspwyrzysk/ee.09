import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalkulacjaComponent } from './kalkulacja.component';

describe('KalkulacjaComponent', () => {
  let component: KalkulacjaComponent;
  let fixture: ComponentFixture<KalkulacjaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KalkulacjaComponent]
    });
    fixture = TestBed.createComponent(KalkulacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
