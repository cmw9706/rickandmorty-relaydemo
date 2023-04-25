import "./App.css";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import React from "react";
import DetailsCard from "./components/DetailsCard";
import ErrorBoundary from "./components/ErrorBoundary";

const { Suspense } = React;

export const CHARACTERS_QUERY = graphql`
  query AppCharactersQuery {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, CHARACTERS_QUERY);

function App(props) {
  const data = usePreloadedQuery(CHARACTERS_QUERY, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        {data.characters.results.map((character) => {
          return (
            <DetailsCard
              key={character.id}
              name={character.name}
              image={character.image}
            />
          );
        })}
      </header>
    </div>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <ErrorBoundary fallback="We got an error!">
        <Suspense fallback={"Loading..."}>
          <App preloadedQuery={preloadedQuery} />
        </Suspense>
      </ErrorBoundary>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
