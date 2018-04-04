import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoahGabrielComponent } from './noah-gabriel.component';

describe('NoahGabrielComponent', () => {
  let component: NoahGabrielComponent;
  let fixture: ComponentFixture<NoahGabrielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoahGabrielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoahGabrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
