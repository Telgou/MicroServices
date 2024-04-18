import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEtatComponent } from './detail-etat.component';

describe('DetailEtatComponent', () => {
  let component: DetailEtatComponent;
  let fixture: ComponentFixture<DetailEtatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailEtatComponent]
    });
    fixture = TestBed.createComponent(DetailEtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
