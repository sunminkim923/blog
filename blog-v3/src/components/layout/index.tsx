import Footer from './footer';
import Header from './header';

export default function Layout(props: any) {
  console.log(props);

  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}
