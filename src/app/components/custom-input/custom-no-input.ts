import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-custom-no-input',
  template: `
		<div>
			<button type="button" (click)="clickbtn('A')">A</button>
			<button type="button" (click)="clickbtn('B')">B</button>
		</div>
  `,
})

export class FormlyFieldCustomNoInput extends FieldType implements OnInit {

	constructor () {
		super();
	}

	ngOnInit () {
		console.log(this.formControl.value);
	};

	clickbtn(param: string) {
		this.formControl.setValue(123 + param);
		console.log(param, this.model[this.key]);
	}

  get type() {
    return this.to.type || 'text';
  }
}
