import React from 'react'
import './UserOrders.css'

export default function EditAddresses ({addresses}){

    return(
        <div className='myaccount-info-wrapper'>
                            <div className='account-info-wrapper'>
                              <h4>Adresler</h4>
                            </div>
                            <div className='entries-wrapper'>
                              {addresses && addresses.map(address=>(
                                  <div className='row' key='address.id'>
                                  <div className='col-lg-6 col-md-6 d-flex align-items-center justify-content-center'>
                                    <div className='entries-info text-center'>
                                      <p>{address.street}</p>
                                      <p>{address.city} </p>
                                      <p> {address.town} </p>
                                    </div>
                                  </div>
                                  <div className='col-lg-6 col-md-6 d-flex align-items-center justify-content-center'>
                                    <div className='entries-edit-delete text-center'>
                                      <button className='active edit-btn'>Düzenle</button>
                                      <button className='active order-btn'>Sil</button>
                                    </div>
                                  </div>
                                </div>
                                )
                              )
                              }
                            </div>
                            <div className='billing-back-btn'>
                              <div className='billing-btn'>
                                <button type='submit'>Continue</button>
                              </div>
                            </div>
                          </div>
    )
}