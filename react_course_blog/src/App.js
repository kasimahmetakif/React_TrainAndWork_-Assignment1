import React, { useState } from "react";
import BlogApp from "./components/BlogApp";
import CustomNavbar from "./components/CustomNavbar";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const array = [
    {
      id: 1,
      title: "Medium Makalesi Nasıl Yazılır?",
      content: "Öncelikle Medium'a kayıt olmamız lazım.",
    },
    {
      id: 2,
      title: "Medium Makalesi Nasıl Yazılır?",
      content: "Öncelikle Medium'a kayıt olmamız lazım.",
    },
    {
      id: 3,
      title: "Medium Makalesi Nasıl Yazılır?",
      content: "Öncelikle Medium'a kayıt olmamız lazım.",
    },
    {
      id: 4,
      title: "Medium Makalesi Nasıl Yazılır?",
      content: "Öncelikle Medium'a kayıt olmamız lazım.",
    },
    {
      id: 5,
      title: "Medium Makalesi Nasıl Yazılır?",
      content: "Öncelikle Medium'a kayıt olmamız lazım.",
    },
    {
      id: 6,
      title: "Medium Makalesi Nasıl Yazılır?",
      content: "Öncelikle Medium'a kayıt olmamız lazım.",
    },
    {
      id: 7,
      title: "Medium Makalesi Nasıl Yazılır?",
      content: "Öncelikle Medium'a kayıt olmamız lazım.",
    },
    {
      id: 8,
      title: "Medium Makalesi Nasıl Yazılır?",
      content: "Öncelikle Medium'a kayıt olmamız lazım.",
    },
  ];

  const [blogPosts, setBlogPosts] = useState(array);

  return (
    <div>
      <div id="background"></div>
      <CustomNavbar setBlogPosts={setBlogPosts} />
      <BlogApp blogPosts={blogPosts} />
      <Footer />
    </div>
  );
}

export default App;
