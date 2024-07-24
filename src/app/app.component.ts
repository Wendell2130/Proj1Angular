import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proj1--no-standalone';
  obj=[{plano:'Simples', valor:150},
    {plano:'Completo', valor:250}
  ]
  
  btnClicked(){
    console.log('fui clicado');
  }
}
