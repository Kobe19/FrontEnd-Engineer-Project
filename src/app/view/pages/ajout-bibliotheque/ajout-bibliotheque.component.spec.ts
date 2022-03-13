import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBibliothequeComponent } from './ajout-bibliotheque.component';

describe('AjoutBibliothequeComponent', () => {
  let component: AjoutBibliothequeComponent;
  let fixture: ComponentFixture<AjoutBibliothequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutBibliothequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutBibliothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
