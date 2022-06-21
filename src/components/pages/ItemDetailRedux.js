import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Clock from "../components/Clock";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import * as selectors from '../../store/selectors';
import { fetchNftDetail } from "../../store/actions/thunks";
/*import Checkout from "../components/Checkout";
import Checkoutbid from "../components/Checkoutbid";*/
import api from "../../core/api";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #fff;
    border-bottom: solid 1px #dddddd;
  }
  .mr40{
    margin-right: 40px;
  }
  .mr15{
    margin-right: 15px;
  }
  .btn2{
    background: #f6f6f6;
    color: #8364E2 !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #111;
    }
    .item-dropdown .dropdown a{
      color: #111 !important;
    }
  }
`;

const ItemDetailRedux = ({ nftId }) => {

    const [openMenu0, setOpenMenu0] = React.useState(true);
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);

    const navigate = useNavigate()
    useEffect(() => {
     const token = window.localStorage.getItem('token') 
      if(!token){
        navigate('/login')
      }
    }, [])

    const handleBtnClick0 = () => {
        setOpenMenu0(!openMenu0);
        setOpenMenu(false);
        setOpenMenu1(false);
         document.getElementById("Mainbtn0").classList.add("active");
        document.getElementById("Mainbtn").classList.remove("active");
        document.getElementById("Mainbtn1").classList.remove("active");
    };
    const handleBtnClick = () => {
        setOpenMenu(!openMenu);
        setOpenMenu1(false);
        setOpenMenu0(false);
        document.getElementById("Mainbtn").classList.add("active");
        document.getElementById("Mainbtn1").classList.remove("active");
        document.getElementById("Mainbtn0").classList.remove("active");
    };
    const handleBtnClick1 = () => {
        setOpenMenu1(!openMenu1);
        setOpenMenu(false);
        setOpenMenu0(false);
        document.getElementById("Mainbtn1").classList.add("active");
        document.getElementById("Mainbtn").classList.remove("active");
        document.getElementById("Mainbtn0").classList.remove("active");
    };

    const dispatch = useDispatch();
    const nftDetailState = useSelector(selectors.nftDetailState);
    const nft = nftDetailState.data ? nftDetailState.data : [];

    const [openCheckout, setOpenCheckout] = React.useState(false);
    const [openCheckoutbid, setOpenCheckoutbid] = React.useState(false);

    useEffect(() => {
        dispatch(fetchNftDetail(nftId));
    }, [dispatch, nftId]);

    return (
        <div>
        <GlobalStyles/>
            <section className='container'>
                <div className='row mt-md-5 pt-md-4'>
                    <div className="col-md-6 text-center">
                        <img src="/img/promo.png" className="img-fluid img-rounded mb-sm-30" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div className="item_info">
                            {nft.item_type === 'on_auction' &&
                                <>
                                    Auctions ends in 
                                    <div className="de_countdown">
                                        <Clock deadline={nft.deadline} />
                                    </div>
                                </>
                            }
                            <h3>Bowlmor Lanes</h3>
                            <div className="item_info_counts">
                                <div><span>Owned by <span style={{color:'rebeccapurple'}}>Company1</span></span></div>
                                <div className="item_info_views"><i className="fa fa-eye"></i>100</div>
                                <div className="item_info_like"><i className="fa fa-heart"></i>21</div>
                            </div>
                            <p>Bowlmor Lanes and Bowlero provide visitors a striking spin on bowling, laser tag, and epic eats. Each location features bowling lanes decked out with black lights, plush lounge seats, and HD video walls that help take one’s game to a whole new level. They also sport a state-of-the-art arcade along with multi-player laser tag challenges at select locations. The nationally-recognized menu, meanwhile, comes stuffed with everything from oversized shareables to classic burgers and sandwiches each with their own spin.</p>

                           
                            <div className="spacer-40">
                             <h5><span style={{color:'rebeccapurple'}}>Expired Date at </span>10:38:22, 8/15/2022</h5>

                            </div>
                            <div className="spacer-40">
                             <h5><span style={{color:'rebeccapurple'}}>Quantity </span>20/1000</h5>
                             <p>20 sold today in 1000 nfts, this item is moving fast. Act now if you want one of your own!</p>
                            </div>


                            <div className="de_tab"style={{marginTop:20}}>

                            <ul className="de_nav">
                                <li id='Mainbtn0' className="active"><span onClick={handleBtnClick0}>Properties</span></li>
                                <li id='Mainbtn' ><span onClick={handleBtnClick}>About Company</span></li>
                                <li id='Mainbtn1' className=''><span onClick={handleBtnClick1}>Details</span></li>
                            </ul>
                                        
                            <div className="de_tab_content">
                                {openMenu0  && (  
                                <div className="tab-1 onStep fadeIn">
                                    <div className="d-block mb-3">
                                   

                                        <div className="row mt-5">
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="nft_attr">
                                                    <h5>Category</h5>
                                                    <h4>Fashion</h4>
                                                    <span>85% have this trait</span>
                                                </div>
                                            </div>
                                                                    
                                        </div>

                                    </div>
                                </div>
                                )}

                                {openMenu  && (  
                                <div className="tab-1 onStep fadeIn">
                            <p>The description should inform if, for example, the job involves heavy lifting or exposure to extreme temperatures. Extensive travel and prolonged standing, for example, are also special demands.</p>
                                  
                                </div>
                                )}

                                {openMenu1 && ( 
                                <div className="tab-2 onStep fadeIn">
                                    <div className="d-flex flex-row mt-2" >
                                        <p>Contract Address</p>
                                        <p style={{color:'rebeccapurple',marginLeft:30}}>0xbc4c...f13d</p>
                                    </div>
                                    <div className="d-flex flex-row mt-2" >
                                        <p>Token Standard</p>
                                        <p style={{color:'rebeccapurple',marginLeft:30}}>ERC-721</p>
                                    </div>
                                    <div className="d-flex flex-row mt-2" >
                                        <p>Blockchain</p>
                                        <p style={{color:'rebeccapurple',marginLeft:30}}>Polygon</p>
                                    </div>
                                    <div className="d-flex flex-row mt-2" >
                                        <p>Metadata</p>
                                        <p style={{color:'rebeccapurple',marginLeft:30}}>Frozen</p>
                                    </div>
                                </div>
                                )}


                                {/* button for checkout */}
                                <div className="d-flex flex-row mt-5">
                                    <button className='btn-main lead mb-5 mr15' onClick={() => setOpenCheckout(true)}>Buy Now</button>
                                </div>
                            </div>     
                        </div>          
                    </div>
                </div>
            </div>
        </section>
        <Footer /> 
        { openCheckout &&
            <div className='checkout'>
            <div className='maincheckout'>
            <button className='btn-close' onClick={() => setOpenCheckout(false)}>x</button>
                <div className='heading'>
                    <h3>Checkout</h3>
                </div>
              <p>You are about to purchase a <span className="bold">AnimeSailorClub #304</span> 
              <span className="bold">from Monica Lucas</span></p>
                <div className='detailcheckout mt-4'>
                    <div className='listcheckout'>
                  <h6>
                    Enter quantity. 
                    <span className="color">10 available</span>
                  </h6>
                  <input type="text" name="buy_now_qty" id="buy_now_qty" className="form-control"/>
                    </div>

                </div>
                <div className='heading mt-3'>
                    <p>Your balance</p>
                    <div className='subtotal'>
                    10.67856 ETH
                    </div>
                </div>
              <div className='heading'>
                <p>Service fee 2.5%</p>
                <div className='subtotal'>
                0.00325 ETH
                </div>
              </div>
              <div className='heading'>
                <p>You will pay</p>
                <div className='subtotal'>
                0.013325 ETH
                </div>
              </div>
                <button className='btn-main lead mb-5'>Checkout</button>
            </div>
            </div>
        }
        {/* { openCheckoutbid &&
            <div className='checkout'>
            <div className='maincheckout'>
            <button className='btn-close' onClick={() => setOpenCheckoutbid(false)}>x</button>
                <div className='heading'>
                    <h3>Place a Bid</h3>
                </div>
              <p>You are about to purchase a <span className="bold">AnimeSailorClub #304</span> 
              <span className="bold">from Monica Lucas</span></p>
                <div className='detailcheckout mt-4'>
                    <div className='listcheckout'>
                        <h6>
                         Your bid (ETH)
                        </h6>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className='detailcheckout mt-3'>
                    <div className='listcheckout'>
                        <h6>
                         Enter quantity. 
                        <span className="color">10 available</span>
                        </h6>
                        <input type="text" name="buy_now_qty" id="buy_now_qty" className="form-control"/>
                    </div>
                </div>
                <div className='heading mt-3'>
                    <p>Your balance</p>
                    <div className='subtotal'>
                    10.67856 ETH
                    </div>
                </div>
              <div className='heading'>
                <p>Service fee 2.5%</p>
                <div className='subtotal'>
                0.00325 ETH
                </div>
              </div>
              <div className='heading'>
                <p>You will pay</p>
                <div className='subtotal'>
                0.013325 ETH
                </div>
              </div>
                <button className='btn-main lead mb-5'>Checkout</button>
            </div>
            </div>
        } */}

        </div>
    );
}

export default memo(ItemDetailRedux);