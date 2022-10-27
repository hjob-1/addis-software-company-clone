import React from "react";
import "./blog.scss";
import blogcomming from "../assets/blogcoming.png";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className='blog-container'>
      <article>
        <div className='blog-header'>
          <h1>OUR BLOGS</h1>
        </div>
        <div className='blog-description'>
          <p>
            The list is designed in an easily digestible format, with each entry
            containing a short description of the blog and a link to the
            website. The blogs are sorted alphabetically, making it easy to find
            what you're looking for. Whether you're looking for the latest news
            on new technology or want to learn more about a particular topic,
            this list has something for everyone. With so many great options to
            choose from, you're sure to find a blog that will help you stay
            up-to-date on all the latest developments in the world of
            technology.
          </p>
          <div className='blog-contents'>
            <img src={blogcomming} alt='blog comming soon' />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blog;
