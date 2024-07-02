import { Language } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.lang-detect.title'),
  path: '/lang-detect',
  description: translate('tools.lang-detect.description'),
  keywords: ['lang', 'language', 'detect'],
  component: () => import('./lang-detect.vue'),
  icon: Language,
  createdAt: new Date('2024-07-02'),
});
