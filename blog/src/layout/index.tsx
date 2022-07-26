import Footer from '../Footer';
import Header from '../Header';

export default function Layout(props: any) {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}
