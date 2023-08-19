import { useRouter } from "next/router";
import styles from "../../styles/user.module.scss";
import MainContainer from "../../components/MainContainer";

const User = ({ user }) => {
   //const router = useRouter();
   //console.log(router);
   //const { query } = useRouter(); // destructurisation

   return (
      <MainContainer headTitle={`${user.name}`}>
         <div className={styles.user}>
            <h1>
               user: {user.name} with ID: {user.id}
            </h1>
         </div>
      </MainContainer>
   );
};

export default User;

export const getServerSideProps = async (ctx) => {
   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ctx.params.id}`);
   const user = await response.json();
   return { props: { user } };
}