import { defineBackend } from "@aws-amplify/backend";
import { Stack } from "aws-cdk-lib";
import {
  RestApi,
  LambdaIntegration,
  Cors,
  AuthorizationType
} from "aws-cdk-lib/aws-apigateway";
import { myApiFunction } from "./functions/booking/src/resource";

const backend = defineBackend({
  myApiFunction,
});

const apiStack = backend.createStack("api-stack");

const myRestApi = new RestApi(apiStack, "RestApi", {
  restApiName: "myRestApi",
  deploy: true,
  deployOptions: {
    stageName: "dev",
  },
  defaultCorsPreflightOptions: {
    allowOrigins: Cors.ALL_ORIGINS,
    allowMethods: Cors.ALL_METHODS,
    allowHeaders: Cors.DEFAULT_HEADERS,
  },
});

const lambdaIntegration = new LambdaIntegration(
  backend.myApiFunction.resources.lambda
);

const itemsPath = myRestApi.root.addResource("items", {
  defaultMethodOptions: {
    authorizationType: AuthorizationType.NONE,  // 認証なしでまず試す
  },
});

itemsPath.addMethod("GET", lambdaIntegration);

backend.addOutput({
  custom: {
    API: {
      [myRestApi.restApiName]: {
        endpoint: myRestApi.url,
      },
    },
  },
});
