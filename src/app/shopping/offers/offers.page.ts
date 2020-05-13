import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedItems: Item[];
  loadedCategories: string[];

  sliderConfig = {
    spaceBetween: 5,
    slidesOffsetBefore: 5,
    centeredSlides: false,
    slidesPerView: 2.5
  }

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.loadedItems = this.itemsService.items;
    this.loadedCategories = this.itemsService.categories;
  }

}
