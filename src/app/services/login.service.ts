import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPerson} from "../interface";
import {Observable} from "rxjs";

const API = {
  server: 'https://www.breakingbadapi.com/api/characters'
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  get isLogin(): boolean {
     return this.isLoggedIn;
  }

  set isLogin(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  logInAPI(loginParams: {email: string, password: string}) {
    if (true) {
      this.isLogin = true;
    }
  }


/*  getList(): any {
    let headers = {
      'x-rapidapi-key': 'b8c2671b3cmshec4289c5252fd91p1fcfedjsn564e79de8ab7',
      'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
    let params = {id: '40008598', locale: 'en-US'};

    return this.http.get('https://shazam.p.rapidapi.com/songs/list-artist-top-tracks111', {headers, params}).subscribe(data => {
      console.log(data);
      return null;
    })

  }*/

public getYourPerson() {
    return this.http.get(`${API.server}`)
}

public myPersonStorage(person: IPerson) {

  // Для того, щоб елемент масива не перезаписувався, а добавлявся
  let storedPerson: IPerson[] = JSON.parse(localStorage.getItem('newPerson')) || []
  // В масив, ми не можемо положить об'єкт, тому при присвоюємо storedPerson значення []. Після цього, в storedPerson ми пушимо наш масив

  storedPerson.push(person);

  localStorage.setItem('newPerson', JSON.stringify(storedPerson));

  // Для того, щоб витянуть елементи
}

  public getMyPersonStorage(): IPerson[] {
  // Отримуємо ми з localStorage строку, тому:
    return JSON.parse(localStorage.getItem('newPerson')) || [];

    // Весь отриманий результат, нам треба выдобразить в home.component => getInfo()
  }

  remove(char_id: number): Observable<IPerson>{
  const url = `${API.server}`;

  return this.http.delete<IPerson>(url);

  }

}

