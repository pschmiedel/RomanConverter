import { TestBed, async } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AppComponent } from './app.component';
import { RomanService } from './roman.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      providers: [ 
        RomanService
      ]
    }).compileComponents();
    
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have an input field and a button', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input')).toBeTruthy();
    expect(compiled.querySelector('button')).toBeTruthy();
  }));

  it('should show converted numbers in a list', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    const romanService = fixture.debugElement.injector.get(RomanService);
    const mockResult = Observable.of({ "arabic": 1984, "is_prime": false, "roman": "MCMLXXXIV" });
    spyOn(romanService, 'convert').and.returnValue(mockResult);

    app.convert(1984);

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table td.roman')).toBeTruthy();
  }));
});
