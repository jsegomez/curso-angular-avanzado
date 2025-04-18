import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  getAll() : Observable<Category[]> {
    return this.http.get<Category[]>(`https://api.escuelajs.co/api/v1/categories`);
  }
}
