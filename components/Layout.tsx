import { NextPage } from "next";
import Navbar from './Navbar'
import Content from './Content'
import Footer from "./Footer";
interface LayoutProps {
    children: React.ReactNode;
}
 
const Layout: NextPage<LayoutProps> = ({ children }) => {
    return ( 
        <>
            <Navbar />
            <Content>
                {children}
            </Content>
            <Footer />
        </>

    );
}
 
export default Layout;