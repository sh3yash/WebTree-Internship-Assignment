import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

export default function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=5&seed=abc")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold text-white my-6 ">WebTree Employees Directory</h1>
      <input
        type="text"
        placeholder="Search by name..."
        className="p-3 border rounded-lg w-96 mb-6 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {users
          .filter((user) =>
            (`${user.name.first} ${user.name.last}`.toLowerCase()).includes(search)
          )
          .map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
      </div>
    </div>
  );
}
