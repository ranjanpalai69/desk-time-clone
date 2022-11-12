import { BsBook, BsCalendar2, BsClock, BsClockHistory, BsCode, BsEyeSlash, BsWifi1 } from "react-icons/bs";
import { FaAndroid, FaApple, FaCalculator, FaChrome, FaFileInvoice, FaFirefox, FaLinux, FaMobile, FaOpera, FaWindows } from "react-icons/fa";
import { HiOutlineDocumentText, HiStatusOffline } from "react-icons/hi";
import {BsPersonPlusFill,BsFillFileEarmarkArrowDownFill} from "react-icons/bs"
export const coolFeatures=[

    {
        icon:<BsClock/>,
        text:"Automatic time tracking"
    },
    {
        icon:<HiStatusOffline/>,
        text:"Offline time tracking"
    },
    {
        icon:<HiOutlineDocumentText/>,
        text:"Document title tracking"
    },
    {
        icon:<BsEyeSlash/>,
        text:"Private time option"
    },
    {
        icon:<FaFileInvoice/>,
        text:"Invoicing"
    },
    {
        icon:<BsClock/>,
        text:"Pomodoro timer"
    },
    {
        icon:<FaCalculator/>,
        text:"Cost calculation"
    },
    {
        icon:<BsPersonPlusFill/>,
        text:"Teams contacts"
    },
    {
        icon:<BsFillFileEarmarkArrowDownFill/>,
        text:"Custom reports"
    },
    {
        icon:<BsCalendar2/>,
        text:"Absense calender"
    },
    {
        icon:<BsClock/>,
        text:"Web time tracker"
    },
    {
        icon:<BsWifi1/>,
        text:"Third party integration"
    },
    {
        icon:<BsClockHistory/>,
        text:"Shift scheduling"
    },
    {
        icon:<FaMobile/>,
        text:"Mobile app"
    },
    {
        icon:<BsCode/>,
        text:"URL and app tracking"
    },
    {
        icon:<FaMobile/>,
        text:"Screenshot"
    },
    {
        icon:<BsCode/>,
        text:"Project tracking"
    },
    {
        icon:<BsBook/>,
        text:"Booking"
    }
    


]



export const marketing_data=[
    {
        img_url:"https://desktime.com/static/web/new-homepage/desktop/desktop.webp",
        heading:"DeskTime for desktops",
        icons:[<FaLinux/>,<FaApple/>,<FaWindows/>],
        sub_title:"Requires download and installation",
        titles:[" Fully automated time tracker","App, URL & Document title tracking","Project and task tracking","Screenshots","Idle and Private time"]
      }
      ,
      {
        img_url:"https://desktime.com/static/web/new-homepage/mobile/mobile.webp",
        heading:"DeskTime for mobile phones",
        icons:[<FaApple/>,<FaAndroid/>],
        sub_title:"Requires download and installation",
        titles:["Manual time tracker","Workday overview","Project and task tracking"]
      },
      {
        img_url:"https://desktime.com/static/web/new-homepage/webtimer/webtimer.webp",
        heading:"Manual time tracking",
        icons:[<FaChrome/>,<FaFirefox/>,<FaOpera/>],
        sub_title:"No software installation necessary",
        titles:["Manual time tracker","Workday overview","Project and task tracking"]
      }
]