import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  /**
   * Indica si hay click activo
   */
  signal$: BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor() { }

  updateSignal(signal: boolean){
    this.signal$.next(signal)
  }
}
