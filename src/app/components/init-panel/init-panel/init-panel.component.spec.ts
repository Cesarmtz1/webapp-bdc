import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitPanelComponent } from './init-panel.component';

describe('InitPanelComponent', () => {
  let component: InitPanelComponent;
  let fixture: ComponentFixture<InitPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
