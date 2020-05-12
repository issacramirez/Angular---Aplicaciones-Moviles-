import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrersPage } from './carrers.page';

describe('CarrersPage', () => {
  let component: CarrersPage;
  let fixture: ComponentFixture<CarrersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
