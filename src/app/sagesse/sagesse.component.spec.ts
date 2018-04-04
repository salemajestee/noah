import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SagesseComponent } from './sagesse.component';

describe('SagesseComponent', () => {
  let component: SagesseComponent;
  let fixture: ComponentFixture<SagesseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SagesseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SagesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
