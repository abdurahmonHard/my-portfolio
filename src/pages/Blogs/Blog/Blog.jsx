import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import Spin from "react-reveal/Spin";
import axios from "axios";
import remarkGfm from "remark-gfm";

import GlobalContainer from "../../../components/GlobalContainer/GlobalContainer";
import CodeBlock from "../../../components/MarkdownCode/code";
import logo from "../../../assets/img/logo_white.png";

import "./blog.scss";
import { Fade } from "react-reveal";
import Footer from "../../../container/Footer/Footer";

const Blog = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    const fetchBlog = async () => {
      const result = await axios.get(`/posts/${id}.md`);
      setData(result.data);
    };
    fetchBlog();
  }, [id]);

  //

  return (
    <>
      {data ? (
        <>
          <div className="fixed shadow">
            <nav className="blog-navbar container">
              <Link to="/" className="logo-container">
                <Spin duration={1000}>
                  <img src={logo} alt="logo" className="logo" />
                </Spin>
              </Link>
              <Fade top duration={2000}>
                <Link to="/blogs" className="return-btn">
                  <i class="bx bx-left-arrow-alt"></i>
                  Back to Blogs
                </Link>
              </Fade>
            </nav>
          </div>
          <div className="markdown-body container">
            <ReactMarkdown
              children={data}
              remarkPlugins={[remarkGfm]}
              components={{
                code: CodeBlock,
              }}
            />
          </div>
          <Footer />
        </>
      ) : (
        <div className="loading-container">
          <p className="loading">Loading</p>
        </div>
      )}
    </>
  );
};

export default Blog;
