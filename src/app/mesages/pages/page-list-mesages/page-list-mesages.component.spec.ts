import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListMesagesComponent } from './page-list-mesages.component';

describe('PageListMesagesComponent', () => {
  let component: PageListMesagesComponent;
  let fixture: ComponentFixture<PageListMesagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListMesagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListMesagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
