import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingReelsComponent } from './fishing-reels.component';

describe('FishingReelsComponent', () => {
  let component: FishingReelsComponent;
  let fixture: ComponentFixture<FishingReelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishingReelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingReelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
