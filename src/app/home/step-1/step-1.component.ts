import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.css']
})
export class Step1Component {

  @Output() nextStep = new EventEmitter<void>();

  clickNext() {
    this.nextStep.emit();
  }

}
