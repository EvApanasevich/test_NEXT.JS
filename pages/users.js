import MyLink from "../components/Link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {

   return (
      <MainContainer headTitle={'All users'}>
         <h1>page with users</h1>
         <ul>
            {users.map((user) =>
               <MyLink key={user.id} href={`/users/${user.id}`} children={<li>{user.name}</li>} />
               // <Link key={user.id} href={`/users/${user.id}`}>
               //    <li>{user.name}</li>
               // </Link>
            )}
         </ul>
      </MainContainer>
   );
};

export default Users;

export async function getStaticProps() {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const users = await response.json();
   return { props: { users } };
}