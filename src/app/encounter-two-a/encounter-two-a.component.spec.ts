import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterTwoAComponent } from './encounter-two-a.component';

describe('EncounterTwoAComponent', () => {
  let component: EncounterTwoAComponent;
  let fixture: ComponentFixture<EncounterTwoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterTwoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterTwoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
