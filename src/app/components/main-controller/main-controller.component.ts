import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'main-controller',
  templateUrl: './main-controller.component.html',
  styleUrls: ['./main-controller.component.scss']
})

export class MainControllerComponent {

  form = new FormGroup({});
  model: any = {
    custom: 'blah'
  };
  fields: FormlyFieldConfig[] = [
    // {
    //   key: 'email',
    //   type: 'input',
    //   templateOptions: {
    //     label: 'Email address',
    //     placeholder: 'Enter email',
    //     required: true,
    //   }
    // }
    {
      key: 'custom',
      type: 'custom',
      templateOptions: {
        label: 'Custom inlined',
      }
    }
  ];

}
