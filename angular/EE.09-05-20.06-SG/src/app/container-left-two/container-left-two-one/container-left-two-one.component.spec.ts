import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLeftTwoOneComponent } from './container-left-two-one.component';

describe('ContainerLeftTwoOneComponent', () => {
  let component: ContainerLeftTwoOneComponent;
  let fixture: ComponentFixture<ContainerLeftTwoOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerLeftTwoOneComponent]
    });
    fixture = TestBed.createComponent(ContainerLeftTwoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
