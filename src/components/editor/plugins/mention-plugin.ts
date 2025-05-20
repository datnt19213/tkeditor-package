'use client';

import { MentionPlugin } from '@udecode/plate-mention/react';

export const mentionPlugin:any = MentionPlugin.configure({
  options: { triggerPreviousCharPattern: /^$|^[\s"']$/ },
});
