import React, { useState } from "react";

function BlogApp({ blogPosts }) {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSelectBlog = (blogId) => {
    const selected = blogPosts.find((blog) => blog.id === blogId);
    setSelectedBlog(selected);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getPreviewContent = (content) => {
    return content.length > 30 ? content.substring(0, 30) + "..." : content;
  };

  return (
    <div className="container text-center mt-5">
      <div className="row">
        {blogPosts.map((blog, index) => (
          <div key={index} className="col mt-5">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://www.temple.edu/sites/www/files/20220318_EarlySpringStockRSB_024-High%20Res%20JPEG%20300%20DPI.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">
                  {blog.content.length <= 20
                    ? blog.content
                    : blog.content.split("").slice(0, 20).join("") + "..."}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item font-weight-bold">
                  Ahmet Akif Kasım
                </li>
                <li className="list-group-item">18.11.2023</li>
                <li className="list-group-item">Blogger</li>
              </ul>
              <div className="card-body">
                <a
                  href="#"
                  className="card-link"
                  onClick={() => handleSelectBlog(blog.id)}
                >
                  Yazının devamı
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedBlog && (
        <div className="modal fade show d-block">
          <div className="modal-dialog modal-lg">
            {" "}
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedBlog.title}</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{selectedBlog.content}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default BlogApp;
