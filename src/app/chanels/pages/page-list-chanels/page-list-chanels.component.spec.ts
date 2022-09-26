import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListChanelsComponent } from './page-list-chanels.component';

describe('PageListChanelsComponent', () => {
  let component: PageListChanelsComponent;
  let fixture: ComponentFixture<PageListChanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListChanelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListChanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
