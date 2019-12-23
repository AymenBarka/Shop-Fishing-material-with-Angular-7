import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingRodsComponent } from './fishing-rods.component';

describe('FishingRodsComponent', () => {
  let component: FishingRodsComponent;
  let fixture: ComponentFixture<FishingRodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishingRodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingRodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
