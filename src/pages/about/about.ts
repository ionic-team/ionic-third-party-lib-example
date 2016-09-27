import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import lodash from 'lodash';

@Component({
  templateUrl: 'about.html'
})
export class AboutPage {

  aboutContent: string;

  constructor(public navCtrl: NavController) {
    this.aboutContent = lodash.capitalize(`the first t is capitalized`);
  }
}
