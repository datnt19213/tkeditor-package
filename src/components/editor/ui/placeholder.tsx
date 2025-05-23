import * as React from 'react';

import { HEADING_KEYS } from '@udecode/plate-heading';
import {
  createNodeHOC,
  createNodesHOC,
  ParagraphPlugin,
  type PlaceholderProps,
  usePlaceholderState,
} from '@udecode/plate/react';

import { cn } from '../../../libs/utils';

export const Placeholder:any = (props: PlaceholderProps) => {
  const { attributes, children, placeholder } = props;

  const { enabled } = usePlaceholderState(props);

  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      attributes: {
        ...attributes,
        className: cn(
          attributes.className,
          enabled &&
            'before:absolute before:cursor-text before:opacity-30 before:content-[attr(placeholder)]'
        ),
        placeholder,
      },
    });
  });
};

const withPlaceholder = createNodeHOC(Placeholder);

const withPlaceholdersPrimitive = createNodesHOC(Placeholder);

export const withPlaceholders:any = (components: any) =>
  withPlaceholdersPrimitive(components, [
    {
      key: ParagraphPlugin.key,
      hideOnBlur: true,
      placeholder: 'Type a paragraph',
      query: {
        maxLevel: 1,
      },
    },
    {
      key: HEADING_KEYS.h1,
      hideOnBlur: false,
      placeholder: 'Untitled',
    },
  ]);
