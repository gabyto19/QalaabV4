import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCyclesComponent } from './test-cycles.component';

describe('TestCyclesComponent', () => {
  let component: TestCyclesComponent;
  let fixture: ComponentFixture<TestCyclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCyclesComponent]
    });
    fixture = TestBed.createComponent(TestCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
