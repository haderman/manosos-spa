import { Header } from './header';

export type LayoutProps = React.PropsWithChildren<{}>

export function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
    </>
  );
}
