import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsuggestionComponent } from './show-suggestion.component';

describe('ShowsuggestionComponent', () => {
  let component: ShowsuggestionComponent;
  let fixture: ComponentFixture<ShowsuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowsuggestionComponent]
    });
    fixture = TestBed.createComponent(ShowsuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
