import Slade1 from "./Slade-1.jsx";

export default function Project1() {
  return (
    <section className="flex h-screen justify-center items-center bg-zinc-900">
      <section className="flex flex-col items-center justify-center p-4 gap-8 w-[60%] h-[50%]">
        <article className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-1">
            <p className="text-normal md:text-lg text-[#DAFDBA]">Project - 01</p>
            <h1 className="font-bold text-2xl md:text-2xl xl:text-2xl">PixelArt Gallery</h1>
          </div>

          <div className="bg-zinc-800 p-6 rounded-md shadow-md">
            <p className="text-zinc-400 md:text-xl xl:text-base">
              Pixel Gallery, a project made with{" "}
              <span className="text-[#DAFDBA]">React 19</span> and
              <span className="text-[#DAFDBA]"> Tailwind</span>, is a pixel art gallery with the ability
              to view the image and download it whenever you want.
            </p>
          </div>

          <div>
            <Slade1 />
          </div>
        </article>
      </section>
    </section>
  );
}