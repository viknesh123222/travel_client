import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
  return (
    <div className="footer">
      
       

        <div className="mail">
       
        <span className="mailTitle"> <FontAwesomeIcon icon={faPhone} />   9962020206</span>
        <span className="mailTitle"> <FontAwesomeIcon icon={faPhone} />   9962666663</span>
      <span className="mailTitle"><FontAwesomeIcon icon={faEnvelopesBulk} />msgtovn@gmail.com</span>
      <span className="mailTitle"><FontAwesomeIcon icon={faLocationDot} />OFFICE : NO.187.G.S.T.NH45 SERVICE ROAD ABOVE THE CAKE SQAURE
       <br></br>NANDHIVARAM
        <br></br>GUDUVANCHERI 603202
         <br></br>FACTORY : NO.144/7 ANTONY PILLAI NAGAR
          <br></br>MADAMPAKKAM ROAD
           <br></br>NANDHIVARAM 
           <br></br> GUDUVANCHERI 603202</span>
    
    </div>
       
      
    </div>
  );
};

export default Footer;
