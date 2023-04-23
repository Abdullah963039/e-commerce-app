export default function CategoryCard({ img, categroyTitle }) {
  return (
    <div className="flex-1 basis-1/2 p-2 sm:basis-1/3 md:basis-1/6">
      <div className="flex w-full flex-col justify-evenly gap-3 text-center">
        <div className="align-items-center mx-auto flex h-[100px] w-[100px] justify-center rounded-[50%] bg-gradient-to-b from-slate-300 to-slate-100 object-cover p-4">
          <img src={img} alt="cat2" className="w-16" />
        </div>
        <h4 className="text-center">{categroyTitle}</h4>
      </div>
    </div>
  );
}
