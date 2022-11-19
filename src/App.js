import { useState, useEffect } from 'react';
import axios from "axios"
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const fetchPosts = async () => {
    setLoading(true)
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setPosts(response?.data)
    setLoading(false)
  }

  // pagination logic
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="App">
      <h1>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts?.length} paginate={paginate} />
    </div>
  );
}

export default App;
