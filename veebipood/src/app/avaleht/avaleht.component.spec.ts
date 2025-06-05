import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalehtComponent } from './avaleht.component';

describe('AvalehtComponent', () => {
  let component: AvalehtComponent;
  let fixture: ComponentFixture<AvalehtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvalehtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvalehtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
