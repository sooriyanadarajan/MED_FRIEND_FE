import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadprescriptionComponent } from './uploadprescription.component';

describe('UploadprescriptionComponent', () => {
  let component: UploadprescriptionComponent;
  let fixture: ComponentFixture<UploadprescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadprescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
