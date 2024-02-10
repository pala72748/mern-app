import React from 'react'
import TableTwo from '../../components/TableTwo'
import Breadcrumb from '../../components/Breadcrumb'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const AllProductCategory = () => {
    const navigate = useNavigate();

    // Assuming you are setting values to localStorage somewhere else in your code
    // and here you want to retrieve those values
    const aid = localStorage.getItem('aid');
    const auser = localStorage.getItem('auser');
    const token = localStorage.getItem('token');
  
    useEffect(() => {
      // Check if the token is null or undefined
      if (token == null) {
        navigate('/admin/login');
      }
    }, [token, navigate]);
    return (
      <>
        <Breadcrumb pageName="All Product Category" />
  
        <div className="flex flex-col gap-10">
          <TableTwo />
        </div>
      </>
    )
}

export default AllProductCategory