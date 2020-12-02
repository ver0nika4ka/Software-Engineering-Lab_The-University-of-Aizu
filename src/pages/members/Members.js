
import React from 'react';
import Layout from '../../layouts/Layout'
// i18n
import { useTranslation } from 'react-i18next';

function Members() {
  const [t, i18n] = useTranslation();
  
  return (
    <div className="Members">
      Members
    </div>
  );
}

export default Members;

