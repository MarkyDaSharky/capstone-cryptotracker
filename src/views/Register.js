import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
    <form>
        <fieldset className='form-group mt-5'>
              <label htmlFor='username'>Username</label>
              <input type='text' name='username' placeholder='Username' className='form-control'></input>
        </fieldset>

        <fieldset className='form-group mt-1'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' placeholder='Email' className='form-control'></input>
        </fieldset>

        <fieldset className='form-group mt-1'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' placeholder='Password' className='form-control'></input>
        </fieldset>
        
        <fieldset className='form-group mt-1'>
              <label htmlFor='confirmPass'>Confirm Password</label>
              <input type='password' name='confirmPass' placeholder='Confirm Password' className='form-control'></input>
        </fieldset>
        <input type='submit' value='Register' className='mt-2'/>
    </form>
    )
  }
}
