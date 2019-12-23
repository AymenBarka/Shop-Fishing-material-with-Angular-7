import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingLineComponent } from './fishing-line.component';

describe('FishingLineComponent', () => {
  let component: FishingLineComponent;
  let fixture: ComponentFixture<FishingLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishingLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
