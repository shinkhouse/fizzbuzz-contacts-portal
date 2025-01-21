import { CommonModule, NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-send-feedback',
    imports: [CommonModule, NgClass, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule],
    templateUrl: './send-feedback.component.html',
    styleUrl: './send-feedback.component.scss'
})
export class SendFeedbackComponent implements AfterViewInit {
  @Output() closed: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
  @ViewChild('screenVideo') screenVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('screenshot') screenshot!: ElementRef<HTMLImageElement>;
  public base64Img = '';

  async startCapture() {
      try {
          const displayOptions = {
            preferCurrentTab: true,
            video: {
              displaySurface: 'tab'
            },
          }
          const stream = await navigator.mediaDevices.getDisplayMedia(displayOptions);
          this.screenVideo.nativeElement.srcObject = stream;
      } catch (error) {
          console.error('Error accessing screen capture:', error);
      }
  }

  ngAfterViewInit() {
      this.screenVideo.nativeElement.addEventListener('play', () => {
          const canvas = document.createElement('canvas');
          canvas.width = this.screenVideo.nativeElement.videoWidth;
          canvas.height = this.screenVideo.nativeElement.videoHeight;
          canvas
              .getContext('2d')
              ?.drawImage(
                  this.screenVideo.nativeElement,
                  0,
                  0,
                  canvas.width,
                  canvas.height
              );
          const screenshotDataUrl = canvas.toDataURL('image/png');
          this.screenshot.nativeElement.src = screenshotDataUrl;
          this.base64Img = screenshotDataUrl;
      });
  }

  closeSendFeedback() {
    this.closed.emit(true);
  }

  sendFeedback() {
    this.closeSendFeedback();
  }
}
