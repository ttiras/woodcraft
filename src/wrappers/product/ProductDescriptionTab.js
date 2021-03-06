import PropTypes from "prop-types";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const ProductDescriptionTab = ({ spaceBottomClass, product }) => {
  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className='container'>
        <div className='description-review-wrapper'>
          <Tab.Container defaultActiveKey='productDescription'>
            <Nav variant='pills' className='description-review-topbar'>
              <Nav.Item>
                <Nav.Link eventKey='additionalInfo'>Ek Bİlgiler</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='productDescription'>Uyarılar</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='returns'>İade ve Değişim Prosedürü</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className='description-review-bottom'>
              <Tab.Pane eventKey='additionalInfo'>
                <div className='product-anotherinfo-wrapper'>
                  <ul>
                    <li>
                      <span>Zemin Rengi</span>
                      {product.base_color}
                    </li>
                    <li>
                      <span>Ölçüler</span>
                      {product.dimensions}
                    </li>
                    <li>
                      <span>Ağırlık</span>
                      {product.weight}
                    </li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey='productDescription'>
              <div className='product-anotherinfo-wrapper'>
                <ul>
                  <li className='list-group-item list-group-item-danger'>
                    Su ile direkt temas ettirmeyiniz.
                  </li>
                  <li className='list-group-item list-group-item-danger'>
                    Bulaşık makinesi kullanımına uygun değildir.
                  </li>
                  <li className='list-group-item list-group-item-danger'>
                    Nemli bez ile silerek temizleyiniz.
                  </li>
                  <li className='list-group-item list-group-item-danger'>
                    Uzun süre güneşte bırakmayınız. 
                  </li>
                </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey='returns'>
              <div className='product-anotherinfo-wrapper'>
                <ul>
                  <li >
                    <span>Hızlı İade</span>
                      İade ve değişim işlemleri için iletişim bilgilerini kullanarak talepte bulunmanız durumunda kolay iade ekibimiz size yardımcı olacaktır.
                  </li>
                  <li >
                    <span>Detaylı Bilgi</span>
                    Detaylı bilgi edinmek isterseniz <a href='/iade'><strong>İade ve Değişim Prosedürlerini</strong></a> inceleyebilirsiniz.
                  </li>
                  
                </ul>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProductDescriptionTab;
