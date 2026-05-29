import UserList from "../components/UserList";

// Page wrapper around the user list component.
function UserListPage() {
  return (
    <section>
      <h2>Team Directory</h2>
      <p>Below is a list of users loaded from the Flask backend.</p>
      <UserList />
    </section>
  );
}

export default UserListPage;
