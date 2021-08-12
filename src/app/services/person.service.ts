import { Injectable } from '@angular/core';
import {IPerson} from "../interface";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getPerson(): IPerson{
    return
  }
}
