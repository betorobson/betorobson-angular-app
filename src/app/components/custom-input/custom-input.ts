import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-custom-input',
  template: `
		<div>
    	<input type="input" [formControl]="formControl" [formlyAttributes]="field">
			<button type="button" (click)="clickbtn('A')">A</button>
			<button type="button" (click)="clickbtn('B')">B</button>
		</div>
  `,
})

export class FormlyFieldCustomInput extends FieldType implements OnInit {

	constructor () {
		super();
	}

	ngOnInit () {
		console.log(this.formControl.value);
	};

	clickbtn(param) {
		this.formControl.setValue(123);
		console.log(param, this.model[this.key]);
	}

  // get type() {
  //   return this.to.type || 'text';
  // }
}
