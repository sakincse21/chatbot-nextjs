import "./globals.css";
import Usercontext from "@/utils/usercontext";

export const metadata = {
  title: "CG Luvi",
  description: "An AI Assistant for your daily study routine",
};


export default function RootLayout({ children }) {

  return (
      <Usercontext>
    <html lang="en">
      <body
        className={`bg-base-200 min-h-screen h-screen w-screen m-0`}
      >
        {children}
      </body>
    </html>
      </Usercontext>
  );
}
