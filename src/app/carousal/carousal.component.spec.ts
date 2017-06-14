import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalComponent } from './carousal.component';

describe('CarousalComponent', () => {
  let component: CarousalComponent;
  let fixture: ComponentFixture<CarousalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});