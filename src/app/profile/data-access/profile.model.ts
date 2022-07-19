import { Type } from "@angular/core";
import { UserActionEnum } from "./profile-enum";

export interface ProfileUserAction {
    component: Type<any>,
    action: UserActionEnum
}

export interface IsMatchedParam {
    left: string;
    rigjt: string;
}