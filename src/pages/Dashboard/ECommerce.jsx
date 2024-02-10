import CardFour from "../../components/CardFour"
import CardOne from "../../components/CardOne"
import CardThree from "../../components/CardThree"
import CardTwo from "../../components/CardTwo"
import ChartOne from "../../components/ChartOne"
import ChartThree from "../../components/ChartThree"
import ChartTwo from "../../components/ChartTwo"
import ChatCard from "../../components/ChatCard"
import MapOne from "../../components/MapOne"
import TableOne from  "../../components/TableOne"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const ECommerce = () => {
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  )
}

export default ECommerce
