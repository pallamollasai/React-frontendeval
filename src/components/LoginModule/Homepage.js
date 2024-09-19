import React, {useState} from "react";
const courses = {
    "ReactJs": "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    "Angular": "Angular js course",
    "HTML": "html course"
}
export default function Homepage() {
    const [courseSelected, setCourseSelected] = useState('ReactJs'); 

    const handleCourseChange = (e) => {
        setCourseSelected(e.target.value);
    }
    return (
        <>
            <div className="homepage-container">
                <h2>Home Page</h2>
                <select value={courseSelected} onChange={handleCourseChange}>
                    {Object.keys(courses).map((course, index) => (
                        <option key={course + index} value={course}>{course}</option>
                    ))}
                </select>
                <div className="course-description">
                    <p>{courses[courseSelected]}</p>
                </div>
            </div>
        </>
    )
}