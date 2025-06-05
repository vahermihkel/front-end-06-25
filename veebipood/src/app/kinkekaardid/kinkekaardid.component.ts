import { Component } from '@angular/core'; // .ts faili impordid
import { FormsModule } from '@angular/forms';

// FormsModule annab võimekuse HTMLis kasutada [(ngModel)]

@Component({
  selector: 'app-kinkekaardid',
  imports: [FormsModule], // .html faili impordid
  templateUrl: './kinkekaardid.component.html',
  styleUrl: './kinkekaardid.component.css'
})
export class KinkekaardidComponent {
  summa = 20;
  kogus = 1;
  email = "";

  sisesta() {
    if (this.email === "") {
      alert("Email ei saa tühi olla!");
      return; // lõpetab funktsiooni
    }

    if (this.email.includes("@") === false) {
      alert("Email peab sisaldama @ sümbolit!");
      return; // lõpetab funktsiooni
    }

    alert("Edukalt lisatud: " + this.email);
  }
}
