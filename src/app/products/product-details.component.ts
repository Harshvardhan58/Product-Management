import { Component, OnInit } from '@angular/core';
import {IProducts} from '../productList/products';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }
  pageTitle: string= 'Product Details';
  product: IProducts;
  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += ` : ${id}`;
    this.product= {
      'productId': id,
      'productName': 'Video Game Controller',
      'productCode': 'GMG-0042',
      'releaseDate': 'October 15, 2015',
      'description': 'Standard two-button video game controller',
      'price': 35.95,
      'starRating': 4.6,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
    };
  }
  onBack(): void{
    this._router.navigate(['/products']);
  }

}
