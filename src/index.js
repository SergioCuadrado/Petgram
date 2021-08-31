import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import Context from "./Context";
// npm install @apollo/client graphql
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const httpLink = createHttpLink({
  uri: "https://petgram-server-sergio-sergiocuadrado.vercel.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);

/* import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import Context from "./Context";
// npm install @apollo/client graphql
import {
  ApolloProvider,
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = sessionStorage.getItem("token");

  if (token) {
    operation.setContext({
      headers: {
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    });
  }

  return forward(operation);
});

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === "invalid_token") {
    window.sessionStorage.removeItem("token");
    window.location.href = "/";
  }
});

//Apollo es un cliente que nos permite conectarnos a un servidor de graphql
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: "https://petgram-server-sergio-sergiocuadrado.vercel.app/graphql",
    }),
  ]),
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
); */
