'use client';

import { createPlatePlugin } from '@udecode/plate/react';

import { FloatingToolbar } from '../../ui/floating-toolbar';
import { FloatingToolbarButtons } from '../../ui/floating-toolbar-buttons';
import { PLUGIN_KEY } from '../use-create-editor';

export const FloatingToolbarPlugin =  ({allows, classes}:{allows:PLUGIN_KEY[], classes?:{className?:string, groupClass?:string}}) => { return createPlatePlugin({
  key: 'floating-toolbar',
  render: {
    afterEditable: () => (
      <FloatingToolbar className={classes?.className || ""}>
        <FloatingToolbarButtons allows={allows} groupClass={classes?.groupClass || ""} />
      </FloatingToolbar>
    ),
  },
})};
