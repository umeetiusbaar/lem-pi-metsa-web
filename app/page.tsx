"use client";

import SignatureCount from "./components/SignatureCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { inter } from "./fonts";

export default function Page() {
  return (
    <div className="bg-white p-4 bg-opacity-75 rounded-xl">
      <p className={`${inter.className} text-sm text-green-900 mb-5 text-center`}>
        Lempäälän ja Pirkkalan välinen metsäalue - LemPi-metsä - on tuhansien
        eliölajien koti sekä tuhansien ihmisten rakas luonto- ja virkistyskohde.
        Nyt sitä uhkaavat valtatie 3:n uusi linjaus Lempäälän Puskiaisista
        Pirkkalan Linnakallioon sekä tähän "Puskiaisten moottoritiehen" nojaavat
        massiiviset kuntien kaavoitussuunnitelmat.
      </p>
      <div className="bg-spring-yellow bg-opacity-75 rounded-xl p-5">
        <div className="mb-3 flex items-center">
          <div className="font-bold text-2xl text-white mr-3 bg-dark-gray rounded-lg pl-3 pr-3 pt-2 pb-2">
            <SignatureCount />
          </div>
          <span className="sm:text-sm text-black">
            ihmistä on allekirjoittanut LemPi-metsää puolustavan Pirkkalan
            ympäristöyhdistys ry:n nettiadressin.
          </span>
        </div>
        <div className="flex justify-center">
          <a
            href="https://www.adressit.com/pirkkalan_ja_lempaalan_valinen_virkistymetsa_ja_ekologinen_kaytava_tulee_sailyttaa_sellaisena_myos_tulevaisuudessa"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-full float-right"
            target="_blank"
            rel="noopener noreferrer"
          >
            Allekirjoita adressi&nbsp;
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
    </div>
  );
}
