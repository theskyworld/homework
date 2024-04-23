export default function IntroductionCard() {
  return (
    <div className="relative w-[416px] h-[278px]">
      {/* bg */}
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="416" height="278" viewBox="0 0 416 279" fill="none">
          <path d="M32 0.000269201L384 -0.000425158C401.673 -0.00046002 416 14.3264 416 31.9996L416 163.026C416 168.42 414.637 173.725 412.037 178.451L410.141 181.897C404.656 191.868 404.879 204.003 410.727 213.766L411.451 214.975C414.428 219.944 416 225.627 416 231.419L416 246.365C416 264.038 401.673 278.365 384 278.365L32.0001 278.365C14.327 278.365 0.000171546 264.038 0.000141802 246.365L0.000111939 231.419C8.16747e-05 225.627 1.57219 219.944 4.54876 214.975L5.27291 213.766C11.1214 204.003 11.3445 191.868 5.85879 181.897L3.96288 178.451C1.36321 173.725 8.41792e-05 168.419 8.44154e-05 163.026L9.01517e-05 32.0003C9.09255e-05 14.3272 14.3269 0.000304063 32 0.000269201Z" fill="url(#paint0_linear_625_113)" />
          <defs>
            <linearGradient id="paint0_linear_625_113" x1="416.051" y1="130.105" x2="0.0506935" y2="130.105" gradientUnits="userSpaceOnUse">
              <stop stop-color="#38C1A5" />
              <stop offset="1" stop-color="#0891D5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* content */}
      <div className="absolute top-0 left-0 w-full h-full introduction_card_content">
        {/* header */}
        <div className="absolute left-[38px] top-[36px] w-[46px] h-1 bg-gradient-to-b from-emerald-400 to-sky-600 rounded-[11px]" />
        {/* title */}
        <div className="absolute left-[40px] top-[69px] text-gray-200 text-base font-bold leading-none next_book_font">Introduction to programming</div>
        {/* label */}
        <div className="absolute left-[40px] top-[101px] w-[53px] h-[18px] px-2 py-1 rounded-[20px] border border-stone-500 justify-start items-start gap-2.5 inline-flex">
          <div className="text-white text-[9px] font-normal leading-[9.90px] next_book_font">Beginner</div>
        </div>
        {/* main text */}
        <div className="absolute left-[40px] top-[135px] w-[336px] text-stone-500 text-xs font-normal leading-[13.20px] next_book_font">This course covers the most basic concepts in programming using Solidity as an example.</div>
        {/* clock icon */}
        <div className="absolute left-[41px] top-[236px] w-3.5 h-3.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 14C5.14346 14 3.36303 13.2625 2.05029 11.9497C0.737494 10.637 0 8.85649 0 7C0 5.14351 0.737494 3.36303 2.05029 2.05029C3.36298 0.737495 5.14351 0 7 0C8.85649 0 10.637 0.737495 11.9497 2.05029C13.2625 3.36298 14 5.14351 14 7C14 8.85649 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85649 14 7 14ZM7 0.583346C5.29826 0.583346 3.66602 1.25942 2.46278 2.46273C1.25947 3.66615 0.583396 5.29821 0.583396 6.99995C0.583396 8.70169 1.25947 10.3339 2.46278 11.5372C3.6662 12.7405 5.29826 13.4166 7 13.4166C8.70174 13.4166 10.334 12.7405 11.5372 11.5372C12.7405 10.3337 13.4166 8.70169 13.4166 6.99995C13.4166 5.29821 12.7405 3.66597 11.5372 2.46273C10.3338 1.25942 8.70174 0.583346 7 0.583346Z" fill="#F2F2F2" />
            <path d="M11.3756 7.58381H6.70883C6.5478 7.58381 6.41724 7.45325 6.41724 7.29222V2.6255C6.41724 2.46447 6.5478 2.3338 6.70883 2.3338C6.86997 2.3338 7.00053 2.46447 7.00053 2.6255V7.00047H11.3755C11.5365 7.00047 11.6672 7.13103 11.6672 7.29217C11.6672 7.4532 11.5366 7.58381 11.3756 7.58381Z" fill="#F2F2F2" />
          </svg>
        </div>
        {/* clock text */}
        <div className="absolute left-[63px] top-[237px] w-[65px] h-2 text-zinc-100 text-xs font-normal leading-3 neue_machina_font">36 Hour</div>
        {/* book icon */}
        <div className="absolute left-[140px] top-[236px] w-3.5 h-3.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M7.57865 12.8638V2.04656C7.19858 0.856661 4.21409 0.919762 2.76935 1.10005V11.8186C6.08177 11.2105 7.35572 12.2621 7.57865 12.8638Z" stroke="#F2F2F2" stroke-width="0.6" />
            <path d="M7.57785 12.8638V2.04656C7.95791 0.856661 10.9424 0.919762 12.3871 1.10005V11.8186C9.07472 11.2105 7.80077 12.2621 7.57785 12.8638Z" stroke="#F2F2F2" stroke-width="0.6" />
            <path d="M2.75602 2.42984H1V13.6857L14.0904 13.9999V2.42984H12.3343" stroke="#F2F2F2" stroke-width="0.6" />
            <path d="M7.56689 13.8968V12.6798" stroke="#F2F2F2" stroke-width="0.6" />
          </svg>
        </div>
        {/* book text */}
        <div className="absolute left-[162px] top-[237.5px] w-[87px] h-[9px] text-zinc-100 text-xs font-normal leading-3 neue_machina_font">5 Course</div>
        {/* status */}
        <div className="absolute left-[257.5px] top-[226px] w-[140px] h-9 px-4 py-2 bg-zinc-800 rounded-[40px] justify-end items-center gap-2 inline-flex">
          <div className="translate-y-[-5px] translate-x-[-5px] origin-top-left rotate-[0deg] w-[17.82px] h-[16.33px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.5287 9.82826L16.9374 8.27026C17.5284 8.12659 17.9277 8.85856 17.4871 9.27776L12.8109 13.7262C12.7251 13.8079 12.6656 13.9133 12.6402 14.029L11.3676 19.8186C11.2267 20.4595 10.3038 20.4323 10.2008 19.7842L9.23218 13.6867C9.20918 13.5419 9.13346 13.4107 9.01958 13.3184L4.01681 9.26343C3.51572 8.85727 3.93024 8.05587 4.55128 8.23013L10.2279 9.82298C10.3261 9.85052 10.4297 9.85234 10.5287 9.82826Z" fill="#9EFA13" />
              <path d="M6.908 14.6474C6.97335 14.6969 7.0153 14.7713 7.02392 14.8528L7.4785 19.1507C7.51224 19.4697 7.08635 19.6083 6.92597 19.3305L2.86686 12.2999C2.70486 12.0193 3.04527 11.719 3.30347 11.9147L6.908 14.6474Z" fill="#9EFA13" />
            </svg>
          </div>
          <div className="text-right text-lime-400 text-[10px] font-normal leading-[11px] next_book_font">45% COMPLETED</div>
        </div>
      </div>
    </div>
  )
}