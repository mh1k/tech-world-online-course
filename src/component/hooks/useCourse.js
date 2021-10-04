import { useEffect } from "react";
import { useState } from "react";

const useCourse = () => {
    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch('/techWorld.json')
            .then(res => res.json())
            .then(data => setCourse(data))

    }, [])
    return [courses];
};

export default useCourse;