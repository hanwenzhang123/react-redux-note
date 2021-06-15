//Passing Data to Components Via Routes
Instead of rendering a different component for each course topic, we'll create a container component that facilitates the rendering of all courses. 
Then we'll pass the course data to the container component as props.


//components/Course.js
import React from 'react';

const Course = (props) => (
  <li className="course media group">
    <img className="course-img" src={props.img} alt="course" />
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  </li>
);

export default Course;


//components/CourseContainer.js
import React from 'react';
import Course from './Course';

const CourseContainer = (props) => {
  let courses = props.data.map((course) => {
    return <Course title={course.title}
                   desc={course.description}
                   img={course.img_src}
                   key={course.id} />
  }); 
  return (
    <div>
      <ul>
        {courses}    
      </ul>
    </div>
  );
}

export default CourseContainer;
                               
                               
                               
//Courses.js
import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import CourseContainer from './courses/CourseContainer';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    <Route exact path={match.path} 
                render={ () => <Redirect to={`${match.path}/html`} /> } />
          
    <Route path={`${match.path}/html`} 
          render={ () => <CourseContainer data={HTMLCourses} /> } />         
    <Route path={`${match.path}/css`} 
          render={ () => <CourseContainer data={CSSCourses} /> } />     
    <Route path={`${match.path}/javascript`} 
          render={ () => <CourseContainer data={JSCourses} /> } />
  </div>
);

export default Courses;
 
