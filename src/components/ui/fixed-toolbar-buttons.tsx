"use client";

import * as React from 'react';

import {
  ArrowUpToLineIcon,
  BaselineIcon,
  BoldIcon,
  Code2Icon,
  HighlighterIcon,
  ItalicIcon,
  PaintBucketIcon,
  StrikethroughIcon,
  UnderlineIcon,
  WandSparklesIcon,
} from 'lucide-react';

import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';
import {
  FontBackgroundColorPlugin,
  FontColorPlugin,
} from '@udecode/plate-font/react';
import { HighlightPlugin } from '@udecode/plate-highlight/react';
import {
  AudioPlugin,
  FilePlugin,
  ImagePlugin,
  VideoPlugin,
} from '@udecode/plate-media/react';
import { useEditorReadOnly } from '@udecode/plate/react';

import { PLUGIN_KEY } from '../editor/use-create-editor';
import { AIToolbarButton } from './ai-toolbar-button';
import { AlignDropdownMenu } from './align-dropdown-menu';
import { ColorDropdownMenu } from './color-dropdown-menu';
import { CommentToolbarButton } from './comment-toolbar-button';
import { EmojiDropdownMenu } from './emoji-dropdown-menu';
import { ExportToolbarButton } from './export-toolbar-button';
import { FontSizeToolbarButton } from './font-size-toolbar-button';
import {
  RedoToolbarButton,
  UndoToolbarButton,
} from './history-toolbar-button';
import { ImportToolbarButton } from './import-toolbar-button';
import {
  BulletedIndentListToolbarButton,
  NumberedIndentListToolbarButton,
} from './indent-list-toolbar-button';
import { IndentTodoToolbarButton } from './indent-todo-toolbar-button';
import { IndentToolbarButton } from './indent-toolbar-button';
import { InsertDropdownMenu } from './insert-dropdown-menu';
import { LineHeightDropdownMenu } from './line-height-dropdown-menu';
import { LinkToolbarButton } from './link-toolbar-button';
import { MarkToolbarButton } from './mark-toolbar-button';
import { MediaToolbarButton } from './media-toolbar-button';
import { ModeDropdownMenu } from './mode-dropdown-menu';
import { MoreDropdownMenu } from './more-dropdown-menu';
import { OutdentToolbarButton } from './outdent-toolbar-button';
import { TableDropdownMenu } from './table-dropdown-menu';
import { ToggleToolbarButton } from './toggle-toolbar-button';
import { ToolbarGroup } from './toolbar';
import { TurnIntoDropdownMenu } from './turn-into-dropdown-menu';

export function FixedToolbarButtons({allows, groupClass}:{allows:PLUGIN_KEY[], groupClass?:string}) {
	const readOnly = useEditorReadOnly();

	return (
		<>
			{!readOnly && (
				<>
					<ToolbarGroup className={groupClass || ""}>
						{allows.includes("undo") && <UndoToolbarButton />}
						{allows.includes("redo") && <RedoToolbarButton />}
					</ToolbarGroup>

					<ToolbarGroup className={groupClass || ""}>
						{
							allows.includes("ai") && <AIToolbarButton tooltip="AI commands">
							<WandSparklesIcon />
						</AIToolbarButton>
						}
					</ToolbarGroup>

					<ToolbarGroup className={groupClass || ""}>
						{
							allows.includes("export") && <ExportToolbarButton>
							<ArrowUpToLineIcon />
						</ExportToolbarButton>
						}
						{
							allows.includes("import") && <ImportToolbarButton />
						}

					</ToolbarGroup>

					<ToolbarGroup className={groupClass || ""}>
						{
							allows.includes("insert") && <InsertDropdownMenu />
						}
						{
							allows.includes("turn_into") && <TurnIntoDropdownMenu />
						}
						{
							allows.includes("font_size") && <FontSizeToolbarButton />
						}
					</ToolbarGroup>

					<ToolbarGroup className={groupClass || ""}>
						{
							allows.includes("bold") && <MarkToolbarButton nodeType={BoldPlugin.key} tooltip="Bold (⌘+B)">
								<BoldIcon />
							</MarkToolbarButton>
						}

						{
							allows.includes("italic") && <MarkToolbarButton nodeType={ItalicPlugin.key} tooltip="Italic (⌘+I)">
								<ItalicIcon />
							</MarkToolbarButton>
						}

						{
							allows.includes("underline") && <MarkToolbarButton nodeType={UnderlinePlugin.key} tooltip="Underline (⌘+U)">
								<UnderlineIcon />
							</MarkToolbarButton>
						}

						{
							allows.includes("strikethrough") && <MarkToolbarButton nodeType={StrikethroughPlugin.key} tooltip="Strikethrough (⌘+⇧+M)">
								<StrikethroughIcon />
							</MarkToolbarButton>
						}

						{
							allows.includes("code") && <MarkToolbarButton nodeType={CodePlugin.key} tooltip="Code (⌘+E)">
								<Code2Icon />
							</MarkToolbarButton>
						}
						{
							allows.includes("font_color") && <ColorDropdownMenu nodeType={FontColorPlugin.key} tooltip="Text color">
								<BaselineIcon />
							</ColorDropdownMenu>
						}
						{
							allows.includes("background_color") && <ColorDropdownMenu nodeType={FontBackgroundColorPlugin.key} tooltip="Background color">
								<PaintBucketIcon />
							</ColorDropdownMenu>
						}
					</ToolbarGroup>

					<ToolbarGroup className={groupClass || ""}>
						{
							allows.includes("align") && <AlignDropdownMenu />
						}
						{
							allows.includes("indent_list") && <NumberedIndentListToolbarButton />
						}
						{
							allows.includes("bulleted_list") && <BulletedIndentListToolbarButton />
						}
						{
							allows.includes("indent_todo") && <IndentTodoToolbarButton />
						}
						{
							allows.includes("toggle") && <ToggleToolbarButton />
						}

					</ToolbarGroup>

					<ToolbarGroup className={groupClass || ""}>
						{
							allows.includes("link") && <LinkToolbarButton />
						}
						{
							allows.includes("table") && <TableDropdownMenu />
						}
						{
							allows.includes("emoji") && <EmojiDropdownMenu />
						}
					</ToolbarGroup>

					<ToolbarGroup className={groupClass || ""}>
						{
							allows.includes("image") && <MediaToolbarButton nodeType={ImagePlugin.key} />
						}
						{
							allows.includes("video") && <MediaToolbarButton nodeType={VideoPlugin.key} />
						}
						{
							allows.includes("audio") && <MediaToolbarButton nodeType={AudioPlugin.key} />
						}
						{
							allows.includes("file") && <MediaToolbarButton nodeType={FilePlugin.key} />
						}
					</ToolbarGroup>

					<ToolbarGroup className={groupClass || ""}>
						{
							allows.includes("line_height") && <LineHeightDropdownMenu />
						}
						{
							allows.includes("outdent") && <OutdentToolbarButton />
						}
						{
							allows.includes("indent") && <IndentToolbarButton />
						}
					</ToolbarGroup>

					<ToolbarGroup className={groupClass || ""}>
						{
							allows.includes("more") && <MoreDropdownMenu />
						}
					</ToolbarGroup>
				</>
			)}

			<div className="grow" />

			<ToolbarGroup className={groupClass || ""}>
				{
					allows.includes("highlight") && <MarkToolbarButton nodeType={HighlightPlugin.key} tooltip="Highlight">
						<HighlighterIcon />
					</MarkToolbarButton>
				}
				{
					allows.includes("comment") && <CommentToolbarButton />
				}
			</ToolbarGroup>

			<ToolbarGroup className={groupClass || ""}>
				{
					allows.includes("mode") && <ModeDropdownMenu />
				}
			</ToolbarGroup>
		</>
	);
}