import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className='w-full'>
            <Navbar></Navbar>
            <ToastContainer></ToastContainer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;