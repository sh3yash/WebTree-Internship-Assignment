
import { useState } from "react";

export default function UserCard({ user }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-6 transform transition hover:scale-105 hover:shadow-2xl hover:bg-purple-100 w-96 h-auto flex-col md:flex-row">
      <img
        src={user.picture.large}
        alt={user.name.first}
        className="rounded-lg w-32 h-32 border-4 border-purple-400"
      />
      <div className="flex flex-col items-start">
        <h2 className="text-2xl font-bold text-gray-700">{user.name.first} {user.name.last}</h2>
        <p className="text-gray-600 font-medium">Gender: {user.gender}</p>
        <p className="text-gray-500 font-medium">Phone: {user.phone}</p>
        <button 
          className="mt-3 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Hide Details" : "Read More"}
        </button>
        {showMore && (
          <div className="mt-3 text-gray-600">
            <p>Email: {user.email}</p>
            <p>Location: {user.location.city}, {user.location.country}</p>
            <p>Age: {user.dob.age}</p>
          </div>
        )}
      </div>
    </div>
  );
}