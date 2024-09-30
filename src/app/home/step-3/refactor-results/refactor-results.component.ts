import { Component } from '@angular/core';

@Component({
  selector: 'app-refactor-results',
  templateUrl: './refactor-results.component.html',
  styleUrls: ['./refactor-results.component.css']
})
export class RefactorResultsComponent {

  loadingDownload: boolean = false;


  startDownload() {
    this.loadingDownload = true;
    setTimeout(() => {
      this.loadingDownload = false;
    }, 3000);
  }

}
