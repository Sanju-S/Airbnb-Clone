import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white grid grid-cols-3 shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 w-[90px] md:w-[120px] my-auto">
        <img
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="cursor-pointer"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow placeholder-gray-600 truncate"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Beacome a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border border-gray-400 items-center space-x-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
