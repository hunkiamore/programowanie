import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LogowanieComponent } from './logowanie.component';

describe('LogowanieComponent', () => {
  let component: LogowanieComponent;
  let fixture: ComponentFixture<LogowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogowanieComponent ],
      imports: [ FormsModule ] // Importowanie FormsModule dla dyrektywy ngForm
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty initial formData', () => {
    expect(component.formData.username).toBe('');
    expect(component.formData.password).toBe('');
  });

  it('should log in with correct credentials', () => {
    component.formData.username = 'przykladowyUzytkownik';
    component.formData.password = 'przykladoweHaslo';
    spyOn(console, 'log');
    component.logowanie();
    expect(console.log).toHaveBeenCalledWith('Zalogowano pomyślnie');
  });

  it('should fail to log in with incorrect credentials', () => {
    component.formData.username = 'wrongUser';
    component.formData.password = 'wrongPassword';
    spyOn(console, 'log');
    component.logowanie();
    expect(console.log).toHaveBeenCalledWith('Błąd logowania. Sprawdź dane.');
  });
});
