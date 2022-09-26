import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddMesageComponent } from './page-add-mesage.component';

describe('PageAddMesageComponent', () => {
  let component: PageAddMesageComponent;
  let fixture: ComponentFixture<PageAddMesageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddMesageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddMesageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
