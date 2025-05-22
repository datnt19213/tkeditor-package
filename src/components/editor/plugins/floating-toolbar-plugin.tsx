;

import { createPlatePlugin } from '@udecode/plate/react';

import { PLUGIN_KEY } from '../core/use-create-editor';
import { FloatingToolbar } from '../ui/floating-toolbar';
import { FloatingToolbarButtons } from '../ui/floating-toolbar-buttons';

export const FloatingToolbarPlugin:any =  ({allows, classes}:{allows:PLUGIN_KEY[], classes?:{className?:string, groupClass?:string}}) => { return createPlatePlugin({
  key: 'floating-toolbar',
  render: {
    afterEditable: () => (
      <FloatingToolbar className={classes?.className || ""}>
        <FloatingToolbarButtons allows={allows} groupClass={classes?.groupClass || ""} />
      </FloatingToolbar>
    ),
  },
})};
