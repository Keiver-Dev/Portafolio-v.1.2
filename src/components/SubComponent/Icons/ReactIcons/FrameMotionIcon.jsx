function FrameMotionIcon() {
  return (
    <div>
      <svg
        className="w-6 h-6 transition duration-300 hover:text-[#9AEBA3] cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokwidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
        <path d="M20 12l-8 8l-4 -4" />
      </svg>
    </div>
  );
}

export default FrameMotionIcon;
