import Link from "next/link";
import styles from "../styles/Link.module.css";

const MyLink = ({ href, children }) => {
   return (
      <Link href={href} className={styles.link}>
         {children}
         {/* <li>{user.name}</li> */}
      </Link>
   )
};

export default MyLink;