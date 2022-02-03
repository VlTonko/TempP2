import {StInputText, StButton, StButtonAdd} from "../styled";
import React, { useState } from 'react';

export function Form ({submitSignIn}) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeLogin = e => setLogin( e.target.value );
    const handleChangePassword = e => setLogin( e.target.value );

    return (
        <>
            <StInputLogin onChange={handleChangeLogin} placeholder="fill in your login" value={login}/>
            <StInputPassword onChange={handleChangePassword} placeholder="fill in your password" value={password}/>
            <StButtonAdd>SUBMIT</StButtonAdd>
        </>
    );
}