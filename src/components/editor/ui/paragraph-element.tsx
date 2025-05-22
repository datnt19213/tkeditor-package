import * as React from 'react';

import type { PlateElementProps } from '@udecode/plate/react';
import { PlateElement } from '@udecode/plate/react';

import { cn } from '../../../libs/utils';
import { BlockWithPlus } from '../core/element-wrapper';

export function ParagraphElement(props: PlateElementProps) {
  return (
<BlockWithPlus element={props.element}> 
      <PlateElement {...props} className={cn('m-0 px-0 py-1')}>
        {props.children}
      </PlateElement>
</BlockWithPlus>
  );
}
