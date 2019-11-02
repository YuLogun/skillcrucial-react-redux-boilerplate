import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'

const Dummy = () => {
  const [counter, setCounter] = useState(0)
  const [date, setDate] = useState(new Date())
  const [text, setText] = useState({
    toggled1: true,
    toggled2: false
  })
  const toggle = () => {
    setText({
      toggled1: !text.toggled1,
      toggled2: !text.toggled2
    })
  }
  useEffect(
    () => {
      const intervalId = setInterval(
        () => { setCounter(counter + 1) },
        1000
      )
      return () => { clearInterval(intervalId) }
    },
    [counter]
  )
  useEffect(
    () => {
      const intervalId = setInterval(
        () => { setDate(new Date()) },
        1000
      )
      return () => { clearInterval(intervalId) }
    },
    [date]
  )
  return (
    <div>
      <Head title="Hello" />
      <div className="red"> Hello World! We&apos;re counting {counter}
        <p>
          <button
            type="button"
            onClick={() => setCounter(counter + 1)}
          >Add
          </button>
        </p>
        <p>
          <button
            type="button"
            onClick={() => setCounter(counter - 1)}
          >Subtract
          </button>
        </p>
        <p>
          <button
            type="button"
            onClick={() => setCounter(0)}
          >Reset
          </button>
        </p>
      </div>
      <div className="date">
        <h3>It is {date.toLocaleTimeString()}</h3>
      </div>
      <div className="toggle">
        {
          text.toggled1 && (
            <h2>Text 1 is shown</h2>
          )
        }
        {
          text.toggled2 && (
          <h2>Text 2 is shown</h2>
          )
        }
        <button
          type="button"
          onClick={toggle}
        >Toggle me gently
        </button>
      </div>
      <a href="/dashboard">go dashboard</a>
      <br />
      <Link to="/dashboard">GO DASHBOARD</Link>
      <hr />
      <Link to="storage">go storage</Link>
    </div>
  )
}


Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
