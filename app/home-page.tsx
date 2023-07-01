"use client";

import SignatureCount from "./components/SignatureCount";
import MonthlyImage from "./components/MonthlyImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <MonthlyImage />
      <div className="absolute inset-0 flex items-center justify-center font-space-grotesk">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-xl p-5 mb-5">
            <h1 className="font-bold text-4xl text-center text-green-900 mb-5">
              Lem-Pi metsän puolesta!
            </h1>
            <p className="text-lg  text-green-900 mb-5">
              Lempäälän ja Pirkkalan välinen metsäalue - LemPi-metsä - on
              tuhansien eliölajien koti ja samoin tuhansien ihmisten rakas
              luonto- ja virkistyskohde. Nyt sitä uhkaavat valtatie 3:n uusi
              linjaus sekä kuntien massiiviset kaavoitussuunnitelmat.
            </p>
            <p className="text-2xl font-bold text-center text-red-700 mb-5">
              #EiPuskiaistenMoottoritietä
            </p>
            <hr className="border-t border-gray-300 my-5" />
            <div className="bg-spring-yellow rounded-xl p-5">
              <div className="mb-3 flex items-center">
                <div className="font-bold text-2xl text-white mr-3 bg-black rounded-xl p-5">
                  <SignatureCount />
                </div>
                <span className="text-lg text-black">
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
        </div>
      </div>
    </div>
  );
}