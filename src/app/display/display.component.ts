import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  products: {
    name: string
    description: string
    price: number
    inventory: number
    unit: number
    supplier: string
    active: boolean
  }[];

  constructor() { 
    this.products = []
  }

  ngOnInit():void {
    const storedProducts = localStorage.getItem('products')
    if(storedProducts) {
      this.products = JSON.parse(storedProducts)
    }
  }
}
