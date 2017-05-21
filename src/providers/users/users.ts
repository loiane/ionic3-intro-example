import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UsersProvider {

  private users: any[];

  constructor(public http: Http) {
    console.log('Hello UsersProvider Provider');
  }

  getData(){

    if (this.users){
      return Observable.of(this.users);
    }

    return this.http.get('https://randomuser.me/api/?results=10')
      .map((res: Response) => res.json().results)
      .do(data => this.users = data)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
