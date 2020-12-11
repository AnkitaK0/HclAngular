import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianaccountComponent } from './librarianaccount.component';

describe('LibrarianaccountComponent', () => {
  let component: LibrarianaccountComponent;
  let fixture: ComponentFixture<LibrarianaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
