import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOfClassesComponent } from './schedule-of-classes.component';

describe('ScheduleOfClassesComponent', () => {
  let component: ScheduleOfClassesComponent;
  let fixture: ComponentFixture<ScheduleOfClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleOfClassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleOfClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
