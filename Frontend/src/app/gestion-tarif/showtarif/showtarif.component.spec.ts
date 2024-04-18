import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtarifComponent } from './showtarif.component';

describe('ShowtarifComponent', () => {
  let component: ShowtarifComponent;
  let fixture: ComponentFixture<ShowtarifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowtarifComponent]
    });
    fixture = TestBed.createComponent(ShowtarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
