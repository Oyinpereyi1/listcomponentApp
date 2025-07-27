import useFetch from "./useFetch";
//import {useParams } from "react-router-dom";

const StudentDetails = () => {
    //const {id} = useParams();
    const {studentData} = useFetch('http://localhost:8000/studentData');
    
    return (
        <div className="student-details">
            { studentData && (
                <section>
                    <ul>
                        <li>{studentData.id}</li>
                        <li>{studentData.name}</li>
                        <li>{studentData.course}</li>
                        <li>{studentData.level}</li>
                    </ul>
                </section>
                
            )}
        </div>
    );
}
export default StudentDetails;