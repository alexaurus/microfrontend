import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles/";

import Header from "./components/Header";

const MarketingAppLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassname}>
        <div>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/auth" component={AuthApp} />
              <Route path="/" component={MarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
