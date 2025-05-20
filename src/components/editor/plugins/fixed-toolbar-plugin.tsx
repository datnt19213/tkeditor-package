'use client';

import { createPlatePlugin } from '@udecode/plate/react';

import { PLUGIN_KEY } from '../core/use-create-editor';
import { FixedToolbar } from '../ui/fixed-toolbar';
import { FixedToolbarButtons } from '../ui/fixed-toolbar-buttons';

export const FixedToolbarPlugin:any = ({allows, classes}:{allows:PLUGIN_KEY[], classes?:{className?:string, groupClass?:string}}) => {
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