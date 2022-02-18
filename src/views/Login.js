import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
    <form onSubmit={handleForm}>
        <fieldset className='form-group mt-5'>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' placeholder='Username' className='form-control'></input>
        </fieldset>

        <fieldset className='form-group mt-1'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='Password' className='form-control'></input>
        </fieldset>
        
        <input type='submit' value='Login' className='mt-2'/>
    </form>
    )
  }
}
