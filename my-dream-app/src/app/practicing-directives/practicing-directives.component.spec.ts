import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticingDirectivesComponent } from './practicing-directives.component';

describe('PracticingDirectivesComponent', () => {
  let component: PracticingDirectivesComponent;
  let fixture: ComponentFixture<PracticingDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticingDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticingDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
