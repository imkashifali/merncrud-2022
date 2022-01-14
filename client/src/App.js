import "./App.css";
import PostList from "./PostList";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor:'black', color:'white', padding:'10px'}}>MernCrud App</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostList />} exact />
          <Route path="/addPost" element={<AddPost />} exact />
          <Route path="/editPost/:postId" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
      {/* <Link to='/addPost' class="btn btn-primary">Edit</Link> */}

    </div>
  );
}

export default App;
