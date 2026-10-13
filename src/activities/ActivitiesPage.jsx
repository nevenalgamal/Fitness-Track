import { useState, useEffect } from "react";
import { deletActivity, getActivities } from "../api/activities";

import ActivityList from "./ActivityList";
import ActivityForm from "./ActivityForm";
import { useAuth } from "../auth/AuthContext";


export default function ActivitiesPage() {
  const [activities, setActivities] = useState([]);
  const [error, setError] =useState(null);
  const { token } = useAuth();

  const syncActivities = async () => {
    const data = await getActivities();
    setActivities(data);
  };

  useEffect(() => {
    syncActivities();
  }, []);

 const tryDlete = async(id) =>{
  try{
   await deletActivity(token , id );
   await syncActivities()
  }
  catch(e){
    setError(e.message);
  }
  }
 

  return (
    <>
      <h1>Activities</h1>
        <p>{error} </p>
      <ActivityList activities={activities}  tryDlete={tryDlete}/>
      <ActivityForm syncActivities={syncActivities} />
    

    </>
  );
}
