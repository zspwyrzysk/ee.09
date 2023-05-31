import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnozenieComponent } from './mnozenie.component';

describe('MnozenieComponent', () => {
  let component: MnozenieComponent;
  let fixture: ComponentFixture<MnozenieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MnozenieComponent]
    });
    fixture = TestBed.createComponent(MnozenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
