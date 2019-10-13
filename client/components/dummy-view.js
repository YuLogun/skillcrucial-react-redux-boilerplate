import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getData } from '../redux/reducers/users'
import Head from './head'

const Dummy = (props) => {
  const [counter] = useState(4)
  const { getData: getDataProps } = props
  useEffect(() => {
    getDataProps();
  }, [getDataProps])
  return (
    <div>
      <Head title="Hello" />
      <div> {JSON.stringify(props.isRequesting)} </div>
      <div> Hello World {counter} </div>
      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Company</td>
          <td>Salary</td>
          <td>Age</td>
        </tr>
        {
          props.users.map(it => (
            <tr>
              <td>{it.name}</td>
              <td>{it.email}</td>
              <td>{it.company}</td>
              <td>{it.salary}</td>
              <td>{it.age}</td>
            </tr>
          ))
        }
      </table>
      <img src={`/tracker/${counter}.gif`} alt="tracker" />
    </div>
  )
}


Dummy.propTypes = {}

const mapStateToProps = state => ({
  users: state.users.list,
  isRequesting: state.users.isRequesting
})

const mapDispatchToProps = dispatch => bindActionCreators({ getData }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
