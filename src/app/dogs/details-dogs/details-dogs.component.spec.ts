import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDogsComponent } from './details-dogs.component';

describe('DetailsDogsComponent', () => {
  let component: DetailsDogsComponent;
  let fixture: ComponentFixture<DetailsDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
