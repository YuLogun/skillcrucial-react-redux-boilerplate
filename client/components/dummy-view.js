import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
/* import { getData } from '../redux/reducers/users' */
import Head from './head'

const Dummy = () => {
  const [counter] = useState(0)
  return (
    <div>
      <Head title="Hello" />
      <div> Hello World {counter} </div>
    </div>
  )
}


Dummy.propTypes = {}

const mapStateToProps = state => ({
  users: state.users.list,
  isRequesting: state.users.isRequesting
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
