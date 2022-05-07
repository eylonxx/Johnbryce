import React from 'react';
import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Routing from '../Routing/Routing';
import './Layout.css';
export default function Layout(): JSX.Element {
  return (
    <div className="Layout">
      <header className="header">
        <Header />
      </header>
      <aside className="aside">
        <Aside />
      </aside>
      <main className="main">
        <Routing />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
