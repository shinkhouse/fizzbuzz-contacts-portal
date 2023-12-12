import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DensitySelectorDialogComponent } from './density-selector-dialog.component';

describe('DensitySelectorDialogComponent', () => {
  let component: DensitySelectorDialogComponent;
  let fixture: ComponentFixture<DensitySelectorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DensitySelectorDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DensitySelectorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
