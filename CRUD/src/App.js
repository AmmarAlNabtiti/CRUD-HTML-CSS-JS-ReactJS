import React from 'react';
import './App.css';
import Forms from './Component/Forms/Forms';
import CourseList from './Component/CoursesList/CoursesList';

class App extends React.Component {

  state = {
    CourseList: [
      { ID: 1, courseName: "HTML" },

    ]
  };

  // add new course to your course collection
  addCourses = (CourseName) => {
    const courseId = this.state.CourseList.length + 1;
    const newCourse = { ID: courseId, courseName: CourseName };
    let courseList = this.state.CourseList.concat(newCourse);
    this.setState({
      CourseList: courseList,
    });
  };

  // delete course from the CourseList
  HandleDelete = (index) => {

    const courseToRemove = this.state.CourseList.find((ele) => {
      return ele.ID === index;
    });

    const updatedCourseList = this.state.CourseList.filter(course => course.ID !== courseToRemove.ID);
    this.setState({ CourseList: updatedCourseList });

  };


  // edit course name

  editCourse = (index, newvalue) => {
    let courses = this.state.CourseList;
    let course = courses[index];
    course["courseName"] = newvalue;
    this.setState({
      CourseList: courses
    });
  };



  render() {
    const courses = this.state.CourseList;
    const AllCoursesName = courses.map((ele) => {
      return <CourseList editCourse={this.editCourse} Delete={this.HandleDelete} CourseDetails={ele} ID={ele.ID} />;
    });

    return (
      <section className="App" >
        <h2>Add Courses</h2>
        <Forms addCourses={this.addCourses} />
        <ul>{AllCoursesName}</ul>
      </section>
    );
  };
}

export default App;