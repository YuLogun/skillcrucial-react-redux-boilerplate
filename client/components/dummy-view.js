import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getData } from '../redux/reducers/users'
import Head from './head'

const Dummy = (props) => {
  const [counter] = useState(4)
  const [pageIndex, setpageIndex] = useState(0)
  const { getData: getDataProps } = props
  useEffect(() => {
    getDataProps(pageIndex);
  }, [getDataProps, pageIndex])
  return (
    <div>
      <Head title="Hello" />
      <div> {JSON.stringify(props.isRequesting)} </div>
      <div> Hello World {counter} {props.users.length}</div>
      <div> Page {pageIndex} </div>
      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Address</td>
          <td>Company</td>
          <td>Salary</td>
          <td>Commerce</td>
          <td>Age</td>
        </tr>
        {
          props.users.map((it, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{it.name}</td>
              <td>{it.email}</td>
              <td>{it.address}</td>
              <td>{it.company}</td>
              <td>{it.salary}</td>
              <td>{it.commerce}</td>
              <td>{it.age}</td>
            </tr>
          ))
        }
      </table>
      <button
        type="button"
        onClick={() => setpageIndex(Math.max(0, pageIndex - 1))}
      >
        Previous
      </button>
      <button
        type="button"
        onClick={() => setpageIndex(pageIndex + 1)}
      >
        Next
      </button>
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
