import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {


  @Input() text: string | undefined

  @Input() icon: string | undefined

  @Input() background: string | undefined

  @Input() iconColor: string | undefined

  @Output() onClick = new EventEmitter()


  click(){
    this.onClick.emit()
  }


}
