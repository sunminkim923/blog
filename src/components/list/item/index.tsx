export default function ListItem() {
  return (
    <>
      <div className="w-[100%] h-[250px] border-solid border-[1.5px] border-black mt-[20px] rounded-lg">
        <div className="w-[100%] h-[50%] bg-slate-500 rounded-t-lg">사진</div>
        <div className="p-[10px]">
          <div className="text-xl ">타이틀</div>
          <div className="text-ellipsis overflow-hidden line-clamp-3 pt-[5px]">
            컨텐츠 컨텐츠 컨텐츠 컨텐츠 컨텐츠 컨텐츠 컨텐츠 컨텐츠 컨텐츠
            컨텐츠컨텐츠 컨텐츠컨텐츠 컨텐츠컨텐츠 컨텐츠 컨텐츠 컨텐츠 컨텐츠
            컨텐츠컨텐츠 컨텐츠컨텐츠 컨텐츠컨텐츠 컨텐츠컨텐츠 컨텐츠컨텐츠
            컨텐츠컨텐츠 컨텐츠컨텐츠 컨텐츠컨텐츠 컨텐츠컨텐츠 컨텐츠컨텐츠
            컨텐츠컨텐츠 컨텐츠컨텐츠 컨텐츠컨텐츠 컨텐츠컨텐츠 컨텐츠컨텐츠
            컨텐츠 컨텐츠 컨텐츠
          </div>
        </div>
      </div>
    </>
  );
}
