import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as courseActions from '../../redux/actions/courseActions'

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ''
    }
  }

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value }
    this.setState({ course })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createCourse(this.state.course)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <button type="submit">Save</button>
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  }
}

const mapDispatchToProps = {
  createCourse: courseActions.createCourse
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage)
