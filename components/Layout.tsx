import { NextPage } from "next";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const variants = {
    pageExit: {
      x: -500,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    enter: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    },
    initial: {
      opacity: 0,

    },
  };
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <motion.main
          variants={variants}
          initial="initial"
          animate="enter"
          exit="pageExit"
          key={router.route}
        >
          <Content>{children}</Content>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
