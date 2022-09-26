import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddChanelComponent } from './page-add-chanel.component';

describe('PageAddChanelComponent', () => {
  let component: PageAddChanelComponent;
  let fixture: ComponentFixture<PageAddChanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddChanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddChanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
