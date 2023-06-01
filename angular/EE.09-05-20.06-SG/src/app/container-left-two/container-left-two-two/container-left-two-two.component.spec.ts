import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLeftTwoTwoComponent } from './container-left-two-two.component';

describe('ContainerLeftTwoTwoComponent', () => {
  let component: ContainerLeftTwoTwoComponent;
  let fixture: ComponentFixture<ContainerLeftTwoTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerLeftTwoTwoComponent]
    });
    fixture = TestBed.createComponent(ContainerLeftTwoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
