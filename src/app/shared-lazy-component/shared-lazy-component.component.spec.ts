import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLazyComponentComponent } from './shared-lazy-component.component';

describe('SharedLazyComponentComponent', () => {
  let component: SharedLazyComponentComponent;
  let fixture: ComponentFixture<SharedLazyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedLazyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedLazyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
