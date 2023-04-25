import { usePreloadedQuery } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import DetailsCard from "./DetailsCard";

const CharacterQuery = graphql`
  query CharactersListCharactersQuery {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export default function CharactersList(props) {
  const data = usePreloadedQuery(
    CharacterQuery,
    props.initialQueryRef /* e.g. provided by router */
  );

  console.log(data);
  console.log("data");
  return (
    <div>
      {data.characters.results.map((character) => {
        return (
          <DetailsCard
            key={character.id}
            name={character.name}
            image={character.image}
          />
        );
      })}
    </div>
  );
}
