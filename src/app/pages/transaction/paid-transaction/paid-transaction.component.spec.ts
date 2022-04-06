import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidTransactionComponent } from './paid-transaction.component';

describe('PaidTransactionComponent', () => {
  let component: PaidTransactionComponent;
  let fixture: ComponentFixture<PaidTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
