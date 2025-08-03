import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");

  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://linkedin-clone-owvf.onrender.com/api/posts", {
        withCredentials: true,
      });
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://linkedin-clone-owvf.onrender.com/api/posts",
        { content },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
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
    <div className="max-w-2xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
      {token && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 sm:p-6 shadow rounded-lg mb-6"
        >
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write a post..."
          ></textarea>
          <button
            type="submit"
            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition sm:text-base text-sm w-full sm:w-auto"
          >
            Post
          </button>
        </form>
      )}

      <h2 className="text-lg sm:text-xl font-semibold mb-4">Recent Posts</h2>

      {posts.map((p) => (
        <div
          key={p._id}
          className="bg-white p-4 sm:p-6 shadow rounded-lg mb-4"
        >
          <p className="text-gray-800 text-sm sm:text-base">{p.content}</p>
          <div className="text-xs sm:text-sm text-gray-500 mt-2">
            <strong>{p.author.name}</strong> |{" "}
            {new Date(p.createdAt).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
