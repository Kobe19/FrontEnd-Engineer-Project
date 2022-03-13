import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApercuBiblioComponent } from './apercu-biblio.component';

describe('ApercuBiblioComponent', () => {
  let component: ApercuBiblioComponent;
  let fixture: ComponentFixture<ApercuBiblioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApercuBiblioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApercuBiblioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
