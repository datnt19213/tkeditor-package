'use client';

import * as React from 'react';

import type { TLinkElement } from '@udecode/plate-link';
import { useLink } from '@udecode/plate-link/react';
import type { PlateElementProps } from '@udecode/plate/react';
import { PlateElement } from '@udecode/plate/react';

import { BlockWithPlus } from '../editor/element-wrapper';

export function LinkElement(props: PlateElementProps<TLinkElement>) {
  const { props: linkProps } = useLink({ element: props.element });

  return (
<BlockWithPlus element={props.element}>
      <PlateElement
        {...props}
        as="a"
        className="font-medium text-primary underline decoration-primary underline-offset-4"
        attributes={{
          ...props.attributes,
          ...(linkProps as any),
        }}
      >
        {props.children}
      </PlateElement>
</BlockWithPlus>
  );
}
