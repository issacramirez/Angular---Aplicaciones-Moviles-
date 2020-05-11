import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrerDetailPage } from './carrer-detail.page';

describe('CarrerDetailPage', () => {
  let component: CarrerDetailPage;
  let fixture: ComponentFixture<CarrerDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrerDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
