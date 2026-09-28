import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List implements OnInit {
  httpClient = inject(HttpClient);

  products = signal<any[]>([]);

  ngOnInit() {
    this.httpClient.get<any>('/api/products').subscribe((products) => {
      this.products.set(products);
    });
  }
}
