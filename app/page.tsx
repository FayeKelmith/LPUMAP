import LPUMap from "./ui/Map";
export default function Home() {
  return (
    <main className="text-4xl container mx-auto">
      <div>
        <h1 className="text-3xl py-10 text-center">Map</h1>
      </div>
      <div className="border border-red-500 my-10">
        <LPUMap />
      </div>
    </main>
  );
}
