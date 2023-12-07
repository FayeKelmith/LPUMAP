import LPUMap from "@/app/ui/Map";
import Link from "next/link";
const MapPage = () => {
  return (
    <main className="text-4xl container mx-auto">
      <div>
        <h1 className="text-3xl py-10 text-center">Campus Map</h1>
      </div>
      <div className="border border-red-500 my-10">
        <LPUMap />
      </div>
      <div className="w-full text-center">
        <Link href="/" className="text-2xl bg-teal-500 px-8 py-2 ">
          Go back
        </Link>
      </div>
    </main>
  );
};

export default MapPage;
