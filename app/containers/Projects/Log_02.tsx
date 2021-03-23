import React, { useEffect,useMemo } from 'react'
import { connect } from 'react-redux'
import { Row, Col, } from 'antd'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { useSelector } from 'react-redux'
import { makeSelectLogs, makeSelectProjects } from './selectors'
import {
  ILog, ILogsProps
} from './types'

import { ProjectActions } from './actions'

const Logs: React.FC<ILog & ILogsProps> = React.memo(
  ({
    onloadLogs
  }) => {

    useEffect(() => {
      if (onloadLogs) {
        onloadLogs()
      }
    }, ['nf'])
    
    
    const currentlogs = useSelector(makeSelectLogs())
    
    return (
      
      <div>
        <Row>
          <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{ height: '134px', width: '20%', marginTop: '20px', marginLeft: '76px', marginRight: '20px', backgroundColor: 'yellow' }}>
            姓名 
                {Object.values(currentlogs)[0]==null ?0 :(Object.values(currentlogs)[0].length==0?0:currentlogs[0].description) }

          </Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4} style={{ height: '134px', width: '20%', marginTop: '20px', marginRight: '20px', backgroundColor: 'blue' }}>
            登录次数
              </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{ height: '134px', width: '20%', marginTop: '20px', marginRight: '20px', backgroundColor: 'orange' }}>
            下载次数
              </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{ height: '134px', width: '20%', marginTop: '20px', backgroundColor: 'red' }}>
            累计访问次数
              </Col>
        </Row>
      </div>
    )

  }
)

const mapStateToProps = createStructuredSelector({
  projects: makeSelectProjects(),
})


export function mapDispatchToProps(dispatch) {
  return {
    onloadLogs: () => dispatch(ProjectActions.loadLogs())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withConnect
)(Logs)



