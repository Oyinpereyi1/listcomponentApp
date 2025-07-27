import ListComponent from './ListComponent.js';
import useFetch from './useFetch.js';
import StudentDetails from './StudentDetails.js';

const Home = () => {

    const {studentData, name, level, course, id, isLoading, errorM} = useFetch('http://localhost:8000/studentData');
    
    return(
        <div className='home'>
            { errorM && <div>{errorM}</div>}
            { isLoading && <div>Loading...</div>}
            { studentData && <ListComponent studentData={studentData} 
            name={name} id={id} level={level} course={course}/>}
            <StudentDetails/>
        </div>
    );
}

export default Home;