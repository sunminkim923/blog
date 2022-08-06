import Footer from './footer';
import Header from './header';

export default function Layout(props: any) {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}
