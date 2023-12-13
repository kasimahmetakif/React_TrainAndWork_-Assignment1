import React, { useState } from "react";
import BloggerLogo from "../assets/images/BloggerLogo.png";

function CustomNavbar({ setBlogPosts }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  var newId = 8;

  const handleSubmit = (e) => {
    e.preventDefault();
    newId++;
    console.log("merhaba");
    console.log(blogTitle);
    console.log(blogContent);

    const newBlogPost = {
      id: newId,
      title: blogTitle,
      content: blogContent,
    };

    setBlogPosts((prevBlogPosts) => [...prevBlogPosts, newBlogPost]);

    setName("");
    setBlogTitle("");
    setBlogContent("");
    setShow(false);

    handleClose();
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              src={BloggerLogo}
              alt="Blogger Logo"
              style={{ width: "70px", height: "auto" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Anasayfa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hakkımızda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Yazarlarımız
                </a>
              </li>
            </ul>
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={handleShow}
            >
              Yeni Blog
            </button>
          </div>
        </div>
      </nav>
      {/* Modal */}
      <div
        className={show ? "modal fade show d-block" : "modal fade"}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Yeni Blog Yazısı Ekle</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Blog Başlığı:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>İçerik:</label>
                  <textarea
                    className="form-control"
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={handleClose}
              >
                Kapat
              </button>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
              >
                Yayınla
              </button>
            </div>
          </div>
        </div>
      </div>

      {show && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default CustomNavbar;
