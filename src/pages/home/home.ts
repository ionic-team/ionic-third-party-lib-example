import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import moment from 'moment';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  timestamp: string;

  constructor(public navCtrl: NavController) {
    this.timestamp = moment().format("MMM Do YY");
  }
}
