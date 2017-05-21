import { Observable } from 'rxjs/Observable';
import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  private users$: Observable<any[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private usersProvider: UsersProvider) {
  }

  ionViewDidLoad() {
    this.users$ = this.usersProvider.getData();
      //.subscribe(res => this.users = res);
  }

  goToUserDetail(user) {
    this.navCtrl.push('UserDetailPage', {
      user: user
    });
  }

}
