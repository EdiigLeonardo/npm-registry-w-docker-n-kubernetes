import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InEOutComponent } from './in-eout.component';

describe('InEOutComponent', () => {
  let component: InEOutComponent;
  let fixture: ComponentFixture<InEOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InEOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InEOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
