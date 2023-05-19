import React from 'react';



export default class CourseList extends React.Component {

    state = {
        isEdit: false,
    };

    // toggle state
    toggleState = () => {
        let { isEdit } = this.state;
        this.setState({ isEdit: !isEdit });
    };

    updateCourseItems = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.ID - 1, this.input.value);
        this.toggleState();
    };
    // render Update form
    renderUpdateForm() {
        return (
            <form onSubmit={this.updateCourseItems}>
                <input ref={(v) => { this.input = v; }} type="text" defaultValue={this.props.CourseDetails.courseName} />
                <button>Update Course</button>
            </form>
        );
    }

    // render Course Items

    renderCourse = () => {
        return (
            <>
                <li key={this.props.key}>
                    <span>{this.props.CourseDetails.courseName}</span>
                    <button onClick={() => { this.toggleState(); }} >Edit Course </button>
                    <button onClick={() => this.props.Delete(this.props.ID)} >Delete Course</button>
                </li>
            </>
        );
    };

    render() {
        return (
            <>
                {this.state.isEdit ? this.renderUpdateForm() : this.renderCourse()}
            </>
        );
    }
}