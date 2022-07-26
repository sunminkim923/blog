export default function Header(props: any) {
  return (
    <>
      <div>
        header
        <div>{props.children}</div>
      </div>
    </>
  );
}
