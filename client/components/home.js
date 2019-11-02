import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Head from './head'

const Home = () => {
  const [date, setDate] = useState(new Date())
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
      <h1 className="date">Hello World! It is {date.toLocaleTimeString()}</h1>
      <a href="/">go dummy</a>
      <br />
      <Link to="/">GO DUMMY</Link>
      <br />
      <Link to="/hey/you/out/there">GO HEY YOU</Link>
      <br />
      <Link to="/hey/you/what/have/you/become">GO NUMB</Link>
      <hr />
      <Link to="/storage">go storage</Link>
      <Route exact path="/hey/you/out/there" component={() => <h2>Can you feel me? <br /> <img className="img" src="/images/hey_you.jpg" alt="" /></h2>} />
      <Route exact path="/hey/you/what/have/you/become" component={() => <h2>I have become comfortably numb <br /> <img className="img" src="/images/numb.jpg" alt="" /></h2>} />
    </div>
  )
}

Home.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
