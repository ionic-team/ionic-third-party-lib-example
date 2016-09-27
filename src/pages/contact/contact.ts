import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import localForage from 'localforage';
import uuid from 'node-uuid';

@Component({
  templateUrl: 'contact.html'
})
export class ContactPage {

  persistedGuid: string;

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    const guid = uuid.v4();
    const key = 'bananarama';
    console.log(`Attempting to persist ${guid} under key ${key}`);

    localForage.setItem(key, guid).then(() => {
      console.log('successfully saved ... now lets retrieve it');
      return localForage.getItem(key);
    }).then( (value: string) => {
      this.persistedGuid = value;
    });
  }
}
