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

import { AIToolbarButton } from '../ui/ai-toolbar-button';
import { AlignDropdownMenu } from '../ui/align-dropdown-menu';
import { ColorDropdownMenu } from '../ui/color-dropdown-menu';
import { CommentToolbarButton } from '../ui/comment-toolbar-button';
import { EmojiDropdownMenu } from '../ui/emoji-dropdown-menu';
import { ExportToolbarButton } from '../ui/export-toolbar-button';
import { FontSizeToolbarButton } from '../ui/font-size-toolbar-button';
import {
  RedoToolbarButton,
  UndoToolbarButton,
} from '../ui/history-toolbar-button';
import { ImportToolbarButton } from '../ui/import-toolbar-button';
import {
  BulletedIndentListToolbarButton,
  NumberedIndentListToolbarButton,
} from '../ui/indent-list-toolbar-button';
import { IndentTodoToolbarButton } from '../ui/indent-todo-toolbar-button';
import { IndentToolbarButton } from '../ui/indent-toolbar-button';
import { InsertDropdownMenu } from '../ui/insert-dropdown-menu';
import { LineHeightDropdownMenu } from '../ui/line-height-dropdown-menu';
import { LinkToolbarButton } from '../ui/link-toolbar-button';
import { MarkToolbarButton } from '../ui/mark-toolbar-button';
import { MediaToolbarButton } from '../ui/media-toolbar-button';
import { ModeDropdownMenu } from '../ui/mode-dropdown-menu';
import { MoreDropdownMenu } from '../ui/more-dropdown-menu';
import { OutdentToolbarButton } from '../ui/outdent-toolbar-button';
import { TableDropdownMenu } from '../ui/table-dropdown-menu';
import { ToggleToolbarButton } from '../ui/toggle-toolbar-button';
import {
  Toolbar,
  ToolbarGroup,
} from '../ui/toolbar';
import { TurnIntoDropdownMenu } from '../ui/turn-into-dropdown-menu';

export const Undo = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<UndoToolbarButton />
			</ToolbarGroup>
		</Toolbar>
	);
};

export const Redo = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<RedoToolbarButton />
			</ToolbarGroup>
		</Toolbar>
	);
};

export const AI = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<AIToolbarButton />
			</ToolbarGroup>
		</Toolbar>
	);
};

export const Export = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<ExportToolbarButton>
					<ArrowUpToLineIcon />
				</ExportToolbarButton>
			</ToolbarGroup>
		</Toolbar>
	);
};

export const Import = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<ImportToolbarButton />
			</ToolbarGroup>
		</Toolbar>
	);
};

export const Insert = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<InsertDropdownMenu />
			</ToolbarGroup>
		</Toolbar>
	);
};

export const TurnInto = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<TurnIntoDropdownMenu />
			</ToolbarGroup>
		</Toolbar>
	);
};

export const FontSize = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<FontSizeToolbarButton />
			</ToolbarGroup>
		</Toolbar>
	);
};

export const Bold = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<MarkToolbarButton nodeType={BoldPlugin.key} tooltip="Bold (⌘+B)">
					<BoldIcon />
				</MarkToolbarButton>
			</ToolbarGroup>
		</Toolbar>
	);
};

export const Italic = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<MarkToolbarButton nodeType={ItalicPlugin.key} tooltip="Italic (⌘+I)">
					<ItalicIcon />
				</MarkToolbarButton>
			</ToolbarGroup>
		</Toolbar>
	);
};

export const Underline = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<MarkToolbarButton nodeType={UnderlinePlugin.key} tooltip="Underline (⌘+U)">
					<UnderlineIcon />
				</MarkToolbarButton>
			</ToolbarGroup>
		</Toolbar>
	);
};

export const StrikeThrough = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<MarkToolbarButton nodeType={StrikethroughPlugin.key} tooltip="Strikethrough (⌘+⇧+M)">
					<StrikethroughIcon />
				</MarkToolbarButton>
			</ToolbarGroup>
		</Toolbar>
	);
};

export const Code = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<MarkToolbarButton nodeType={CodePlugin.key} tooltip="Code (⌘+E)">
					<Code2Icon />
				</MarkToolbarButton>
			</ToolbarGroup>
		</Toolbar>
	);
};

export const FontColor = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<ColorDropdownMenu nodeType={FontColorPlugin.key} tooltip="Text color">
					<BaselineIcon />
				</ColorDropdownMenu>
			</ToolbarGroup>
		</Toolbar>
	);
};

export const BackgroundColor = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<ColorDropdownMenu nodeType={FontBackgroundColorPlugin.key} tooltip="Background color">
					<PaintBucketIcon />
				</ColorDropdownMenu>
			</ToolbarGroup>
		</Toolbar>
	);
};

export const Align = () => {
	return (
		<Toolbar
			style={{
				padding: 0,
				border: "none",
			}}
		>
			<ToolbarGroup
				style={{
					padding: 0,
					border: "none",
				}}
			>
				<AlignDropdownMenu />
			</ToolbarGroup>
		</Toolbar>
	);
};

export const NumberIndentList = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
        <NumberedIndentListToolbarButton />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const BulletedIndentList = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
        <BulletedIndentListToolbarButton />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const TodoIndentList = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
        <IndentTodoToolbarButton />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const Toggle = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
        <ToggleToolbarButton />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const Link = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
        <LinkToolbarButton />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const Table = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
        <TableDropdownMenu />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const Emoji = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
        <EmojiDropdownMenu />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const ImageMedia = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
        <MediaToolbarButton nodeType={ImagePlugin.key} />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const VideoMedia = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
        <MediaToolbarButton nodeType={VideoPlugin.key} />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const AudioMedia = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
        <MediaToolbarButton nodeType={AudioPlugin.key} />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const FileMedia = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
        <MediaToolbarButton nodeType={FilePlugin.key} />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const LineHeight = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
       <LineHeightDropdownMenu />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const Outdent = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
        <OutdentToolbarButton />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const Indent = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
       <IndentToolbarButton />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const More = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
       <MoreDropdownMenu />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const Highlight = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
       <MarkToolbarButton nodeType={HighlightPlugin.key} tooltip="Highlight">
						<HighlighterIcon />
					</MarkToolbarButton>
      </ToolbarGroup>
    </Toolbar>
  );
};

export const Comment = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
       <CommentToolbarButton />
      </ToolbarGroup>
    </Toolbar>
  );
};

export const Mode = () => {
  return (
    <Toolbar
      style={{
        padding: 0,
        border: "none",
      }}
    >
      <ToolbarGroup
        style={{
          padding: 0,
          border: "none",
        }}
      >
       <ModeDropdownMenu />
      </ToolbarGroup>
    </Toolbar>
  );
};