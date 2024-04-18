import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSejourComponent } from './detail-sejour.component';

describe('DetailSejourComponent', () => {
  let component: DetailSejourComponent;
  let fixture: ComponentFixture<DetailSejourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailSejourComponent]
    });
    fixture = TestBed.createComponent(DetailSejourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
