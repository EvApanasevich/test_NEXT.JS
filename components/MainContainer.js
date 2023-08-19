import Head from "next/head";
import MyLink from "./Link";

const MainContainer = ({ children, headTitle }) => {
   return (
      <>
         <Head>
            <title>{headTitle}</title>
         </Head>
         <div className="navbar">
            <MyLink href={"/"} children={"main"} />
            <MyLink href={"/users"} children={"users"} />
            {/* <Link href="/" className={styles.link}>main</Link>
            <Link href="/users" className={styles.link}>users</Link> */}
         </div>
         <div>
            {children}
         </div>
         <style jsx>
            {`
               .navbar {
               background: lightgreen;
               padding: 15px;
               }
            `}
         </style>
      </>
   );
};

export default MainContainer;