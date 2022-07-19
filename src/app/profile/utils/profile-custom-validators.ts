import { AbstractControl, ValidatorFn } from '@angular/forms';

// By using closure principle, so validator can accept custom parameters
export function isBothMatched(controlA: string[],controlB: string[]): ValidatorFn {
    return (control: AbstractControl):{[key: string]: any} | null => { 
      if (controlA.length !== controlB.length) return { validatorError: "Please check validator parameters is correct." };
      for (let arr = 0 ; arr < controlA.length; arr ++) {
        if (control.get(`${controlA[arr]}`)?.value !== control.get(`${controlB[arr]}`)?.value) {
            return { notMatched: true };
        }
      }
      return null;
    }
}
