;

import { CursorOverlayPlugin } from '@udecode/plate-selection/react';

import { CursorOverlay } from '../ui/cursor-overlay';

export const cursorOverlayPlugin:any = CursorOverlayPlugin.configure({
  render: {
    afterEditable: () => <CursorOverlay />,
  },
});
