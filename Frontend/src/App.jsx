import EmployeeList from './components/EmployeeList';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});



function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
              <EmployeeList />
          </div>
        </div>
      </div>
    </ApolloProvider>

  );
}

export default App;
