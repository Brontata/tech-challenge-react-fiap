//import React from "react";
import Card from "../../components/card";
import Post from "../../types/Post";

const Posts = () => {
  const postsExample: Post[] = [

    {
      id: 1,
      user_id: 1,
      title: 'Equacao Primeiro Grau',
      description: 'Para calcular as raizes de uma equação do primeiro grau deve-se informar o valor de A e B',
      slug: 'slug',
      //created_at: new Date()
    },

    {
      id: 2,
      user_id: 2,
      title: 'Equacao Segundo Grau',
      description: 'Para calcular as raizes de uma equação do segundo grau deve-se informar o valor de A, B e C',
      slug: 'slug2',
      //created_at: new Date()
    },

    {
      id: 3,
      user_id: 1,
      title: 'Area de um Circulo',
      description: 'Para calcular a area de um circulo deve-se informar o raio do circulo e o valor do raio deve ser informado em cm',
      slug: 'o que era mesmo ?',
      //created_at: new Date()

    }

  ]


  //   

  return (
    <>
      <h2>Últimos Posts</h2>
      {postsExample.map((post) => (
        <Card
          key={post.id}
          id={post.id}
          user_id={post.user_id}
          title={post.title}
          description={post.description}
          slug={post.slug}
        />
      ))}

    </>
  )
};

export default Posts;
