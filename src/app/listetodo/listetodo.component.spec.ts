import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetodoComponent } from './listetodo.component';

describe('ListetodoComponent', () => {
  let component: ListetodoComponent;
  let fixture: ComponentFixture<ListetodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListetodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
