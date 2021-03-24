import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { Timeline, Icon } from 'antd'
import { compose } from 'redux'
import { makeSelectLogs } from './selectors'
import { ILog } from './types'
import { createStructuredSelector } from 'reselect'
const styles = require('../Organizations/Project.less')

export class LastNewAction extends React.Component<ILog> {

  constructor(props) {
    super(props)
    this.state = {
      project: ''
    }
  }

  render() {
    // if (this.props['logs']) {
    //   const { ...xxx } = this.props['logs'][0].lastoperation
    //   Object.keys(xxx).forEach((key) => {
    //     console.log(xxx[key].action)
    //   });
    // }
    return (
      <div>
          <span>最新动态</span>

        <Timeline>
          {
            this.props['logs'] != null
              ?
              Object.keys(this.props['logs'][0].lastoperation).map(value => {
                return <div key={value}>

                  <Timeline.Item>
                    {this.props['logs'][0].lastoperation[value].date + ' '}
                    {this.props['logs'][0].lastoperation[value].time + '-'}     
                    {this.props['logs'][0].lastoperation[value].name + '-在'} 
                    {this.props['logs'][0].lastoperation[value].team +'项目 '} 
                    {this.props['logs'][0].lastoperation[value].action } 
                    {this.props['logs'][0].lastoperation[value].sub_viz_name} 

                  </Timeline.Item>

                </div>
              })
              : ''
          }
        </Timeline>
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
)(LastNewAction)



