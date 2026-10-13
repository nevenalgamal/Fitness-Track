import { useAuth } from "../auth/AuthContext";
export default function ActivityList({ activities ,tryDlete}) {
  const {token} = useAuth();
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name} 
       {token && (<button onClick={() => tryDlete(activity.id)}>
         Delete 
         </button>
          )} 
         </li>
      ))}
    </ul>
  );
}
