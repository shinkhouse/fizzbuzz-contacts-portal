import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-message',
    imports: [CommonModule, MatIconModule, MatButtonModule],
    templateUrl: './message.component.html',
    styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input() severity: 'info' | 'warning' | 'error' = 'info';
  @Input({required: true}) icon = '';
  @Input() subject = '';
  @Input({required: true}) description = '';
  @Input() buttonText = '';
  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter();

  emitButtonClick() {
    this.buttonClicked.emit(true);
  }

}
