"use client";

import * as React from "react";

import {
	BoldPlugin,
	CodePlugin,
	ItalicPlugin,
	StrikethroughPlugin,
	UnderlinePlugin,
} from "@udecode/plate-basic-marks/react";
import {useEditorReadOnly} from "@udecode/plate/react";
import {
	BoldIcon,
	Code2Icon,
	ItalicIcon,
	StrikethroughIcon,
	UnderlineIcon,
	WandSparklesIcon,
} from "lucide-react";

import {AIToolbarButton} from "./ai-toolbar-button";
import {CommentToolbarButton} from "./comment-toolbar-button";
import {InlineEquationToolbarButton} from "./inline-equation-toolbar-button";
import {LinkToolbarButton} from "./link-toolbar-button";
import {MarkToolbarButton} from "./mark-toolbar-button";
import {MoreDropdownMenu} from "./more-dropdown-menu";
import {SuggestionToolbarButton} from "./suggestion-toolbar-button";
import {ToolbarGroup} from "./toolbar";
import {TurnIntoDropdownMenu} from "./turn-into-dropdown-menu";
import {PLUGIN_KEY} from "../editor/use-create-editor";

export function FloatingToolbarButtons({
	allows,
	groupClass,
}: {
	allows: PLUGIN_KEY[];
	groupClass?: string;
}) {
	const readOnly = useEditorReadOnly();

	return (
		<>
			{!readOnly && (
				<>
					<ToolbarGroup className={groupClass || ""}>
						{allows.includes("ai") && (
							<AIToolbarButton tooltip="AI commands">
								<WandSparklesIcon />
								Ask AI
							</AIToolbarButton>
						)}
					</ToolbarGroup>

					<ToolbarGroup className={groupClass || ""}>
						{allows.includes("turn_into") && <TurnIntoDropdownMenu />}

						{allows.includes("bold") && (
							<MarkToolbarButton nodeType={BoldPlugin.key} tooltip="Bold (⌘+B)">
								<BoldIcon />
							</MarkToolbarButton>
						)}

						{allows.includes("italic") && (
							<MarkToolbarButton nodeType={ItalicPlugin.key} tooltip="Italic (⌘+I)">
								<ItalicIcon />
							</MarkToolbarButton>
						)}

						{allows.includes("underline") && (
							<MarkToolbarButton nodeType={UnderlinePlugin.key} tooltip="Underline (⌘+U)">
								<UnderlineIcon />
							</MarkToolbarButton>
						)}

						{allows.includes("strikethrough") && (
							<MarkToolbarButton nodeType={StrikethroughPlugin.key} tooltip="Strikethrough (⌘+⇧+M)">
								<StrikethroughIcon />
							</MarkToolbarButton>
						)}

						{allows.includes("code") && (
							<MarkToolbarButton nodeType={CodePlugin.key} tooltip="Code (⌘+E)">
								<Code2Icon />
							</MarkToolbarButton>
						)}

						{allows.includes("equation") && <InlineEquationToolbarButton />}
						{allows.includes("link") && <LinkToolbarButton />}
					</ToolbarGroup>
				</>
			)}

			<ToolbarGroup>
				{allows.includes("comment") && <CommentToolbarButton />}
				{allows.includes("suggestion") && <SuggestionToolbarButton />}

				{!readOnly && allows.includes("more") && <MoreDropdownMenu />}
			</ToolbarGroup>
		</>
	);
}
