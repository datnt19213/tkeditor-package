import * as React from 'react';
import { type FloatingToolbarState } from '@udecode/plate-floating';
import { Toolbar } from './toolbar';
export type FloatingToolbarProps = React.ComponentProps<typeof Toolbar> & {
    state?: FloatingToolbarState;
};
export declare function FloatingToolbar({ children, className, state, ...props }: FloatingToolbarProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=floating-toolbar.d.ts.map