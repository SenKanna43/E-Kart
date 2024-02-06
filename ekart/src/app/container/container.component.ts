import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  @ViewChild(ProductListComponent) productListComponent !: ProductListComponent;

  searchText: string = ''
  setSearchText(value: string) {
    this.searchText = value;
  }

}
