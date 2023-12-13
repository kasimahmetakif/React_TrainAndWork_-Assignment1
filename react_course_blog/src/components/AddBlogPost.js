import React, { useState } from "react";

function AddBlogPost({ onAddBlog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Lütfen hem başlık hem de içerik girin.");
      return;
    }

    const newBlog = {
      id: new Date().getTime(),
      title: title,
      content: content,
    };

    onAddBlog(newBlog);
    setShow(false); // Modalı kapat
  };

  const handleShow = () => setShow(true); // Modalı göster
  const handleClose = () => setShow(false); // Modalı kapat

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleShow}>
        Yeni Blog
      </button>

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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>İçerik:</label>
                  <textarea
                    className="form-control"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
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
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
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

export default AddBlogPost;
