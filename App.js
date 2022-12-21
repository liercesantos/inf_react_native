import React from 'react';
import AppProvider from "./src/context/AppProvider";
import AppTheme from "./src/theme/AppTheme";
import BottomNavigator from "./src/routes/BottomNavigator";
import codePush from 'react-native-code-push';
import { ApolloProvider } from "@apollo/client";
import client from "./src/services/apollo";

function AppContainer() {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <AppTheme>
          <BottomNavigator />
        </AppTheme>
      </AppProvider>
    </ApolloProvider>
  );
};

export const App = codePush(AppContainer);
