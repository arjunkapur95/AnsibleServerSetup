import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryAgentComponent } from './discovery-agent.component';

describe('DiscoveryAgentComponent', () => {
  let component: DiscoveryAgentComponent;
  let fixture: ComponentFixture<DiscoveryAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoveryAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
