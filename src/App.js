import Profile from "./Components/Profile/profile";
import user from "./Data/user.json";

function App() {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}

export default App;
