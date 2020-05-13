import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopOffersPage } from './shop-offers.page';

describe('ShopOffersPage', () => {
  let component: ShopOffersPage;
  let fixture: ComponentFixture<ShopOffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopOffersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopOffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
