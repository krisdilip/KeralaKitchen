import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  itemName: String;
  itemImageSrc: String;
  itemDetail: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.itemName =  navParams.get('itemName');
    this.itemImageSrc =  navParams.get('itemImageSrc');
    this.itemDetail =  navParams.get('details');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  fn_hide = function(p_value){
    try{
      if(p_value.length>0){
        return true;
      }
    }catch(err) {}

    return false;
	};
}
