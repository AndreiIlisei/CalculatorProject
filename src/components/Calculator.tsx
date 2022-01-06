import React, { useState } from 'react';
import styled from 'styled-components';
import Calc, { CalcInput, InputType, OperatorType } from '../modules/calc';
import Button, {ButtonType, Props} from './Button';

const Container = styled.div`

    `;

const Grid = styled.div` 
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: 120px repeat(5, 80px);
`

const Display = styled.div`
background: #fff;
border-radius: 8px;
font-size: 48px;
text-align: right;
grid-column-end: span 4;
padding: 0 24px;
display: flex;
justify-content: flex-end;
align-items: center;
`

const Calculator: React.FC<{}> = () => {
    const [inputs, setInputs ] = useState<Array<CalcInput>>([]);
    const state = Calc.getState(inputs);
    console.log(inputs);

    const appendInput = (input: CalcInput): void => {
        setInputs(prev => [...prev, input])
    }
        
    const handleNumerical = (value: number) => () => {
        appendInput({type: InputType.Numberical, value})
    }

    const handleOperator = (operator: OperatorType) => () => {
        appendInput({type: InputType.Operator, operator})
    }

    const handleAllClear = () => setInputs([]);

    const handleUnde = () => setInputs(prev => prev.slice(0, -1))


    
    const mapButton: Props[] = [
        {
            label: '1' ,  
            position: [0, 2], 
            onClick: (handleNumerical(1))
        },
        {
            label: '2', 
            position: [1, 2], 
            onClick: (handleNumerical(2))
        },
        {
            label: '3', 
            position: [2, 2], 
            onClick: (handleNumerical(3))
        },
        {
            label: '4', 
            position: [0, 3], 
            onClick: (handleNumerical(4))
        },
        {
            label: '5', 
            position: [1, 3], 
            onClick: (handleNumerical(5))
        },
        {
            label: '6', 
            position: [2, 3],
            onClick: (handleNumerical(6))
        },
        {
            label: '7', 
            position: [0, 4],
            onClick: (handleNumerical(7))
        },
        {
            label: '8', 
            position: [1, 4],
            onClick: (handleNumerical(8))
        },
        {
            label: '9', 
            position: [2, 4],
            onClick: (handleNumerical(9))
        },
        {
            label: '0', 
            position: [0, 5],
            onClick: (handleNumerical(0)),
            width: 3
        },
    ]


    return <Container>
        <Grid>
            <Display> {state.displayValue} </Display>
            <Button label="AC" position={[0,1]} width={2} onClick={handleAllClear}/>
            <Button label="Undo" position={[2, 1]} width={2} onClick={handleUnde}/>
            <Button label="+" position={[3, 2]} onClick={handleOperator(OperatorType.Add)} />
            <Button label="-" position={[3, 3]} onClick={handleOperator(OperatorType.Subtract)} />
            <Button label="=" position={[3, 4]} onClick={handleOperator(OperatorType.Equals)} height={2}/>
            {mapButton.map(element => <Button buttonType={ButtonType.Number}  {...element}/>)}
        </Grid>
    </Container>;
};

export default Calculator;

