{/* Se importará Header, Menu, Footer*/}

import Header from './Header';
import Menu from './Menu';
import { Children } from 'react';
import Footer from './Footer';

const Layout =({ Children }) => {
    return (
        <div className='container'>
            <Header/>
            <Menu/>

                {Children}

            <Footer/>
        </div>
    )
}
export default Layout;