declare module '@fullpage/react-fullpage' {
  export interface fullpageApi {
    moveTo: (section: string | number, slide?: number) => void;
    moveSectionUp: () => void;
    moveSectionDown: () => void;
    moveSlideRight: () => void;
    moveSlideLeft: () => void;
    setAutoScrolling: (value: boolean) => void;
    setFitToSection: (value: boolean) => void;
    setScrollingSpeed: (value: number) => void;
    destroy: (type?: string) => void;
    reBuild: () => void;
    setAllowScrolling: (value: boolean, directions?: string[]) => void;
  }

  export interface FullPageProps {
    scrollingSpeed?: number;
    navigation?: boolean;
    navigationPosition?: string;
    navigationTooltips?: string[];
    showActiveTooltip?: boolean;
    slidesNavigation?: boolean;
    slidesNavPosition?: string;
    sectionsColor?: string[];
    anchors?: string[];
    lockAnchors?: boolean;
    css3?: boolean;
    autoScrolling?: boolean;
    fitToSection?: boolean;
    fitToSectionDelay?: number;
    scrollBar?: boolean;
    easing?: string;
    easingcss3?: string;
    loopBottom?: boolean;
    loopTop?: boolean;
    loopHorizontal?: boolean;
    continuousVertical?: boolean;
    continuousHorizontal?: boolean;
    scrollHorizontally?: boolean;
    interlockedSlides?: boolean;
    dragAndMove?: boolean;
    offsetSections?: boolean;
    resetSliders?: boolean;
    fadingEffect?: boolean;
    normalScrollElements?: string;
    scrollOverflow?: boolean;
    scrollOverflowReset?: boolean;
    touchSensitivity?: number;
    normalScrollElementTouchThreshold?: number;
    bigSectionsDestination?: string;
    keyboardScrolling?: boolean;
    animateAnchor?: boolean;
    recordHistory?: boolean;
    menu?: string;
    verticalCentered?: boolean;
    paddingTop?: string;
    paddingBottom?: string;
    fixedElements?: string;
    responsiveWidth?: number;
    responsiveHeight?: number;
    responsiveSlides?: boolean;
    parallax?: boolean;
    credits?: {
      enabled?: boolean;
      label?: string;
      position?: 'left' | 'right';
    };
    licenseKey?: string;
    render: (comp: { state: any; fullpageApi: fullpageApi }) => React.ReactNode;
  }

  const ReactFullpage: React.FC<FullPageProps>;
  export default ReactFullpage;
}
