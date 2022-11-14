import React, { useState } from 'react';
import Header from '../../components/Header';
import Photos from '../../components/Photos';
import Sidebar from '../../components/Sidebar';
import Users from '../../components/Users';

export default function Dashboard() {
  const [activeContent, setActiveContent] = useState('users');

  return (
    <section>
      <Header />
      <ContentWrapper>
        <Sidebar
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
        <Container type={activeContent} />
      </ContentWrapper>
    </section>
  );
}

function ContentWrapper({ children }) {
  return <div className="d-flex content__wrapper">{children}</div>;
}

function Container({ type }) {
  let component = <p>Not selected</p>;
  if (type === 'users') {
    component = <Users />;
  }

  if (type === 'photos') {
    component = <Photos />;
  }

  return <div className="container">{component}</div>;
}
