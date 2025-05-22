import {
  PlateElement,
  type PlateElementProps,
} from '@udecode/plate/react';

import { BlockWithPlus } from '../core/element-wrapper';

;

export function BlockquoteElement(props: PlateElementProps) {
  return (
    <BlockWithPlus element={props.element}>
      <PlateElement
        as="blockquote"
        className="my-1 border-l-2 pl-6 italic"
        {...props}
      />
    </BlockWithPlus>
  );
}
