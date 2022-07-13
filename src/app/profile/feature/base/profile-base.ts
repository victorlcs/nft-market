import { Directive, Input, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Directive()
export abstract class ProfileBase {
  @Input() submitEvent$: Subject<void>;
  abstract onSubmit():void;
}
