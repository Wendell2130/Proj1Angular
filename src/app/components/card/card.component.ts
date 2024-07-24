import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required:true,}) planType:string='';
 @Input({required:true}) price:number=0;
  @Input({required:true}) styleCard:'orange'|'purple'='purple'

  @Output('btnClicked') btnClickedEmiter=new EventEmitter<void>();
  @Input() txtBtn:string='Adiquirir';
  onBtnClicked(){
    this.btnClickedEmiter.emit();
  }
}
