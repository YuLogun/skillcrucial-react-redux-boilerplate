import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cookies from 'universal-cookie';


const Storage = () => {
  let initialCounter = 0
  if (typeof sessionStorage !== 'undefined' && typeof sessionStorage.getItem('counter') !== 'undefined') {
    initialCounter = +sessionStorage.getItem('counter')
  }
  const [counter, setCounter] = useState(initialCounter)
  const updateCounter = (counterNew) => {
    setCounter(counterNew)
    sessionStorage.setItem('counter', counterNew)
  }

  let startingCounter = 0
  if (typeof localStorage !== 'undefined' && typeof localStorage.getItem('value') !== 'undefined') {
    startingCounter = +localStorage.getItem('value')
  }
  const [value, setValue] = useState(startingCounter)
  const updateValue = (valueNew) => {
    setValue(valueNew)
    localStorage.setItem('value', valueNew)
  }

  const cookies = new Cookies()
  let startingCookie = 0
  if (typeof cookies.get('cookie-name') !== 'undefined') {
    startingCookie = +cookies.get('cookie-name')
  }
  const [cookie, setCookie] = useState(startingCookie)
  const updateCookie = (cookieNew) => {
    setCookie(cookieNew)
    cookies.set('cookie-name', cookieNew, { path: '/storage' })
  }

  return (
    <div>
      <Link to="/">go home</Link>
      <br />
      <Link to="dashboard">go dashboard</Link>
      <Route exact path="/storage" component={() => <h3>Hooray! We are practising the usage of browser storage!</h3>} />
      <button
        type="button"
        onClick={() => updateCounter(counter + 1)}
      >UpdateSessionStorage
      </button>
      <br />
      <button
        type="button"
        onClick={() => updateValue(value + 1)}
      >UpdateLocalStorage
      </button>
      <br />
      <button
        type="button"
        onClick={() => updateCookie(cookie + 1)}
      >UpdateCookies
      </button>
    </div>
  )
}

Storage.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Storage)
