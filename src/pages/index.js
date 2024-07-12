import Head from "next/head";
import { Sidebar } from "@/components/Sidebar";
import { ChatSection } from "@/components/ChatSection";


export default function Home() {
  return (
    <>
      <Head>
        <title>Ben's AI</title>
        <meta name="description" content="Ben's cool new AI chatbot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='app' >
        <Sidebar/>
        <ChatSection/>
      </main>
    </>
  );
}
