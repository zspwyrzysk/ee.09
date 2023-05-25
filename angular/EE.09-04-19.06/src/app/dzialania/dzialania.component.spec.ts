import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzialaniaComponent } from './dzialania.component';

describe('DzialaniaComponent', () => {
  let component: DzialaniaComponent;
  let fixture: ComponentFixture<DzialaniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzialaniaComponent]
    });
    fixture = TestBed.createComponent(DzialaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
