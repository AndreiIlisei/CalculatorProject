import Calc, {CalcInput, InputType, OperatorType } from './calc';

test('derive state', () => {
    const inputs: Array<CalcInput> = [
        {type: InputType.Numberical, value: 1 },
        {type: InputType.Numberical, value: 2 },
        {type: InputType.Operation, operator: OperatorType.Add },
        {type: InputType.Numberical, value: 3 },
        {type: InputType.Operation, operator: OperatorType.Equals }
    ]

    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(15)     
})