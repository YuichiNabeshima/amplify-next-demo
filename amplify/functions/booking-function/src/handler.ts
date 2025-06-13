import type { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  let body = {};
  switch (event.routeKey) {
    case 'GET /':
      body = 'Get Yuichi';
      break;
    case 'POST /':
      body = 'Post Yuichi';
      break;
    default:
      throw new Error();
  }
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(body),
  };
};