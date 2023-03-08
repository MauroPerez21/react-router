import {RiVisaFill} from 'react-icons/ri'
import {BsCashCoin} from 'react-icons/bs'

import {SiGooglepay} from 'react-icons/si'
import {FaCcPaypal, FaAmazonPay, FaApplePay} from 'react-icons/fa'
import './payment.css'
const Icons = () => {
    return ( 
    <div className="iconsGrid">
        <i><RiVisaFill/></i>
        <i><BsCashCoin/></i>
        <i><SiGooglepay/></i>
        <i><FaCcPaypal/></i>
        <i><FaAmazonPay/></i>
        <i><FaApplePay/></i>
    </div>

 );
}
 
export default Icons;