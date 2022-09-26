import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditChanelComponent } from './page-edit-chanel.component';

describe('PageEditChanelComponent', () => {
  let component: PageEditChanelComponent;
  let fixture: ComponentFixture<PageEditChanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditChanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditChanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
