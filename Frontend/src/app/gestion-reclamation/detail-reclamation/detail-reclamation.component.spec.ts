import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailreclamationComponent } from './detail-reclamation.component';

describe('DetailreclamationComponent', () => {
  let component: DetailreclamationComponent;
  let fixture: ComponentFixture<DetailreclamationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailreclamationComponent]
    });
    fixture = TestBed.createComponent(DetailreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
