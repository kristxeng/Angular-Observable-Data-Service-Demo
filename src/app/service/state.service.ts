import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private store$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  readonly value$: Observable<string> = this.store$.asObservable();

  constructor() { }

  change(value: string): void {
    this.store$.next(value);
  }
}
