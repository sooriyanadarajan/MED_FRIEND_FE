import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-uploadprescription',
  templateUrl: './uploadprescription.component.html',
  styleUrls: ['./uploadprescription.component.scss']
})
export class UploadprescriptionComponent {
  imageUrl: any;

  @ViewChild('fileInput') fileInput: any;

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.readFile(file);
  }

  onDragOver(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
  }

  onDragLeave(event: any): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    const file: File = event.dataTransfer.files[0] || this.fileInput.nativeElement.files[0];
    this.readFile(file);
  }

  private readFile(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  removeImage(): void {
    this.imageUrl = null;
    this.fileInput.nativeElement.value = null;
  }
}
