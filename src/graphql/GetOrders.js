import gql from "graphql-tag";

const GET_ORDERS_NOT_SHIPPED = gql`
  query GetOrders {
    orders (order_by: {created: desc}){
        amount
        created
        id
        invoice_id
        isCancelled
        isGift
        isPaid
        isShipped
        notes
        status
        updated_at
        user_id
        addresses {
          city
          created_at
          id
          isinvoiceAddress
          name
          surname
          street
          town
          updated_at
        }
        order_items {
          qty
          product_id
          product {
            discount
            fullDescription
            id
            name
            isActive
            new
            price
            saleCount
            shortDescription
            sku
            stock
            updated_at
            rating
            image {
              path
            }
          }
        }
        order_payment {
          amount
          binNumber
          created_at
          fraudStatus
          installments
          iyziCommissionFee
          iyziCommissionRateAmount
          lastFourDigits
          mdStatus
          paidPrice
          paymentId
          updated_at
          itemTransactions {
            itemId
            paidPrice
            paymentTransactionId
            payment_id
            price
          }
        }
        order_status {
          value
        }
        shipping {
          track
        }
        invoice {
          path
        }
        user_ordered {
          email
          created
          name
          surname
          phone
          role
          updated_at
        }
      }
  }
`;

export default GET_ORDERS_NOT_SHIPPED
