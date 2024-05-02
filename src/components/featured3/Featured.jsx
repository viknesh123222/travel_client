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
              src="https://5.imimg.com/data5/XO/HP/SA/SELLER-19245534/zuari-psc-cement.png"
              alt=""
              className="featuredImg"

            />

            <div className="featuredTitles">     
              <h4 >ZUARI CEMENT WHOLESALE SUPPLIER</h4>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/R.19afa9bd7def9a08e32df48c946b6d19?rik=IfZatsgVfxet%2bA&riu=http%3a%2f%2fwww.sdenterprises.in%2fimages%2fhome-banner.jpg&ehk=QfRPCVGkH4vdx6KDUpbkEqymqMq9ulQi73Vt48VzQJQ%3d&risl=&pid=ImgRaw&r=0 "
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h4>SD ENTERPRISES ALL BUILDING MATERIALS DIRECT PRICE</h4>
            </div>
          </div>
        
          <div className="featuredItem">

          <img
              src="https://2.imimg.com/data2/OI/BA/MY-3517227/development-services-500x500.jpg"
              alt=""
              className="featuredImg"
             

            />

            <div className="featuredTitles">     
              <h4 >DREAMWAY UTILITY AND DEVELOPMENT SERVICES PRIVATE LIMITED</h4>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://pic.stonecontact.com/picture201511/201812/42862/flower-marble-waterjet-stairs-tread-p697141-1b.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h4>MKD POLYMARBLE SHEET</h4>
            </div>
          </div>
    
          
        </>
      )}
    </div>
  );
};

export default Featured;
