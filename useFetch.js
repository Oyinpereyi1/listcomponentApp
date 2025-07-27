import { useState, useEffect } from "react";

    const useFetch = (url) => {
    const [studentData, setStudentData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorM, setErrorM] = useState(null);

    useEffect(() => {

        //using bort controller to clean up useState and useEffect when unmount
        //const abortControl = AbortController();

        setTimeout(() => {
            /**setting optional abort value in association with abort 
             control function above inorder to stop the fetch re-render**/

            fetch(url) //, {signal: abortControl.signal} ) 
            .then(res => {
                if(!res.ok){
                    throw Error("Resource location not found!");
                }
                return res.json();
            })
            .then(data =>{
                setStudentData(data);
                setIsLoading(false);
                setErrorM(null);
            })
            .catch(errMessage => {
                if(errMessage.name === 'AbortError'){
                    console.log('Fetch Aborted');
                }else{
                setIsLoading(false);
                setErrorM(errMessage.message);
                }
            })
        }, 3000)

        //return () => abortControl.abort();

    }, [url]);

    return {studentData, isLoading, errorM};
}

export default useFetch;