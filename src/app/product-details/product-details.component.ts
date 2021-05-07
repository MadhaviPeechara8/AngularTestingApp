import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{
  //to recieve data from parent to child
  @Input() productObj:Product;
  //create custom event

  @Output() myEvent=new EventEmitter()
  sendProductDetailsToParent(productTitle){
   this.myEvent.emit(productTitle);
  }
  
}
