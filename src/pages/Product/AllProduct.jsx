import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Errormessage from '../../components/Errormessage'
import axios from 'axios'

const AllProduct = () => {
  const navigate = useNavigate();
  const [viewcatdata, setViewcatdata] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [msg, setMsg] = useState('');
  const [type, setType] = useState('');

  const token = localStorage.getItem('token');

  const getcat = async () => {
    try {
      const result = await axios.get("https://home-s4qk.onrender.com/product/getproduct");
      console.log(result);
      setViewcatdata(result.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkToken = () => {
      if (token == null) {
        navigate('/admin/login');
      } else {
        getcat();
      }
    };

    checkToken();
  }, [token, navigate]);

  const { id } = useParams()

  // Delete Product Category

  const delcat = async (id) => {
    try {
      const res = await axios.delete(`https://home-s4qk.onrender.com/product/deleteproduct/${id}`)
      getcat()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Breadcrumb pageName="All Product" />

      <Errormessage showToast={showToast} msg={msg} type={type} />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Top Products
          </h4>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
            <p className="font-medium">S.No</p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <p className="font-medium">Product Image</p>
          </div>
          <div className="col-span-2 hidden items-center justify-center sm:flex">
            <p className="font-medium">Product Name</p>
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <p className="font-medium">Category</p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <p className="font-medium">Edit</p>
          </div>
          <div className="col-span-1 flex items-center justify-center ">
            <p className="font-medium">Delete</p>
          </div>
        </div>
        {
          viewcatdata && viewcatdata.map((product, index) => {
            return (
              <div key={index} className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div className="col-span-1 flex items-center">
                  <p className="text-sm text-black dark:text-white">{index + 1}</p>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-center">
                    <div className="h-12.5 w-15 rounded-md">
                      <img src={`https://home-s4qk.onrender.com/product/${product.cover}`} width={50} alt="Product" />
                    </div>
                  </div>
                </div>
                <div className="col-span-2 hidden items-center justify-center sm:flex">
                  <p className="text-sm text-black dark:text-white">{product.product_name}</p>
                </div>
                <div className="col-span-2 hidden items-center justify-center sm:flex">
                  <p className="text-sm text-black dark:text-white">{product.product_cat}</p>
                </div>
                <div className="col-span-1 flex items-center justify-center">

                  <a href={`http://localhost:5173/update-product/${product._id}`}>
                    <button className="flex justify-center rounded bg-primary p-3 font-medium text-gray">  Edit</button>
                  </a>

                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <button onClick={() => delcat(product._id)} className="flex justify-center rounded bg-[#bb2124] p-3 font-medium text-gray">
                    Delete
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default AllProduct