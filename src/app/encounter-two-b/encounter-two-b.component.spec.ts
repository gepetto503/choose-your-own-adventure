import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterTwoBComponent } from './encounter-two-b.component';

describe('EncounterTwoBComponent', () => {
  let component: EncounterTwoBComponent;
  let fixture: ComponentFixture<EncounterTwoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterTwoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterTwoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
