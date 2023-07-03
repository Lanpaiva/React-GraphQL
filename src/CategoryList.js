import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_CATEGORIES = gql`
  query queryCategories {
    categories {
      id
      name
      description
    }
  }
`;

const CategoryList = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {data.categories.map((category) => (
          <li key={category.id}>
            {category.name} - {category.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
