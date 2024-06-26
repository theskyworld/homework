import IntroductionCard from "@/components/IntroductionCard";
import MoonshotCard from "@/components/MoonshotCard";
import RightButton from "@/components/RightButton";
import Web3Card from "@/components/Web3Card";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
  const contentWrapperElemRef = useRef<HTMLDivElement>(null);
  const containerElemRef = useRef<HTMLDivElement>(null);
  const buttonWrapperElemRef = useRef<HTMLDivElement>(null)
  const [translateYVal, setTranslateYVal] = useState(0);
  const [isButtonHide, setIsButtonHide] = useState(false);
  const [isShowLeftButton, setIsShowLeftButton] = useState(false);

  // 判断contentWrapperElemRef和containerElemRef的右边框是否重合，重合则隐藏按钮
  const isHideButton = useCallback((child: HTMLDivElement, parent: HTMLDivElement, offset: number) => {
    const childWidth = child.clientWidth;
    const parentWidth = parent.clientWidth;
    const childRightBoundary = offset + childWidth;
    const parentRightBoundary = parentWidth;
    if (childRightBoundary === parentRightBoundary) return true;
    return false;
  }, [])

  const handleButtonClick = useCallback((isLeft: boolean) => {
    if (!isLeft) {
      setTranslateYVal(() => translateYVal - 104);
      setIsShowLeftButton(true);
    } else {
      setTranslateYVal(() => translateYVal + 104);
      setIsButtonHide(false);
    }
  }, [translateYVal])

  useEffect(() => {
    contentWrapperElemRef.current!.style.transform = `translateX(${translateYVal}px)`;
    if (isHideButton(contentWrapperElemRef.current!, containerElemRef.current!, translateYVal)) {
      setIsButtonHide(true);
    };
  }, [translateYVal, isHideButton]);
  return (
    <div ref={containerElemRef} className="relative w-[calc(416px*3)] h-[max-content] left-[124px] top-[185px] overflow-x-hidden overflow-y-hidden">
      <div className="w-[1352px] flex flex-row gap-[52px]" ref={contentWrapperElemRef}>
        <IntroductionCard />
        <MoonshotCard />
        <Web3Card />
      </div>
      <div className="absolute left-[0px] top-[115px]" onClick={() => { isButtonHide ? handleButtonClick(true) : null }} style={{ display: isShowLeftButton ? 'block' : 'none' }}>
        <RightButton isDisabled={!isButtonHide} left={true} />
      </div>
      <div ref={buttonWrapperElemRef} className="absolute right-[0px] top-[115px]" onClick={() => { !isButtonHide ? handleButtonClick(false) : null }}>
        <RightButton isDisabled={isButtonHide} />
      </div>
    </div >
  )
}
