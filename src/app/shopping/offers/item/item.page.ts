import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Item } from '../../item.model';
import { ItemsService } from '../../items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  item: Item;

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private navCtr: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('itemId')) {
        this.navCtr.navigateBack('/shopping/tabs/offers');
        return;
      }
      this.item = this.itemsService.getItem(paramMap.get('itemId'));
    });

  }
}