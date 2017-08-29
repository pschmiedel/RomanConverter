import { Component } from '@angular/core';
import { RomanConversion } from './romanconversion';
import { RomanService } from './roman.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultNumbers = new Set<number>();
  results: RomanConversion[] = [];
  errorMessage = null;
  converting = false;
  invalidNumber = false;
  
  constructor(private service: RomanService) { }
  
  onConvert(x: number): void {
    if (!this.converting && x && !this.resultNumbers.has(x)) {
      this.convert(x);
    }
  }
  
  convert(x: number): void {
    this.converting = true;
    this.service.convert(x).subscribe(
      result => {
        this.results.push(result);
        this.results.sort((a, b) => a.arabic - b.arabic);
        this.resultNumbers.add(x);
        this.errorMessage = null;
        this.converting = false;
      },
      err => {
        this.errorMessage = err.error && err.error.message ? err.error.message : "Unknown backend error";
        this.invalidNumber = err.status == 400;
        this.converting = false;
      }
    );
  }
}

