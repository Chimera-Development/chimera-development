import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html'
})
export class PromptComponent {
  @Input() prompt!: string
  @Output() promptClosed:EventEmitter<boolean> = new EventEmitter()

  onClose() {
    this.promptClosed.emit(false)
  }

  onSaveChanges() {
    this.promptClosed.emit(true)
  }
}
