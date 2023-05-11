//conditional type : when a type is dependent on another type.

//format : "je type k check korchi" extends "jake check korchi" ? "jake check korchi" : "alternate value"

//example of conditinal
type a1 = number;
type a2 = a1 extends string ? string : null;

//nested conditional

type a3 = undefined;
type a4 = number;

type d = a1 extends null
    ? null
    : a3 extends number
    ? number
    : a4 extends null
    ? null
    : never


//example-1

type Sheikh = {
    wife1: string,
    wife2: string,
}

//example-2
//will check there is property name "wife1" in Sheikh or not.

/*
T - je type k check korchi
k - jake check korchi
*/

type CheckProperty<T, k> = k extends keyof T ? true : false

type CheckWife2 = CheckProperty<Sheikh, "wife2">
type CheckWife3 = CheckProperty<Sheikh, "wife3">
type gf = CheckProperty<Sheikh, "gf">

//example-3
// 

type Bandhubi = 'Monika' | 'Rachel' | 'Phoebe'

type removeBandhubi<T, k> = T extends k ? never : T

type CurrentBandhubi = removeBandhubi<Bandhubi, "Monika">