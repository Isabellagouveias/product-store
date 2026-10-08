import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { Products } from '../../shared/services/products';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List implements OnInit {
  productsService = inject(Products);

  products = signal<Product[]>([]);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products.set(products);
    });
  }
}
