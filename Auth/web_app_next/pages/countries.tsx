//import { NormalizedCache } from '@apollo/client';
import { GetServerSidePropsContext } from 'next';
import { Session, getServerSession } from 'next-auth';
import { getToken } from 'next-auth/jwt';
import React, { FC, useState } from 'react';
import { initializeApollo } from 'src/apollo';
import { Queries } from 'src/gql_definitions/queries';
import { useCountriesQuery } from 'src/graphql/types';
import { Continent, CountriesQuery, CreateCountryInput, useCreateCountryMutation, useRemoveCountryMutation } from '../src/graphql/types';
import { authOptions } from "./api/auth/[...nextauth]"


type CountriesType = {
  initialApolloState: any;
  token: string;
  session: Session;
};

const Countries: FC<CountriesType> = (props) => {



  const [countryData, setCountryData] = useState<CreateCountryInput>({
    name: 'Africa',
    population: 123,
    continent: Continent.Asia,
  });

  const [createCountry, ans] = useCreateCountryMutation({refetchQueries: [Queries.COUNTRIES]});

  const { data, loading, error } = useCountriesQuery({});

  const [removeCountry] = useRemoveCountryMutation({
    update(cache, { data: { removeCountry: removedId } }) {
      const { countries: oldCountries } = cache.readQuery<CountriesQuery>({
        query: Queries.COUNTRIES,
      });

      cache.writeQuery<CountriesQuery>({
        query: Queries.COUNTRIES,
        data: { countries: oldCountries.filter((f) => f.id != removedId), },
      });
    },
  });

  return (
    <>
      <h1>Countries</h1>
      <button
        onClick={() => {
          createCountry({ variables: { input: { ...countryData }, }, });
        }}
      >
        add
      </button>
      <table>
        <tbody>
          {data?.countries.map((country: any) => (
            <tr key={country.id}>
              <td>{country.name}</td>
              <td>
                <button
                  onClick={async () => {
                    try {
                      await removeCountry({
                        variables: {
                          id: country.id,
                        },
                      });
                    } catch (error) { }
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table >
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {

  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permenant: false,
      },
    };
  }

  const token = await getToken({ req: context.req, raw: true });

  const apolloClient = initializeApollo(token);
  // if (token !== null) {
  //   await apolloClient.query({
  //     query: Queries.COUNTRIES,
  //     fetchPolicy: 'network-only',
  //   });
  // }
  let normCache = apolloClient.cache.extract();

  return {
    props: {
      initialApolloState: normCache,
      token,
    },
  };
}

export default Countries;