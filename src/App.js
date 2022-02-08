import Profile from "./Components/Profile/profile";
import user from "./Data/user.json";

import Statistics from "./Components/Statistics/Statistics";
import data from "./Data/data.json";

import FriendList from "./Components/FriendList/FriendList";
import friends from "./Data/friends.json";

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
    </div>
  );
}

export default App;
