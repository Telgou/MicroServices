import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSejourComponent } from './modifier-sejour.component';

describe('ModifierSejourComponent', () => {
  let component: ModifierSejourComponent;
  let fixture: ComponentFixture<ModifierSejourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierSejourComponent]
    });
    fixture = TestBed.createComponent(ModifierSejourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
