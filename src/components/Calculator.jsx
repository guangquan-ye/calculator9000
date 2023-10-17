import React, { useState } from 'react';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import EqualButton from './EqualButton';
import BeautifulScreen from './BeautifulScreen';
import DecimalButton from './DecimalButton';

export default function Calculator() {
    const [operation, setOperation] = useState('');
    
    const handleButtonClick = (value) => {
        
        setOperation((prevOperation) => prevOperation + value);
    }

    const clear = () => {
        setOperation('');
    }

    const calculate = () => {
        try {
            const calculatedResult = eval(operation);
            setOperation(calculatedResult.toString());
        } catch (error) {
            setOperation('Error');
        }
    }

    return (
        <div className="calculator-display">
            <div className="operation-display">
                <BeautifulScreen display={operation}/>
               
            </div>
            
                
           
            <div className="calculator-buttons">
                <div className="function-button">
            
            <button onClick={clear} className='button-reset'>AC</button>
            
           
            </div>
                <div className="number-buttons">

                    <NumberButton number="7"  handleClick={handleButtonClick} />
                    <NumberButton number="8" handleClick={handleButtonClick} />
                    <NumberButton number="9" handleClick={handleButtonClick} />
                    <OperatorButton operator="/" handleClick={handleButtonClick} />
                    <NumberButton number="4" handleClick={handleButtonClick} />
                    <NumberButton number="5" handleClick={handleButtonClick} />
                    <NumberButton number="6" handleClick={handleButtonClick} />
                    <OperatorButton operator="*" handleClick={handleButtonClick} />
                    <NumberButton number="1" handleClick={handleButtonClick} />
                    <NumberButton number="2" handleClick={handleButtonClick} />
                    <NumberButton number="3" handleClick={handleButtonClick} />
                    <OperatorButton operator="-" handleClick={handleButtonClick} />
                    <NumberButton number="0" handleClick={handleButtonClick} />
                    <DecimalButton handleClick={handleButtonClick} />
                    <EqualButton equal="=" handleClick={calculate} />
                    <OperatorButton operator="+"handleClick={handleButtonClick} />
                    
                </div>
            </div>
            
        </div>
    )
}
