export default function Web3Card() {

  return (
    <div className="relative w-[416px] h-[278px]">
      {/* bg */}
      <div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="415" height="276" viewBox="0 0 416 278" fill="none">
            <path d="M1.57233e-07 238.001L9.35541e-07 40.0001C1.02238e-06 17.9087 17.9086 5.94695e-05 40 5.75382e-05L229.45 4.0976e-05C238.544 4.0181e-05 247.367 3.09913 254.464 8.78632L283.573 32.1139C290.67 37.8011 299.493 40.9002 308.587 40.9002L376 40.9002C398.091 40.9002 416 58.8088 416 80.9002L416 238.001C416 260.092 398.091 278.001 376 278.001L40 278.001C17.9086 278.001 -1.56562e-06 260.092 1.57233e-07 238.001Z" fill="url(#paint0_linear_2_522)" />
            <defs>
              <linearGradient id="paint0_linear_2_522" x1="208" y1="278.001" x2="208" y2="4.28512e-05" gradientUnits="userSpaceOnUse">
                <stop stop-color="#D9E313" />
                <stop offset="1" stop-color="#3CBC34" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* content */}
      <div className="absolute top-[-1px] left-0 w-full h-full web3_card_content pl-[38px]">
        {/* header */}
        <div className="absolute top-[36px] w-[46px] h-1 bg-gradient-to-b from-yellow-400 to-green-500 rounded-[11px]" />
        {/* title */}
        <div className="absolute top-[68px] text-gray-200 text-base font-bold leading-none next_book_font">Web 3.0 Programming Basics</div>
        {/* labels */}
        <div className="absolute top-[100px] w-[53px] h-[20px] px-2 py-1 rounded-[20px] border border-stone-500 justify-start items-start gap-2.5 inline-flex">
          <div className="text-white text-[9px] font-normal leading-[9.90px] next_book_font">Beginner</div>
        </div>
        {/* main text */}
        <div className="absolute top-[134px] w-[336px] text-stone-500 text-xs font-normal leading-[13.20px] next_book_font">Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.</div>
        {/* clock icon */}
        <div className="absolute top-[224px] w-3.5 h-3.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 14.0005C5.14346 14.0005 3.36303 13.263 2.05029 11.9502C0.737494 10.6375 0 8.85697 0 7.00049C0 5.144 0.737494 3.36351 2.05029 2.05077C3.36298 0.737983 5.14351 0.000488281 7 0.000488281C8.85649 0.000488281 10.637 0.737983 11.9497 2.05077C13.2625 3.36346 14 5.144 14 7.00049C14 8.85697 13.2625 10.6375 11.9497 11.9502C10.637 13.263 8.85649 14.0005 7 14.0005ZM7 0.583834C5.29826 0.583834 3.66602 1.2599 2.46278 2.46322C1.25947 3.66664 0.583396 5.2987 0.583396 7.00044C0.583396 8.70218 1.25947 10.3344 2.46278 11.5377C3.6662 12.741 5.29826 13.417 7 13.417C8.70174 13.417 10.334 12.741 11.5372 11.5377C12.7405 10.3342 13.4166 8.70218 13.4166 7.00044C13.4166 5.2987 12.7405 3.66646 11.5372 2.46322C10.3338 1.2599 8.70174 0.583834 7 0.583834Z" fill="#F2F2F2" />
            <path d="M11.3756 7.58429H6.70883C6.5478 7.58429 6.41724 7.45372 6.41724 7.29269V2.62597C6.41724 2.46494 6.5478 2.33427 6.70883 2.33427C6.86997 2.33427 7.00053 2.46494 7.00053 2.62597V7.00094H11.3755C11.5365 7.00094 11.6672 7.13151 11.6672 7.29264C11.6672 7.45367 11.5366 7.58429 11.3756 7.58429Z" fill="#F2F2F2" />
          </svg>
        </div>
        {/* clock text */}
        <div className="absolute top-[225.5px] left-[60px] w-[65px] h-2 text-zinc-100 text-xs font-normal leading-3 neue_machina_font">36 Hour</div>
        {/* book icon */}
        <div className="w-3.5 h-3.5 absolute top-[224px] left-[137px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M7.57865 12.8643V2.04705C7.19859 0.857149 4.21409 0.92025 2.76935 1.10054V11.8191C6.08178 11.211 7.35573 12.2625 7.57865 12.8643Z" stroke="#F2F2F2" stroke-width="0.6" />
            <path d="M7.57784 12.8643V2.04705C7.95791 0.857149 10.9424 0.92025 12.3871 1.10054V11.8191C9.07472 11.211 7.80076 12.2625 7.57784 12.8643Z" stroke="#F2F2F2" stroke-width="0.6" />
            <path d="M2.75602 2.43032H1V13.6862L14.0904 14.0004V2.43032H12.3343" stroke="#F2F2F2" stroke-width="0.6" />
            <path d="M7.5669 13.8973V12.6803" stroke="#F2F2F2" stroke-width="0.6" />
          </svg>
        </div>
        {/* book text */}
        <div className="absolute top-[226.5px] left-[159px] w-[87px] h-[9px] text-zinc-100 text-xs font-normal leading-3 neue_machina_font">5 Course</div>

      </div>
    </div>
  )
}