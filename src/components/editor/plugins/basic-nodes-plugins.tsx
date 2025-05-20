'use client';

import {
  all,
  createLowlight,
} from 'lowlight';

import { BasicMarksPlugin } from '@udecode/plate-basic-marks/react';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { CodeBlockPlugin } from '@udecode/plate-code-block/react';
import { HeadingPlugin } from '@udecode/plate-heading/react';

const lowlight = createLowlight(all);

export const basicNodesPlugins:any[] = [
  HeadingPlugin.configure({ options: { levels: 3 } }),
  BlockquotePlugin,
  CodeBlockPlugin.configure({ options: { lowlight } }),
  BasicMarksPlugin,
] as const;
