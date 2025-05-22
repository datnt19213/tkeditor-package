// components/BlockWithPlus.tsx
import React, {
  useEffect,
  useState,
} from 'react';

import { Plus } from 'lucide-react';

import { isType } from '@udecode/plate';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { CodeBlockPlugin } from '@udecode/plate-code-block/react';
import { ExcalidrawPlugin } from '@udecode/plate-excalidraw/react';
import { HEADING_KEYS } from '@udecode/plate-heading';
import { ColumnPlugin } from '@udecode/plate-layout/react';
import {
  ImagePlugin,
  MediaEmbedPlugin,
  PlaceholderPlugin,
} from '@udecode/plate-media/react';
import { TablePlugin } from '@udecode/plate-table/react';
import { TogglePlugin } from '@udecode/plate-toggle/react';
import {
  ParagraphPlugin,
  useEditorRef,
  usePath,
  useReadOnly,
  useSelected,
} from '@udecode/plate/react';

import { cn } from '../../../libs/utils';
import { Button } from '../ui/button';
import { InsertDropdownMenu } from '../ui/insert-dropdown-menu';
import {
  Toolbar,
  ToolbarGroup,
} from '../ui/toolbar';

export const isSelectionAtTopLevel = (editor:any): boolean => {
  const { selection } = editor;

  if (!selection) return false;

  const anchorPathDepth = selection.anchor.path.length;
  const focusPathDepth = selection.focus.path.length;

  return anchorPathDepth === 2 && focusPathDepth === 2;
};


export const BlockWithPlus = ({ children, element}: any) => {
  const isSelected = useSelected();
  const isReadOnly = useReadOnly();
  const editor = useEditorRef();
 const path = usePath();
  const isNodeType = (keys: string[] | string) => isType(editor, element, keys);

  const isInColumn = path.length === 3;



  const [count, setCount] = useState(0);

  useEffect(() => {
    const selection = editor?.selection;

    if (!selection || !editor?.children?.length) {
      setCount(0);
      return;
    }

    const anchorPath = selection.anchor.path[0];
    const focusPath = selection.focus.path[0];

    const [start, end] = anchorPath < focusPath
      ? [anchorPath, focusPath]
      : [focusPath, anchorPath];

    const selectedBlocks = editor.children.slice(start, end + 1);

    setCount(selectedBlocks.length);
  }, [editor.selection]);


  const isActive = isSelected && !isReadOnly && count === 1 && isSelectionAtTopLevel(editor) ;

	return (
		<div
      data-tkeclassblockkey="true"
			className="relative group"

		>
			{isActive && (
				<Toolbar className={cn("absolute -left-16 -mt-2 z-10",
        isNodeType(HEADING_KEYS.h1) && 'pb-1 text-[1.875em]',
        isNodeType(HEADING_KEYS.h2) && 'pb-1 text-[1.5em]',
        isNodeType(HEADING_KEYS.h3) && 'pt-[2px] pb-1 text-[1.25em]',
        isNodeType([HEADING_KEYS.h4, HEADING_KEYS.h5]) &&
          'pt-1 pb-0 text-[1.1em]',
        isNodeType(HEADING_KEYS.h6) && 'pb-0',
        isNodeType(ParagraphPlugin.key) && 'pt-1 pb-0',
        isNodeType(['ul', 'ol']) && 'pb-0',
        isNodeType(BlockquotePlugin.key) && 'pb-0',
        isNodeType(CodeBlockPlugin.key) && 'pt-6 pb-0',
        isNodeType([
          ImagePlugin.key,
          MediaEmbedPlugin.key,
          ExcalidrawPlugin.key,
          TogglePlugin.key,
          ColumnPlugin.key,
        ]) && 'py-0',
        isNodeType([PlaceholderPlugin.key, TablePlugin.key]) && 'pt-3 pb-0',
        isInColumn && 'mt-2 h-4 pt-0')
          
        }>
					<ToolbarGroup >
						<InsertDropdownMenu button={
              <Button variant="outline" size="icon" className="rounded-full bg-white z-10 cursor-pointer">
                <Plus className="size-4" />
                </Button>
            } />
					</ToolbarGroup>
				</Toolbar>
			)}
			{children}
		</div>
	);
};
