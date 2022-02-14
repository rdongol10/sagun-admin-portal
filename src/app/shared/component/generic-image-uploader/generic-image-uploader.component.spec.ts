import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericImageUploaderComponent } from './generic-image-uploader.component';

describe('GenericImageUploaderComponent', () => {
  let component: GenericImageUploaderComponent;
  let fixture: ComponentFixture<GenericImageUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericImageUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
