import React from 'react';
import { SidebarProps } from './';
import content from './content.json';

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div id='sidebar_container'>
      Sidebar component.
      Agregar el contenido
    </div>
  );
}

