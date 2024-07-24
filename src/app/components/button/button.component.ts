import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({required:true,alias:'txt'}) btnTxt:string='';
  @Input({required:true,alias:'styleBtn'}) styleBtn:'white'|'purple'='white';
  @Input('disabled') isDisabled:boolean=false;
  @Output('clicked') btnClicked=new EventEmitter<void>();
  
  onBtnClick(){
    this.btnClicked.emit();
  }
}
