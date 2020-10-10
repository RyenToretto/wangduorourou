import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNgLibComponent } from './first-ng-lib.component';

describe('FirstNgLibComponent', () => {
  let component: FirstNgLibComponent;
  let fixture: ComponentFixture<FirstNgLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstNgLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
