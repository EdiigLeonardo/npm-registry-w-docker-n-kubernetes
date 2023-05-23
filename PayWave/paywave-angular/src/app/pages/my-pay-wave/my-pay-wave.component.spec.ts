import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPayWaveComponent } from './my-pay-wave.component';

describe('MyPayWaveComponent', () => {
  let component: MyPayWaveComponent;
  let fixture: ComponentFixture<MyPayWaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPayWaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPayWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
