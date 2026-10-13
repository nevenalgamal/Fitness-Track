
export default function ActivityList({ activities ,tryDlete}) {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name} 
        <button onClick={() => tryDlete(activity.id)}> Delete </button></li>
      ))}
    </ul>
  );
}
