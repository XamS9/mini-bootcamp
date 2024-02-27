import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetData from "../apis/getData.api";
import SectionSideBar from "../components/sectionsSideBard";

function Course (ID) {
    const [course, setCourse] = useState({name: "", description: ""})
    let { id } = useParams()
    if (!id){
        id = ID.ID;
    }
    useEffect(() => {
        GetData('/courses/'+id).then((data) =>{
            setCourse(data)
        })
    },[id])
    return (
        <SectionSideBar id={id} name={course.name}/>
    )
}

export default Course