import {
  faImages,
  faInfo,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white opacity-75">
      <h1 className="text-xl font-bold text-green-700">
        <Link href="/">LemPi-metsän puolesta!</Link>
      </h1>
      <div className="hidden sm:flex space-x-4">
        <Link href="/info" className="hover:underline">
          Info
        </Link>
        <Link href="/media" className="hover:underline">
          Media
        </Link>
        <Link href="/gallery" className="hover:underline">
          Galleria
        </Link>
      </div>
      <div className="sm:hidden flex space-x-4">
        <Link href="/info">
          <FontAwesomeIcon icon={faInfo} size="1x" />
        </Link>
        <Link href="/media">
          <FontAwesomeIcon icon={faNewspaper} size="1x" />
        </Link>
        <Link href="/gallery">
          <FontAwesomeIcon icon={faImages} size="1x" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
