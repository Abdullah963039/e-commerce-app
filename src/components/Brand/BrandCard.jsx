export default function BrandCard({ img, title }) {
  return (
    <div className="basis-[calc(50%-1rem)] rounded-lg border-[1px] border-solid border-sky-100 bg-white p-2 shadow-sm sm:basis-1/2 md:basis-[calc(33.333333%-1rem)] lg:basis-[calc(16.666667%-1rem)]">
      <div className="overflow-hidden ">
        <img
          src={img}
          alt="sadfa0"
          className="m-auto object-cover"
          title={title}
        />
      </div>
    </div>
  );
}
