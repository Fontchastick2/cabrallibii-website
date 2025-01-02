import { useTranslation as useI18nTranslation } from 'react-i18next';

// Define a simpler version of the hook that just returns the translation function
export const useTranslation = () => {
  const { t: translate } = useI18nTranslation();
  
  return {
    t: translate,
    i18n: undefined
  };
};

export default useTranslation;
