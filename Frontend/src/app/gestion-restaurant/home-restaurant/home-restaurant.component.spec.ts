import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRestaurantComponent } from './home-restaurant.component';

describe('HomeRestaurantComponent', () => {
  let component: HomeRestaurantComponent;
  let fixture: ComponentFixture<HomeRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRestaurantComponent]
    });
    fixture = TestBed.createComponent(HomeRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
