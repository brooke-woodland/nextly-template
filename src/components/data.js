import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Features",
  desc: "Compli offers three main features to ensure your warranties",
  image: benefitOneImg,
  bullets: [
    {
      title: "Automatic Warranty Uploads",
      desc: "Upload O&M manuals to the site and have warranties automatically created and in a centralized location. No more manual entry.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Preventative Maintenance Scheduling",
      desc: "Schedules of preventative maintence tasks are auto generated for each warranty. Push notifications can be configured to ensure there are no missed PM tasks.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "One Click Warranty Claims",
      desc: "With built in proof of preventative maintenance, warranty claims can be submitted with one click. No more back and forth with the manufacturer.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
