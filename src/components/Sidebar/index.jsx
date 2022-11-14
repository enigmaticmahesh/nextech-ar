import React from 'react';
import { CONTENTS } from '../../common/utils';

export default function Sidebar({ activeContent, setActiveContent }) {
  const sidebarContentClasses = (type) =>
    activeContent === type
      ? 'sidebar__content active__content'
      : 'sidebar__content';
  return (
    <aside>
      {CONTENTS.map((content) => (
        <div
          className={sidebarContentClasses(content.type)}
          key={content.type}
          onClick={() => setActiveContent(content.type)}
        >
          {content.name}
        </div>
      ))}
    </aside>
  );
}
