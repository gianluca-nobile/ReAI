import { Component } from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent {

  selectedFileNames: { name: string, size: number }[] = [];

  openFileInput(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      Array.from(input.files).forEach(file => {
        this.selectedFileNames.push({ name: file.name, size: file.size });
      });
    }
  }

  formatFileSize(size: number): string {
    const units = ['B', 'KB', 'MB', 'GB'];
    let index = 0;

    while (size >= 1024 && index < units.length - 1) {
      size /= 1024;
      index++;
    }

    return `${size.toFixed(2)} ${units[index]}`;
  }

  removeFile(index: number) {
    this.selectedFileNames.splice(index, 1);
  }

}
