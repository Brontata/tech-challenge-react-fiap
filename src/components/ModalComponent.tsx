import React from "react";
import { formatDate } from "../utils/dateTimeUtils";

interface PostType {
  id: number | undefined;
  title: string;
  description: string;
  image?: string;
  created_at?: Date | undefined;
  updated_at?: Date | undefined;
}

interface ModalComponentProps {
  open: boolean;
  onClose: () => void;
  post: PostType;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ open, onClose, post }) => {
  return (
    <div
      className={`modal fade ${open ? "show" : ""}`}
      style={{ display: open ? "block" : "none" }}
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalLabel">
              {post.title}
            </h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div
            className="modal-body"
            style={{ maxHeight: "450px", overflowY: "auto" }}
          >
            <div className="row">
              <div className="col-md-6">
                <img
                  src={
                    post.image
                      ? post.image
                      : "https://random-image-pepebigotes.vercel.app/api/random-image"
                  }
                  alt={post.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
              </div>

              <div className="col-md-6">
                <h5>{post.title}</h5>
                <p>{post.description}</p>
                <p>
                  <strong>Criado em:</strong>{" "}
                  {post.created_at ? formatDate(new Date(post.created_at)) : 'Data não disponível'}
                </p>
                <p>
                  <strong>Atualizado em:</strong>{" "}
                  {post.updated_at ? formatDate(new Date(post.updated_at)) : 'Data não disponível'}
                </p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
