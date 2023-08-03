import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterStatisticComponent } from './tester-statistic.component';

describe('TesterStatisticComponent', () => {
  let component: TesterStatisticComponent;
  let fixture: ComponentFixture<TesterStatisticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesterStatisticComponent]
    });
    fixture = TestBed.createComponent(TesterStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
