import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");

  const fetchPosts = async () => {
    const res = await axios.get("https://linkedin-clone-owvf.onrender.com/api/posts");
    setPosts(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://linkedin-clone-owvf.onrender.com/api/posts",
        { content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setContent("");
      fetchPosts();
    } catch {
      alert("You need to login to post.");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-8">
      {token && (
        <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-6">
          <textarea
            className="w-full border rounded p-2"
            rows="3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write a post..."
          ></textarea>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Post</button>
        </form>
      )}

      <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
      {posts.map((p) => (
        <div key={p._id} className="bg-white p-4 shadow rounded mb-4">
          <p className="text-gray-700">{p.content}</p>
          <div className="text-sm text-gray-500 mt-2">
            <strong>{p.author.name}</strong> | {new Date(p.createdAt).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
