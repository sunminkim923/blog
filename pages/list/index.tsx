import ListItem from '../../src/components/list/item';

export default function List() {
  return (
    <>
      <div className="flex justify-center  bg-slate-600">
        <div className="w-screen md:w-[750px] bg-orange-300 min-h-screen">
          <div className="px-[20px] sm:px-[30px] md:px-[40px]">
            <ListItem />
          </div>
        </div>
      </div>
    </>
  );
}
