import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReglamentoPage } from './reglamento.page';

describe('ReglamentoPage', () => {
  let component: ReglamentoPage;
  let fixture: ComponentFixture<ReglamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReglamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
