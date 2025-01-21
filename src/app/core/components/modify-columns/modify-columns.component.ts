import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-modify-columns',
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatSelectModule, MatIconModule, MatInputModule, MatFormFieldModule],
    templateUrl: './modify-columns.component.html',
    styleUrl: './modify-columns.component.scss'
})
export class ModifyColumnsComponent {
  columns = [];

}
