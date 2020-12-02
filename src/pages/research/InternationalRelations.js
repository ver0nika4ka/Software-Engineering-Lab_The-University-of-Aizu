import React from 'react';
import Layout from '../../layouts/Layout'
// i18n
import { useTranslation } from 'react-i18next';

function InternationalRelations() {
  const [t, i18n] = useTranslation();

  return (
    <div className="InternationalRelations">
      InternationalRelations
    </div>
  );
}

export default InternationalRelations;
