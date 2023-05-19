import React from 'react';



export default class Forms extends React.Component {
    state = {
        courseName: ''
    };

    // [1] insert new course to list of courses
    handleChange = (e) => {
        this.setState({ courseName: e.target.value });
    };


    // [2] insert new course to list of courses
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.courseName) return;
        this.props.addCourses(this.state.courseName);
        this.setState({ courseName: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder='Add New Course' type="text" value={this.state.courseName} onChange={this.handleChange} />
                <button type='submit'>Add Courses</button>
            </form>
        );
    }
}