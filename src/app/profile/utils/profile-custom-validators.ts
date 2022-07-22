import { AbstractControl, ValidatorFn } from '@angular/forms';

// By using closure principle, so validator can accept custom parameters
/**
 * Usage example: [password,email] compared with [confirmPassword,confirmEmail], sequence of both lists is crucial to ensure correct comparison between form controls
 * @param controlA List of control name
 * @param controlB List of control name that need to be compared with
 * @returns 
 */
export function isBothMatched(controlA: string[],controlB: string[]): ValidatorFn {
    return (control: AbstractControl):{[key: string]: any} | null => { 
      let errors = {};
      if (controlA.length !== controlB.length) return { validatorError: "Please check validator parameters is correct." };
      for (let arr = 0 ; arr < controlA.length; arr ++) {
        if (control.get(`${controlA[arr]}`)?.value !== control.get(`${controlB[arr]}`)?.value) {
            errors = {[`${controlB[arr]}NotMatch`]: true, ...errors} ;
        }
      }
      if (Object.keys(errors).length !== 0) {
        return errors;
      } 
      return null;
    }
}
