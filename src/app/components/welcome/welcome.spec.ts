import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Welcome } from './welcome';
import {AppComponent} from "../../app.component";
import { AppModule } from '../../app.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';

describe('Welcome', () => {
  let component: Welcome;
  let fixture: ComponentFixture<Welcome>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Welcome, NavbarComponent ],
      imports: [ FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Welcome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(Welcome);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to CiE');
  }));
});
