"use client";

import * as React from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Toaster } from 'sonner';

import { Plate } from '@udecode/plate/react';

import {
  PLUGIN_DEFAULTS,
  PLUGIN_KEY,
  useCreateEditor,
} from '../../components/editor/use-create-editor';
import {
  Editor,
  EditorContainer,
  EditorProps,
} from '../../components/ui/editor';
import {
  SettingsDialog,
  SettingsProvider,
} from './settings';

export type TEditorProps = {
	isToolbar?: boolean;
	isFloating?: boolean;
  allowPlugins?: PLUGIN_KEY[];
  toolbarClasses?: {className?: string; groupClass?: string };
	isSettingDialog?: boolean;
  ref?: React.Ref<HTMLDivElement>;
} & EditorProps
export const TEditor: React.FC<TEditorProps> = ({ isToolbar = true, isFloating = true, isSettingDialog = true, allowPlugins = PLUGIN_DEFAULTS, toolbarClasses, ref, ...props}) => {
	const editor = useCreateEditor({
		isFixedToolbar: isToolbar,
		isFloatingToolbar: isFloating,
    allowPlugins: allowPlugins,
    toolbarClasses: toolbarClasses,
	}, [isToolbar, isFloating, allowPlugins, toolbarClasses]);  

	return (
		<div className="h-screen w-full" data-registry="plate">
			<SettingsProvider>
				<DndProvider backend={HTML5Backend}>
					<Plate editor={editor} >
						<EditorContainer >
							<Editor ref={ref} variant={props.variant} {...props} />
						</EditorContainer>

						{isSettingDialog && <SettingsDialog />}
					</Plate>
				</DndProvider>
			</SettingsProvider>
      <Toaster />
		</div>
	);
}