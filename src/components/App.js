import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";
import logo from "../assets/logo.js";

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name={blogData.name}/>
      <About about = {blogData.about} image={blogData.image} logo={logo} />
    <ArticleList posts={blogData.posts} id={blogData.id} />
    <Article />
    </div>
  );
}

export default App;
