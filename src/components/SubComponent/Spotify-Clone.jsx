import Slade2 from "./Slade-2";

function Project2() {
  return (
    <section className="flex h-screen justify-center items-center bg-zinc-900">
      <section className="flex flex-col items-center justify-center p-4 gap-8 w-[60%] h-[50%]">
        <article className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-1">
            <p className="text-normal md:text-lg text-[#DAFDBA]">Project - 02</p>
            <h1 className="font-bold text-2xl md:text-2xl xl:text-2xl">
              Spotify Clone
            </h1>
          </div>

          <div className="bg-zinc-800 p-6 rounded-md shadow-md">
            <p className="text-zinc-400 md:text-xl xl:text-base">
              It's a remake of <span className="text-[#DAFDBA]">Spotify</span>, with some features and others still in
              progress. It has the visuals and some technical features like page
              turning and music updates in the play bar, and it works with <span className="text-[#DAFDBA]">React
              19</span> and <span className="text-[#DAFDBA]">Tailwind</span>.
            </p>
          </div>
          <Slade2 />
          <div></div>
        </article>
      </section>
    </section>
  );
}

export default Project2;
