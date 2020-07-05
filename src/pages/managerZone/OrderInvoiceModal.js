import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import axios from "axios";
import INSERT_INVOICE from "../../graphql/InsertInvoice";

function OrderInvoiceModal(props) {
  const [insertInvoice, { loading, error }] = useMutation(INSERT_INVOICE, {
    onCompleted() {
      onHide();
      alert("Fatura Gönderildi");
    },
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [loaded, setLoaded] = useState(0);

  const { onHide, orderId } = props;

  const onChangeHandler = (event) => {
    var files = event.target.files;
    setSelectedFile(files);
  };

  const handleFiles = () => {
    const data = new FormData();
    for (var x = 0; x < selectedFile.length; x++) {
      data.append("file", selectedFile[x]);
    }
    axios
      .post("https://backend.rover.micota.com.tr/file", data, {
        onUploadProgress: (ProgressEvent) => {
          setLoaded((ProgressEvent.loaded / ProgressEvent.total) * 100);
        },
      })
      .then((res) => {
        // then print response status
        insertInvoice({
          variables: {
            fileName: selectedFile[0].name,
            order_id: orderId,
            path: `https://backend.rover.micota.com.tr/build/files/${selectedFile[0].name}`,
          },
        });
      })
      .catch((err) => {
        // then print response status
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={props.onHide}
        className='product-quickview-modal-wrapper'
      >
        <Modal.Header closeButton></Modal.Header>

        <div className='billing-info-wrap m-4'>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <h3>Fatura Bilgisi Gir</h3>
            </div>
            <div className='col-lg-6 col-md-6'></div>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <h3>Fatura Yükle</h3>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='offset-md-3 col-md-6'>
                <div className='form-group files'>
                  <label>Fatura Seç</label>
                  <input
                    placeholder='görsel seç'
                    type='file'
                    className='form-control'
                    multiple
                    onChange={onChangeHandler}
                  />
                </div>{" "}
                <button
                  disabled={!selectedFile}
                  type='button'
                  className='btn btn-success btn-block'
                  onClick={handleFiles}
                >
                  {loading ? "Mail gönderiliyor..." : "Yükle"}
                </button>
              </div>
              <div className='d-flex'>
                {loaded === 100 && "Fatura Yüklendi"}
              </div>
              {error&& 'Fatura gönderilemedi, daha sonra tekrar deneyin.'}
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}

export default OrderInvoiceModal;
