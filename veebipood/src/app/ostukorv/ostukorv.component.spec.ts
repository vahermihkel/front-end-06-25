import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OstukorvComponent } from './ostukorv.component';

describe('OstukorvComponent', () => {
  let component: OstukorvComponent;
  let fixture: ComponentFixture<OstukorvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OstukorvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OstukorvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
