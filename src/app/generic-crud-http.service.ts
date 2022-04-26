import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Injectable()
export class GenericCrudHttpService<T> {
  httpClient: HttpClient;

  constructor(public url: string = '') {}

  getItems(id: string = '', params?: any): Observable<Array<T>> {
    const url = id !== '' ? this.url.replace('${id}', id) : this.url;
    return this.httpClient
      .get(url, {
        params: new HttpParams({ fromObject: { ...params } }),
      })
      .pipe(map((response: any) => response.data));
    //return (of([]).pipe(debounceTime(500)) as Observable<Array<T>>);
  }

  postItem(item: T): Observable<T> {
    // return this.httpClient
    //   .post(this.url, item)
    //   .pipe(map((response: any) => response.data));
    return of(item).pipe(debounceTime(500));
  }

  putItem(item: T): Observable<T> {
    // return this.httpClient
    //   .put(this.url, item)
    //   .pipe(map((response: any) => response.data));
    return of(item).pipe(debounceTime(500));
  }

  deleteItem(item: T): Observable<T> {
    // return this.httpClient
    //   .delete(this.url, item)
    //   .pipe(map((response: any) => response.data));
    return of(item).pipe(debounceTime(500));
  }
}
