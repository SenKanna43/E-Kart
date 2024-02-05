import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input()
  all: number = 10
  @Input()
  inStock: number = 0
  @Input()
  outOfStock: number = 0

  @Output()
  selectedFilterRadioButtonChange: EventEmitter<string> = new EventEmitter<string>()

  selectedFilterRadioButton: string = 'all'

  onSelectedFilterRadioButtonChanged() {
    this.selectedFilterRadioButtonChange.emit(this.selectedFilterRadioButton)
  }
}
