import client from '../apollo/apolloClient';
import { ListUsersQuery } from '../generated/types';
import LISTUSERS from '../graphql/queries/ListUsers.graphql';

interface LaunchesProps {
  listUsersQuery: ListUsersQuery;
}

const Launches: React.FC<LaunchesProps> = ({ listUsersQuery }) => {
  console.log(listUsersQuery.users);
  return (
    <div>
      <h1>SpaceX Launches</h1>
      {listUsersQuery?.users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: LISTUSERS });
  const listUsersQuery: ListUsersQuery = data;

  return { props: { listUsersQuery } };
}

export default Launches;
