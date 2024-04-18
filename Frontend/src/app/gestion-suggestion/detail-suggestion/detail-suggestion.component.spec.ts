import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsuggestionComponent } from './detail-suggestion.component';

describe('DetailsuggestionComponent', () => {
  let component: DetailsuggestionComponent;
  let fixture: ComponentFixture<DetailsuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsuggestionComponent]
    });
    fixture = TestBed.createComponent(DetailsuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
