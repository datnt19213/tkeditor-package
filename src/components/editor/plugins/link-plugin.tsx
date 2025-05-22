;

import { LinkPlugin } from '@udecode/plate-link/react';

import { LinkFloatingToolbar } from '../ui/link-floating-toolbar';

export const linkPlugin:any = LinkPlugin.extend({
  render: { afterEditable: () => <LinkFloatingToolbar /> },
});
