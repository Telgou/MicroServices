import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfactureComponent } from './showfacture.component';

describe('ShowfactureComponent', () => {
  let component: ShowfactureComponent;
  let fixture: ComponentFixture<ShowfactureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowfactureComponent]
    });
    fixture = TestBed.createComponent(ShowfactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
