import React from 'react';
// i18n
import { useTranslation } from 'react-i18next';

function Publications() {
  const [t, i18n] = useTranslation();
  
  return (
    <div className="Publications">
      Publications
    </div>
  );
}

export default Publications;

