import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://linkedin-clone-owvf.onrender.com/api/auth/profile/${id}`, {
        withCredentials: true,
      })
      .then((res) => setUser(res.data));

    axios
      .get(`https://linkedin-clone-owvf.onrender.com/api/posts/user/${id}`, {
        withCredentials: true,
      })
      .then((res) => setPosts(res.data));
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
      {/* User Info */}
      <div className="bg-white p-4 sm:p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-1">{user.name}</h2>
        <p className="text-sm sm:text-base text-gray-600">{user.email}</p>
        <p className="text-sm sm:text-base text-gray-700 mt-2 italic">
          {user.bio}
        </p>
      </div>

      {/* Posts Header */}
      <h3 className="text-lg sm:text-xl font-semibold mb-4">User's Posts</h3>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((p) => (
          <div
            key={p._id}
            className="bg-white p-3 sm:p-4 shadow rounded-lg text-sm sm:text-base"
          >
            <p>{p.content}</p>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">
              {new Date(p.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
