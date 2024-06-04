import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BrandList } from "./brand/BrandList";
import { BrandCreate } from "./brand/BrandCreate";
import { BrandEdit } from "./brand/BrandEdit";
import { BrandShow } from "./brand/BrandShow";
import { ModelList } from "./model/ModelList";
import { ModelCreate } from "./model/ModelCreate";
import { ModelEdit } from "./model/ModelEdit";
import { ModelShow } from "./model/ModelShow";
import { VariantList } from "./variant/VariantList";
import { VariantCreate } from "./variant/VariantCreate";
import { VariantEdit } from "./variant/VariantEdit";
import { VariantShow } from "./variant/VariantShow";
import { CarSpecificationList } from "./carSpecification/CarSpecificationList";
import { CarSpecificationCreate } from "./carSpecification/CarSpecificationCreate";
import { CarSpecificationEdit } from "./carSpecification/CarSpecificationEdit";
import { CarSpecificationShow } from "./carSpecification/CarSpecificationShow";
import { CarFeatureList } from "./carFeature/CarFeatureList";
import { CarFeatureCreate } from "./carFeature/CarFeatureCreate";
import { CarFeatureEdit } from "./carFeature/CarFeatureEdit";
import { CarFeatureShow } from "./carFeature/CarFeatureShow";
import { CarReviewList } from "./carReview/CarReviewList";
import { CarReviewCreate } from "./carReview/CarReviewCreate";
import { CarReviewEdit } from "./carReview/CarReviewEdit";
import { CarReviewShow } from "./carReview/CarReviewShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CarDetailsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Brand"
          list={BrandList}
          edit={BrandEdit}
          create={BrandCreate}
          show={BrandShow}
        />
        <Resource
          name="Model"
          list={ModelList}
          edit={ModelEdit}
          create={ModelCreate}
          show={ModelShow}
        />
        <Resource
          name="Variant"
          list={VariantList}
          edit={VariantEdit}
          create={VariantCreate}
          show={VariantShow}
        />
        <Resource
          name="CarSpecification"
          list={CarSpecificationList}
          edit={CarSpecificationEdit}
          create={CarSpecificationCreate}
          show={CarSpecificationShow}
        />
        <Resource
          name="CarFeature"
          list={CarFeatureList}
          edit={CarFeatureEdit}
          create={CarFeatureCreate}
          show={CarFeatureShow}
        />
        <Resource
          name="CarReview"
          list={CarReviewList}
          edit={CarReviewEdit}
          create={CarReviewCreate}
          show={CarReviewShow}
        />
      </Admin>
    </div>
  );
};

export default App;
