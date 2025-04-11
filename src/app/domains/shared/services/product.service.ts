import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  getProducts(params: { categoryId?: string, categorySlug?: string } ) {
    const url = new URL(`${environment.apiUrl}/api/v1/products`);
    const { categoryId: category, categorySlug: slug } = params;

    if (category) url.searchParams.set('categoryId', category);
    if (slug) url.searchParams.set('categorySlug', slug);

    return this.http.get<Product[]>(url.toString());
  }

  getOne(id: string) {
    return this.http.get<Product>(
      `${environment.apiUrl}/api/v1/products/${id}`,
    );
  }
}
