import { useEffect, useRef, useState } from "react"

export default function RightButton({ isDisabled }: { isDisabled: boolean }) {
  const wrapperElemRef = useRef<HTMLDivElement>(null);
  const disabledStyle = useRef({
    cursor: 'not-allowed',
    opacity: 0
  })

  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const changeIsHover = (val: boolean) => { setIsHovered(val) };
    wrapperElemRef.current?.addEventListener('mouseover', changeIsHover.bind(null, true));
    wrapperElemRef.current?.addEventListener('mouseout', changeIsHover.bind(null, false));

    return () => {
      wrapperElemRef.current?.removeEventListener('mouseover', changeIsHover.bind(null, true));
      wrapperElemRef.current?.removeEventListener('mouseout', changeIsHover.bind(null, false));
    }
  }, [])
  return (
    <div className="w-12 h-12 relative cursor-pointer" ref={wrapperElemRef}>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" style={isDisabled ? disabledStyle.current : undefined}>
        <circle cx="24" cy="24" r="23.6" fill={!isHovered ? 'black' : '#303030'} stroke="#676767" stroke-width="0.8" />
        <path d="M19 16L30 24L19 32" stroke="white" stroke-width="2" stroke-linejoin="bevel" />
      </svg>
    </div>
  )
}