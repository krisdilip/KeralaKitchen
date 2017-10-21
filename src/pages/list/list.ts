import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    // If we navigated to this page, we will have an item available as a nav param
    this.items =  navParams.get('items');
 
  }

  itemTapped(event, i, item) { 
    this.navCtrl.push(DetailPage,{itemName:item.items[i].name,
                                  itemImageSrc:item.items[i].imgSrc,
                                  details:item.itemDetails[i],
                                  }
    );
  }
}
