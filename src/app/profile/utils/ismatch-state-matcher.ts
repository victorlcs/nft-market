import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class IsMatchErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      const controlName = Object.keys(form?.form.controls!).find(key => form?.form.controls[key] === control);
      if (control?.dirty && control?.touched || isSubmitted) {
        if (form?.errors?.[`${controlName}NotMatch`] || (control && control.invalid)) {
            return true;
        }
      }
      return false;
    }
  }