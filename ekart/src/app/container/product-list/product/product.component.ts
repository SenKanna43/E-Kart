import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product !: {
    id: number,
    name: string,
    description: string,
    brand: string,
    gender: string,
    category: string,
    size: number[],
    color: any,
    price: number,
    discountPrice?: number,
    is_in_inventory: boolean,
    items_left: number,
    imageURL: string,
    slug: string
  }


  handleImageError(event: any): void {
    const productItem = event.target.closest('.ekart--product--item');
    if (productItem) {
      productItem.style.display = 'none'; // Hide the entire product item
    }

  }

}
