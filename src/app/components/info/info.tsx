import React, { useEffect, useState } from "react";

interface InfoProps {
  isNavHovered: boolean
}

export const Info: React.FC<InfoProps> = ({ isNavHovered }) => {
  // use state for shouldShow; isNavHovered once, then shouldShow = true, don't change afterwards
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    if (!shouldShow && isNavHovered) {
      setShouldShow(true);
    }

  }, [isNavHovered, shouldShow])

  return (
    <div className={`hidden md:flex justify-between items-end absolute ${shouldShow ? 'visible' : 'invisible'} uppercase w-full bottom-0 left-0 pb-4 px-8`}>
      <div className="flex gap-8">
        <p className={`flex gap-2 ${isNavHovered ? 'text-raisin-black' : 'text-mint-cream'}`}>Work:</p>
        <ul className={`flex items-center gap-2 ${isNavHovered ? 'text-outer-space' : 'text-flamy-orange'}`}>
          <li >
            FestWithMe
          </li>
          <span> | </span>
          <li>
            mintvalentine.xyz
          </li>
          <span> | </span>
          <li>
            kremenarov.com
          </li>
        </ul>
      </div>

      <div className="flex relative items-end w-6 h-24">
        <p className='-rotate-90 absolute top-0 bottom-0 left-0'>
          Contacts:
        </p>
        <div className={`absolute bottom-full right-0 flex flex-col items-end gap-4 pb-4 ${isNavHovered ? 'text-outer-space' : 'text-flamy-orange'}`}>
          <svg fill="currentColor" width="40px" height="40px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
            <path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 21.8827 33.8360 C 16.0702 28.0469 12.3671 20.6640 16.7499 16.2813 C 17.0077 16.0234 17.2890 15.7656 17.5468 15.5078 C 18.8827 14.2422 20.1718 14.3125 21.3202 15.9297 L 24.3671 20.2656 C 25.3983 21.7656 25.1405 22.6094 24.0390 23.7813 L 23.0780 24.8360 C 22.7265 25.1640 22.8671 25.6094 23.0312 25.8906 C 23.4765 26.7344 24.7421 28.2344 26.1014 29.5938 C 27.5077 31.0000 28.9374 32.1953 29.8280 32.6875 C 30.1562 32.875 30.6249 32.9219 30.9296 32.6406 L 31.9374 31.6797 C 33.0624 30.5781 33.9765 30.2969 35.4296 31.3281 C 37.4452 32.7578 38.6640 33.6016 39.8593 34.4219 C 41.3358 35.5000 41.6874 36.8360 40.1874 38.1953 C 39.9296 38.4531 39.6952 38.7344 39.4374 38.9922 C 35.0546 43.3516 27.6952 39.6484 21.8827 33.8360 Z" />
          </svg>
          <svg fill="currentColor" width="40px" height="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            viewBox="-143 145 512 512">
            <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
              V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
              C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
              c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
              "/>
          </svg>
        </div>
      </div>
    </div>
  )
};