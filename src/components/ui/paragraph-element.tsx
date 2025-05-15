'use client';

import * as React from 'react';

import type { PlateElementProps } from '@udecode/plate/react';
import { PlateElement } from '@udecode/plate/react';

import { cn } from '../../lib/utils';
import { BlockWithPlus } from '../editor/element-wrapper';

export function ParagraphElement(props: PlateElementProps) {
  return (
<BlockWithPlus element={props.element}> 
      <PlateElement {...props} className={cn('m-0 px-0 py-1')}>
        {props.children}
      </PlateElement>
</BlockWithPlus>
  );
}
