import Head from "next/head";
import SignatureCount from "../components/SignatureCount";
import MonthlyImage from "@/components/MonthlyImage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LemPi-metsän puolesta!</title>
        <meta name="description" content="LemPi-metsän puolesta!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className="container">
        <div className="row align-items-center justify-content-center" style={{ minHeight: '100vh'}}>
          
            <div className="card">
              <div className="card-body main">
                <h1>Lem-Pi metsän puolesta!</h1>
                <p className="card-text">Tähän lyhyt ingressi sisältäen ihan vaan jotain dataa mikä tämä tällainen onkaan. SEO syyt ja myös siksi jos joku domainin kautta tänne erehtyy taikka linkkiä jaetaan jossain niin saadaan myös description teksti mukaan.</p>
                <p className="hashtag text-center"><span>#eipuskiaistenmoottoritietä</span></p>
                <hr/>
                <div className="card yellow">
                  <div className="card-body">
                    <div className="mb-3">
                    <SignatureCount />
                      ihmistä on allekirjoittanut lähiluontoa puolustavan <a href="https://www.adressit.com/pirkkalan_ja_lempaalan_valinen_virkistymetsa_ja_ekologinen_kaytava_tulee_sailyttaa_sellaisena_myos_tulevaisuudessa" target="_blank">adressin</a>
                    </div>
                    <div>
                      <a href="https://www.adressit.com/pirkkalan_ja_lempaalan_valinen_virkistymetsa_ja_ekologinen_kaytava_tulee_sailyttaa_sellaisena_myos_tulevaisuudessa" className="btn btn-success float-end" style={{borderRadius: '30vmin'}} target="_blank">Allekirjoita adressi&nbsp;<i className="fa fa-external-link" aria-hidden="true"></i></a>  
                    </div>
                </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}
