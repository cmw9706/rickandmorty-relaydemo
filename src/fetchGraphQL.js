const graphQLEndpoint = "https://rickandmortyapi.com/graphql";

const fetchGraphQL = async (text, variables) => {
  const response = await fetch(graphQLEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: text, variables }),
  });

  return response.json();
};

export default fetchGraphQL;
