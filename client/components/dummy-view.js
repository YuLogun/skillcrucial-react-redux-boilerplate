import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'

const Dummy = () => {
  const [counter, setCounter] = useState(0)
  const [date, setDate] = useState(new Date())
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
    }
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
    </div>
  )
}


Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
