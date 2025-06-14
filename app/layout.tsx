import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";
import { Amplify } from "aws-amplify";
import { parseAmplifyConfig } from "aws-amplify/utils";
import outputs from "@/amplify_outputs.json";

const amplifyConfig = parseAmplifyConfig(outputs);
Amplify.configure({
  ...amplifyConfig,
  API: {
    ...amplifyConfig.API,
    REST: outputs.custom.API,
  },
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
