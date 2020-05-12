import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrersDetailPage } from './carrers-detail.page';

describe('CarrersDetailPage', () => {
  let component: CarrersDetailPage;
  let fixture: ComponentFixture<CarrersDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrersDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrersDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
