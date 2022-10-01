import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';


import {DrivermodePage} from './drivermode.page';

describe('DrivermodePage', () => {
  let component: DrivermodePage;
  let fixture: ComponentFixture<DrivermodePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DrivermodePage],
    }).compileComponents();

    fixture = TestBed.createComponent(DrivermodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
