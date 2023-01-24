import { Component, Input } from '@angular/core';
const { v4: uuidv4 } = require('uuid');

type Select = {
  value:number
  text:string
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() options: Select[] = []
  @Input() label: string = ''
  @Input() errorMessage: string = ''

  selectId = uuidv4()

}
