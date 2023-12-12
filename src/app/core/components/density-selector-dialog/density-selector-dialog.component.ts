import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-density-selector-dialog',
    standalone: true,
    imports: [MatDialogModule, MatButtonToggleModule, ReactiveFormsModule, MatButtonModule, FlexLayoutModule, NgIf],
    templateUrl: './density-selector-dialog.component.html',
    styleUrl: './density-selector-dialog.component.scss',
})
export class DensitySelectorDialogComponent {
    public density = new FormControl('comfortable');
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        if (data.density) {
            this.density.setValue(data.density);
        }
    }
}
