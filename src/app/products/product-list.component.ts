import { ChangeDetectionStrategy, Component } from '@angular/core';

import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  pageTitle = 'Product List';
  errorMessage = '';
  categories;

  // Declarative
  // We call streams directly instead of calling methods that return streams
  // possibility to combine streams, share observables, react to user actions
  // type of products$ property is inferred
  // Assign a local property to the obs property from the service
  // No need for getProducts(), onInit, and OnDestroy
  products$ = this.productService.products$.pipe(
    // maintain error handling in declarative pattern
    catchError((err) => {
      this.errorMessage = err;
      return of([]);
    })
  );

  constructor(private productService: ProductService) {}

  // Procedural
  // Procedural data retrival pattern. We call a procedure .getProducts() in the service
  // ngOnInit(): void {
  //   this.products$ = this.productService.getProducts().pipe(
  //     catchError((err) => {
  //       this.errorMessage = err;
  //       return of([]);
  //     })
  //   );
  // }

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
