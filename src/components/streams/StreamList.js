import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {
  componentDidMount () {
    this.props.fetchStreams()
  }

  renderAdmin (stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui tiny button primary">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui tiny button negative">Delete</Link>
        </div>
      )
    }
  }

  renderList () {
    return this.props.streams.map(stream => {
      return (
        <div className="item seg" key={stream.id}>
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">{ stream.title }</Link>
            <div className="meta">
              <span>Description</span>
            </div>
            <div className="description">
              <p>{ stream.description }</p>
            </div>
            <div class="extra">
              { this.renderAdmin(stream) }
            </div>
          </div>
        </div>
      )
    })
  }

  renderCreate () {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/streams/new" className="ui inverted fluid button primary">
            Create Stream
          </Link>
        </div>
      )
    }
  }

  render () {
    return (
      <div>
        <h1 className="ui white header">Streams</h1>
        <div className="ui items">
          { this.renderList() }
        </div>
        { this.renderCreate() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)