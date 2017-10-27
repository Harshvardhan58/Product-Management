import {Component, OnInit} from '@angular/core';
import {IProducts} from './products';
import {ProductsService} from './products.service';
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.filtered(this.listFilter) : this.products;
  }
  get listFilter(): string {
    return this._listFilter;
  }
  constructor(private _productService: ProductsService) {

  }
  pageTitle: string= 'Product List';
  imageWidth: number= 50;
  imageMargin: number= 2;
  listImage: boolean= false;
  private _listFilter: string;
  filteredProducts: IProducts[];
  products: IProducts[];
  ngOnInit(): void {
    this._productService.getProducts().subscribe(products => {this.products = products;
    this.filteredProducts = this.products;
    });

    console.log('OnInit');
  }
  toggleImage(): void {
    this.listImage = !this.listImage;
  }
  filtered(filterString: string): IProducts[] {
    filterString = filterString.toLocaleLowerCase();
    return this.products.filter((product: IProducts) => {
      return product.productName.toLocaleLowerCase().indexOf(filterString) !== -1;
    });
  }
  starClicked(message: string): void {
    this.pageTitle =  `Product List : ${message}`;
  }
}
