import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSejourComponent } from './show-sejour.component';

describe('ShowSejourComponent', () => {
  let component: ShowSejourComponent;
  let fixture: ComponentFixture<ShowSejourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSejourComponent]
    });
    fixture = TestBed.createComponent(ShowSejourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
