import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://linkedin-clone-owvf.onrender.com/api/auth/profile/${id}`).then((res) => setUser(res.data));
    axios.get(`https://linkedin-clone-owvf.onrender.com/api/posts/user/${id}`).then((res) => setPosts(res.data));
  }, [id]);

  return (
    <div className="max-w-xl mx-auto mt-8">
      <div className="bg-white p-6 shadow rounded mb-6">
        <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-700 mt-2 italic">{user.bio}</p>
      </div>

      <h3 className="text-xl font-semibold mb-4">User's Posts</h3>
      {posts.map((p) => (
        <div key={p._id} className="bg-white p-4 shadow rounded mb-4">
          <p>{p.content}</p>
          <div className="text-sm text-gray-500 mt-1">{new Date(p.createdAt).toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
