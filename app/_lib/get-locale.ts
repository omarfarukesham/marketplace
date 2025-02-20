import 'server-only';

import { cookies } from 'next/headers';
import { DEFAULT_LOCALE, LocaleType } from '../_config/locales';

export const getLocale = (): LocaleType => {
  const locale = cookies().get('locale')?.value || DEFAULT_LOCALE;

  return locale as LocaleType;
};
