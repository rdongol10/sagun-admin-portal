import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotHistoryListComponent } from './lot-history-list.component';

describe('LotHistoryListComponent', () => {
  let component: LotHistoryListComponent;
  let fixture: ComponentFixture<LotHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
