import Slade3 from "./Slade-3";

function Project3() {
  return (
    <section className="flex h-screen justify-center items-center bg-zinc-900">
      <section className="flex flex-col items-center justify-center p-4 gap-8 w-[60%] h-[50%]">
        <article className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-1">
            <p className="text-normal md:text-lg text-[#DAFDBA]">
              Project - 03
            </p>
            <h1 className="font-bold text-2xl md:text-2xl xl:text-2xl">
              Gallery
            </h1>
          </div>

          <div className="bg-zinc-800 p-6 rounded-md shadow-md">
            <p className="text-slate-400 md:text-xl xl:text-base">
              Gallery is an SVG website with different categories and the
              ability to copy. See the official SVG page. Made with React,
              Tailwind, and Frame-Motion.
            </p>
          </div>
          <Slade3 />
          <div></div>
        </article>
      </section>
    </section>
  );
}

export default Project3;
