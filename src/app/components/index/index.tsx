
import { NavMenu } from "../nav-menu/nav-menu";

export const Index = () => {
  return (<>
    <div className="bg-raisin-black w-full h-screen flex flex-col items-center justify-center text-center">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Radoslav Naydenov
        </h1>
        <p className="text-xl">Full-stack Developer</p>
      </div>

      <NavMenu col forceShow key='nav-menu-index' />
    </div>
  </>
  )
};