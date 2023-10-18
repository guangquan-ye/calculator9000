import React, { useState } from 'react';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import EqualButton from './EqualButton';
import BeautifulScreen from './BeautifulScreen';
import DecimalButton from './DecimalButton';
import EasterEgg from './EasterEgg';

export default function Calculator() {
    const [operation, setOperation] = useState('');
    const [showModal, setShowModal] = useState(false);


    const handleButtonClick = (value) => {

        setOperation((prevOperation) => prevOperation + value);
    }

    const clear = () => {
        setOperation('');
    }

    const eraseLast = () => {
        setOperation((prevOperation) => prevOperation.slice(0, -1));
    }

    const calculate = () => {
        try {
            const calculatedResult = eval(operation);
            setOperation(calculatedResult.toString());

            if (calculatedResult > 9000) {
                setShowModal(true);
            } else {
                setShowModal(false); 
            }
        } catch (error) {
            setOperation('Error');
        }
    }

    return (


        <div className="calculator-display">
            {showModal && (
                <div className='modal'>
                    <EasterEgg setShowModal={setShowModal} />
                </div>
            )}

            <div className="operation-display">
                <BeautifulScreen display={operation} />
            </div>

            <div className="calculator-buttons">
                <p className='brand'>Helmet Picard</p>
                <div className="number-buttons">
                    <button onClick={clear} className='button-reset'>AC</button>
                    <button onClick={eraseLast}>←</button>
                    <button>M</button>
                    <OperatorButton operator="/" handleClick={handleButtonClick} />
                    <NumberButton number="7" handleClick={handleButtonClick} />
                    <NumberButton number="8" handleClick={handleButtonClick} />
                    <NumberButton number="9" handleClick={handleButtonClick} />
                    <OperatorButton operator="*" handleClick={handleButtonClick} />
                    <NumberButton number="4" handleClick={handleButtonClick} />
                    <NumberButton number="5" handleClick={handleButtonClick} />
                    <NumberButton number="6" handleClick={handleButtonClick} />
                    <OperatorButton operator="-" handleClick={handleButtonClick} />
                    <NumberButton number="1" handleClick={handleButtonClick} />
                    <NumberButton number="2" handleClick={handleButtonClick} />
                    <NumberButton number="3" handleClick={handleButtonClick} />
                    <OperatorButton className="add-button" operator="+" handleClick={handleButtonClick} />
                    <NumberButton number="0" handleClick={handleButtonClick} />
                    <DecimalButton handleClick={handleButtonClick} />
                    <EqualButton equal="=" handleClick={calculate} />

                </div>
            </div>

        </div>

    )
}
