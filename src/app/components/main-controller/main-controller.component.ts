import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

interface FormlyFieldConfig2 extends FormlyFieldConfig {
  blah?: string
}

function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    console.log(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

const defaultInputValidator = (control: FormControl): boolean => {
  console.log('defaultInputValidator', control);
  return !/noop/.test(control.value);
}

@Component({
  selector: 'main-controller',
  templateUrl: './main-controller.component.html',
  styleUrls: ['./main-controller.component.scss']
})

export class MainControllerComponent {

  reportsState: boolean = true;

  form = new FormGroup({
    'name': new FormControl('', [
      Validators.minLength(5),
      forbiddenNameValidator(/bob/i)
    ]),
    'name2': new FormControl('')
  });

  model: any = {
    custom: 'blah'
  };

  ngOnChanges(){
    console.log('ngOnChanges');
  }

  ngOnInit(){
    console.log('ngOnInit');
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  onSubmit (model: any){
    console.log(this.form.valid);

    return;
  };

  showReports (show: boolean){
    this.reportsState = show;
  };

  fields: FormlyFieldConfig2[] = [
    {
      key: 'defaultInputWithValidator',
      type: 'input',
      templateOptions: {
        label: 'input default with validator',
      },
      validators: {
        defaultInputValidator: defaultInputValidator
      }
    },
    {
      blah: 'nada',
      key: 'custom',
      type: 'custom',
      templateOptions: {
        required: true,
        label: 'Custom inlined',
      }
    },
    {
      key: 'custom-no-input',
      type: 'custom-no-input',
      templateOptions: {
        required: true,
        label: 'Custom no inputut',
      }
    }
  ];

}
