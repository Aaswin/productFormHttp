import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadevComponent } from './headev.component';

describe('HeadevComponent', () => {
  let component: HeadevComponent;
  let fixture: ComponentFixture<HeadevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
