import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesNewComponent } from './sales-new.component';

describe('SalesNewComponent', () => {
  let component: SalesNewComponent;
  let fixture: ComponentFixture<SalesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
