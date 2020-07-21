import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventurerViewComponent } from './adventurer-view.component';

describe('AdventurerViewComponent', () => {
  let component: AdventurerViewComponent;
  let fixture: ComponentFixture<AdventurerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventurerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventurerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
