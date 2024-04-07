'use client'
import * as React from 'react';

export default function Formulario() {
    const [descripcion, setDescripcion] = React.useState('');
    const [monto, setMonto] = React.useState('');
    const [donde, setDonde] = React.useState('');

    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value);
    };

    const handleMontoChange = (event) => {
        setMonto(event.target.value);
    };

    const handleDondeChange = (event) => {
        setDonde(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Descripcion:', descripcion);
        console.log('Monto:', monto);
        console.log('Donde:', donde);
    };

    return (
        <form onSubmit={handleSubmit} className='form-monto'>
            <div>

                <input
                    className='input-form'
                    type="text"
                    placeholder="Descripcion"
                    value={descripcion}
                    onChange={handleDescripcionChange}
                    required="required"/>
            </div>
            <div>

                <input
                    className='input-form'
                    type="number"
                    placeholder="Monto"
                    value={monto}
                    onChange={handleMontoChange}
                    required="required"/>
            </div>
            <div >

                <input
                    className='input-form'
                    type="text"
                    placeholder="Donde"
                    value={donde}
                    onChange={handleDondeChange}/>
            </div>
            <button type="submit" className='form-submit'>Agregar</button>
        </form>
    );
};
