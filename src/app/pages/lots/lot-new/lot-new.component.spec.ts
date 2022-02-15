import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotNewComponent } from './lot-new.component';

describe('LotNewComponent', () => {
  let component: LotNewComponent;
  let fixture: ComponentFixture<LotNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
