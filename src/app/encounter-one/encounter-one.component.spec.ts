import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterOneComponent } from './encounter-one.component';

describe('EncounterOneComponent', () => {
  let component: EncounterOneComponent;
  let fixture: ComponentFixture<EncounterOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
