import React from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Plate } from '@udecode/plate/react';

import {
  Editor,
  EditorContainer,
  EditorProps,
} from '../ui/editor';
import { SettingsProvider } from './settings';
import {
  PLUGIN_DEFAULTS,
  PLUGIN_KEY,
  useCreateEditor,
} from './use-create-editor';

export type EditorProviderProps = {
  children: React.ReactNode;
  isToolbar?: boolean;
  isFloating?: boolean;
  allowPlugins?: PLUGIN_KEY[];
  toolbarClasses?: {
    className?: string;
    groupClass?: string;
  };
};

export const EditorProvider: React.FC<EditorProviderProps> = ({
  children,
  isToolbar = true,
  isFloating = true,
  allowPlugins = PLUGIN_DEFAULTS,
  toolbarClasses,
}):any => {
  const editor = useCreateEditor(
    {
      isFixedToolbar: isToolbar,
      isFloatingToolbar: isFloating,
      allowPlugins,
      toolbarClasses,
    },
    [isToolbar, isFloating, allowPlugins, toolbarClasses]
  );

  return (
    <div className="h-screen w-full" data-registry="plate">
      <SettingsProvider>
        <DndProvider backend={HTML5Backend}>
          <Plate editor={editor}>{children}</Plate>
        </DndProvider>
      </SettingsProvider>
    </div>
  );
};


export type TEditorProps = EditorProps & {
  editorRef?: React.Ref<HTMLDivElement>;
};

export const CoreEditor: React.FC<TEditorProps> = ({ editorRef, ...props }):any => {
  return (
    <EditorContainer>
      <Editor ref={editorRef} {...props} />
    </EditorContainer>
  );
};



// export type TEditorProps = {
// 	isToolbar?: boolean;
// 	isFloating?: boolean;
//   allowPlugins?: PLUGIN_KEY[];
//   toolbarClasses?: {className?: string; groupClass?: string };
// 	isSettingDialog?: boolean;
//   ref?: React.Ref<HTMLDivElement>;
// } & EditorProps
// export const TEditor: React.FC<TEditorProps> = ({ isToolbar = true, isFloating = true, isSettingDialog = true, allowPlugins = PLUGIN_DEFAULTS, toolbarClasses, ref, ...props}) => {
// 	const editor = useCreateEditor({
// 		isFixedToolbar: isToolbar,
// 		isFloatingToolbar: isFloating,
//     allowPlugins: allowPlugins,
//     toolbarClasses: toolbarClasses,
// 	}, [isToolbar, isFloating, allowPlugins, toolbarClasses]);  

// 	return (
// 		<div className="h-screen w-full" data-registry="plate">
// 			<SettingsProvider>
// 				<DndProvider backend={HTML5Backend}>
// 					<Plate editor={editor} >
// 						<EditorContainer >
// 							<Editor ref={ref} variant={props.variant} {...props} />
// 						</EditorContainer>

// 						{isSettingDialog && <SettingsDialog />}
// 					</Plate>
// 				</DndProvider>
// 			</SettingsProvider>
//       <Toaster />
// 		</div>
// 	);
// }