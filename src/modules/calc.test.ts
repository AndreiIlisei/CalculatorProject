import Calc, { CalcInput, Operation, InputType, OperatorType } from './calc';


test('generate operations', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numberical, value: 1 },
        { type: InputType.Numberical, value: 2 },
        { type: InputType.Operator, operator: OperatorType.Add },
        { type: InputType.Numberical, value: 3 },
        { type: InputType.Operator, operator: OperatorType.Equals }
    ];

    const operations: Array<Operation> = [
        { operator: OperatorType.Add, value: 12 },
        { operator: OperatorType.Add, value: 3 },
        { operator: OperatorType.Equals, value: 0 },
    ];
    
    expect(Calc.getOperationsBuilder(inputs).operations).toEqual(operations);
})

test('has displayValue 0 when no inputs', () => {
    const inputs: Array<CalcInput> = []

    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(0)
})

test('derives displayValue when not used =', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numberical, value: 1 },
        { type: InputType.Numberical, value: 2 },
        { type: InputType.Operator, operator: OperatorType.Add },
        { type: InputType.Numberical, value: 3 },
    ]

    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(3)
})

test('derive final state with plus', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numberical, value: 1 },
        { type: InputType.Numberical, value: 2 },
        { type: InputType.Operator, operator: OperatorType.Add },
        { type: InputType.Numberical, value: 3 },
        { type: InputType.Operator, operator: OperatorType.Equals }
    ]

    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(15)
})

test('derive final state with minus', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numberical, value: 1 },
        { type: InputType.Numberical, value: 2 },
        { type: InputType.Operator, operator: OperatorType.Add },
        { type: InputType.Numberical, value: 3 },
        { type: InputType.Operator, operator: OperatorType.Subtract },
        { type: InputType.Numberical, value: 5 },
        { type: InputType.Operator, operator: OperatorType.Equals },
    ];

    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(10)
})


          
{/*             
            <Button type={ButtonType.Number} label="1" position={[0, 2]} onClick= {handleNumerical(1)} />
            <Button type={ButtonType.Number} label="2" position={[1, 2]} onClick={handleNumerical(2)} />
            <Button type={ButtonType.Number} label="3" position={[2, 2]} onClick={handleNumerical(3)} />
            <Button type={ButtonType.Number} label="4" position={[0, 3]} onClick={handleNumerical(4)} />
            <Button type={ButtonType.Number} label="5" position={[1, 3]} onClick={handleNumerical(5)} />
            <Button type={ButtonType.Number} label="6" position={[2, 3]} onClick={handleNumerical(6)} />
            <Button type={ButtonType.Number} label="7" position={[0, 4]} onClick={handleNumerical(7)} />
            <Button type={ButtonType.Number} label="8" position={[1, 4]} onClick={handleNumerical(8)} />
            <Button type={ButtonType.Number} label="9" position={[2, 4]} onClick={handleNumerical(9)} />
            <Button type={ButtonType.Number} label="0" position={[0, 5]} width={3} onClick={}/> */}