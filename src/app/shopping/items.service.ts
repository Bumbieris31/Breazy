import { Injectable } from '@angular/core';

import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private _items: Item[] = [
    new Item(
      'i1',
      'Plumbus',
      'essentials',
      "For homemade plumbuses, always push your dinglebop through a grumbo so your fleeb doesn't fill up with its own juice.",
      'https://sites.google.com/site/plumbuswiki/_/rsrc/1504105950482/home/5621409e4f2e1.png',
      80085.69
    ),
    new Item(
      'i2',
      'Waikiki Beach Lotion',
      'lotion',
      "Body lotion for gym rats who have blisters on their hands from all that working out!",
      'https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw093f2d46/crop/024637141_crop.jpg?sw=500&sh=600&sm=fit&q=75',
      3.99
    ),
    new Item(
      'i3',
      "Pretty Joe's Toothpicks",
      'toothpicks',
      "Don't let the stuck chicken meat ruin your perfect smile... Pick your teeth with Pretty Joe's!",
      'https://images-na.ssl-images-amazon.com/images/I/91zxolULbmL._AC_SX679_.jpg',
      2.00
    ),
    new Item(
      'i4',
      "Eucalyptus Spearmint",
      'lotion',
      "Wash your body with Eucalyptus and smell like a fresh koala bear.",
      'https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw025c5ab7/crop/023497566_crop.jpg?sw=500&sh=600&sm=fit&q=75',
      7.49
    ),
    new Item(
      'i5',
      "MoonLight Path",
      'lotion',
      "Put the Moonlight on your face and watch the moon be refleckted from your cheeks in 100 different collors.",
      'https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw225d491a/crop/023892360_crop.jpg?sw=500&sh=600&sm=fit&q=75',
      5.99
    ),
    new Item(
      'i6',
      "Rose",
      'lotion',
      "Smooth like a rose. Your man will love you for who you really are... A useless fucking plant.",
      'https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw54490cad/crop/023839413_crop.jpg?sw=500&sh=600&sm=fit&q=75',
      9.00
    ),
    new Item(
      'i7',
      "Jawsome",
      'soap',
      "Do not drop it on the floor... Nothing more, nothing less.",
      'https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwad19287f/crop/026089529_crop.jpg?sw=500&sh=600&sm=fit&q=75',
      13.49
    ),
    new Item(
      'i8',
      "Tea Tree tandpasta",
      'toothpaste',
      "Have a beautiful shining teeth like mr. Beaver!",
      'https://images.hollandandbarrettimages.co.uk/productimages/DT/370/083581_A.png',
      3.49
    ),
    new Item(
      'i9',
      "Dr. Organic Deodorant Dead Sea Mineral",
      'deodorant',
      'Voor een schoon en energiek gevoel. Geschikt voor alle huidtypen.',
      "https://images.hollandandbarrettimages.co.uk/productimages/DT/370/044108_A.png",
      8.99
    ),
    new Item(
      'i10',
      "Forever Red",
      'lotion',
      "You've waited forever for this — our most luxurious, long-lasting fragrance ever is back!",
      'https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa9e36553/hires/023928904.jpg?sh=471',
      13.50
    ),
    new Item(
      'i11',
      "Coconut Milk Moisture Mix",
      'lotion',
      "Our Coconut Milk Moisture Mist with coconut oil & cocoa butter instantly moisturizes skin.",
      'https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdfafb45f/hires/024645527.jpg?sh=471',
      16.50
    ),
    new Item(
      'i12',
      "Handcreme Aloe Vera Mini",
      'handcream',
      "De crème trekt snel in en heeft een handig formaat dat u gemakkelijk meeneemt.",
      'https://images.hollandandbarrettimages.co.uk/productimages/DT/370/042998_A.png',
      0.99
    )
  ];

  private _categories: string[] = [
    'lotion',
    'essentials',
    'toothpicks',
    'soap',
    'toothpaste',
    'handcream',
    'deodorant'
  ];

  get items() {
    return [...this._items];
  }

  get categories() {
    return [...this._categories]
  }

  constructor() { }

  getCategory(id: string) {
    return this.categories.find(c => c === id);
  }

  getCategoryItems(id: string) {
    return this._items.filter(items => items.category === id);
  }
}
