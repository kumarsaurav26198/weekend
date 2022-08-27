import React,{ useEffect} from 'react'
const axios = require('axios').default;
import BootstrapTable from 'react-bootstrap-table-next';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { addToCart } from 'src/redux/action/cartAction';
import { useDispatch } from 'react-redux'

const CampignListTable = () => {


  const dispatch = useDispatch();

  const products = [ ];

    const columns = [{
        dataField: 'id',
        text: 'Product ID'
      }, {
        dataField: 'name',
        text: 'Product Name'
      }, {
        dataField: 'price',
        text: 'Product Price'
      }];


      
    // useEffect(() => {
    //     getData()
       
    // }, []);
    
//      const getData=() => {
//          axios('https://62dbc602d1d97b9e0c53b578.mockapi.io/fakedata')
//          .then(function (response) {
//         console.log(response) 
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//           })
//           .then(function () {
//             // always executed
//           });
//       }
//       )
   
// }
  return (
    

  <>
    <div>CampignListTable</div>
    <CRow>
      <CCol xs={5}>

        <CCard className="mb-4">

          <CCardHeader>
            <strong>React Button</strong>
          </CCardHeader>
          <CCardBody  className="d-inline-flex p-2">
          <CButton color="primary" onClick={()=>dispatch(addToCart()) }>Add to cart</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
          <CButton color="info">Fetch data from API</CButton>
    <BootstrapTable keyField='id' data={ products } columns={ columns } />
  </>
  )
}

export default CampignListTable