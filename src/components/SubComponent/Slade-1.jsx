import GitHubIcon from "./Icons/ReactIcons/GitHubIcon";
import ReactIcon from "./Icons/ReactIcons/ReactIcon";
import TailwindIcon from "./Icons/ReactIcons/TailwindIcon";

export default function CarrucelProyects() {
  return (
    <div className="flex flex-col xl:flex xl:flex-row gap-2">
      <div className="flex p-4 xl:flex xl:flex-col justify-between xl:justify-center text-center items-center xl:p-4 gap-2 border border-zinc-600 xl:rounded-bl-lg">
        <a href="https://github.com/Keiver-Dev/PixelArt-Gallery">
          <GitHubIcon />
        </a>
        <p>•</p>
        <a href="https://react.dev/">
          <ReactIcon />
        </a>
        <p>•</p>
        <a href="https://tailwindcss.com/">
          <TailwindIcon />
        </a>
      </div>

      <div className="xl:flex xl:flex-[90%] xl:justify-center">
  <a href="https://github.com/Keiver-Dev/PixelArt-Gallery">
    <img
      className="border border-zinc-600 grayscale hover:grayscale-0 transition duration-300"
      src={`${import.meta.env.BASE_URL}PixelArt.png`}
      alt="pixel art"
    />
  </a>
</div>
    </div>
  );
}