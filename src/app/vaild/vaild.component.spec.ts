import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaildComponent } from './vaild.component';

describe('VaildComponent', () => {
  let component: VaildComponent;
  let fixture: ComponentFixture<VaildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
