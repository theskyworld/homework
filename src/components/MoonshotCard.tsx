export default function MoonshotCard() {

  return (
    <div className="relative w-[416px] h-[278px]">
      {/* bg */}
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="414" height="278" viewBox="0 0 416 278" fill="none">
          <path d="M32.0001 0L384.001 -1.38868e-06C401.674 -6.2174e-07 416.001 14.3268 416.001 31.9999L416.001 78.1226C416.001 84.5537 414.032 90.8306 410.359 96.1092L409.39 97.5011C402.176 107.866 402.456 121.697 410.083 131.762C413.923 136.829 416.001 143.012 416.001 149.37L416.001 246.001C416.001 263.674 401.674 278.001 384.001 278.001L31.9999 278C14.3268 278 -4.21268e-05 263.673 -1.08311e-05 246L0.000176529 149.369C0.000207326 143.011 2.07842 136.828 5.91821 131.761C13.5454 121.696 13.8253 107.865 6.61172 97.5L5.64303 96.1081C1.96942 90.8295 0.0002099 84.5527 0.000179666 78.1216L2.91086e-05 32.0001C-3.11484e-05 14.3269 14.3269 0 32.0001 0Z" fill="url(#paint0_linear_2_488)" />
          <defs>
            <linearGradient id="paint0_linear_2_488" x1="208" y1="278" x2="208" y2="-7.12466e-06" gradientUnits="userSpaceOnUse">
              <stop stop-color="#719BFF" />
              <stop offset="0.770833" stop-color="#DA8AFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* content */}
      <div className="absolute top-0 left-[-1px] w-full h-full moonshot_card_content pl-[40px]">
        {/* header */}
        <div className="absolute top-[36px] w-[333px] text-zinc-100 text-base font-bold leading-none next_book_font">Moonshot 2023 Summer Hackathon</div>
        {/* labels */}
        <div className="absolute top-[68px]">
          <div className="mr-[16px] w-[55px] h-[20px] px-2 py-1 rounded-[20px] border border-stone-500 justify-start items-start gap-2.5 inline-flex">
            <div className="text-white text-[9px] font-normal leading-[9.90px] next_book_font">All Tracks</div>
          </div>
          <div className="mr-[16px] w-[48px] h-[20px] px-2 py-1 rounded-[20px] border border-stone-500 justify-start items-start gap-2.5 inline-flex">
            <div className="text-white text-[9px] font-normal leading-[9.90px] next_book_font">Solidity</div>
          </div>
          <div className="w-[28px] h-[20px] px-2 py-1 rounded-[20px] border border-stone-500 justify-start items-start gap-2.5 inline-flex">
            <div className="text-white text-[9px] font-normal leading-[9.90px] next_book_font">ZK</div>
          </div>
        </div>
        {/* list */}
        <div className="absolute top-[153px]">
          <div className="text-stone-500 text-xs font-normal leading-[13.20px] translate-y-[9px] next_book_font">Signup</div>
          <div className="text-right text-gray-200 text-sm font-light leading-[14px] translate-y-[-6px] neue_machina_font">4/15 - 6/15</div>
          <div className="w-[334px] h-[0px] border border-zinc-800"></div>
        </div>
        <div className="absolute top-[188px]">
          <div className="text-stone-500 text-xs font-normal leading-[13.20px] translate-y-[9px] next_book_font">Event</div>
          <div className="text-right text-gray-200 text-sm font-light leading-[14px] translate-y-[-6px] neue_machina_font">4/15 - 7/15</div>
          <div className="w-[334px] h-[0px] border border-zinc-800"></div>
        </div>
        <div className="absolute top-[222px]">
          <div className="text-stone-500 text-xs font-normal leading-[13.20px] translate-y-[9px] next_book_font">Grant size</div>
          <div className="text-right text-gray-200 text-sm font-light leading-[14px] translate-y-[-6px] neue_machina_font">200K</div>
          <div className="w-[334px] h-[0px] border border-zinc-800"></div>
        </div>
      </div>
    </div>
  )
}