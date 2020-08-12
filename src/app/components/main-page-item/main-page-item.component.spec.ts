import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageItemComponent } from './main-page-item.component';

describe('MainPageItemComponent', () => {
  let component: MainPageItemComponent;
  let fixture: ComponentFixture<MainPageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
