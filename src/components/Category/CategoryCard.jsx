export default function CategoryCard({ img, categroyTitle }) {
  return (
    <div className="p-2 basis-1/2 sm:basis-1/3 md:basis-1/6">
      <div className="text-center w-full flex justify-evenly gap-3 flex-col">
        <div className="flex align-items-center justify-center p-4 w-[100px] h-[100px] rounded-[50%] object-cover mx-auto bg-gradient-to-b from-slate-300 to-slate-100">
          <img src={img} alt="cat2" className="w-16" />
        </div>
        <h4 className="text-center">{categroyTitle}</h4>
      </div>
    </div>
  );
}
