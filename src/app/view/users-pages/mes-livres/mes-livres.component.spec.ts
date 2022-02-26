import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesLivresComponent } from './mes-livres.component';

describe('MesLivresComponent', () => {
  let component: MesLivresComponent;
  let fixture: ComponentFixture<MesLivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesLivresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
