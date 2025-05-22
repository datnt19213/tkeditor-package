;

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import {
  MarkdownPlugin,
  remarkMdx,
  remarkMention,
} from '@udecode/plate-markdown';
import { SuggestionPlugin } from '@udecode/plate-suggestion/react';

export const markdownPlugin:any = MarkdownPlugin.configure({
  options: {
    disallowedNodes: [SuggestionPlugin.key],
    remarkPlugins: [remarkMath, remarkGfm, remarkMdx, remarkMention],
  },
});
