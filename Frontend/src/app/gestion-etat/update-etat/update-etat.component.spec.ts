import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEtatComponent } from './update-etat.component';

describe('UpdateEtatComponent', () => {
  let component: UpdateEtatComponent;
  let fixture: ComponentFixture<UpdateEtatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEtatComponent]
    });
    fixture = TestBed.createComponent(UpdateEtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
