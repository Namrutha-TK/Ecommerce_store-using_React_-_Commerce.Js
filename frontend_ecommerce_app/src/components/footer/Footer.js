import '../../styles/Footer.css'

const Footer = () => {
    return (
        <>
        <div className="container-fluid   p-0 footer">
            <div className="sub1">
             <a className="text-white topLink">Back to top</a>
            </div>
            <div className='container-fluid footer_content m-0'>
            <div className='container '>
            <div className="sub2">
                <div className="subLists gap-4">
                    <div className='colSub  get_know '>
                        <li className='heading'>Get to Know <br/>Us</li>
                        <li><a href="" className='text'>About Us</a></li>
                        <li><a href="" className='text'>Careers</a></li>
                        <li><a href="" className='text'>Press Releases</a></li>
                       <li><a href="" className='text'>Amazon Science</a></li>
                    </div>
                    <div className='colSub connect'>
                        <li className='heading'>Connect with <br/>Us</li>
                        <li><a href="" className='text'> Facebook</a></li>
                        <li><a href="" className='text'>Twitter</a></li>
                        <li><a href="" className='text'>Instagram</a></li>
                    </div>
                    <div className='colSub mt-5 p-4'>
                        <li className='heading '>Make Money with Us</li>
                        <li><a href="" className='text'>Sell  on Amazon</a></li>
                        <li><a href="" className='text'>Sell under Amazon <br/> Accelerator</a></li>
                        <li><a href="" className='text'>Protect and Build Your Brand</a></li>
                        <li><a href="" className='text'>Amazon Global Selling</a></li>
                        <li><a href="" className='text'>Become an Affiliate</a></li>
                        <li><a href="" className='text'>Fulfilment by Amazon</a></li>
                        <li><a href="" className='text'>Advertise Your Products</a></li>
                        <li><a href="" className='text'>Amazon Pay on Merchants</a> </li>
                     </div>
                     
                         <div className='colSub mt-4'>
                            <li className='heading'>Let Us Help You </li>
                            <li><a href="" className='text'>COVID-19 and  Amazon</a> </li>
                            <li> <a href="" className='text'>Your Account</a></li>
                            <li><a href="" className='text'>Returns Center</a></li>
                            <li><a href="" className='text'>Recalls and Product Safety <br/>Alerts</a></li>
                            <li><a href="" className='text'>100% Purchase Protection</a></li>
                            <li><a href="" className='text'>Amazon App Download</a></li>
                            <li><a href="" className='text'>Help</a></li>
                                
                         </div>
                </div>
                
            </div>
            </div>
            </div>


        </div>
        </>
      );
}
 
export default Footer;