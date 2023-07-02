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

  theme$: BehaviorSubject<any> = new BehaviorSubject(null)

  constructor() { }

  updateSignal(signal: boolean){
    this.signal$.next(signal)
  }

  /**
   * Envía señal de que cambió el tema de color
   * @param theme
   * @returns
   */
  updateTheme(theme: any){
    this.theme$.next(theme)
    return this.theme$.asObservable()
  }
}
