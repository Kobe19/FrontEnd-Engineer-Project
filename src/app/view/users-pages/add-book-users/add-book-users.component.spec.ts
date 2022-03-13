import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookUsersComponent } from './add-book-users.component';

describe('AddBookUsersComponent', () => {
  let component: AddBookUsersComponent;
  let fixture: ComponentFixture<AddBookUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
