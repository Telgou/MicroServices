import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailfactureComponent } from './detailfacture.component';

describe('DetailfactureComponent', () => {
  let component: DetailfactureComponent;
  let fixture: ComponentFixture<DetailfactureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailfactureComponent]
    });
    fixture = TestBed.createComponent(DetailfactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
