import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNetworkErrorHandlerComponent } from './ngx-network-error-handler.component';

describe('NgxNetworkErrorHandlerComponent', () => {
  let component: NgxNetworkErrorHandlerComponent;
  let fixture: ComponentFixture<NgxNetworkErrorHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNetworkErrorHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNetworkErrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
