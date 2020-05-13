import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { ItemsService } from '../../items.service';
import { Item } from '../../item.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.page.html',
  styleUrls: ['./category-item.page.scss'],
})
export class CategoryItemPage implements OnInit {

  category: string;
  categoryItems: Item[];

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private navCtr: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('categoryId')) {
        this.navCtr.navigateBack('/shopping/tabs/offers');
        return;
      }
      this.category = this.itemsService.getCategory(paramMap.get('categoryId'));
      this.categoryItems = this.itemsService.getCategoryItems(paramMap.get('categoryId'));
    });
  }

}
