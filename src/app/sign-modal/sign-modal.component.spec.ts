import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignModalComponent } from './sign-modal.component';

describe('SignModalComponent', () => {
  let component: SignModalComponent;
  let fixture: ComponentFixture<SignModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignModalComponent]
    });
    fixture = TestBed.createComponent(SignModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
