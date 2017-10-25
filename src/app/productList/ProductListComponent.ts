import {Component, OnInit} from '@angular/core';
import {IProducts} from './products';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.filtered(this.listFilter) : this.products;
  }
  get listFilter(): string {
    return this._listFilter;
  }
  constructor(){
    this.listFilter = 'cart';
    this.filteredProducts = this.listFilter ? this.filtered(this.listFilter) : this.products;
  }
  pageTitle: string= 'Product List';
  imageWidth: number= 50;
  imageMargin: number= 2;
  listImage: boolean= false;
  private _listFilter: string;
  filteredProducts: IProducts[];
  products: IProducts[]= [
    {
      'productId': 1,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    },
    {
      'productId': 2,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': 'March 18, 2016',
      'description': '15 gallon capacity rolling garden cart',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    }
  ];
  ngOnInit(): void{
    console.log('OnInit');
  }
  toggleImage(): void{
    this.listImage = !this.listImage;
  }
  filtered(filterString: string): IProducts[]{
    filterString = filterString.toLocaleLowerCase();
    return this.products.filter((product: IProducts) => {
      return product.productName.toLocaleLowerCase().indexOf(filterString) !== -1;
    });
  }
  starClicked(message:string):void{
    this.pageTitle=  `Product List : ${message}`;
  }
}
