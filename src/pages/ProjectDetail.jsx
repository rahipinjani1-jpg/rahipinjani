import React from 'react';
import Patchwork from './projects/Patchwork.jsx';
import Wire from './projects/Wire.jsx';
import Tulip from './projects/Tulip.jsx';
import Kurti from './projects/Kurti.jsx';
import Lehenga from './projects/Lehenga.jsx';
import Velvet from './projects/Velvet.jsx';
import Navratri from './projects/Navratri.jsx';
import Suit from './projects/Suit.jsx';
import Khushi from './projects/Khushi.jsx';

const COMPONENTS = {
  patchwork: Patchwork,
  wire: Wire,
  tulip: Tulip,
  kurti: Kurti,
  lehenga: Lehenga,
  velvet: Velvet,
  navratri: Navratri,
  suit: Suit,
  khushi: Khushi,
};

export default function ProjectDetail({ slug, onBack }) {
  const Component = COMPONENTS[slug];
  if (!Component) return null;
  return <Component onBack={onBack} />;
}
