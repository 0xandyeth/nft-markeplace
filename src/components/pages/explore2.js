import React,{useEffect,useState} from 'react';
import ColumnNewThreeColRedux from '../components/ColumnNewThreeColRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import CheckboxFilter from '../components/CheckboxFilter';
import { useNavigate } from 'react-router-dom';

const GlobalStyles = createGlobalStyle`
  .navbar {
    border-bottom: solid 1px rgba(255, 255, 255, .1) !important;
  }
`;


const Explore = () => {
  const navigate = useNavigate()
  useEffect(() => {
   const token = window.localStorage.getItem('token') 
    if(!token){
      navigate('/login')
    }
  }, [])
  return (
<div>
<GlobalStyles/>
  <section className='container'>
        <div className='row'>
        <div className="spacer-double"></div>
          <div className='col-md-3'>
            <CheckboxFilter />
          </div>
          <div className="col-md-9">
            <ColumnNewThreeColRedux/>
          </div>
        </div>
      </section>


  <Footer />
</div>

)};
export default Explore;