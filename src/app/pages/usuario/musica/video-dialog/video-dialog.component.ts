import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-dialog',
  imports: [
  CommonModule,
  MatDialogModule
 ],
  templateUrl: './video-dialog.component.html',
  styleUrl: './video-dialog.component.css'
})
export class VideoDialogComponent {
  videoUrl: SafeResourceUrl;

  constructor(
    public dialogRef: MatDialogRef<VideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {url: string},
    private sanitizer : DomSanitizer
  ){
    this.videoUrl = this.sanitizeUrl(data.url)
  }

  sanitizeUrl(url: string): SafeResourceUrl{
    return this. sanitizer.bypassSecurityTrustResourceUrl(url);
  }
   
  closeModal(){
    this.dialogRef.close();
  }

}
