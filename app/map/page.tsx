import LPUMap from "@/app/ui/Map";
import Link from "next/link";

const MapPage = () => {
  return (
    <main className="text-4xl container mx-auto pt-20">
      <div>
        <h1 className="text-3xl py-4 text-center">I&apos;ll lead you there.</h1>
      </div>
      <div className=" my-10 mx-auto">
        <LPUMap />
      </div>
      <div className="w-full text-center">
        <Link
          href="/"
          className="text-2xl bg-teal-500 px-8 py-2 hover:drop-shadow-xl dark:hover:bg-teal-400 transition-all delay-75 ease-in-out rounded-sm"
        >
          Go back
        </Link>
      </div>
    </main>
  );
};

export default MapPage;
