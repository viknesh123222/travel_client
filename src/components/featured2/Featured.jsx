import useFetch from "../../hooks/useFetch";
import "./featured.css";
import { useNavigate } from "react-router-dom";
import {CircularProgress} from '@material-ui/core'
import { Link } from "react-router-dom";


const Featured = () => {
  const navigate=useNavigate();
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=travel,mahal,lodge"
  )
 

  const handleclick=()=>{
    navigate("/Date")

}
const handleclick1=()=>{
    navigate("/MahalTable")
    
}
const handleclick2=()=>{
    navigate("/Lodgetable")
    
}
  return (
    <div className="featured">
         { loading ? < CircularProgress/> :(<><div className="featuredItem">

         

            <img
              src="https://th.bing.com/th/id/OIP.KMQgigTG7F2OfzAlLA-aVQHaEK?w=1080&h=608&rs=1&pid=ImgDetMain "
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h4>MKD BUILDERS AND DEVELOPERS</h4>
             
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://4.imimg.com/data4/JC/TA/ANDROID-46134566/product.jpeg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h4>SD ENTERPRISES</h4>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/OIP.Yw6vqpbzuBEJ3UvKu5G0PAHaEK?rs=1&pid=ImgDetMain"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h4>EUROKIDS GUDUVANCHERI</h4>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://5.imimg.com/data5/ZP/DL/XW/SELLER-6824495/square-cobblestone-interlocking-paver-500x500.JPG"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h4>D PAVERS</h4>
            </div>
          </div>
          
        </>
      )}
    </div>
  );
};

export default Featured;
