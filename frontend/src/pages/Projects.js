import React from "react";
import { useEffect } from "react";
import Cards from "../components/Cards";
import Card from "../components/Card";
import { getprojects } from '../actions/projects';

import { useSelector ,useDispatch} from 'react-redux';


export default function Projects() {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getprojects())
  })
  return (
    <Cards>
   {projects && projects.map(project => (
     <Card data={project} key={project._id} />
     ))}
     </Cards>
      
  );
}

