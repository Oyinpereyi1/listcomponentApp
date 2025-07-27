
const ListComponent = ([students, course, level, id]) => {
    return (
        <div className="student-list">
            <h2>List of Students</h2>
            {students.map((student) => (
                <div className="student-view" key={student.id}>
                    <ul>
                        <li>{id} {students} is studying {course} who is in {level} level.</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default ListComponent;