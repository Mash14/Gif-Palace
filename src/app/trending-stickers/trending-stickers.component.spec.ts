import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingStickersComponent } from './trending-stickers.component';

describe('TrendingStickersComponent', () => {
  let component: TrendingStickersComponent;
  let fixture: ComponentFixture<TrendingStickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingStickersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingStickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
