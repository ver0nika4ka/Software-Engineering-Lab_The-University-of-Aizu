
import React from 'react';
import Layout from '../../layouts/Layout'
// i18n
import { useTranslation } from 'react-i18next';

function Developers() {
  const [t, i18n] = useTranslation();
  
  return (
    <div className="Developers">
      Developers
    </div>
  );
}

export default Developers;

