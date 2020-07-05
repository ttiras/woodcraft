import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";

function PaymentsModal(props) {
  const { orderPayment } = props;
  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={props.onHide}
        className='product-quickview-modal-wrapper'
      >
        <Modal.Header closeButton><h5><strong>Ödeme Detayları</strong></h5></Modal.Header>

        <div className='billing-info-wrap m-4'>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <ul>
                <li>
                  {" "}
                  <strong>binNumber:</strong> {orderPayment.binNumber}
                </li>
                <li>
                  {" "}
                  <strong>Tarih:</strong> {new Date(orderPayment.created_at).toLocaleString("en-Gb")}
                </li>
                <li>
                  {" "}
                  <strong>fraudStatus:</strong> {orderPayment.fraudStatus}
                </li>
                <li>
                  {" "}
                  <strong>Taksit Sayısı:</strong> {orderPayment.installments}
                </li>
                <li>
                  {" "}
                  <strong>iyzico Komisyon Oranı:</strong>{" "}
                  {orderPayment.iyziCommissionFee}
                </li>
                <li>
                  <strong>iyzico Komisyon Tutarı:</strong>{" "}
                  {orderPayment.iyziCommissionRateAmount}
                </li>
                <li>
                  <strong>Kartın Son 4 Hanesi:</strong>{" "}
                  {orderPayment.lastFourDigits}{" "}
                </li>
                <li>
                  <strong>mdStatus:</strong> {orderPayment.mdStatus}
                </li>
                <li>
                  <strong>paymentId:</strong> {orderPayment.paymentId}
                </li>
                <li>
                  <strong>Tutar:</strong> {orderPayment.amount} TL
                </li>
                <li>
                  <strong>Ödenen Tutar:</strong> {orderPayment.paidPrice} TL
                </li>
              </ul>
            </div>
            <div className='col-lg-6 col-md-6'>
                <h5 className="mb-2"><strong>Ürün Bazında Ödeme Detayları (itemTransactions):</strong> </h5>
                {orderPayment&& orderPayment.itemTransactions&& orderPayment.itemTransactions.map(item=>(
                    <ul className="border mb-3">
                        <li><strong>itemId: </strong> {item.itemId}</li>
                        <li><strong>paymentTransactionId: </strong> {item.paymentTransactionId}</li>
                        <li><strong>payment_id: </strong> {item.payment_id}</li>
                        <li><strong>Tutar: </strong> {item.price} TL</li>
                        <li><strong></strong></li>
                        <li><strong>Ödenen Tutar: </strong>{item.paidPrice} TL</li>
                    </ul>
                ))}
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}

export default PaymentsModal;
