import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkFonteinenComponent } from './drink-fonteinen.component';

describe('DrinkFonteinenComponent', () => {
  let component: DrinkFonteinenComponent;
  let fixture: ComponentFixture<DrinkFonteinenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkFonteinenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkFonteinenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
