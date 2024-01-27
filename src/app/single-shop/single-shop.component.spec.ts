import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShopComponent } from './single-shop.component';

describe('SingleShopComponent', () => {
  let component: SingleShopComponent;
  let fixture: ComponentFixture<SingleShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleShopComponent]
    });
    fixture = TestBed.createComponent(SingleShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
