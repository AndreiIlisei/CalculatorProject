// 
// Calculator Brain:


export enum InputType {
    Numberical,
    Operation
}

export enum OperatorType {
    Add,
    Subtract,
    Equals
}

export type CalcState = {
    displayValue: number;
}

export type CalcInput =
    | { type: InputType.Numberical; value: number }
    | { type: InputType.Operation; operator  : OperatorType };

const getState = (inputs: Array<CalcInput>): CalcState => {

    return {displayValue: 0 };
} 

const Calc = {
    getState
}

export default Calc;
