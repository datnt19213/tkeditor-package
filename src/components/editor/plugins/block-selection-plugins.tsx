;

import { BlockSelectionPlugin } from '@udecode/plate-selection/react';

import { BlockSelection } from '../ui/block-selection';

export const blockSelectionPlugins:any[] = [
  BlockSelectionPlugin.configure(({ editor }) => ({
    options: {
      enableContextMenu: true,
      isSelectable: (element, path) => {
        return (
          !['code_line', 'column', 'td'].includes(element.type) &&
          !editor.api.block({ above: true, at: path, match: { type: 'tr' } })
        );
      },
    },
    render: {
      belowRootNodes: (props) => {
        if (!props.attributes.className?.includes('slate-selectable'))
          return null;

        return <BlockSelection />;
      },
    },
  })),
] as any;

export const blockSelectionReadOnlyPlugin:any = BlockSelectionPlugin.configure({
  api: {},
  extendEditor: null,
  handlers: {},
  options: {},
  render: {},
  useHooks: null,
}) as any;
