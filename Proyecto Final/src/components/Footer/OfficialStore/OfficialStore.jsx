import React from 'react';
import '../../../styles/OfficialStore.css'
import funko from '../../../images/Funko.png';

function OfficialStore() {
    return (
        <>
            <h3 className='store'>TIENDA OFICIAL</h3>
            <a className='store' href="https://funko.com/" target="_blank"><img alt='Funko' src={funko} /></a>
        </>
    );
}

export default OfficialStore;