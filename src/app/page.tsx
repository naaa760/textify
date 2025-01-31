import Rooms from "./components/Rooms";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-[300px] mt-[28px]">
        <Rooms />
      </div>
    </main>
  );
}
