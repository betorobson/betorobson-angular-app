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

@Component({
  selector: 'main-controller',
  templateUrl: './main-controller.component.html',
  styleUrls: ['./main-controller.component.scss']
})

export class MainControllerComponent {

  form = new FormGroup({
    'name': new FormControl('', [
      Validators.minLength(5),
      forbiddenNameValidator(/bob/i)
    ])
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

  fields: FormlyFieldConfig2[] = [
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
      blah: 'nada',
      key: 'custom',
      type: 'custom',
      templateOptions: {
        required: true,
        label: 'Custom inlined',
      }
    }
  ];

}
