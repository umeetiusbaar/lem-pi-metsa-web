export default function Page() {
  return (
    <div className="bg-white p-4 bg-opacity-75 rounded-xl">
      <p>Mikä on Puskiaisten moottoritie?</p>
      <div className="relative h-0 pb-9/16">
        <video className="absolute top-0 left-0 w-full h-full" controls>
          <source src="/videos/Puskiaisten moottoritie - lyhyt.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
