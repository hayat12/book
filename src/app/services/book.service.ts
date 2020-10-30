import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private subject = new BehaviorSubject({});
  constructor() { }

  /**
   * create a method to save the data into UI state
   * i add two params one is pages id and other one is object that you want to save. 
   * i named the a unique (key) name for each observable 
   */

  send(key, data){
    this.subject.next({key, data});
  }

  /**
   * to get the data
   * for me i added Observable type any but you can create you own interface
   */
  get():Observable<any>{
    return this.subject.asObservable()
  }
}
