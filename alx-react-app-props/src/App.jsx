import ProfilePage from "./components/ProfilePage";
import UserContext from "./components/UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return(
    <UserContext.provider value={userData}>
      <ProfilePage />
    </UserContext.provider>
  );
}

export default App;
