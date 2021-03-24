import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, } from 'antd'
import { compose } from 'redux'
import { makeSelectLogs } from './selectors'
import { ILog } from './types'
import { createStructuredSelector } from 'reselect'
import 'assets/fonts01/iconfont.css'
const styles = require('../Organizations/Project.less')


export class Logs extends React.Component<ILog> {
  constructor(props) {
    super(props)
    this.state = {
      project: ''
    }
  }

  render() {
    // console.log(this.props['logs'],222)
    // console.log(this.props['logs']['0'].lastoperation,333)
    return (

      <div className={styles.log}>
        <Row>
          <Col xs={2} sm={4} md={6} lg={8} xl={10} className={styles.log01}>
            用户名 <br />
            <div className={styles.if01}>
              <i className="iconfont iconxingming" />
              <span>您好, {(this.props['logs']) == null ? '' : (this.props['logs'][0]).userName}</span>
            </div>
          </Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4} className={styles.log02}>
            登录次数 <br />
            <div className={styles.if02}><i className="iconfont icondengludanse" />
              <span>{(this.props['logs']) == null ? '' : (this.props['logs'][0]).loginNum}</span>
            </div>
          </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10} className={styles.log03}>
            下载次数 <br />
            <div className={styles.if03}><i className="iconfont iconxiazai" />
              <span>{(this.props['logs']) == null ? '' : (this.props['logs'][0]).downNum}</span>
            </div>
          </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10} className={styles.log04}>
            访问分钟数 <br />
            <div className={styles.if04}><i className="iconfont iconshijian" />
              <span>{(this.props['logs']) == null ? '' : (this.props['logs'][0]).sumTime}</span>
            </div>
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



