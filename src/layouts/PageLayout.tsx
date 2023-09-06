import React from 'react'
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

interface PageLayoutProps {
  children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
	return (
    <div className="w-full">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout