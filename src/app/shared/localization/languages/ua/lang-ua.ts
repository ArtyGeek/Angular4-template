import { LANG_UA_AUTH_COMPONENT_TRANS } from './pages/auth/auth.translate';
import { LANG_UA_ADMINS_COMPONENT_TRANS } from './pages/admins/admins.translate';
import { LANG_UA_SIDEBAR_COMPONENT_TRANS } from './pages/sidebar/sidebar.translate';
import { LANG_UA_HEADER_COMPONENT_TRANS } from './pages/header/header.translate';

export const LANG_UA_NAME = 'ua';

export const LANG_UA_TRANS = {
    'search': 'Пошук',
    'email': 'E-mail'
};
Object.assign(
    LANG_UA_TRANS,
    LANG_UA_HEADER_COMPONENT_TRANS,
    LANG_UA_SIDEBAR_COMPONENT_TRANS,
    LANG_UA_ADMINS_COMPONENT_TRANS,
    LANG_UA_AUTH_COMPONENT_TRANS);

