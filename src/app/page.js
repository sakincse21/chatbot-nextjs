import Sidebar from "@/components/sidebar";
import Chatarea from "@/components/chatarea";

export default function Home() {
  return (
      <div className={'min-w-full min-h-full h-full w-full flex flex-row'}>
          <Sidebar/>
          <Chatarea/>
      </div>
  );
}
