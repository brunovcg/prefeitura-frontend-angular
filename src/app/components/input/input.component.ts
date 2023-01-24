import { Component, Input } from '@angular/core';
const { v4: uuidv4 } = require('uuid');

type InputType = 'text' | 'password'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() inputType: InputType ='text'
  @Input() label: string = ''
  @Input() errorMessage: string = ''
  @Input() placeholder: string = ''
  inputId = uuidv4()



}
