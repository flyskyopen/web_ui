import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, } from 'antd'
import { compose } from 'redux'
import { makeSelectLogs } from './selectors'
import { ILog } from './types'
import { createStructuredSelector } from 'reselect'
const styles = require('../Organizations/Project.less')

export class Logs extends React.Component<ILog> {
  constructor(props) {
    super(props)
    this.state = {
      project: ''
    }
  }

  render() {
  

    return (

      <div className={styles.log}>
        <Row>
          <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{ height: '134px', width: '20%', marginTop: '20px', marginLeft: '76px', marginRight: '20px', backgroundColor: 'yellow' }}>
            姓名 <br />
            {(this.props['logs']) == null ? '' : (this.props['logs'][0]).userName}
          </Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4} style={{ height: '134px', width: '20%', marginTop: '20px', marginRight: '20px', backgroundColor: 'blue' }}>
            登录次数 <br />
            {(this.props['logs']) == null ? '' : (this.props['logs'][0]).loginNum}
          </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{ height: '134px', width: '20%', marginTop: '20px', marginRight: '20px', backgroundColor: 'orange' }}>
            下载次数 <br />
            {(this.props['logs']) == null ? '' : (this.props['logs'][0]).downNum}
          </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{ height: '134px', width: '20%', marginTop: '20px', backgroundColor: 'red' }}>
            累计分钟数 <br />
            {(this.props['logs']) == null ? '' : (this.props['logs'][0]).sumTime}
          </Col>
        </Row>
      </div>
    )
  }

}


const mapStateToProps = createStructuredSelector({
  logs: makeSelectLogs(),
})


const withConnect = connect(mapStateToProps, null)

export default compose(
  withConnect
)(Logs)



