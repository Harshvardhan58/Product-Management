import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
  @Input() rating: number= 4;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string>= new EventEmitter<string>();
  ngOnChanges(): void{
    this.starWidth = (86 / 5) * this.rating;
  }
  OnClick(): void{
    this.ratingClicked.emit(`Rating : ${this.rating}`);
  }
}
