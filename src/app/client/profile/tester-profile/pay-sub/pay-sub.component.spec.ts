import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySubComponent } from './pay-sub.component';

describe('PaySubComponent', () => {
  let component: PaySubComponent;
  let fixture: ComponentFixture<PaySubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaySubComponent]
    });
    fixture = TestBed.createComponent(PaySubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
