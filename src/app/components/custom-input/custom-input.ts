import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-custom-input',
  template: `
		<div>
      <p>[{{to.label}}]</p>
    	<input [type]="type" [formControl]="formControl" [formlyAttributes]="field">
			<button type="button" (click)="clickbtn('A')">A</button>
			<button type="button" (click)="clickbtn('B')">B</button>
      <pre>
        {{formControl.errors | json}}
      </pre>
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

	clickbtn(param: string) {
		this.formControl.setValue(123 + param);
		console.log(param, this.model[this.key]);
	}

  get type() {
    return this.to.type || 'text';
  }
}
