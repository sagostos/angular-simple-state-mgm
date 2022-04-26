import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { GenericCrudHttpService } from './generic-crud-http.service';

@Injectable()
export class GenericCrudBehaviorService<T> extends GenericCrudHttpService<T> {
  private items$ = new BehaviorSubject<Array<T>>(null);
  private selectedItem$ = new BehaviorSubject<T>(null);
  private readonly loading$ = new BehaviorSubject<boolean>(false);
  private readonly sort$ = new BehaviorSubject<any>(null);

  constructor(public url: string) {
    super(url);
  }

  get selectedItem(): T {
    return this.selectedItem$.getValue();
  }

  set selectedItem(value: T) {
    this.selectedItem$.next(value);
  }

  get items(): Array<T> {
    return this.items$.getValue();
  }

  set items(value: Array<T>) {
    this.items$.next(value);
  }

  get loading(): boolean {
    return this.loading$.getValue();
  }

  set loading(value: boolean) {
    this.loading$.next(value);
  }

  async fetchItems(id: string = ''): Promise<void> {
    try {
      const items$ = this.getItems() as Observable<Array<T>>;
      const items = await lastValueFrom(items$);
      this.items = items;
    } catch (error) {
      throw error;
    }
  }

  async createItem(item: T) {
    this.postItem(item)
      .pipe(take(1))
      .subscribe((item: T) => {
        this.items = [...this.items, item];
      });
  }

  async updateItem(id: string, item: T) {
    this.putItem(item)
      .pipe(take(1))
      .subscribe((item: T) => {
        this.items = this.items.map((i) => {
          if (i['id'] === item['id']) {
            return item;
          }
          return i;
        });
      });
  }

  async removeItem(item: T) {
    this.deleteItem(item)
      .pipe(take(1))
      .subscribe((item: T) => {
        this.items = this.items.filter((i) => {
          return i['id'] === item['id'];
        });
      });
  }
}
