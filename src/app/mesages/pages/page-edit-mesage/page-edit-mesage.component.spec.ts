import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditMesageComponent } from './page-edit-mesage.component';

describe('PageEditMesageComponent', () => {
  let component: PageEditMesageComponent;
  let fixture: ComponentFixture<PageEditMesageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditMesageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditMesageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
