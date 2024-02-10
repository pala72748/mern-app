import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Errormessage from '../components/Errormessage';
import axios from 'axios';

const TableTwo = () => {
  const [viewcatdata, setViewcatdata] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [msg, setMsg] = useState('');
  const [type, setType] = useState('');

  const token = localStorage.getItem('token');

  const getcat = async () => {
    try {
      const result = await axios.get("http://localhost:3000/product/getproduct");
      setViewcatdata(result.data.cat);
    } catch (error) {
      console.log(error);
    }
  };

  const [formData, setFormData] = useState(new FormData());
  const [file, setFile] = useState(null);

  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });

    setFormData((prevFormData) => {
      prevFormData.set(name, value);
      return prevFormData;
    });
  };

  const handlefilechange = (e) => {
    setFile(e.target.files[0]);
  };


  const addcat = async (e) => {
    e.preventDefault();
    if (file) {
      formData.append('cover', file);
      Object.entries(formData).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
      });
      try {
        const res = await axios.post('http://localhost:3000/product-category/category', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (res.data.sts === 0) {
          setShowToast(true);
          setMsg(res.data.msg);
          setType('success');
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        } else {
          setShowToast(true);
          setMsg('File upload fail');
          setType('error');
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setShowToast(true);
      setMsg('Please select an image');
      setType('error');
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };
  const { aid } = useParams()

  // Delete Product Category

  const delcat = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/product/deleteproduct/${id}`)
      getcat()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Errormessage showToast={showToast} msg={msg} type={type} />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Top Products
          </h4>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3 flex items-center">
            <p className="font-medium">Product Name</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="font-medium">Category</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Price</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Sold</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Profit</p>
          </div>
        </div>
        {
          viewcatdata && viewcatdata.map((item, index) => {
            return (
              <div key={index} className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div className="col-span-1 flex items-center">
                  <p className="text-sm text-black dark:text-white">{index + 1}</p>
                </div>
                <div className="col-span-3 flex items-center">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="h-12.5 w-15 rounded-md">
                      <img src={`http://localhost:3000/cats/${item.cover}`} alt="Product" />
                    </div>
                  </div>
                </div>
                <div className="col-span-2 hidden items-center sm:flex">
                  <p className="text-sm text-black dark:text-white">{item.product_name}</p>
                </div>
                <div className="col-span-1 flex items-center">

                  <a href={`http://localhost:5173/update-product-category/${item._id}`}>
                    <button className="flex justify-center rounded bg-primary p-3 font-medium text-gray">  Edit</button>
                  </a>

                </div>
                <div className="col-span-1 flex items-center">
                  <button onClick={() => delcat(item._id)} className="flex justify-center rounded bg-[#bb2124] p-3 font-medium text-gray">
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

export default TableTwo
