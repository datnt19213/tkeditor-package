'use client';

import { createPlatePlugin } from '@udecode/plate/react';

import { FixedToolbar } from '../../ui/fixed-toolbar';
import { FixedToolbarButtons } from '../../ui/fixed-toolbar-buttons';
import { PLUGIN_KEY } from '../use-create-editor';

export const FixedToolbarPlugin = ({allows, classes}:{allows:PLUGIN_KEY[], classes?:{className?:string, groupClass?:string}}) => {
  return createPlatePlugin({
  key: 'fixed-toolbar',
  render: {
    beforeEditable: () => (
      <FixedToolbar className={classes?.className || ""}>
        <FixedToolbarButtons allows={allows} groupClass={classes?.groupClass || ""} />
      </FixedToolbar>
    ),
  },
});}