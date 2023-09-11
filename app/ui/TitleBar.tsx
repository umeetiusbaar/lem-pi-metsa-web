import React from "react";
import Link from "next/link";
import {
  faInfo,
  faImages,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-50 text-white p-4">
      <div className="container mx-auto flex justify-between items-center pl-0 pr-0 ml-0 mr-0">
        <h1 className="text-xl font-bold">LemPi-metsän puolesta!</h1>
        <div className="flex space-x-4 flex-grow justify-end">
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
              <FontAwesomeIcon icon={faInfo} size="xs" />
            </Link>
            <Link href="/media">
              <FontAwesomeIcon icon={faNewspaper} size="xs" />
            </Link>
            <Link href="/gallery">
              <FontAwesomeIcon icon={faImages} size="xs" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
