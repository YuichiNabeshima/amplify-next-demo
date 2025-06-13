import { defineBackend } from "@aws-amplify/backend";
import { Stack } from "aws-cdk-lib";
import { CorsHttpMethod, HttpApi, HttpMethod } from "aws-cdk-lib/aws-apigatewayv2";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import { apiFunction } from "./functions/booking-function/src/resource";

const backend = defineBackend({
  apiFunction,
});
const apiStack = backend.createStack("api-stack");
const httpLambdaIntegration = new HttpLambdaIntegration(
  "LambdaIntegration",
  backend.apiFunction.resources.lambda
);
const httpApi = new HttpApi(apiStack, "HttpApi", {
  apiName: "bookingApi",
  corsPreflight: {
    allowMethods: [
      CorsHttpMethod.GET,
      CorsHttpMethod.POST,
      CorsHttpMethod.PUT,
      CorsHttpMethod.DELETE,
    ],
    allowOrigins: ["*"],
    allowHeaders: ["*"],
  },
  createDefaultStage: true,
});

httpApi.addRoutes({
  path: "/",
  methods: [HttpMethod.GET],
  integration: httpLambdaIntegration,
});

httpApi.addRoutes({
  path: "/",
  methods: [HttpMethod.POST],
  integration: httpLambdaIntegration,
});

backend.addOutput({
  custom: {
    API: {
      [httpApi.httpApiName!]: {
        endpoint: httpApi.url,
        region: Stack.of(httpApi).region,
        apiName: httpApi.httpApiName,
      },
    },
  },
});