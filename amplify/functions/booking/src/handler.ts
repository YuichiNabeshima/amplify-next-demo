import type { APIGatewayProxyHandler } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",  // CORS 設定
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify([
      { id: 1, name: "Product A" },
      { id: 2, name: "Product B" },
    ]),
  };
};
