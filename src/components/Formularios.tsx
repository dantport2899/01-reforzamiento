import { useState } from "react"
import { useForm } from '../hooks/useForm';

export const Formularios = () => {

  const {email, password, formulario, onChange} = useForm({
    email: 'dantport28@gmail.com',
    password: '1234'
});
  
    
  return (
    <div>
        <h1>Formularios</h1>
        <input 
            type="text" 
            className="form-control" 
            placeholder="Email"
            value={email}
            onChange={({target})=> onChange(target.value, 'email')}
        />
        <input 
            type="password" 
            className="form-control" 
            placeholder="Password"
            value={password}
            onChange={({target})=> onChange(target.value, 'password')}
        />

        <code>
            <pre>{JSON.stringify(formulario, null,2)}</pre>
        </code>
    </div>
  )
}
