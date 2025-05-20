"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all4) => {
  for (var name in all4)
    __defProp(target, name, { get: all4[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  ACTION_THREE_COLUMNS: () => ACTION_THREE_COLUMNS,
  AI: () => AI,
  Align: () => Align,
  ApiProvider: () => ApiProvider,
  AudioMedia: () => AudioMedia,
  BackgroundColor: () => BackgroundColor,
  BlockWithPlus: () => BlockWithPlus,
  Bold: () => Bold,
  BulletedIndentList: () => BulletedIndentList,
  Code: () => Code,
  Comment: () => Comment2,
  CoreEditor: () => CoreEditor,
  EditorProvider: () => EditorProvider,
  Emoji: () => Emoji,
  Export: () => Export,
  FileMedia: () => FileMedia,
  FixedToolbarPlugin: () => FixedToolbarPlugin,
  FloatingToolbarPlugin: () => FloatingToolbarPlugin,
  FontColor: () => FontColor,
  FontSize: () => FontSize,
  Highlight: () => Highlight,
  ImageMedia: () => ImageMedia,
  Import: () => Import,
  Indent: () => Indent2,
  Insert: () => Insert,
  Italic: () => Italic,
  LineHeight: () => LineHeight,
  Link: () => Link5,
  Mode: () => Mode,
  More: () => More,
  NumberIndentList: () => NumberIndentList,
  Outdent: () => Outdent2,
  PLUGIN_DEFAULTS: () => PLUGIN_DEFAULTS,
  PROMPT_TEMPLATES: () => PROMPT_TEMPLATES,
  Redo: () => Redo,
  STRUCTURAL_TYPES: () => STRUCTURAL_TYPES,
  SettingsDialog: () => SettingsDialog,
  SettingsProvider: () => SettingsProvider,
  StrikeThrough: () => StrikeThrough,
  Table: () => Table3,
  TodoIndentList: () => TodoIndentList,
  Toggle: () => Toggle,
  TurnInto: () => TurnInto,
  Underline: () => Underline,
  Undo: () => Undo,
  VideoMedia: () => VideoMedia,
  aiPlugins: () => aiPlugins,
  alignPlugin: () => alignPlugin,
  autoformatPlugin: () => autoformatPlugin,
  avatarUrl: () => avatarUrl,
  basicNodesPlugins: () => basicNodesPlugins,
  blockMenuPlugins: () => blockMenuPlugins,
  blockSelectionPlugins: () => blockSelectionPlugins,
  blockSelectionReadOnlyPlugin: () => blockSelectionReadOnlyPlugin,
  commentsPlugin: () => commentsPlugin,
  copilotPlugins: () => copilotPlugins,
  cursorOverlayPlugin: () => cursorOverlayPlugin,
  deletePlugins: () => deletePlugins,
  discussionPlugin: () => discussionPlugin,
  discussionsData: () => discussionsData,
  dndPlugins: () => dndPlugins,
  editorPlugins: () => editorPlugins,
  equationPlugins: () => equationPlugins,
  exitBreakPlugin: () => exitBreakPlugin,
  getBlockType: () => getBlockType,
  indentListPlugins: () => indentListPlugins,
  insertBlock: () => insertBlock,
  insertBlockMap: () => insertBlockMap,
  insertInlineElement: () => insertInlineElement,
  insertInlineMap: () => insertInlineMap,
  insertList: () => insertList,
  isSelectionAtTopLevel: () => isSelectionAtTopLevel,
  lineHeightPlugin: () => lineHeightPlugin,
  linkPlugin: () => linkPlugin,
  markdownPlugin: () => markdownPlugin,
  mediaPlugins: () => mediaPlugins,
  mentionPlugin: () => mentionPlugin,
  models: () => models,
  resetBlockTypePlugin: () => resetBlockTypePlugin,
  resetBlockTypesCodeBlockRule: () => resetBlockTypesCodeBlockRule,
  resetBlockTypesCommonRule: () => resetBlockTypesCommonRule,
  setBlockMap: () => setBlockMap,
  setBlockType: () => setBlockType,
  setList: () => setList,
  skipMarkPlugin: () => skipMarkPlugin,
  softBreakPlugin: () => softBreakPlugin,
  suggestionPlugin: () => suggestionPlugin,
  tablePlugin: () => tablePlugin,
  tocPlugin: () => tocPlugin,
  useApi: () => useApi,
  useApiContext: () => useApiContext,
  useApiMutation: () => useApiMutation,
  useChat: () => useChat,
  useCreateEditor: () => useCreateEditor,
  useSettings: () => useSettings,
  viewPlugins: () => viewPlugins
});
module.exports = __toCommonJS(index_exports);

// src/components/editor/core/element-wrapper.tsx
var import_react24 = require("react");
var import_lucide_react4 = require("lucide-react");
var import_plate2 = require("@udecode/plate");
var import_react25 = require("@udecode/plate-block-quote/react");
var import_react26 = require("@udecode/plate-code-block/react");
var import_react27 = require("@udecode/plate-excalidraw/react");
var import_plate_heading3 = require("@udecode/plate-heading");
var import_react28 = require("@udecode/plate-layout/react");
var import_react29 = require("@udecode/plate-media/react");
var import_react30 = require("@udecode/plate-table/react");
var import_react31 = require("@udecode/plate-toggle/react");
var import_react32 = require("@udecode/plate/react");

// src/libs/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/editor/ui/button.tsx
var import_class_variance_authority = require("class-variance-authority");
var import_react_slot = require("@radix-ui/react-slot");
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/editor/ui/insert-dropdown-menu.tsx
var React2 = __toESM(require("react"));
var import_lucide_react3 = require("lucide-react");
var import_react12 = require("@udecode/plate-block-quote/react");
var import_react13 = require("@udecode/plate-code-block/react");
var import_react14 = require("@udecode/plate-date/react");
var import_react15 = require("@udecode/plate-excalidraw/react");
var import_plate_heading2 = require("@udecode/plate-heading");
var import_react16 = require("@udecode/plate-heading/react");
var import_react17 = require("@udecode/plate-horizontal-rule/react");
var import_plate_indent_list2 = require("@udecode/plate-indent-list");
var import_react18 = require("@udecode/plate-link/react");
var import_react19 = require("@udecode/plate-math/react");
var import_react20 = require("@udecode/plate-media/react");
var import_react21 = require("@udecode/plate-table/react");
var import_react22 = require("@udecode/plate-toggle/react");
var import_react23 = require("@udecode/plate/react");

// src/components/editor/core/transforms.ts
var import_plate = require("@udecode/plate");
var import_plate_callout = require("@udecode/plate-callout");
var import_react = require("@udecode/plate-callout/react");
var import_plate_code_block = require("@udecode/plate-code-block");
var import_react2 = require("@udecode/plate-code-block/react");
var import_plate_date = require("@udecode/plate-date");
var import_react3 = require("@udecode/plate-date/react");
var import_plate_heading = require("@udecode/plate-heading");
var import_react4 = require("@udecode/plate-heading/react");
var import_plate_indent_list = require("@udecode/plate-indent-list");
var import_react5 = require("@udecode/plate-indent-list/react");
var import_plate_layout = require("@udecode/plate-layout");
var import_react6 = require("@udecode/plate-layout/react");
var import_react7 = require("@udecode/plate-link/react");
var import_plate_math = require("@udecode/plate-math");
var import_react8 = require("@udecode/plate-math/react");
var import_plate_media = require("@udecode/plate-media");
var import_react9 = require("@udecode/plate-media/react");
var import_react10 = require("@udecode/plate-suggestion/react");
var import_react11 = require("@udecode/plate-table/react");
var STRUCTURAL_TYPES = [
  import_react6.ColumnPlugin.key,
  import_react6.ColumnItemPlugin.key,
  import_react11.TablePlugin.key,
  import_react11.TableRowPlugin.key,
  import_react11.TableCellPlugin.key
];
var ACTION_THREE_COLUMNS = "action_three_columns";
var insertList = (editor, type) => {
  editor.tf.insertNodes(
    editor.api.create.block({
      indent: 1,
      listStyleType: type
    }),
    { select: true }
  );
};
var insertBlockMap = {
  [import_plate_indent_list.INDENT_LIST_KEYS.todo]: insertList,
  [import_plate_indent_list.ListStyleType.Decimal]: insertList,
  [import_plate_indent_list.ListStyleType.Disc]: insertList,
  [ACTION_THREE_COLUMNS]: (editor) => (0, import_plate_layout.insertColumnGroup)(editor, { columns: 3, select: true }),
  [import_react9.AudioPlugin.key]: (editor) => (0, import_plate_media.insertAudioPlaceholder)(editor, { select: true }),
  [import_react.CalloutPlugin.key]: (editor) => (0, import_plate_callout.insertCallout)(editor, { select: true }),
  [import_react2.CodeBlockPlugin.key]: (editor) => (0, import_plate_code_block.insertCodeBlock)(editor, { select: true }),
  [import_react8.EquationPlugin.key]: (editor) => (0, import_plate_math.insertEquation)(editor, { select: true }),
  [import_react9.FilePlugin.key]: (editor) => (0, import_plate_media.insertFilePlaceholder)(editor, { select: true }),
  [import_react9.ImagePlugin.key]: (editor) => (0, import_plate_media.insertMedia)(editor, {
    select: true,
    type: import_react9.ImagePlugin.key
  }),
  [import_react9.MediaEmbedPlugin.key]: (editor) => (0, import_plate_media.insertMedia)(editor, {
    select: true,
    type: import_react9.MediaEmbedPlugin.key
  }),
  [import_react11.TablePlugin.key]: (editor) => editor.getTransforms(import_react11.TablePlugin).insert.table({}, { select: true }),
  [import_react4.TocPlugin.key]: (editor) => (0, import_plate_heading.insertToc)(editor, { select: true }),
  [import_react9.VideoPlugin.key]: (editor) => (0, import_plate_media.insertVideoPlaceholder)(editor, { select: true })
};
var insertInlineMap = {
  [import_react3.DatePlugin.key]: (editor) => (0, import_plate_date.insertDate)(editor, { select: true }),
  [import_react8.InlineEquationPlugin.key]: (editor) => (0, import_plate_math.insertInlineEquation)(editor, "", { select: true }),
  [import_react7.LinkPlugin.key]: (editor) => (0, import_react7.triggerFloatingLink)(editor, { focused: true })
};
var insertBlock = (editor, type) => {
  editor.tf.withoutNormalizing(() => {
    const block = editor.api.block();
    if (!block) return;
    if (type in insertBlockMap) {
      insertBlockMap[type](editor, type);
    } else {
      editor.tf.insertNodes(editor.api.create.block({ type }), {
        at: import_plate.PathApi.next(block[1]),
        select: true
      });
    }
    if (getBlockType(block[0]) !== type) {
      editor.getApi(import_react10.SuggestionPlugin).suggestion.withoutSuggestions(() => {
        editor.tf.removeNodes({ previousEmptyBlock: true });
      });
    }
  });
};
var insertInlineElement = (editor, type) => {
  if (insertInlineMap[type]) {
    insertInlineMap[type](editor, type);
  }
};
var setList = (editor, type, entry) => {
  editor.tf.setNodes(
    editor.api.create.block({
      indent: 1,
      listStyleType: type
    }),
    {
      at: entry[1]
    }
  );
};
var setBlockMap = {
  [import_plate_indent_list.INDENT_LIST_KEYS.todo]: setList,
  [import_plate_indent_list.ListStyleType.Decimal]: setList,
  [import_plate_indent_list.ListStyleType.Disc]: setList,
  [ACTION_THREE_COLUMNS]: (editor) => (0, import_plate_layout.toggleColumnGroup)(editor, { columns: 3 })
};
var setBlockType = (editor, type, { at } = {}) => {
  editor.tf.withoutNormalizing(() => {
    const setEntry = (entry) => {
      const [node, path] = entry;
      if (node[import_react5.IndentListPlugin.key]) {
        editor.tf.unsetNodes([import_react5.IndentListPlugin.key, "indent"], { at: path });
      }
      if (type in setBlockMap) {
        return setBlockMap[type](editor, type, entry);
      }
      if (node.type !== type) {
        editor.tf.setNodes({ type }, { at: path });
      }
    };
    if (at) {
      const entry = editor.api.node(at);
      if (entry) {
        setEntry(entry);
        return;
      }
    }
    const entries = editor.api.blocks({ mode: "lowest" });
    entries.forEach((entry) => setEntry(entry));
  });
};
var getBlockType = (block) => {
  if (block[import_react5.IndentListPlugin.key]) {
    if (block[import_react5.IndentListPlugin.key] === import_plate_indent_list.ListStyleType.Decimal) {
      return import_plate_indent_list.ListStyleType.Decimal;
    } else if (block[import_react5.IndentListPlugin.key] === import_plate_indent_list.INDENT_LIST_KEYS.todo) {
      return import_plate_indent_list.INDENT_LIST_KEYS.todo;
    } else {
      return import_plate_indent_list.ListStyleType.Disc;
    }
  }
  return block.type;
};

// src/components/editor/ui/dropdown-menu.tsx
var import_lucide_react = require("lucide-react");
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_jsx_runtime2 = require("react/jsx-runtime");
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    DropdownMenuPrimitive.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...props
    }
  );
}
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function DropdownMenuSub({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    DropdownMenuPrimitive.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    DropdownMenuPrimitive.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    }
  );
}

// src/components/editor/ui/toolbar.tsx
var React = __toESM(require("react"));
var import_class_variance_authority2 = require("class-variance-authority");
var import_lucide_react2 = require("lucide-react");
var ToolbarPrimitive = __toESM(require("@radix-ui/react-toolbar"));
var TooltipPrimitive2 = __toESM(require("@radix-ui/react-tooltip"));

// src/components/editor/ui/separator.tsx
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
var import_jsx_runtime3 = require("react/jsx-runtime");
function Separator2({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator-root",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

// src/components/editor/ui/tooltip.tsx
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime4 = require("react/jsx-runtime");
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TooltipPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}

// src/components/editor/ui/toolbar.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function Toolbar({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    ToolbarPrimitive.Root,
    {
      className: cn("relative flex items-center select-none", className),
      ...props
    }
  );
}
function ToolbarToggleGroup2({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    ToolbarPrimitive.ToolbarToggleGroup,
    {
      className: cn("flex items-center", className),
      ...props
    }
  );
}
var toolbarButtonVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-checked:bg-accent aria-checked:text-accent-foreground aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    defaultVariants: {
      size: "default",
      variant: "default"
    },
    variants: {
      size: {
        default: "h-9 min-w-9 px-2",
        lg: "h-10 min-w-10 px-2.5",
        sm: "h-8 min-w-8 px-1.5"
      },
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      }
    }
  }
);
var dropdownArrowVariants = (0, import_class_variance_authority2.cva)(
  cn(
    "inline-flex items-center justify-center rounded-r-md text-sm font-medium text-foreground transition-colors disabled:pointer-events-none disabled:opacity-50"
  ),
  {
    defaultVariants: {
      size: "sm",
      variant: "default"
    },
    variants: {
      size: {
        default: "h-9 w-6",
        lg: "h-10 w-8",
        sm: "h-8 w-4"
      },
      variant: {
        default: "bg-transparent hover:bg-muted hover:text-muted-foreground aria-checked:bg-accent aria-checked:text-accent-foreground",
        outline: "border border-l-0 border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      }
    }
  }
);
var ToolbarButton = withTooltip(function ToolbarButton2({
  children,
  className,
  isDropdown,
  pressed,
  size = "sm",
  variant,
  ...props
}) {
  return typeof pressed === "boolean" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ToolbarToggleGroup2, { disabled: props.disabled, value: "single", type: "single", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    ToolbarToggleItem,
    {
      className: cn(
        toolbarButtonVariants({
          size,
          variant
        }),
        isDropdown && "justify-between gap-1 pr-1",
        className
      ),
      value: pressed ? "single" : "",
      ...props,
      children: isDropdown ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex flex-1 items-center gap-2 whitespace-nowrap", children }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_lucide_react2.ChevronDown,
          {
            className: "size-3.5 text-muted-foreground",
            "data-icon": true
          }
        ) })
      ] }) : children
    }
  ) }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    ToolbarPrimitive.Button,
    {
      className: cn(
        toolbarButtonVariants({
          size,
          variant
        }),
        isDropdown && "pr-1",
        className
      ),
      ...props,
      children
    }
  );
});
function ToolbarSplitButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    ToolbarButton,
    {
      className: cn("group flex gap-0 px-0 hover:bg-transparent", className),
      ...props
    }
  );
}
function ToolbarSplitButtonPrimary({
  children,
  className,
  size = "sm",
  variant,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "span",
    {
      className: cn(
        toolbarButtonVariants({
          size,
          variant
        }),
        "rounded-r-none",
        "group-data-[pressed=true]:bg-accent group-data-[pressed=true]:text-accent-foreground",
        className
      ),
      ...props,
      children
    }
  );
}
function ToolbarSplitButtonSecondary({
  className,
  size,
  variant,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "span",
    {
      className: cn(
        dropdownArrowVariants({
          size,
          variant
        }),
        "group-data-[pressed=true]:bg-accent group-data-[pressed=true]:text-accent-foreground",
        className
      ),
      onClick: (e) => e.stopPropagation(),
      role: "button",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react2.ChevronDown, { className: "size-3.5 text-muted-foreground", "data-icon": true })
    }
  );
}
function ToolbarToggleItem({
  className,
  size = "sm",
  variant,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    ToolbarPrimitive.ToggleItem,
    {
      className: cn(toolbarButtonVariants({ size, variant }), className),
      ...props
    }
  );
}
function ToolbarGroup({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "div",
    {
      className: cn(
        "group/toolbar-group",
        "relative hidden has-[button]:flex",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex items-center", children }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mx-1.5 py-0.5 group-last/toolbar-group:hidden!", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Separator2, { orientation: "vertical" }) })
      ]
    }
  );
}
function withTooltip(Component) {
  return function ExtendComponent({
    tooltip,
    tooltipContentProps,
    tooltipProps,
    tooltipTriggerProps,
    ...props
  }) {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
      setMounted(true);
    }, []);
    const component = /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Component, { ...props });
    if (tooltip && mounted) {
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Tooltip, { ...tooltipProps, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TooltipTrigger, { asChild: true, ...tooltipTriggerProps, children: component }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TooltipContent2, { ...tooltipContentProps, children: tooltip })
      ] });
    }
    return component;
  };
}
function TooltipContent2({
  children,
  className,
  // CHANGE
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TooltipPrimitive2.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    TooltipPrimitive2.Content,
    {
      className: cn(
        "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md bg-primary px-3 py-1.5 text-xs text-balance text-primary-foreground",
        className
      ),
      "data-slot": "tooltip-content",
      sideOffset,
      ...props,
      children
    }
  ) });
}
function ToolbarMenuGroup({
  children,
  className,
  label,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      DropdownMenuSeparator,
      {
        className: cn(
          "hidden",
          "mb-0 shrink-0 peer-has-[[role=menuitem]]/menu-group:block peer-has-[[role=menuitemradio]]/menu-group:block peer-has-[[role=option]]/menu-group:block"
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      DropdownMenuRadioGroup,
      {
        ...props,
        className: cn(
          "hidden",
          "peer/menu-group group/menu-group my-1.5 has-[[role=menuitem]]:block has-[[role=menuitemradio]]:block has-[[role=option]]:block",
          className
        ),
        children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DropdownMenuLabel, { className: "text-xs font-semibold text-muted-foreground select-none", children: label }),
          children
        ]
      }
    )
  ] });
}

// src/components/editor/ui/insert-dropdown-menu.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var groups = [
  {
    group: "Basic blocks",
    items: [
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.PilcrowIcon, {}),
        label: "Paragraph",
        value: import_react23.ParagraphPlugin.key
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.Heading1Icon, {}),
        label: "Heading 1",
        value: import_plate_heading2.HEADING_KEYS.h1
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.Heading2Icon, {}),
        label: "Heading 2",
        value: import_plate_heading2.HEADING_KEYS.h2
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.Heading3Icon, {}),
        label: "Heading 3",
        value: import_plate_heading2.HEADING_KEYS.h3
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.TableIcon, {}),
        label: "Table",
        value: import_react21.TablePlugin.key
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.FileCodeIcon, {}),
        label: "Code",
        value: import_react13.CodeBlockPlugin.key
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.QuoteIcon, {}),
        label: "Quote",
        value: import_react12.BlockquotePlugin.key
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.MinusIcon, {}),
        label: "Divider",
        value: import_react17.HorizontalRulePlugin.key
      }
    ].map((item) => ({
      ...item,
      onSelect: (editor, value) => {
        insertBlock(editor, value);
      }
    }))
  },
  {
    group: "Lists",
    items: [
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.ListIcon, {}),
        label: "Bulleted list",
        value: import_plate_indent_list2.ListStyleType.Disc
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.ListOrderedIcon, {}),
        label: "Numbered list",
        value: import_plate_indent_list2.ListStyleType.Decimal
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.SquareIcon, {}),
        label: "To-do list",
        value: import_plate_indent_list2.INDENT_LIST_KEYS.todo
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.ChevronRightIcon, {}),
        label: "Toggle list",
        value: import_react22.TogglePlugin.key
      }
    ].map((item) => ({
      ...item,
      onSelect: (editor, value) => {
        insertBlock(editor, value);
      }
    }))
  },
  {
    group: "Media",
    items: [
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.ImageIcon, {}),
        label: "Image",
        value: import_react20.ImagePlugin.key
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.FilmIcon, {}),
        label: "Embed",
        value: import_react20.MediaEmbedPlugin.key
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.PenToolIcon, {}),
        label: "Excalidraw",
        value: import_react15.ExcalidrawPlugin.key
      }
    ].map((item) => ({
      ...item,
      onSelect: (editor, value) => {
        insertBlock(editor, value);
      }
    }))
  },
  {
    group: "Advanced blocks",
    items: [
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.TableOfContentsIcon, {}),
        label: "Table of contents",
        value: import_react16.TocPlugin.key
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.Columns3Icon, {}),
        label: "3 columns",
        value: "action_three_columns"
      },
      {
        focusEditor: false,
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.RadicalIcon, {}),
        label: "Equation",
        value: import_react19.EquationPlugin.key
      }
    ].map((item) => ({
      ...item,
      onSelect: (editor, value) => {
        insertBlock(editor, value);
      }
    }))
  },
  {
    group: "Inline",
    items: [
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.Link2Icon, {}),
        label: "Link",
        value: import_react18.LinkPlugin.key
      },
      {
        focusEditor: true,
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.CalendarIcon, {}),
        label: "Date",
        value: import_react14.DatePlugin.key
      },
      {
        focusEditor: false,
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.RadicalIcon, {}),
        label: "Inline Equation",
        value: import_react19.InlineEquationPlugin.key
      }
    ].map((item) => ({
      ...item,
      onSelect: (editor, value) => {
        insertInlineElement(editor, value);
      }
    }))
  }
];
function InsertDropdownMenu({ button, props }) {
  const editor = (0, import_react23.useEditorRef)();
  const [open, setOpen] = React2.useState(false);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DropdownMenuTrigger, { asChild: true, children: !button ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ToolbarButton, { pressed: open, tooltip: "Insert", isDropdown: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.PlusIcon, {}) }) : button }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      DropdownMenuContent,
      {
        className: "flex max-h-[500px] min-w-0 flex-col overflow-y-auto",
        align: "start",
        children: groups.map(({ group, items: nestedItems }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ToolbarMenuGroup, { label: group, children: nestedItems.map(({ icon, label, value, onSelect }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          DropdownMenuItem,
          {
            className: "min-w-[180px]",
            onSelect: () => {
              onSelect(editor, value);
              editor.tf.focus();
            },
            children: [
              icon,
              label
            ]
          },
          value
        )) }, group))
      }
    )
  ] });
}

// src/components/editor/core/element-wrapper.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var isSelectionAtTopLevel = (editor) => {
  const { selection } = editor;
  if (!selection) return false;
  const anchorPathDepth = selection.anchor.path.length;
  const focusPathDepth = selection.focus.path.length;
  return anchorPathDepth === 2 && focusPathDepth === 2;
};
var BlockWithPlus = ({ children, element }) => {
  const isSelected = (0, import_react32.useSelected)();
  const isReadOnly = (0, import_react32.useReadOnly)();
  const editor = (0, import_react32.useEditorRef)();
  const path = (0, import_react32.usePath)();
  const isNodeType = (keys) => (0, import_plate2.isType)(editor, element, keys);
  const isInColumn = path.length === 3;
  const [count, setCount] = (0, import_react24.useState)(0);
  (0, import_react24.useEffect)(() => {
    const selection = editor?.selection;
    if (!selection || !editor?.children?.length) {
      setCount(0);
      return;
    }
    const anchorPath = selection.anchor.path[0];
    const focusPath = selection.focus.path[0];
    const [start, end] = anchorPath < focusPath ? [anchorPath, focusPath] : [focusPath, anchorPath];
    const selectedBlocks = editor.children.slice(start, end + 1);
    setCount(selectedBlocks.length);
  }, [editor.selection]);
  const isActive = isSelected && !isReadOnly && count === 1 && isSelectionAtTopLevel(editor);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      className: "relative group",
      children: [
        isActive && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Toolbar, { className: cn(
          "absolute -left-16 -mt-2 z-10",
          isNodeType(import_plate_heading3.HEADING_KEYS.h1) && "pb-1 text-[1.875em]",
          isNodeType(import_plate_heading3.HEADING_KEYS.h2) && "pb-1 text-[1.5em]",
          isNodeType(import_plate_heading3.HEADING_KEYS.h3) && "pt-[2px] pb-1 text-[1.25em]",
          isNodeType([import_plate_heading3.HEADING_KEYS.h4, import_plate_heading3.HEADING_KEYS.h5]) && "pt-1 pb-0 text-[1.1em]",
          isNodeType(import_plate_heading3.HEADING_KEYS.h6) && "pb-0",
          isNodeType(import_react32.ParagraphPlugin.key) && "pt-1 pb-0",
          isNodeType(["ul", "ol"]) && "pb-0",
          isNodeType(import_react25.BlockquotePlugin.key) && "pb-0",
          isNodeType(import_react26.CodeBlockPlugin.key) && "pt-6 pb-0",
          isNodeType([
            import_react29.ImagePlugin.key,
            import_react29.MediaEmbedPlugin.key,
            import_react27.ExcalidrawPlugin.key,
            import_react31.TogglePlugin.key,
            import_react28.ColumnPlugin.key
          ]) && "py-0",
          isNodeType([import_react29.PlaceholderPlugin.key, import_react30.TablePlugin.key]) && "pt-3 pb-0",
          isInColumn && "mt-2 h-4 pt-0"
        ), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ToolbarGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(InsertDropdownMenu, { button: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { variant: "outline", size: "icon", className: "rounded-full bg-white z-10 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react4.Plus, { className: "size-4" }) }) }) }) }),
        children
      ]
    }
  );
};

// src/components/editor/core/plate-editor.tsx
var import_react_dnd = require("react-dnd");
var import_react_dnd_html5_backend = require("react-dnd-html5-backend");
var import_react322 = require("@udecode/plate/react");

// src/components/editor/ui/editor.tsx
var React4 = __toESM(require("react"));
var import_class_variance_authority3 = require("class-variance-authority");
var import_react33 = require("@udecode/plate/react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var editorContainerVariants = (0, import_class_variance_authority3.cva)(
  "relative w-full cursor-text overflow-y-auto caret-primary select-text selection:bg-brand/25 focus-visible:outline-none [&_.slate-selection-area]:z-50 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-brand/25 [&_.slate-selection-area]:bg-brand/15",
  {
    defaultVariants: {
      variant: "default"
    },
    variants: {
      variant: {
        comment: cn(
          "flex flex-wrap justify-between gap-1 px-1 py-0.5 text-sm",
          "rounded-md border-[1.5px] border-transparent bg-transparent",
          "has-[[data-slate-editor]:focus]:border-brand/50 has-[[data-slate-editor]:focus]:ring-2 has-[[data-slate-editor]:focus]:ring-brand/30",
          "has-aria-disabled:border-input has-aria-disabled:bg-muted"
        ),
        default: "h-full",
        demo: "h-[650px]",
        select: cn(
          "group rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          "has-data-readonly:w-fit has-data-readonly:cursor-default has-data-readonly:border-transparent has-data-readonly:focus-within:[box-shadow:none]"
        )
      }
    }
  }
);
var EditorContainer = ({
  className,
  variant,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_react33.PlateContainer,
    {
      className: cn(
        "ignore-click-outside/toolbar",
        editorContainerVariants({ variant }),
        className
      ),
      ...props
    }
  );
};
EditorContainer.displayName = "EditorContainer";
var editorVariants = (0, import_class_variance_authority3.cva)(
  cn(
    "group/editor",
    "relative w-full cursor-text overflow-x-hidden break-words whitespace-pre-wrap select-text",
    "rounded-md ring-offset-background focus-visible:outline-none",
    "placeholder:text-muted-foreground/80 **:data-slate-placeholder:top-[auto_!important] **:data-slate-placeholder:text-muted-foreground/80 **:data-slate-placeholder:opacity-100!",
    "[&_strong]:font-bold"
  ),
  {
    defaultVariants: {
      variant: "default"
    },
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-50"
      },
      focused: {
        true: "ring-2 ring-ring ring-offset-2"
      },
      variant: {
        ai: "w-full px-0 text-base md:text-sm",
        aiChat: "max-h-[min(70vh,320px)] w-full max-w-[700px] overflow-y-auto px-3 py-2 text-base md:text-sm",
        comment: cn("rounded-none border-none bg-transparent text-sm"),
        default: "size-full px-16 pt-4 pb-72 text-base sm:px-[max(64px,calc(50%-350px))]",
        demo: "size-full px-16 pt-4 pb-72 text-base sm:px-[max(64px,calc(50%-350px))]",
        fullWidth: "size-full px-16 pt-4 pb-72 text-base sm:px-24",
        none: "",
        select: "px-3 py-2 text-base data-readonly:w-fit"
      }
    }
  }
);
var Editor = React4.forwardRef(
  ({ className, disabled, focused, variant, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      import_react33.PlateContent,
      {
        ref,
        className: cn(
          editorVariants({
            disabled,
            focused,
            variant
          }),
          className
        ),
        disabled,
        disableDefaultStyles: true,
        ...props
      }
    );
  }
);
Editor.displayName = "Editor";

// src/components/editor/core/settings.tsx
var React5 = __toESM(require("react"));
var import_lucide_react7 = require("lucide-react");
var import_react34 = require("@udecode/plate-ai/react");
var import_react35 = require("@udecode/plate/react");

// src/components/editor/ui/command.tsx
var import_cmdk = require("cmdk");
var import_lucide_react6 = require("lucide-react");

// src/components/editor/ui/dialog.tsx
var import_lucide_react5 = require("lucide-react");
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_jsx_runtime9 = require("react/jsx-runtime");
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(DialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(DialogPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react5.XIcon, {}),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/components/editor/ui/command.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_cmdk.Command,
    {
      "data-slot": "command",
      className: cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      ),
      ...props
    }
  );
}
function CommandInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react6.SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          import_cmdk.Command.Input,
          {
            "data-slot": "command-input",
            className: cn(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              className
            ),
            ...props
          }
        )
      ]
    }
  );
}
function CommandList({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_cmdk.Command.List,
    {
      "data-slot": "command-list",
      className: cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      ),
      ...props
    }
  );
}
function CommandEmpty({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_cmdk.Command.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...props
    }
  );
}
function CommandGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_cmdk.Command.Group,
    {
      "data-slot": "command-group",
      className: cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      ),
      ...props
    }
  );
}
function CommandItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_cmdk.Command.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}

// src/components/editor/ui/input.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// src/components/editor/ui/popover.tsx
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime12 = require("react/jsx-runtime");
function Popover({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PopoverPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    PopoverPrimitive.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}
function PopoverAnchor({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PopoverPrimitive.Anchor, { "data-slot": "popover-anchor", ...props });
}

// src/components/editor/core/settings.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var models = [
  { label: "gpt-4o-mini", value: "gpt-4o-mini" },
  { label: "gpt-4o", value: "gpt-4o" },
  { label: "gpt-4-turbo", value: "gpt-4-turbo" },
  { label: "gpt-4", value: "gpt-4" },
  { label: "gpt-3.5-turbo", value: "gpt-3.5-turbo" },
  { label: "gpt-3.5-turbo-instruct", value: "gpt-3.5-turbo-instruct" },
  { label: "openai/gpt-4o", value: "openai/gpt-4o" }
];
var SettingsContext = React5.createContext(
  void 0
);
function SettingsProvider({ children }) {
  const [keys, setKeys] = React5.useState({
    openai: "",
    uploadthing: ""
  });
  const [model, setModel] = React5.useState(models[6]);
  const setKey = (service, key) => {
    setKeys((prev) => ({ ...prev, [service]: key }));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SettingsContext.Provider, { value: { keys, model, setKey, setModel }, children });
}
function useSettings() {
  const context = React5.useContext(SettingsContext);
  return context ?? {
    keys: {
      openai: "",
      uploadthing: ""
    },
    model: models[6],
    setKey: () => {
    },
    setModel: () => {
    }
  };
}
function SettingsDialog() {
  const { keys, model, setKey, setModel } = useSettings();
  const [tempKeys, setTempKeys] = React5.useState(keys);
  const [showKey, setShowKey] = React5.useState({});
  const [open, setOpen] = React5.useState(false);
  const [openModel, setOpenModel] = React5.useState(false);
  const { getOptions, setOption } = (0, import_react35.useEditorPlugin)(import_react34.CopilotPlugin);
  const handleSubmit = (e) => {
    e.preventDefault();
    Object.entries(tempKeys).forEach(([service, key]) => {
      setKey(service, key);
    });
    setOpen(false);
    const completeOptions = getOptions().completeOptions ?? {};
    setOption("completeOptions", {
      ...completeOptions,
      body: {
        ...completeOptions.body,
        apiKey: tempKeys.openai,
        model: model.value
      }
    });
  };
  const toggleKeyVisibility = (key) => {
    setShowKey((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const renderApiKeyInput = (service, label) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "group relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "label",
        {
          className: "absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground",
          htmlFor: label,
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "inline-flex bg-background px-2", children: label })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        Button,
        {
          asChild: true,
          size: "icon",
          variant: "ghost",
          className: "absolute top-0 right-[28px] h-full",
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
            "a",
            {
              className: "flex items-center",
              href: service === "openai" ? "https://platform.openai.com/api-keys" : "https://uploadthing.com/dashboard",
              rel: "noopener noreferrer",
              target: "_blank",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react7.ExternalLinkIcon, { className: "size-4" }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { className: "sr-only", children: [
                  "Get ",
                  label
                ] })
              ]
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Input,
      {
        id: label,
        className: "pr-10",
        value: tempKeys[service],
        onChange: (e) => setTempKeys((prev) => ({ ...prev, [service]: e.target.value })),
        placeholder: "",
        "data-1p-ignore": true,
        type: showKey[service] ? "text" : "password"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      Button,
      {
        size: "icon",
        variant: "ghost",
        className: "absolute top-0 right-0 h-full",
        onClick: () => toggleKeyVisibility(service),
        type: "button",
        children: [
          showKey[service] ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react7.EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react7.Eye, { className: "size-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { className: "sr-only", children: [
            showKey[service] ? "Hide" : "Show",
            " ",
            label
          ] })
        ]
      }
    )
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Button,
      {
        size: "icon",
        variant: "default",
        className: cn(
          "group fixed right-4 bottom-4 z-50 size-10 overflow-hidden",
          "rounded-full shadow-md hover:shadow-lg"
        ),
        "data-block-hide": true,
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react7.Settings, { className: "size-4" })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(DialogContent, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogTitle, { className: "text-xl", children: "Settings" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogDescription, { children: "Configure your API keys and preferences." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("form", { className: "space-y-10", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "size-8 rounded-full bg-purple-100 p-2 dark:bg-purple-900", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react7.Wand2Icon, { className: "size-4 text-purple-600 dark:text-purple-400" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h4", { className: "font-semibold", children: "AI" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "space-y-4", children: [
            renderApiKeyInput("openai", "OpenAI API key"),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "group relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "label",
                {
                  className: "absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 text-xs font-medium text-foreground group-has-disabled:opacity-50",
                  htmlFor: "select-model",
                  children: "Model"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Popover, { open: openModel, onOpenChange: setOpenModel, children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PopoverTrigger, { id: "select-model", asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "w-full justify-between",
                    "aria-expanded": openModel,
                    role: "combobox",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("code", { children: model.label }),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react7.ChevronsUpDown, { className: "ml-2 size-4 shrink-0 opacity-50" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PopoverContent, { className: "w-full p-0", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Command, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CommandInput, { placeholder: "Search model..." }),
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CommandEmpty, { children: "No model found." }),
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CommandList, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CommandGroup, { children: models.map((m) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                    CommandItem,
                    {
                      value: m.value,
                      onSelect: () => {
                        setModel(m);
                        setOpenModel(false);
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                          import_lucide_react7.Check,
                          {
                            className: cn(
                              "mr-2 size-4",
                              model.value === m.value ? "opacity-100" : "opacity-0"
                            )
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("code", { children: m.label })
                      ]
                    },
                    m.value
                  )) }) })
                ] }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Button, { size: "lg", className: "w-full", type: "submit", children: "Save changes" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm text-muted-foreground", children: "Not stored anywhere. Used only for current session requests." })
    ] })
  ] });
}

// src/components/editor/core/use-create-editor.ts
var import_cn10 = require("@udecode/cn");
var import_react299 = require("@udecode/plate-ai/react");
var import_react300 = require("@udecode/plate-basic-marks/react");
var import_react301 = require("@udecode/plate-block-quote/react");
var import_react302 = require("@udecode/plate-callout/react");
var import_react303 = require("@udecode/plate-code-block/react");
var import_react304 = require("@udecode/plate-comments/react");
var import_react305 = require("@udecode/plate-date/react");
var import_react306 = require("@udecode/plate-emoji/react");
var import_react307 = require("@udecode/plate-excalidraw/react");
var import_plate_heading20 = require("@udecode/plate-heading");
var import_react308 = require("@udecode/plate-heading/react");
var import_react309 = require("@udecode/plate-highlight/react");
var import_react310 = require("@udecode/plate-horizontal-rule/react");
var import_react311 = require("@udecode/plate-kbd/react");
var import_react312 = require("@udecode/plate-layout/react");
var import_react313 = require("@udecode/plate-link/react");
var import_react314 = require("@udecode/plate-math/react");
var import_react315 = require("@udecode/plate-media/react");
var import_react316 = require("@udecode/plate-mention/react");
var import_react317 = require("@udecode/plate-slash-command/react");
var import_react318 = require("@udecode/plate-suggestion/react");
var import_react319 = require("@udecode/plate-table/react");
var import_react320 = require("@udecode/plate-toggle/react");
var import_react321 = require("@udecode/plate/react");

// src/components/editor/plugins/copilot-plugins.tsx
var import_faker = require("@faker-js/faker");
var import_react39 = require("@udecode/plate-ai/react");
var import_plate_markdown2 = require("@udecode/plate-markdown");

// src/components/editor/ui/ghost-text.tsx
var import_react36 = require("@udecode/plate-ai/react");
var import_react37 = require("@udecode/plate/react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var GhostText = () => {
  const element = (0, import_react37.useElement)();
  const isSuggested = (0, import_react37.usePluginOption)(
    import_react36.CopilotPlugin,
    "isSuggested",
    element.id
  );
  if (!isSuggested) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(GhostTextContent, {});
};
function GhostTextContent() {
  const suggestionText = (0, import_react37.usePluginOption)(import_react36.CopilotPlugin, "suggestionText");
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "span",
    {
      className: "pointer-events-none text-muted-foreground/70 max-sm:hidden",
      contentEditable: false,
      children: suggestionText && suggestionText
    }
  );
}

// src/components/editor/plugins/markdown-plugin.tsx
var import_remark_gfm = __toESM(require("remark-gfm"));
var import_remark_math = __toESM(require("remark-math"));
var import_plate_markdown = require("@udecode/plate-markdown");
var import_react38 = require("@udecode/plate-suggestion/react");
var markdownPlugin = import_plate_markdown.MarkdownPlugin.configure({
  options: {
    disallowedNodes: [import_react38.SuggestionPlugin.key],
    remarkPlugins: [import_remark_math.default, import_remark_gfm.default, import_plate_markdown.remarkMdx, import_plate_markdown.remarkMention]
  }
});

// src/components/editor/plugins/copilot-plugins.tsx
var copilotPlugins = [
  markdownPlugin,
  import_react39.CopilotPlugin.configure(({ api }) => ({
    options: {
      completeOptions: {
        api: "/api/ai/copilot",
        body: {
          system: `You are an advanced AI writing assistant, similar to VSCode Copilot but for general text. Your task is to predict and generate the next part of the text based on the given context.
  
  Rules:
  - Continue the text naturally up to the next punctuation mark (., ,, ;, :, ?, or !).
  - Maintain style and tone. Don't repeat given text.
  - For unclear context, provide the most likely continuation.
  - Handle code snippets, lists, or structured text if needed.
  - Don't include """ in your response.
  - CRITICAL: Always end with a punctuation mark.
  - CRITICAL: Avoid starting a new block. Do not use block formatting like >, #, 1., 2., -, etc. The suggestion should continue in the same block as the context.
  - If no context is provided or you can't generate a continuation, return "0" without explanation.`
        },
        onError: () => {
          api.copilot.setBlockSuggestion({
            text: (0, import_plate_markdown2.stripMarkdown)(import_faker.faker.lorem.sentence())
          });
        },
        onFinish: (_, completion) => {
          if (completion === "0") return;
          api.copilot.setBlockSuggestion({
            text: (0, import_plate_markdown2.stripMarkdown)(completion)
          });
        }
      },
      debounceDelay: 500,
      renderGhostText: GhostText,
      getPrompt: ({ editor }) => {
        const contextEntry = editor.api.block({ highest: true });
        if (!contextEntry) return "";
        const prompt = (0, import_plate_markdown2.serializeMd)(editor, {
          value: [contextEntry[0]]
        });
        return `Continue the text up to the next punctuation mark:
  """
  ${prompt}
  """`;
      }
    }
  }))
];

// src/components/editor/plugins/editor-plugins.tsx
var import_data = __toESM(require("@emoji-mart/data"));
var import_react178 = require("@udecode/plate-callout/react");
var import_react179 = require("@udecode/plate-code-block/react");
var import_react180 = require("@udecode/plate-date/react");
var import_plate_docx = require("@udecode/plate-docx");
var import_react181 = require("@udecode/plate-emoji/react");
var import_react182 = require("@udecode/plate-font/react");
var import_react183 = require("@udecode/plate-highlight/react");
var import_react184 = require("@udecode/plate-horizontal-rule/react");
var import_plate_juice = require("@udecode/plate-juice");
var import_react185 = require("@udecode/plate-kbd/react");
var import_react186 = require("@udecode/plate-layout/react");
var import_react187 = require("@udecode/plate-slash-command/react");
var import_react188 = require("@udecode/plate-toggle/react");
var import_plate_trailing_block = require("@udecode/plate-trailing-block");

// src/components/editor/plugins/ai-plugins.tsx
var import_plate32 = require("@udecode/plate");
var import_plate_ai = require("@udecode/plate-ai");
var import_react57 = require("@udecode/plate-ai/react");
var import_react58 = require("@udecode/plate/react");

// src/components/editor/ui/ai-loading-bar.tsx
var import_lucide_react8 = require("lucide-react");
var import_react40 = require("@udecode/plate-ai/react");
var import_react41 = require("@udecode/plate/react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var AILoadingBar = () => {
  const chat = (0, import_react41.usePluginOption)(import_react40.AIChatPlugin, "chat");
  const mode = (0, import_react41.usePluginOption)(import_react40.AIChatPlugin, "mode");
  const { status } = chat;
  const { api } = (0, import_react41.useEditorPlugin)(import_react40.AIChatPlugin);
  const isLoading = status === "streaming" || status === "submitted";
  const visible = isLoading && mode === "insert";
  if (!visible) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "div",
    {
      className: cn(
        "absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-md border border-border bg-muted px-3 py-1.5 text-sm text-muted-foreground shadow-md transition-all duration-300"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: status === "submitted" ? "Thinking..." : "Writing..." }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
          Button,
          {
            size: "sm",
            variant: "ghost",
            className: "flex items-center gap-1 text-xs",
            onClick: () => api.aiChat.stop(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react8.Pause, { className: "h-4 w-4" }),
              "Stop",
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("kbd", { className: "ml-1 rounded bg-border px-1 font-mono text-[10px] text-muted-foreground shadow-sm", children: "Esc" })
            ]
          }
        )
      ]
    }
  );
};

// src/components/editor/ui/ai-menu.tsx
var React10 = __toESM(require("react"));
var import_cmdk2 = require("cmdk");
var import_lucide_react14 = require("lucide-react");
var import_plate30 = require("@udecode/plate");
var import_react50 = require("@udecode/plate-ai/react");
var import_react51 = require("@udecode/plate-selection/react");
var import_react52 = require("@udecode/plate/react");

// src/components/editor/core/use-chat.ts
var React6 = __toESM(require("react"));
var import_react42 = require("@ai-sdk/react");
var import_faker2 = require("@faker-js/faker");

// src/configs/common.ts
var models2 = [
  { label: "gpt-4o-mini", value: "gpt-4o-mini" },
  { label: "gpt-4o", value: "gpt-4o" },
  { label: "gpt-4-turbo", value: "gpt-4-turbo" },
  { label: "gpt-4", value: "gpt-4" },
  { label: "gpt-3.5-turbo", value: "gpt-3.5-turbo" },
  { label: "gpt-3.5-turbo-instruct", value: "gpt-3.5-turbo-instruct" },
  { label: "openai/gpt-4o", value: "openai/gpt-4o" }
];
var CONFIGS = {
  API_KEY: process.env.OPENAI_API_KEY,
  MODEL: models2[4].value,
  WEBSITE_URL: process.env.WEBSITE_URL
};

// src/components/editor/core/use-chat.ts
var useChat = () => {
  const abortControllerRef = React6.useRef(null);
  const _abortFakeStream = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  };
  const chat = (0, import_react42.useChat)({
    id: "editor",
    api: "/api/ai/command",
    body: {
      // !!! DEMO ONLY: don't use API keys client-side
      apiKey: CONFIGS.API_KEY,
      model: CONFIGS.MODEL
    }
    // Mock the API response. Remove it when you implement the route /api/ai/command
    // fetch: async (input, init) => {
    //   const res = await fetch(input, init);
    //   if (!res.ok) {
    //     let sample: 'markdown' | 'mdx' | null = null;
    //     try {
    //       const content = JSON.parse(init?.body as string).messages.at(
    //         -1
    //       ).content;
    //       if (content.includes('Generate a markdown sample')) {
    //         sample = 'markdown';
    //       } else if (content.includes('Generate a mdx sample')) {
    //         sample = 'mdx';
    //       }
    //     } catch {
    //       sample = null;
    //     }
    //     abortControllerRef.current = new AbortController();
    //     await new Promise((resolve) => setTimeout(resolve, 400));
    //     const stream = fakeStreamText({
    //       sample,
    //       signal: abortControllerRef.current.signal,
    //     });
    //     return new Response(stream, {
    //       headers: {
    //         Connection: 'keep-alive',
    //         'Content-Type': 'text/plain',
    //       },
    //     });
    //   }
    //   return res;
    // },
  });
  return { ...chat, _abortFakeStream };
};
var delay = import_faker2.faker.number.int({ max: 20, min: 5 });
var markdownChunks = [
  [
    { delay, texts: "Make text " },
    { delay, texts: "**bold**" },
    { delay, texts: ", " },
    { delay, texts: "*italic*" },
    { delay, texts: ", " },
    { delay, texts: "__underlined__" },
    { delay, texts: ", or apply a " },
    {
      delay,
      texts: "***combination***"
    },
    { delay, texts: " " },
    { delay, texts: "of " },
    { delay, texts: "these " },
    { delay, texts: "styles " },
    { delay, texts: "for " },
    { delay, texts: "a " },
    { delay, texts: "visually " },
    { delay, texts: "striking " },
    { delay, texts: "effect." },
    { delay, texts: "\n\n" },
    { delay, texts: "Add " },
    {
      delay,
      texts: "~~strikethrough~~"
    },
    { delay, texts: " " },
    { delay, texts: "to " },
    { delay, texts: "indicate " },
    { delay, texts: "deleted " },
    { delay, texts: "or " },
    { delay, texts: "outdated " },
    { delay, texts: "content." },
    { delay, texts: "\n\n" },
    { delay, texts: "Write " },
    { delay, texts: "code " },
    { delay, texts: "snippets " },
    { delay, texts: "with " },
    { delay, texts: "inline " },
    { delay, texts: "`code`" },
    { delay, texts: " formatting " },
    { delay, texts: "for " },
    { delay, texts: "easy " },
    { delay: import_faker2.faker.number.int({ max: 100, min: 30 }), texts: "readability." },
    { delay, texts: "\n\n" },
    { delay, texts: "Add " },
    {
      delay,
      texts: "[links](https://example.com)"
    },
    { delay: import_faker2.faker.number.int({ max: 100, min: 30 }), texts: " to " },
    { delay: import_faker2.faker.number.int({ max: 100, min: 30 }), texts: "external " },
    { delay, texts: "resources " },
    { delay, texts: "or " },
    {
      delay,
      texts: "references.\n\n"
    },
    { delay, texts: "Use " },
    { delay, texts: "inline " },
    { delay, texts: "math " },
    { delay, texts: "equations " },
    { delay, texts: "like " },
    { delay, texts: "$E = mc^2$ " },
    { delay, texts: "for " },
    { delay, texts: "scientific " },
    { delay, texts: "notation." },
    { delay, texts: "\n\n" },
    { delay, texts: "# " },
    { delay, texts: "Heading " },
    { delay, texts: "1\n\n" },
    { delay, texts: "## " },
    { delay, texts: "Heading " },
    { delay, texts: "2\n\n" },
    { delay, texts: "### " },
    { delay, texts: "Heading " },
    { delay, texts: "3\n\n" },
    { delay, texts: "> " },
    { delay, texts: "Blockquote\n\n" },
    { delay, texts: "- " },
    { delay, texts: "Unordered " },
    { delay, texts: "list " },
    { delay, texts: "item " },
    { delay, texts: "1\n" },
    { delay, texts: "- " },
    { delay, texts: "Unordered " },
    { delay, texts: "list " },
    { delay, texts: "item " },
    { delay, texts: "2\n\n" },
    { delay, texts: "1. " },
    { delay, texts: "Ordered " },
    { delay, texts: "list " },
    { delay, texts: "item " },
    { delay, texts: "1\n" },
    { delay, texts: "2. " },
    { delay, texts: "Ordered " },
    { delay, texts: "list " },
    { delay, texts: "item " },
    { delay, texts: "2\n\n" },
    { delay, texts: "- " },
    { delay, texts: "[ " },
    { delay, texts: "] " },
    { delay, texts: "Task " },
    { delay, texts: "list " },
    { delay, texts: "item " },
    { delay, texts: "1\n" },
    { delay, texts: "- " },
    { delay, texts: "[x] " },
    { delay, texts: "Task " },
    { delay, texts: "list " },
    { delay, texts: "item " },
    { delay, texts: "2\n\n" },
    { delay, texts: "![Alt " },
    {
      delay,
      texts: "text](https://images.unsplash.com/photo-1712688930249-98e1963af7bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)\n\n"
    },
    {
      delay,
      texts: "### Advantage blocks:\n"
    },
    { delay, texts: "\n" },
    { delay, texts: "$$\n" },
    {
      delay,
      texts: "a^2 + b^2 = c^2\n"
    },
    { delay, texts: "$$\n" },
    { delay, texts: "\n" },
    { delay, texts: "```python\n" },
    { delay, texts: "# " },
    { delay, texts: "Code " },
    { delay, texts: "block\n" },
    { delay, texts: 'print("Hello, ' },
    { delay, texts: 'World!")\n' },
    { delay, texts: "```\n\n" },
    { delay, texts: "Horizontal " },
    { delay, texts: "rule\n\n" },
    { delay, texts: "---\n\n" },
    { delay, texts: "| " },
    { delay, texts: "Header " },
    { delay, texts: "1 " },
    { delay, texts: "| " },
    { delay, texts: "Header " },
    { delay, texts: "2 " },
    { delay, texts: "|\n" },
    {
      delay,
      texts: "|----------|----------|\n"
    },
    { delay, texts: "| " },
    { delay, texts: "Row " },
    { delay, texts: "1   " },
    { delay, texts: " | " },
    { delay, texts: "Data    " },
    { delay, texts: " |\n" },
    { delay, texts: "| " },
    { delay, texts: "Row " },
    { delay, texts: "2   " },
    { delay, texts: " | " },
    { delay, texts: "Data    " },
    { delay, texts: " |" }
  ]
];

// src/components/editor/ui/ai-chat-editor.tsx
var React8 = __toESM(require("react"));
var import_lowlight = require("lowlight");
var import_cn2 = require("@udecode/cn");
var import_plate28 = require("@udecode/plate");
var import_react45 = require("@udecode/plate-ai/react");
var import_plate_basic_marks = require("@udecode/plate-basic-marks");
var import_plate_block_quote = require("@udecode/plate-block-quote");
var import_plate_callout2 = require("@udecode/plate-callout");
var import_plate_code_block2 = require("@udecode/plate-code-block");
var import_plate_date2 = require("@udecode/plate-date");
var import_plate_font = require("@udecode/plate-font");
var import_plate_heading5 = require("@udecode/plate-heading");
var import_plate_highlight = require("@udecode/plate-highlight");
var import_plate_horizontal_rule = require("@udecode/plate-horizontal-rule");
var import_plate_indent = require("@udecode/plate-indent");
var import_plate_indent_list3 = require("@udecode/plate-indent-list");
var import_plate_kbd = require("@udecode/plate-kbd");
var import_plate_layout2 = require("@udecode/plate-layout");
var import_plate_link = require("@udecode/plate-link");
var import_plate_math4 = require("@udecode/plate-math");
var import_plate_media2 = require("@udecode/plate-media");
var import_plate_mention = require("@udecode/plate-mention");
var import_plate_table3 = require("@udecode/plate-table");
var import_react46 = require("@udecode/plate/react");

// src/components/editor/ui/indent-todo-marker-static.tsx
var import_lucide_react9 = require("lucide-react");
var import_jsx_runtime16 = require("react/jsx-runtime");
function TodoMarkerStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { contentEditable: false, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    CheckboxStatic,
    {
      className: "pointer-events-none absolute top-1 -left-6",
      checked: props.element.checked
    }
  ) });
}
function TodoLiStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "li",
    {
      className: cn(
        "list-none",
        props.element.checked && "text-muted-foreground line-through"
      ),
      children: props.children
    }
  );
}
function CheckboxStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "button",
    {
      className: cn(
        "peer size-4 shrink-0 rounded-sm border border-primary bg-background ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        props.className
      ),
      style: props.style,
      "data-state": props.checked ? "checked" : "unchecked",
      type: "button",
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: cn("flex items-center justify-center text-current"), children: props.checked && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react9.CheckIcon, { className: "size-4" }) })
    }
  );
}

// src/components/editor/ui/blockquote-element-static.tsx
var import_plate3 = require("@udecode/plate");
var import_jsx_runtime17 = require("react/jsx-runtime");
function BlockquoteElementStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    import_plate3.SlateElement,
    {
      as: "blockquote",
      className: "my-1 border-l-2 pl-6 italic",
      ...props
    }
  );
}

// src/components/editor/ui/callout-element-static.tsx
var import_cn = require("@udecode/cn");
var import_plate4 = require("@udecode/plate");
var import_jsx_runtime18 = require("react/jsx-runtime");
function CalloutElementStatic({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_plate4.SlateElement,
    {
      className: (0, import_cn.cn)("my-1 flex rounded-sm bg-muted p-4 pl-3", className),
      style: {
        backgroundColor: props.element.backgroundColor
      },
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex w-full gap-2 rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "div",
          {
            className: "size-6 text-[18px] select-none",
            style: {
              fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols'
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { "data-plate-prevent-deserialization": true, children: props.element.icon || "\u{1F4A1}" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "w-full", children })
      ] })
    }
  );
}

// src/components/editor/ui/code-block-element-static.tsx
var import_plate5 = require("@udecode/plate");
var import_jsx_runtime19 = require("react/jsx-runtime");
function CodeBlockElementStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    import_plate5.SlateElement,
    {
      className: "py-1 **:[.hljs-addition]:bg-[#f0fff4] **:[.hljs-addition]:text-[#22863a] **:[.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable]:text-[#005cc5] **:[.hljs-built_in,.hljs-symbol]:text-[#e36209] **:[.hljs-bullet]:text-[#735c0f] **:[.hljs-comment,.hljs-code,.hljs-formula]:text-[#6a737d] **:[.hljs-deletion]:bg-[#ffeef0] **:[.hljs-deletion]:text-[#b31d28] **:[.hljs-emphasis]:italic **:[.hljs-keyword,.hljs-doctag,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_]:text-[#d73a49] **:[.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo]:text-[#22863a] **:[.hljs-regexp,.hljs-string,.hljs-meta_.hljs-string]:text-[#032f62] **:[.hljs-section]:font-bold **:[.hljs-section]:text-[#005cc5] **:[.hljs-strong]:font-bold **:[.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_]:text-[#6f42c1]",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "relative rounded-md bg-muted/50", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("pre", { className: "overflow-x-auto p-8 pr-4 font-mono text-sm leading-[normal] [tab-size:2] print:break-inside-avoid", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { children: props.children }) }) })
    }
  );
}

// src/components/editor/ui/code-leaf-static.tsx
var import_plate6 = require("@udecode/plate");
var import_jsx_runtime20 = require("react/jsx-runtime");
function CodeLeafStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    import_plate6.SlateLeaf,
    {
      ...props,
      as: "code",
      className: "rounded-md bg-muted px-[0.3em] py-[0.2em] font-mono text-sm whitespace-pre-wrap",
      children: props.children
    }
  );
}

// src/components/editor/ui/code-line-element-static.tsx
var import_plate7 = require("@udecode/plate");
var import_jsx_runtime21 = require("react/jsx-runtime");
function CodeLineElementStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_plate7.SlateElement, { ...props });
}

// src/components/editor/ui/code-syntax-leaf-static.tsx
var import_plate8 = require("@udecode/plate");
var import_jsx_runtime22 = require("react/jsx-runtime");
function CodeSyntaxLeafStatic(props) {
  const tokenClassName = props.leaf.className;
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_plate8.SlateLeaf, { className: tokenClassName, ...props });
}

// src/components/editor/ui/column-element-static.tsx
var import_plate9 = require("@udecode/plate");
var import_jsx_runtime23 = require("react/jsx-runtime");
function ColumnElementStatic(props) {
  const { width } = props.element;
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "group/column relative", style: { width: width ?? "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    import_plate9.SlateElement,
    {
      className: "h-full px-2 pt-2 group-first/column:pl-0 group-last/column:pr-0",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "relative h-full border border-transparent p-1.5", children: props.children })
    }
  ) });
}

// src/components/editor/ui/column-group-element-static.tsx
var import_plate10 = require("@udecode/plate");
var import_jsx_runtime24 = require("react/jsx-runtime");
function ColumnGroupElementStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_plate10.SlateElement, { className: "mb-2", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex size-full rounded", children: props.children }) });
}

// src/components/editor/ui/date-element.tsx
var import_react43 = require("@udecode/plate/react");

// src/components/editor/ui/calendar.tsx
var import_lucide_react10 = require("lucide-react");
var import_react_day_picker = require("react-day-picker");
var import_jsx_runtime25 = require("react/jsx-runtime");
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    import_react_day_picker.DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end: "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ className: className2, ...props2 }) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react10.ChevronLeft, { className: cn("size-4", className2), ...props2 }),
        IconRight: ({ className: className2, ...props2 }) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react10.ChevronRight, { className: cn("size-4", className2), ...props2 })
      },
      ...props
    }
  );
}

// src/components/editor/ui/date-element.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
function DateElement(props) {
  const { editor, element } = props;
  const readOnly = (0, import_react43.useReadOnly)();
  const trigger = /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "span",
    {
      className: cn(
        "w-fit cursor-pointer rounded-sm bg-muted px-1 text-muted-foreground"
      ),
      contentEditable: false,
      draggable: true,
      children: element.date ? (() => {
        const today = /* @__PURE__ */ new Date();
        const elementDate = new Date(element.date);
        const isToday = elementDate.getDate() === today.getDate() && elementDate.getMonth() === today.getMonth() && elementDate.getFullYear() === today.getFullYear();
        const isYesterday = new Date(today.setDate(today.getDate() - 1)).toDateString() === elementDate.toDateString();
        const isTomorrow = new Date(today.setDate(today.getDate() + 2)).toDateString() === elementDate.toDateString();
        if (isToday) return "Today";
        if (isYesterday) return "Yesterday";
        if (isTomorrow) return "Tomorrow";
        return elementDate.toLocaleDateString(void 0, {
          day: "numeric",
          month: "long",
          year: "numeric"
        });
      })() : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: "Pick a date" })
    }
  );
  if (readOnly) {
    return trigger;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(BlockWithPlus, { element, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    import_react43.PlateElement,
    {
      ...props,
      className: "inline-block",
      attributes: {
        ...props.attributes,
        contentEditable: false
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Popover, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(PopoverTrigger, { asChild: true, children: trigger }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(PopoverContent, { className: "w-auto p-0", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            Calendar,
            {
              selected: new Date(element.date),
              onSelect: (date) => {
                if (!date) return;
                editor.tf.setNodes(
                  { date: date.toDateString() },
                  { at: element }
                );
              },
              mode: "single",
              initialFocus: true
            }
          ) })
        ] }),
        props.children
      ]
    }
  ) });
}

// src/components/editor/ui/editor-static.tsx
var import_class_variance_authority4 = require("class-variance-authority");
var import_plate11 = require("@udecode/plate");
var import_jsx_runtime27 = require("react/jsx-runtime");
var editorVariants2 = (0, import_class_variance_authority4.cva)(
  cn(
    "group/editor",
    "relative w-full cursor-text overflow-x-hidden break-words whitespace-pre-wrap select-text",
    "rounded-md ring-offset-background focus-visible:outline-none",
    "placeholder:text-muted-foreground/80 **:data-slate-placeholder:top-[auto_!important] **:data-slate-placeholder:text-muted-foreground/80 **:data-slate-placeholder:opacity-100!",
    "[&_strong]:font-bold"
  ),
  {
    defaultVariants: {
      variant: "none"
    },
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-50"
      },
      focused: {
        true: "ring-2 ring-ring ring-offset-2"
      },
      variant: {
        ai: "w-full px-0 text-base md:text-sm",
        aiChat: "max-h-[min(70vh,320px)] w-full max-w-[700px] overflow-y-auto px-5 py-3 text-base md:text-sm",
        default: "size-full px-16 pt-4 pb-72 text-base sm:px-[max(64px,calc(50%-350px))]",
        demo: "size-full px-16 pt-4 pb-72 text-base sm:px-[max(64px,calc(50%-350px))]",
        fullWidth: "size-full px-16 pt-4 pb-72 text-base sm:px-24",
        none: "",
        select: "px-3 py-2 text-base data-readonly:w-fit"
      }
    }
  }
);
function EditorStatic({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    import_plate11.PlateStatic,
    {
      className: cn(editorVariants2({ variant }), className),
      ...props
    }
  );
}

// src/components/editor/ui/equation-element-static.tsx
var import_lucide_react11 = require("lucide-react");
var import_plate12 = require("@udecode/plate");
var import_plate_math2 = require("@udecode/plate-math");
var import_jsx_runtime28 = require("react/jsx-runtime");
function EquationElementStatic(props) {
  const { element } = props;
  const html = (0, import_plate_math2.getEquationHtml)({
    element,
    options: {
      displayMode: true,
      errorColor: "#cc0000",
      fleqn: false,
      leqno: false,
      macros: { "\\f": "#1f(#2)" },
      output: "htmlAndMathml",
      strict: "warn",
      throwOnError: false,
      trust: false
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_plate12.SlateElement, { className: "my-1", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "div",
      {
        className: cn(
          "group flex items-center justify-center rounded-sm select-none hover:bg-primary/10 data-[selected=true]:bg-primary/10",
          element.texExpression.length === 0 ? "bg-muted p-3 pr-9" : "px-2 py-1"
        ),
        children: element.texExpression.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
          "span",
          {
            dangerouslySetInnerHTML: {
              __html: html
            }
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex h-7 w-full items-center gap-2 text-sm whitespace-nowrap text-muted-foreground", children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react11.RadicalIcon, { className: "size-6 text-muted-foreground/80" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { children: "Add a Tex equation" })
        ] })
      }
    ),
    props.children
  ] });
}

// src/components/editor/ui/heading-element-static.tsx
var import_plate13 = require("@udecode/plate");
var import_class_variance_authority5 = require("class-variance-authority");
var import_jsx_runtime29 = require("react/jsx-runtime");
var headingVariants = (0, import_class_variance_authority5.cva)("relative mb-1", {
  variants: {
    variant: {
      h1: "mt-[1.6em] pb-1 font-heading text-4xl font-bold",
      h2: "mt-[1.4em] pb-px font-heading text-2xl font-semibold tracking-tight",
      h3: "mt-[1em] pb-px font-heading text-xl font-semibold tracking-tight",
      h4: "mt-[0.75em] font-heading text-lg font-semibold tracking-tight",
      h5: "mt-[0.75em] text-lg font-semibold tracking-tight",
      h6: "mt-[0.75em] text-base font-semibold tracking-tight"
    }
  }
});
function HeadingElementStatic({
  variant = "h1",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    import_plate13.SlateElement,
    {
      as: variant,
      className: headingVariants({ variant }),
      ...props,
      children: props.children
    }
  );
}

// src/components/editor/ui/highlight-leaf-static.tsx
var import_plate14 = require("@udecode/plate");
var import_jsx_runtime30 = require("react/jsx-runtime");
function HighlightLeafStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_plate14.SlateLeaf, { ...props, as: "mark", className: "bg-highlight/30 text-inherit", children: props.children });
}

// src/components/editor/ui/hr-element-static.tsx
var import_plate15 = require("@udecode/plate");
var import_jsx_runtime31 = require("react/jsx-runtime");
function HrElementStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_plate15.SlateElement, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "cursor-text py-6", contentEditable: false, children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      "hr",
      {
        className: cn(
          "h-0.5 rounded-sm border-none bg-muted bg-clip-content"
        )
      }
    ) }),
    props.children
  ] });
}

// src/components/editor/ui/image-element-static.tsx
var import_plate16 = require("@udecode/plate");
var import_jsx_runtime32 = require("react/jsx-runtime");
function ImageElementStatic(props) {
  const { align = "center", caption, url, width } = props.element;
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(import_plate16.SlateElement, { ...props, className: "py-2.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("figure", { className: "group relative m-0 inline-block", style: { width }, children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
      "div",
      {
        className: "relative max-w-full min-w-[92px]",
        style: { textAlign: align },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
            "img",
            {
              className: cn(
                "w-full max-w-full cursor-default object-cover px-0",
                "rounded-sm"
              ),
              alt: props.attributes.alt,
              src: url
            }
          ),
          caption && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("figcaption", { className: "mx-auto mt-2 h-[24px] max-w-full", children: import_plate16.NodeApi.string(caption[0]) })
        ]
      }
    ) }),
    props.children
  ] });
}

// src/components/editor/ui/inline-equation-element-static.tsx
var import_plate17 = require("@udecode/plate");
var import_plate_math3 = require("@udecode/plate-math");
var import_jsx_runtime33 = require("react/jsx-runtime");
function InlineEquationElementStatic(props) {
  const html = (0, import_plate_math3.getEquationHtml)({
    element: props.element,
    options: {
      displayMode: true,
      errorColor: "#cc0000",
      fleqn: false,
      leqno: false,
      macros: { "\\f": "#1f(#2)" },
      output: "htmlAndMathml",
      strict: "warn",
      throwOnError: false,
      trust: false
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    import_plate17.SlateElement,
    {
      ...props,
      className: "inline-block rounded-sm select-none [&_.katex-display]:my-0",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          "div",
          {
            className: cn(
              'after:absolute after:inset-0 after:-top-0.5 after:-left-1 after:z-1 after:h-[calc(100%)+4px] after:w-[calc(100%+8px)] after:rounded-sm after:content-[""]',
              "h-6",
              props.element.texExpression.length === 0 && "text-muted-foreground after:bg-neutral-500/10"
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
              "span",
              {
                className: cn(
                  props.element.texExpression.length === 0 && "hidden",
                  "font-mono leading-none"
                ),
                dangerouslySetInnerHTML: { __html: html }
              }
            )
          }
        ),
        props.children
      ]
    }
  );
}

// src/components/editor/ui/kbd-leaf.tsx
var import_react44 = require("@udecode/plate/react");
var import_jsx_runtime34 = require("react/jsx-runtime");
function KbdLeaf(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    import_react44.PlateLeaf,
    {
      ...props,
      as: "kbd",
      className: "rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-sm shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(248,_249,_250)_0px_1px_5px_0px_inset,_rgb(193,_200,_205)_0px_0px_0px_0.5px,_rgb(193,_200,_205)_0px_2px_1px_-1px,_rgb(193,_200,_205)_0px_1px_0px_0px] dark:shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(26,_29,_30)_0px_1px_5px_0px_inset,_rgb(76,_81,_85)_0px_0px_0px_0.5px,_rgb(76,_81,_85)_0px_2px_1px_-1px,_rgb(76,_81,_85)_0px_1px_0px_0px]",
      children: props.children
    }
  );
}

// src/components/editor/ui/link-element-static.tsx
var import_plate18 = require("@udecode/plate");
var import_jsx_runtime35 = require("react/jsx-runtime");
function LinkElementStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    import_plate18.SlateElement,
    {
      ...props,
      as: "a",
      className: "font-medium text-primary underline decoration-primary underline-offset-4",
      children: props.children
    }
  );
}

// src/components/editor/ui/media-audio-element-static.tsx
var import_plate19 = require("@udecode/plate");
var import_jsx_runtime36 = require("react/jsx-runtime");
function MediaAudioElementStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_plate19.SlateElement, { ...props, className: "mb-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("figure", { className: "group relative cursor-default", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "h-16", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("audio", { className: "size-full", src: props.element.url, controls: true }) }) }),
    props.children
  ] });
}

// src/components/editor/ui/media-file-element-static.tsx
var import_plate20 = require("@udecode/plate");
var import_lucide_react12 = require("lucide-react");
var import_jsx_runtime37 = require("react/jsx-runtime");
function MediaFileElementStatic(props) {
  const { name, url } = props.element;
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_plate20.SlateElement, { className: "my-px rounded-sm", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      "a",
      {
        className: "group relative m-0 flex cursor-pointer items-center rounded px-0.5 py-[3px] hover:bg-muted",
        contentEditable: false,
        download: name,
        href: url,
        rel: "noopener noreferrer",
        role: "button",
        target: "_blank",
        children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "flex items-center gap-1 p-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_lucide_react12.FileUp, { className: "size-5" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { children: name })
        ] })
      }
    ),
    props.children
  ] });
}

// src/components/editor/ui/media-video-element-static.tsx
var import_plate21 = require("@udecode/plate");
var import_jsx_runtime38 = require("react/jsx-runtime");
function MediaVideoElementStatic(props) {
  const { align = "center", caption, url, width } = props.element;
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_plate21.SlateElement, { className: "py-2.5", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { style: { textAlign: align }, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
      "figure",
      {
        className: "group relative m-0 inline-block cursor-default",
        style: { width },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "video",
            {
              className: "w-full max-w-full rounded-sm object-cover px-0",
              src: url,
              controls: true
            }
          ),
          caption && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("figcaption", { children: import_plate21.NodeApi.string(caption[0]) })
        ]
      }
    ) }),
    props.children
  ] });
}

// src/components/editor/ui/mention-element-static.tsx
var React7 = __toESM(require("react"));
var import_plate22 = require("@udecode/plate");
var import_jsx_runtime39 = require("react/jsx-runtime");
function MentionElementStatic(props) {
  const { prefix } = props;
  const element = props.element;
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    import_plate22.SlateElement,
    {
      className: cn(
        "inline-block rounded-md bg-muted px-1.5 py-0.5 align-baseline text-sm font-medium",
        element.children[0].bold === true && "font-bold",
        element.children[0].italic === true && "italic",
        element.children[0].underline === true && "underline"
      ),
      "data-slate-value": element.value,
      ...props,
      children: import_plate22.IS_APPLE ? (
        // Mac OS IME https://github.com/ianstormtaylor/slate/issues/3490
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(React7.Fragment, { children: [
          props.children,
          prefix,
          element.value
        ] })
      ) : (
        // Others like Android https://github.com/ianstormtaylor/slate/pull/5360
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(React7.Fragment, { children: [
          prefix,
          element.value,
          props.children
        ] })
      )
    }
  );
}

// src/components/editor/ui/paragraph-element-static.tsx
var import_plate23 = require("@udecode/plate");
var import_jsx_runtime40 = require("react/jsx-runtime");
function ParagraphElementStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_plate23.SlateElement, { ...props, className: cn("m-0 px-0 py-1"), children: props.children });
}

// src/components/editor/ui/table-cell-element-static.tsx
var import_plate24 = require("@udecode/plate");
var import_plate_table = require("@udecode/plate-table");
var import_jsx_runtime41 = require("react/jsx-runtime");
function TableCellElementStatic({
  isHeader,
  ...props
}) {
  const { editor, element } = props;
  const { api } = editor.getPlugin(import_plate_table.BaseTablePlugin);
  const { minHeight, width } = api.table.getCellSize({ element });
  const borders = api.table.getCellBorders({ element });
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    import_plate24.SlateElement,
    {
      ...props,
      as: isHeader ? "th" : "td",
      className: cn(
        "h-full overflow-visible border-none bg-background p-0",
        element.background ? "bg-(--cellBackground)" : "bg-background",
        isHeader && "text-left font-normal *:m-0",
        "before:size-full",
        "before:absolute before:box-border before:content-[''] before:select-none",
        borders && cn(
          borders.bottom?.size && `before:border-b before:border-b-border`,
          borders.right?.size && `before:border-r before:border-r-border`,
          borders.left?.size && `before:border-l before:border-l-border`,
          borders.top?.size && `before:border-t before:border-t-border`
        )
      ),
      style: {
        "--cellBackground": element.background,
        maxWidth: width || 240,
        minWidth: width || 120
      },
      attributes: {
        ...props.attributes,
        colSpan: api.table.getColSpan(element),
        rowSpan: api.table.getRowSpan(element)
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        "div",
        {
          className: "relative z-20 box-border h-full px-4 py-2",
          style: { minHeight },
          children: props.children
        }
      )
    }
  );
}
function TableCellHeaderStaticElement(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(TableCellElementStatic, { ...props, isHeader: true });
}

// src/components/editor/ui/table-element-static.tsx
var import_plate25 = require("@udecode/plate");
var import_plate_table2 = require("@udecode/plate-table");
var import_jsx_runtime42 = require("react/jsx-runtime");
function TableElementStatic({
  children,
  ...props
}) {
  const { disableMarginLeft } = props.editor.getOptions(import_plate_table2.BaseTablePlugin);
  const marginLeft = disableMarginLeft ? 0 : props.element.marginLeft;
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    import_plate25.SlateElement,
    {
      ...props,
      className: "overflow-x-auto py-5",
      style: { paddingLeft: marginLeft },
      children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "group/table relative w-fit", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("table", { className: "mr-0 ml-px table h-px table-fixed border-collapse", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("tbody", { className: "min-w-full", children }) }) })
    }
  );
}

// src/components/editor/ui/table-row-element-static.tsx
var import_plate26 = require("@udecode/plate");
var import_jsx_runtime43 = require("react/jsx-runtime");
function TableRowElementStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_plate26.SlateElement, { ...props, as: "tr", className: "h-full", children: props.children });
}

// src/components/editor/ui/toc-element-static.tsx
var import_class_variance_authority6 = require("class-variance-authority");
var import_plate27 = require("@udecode/plate");
var import_plate_heading4 = require("@udecode/plate-heading");
var import_jsx_runtime44 = require("react/jsx-runtime");
var headingItemVariants = (0, import_class_variance_authority6.cva)(
  "block h-auto w-full cursor-pointer truncate rounded-none px-0.5 py-1.5 text-left font-medium text-muted-foreground underline decoration-[0.5px] underline-offset-4 hover:bg-accent hover:text-muted-foreground",
  {
    variants: {
      depth: {
        1: "pl-0.5",
        2: "pl-[26px]",
        3: "pl-[50px]"
      }
    }
  }
);
function TocElementStatic(props) {
  const { editor } = props;
  const headingList = getHeadingList(editor);
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_plate27.SlateElement, { ...props, className: "mb-1 p-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { children: headingList.length > 0 ? headingList.map((item) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      Button,
      {
        variant: "ghost",
        className: headingItemVariants({
          depth: item.depth
        }),
        children: item.title
      },
      item.title
    )) : /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "text-sm text-gray-500", children: "Create a heading to display the table of contents." }) }),
    props.children
  ] });
}
var headingDepth = {
  [import_plate_heading4.HEADING_KEYS.h1]: 1,
  [import_plate_heading4.HEADING_KEYS.h2]: 2,
  [import_plate_heading4.HEADING_KEYS.h3]: 3,
  [import_plate_heading4.HEADING_KEYS.h4]: 4,
  [import_plate_heading4.HEADING_KEYS.h5]: 5,
  [import_plate_heading4.HEADING_KEYS.h6]: 6
};
var getHeadingList = (editor) => {
  if (!editor) return [];
  const options = editor.getOptions(import_plate_heading4.BaseTocPlugin);
  if (options.queryHeading) {
    return options.queryHeading(editor);
  }
  const headingList = [];
  const values = editor.api.nodes({
    at: [],
    match: (n) => (0, import_plate_heading4.isHeading)(n)
  });
  if (!values) return [];
  Array.from(values, ([node, path]) => {
    const { type } = node;
    const title = import_plate27.NodeApi.string(node);
    const depth = headingDepth[type];
    const id = node.id;
    if (title) {
      headingList.push({ id, depth, path, title, type });
    }
  });
  return headingList;
};

// src/components/editor/ui/ai-chat-editor.tsx
var import_jsx_runtime45 = require("react/jsx-runtime");
var components = {
  [import_plate_media2.BaseAudioPlugin.key]: MediaAudioElementStatic,
  [import_plate_block_quote.BaseBlockquotePlugin.key]: BlockquoteElementStatic,
  [import_plate_basic_marks.BaseBoldPlugin.key]: (0, import_cn2.withProps)(import_plate28.SlateLeaf, { as: "strong" }),
  [import_plate_callout2.BaseCalloutPlugin.key]: CalloutElementStatic,
  [import_plate_code_block2.BaseCodeBlockPlugin.key]: CodeBlockElementStatic,
  [import_plate_code_block2.BaseCodeLinePlugin.key]: CodeLineElementStatic,
  [import_plate_basic_marks.BaseCodePlugin.key]: CodeLeafStatic,
  [import_plate_code_block2.BaseCodeSyntaxPlugin.key]: CodeSyntaxLeafStatic,
  [import_plate_layout2.BaseColumnItemPlugin.key]: ColumnElementStatic,
  [import_plate_layout2.BaseColumnPlugin.key]: ColumnGroupElementStatic,
  [import_plate_date2.BaseDatePlugin.key]: DateElement,
  [import_plate_math4.BaseEquationPlugin.key]: EquationElementStatic,
  [import_plate_media2.BaseFilePlugin.key]: MediaFileElementStatic,
  [import_plate_highlight.BaseHighlightPlugin.key]: HighlightLeafStatic,
  [import_plate_horizontal_rule.BaseHorizontalRulePlugin.key]: HrElementStatic,
  [import_plate_media2.BaseImagePlugin.key]: ImageElementStatic,
  [import_plate_math4.BaseInlineEquationPlugin.key]: InlineEquationElementStatic,
  [import_plate_basic_marks.BaseItalicPlugin.key]: (0, import_cn2.withProps)(import_plate28.SlateLeaf, { as: "em" }),
  [import_plate_kbd.BaseKbdPlugin.key]: KbdLeaf,
  [import_plate_link.BaseLinkPlugin.key]: LinkElementStatic,
  [import_plate_mention.BaseMentionPlugin.key]: MentionElementStatic,
  [import_plate28.BaseParagraphPlugin.key]: ParagraphElementStatic,
  [import_plate_basic_marks.BaseStrikethroughPlugin.key]: (0, import_cn2.withProps)(import_plate28.SlateLeaf, { as: "s" }),
  [import_plate_basic_marks.BaseSubscriptPlugin.key]: (0, import_cn2.withProps)(import_plate28.SlateLeaf, { as: "sub" }),
  [import_plate_basic_marks.BaseSuperscriptPlugin.key]: (0, import_cn2.withProps)(import_plate28.SlateLeaf, { as: "sup" }),
  [import_plate_table3.BaseTableCellHeaderPlugin.key]: TableCellHeaderStaticElement,
  [import_plate_table3.BaseTableCellPlugin.key]: TableCellElementStatic,
  [import_plate_table3.BaseTablePlugin.key]: TableElementStatic,
  [import_plate_table3.BaseTableRowPlugin.key]: TableRowElementStatic,
  [import_plate_heading5.BaseTocPlugin.key]: TocElementStatic,
  [import_plate_basic_marks.BaseUnderlinePlugin.key]: (0, import_cn2.withProps)(import_plate28.SlateLeaf, { as: "u" }),
  [import_plate_media2.BaseVideoPlugin.key]: MediaVideoElementStatic,
  [import_plate_heading5.HEADING_KEYS.h1]: (0, import_cn2.withProps)(HeadingElementStatic, { variant: "h1" }),
  [import_plate_heading5.HEADING_KEYS.h2]: (0, import_cn2.withProps)(HeadingElementStatic, { variant: "h2" }),
  [import_plate_heading5.HEADING_KEYS.h3]: (0, import_cn2.withProps)(HeadingElementStatic, { variant: "h3" })
  // [BaseCommentsPlugin.key]: CommentLeafStatic
  // [BaseTogglePlugin.key]: ToggleElementStatic
};
var lowlight = (0, import_lowlight.createLowlight)(import_lowlight.all);
var plugins = [
  import_plate_layout2.BaseColumnItemPlugin,
  import_plate_layout2.BaseColumnPlugin,
  import_plate_block_quote.BaseBlockquotePlugin,
  import_plate_basic_marks.BaseSubscriptPlugin,
  import_plate_basic_marks.BaseSuperscriptPlugin,
  import_plate_media2.BaseImagePlugin,
  import_plate_kbd.BaseKbdPlugin,
  import_plate_basic_marks.BaseBoldPlugin,
  import_plate_code_block2.BaseCodeBlockPlugin.configure({ options: { lowlight } }),
  import_plate_date2.BaseDatePlugin,
  import_plate_math4.BaseEquationPlugin,
  import_plate_math4.BaseInlineEquationPlugin,
  import_plate_basic_marks.BaseCodePlugin,
  import_plate_basic_marks.BaseItalicPlugin,
  import_plate_basic_marks.BaseStrikethroughPlugin,
  import_plate_basic_marks.BaseUnderlinePlugin,
  import_plate_font.BaseFontColorPlugin,
  import_plate_font.BaseFontSizePlugin,
  import_plate_font.BaseFontFamilyPlugin,
  import_plate_font.BaseFontWeightPlugin,
  import_plate_font.BaseFontBackgroundColorPlugin,
  import_plate_heading5.BaseHeadingPlugin,
  import_plate_horizontal_rule.BaseHorizontalRulePlugin,
  import_plate_table3.BaseTablePlugin,
  import_plate_heading5.BaseTocPlugin,
  import_plate_highlight.BaseHighlightPlugin,
  import_plate_link.BaseLinkPlugin,
  import_plate_mention.BaseMentionPlugin,
  import_plate28.BaseParagraphPlugin,
  import_plate_callout2.BaseCalloutPlugin,
  import_plate_indent.BaseIndentPlugin.extend({
    inject: {
      targetPlugins: [import_plate28.BaseParagraphPlugin.key]
    }
  }),
  import_plate_indent_list3.BaseIndentListPlugin.extend({
    inject: {
      targetPlugins: [import_plate28.BaseParagraphPlugin.key]
    },
    options: {
      listStyleTypes: {
        todo: {
          liComponent: TodoLiStatic,
          markerComponent: TodoMarkerStatic,
          type: "todo"
        }
      }
    }
  }),
  markdownPlugin
];
var AIChatEditor = React8.memo(function AIChatEditor2({
  content
}) {
  const aiEditor = (0, import_react46.usePlateEditor)({
    plugins
  });
  (0, import_react45.useAIChatEditor)(aiEditor, content);
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(EditorStatic, { variant: "aiChat", components, editor: aiEditor });
});

// src/components/editor/ui/ai-menu-items.tsx
var React9 = __toESM(require("react"));
var import_lucide_react13 = require("lucide-react");
var import_plate29 = require("@udecode/plate");
var import_react47 = require("@udecode/plate-ai/react");
var import_react48 = require("@udecode/plate-selection/react");
var import_react49 = require("@udecode/plate/react");
var import_jsx_runtime46 = require("react/jsx-runtime");
var aiChatItems = {
  accept: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.Check, {}),
    label: "Accept",
    value: "accept",
    onSelect: ({ editor }) => {
      editor.getTransforms(import_react47.AIChatPlugin).aiChat.accept();
      editor.tf.focus({ edge: "end" });
    }
  },
  continueWrite: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.PenLine, {}),
    label: "Continue writing",
    value: "continueWrite",
    onSelect: ({ editor }) => {
      const ancestorNode = editor.api.block({ highest: true });
      if (!ancestorNode) return;
      const isEmpty = import_plate29.NodeApi.string(ancestorNode[0]).trim().length === 0;
      void editor.getApi(import_react47.AIChatPlugin).aiChat.submit({
        mode: "insert",
        prompt: isEmpty ? `<Document>
{editor}
</Document>
Start writing a new paragraph AFTER <Document> ONLY ONE SENTENCE` : "Continue writing AFTER <Block> ONLY ONE SENTENCE. DONT REPEAT THE TEXT."
      });
    }
  },
  discard: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.X, {}),
    label: "Discard",
    shortcut: "Escape",
    value: "discard",
    onSelect: ({ editor }) => {
      editor.getTransforms(import_react47.AIPlugin).ai.undo();
      editor.getApi(import_react47.AIChatPlugin).aiChat.hide();
    }
  },
  emojify: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.SmileIcon, {}),
    label: "Emojify",
    value: "emojify",
    onSelect: ({ editor }) => {
      void editor.getApi(import_react47.AIChatPlugin).aiChat.submit({
        prompt: "Emojify"
      });
    }
  },
  explain: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.BadgeHelp, {}),
    label: "Explain",
    value: "explain",
    onSelect: ({ editor }) => {
      void editor.getApi(import_react47.AIChatPlugin).aiChat.submit({
        prompt: {
          default: "Explain {editor}",
          selecting: "Explain"
        }
      });
    }
  },
  fixSpelling: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.Check, {}),
    label: "Fix spelling & grammar",
    value: "fixSpelling",
    onSelect: ({ editor }) => {
      void editor.getApi(import_react47.AIChatPlugin).aiChat.submit({
        prompt: "Fix spelling and grammar"
      });
    }
  },
  generateMarkdownSample: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.BookOpenCheck, {}),
    label: "Generate Markdown sample",
    value: "generateMarkdownSample",
    onSelect: ({ editor }) => {
      void editor.getApi(import_react47.AIChatPlugin).aiChat.submit({
        prompt: "Generate a markdown sample"
      });
    }
  },
  generateMdxSample: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.BookOpenCheck, {}),
    label: "Generate MDX sample",
    value: "generateMdxSample",
    onSelect: ({ editor }) => {
      void editor.getApi(import_react47.AIChatPlugin).aiChat.submit({
        prompt: "Generate a mdx sample"
      });
    }
  },
  improveWriting: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.Wand, {}),
    label: "Improve writing",
    value: "improveWriting",
    onSelect: ({ editor }) => {
      void editor.getApi(import_react47.AIChatPlugin).aiChat.submit({
        prompt: "Improve the writing"
      });
    }
  },
  insertBelow: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.ListEnd, {}),
    label: "Insert below",
    value: "insertBelow",
    onSelect: ({ aiEditor, editor }) => {
      void editor.getTransforms(import_react47.AIChatPlugin).aiChat.insertBelow(aiEditor);
    }
  },
  makeLonger: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.ListPlus, {}),
    label: "Make longer",
    value: "makeLonger",
    onSelect: ({ editor }) => {
      void editor.getApi(import_react47.AIChatPlugin).aiChat.submit({
        prompt: "Make longer"
      });
    }
  },
  makeShorter: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.ListMinus, {}),
    label: "Make shorter",
    value: "makeShorter",
    onSelect: ({ editor }) => {
      void editor.getApi(import_react47.AIChatPlugin).aiChat.submit({
        prompt: "Make shorter"
      });
    }
  },
  replace: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.Check, {}),
    label: "Replace selection",
    value: "replace",
    onSelect: ({ aiEditor, editor }) => {
      void editor.getTransforms(import_react47.AIChatPlugin).aiChat.replaceSelection(aiEditor);
    }
  },
  simplifyLanguage: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.FeatherIcon, {}),
    label: "Simplify language",
    value: "simplifyLanguage",
    onSelect: ({ editor }) => {
      void editor.getApi(import_react47.AIChatPlugin).aiChat.submit({
        prompt: "Simplify the language"
      });
    }
  },
  summarize: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.Album, {}),
    label: "Add a summary",
    value: "summarize",
    onSelect: ({ editor }) => {
      void editor.getApi(import_react47.AIChatPlugin).aiChat.submit({
        mode: "insert",
        prompt: {
          default: "Summarize {editor}",
          selecting: "Summarize"
        }
      });
    }
  },
  tryAgain: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react13.CornerUpLeft, {}),
    label: "Try again",
    value: "tryAgain",
    onSelect: ({ editor }) => {
      void editor.getApi(import_react47.AIChatPlugin).aiChat.reload();
    }
  }
};
var menuStateItems = {
  cursorCommand: [
    {
      items: [
        aiChatItems.generateMdxSample,
        aiChatItems.generateMarkdownSample,
        aiChatItems.continueWrite,
        aiChatItems.summarize,
        aiChatItems.explain
      ]
    }
  ],
  cursorSuggestion: [
    {
      items: [aiChatItems.accept, aiChatItems.discard, aiChatItems.tryAgain]
    }
  ],
  selectionCommand: [
    {
      items: [
        aiChatItems.improveWriting,
        aiChatItems.emojify,
        aiChatItems.makeLonger,
        aiChatItems.makeShorter,
        aiChatItems.fixSpelling,
        aiChatItems.simplifyLanguage
      ]
    }
  ],
  selectionSuggestion: [
    {
      items: [
        aiChatItems.replace,
        aiChatItems.insertBelow,
        aiChatItems.discard,
        aiChatItems.tryAgain
      ]
    }
  ]
};
var AIMenuItems = ({
  setValue
}) => {
  const editor = (0, import_react49.useEditorRef)();
  const { messages } = (0, import_react49.usePluginOption)(import_react47.AIChatPlugin, "chat");
  const aiEditor = (0, import_react49.usePluginOption)(import_react47.AIChatPlugin, "aiEditor");
  const isSelecting = (0, import_react48.useIsSelecting)();
  const menuState = React9.useMemo(() => {
    if (messages && messages.length > 0) {
      return isSelecting ? "selectionSuggestion" : "cursorSuggestion";
    }
    return isSelecting ? "selectionCommand" : "cursorCommand";
  }, [isSelecting, messages]);
  const menuGroups = React9.useMemo(() => {
    const items2 = menuStateItems[menuState];
    return items2;
  }, [menuState]);
  React9.useEffect(() => {
    if (menuGroups.length > 0 && menuGroups[0].items.length > 0) {
      setValue(menuGroups[0].items[0].value);
    }
  }, [menuGroups, setValue]);
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_jsx_runtime46.Fragment, { children: menuGroups.map((group, index) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CommandGroup, { heading: group.heading, children: group.items.map((menuItem) => /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
    CommandItem,
    {
      className: "[&_svg]:text-muted-foreground",
      value: menuItem.value,
      onSelect: () => {
        menuItem.onSelect?.({
          aiEditor,
          editor
        });
      },
      children: [
        menuItem.icon,
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { children: menuItem.label })
      ]
    },
    menuItem.value
  )) }, index)) });
};

// src/components/editor/ui/ai-menu.tsx
var import_jsx_runtime47 = require("react/jsx-runtime");
function AIMenu() {
  const { api, editor } = (0, import_react52.useEditorPlugin)(import_react50.AIChatPlugin);
  const open = (0, import_react52.usePluginOption)(import_react50.AIChatPlugin, "open");
  const mode = (0, import_react52.usePluginOption)(import_react50.AIChatPlugin, "mode");
  const streaming = (0, import_react52.usePluginOption)(import_react50.AIChatPlugin, "streaming");
  const isSelecting = (0, import_react51.useIsSelecting)();
  const [value, setValue] = React10.useState("");
  const chat = useChat();
  const { input, messages, setInput, status } = chat;
  const [anchorElement, setAnchorElement] = React10.useState(
    null
  );
  const content = (0, import_react50.useLastAssistantMessage)()?.content;
  React10.useEffect(() => {
    if (streaming) {
      const anchor = api.aiChat.node({ anchor: true });
      setTimeout(() => {
        const anchorDom = editor.api.toDOMNode(anchor[0]);
        setAnchorElement(anchorDom);
      }, 0);
    }
  }, [streaming]);
  const setOpen = (open2) => {
    if (open2) {
      api.aiChat.show();
    } else {
      api.aiChat.hide();
    }
  };
  const show = (anchorElement2) => {
    setAnchorElement(anchorElement2);
    setOpen(true);
  };
  (0, import_react50.useEditorChat)({
    chat,
    onOpenBlockSelection: (blocks) => {
      show(editor.api.toDOMNode(blocks.at(-1)[0]));
    },
    onOpenChange: (open2) => {
      if (!open2) {
        setAnchorElement(null);
        setInput("");
      }
    },
    onOpenCursor: () => {
      const [ancestor] = editor.api.block({ highest: true });
      if (!editor.api.isAt({ end: true }) && !editor.api.isEmpty(ancestor)) {
        editor.getApi(import_react51.BlockSelectionPlugin).blockSelection.set(ancestor.id);
      }
      show(editor.api.toDOMNode(ancestor));
    },
    onOpenSelection: () => {
      show(editor.api.toDOMNode(editor.api.blocks().at(-1)[0]));
    }
  });
  (0, import_react52.useHotkeys)(
    "meta+j",
    () => {
      api.aiChat.show();
    },
    { enableOnContentEditable: true, enableOnFormTags: true }
  );
  (0, import_react52.useHotkeys)("esc", () => {
    api.aiChat.stop();
    chat._abortFakeStream();
  });
  const isLoading = status === "streaming" || status === "submitted";
  if (isLoading && mode === "insert") {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(Popover, { open, onOpenChange: setOpen, modal: false, children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(PopoverAnchor, { virtualRef: { current: anchorElement } }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      PopoverContent,
      {
        className: "border-none bg-transparent p-0 shadow-none",
        style: {
          width: anchorElement?.offsetWidth
        },
        onEscapeKeyDown: (e) => {
          e.preventDefault();
          api.aiChat.hide();
        },
        align: "center",
        side: "bottom",
        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
          Command,
          {
            className: "w-full rounded-lg border shadow-md",
            value,
            onValueChange: setValue,
            children: [
              mode === "chat" && isSelecting && content && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(AIChatEditor, { content }),
              isLoading ? /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex grow items-center gap-2 p-2 text-sm text-muted-foreground select-none", children: [
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_lucide_react14.Loader2Icon, { className: "size-4 animate-spin" }),
                messages.length > 1 ? "Editing..." : "Thinking..."
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                import_cmdk2.Command.Input,
                {
                  className: cn(
                    "flex h-9 w-full min-w-0 border-input bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none placeholder:text-muted-foreground md:text-sm dark:bg-input/30",
                    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
                    "border-b focus-visible:ring-transparent"
                  ),
                  value: input,
                  onKeyDown: (e) => {
                    if ((0, import_plate30.isHotkey)("backspace")(e) && input.length === 0) {
                      e.preventDefault();
                      api.aiChat.hide();
                    }
                    if ((0, import_plate30.isHotkey)("enter")(e) && !e.shiftKey && !value) {
                      e.preventDefault();
                      void api.aiChat.submit();
                    }
                  },
                  onValueChange: setInput,
                  placeholder: "Ask AI anything...",
                  "data-plate-focus": true,
                  autoFocus: true
                }
              ),
              !isLoading && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(CommandList, { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(AIMenuItems, { setValue }) })
            ]
          }
        )
      }
    )
  ] });
}

// src/components/editor/plugins/cursor-overlay-plugin.tsx
var import_react56 = require("@udecode/plate-selection/react");

// src/components/editor/ui/cursor-overlay.tsx
var import_plate31 = require("@udecode/plate");
var import_react53 = require("@udecode/plate-ai/react");
var import_react54 = require("@udecode/plate-selection/react");
var import_react55 = require("@udecode/plate/react");
var import_jsx_runtime48 = require("react/jsx-runtime");
function Cursor({
  id,
  caretPosition,
  data,
  selection,
  selectionRects
}) {
  const streaming = (0, import_react55.usePluginOption)(import_react53.AIChatPlugin, "streaming");
  const { style, selectionStyle = style } = data ?? {};
  const isCursor = import_plate31.RangeApi.isCollapsed(selection);
  if (streaming) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_jsx_runtime48.Fragment, { children: [
    selectionRects.map((position, i) => {
      return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
        "div",
        {
          className: cn(
            "pointer-events-none absolute z-10",
            id === "selection" && "bg-brand/25",
            id === "selection" && isCursor && "bg-primary"
          ),
          style: {
            ...selectionStyle,
            ...position
          }
        },
        i
      );
    }),
    caretPosition && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      "div",
      {
        className: cn(
          "pointer-events-none absolute z-10 w-0.5",
          id === "drag" && "w-px bg-brand"
        ),
        style: { ...caretPosition, ...style }
      }
    )
  ] });
}
function CursorOverlay() {
  const { cursors } = (0, import_react54.useCursorOverlay)();
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_jsx_runtime48.Fragment, { children: cursors.map((cursor) => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Cursor, { ...cursor }, cursor.id)) });
}

// src/components/editor/plugins/cursor-overlay-plugin.tsx
var import_jsx_runtime49 = require("react/jsx-runtime");
var cursorOverlayPlugin = import_react56.CursorOverlayPlugin.configure({
  render: {
    afterEditable: () => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(CursorOverlay, {})
  }
});

// src/components/editor/plugins/ai-plugins.tsx
var import_jsx_runtime50 = require("react/jsx-runtime");
var systemCommon = `You are an advanced AI-powered note-taking assistant, designed to enhance productivity and creativity in note management.
Respond directly to user prompts with clear, concise, and relevant content. Maintain a neutral, helpful tone.

Rules:
- <Document> is the entire note the user is working on.
- <Reminder> is a reminder of how you should reply to INSTRUCTIONS. It does not apply to questions.
- Anything else is the user prompt.
- Your response should be tailored to the user's prompt, providing precise assistance to optimize note management.
- For INSTRUCTIONS: Follow the <Reminder> exactly. Provide ONLY the content to be inserted or replaced. No explanations or comments.
- For QUESTIONS: Provide a helpful and concise answer. You may include brief explanations if necessary.
- CRITICAL: DO NOT remove or modify the following custom MDX tags: <u>, <callout>, <kbd>, <toc>, <sub>, <sup>, <mark>, <del>, <date>, <span>, <column>, <column_group>, <file>, <audio>, <video> in <Selection> unless the user explicitly requests this change.
- CRITICAL: Distinguish between INSTRUCTIONS and QUESTIONS. Instructions typically ask you to modify or add content. Questions ask for information or clarification.
- CRITICAL: when asked to write in markdown, do not start with \`\`\`markdown.
`;
var systemDefault = `${systemCommon}
- <Block> is the current block of text the user is working on.
- Ensure your output can seamlessly fit into the existing <Block> structure.

<Block>
{block}
</Block>
`;
var systemSelecting = `${systemCommon}
- <Block> is the block of text containing the user's selection, providing context.
- Ensure your output can seamlessly fit into the existing <Block> structure.
- <Selection> is the specific text the user has selected in the block and wants to modify or ask about.
- Consider the context provided by <Block>, but only modify <Selection>. Your response should be a direct replacement for <Selection>.
<Block>
{block}
</Block>
<Selection>
{selection}
</Selection>
`;
var systemBlockSelecting = `${systemCommon}
- <Selection> represents the full blocks of text the user has selected and wants to modify or ask about.
- Your response should be a direct replacement for the entire <Selection>.
- Maintain the overall structure and formatting of the selected blocks, unless explicitly instructed otherwise.
- CRITICAL: Provide only the content to replace <Selection>. Do not add additional blocks or change the block structure unless specifically requested.
<Selection>
{block}
</Selection>
`;
var userDefault = `<Reminder>
CRITICAL: NEVER write <Block>.
</Reminder>
{prompt}`;
var userSelecting = `<Reminder>
If this is a question, provide a helpful and concise answer about <Selection>.
If this is an instruction, provide ONLY the text to replace <Selection>. No explanations.
Ensure it fits seamlessly within <Block>. If <Block> is empty, write ONE random sentence.
NEVER write <Block> or <Selection>.
</Reminder>
{prompt} about <Selection>`;
var userBlockSelecting = `<Reminder>
If this is a question, provide a helpful and concise answer about <Selection>.
If this is an instruction, provide ONLY the content to replace the entire <Selection>. No explanations.
Maintain the overall structure unless instructed otherwise.
NEVER write <Block> or <Selection>.
</Reminder>
{prompt} about <Selection>`;
var PROMPT_TEMPLATES = {
  systemBlockSelecting,
  systemDefault,
  systemSelecting,
  userBlockSelecting,
  userDefault,
  userSelecting
};
var aiPlugins = [
  cursorOverlayPlugin,
  markdownPlugin,
  import_react57.AIPlugin,
  import_react57.AIChatPlugin.configure({
    options: {
      promptTemplate: ({ isBlockSelecting, isSelecting }) => {
        return isBlockSelecting ? PROMPT_TEMPLATES.userBlockSelecting : isSelecting ? PROMPT_TEMPLATES.userSelecting : PROMPT_TEMPLATES.userDefault;
      },
      systemTemplate: ({ isBlockSelecting, isSelecting }) => {
        return isBlockSelecting ? PROMPT_TEMPLATES.systemBlockSelecting : isSelecting ? PROMPT_TEMPLATES.systemSelecting : PROMPT_TEMPLATES.systemDefault;
      }
    },
    render: {
      afterContainer: () => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(AILoadingBar, {}),
      afterEditable: () => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(AIMenu, {})
    }
  }).extend({
    useHooks: ({ editor, getOption }) => {
      const mode = (0, import_react58.usePluginOption)(
        { key: "aiChat" },
        "mode"
      );
      (0, import_react57.useChatChunk)({
        onChunk: ({ chunk, isFirst, nodes }) => {
          if (isFirst && mode == "insert") {
            editor.tf.withoutSaving(() => {
              editor.tf.insertNodes(
                {
                  children: [{ text: "" }],
                  type: import_react57.AIChatPlugin.key
                },
                {
                  at: import_plate32.PathApi.next(editor.selection.focus.path.slice(0, 1))
                }
              );
            });
            editor.setOption(import_react57.AIChatPlugin, "streaming", true);
          }
          if (mode === "insert" && nodes.length > 0) {
            (0, import_plate_ai.withAIBatch)(
              editor,
              () => {
                if (!getOption("streaming")) return;
                editor.tf.withScrolling(() => {
                  (0, import_plate_ai.streamInsertChunk)(editor, chunk, {
                    textProps: {
                      ai: true
                    }
                  });
                });
              },
              { split: isFirst }
            );
          }
        },
        onFinish: () => {
          editor.setOption(import_react57.AIChatPlugin, "streaming", false);
          editor.setOption(import_react57.AIChatPlugin, "_blockChunks", "");
          editor.setOption(import_react57.AIChatPlugin, "_blockPath", null);
        }
      });
    }
  })
];

// src/components/editor/plugins/align-plugin.ts
var import_react59 = require("@udecode/plate-alignment/react");
var import_plate_heading6 = require("@udecode/plate-heading");
var import_react60 = require("@udecode/plate-media/react");
var import_react61 = require("@udecode/plate/react");
var alignPlugin = import_react59.AlignPlugin.extend({
  inject: {
    targetPlugins: [
      import_react61.ParagraphPlugin.key,
      ...import_plate_heading6.HEADING_LEVELS,
      import_react60.MediaEmbedPlugin.key,
      import_react60.ImagePlugin.key
    ]
  }
});

// src/components/editor/plugins/autoformat-plugin.ts
var import_plate_autoformat = require("@udecode/plate-autoformat");
var import_react62 = require("@udecode/plate-autoformat/react");
var import_react63 = require("@udecode/plate-basic-marks/react");
var import_react64 = require("@udecode/plate-block-quote/react");
var import_plate_code_block3 = require("@udecode/plate-code-block");
var import_react65 = require("@udecode/plate-code-block/react");
var import_plate_heading7 = require("@udecode/plate-heading");
var import_react66 = require("@udecode/plate-highlight/react");
var import_react67 = require("@udecode/plate-horizontal-rule/react");
var import_plate_indent_list4 = require("@udecode/plate-indent-list");
var import_react68 = require("@udecode/plate-toggle/react");
var import_react69 = require("@udecode/plate/react");
var autoformatMarks = [
  {
    match: "***",
    mode: "mark",
    type: [import_react63.BoldPlugin.key, import_react63.ItalicPlugin.key]
  },
  {
    match: "__*",
    mode: "mark",
    type: [import_react63.UnderlinePlugin.key, import_react63.ItalicPlugin.key]
  },
  {
    match: "__**",
    mode: "mark",
    type: [import_react63.UnderlinePlugin.key, import_react63.BoldPlugin.key]
  },
  {
    match: "___***",
    mode: "mark",
    type: [import_react63.UnderlinePlugin.key, import_react63.BoldPlugin.key, import_react63.ItalicPlugin.key]
  },
  {
    match: "**",
    mode: "mark",
    type: import_react63.BoldPlugin.key
  },
  {
    match: "__",
    mode: "mark",
    type: import_react63.UnderlinePlugin.key
  },
  {
    match: "*",
    mode: "mark",
    type: import_react63.ItalicPlugin.key
  },
  {
    match: "_",
    mode: "mark",
    type: import_react63.ItalicPlugin.key
  },
  {
    match: "~~",
    mode: "mark",
    type: import_react63.StrikethroughPlugin.key
  },
  {
    match: "^",
    mode: "mark",
    type: import_react63.SuperscriptPlugin.key
  },
  {
    match: "~",
    mode: "mark",
    type: import_react63.SubscriptPlugin.key
  },
  {
    match: "==",
    mode: "mark",
    type: import_react66.HighlightPlugin.key
  },
  {
    match: "\u2261",
    mode: "mark",
    type: import_react66.HighlightPlugin.key
  },
  {
    match: "`",
    mode: "mark",
    type: import_react63.CodePlugin.key
  }
];
var autoformatBlocks = [
  {
    match: "# ",
    mode: "block",
    type: import_plate_heading7.HEADING_KEYS.h1
  },
  {
    match: "## ",
    mode: "block",
    type: import_plate_heading7.HEADING_KEYS.h2
  },
  {
    match: "### ",
    mode: "block",
    type: import_plate_heading7.HEADING_KEYS.h3
  },
  {
    match: "#### ",
    mode: "block",
    type: import_plate_heading7.HEADING_KEYS.h4
  },
  {
    match: "##### ",
    mode: "block",
    type: import_plate_heading7.HEADING_KEYS.h5
  },
  {
    match: "###### ",
    mode: "block",
    type: import_plate_heading7.HEADING_KEYS.h6
  },
  {
    match: "> ",
    mode: "block",
    type: import_react64.BlockquotePlugin.key
  },
  {
    match: "```",
    mode: "block",
    type: import_react65.CodeBlockPlugin.key,
    format: (editor) => {
      (0, import_plate_code_block3.insertEmptyCodeBlock)(editor, {
        defaultType: import_react69.ParagraphPlugin.key,
        insertNodesOptions: { select: true }
      });
    }
  },
  {
    match: "+ ",
    mode: "block",
    preFormat: import_react68.openNextToggles,
    type: import_react68.TogglePlugin.key
  },
  {
    match: ["---", "\u2014-", "___ "],
    mode: "block",
    type: import_react67.HorizontalRulePlugin.key,
    format: (editor) => {
      editor.tf.setNodes({ type: import_react67.HorizontalRulePlugin.key });
      editor.tf.insertNodes({
        children: [{ text: "" }],
        type: import_react69.ParagraphPlugin.key
      });
    }
  }
];
var autoformatIndentLists = [
  {
    match: ["* ", "- "],
    mode: "block",
    type: "list",
    format: (editor) => {
      (0, import_plate_indent_list4.toggleIndentList)(editor, {
        listStyleType: import_plate_indent_list4.ListStyleType.Disc
      });
    }
  },
  {
    match: [String.raw`^\d+\.$ `, String.raw`^\d+\)$ `],
    matchByRegex: true,
    mode: "block",
    type: "list",
    format: (editor, { matchString }) => {
      (0, import_plate_indent_list4.toggleIndentList)(editor, {
        listRestartPolite: Number(matchString) || 1,
        listStyleType: import_plate_indent_list4.ListStyleType.Decimal
      });
    }
  },
  {
    match: ["[] "],
    mode: "block",
    type: "list",
    format: (editor) => {
      (0, import_plate_indent_list4.toggleIndentList)(editor, {
        listStyleType: import_plate_indent_list4.INDENT_LIST_KEYS.todo
      });
      editor.tf.setNodes({
        checked: false,
        listStyleType: import_plate_indent_list4.INDENT_LIST_KEYS.todo
      });
    }
  },
  {
    match: ["[x] "],
    mode: "block",
    type: "list",
    format: (editor) => {
      (0, import_plate_indent_list4.toggleIndentList)(editor, {
        listStyleType: import_plate_indent_list4.INDENT_LIST_KEYS.todo
      });
      editor.tf.setNodes({
        checked: true,
        listStyleType: import_plate_indent_list4.INDENT_LIST_KEYS.todo
      });
    }
  }
];
var autoformatPlugin = import_react62.AutoformatPlugin.configure({
  options: {
    enableUndoOnDelete: true,
    rules: [
      ...autoformatBlocks,
      ...autoformatMarks,
      ...import_plate_autoformat.autoformatSmartQuotes,
      ...import_plate_autoformat.autoformatPunctuation,
      ...import_plate_autoformat.autoformatLegal,
      ...import_plate_autoformat.autoformatLegalHtml,
      ...import_plate_autoformat.autoformatArrow,
      ...import_plate_autoformat.autoformatMath,
      ...autoformatIndentLists
    ].map(
      (rule) => ({
        ...rule,
        query: (editor) => !editor.api.some({
          match: { type: editor.getType(import_react65.CodeBlockPlugin) }
        })
      })
    )
  }
});

// src/components/editor/plugins/basic-nodes-plugins.tsx
var import_lowlight2 = require("lowlight");
var import_react70 = require("@udecode/plate-basic-marks/react");
var import_react71 = require("@udecode/plate-block-quote/react");
var import_react72 = require("@udecode/plate-code-block/react");
var import_react73 = require("@udecode/plate-heading/react");
var lowlight2 = (0, import_lowlight2.createLowlight)(import_lowlight2.all);
var basicNodesPlugins = [
  import_react73.HeadingPlugin.configure({ options: { levels: 3 } }),
  import_react71.BlockquotePlugin,
  import_react72.CodeBlockPlugin.configure({ options: { lowlight: lowlight2 } }),
  import_react70.BasicMarksPlugin
];

// src/components/editor/plugins/block-menu-plugins.ts
var import_react82 = require("@udecode/plate-selection/react");

// src/components/editor/ui/block-context-menu.tsx
var React12 = __toESM(require("react"));
var import_react74 = require("@udecode/plate-ai/react");
var import_react75 = require("@udecode/plate-block-quote/react");
var import_plate_heading8 = require("@udecode/plate-heading");
var import_react76 = require("@udecode/plate-indent-list/react");
var import_react77 = require("@udecode/plate-selection/react");
var import_react78 = require("@udecode/plate/react");

// src/hooks/use-is-touch-device.ts
var React11 = __toESM(require("react"));
function useIsTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = React11.useState(false);
  React11.useEffect(() => {
    function onResize() {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0
      );
    }
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return isTouchDevice;
}

// src/components/editor/ui/context-menu.tsx
var import_lucide_react15 = require("lucide-react");
var ContextMenuPrimitive = __toESM(require("@radix-ui/react-context-menu"));
var import_jsx_runtime51 = require("react/jsx-runtime");
function ContextMenu({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(ContextMenuPrimitive.Root, { "data-slot": "context-menu", ...props });
}
function ContextMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(ContextMenuPrimitive.Trigger, { "data-slot": "context-menu-trigger", ...props });
}
function ContextMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(ContextMenuPrimitive.Group, { "data-slot": "context-menu-group", ...props });
}
function ContextMenuSub({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(ContextMenuPrimitive.Sub, { "data-slot": "context-menu-sub", ...props });
}
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
    ContextMenuPrimitive.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_lucide_react15.ChevronRightIcon, { className: "ml-auto" })
      ]
    }
  );
}
function ContextMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    ContextMenuPrimitive.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    }
  );
}
function ContextMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    ContextMenuPrimitive.Content,
    {
      "data-slot": "context-menu-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    ContextMenuPrimitive.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}

// src/components/editor/ui/block-context-menu.tsx
var import_jsx_runtime52 = require("react/jsx-runtime");
function BlockContextMenu({ children }) {
  const { api, editor } = (0, import_react78.useEditorPlugin)(import_react77.BlockMenuPlugin);
  const [value, setValue] = React12.useState(null);
  const isTouch = useIsTouchDevice();
  const [readOnly] = (0, import_react78.usePlateState)("readOnly");
  const handleTurnInto = React12.useCallback(
    (type) => {
      editor.getApi(import_react77.BlockSelectionPlugin).blockSelection.getNodes().forEach(([node, path]) => {
        if (node[import_react76.IndentListPlugin.key]) {
          editor.tf.unsetNodes([import_react76.IndentListPlugin.key, "indent"], {
            at: path
          });
        }
        editor.tf.toggleBlock(type, { at: path });
      });
    },
    [editor]
  );
  const handleAlign = React12.useCallback(
    (align) => {
      editor.getTransforms(import_react77.BlockSelectionPlugin).blockSelection.setNodes({ align });
    },
    [editor]
  );
  if (isTouch) {
    return children;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
    ContextMenu,
    {
      onOpenChange: (open) => {
        if (!open) {
          setTimeout(() => {
            api.blockMenu.hide();
          }, 0);
        }
      },
      modal: false,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
          ContextMenuTrigger,
          {
            asChild: true,
            onContextMenu: (event) => {
              const dataset = event.target.dataset;
              const disabled = dataset?.slateEditor === "true" || readOnly;
              if (disabled) return event.preventDefault();
              api.blockMenu.show(import_react77.BLOCK_CONTEXT_MENU_ID, {
                x: event.clientX,
                y: event.clientY
              });
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "w-full", children })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
          ContextMenuContent,
          {
            className: "w-64",
            onCloseAutoFocus: (e) => {
              e.preventDefault();
              editor.getApi(import_react77.BlockSelectionPlugin).blockSelection.focus();
              if (value === "askAI") {
                editor.getApi(import_react74.AIChatPlugin).aiChat.show();
              }
              setValue(null);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(ContextMenuGroup, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                  ContextMenuItem,
                  {
                    onClick: () => {
                      setValue("askAI");
                    },
                    children: "Ask AI"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                  ContextMenuItem,
                  {
                    onClick: () => {
                      editor.getTransforms(import_react77.BlockSelectionPlugin).blockSelection.removeNodes();
                      editor.tf.focus();
                    },
                    children: "Delete"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                  ContextMenuItem,
                  {
                    onClick: () => {
                      editor.getTransforms(import_react77.BlockSelectionPlugin).blockSelection.duplicate();
                    },
                    children: "Duplicate"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(ContextMenuSub, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ContextMenuSubTrigger, { children: "Turn into" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(ContextMenuSubContent, { className: "w-48", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                      ContextMenuItem,
                      {
                        onClick: () => handleTurnInto(import_react78.ParagraphPlugin.key),
                        children: "Paragraph"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ContextMenuItem, { onClick: () => handleTurnInto(import_plate_heading8.HEADING_KEYS.h1), children: "Heading 1" }),
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ContextMenuItem, { onClick: () => handleTurnInto(import_plate_heading8.HEADING_KEYS.h2), children: "Heading 2" }),
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ContextMenuItem, { onClick: () => handleTurnInto(import_plate_heading8.HEADING_KEYS.h3), children: "Heading 3" }),
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                      ContextMenuItem,
                      {
                        onClick: () => handleTurnInto(import_react75.BlockquotePlugin.key),
                        children: "Blockquote"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(ContextMenuGroup, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                  ContextMenuItem,
                  {
                    onClick: () => editor.getTransforms(import_react77.BlockSelectionPlugin).blockSelection.setIndent(1),
                    children: "Indent"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                  ContextMenuItem,
                  {
                    onClick: () => editor.getTransforms(import_react77.BlockSelectionPlugin).blockSelection.setIndent(-1),
                    children: "Outdent"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(ContextMenuSub, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ContextMenuSubTrigger, { children: "Align" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(ContextMenuSubContent, { className: "w-48", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ContextMenuItem, { onClick: () => handleAlign("left"), children: "Left" }),
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ContextMenuItem, { onClick: () => handleAlign("center"), children: "Center" }),
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ContextMenuItem, { onClick: () => handleAlign("right"), children: "Right" })
                  ] })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}

// src/components/editor/plugins/block-selection-plugins.tsx
var import_react81 = require("@udecode/plate-selection/react");

// src/components/editor/ui/block-selection.tsx
var import_class_variance_authority7 = require("class-variance-authority");
var import_plate_dnd = require("@udecode/plate-dnd");
var import_react79 = require("@udecode/plate-selection/react");
var import_react80 = require("@udecode/plate/react");
var import_jsx_runtime53 = require("react/jsx-runtime");
var blockSelectionVariants = (0, import_class_variance_authority7.cva)(
  "pointer-events-none absolute inset-0 z-1 bg-brand/[.13] transition-opacity",
  {
    defaultVariants: {
      active: true
    },
    variants: {
      active: {
        false: "opacity-0",
        true: "opacity-100"
      }
    }
  }
);
function BlockSelection({
  className,
  ...props
}) {
  const isBlockSelected = (0, import_react79.useBlockSelected)();
  const isDragging = (0, import_react80.usePluginOption)(import_plate_dnd.DndPlugin, "isDragging");
  if (!isBlockSelected) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
    "div",
    {
      className: cn(
        blockSelectionVariants({
          active: isBlockSelected && !isDragging
        }),
        className
      ),
      "data-slot": "block-selection",
      ...props
    }
  );
}

// src/components/editor/plugins/block-selection-plugins.tsx
var import_jsx_runtime54 = require("react/jsx-runtime");
var blockSelectionPlugins = [
  import_react81.BlockSelectionPlugin.configure(({ editor }) => ({
    options: {
      enableContextMenu: true,
      isSelectable: (element, path) => {
        return !["code_line", "column", "td"].includes(element.type) && !editor.api.block({ above: true, at: path, match: { type: "tr" } });
      }
    },
    render: {
      belowRootNodes: (props) => {
        if (!props.attributes.className?.includes("slate-selectable"))
          return null;
        return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(BlockSelection, {});
      }
    }
  }))
];
var blockSelectionReadOnlyPlugin = import_react81.BlockSelectionPlugin.configure({
  api: {},
  extendEditor: null,
  handlers: {},
  options: {},
  render: {},
  useHooks: null
});

// src/components/editor/plugins/block-menu-plugins.ts
var blockMenuPlugins = [
  ...blockSelectionPlugins,
  import_react82.BlockMenuPlugin.configure({
    render: { aboveEditable: BlockContextMenu }
  })
];

// src/components/editor/plugins/comments-plugin.tsx
var import_plate33 = require("@udecode/plate");
var import_plate_comments = require("@udecode/plate-comments");
var import_react83 = require("@udecode/plate/react");
var commentsPlugin = (0, import_react83.toTPlatePlugin)(
  import_plate_comments.BaseCommentsPlugin,
  {
    handlers: {
      onClick: ({ api, event, setOption, type }) => {
        let leaf = event.target;
        let isSet = false;
        const unsetActiveSuggestion = () => {
          setOption("activeId", null);
          isSet = true;
        };
        if (!(0, import_plate33.isSlateString)(leaf)) unsetActiveSuggestion();
        while (leaf.parentElement) {
          if (leaf.classList.contains(`slate-${type}`)) {
            const commentsEntry = api.comment.node();
            if (!commentsEntry) {
              unsetActiveSuggestion();
              break;
            }
            const id = api.comment.nodeId(commentsEntry[0]);
            setOption("activeId", id ?? null);
            isSet = true;
            break;
          }
          leaf = leaf.parentElement;
        }
        if (!isSet) unsetActiveSuggestion();
      }
    },
    options: {
      activeId: null,
      commentingBlock: null,
      hotkey: ["meta+shift+m", "ctrl+shift+m"],
      hoverId: null,
      uniquePathMap: /* @__PURE__ */ new Map()
    },
    useHooks: ({ editor, getOptions }) => {
      const { hotkey } = getOptions();
      (0, import_react83.useHotkeys)(
        hotkey,
        (e) => {
          if (!editor.selection) return;
          e.preventDefault();
          if (!editor.api.isExpanded()) return;
        },
        {
          enableOnContentEditable: true
        }
      );
    }
  }
);

// src/components/editor/plugins/delete-plugins.ts
var import_react84 = require("@udecode/plate-horizontal-rule/react");
var import_react85 = require("@udecode/plate-media/react");
var import_plate_select = require("@udecode/plate-select");
var deletePlugins = [
  import_plate_select.SelectOnBackspacePlugin.configure({
    options: {
      query: {
        allow: [
          import_react85.ImagePlugin.key,
          import_react85.VideoPlugin.key,
          import_react85.AudioPlugin.key,
          import_react85.FilePlugin.key,
          import_react85.MediaEmbedPlugin.key,
          import_react84.HorizontalRulePlugin.key
        ]
      }
    }
  }),
  import_plate_select.DeletePlugin
];

// src/components/editor/plugins/discussion-plugin.tsx
var import_react130 = require("@udecode/plate/react");

// src/components/editor/ui/block-discussion.tsx
var React24 = __toESM(require("react"));
var import_lucide_react21 = require("lucide-react");
var import_plate38 = require("@udecode/plate");
var import_plate_comments3 = require("@udecode/plate-comments");
var import_react127 = require("@udecode/plate-comments/react");
var import_react128 = require("@udecode/plate-suggestion/react");
var import_react129 = require("@udecode/plate/react");

// src/components/editor/plugins/suggestion-plugin.tsx
var import_plate37 = require("@udecode/plate");
var import_plate_suggestion2 = require("@udecode/plate-suggestion");
var import_react126 = require("@udecode/plate/react");

// src/components/editor/ui/block-suggestion.tsx
var React23 = __toESM(require("react"));
var import_lucide_react20 = require("lucide-react");
var import_plate36 = require("@udecode/plate");
var import_react113 = require("@udecode/plate-block-quote/react");
var import_react114 = require("@udecode/plate-callout/react");
var import_react115 = require("@udecode/plate-code-block/react");
var import_plate_heading9 = require("@udecode/plate-heading");
var import_react116 = require("@udecode/plate-heading/react");
var import_react117 = require("@udecode/plate-horizontal-rule/react");
var import_plate_indent_list5 = require("@udecode/plate-indent-list");
var import_react118 = require("@udecode/plate-indent-list/react");
var import_react119 = require("@udecode/plate-layout/react");
var import_react120 = require("@udecode/plate-math/react");
var import_react121 = require("@udecode/plate-media/react");
var import_plate_suggestion = require("@udecode/plate-suggestion");
var import_react122 = require("@udecode/plate-suggestion/react");
var import_react123 = require("@udecode/plate-table/react");
var import_react124 = require("@udecode/plate-toggle/react");
var import_react125 = require("@udecode/plate/react");

// src/components/editor/ui/avatar.tsx
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"));
var import_jsx_runtime55 = require("react/jsx-runtime");
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}

// src/components/editor/ui/comment.tsx
var React22 = __toESM(require("react"));
var import_date_fns = require("date-fns");
var import_lucide_react19 = require("lucide-react");
var import_react111 = require("@udecode/plate-comments/react");
var import_react112 = require("@udecode/plate/react");

// src/components/editor/ui/comment-create-form.tsx
var React21 = __toESM(require("react"));
var import_lucide_react18 = require("lucide-react");
var import_cn3 = require("@udecode/cn");
var import_plate35 = require("@udecode/plate");
var import_react102 = require("@udecode/plate-ai/react");
var import_react103 = require("@udecode/plate-basic-marks/react");
var import_plate_comments2 = require("@udecode/plate-comments");
var import_react104 = require("@udecode/plate-comments/react");
var import_react105 = require("@udecode/plate-date/react");
var import_react106 = require("@udecode/plate-emoji/react");
var import_react107 = require("@udecode/plate-link/react");
var import_react108 = require("@udecode/plate-math/react");
var import_react109 = require("@udecode/plate-mention/react");
var import_react110 = require("@udecode/plate/react");

// src/components/editor/ui/ai-leaf.tsx
var import_class_variance_authority8 = require("class-variance-authority");
var import_react86 = require("@udecode/plate-ai/react");
var import_react87 = require("@udecode/plate/react");
var import_jsx_runtime56 = require("react/jsx-runtime");
var aiIndicatorVariants = (0, import_class_variance_authority8.cva)(
  'after:ml-1.5 after:inline-block after:h-3 after:w-3 after:animate-pulse after:rounded-full after:bg-primary after:align-middle after:content-[""]'
);
function AILeaf(props) {
  const streamingLeaf = props.editor.getApi(import_react86.AIChatPlugin).aiChat.node({ streaming: true });
  const isLast = streamingLeaf?.[0] === props.text;
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
    import_react87.PlateText,
    {
      className: cn(
        "border-b-2 border-b-purple-100 bg-purple-50 text-purple-800",
        "transition-all duration-200 ease-in-out",
        isLast && aiIndicatorVariants()
      ),
      ...props
    }
  );
}

// src/components/editor/ui/emoji-input-element.tsx
var React15 = __toESM(require("react"));
var import_plate_emoji = require("@udecode/plate-emoji");
var import_react91 = require("@udecode/plate-emoji/react");
var import_react92 = require("@udecode/plate/react");

// src/hooks/use-debounce.ts
var React13 = __toESM(require("react"));
var useDebounce = (value, delay2 = 500) => {
  const [debouncedValue, setDebouncedValue] = React13.useState(value);
  React13.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay2);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay2]);
  return debouncedValue;
};

// src/components/editor/ui/inline-combobox.tsx
var React14 = __toESM(require("react"));
var import_class_variance_authority9 = require("class-variance-authority");
var import_react88 = require("@ariakit/react");
var import_plate_combobox = require("@udecode/plate-combobox");
var import_react89 = require("@udecode/plate-combobox/react");
var import_react90 = require("@udecode/plate/react");
var import_jsx_runtime57 = require("react/jsx-runtime");
var InlineComboboxContext = React14.createContext(
  null
);
var defaultFilter = ({ group, keywords = [], label, value }, search) => {
  const uniqueTerms = new Set(
    [value, ...keywords, group, label].filter(Boolean)
  );
  return Array.from(uniqueTerms).some(
    (keyword) => (0, import_plate_combobox.filterWords)(keyword, search)
  );
};
var InlineCombobox = ({
  children,
  element,
  filter = defaultFilter,
  hideWhenNoValue = false,
  setValue: setValueProp,
  showTrigger = true,
  trigger,
  value: valueProp
}) => {
  const editor = (0, import_react90.useEditorRef)();
  const inputRef = React14.useRef(null);
  const cursorState = (0, import_react89.useHTMLInputCursorState)(inputRef);
  const [valueState, setValueState] = React14.useState("");
  const hasValueProp = valueProp !== void 0;
  const value = hasValueProp ? valueProp : valueState;
  const setValue = React14.useCallback(
    (newValue) => {
      setValueProp?.(newValue);
      if (!hasValueProp) {
        setValueState(newValue);
      }
    },
    [setValueProp, hasValueProp]
  );
  const [insertPoint, setInsertPoint] = React14.useState(null);
  React14.useEffect(() => {
    const path = editor.api.findPath(element);
    if (!path) return;
    const point = editor.api.before(path);
    if (!point) return;
    const pointRef = editor.api.pointRef(point);
    setInsertPoint(pointRef);
    return () => {
      pointRef.unref();
    };
  }, [editor, element]);
  const { props: inputProps, removeInput } = (0, import_react89.useComboboxInput)({
    cancelInputOnBlur: false,
    cursorState,
    ref: inputRef,
    onCancelInput: (cause) => {
      if (cause !== "backspace") {
        editor.tf.insertText(trigger + value, {
          at: insertPoint?.current ?? void 0
        });
      }
      if (cause === "arrowLeft" || cause === "arrowRight") {
        editor.tf.move({
          distance: 1,
          reverse: cause === "arrowLeft"
        });
      }
    }
  });
  const [hasEmpty, setHasEmpty] = React14.useState(false);
  const contextValue = React14.useMemo(
    () => ({
      filter,
      inputProps,
      inputRef,
      removeInput,
      setHasEmpty,
      showTrigger,
      trigger
    }),
    [
      trigger,
      showTrigger,
      filter,
      inputRef,
      inputProps,
      removeInput,
      setHasEmpty
    ]
  );
  const store = (0, import_react88.useComboboxStore)({
    // open: ,
    setValue: (newValue) => React14.startTransition(() => setValue(newValue))
  });
  const items2 = store.useState("items");
  React14.useEffect(() => {
    if (!store.getState().activeId) {
      store.setActiveId(store.first());
    }
  }, [items2, store]);
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { contentEditable: false, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
    import_react88.ComboboxProvider,
    {
      open: (items2.length > 0 || hasEmpty) && (!hideWhenNoValue || value.length > 0),
      store,
      children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(InlineComboboxContext.Provider, { value: contextValue, children })
    }
  ) });
};
var InlineComboboxInput = React14.forwardRef(({ className, ...props }, propRef) => {
  const {
    inputProps,
    inputRef: contextRef,
    showTrigger,
    trigger
  } = React14.useContext(InlineComboboxContext);
  const store = (0, import_react88.useComboboxContext)();
  const value = store.useState("value");
  const ref = (0, import_react90.useComposedRef)(propRef, contextRef);
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(import_jsx_runtime57.Fragment, { children: [
    showTrigger && trigger,
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("span", { className: "relative min-h-[1lh]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
        "span",
        {
          className: "invisible overflow-hidden text-nowrap",
          "aria-hidden": "true",
          children: value || "\u200B"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
        import_react88.Combobox,
        {
          ref,
          className: cn(
            "absolute top-0 left-0 size-full bg-transparent outline-none",
            className
          ),
          value,
          autoSelect: true,
          ...inputProps,
          ...props
        }
      )
    ] })
  ] });
});
InlineComboboxInput.displayName = "InlineComboboxInput";
var InlineComboboxContent = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react88.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
    import_react88.ComboboxPopover,
    {
      className: cn(
        "z-500 max-h-[288px] w-[300px] overflow-y-auto rounded-md bg-popover shadow-md",
        className
      ),
      ...props
    }
  ) });
};
var comboboxItemVariants = (0, import_class_variance_authority9.cva)(
  "relative mx-1 flex h-[28px] items-center rounded-sm px-2 text-sm text-foreground outline-none select-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    defaultVariants: {
      interactive: true
    },
    variants: {
      interactive: {
        false: "",
        true: "cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground data-[active-item=true]:bg-accent data-[active-item=true]:text-accent-foreground"
      }
    }
  }
);
var InlineComboboxItem = ({
  className,
  focusEditor = true,
  group,
  keywords,
  label,
  onClick,
  ...props
}) => {
  const { value } = props;
  const { filter, removeInput } = React14.useContext(InlineComboboxContext);
  const store = (0, import_react88.useComboboxContext)();
  const search = filter && store.useState("value");
  const visible = React14.useMemo(
    () => !filter || filter({ group, keywords, label, value }, search),
    [filter, group, keywords, label, value, search]
  );
  if (!visible) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
    import_react88.ComboboxItem,
    {
      className: cn(comboboxItemVariants(), className),
      onClick: (event) => {
        removeInput(focusEditor);
        onClick?.(event);
      },
      ...props
    }
  );
};
var InlineComboboxEmpty = ({
  children,
  className
}) => {
  const { setHasEmpty } = React14.useContext(InlineComboboxContext);
  const store = (0, import_react88.useComboboxContext)();
  const items2 = store.useState("items");
  React14.useEffect(() => {
    setHasEmpty(true);
    return () => {
      setHasEmpty(false);
    };
  }, [setHasEmpty]);
  if (items2.length > 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
    "div",
    {
      className: cn(comboboxItemVariants({ interactive: false }), className),
      children
    }
  );
};
function InlineComboboxGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
    import_react88.ComboboxGroup,
    {
      ...props,
      className: cn(
        "hidden py-1.5 not-last:border-b [&:has([role=option])]:block",
        className
      )
    }
  );
}
function InlineComboboxGroupLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
    import_react88.ComboboxGroupLabel,
    {
      ...props,
      className: cn(
        "mt-1.5 mb-2 px-3 text-xs font-medium text-muted-foreground",
        className
      )
    }
  );
}

// src/components/editor/ui/emoji-input-element.tsx
var import_jsx_runtime58 = require("react/jsx-runtime");
function EmojiInputElement(props) {
  const { children, editor, element } = props;
  const data = (0, import_react92.usePluginOption)(import_react91.EmojiPlugin, "data");
  const [value, setValue] = React15.useState("");
  const debouncedValue = useDebounce(value, 100);
  const isPending = value !== debouncedValue;
  const filteredEmojis = React15.useMemo(() => {
    if (debouncedValue.trim().length === 0) return [];
    return import_plate_emoji.EmojiInlineIndexSearch.getInstance(data).search(debouncedValue.replace(/:$/, "")).get();
  }, [data, debouncedValue]);
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(BlockWithPlus, { element, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_react92.PlateElement, { as: "span", "data-slate-value": element.value, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
      InlineCombobox,
      {
        value,
        element,
        filter: false,
        setValue,
        trigger: ":",
        hideWhenNoValue: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(InlineComboboxInput, {}),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(InlineComboboxContent, { children: [
            !isPending && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(InlineComboboxEmpty, { children: "No results" }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(InlineComboboxGroup, { children: filteredEmojis.map((emoji) => /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
              InlineComboboxItem,
              {
                value: emoji.name,
                onClick: () => (0, import_plate_emoji.insertEmoji)(editor, emoji),
                children: [
                  emoji.skins[0].native,
                  " ",
                  emoji.name
                ]
              },
              emoji.id
            )) })
          ] })
        ]
      }
    ),
    children
  ] }) });
}

// src/components/editor/ui/inline-equation-element.tsx
var React17 = __toESM(require("react"));
var import_lucide_react17 = require("lucide-react");
var import_react96 = require("@udecode/plate-math/react");
var import_react97 = require("@udecode/plate/react");

// src/components/editor/ui/equation-popover.tsx
var React16 = __toESM(require("react"));
var import_lucide_react16 = require("lucide-react");
var import_react_textarea_autosize = __toESM(require("react-textarea-autosize"));
var import_react93 = require("@udecode/plate-math/react");
var import_react94 = require("@udecode/plate-selection/react");
var import_react95 = require("@udecode/plate/react");
var import_jsx_runtime59 = require("react/jsx-runtime");
var EquationInput = (0, import_react95.createPrimitiveComponent)(import_react_textarea_autosize.default)({
  propsHook: import_react93.useEquationInput
});
var EquationPopoverContent = ({
  className,
  isInline,
  open,
  setOpen,
  ...props
}) => {
  const editor = (0, import_react95.useEditorRef)();
  const readOnly = (0, import_react95.useReadOnly)();
  const element = (0, import_react95.useElement)();
  React16.useEffect(() => {
    if (isInline && open) {
      setOpen(true);
    }
  }, [isInline, open, setOpen]);
  if (readOnly) return null;
  const onClose = () => {
    setOpen(false);
    if (isInline) {
      editor.tf.select(element, { next: true });
    } else {
      editor.getApi(import_react94.BlockSelectionPlugin).blockSelection.set(element.id);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
    PopoverContent,
    {
      className: "flex gap-2",
      onEscapeKeyDown: (e) => {
        e.preventDefault();
      },
      contentEditable: false,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
          EquationInput,
          {
            className: cn("max-h-[50vh] grow resize-none p-2 text-sm", className),
            state: { isInline, open, onClose },
            autoFocus: true,
            ...props
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(Button, { variant: "secondary", className: "px-3", onClick: onClose, children: [
          "Done ",
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_lucide_react16.CornerDownLeftIcon, { className: "size-3.5" })
        ] })
      ]
    }
  );
};

// src/components/editor/ui/inline-equation-element.tsx
var import_jsx_runtime60 = require("react/jsx-runtime");
function InlineEquationElement(props) {
  const element = props.element;
  const katexRef = React17.useRef(null);
  const selected = (0, import_react97.useSelected)();
  const isCollapsed = (0, import_react97.useEditorSelector)(
    (editor) => editor.api.isCollapsed(),
    []
  );
  const [open, setOpen] = React17.useState(selected && isCollapsed);
  (0, import_react96.useEquationElement)({
    element,
    katexRef,
    options: {
      displayMode: true,
      errorColor: "#cc0000",
      fleqn: false,
      leqno: false,
      macros: { "\\f": "#1f(#2)" },
      output: "htmlAndMathml",
      strict: "warn",
      throwOnError: false,
      trust: false
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(BlockWithPlus, { element, children: /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(
    import_react97.PlateElement,
    {
      ...props,
      className: cn(
        "inline-block rounded-sm select-none [&_.katex-display]:my-0"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(Popover, { open, onOpenChange: setOpen, modal: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(
            "div",
            {
              className: cn(
                'after:absolute after:inset-0 after:-top-0.5 after:-left-1 after:z-1 after:h-[calc(100%)+4px] after:w-[calc(100%+8px)] after:rounded-sm after:content-[""]',
                "h-6",
                element.texExpression.length > 0 && open && "after:bg-brand/15",
                element.texExpression.length === 0 && "text-muted-foreground after:bg-neutral-500/10"
              ),
              contentEditable: false,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
                  "span",
                  {
                    ref: katexRef,
                    className: cn(
                      element.texExpression.length === 0 && "hidden",
                      "font-mono leading-none"
                    )
                  }
                ),
                element.texExpression.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_lucide_react17.RadicalIcon, { className: "mr-1 inline-block h-[19px] w-4 py-[1.5px] align-text-bottom" }),
                  "New equation"
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
            EquationPopoverContent,
            {
              className: "my-auto",
              open,
              placeholder: "E = mc^2",
              setOpen,
              isInline: true
            }
          )
        ] }),
        props.children
      ]
    }
  ) });
}

// src/components/editor/ui/link-element.tsx
var import_react98 = require("@udecode/plate-link/react");
var import_react99 = require("@udecode/plate/react");
var import_jsx_runtime61 = require("react/jsx-runtime");
function LinkElement(props) {
  const { props: linkProps } = (0, import_react98.useLink)({ element: props.element });
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
    import_react99.PlateElement,
    {
      ...props,
      as: "a",
      className: "font-medium text-primary underline decoration-primary underline-offset-4",
      attributes: {
        ...props.attributes,
        ...linkProps
      },
      children: props.children
    }
  ) });
}

// src/components/editor/ui/mention-element.tsx
var React19 = __toESM(require("react"));
var import_plate34 = require("@udecode/plate");
var import_react100 = require("@udecode/plate/react");

// src/hooks/use-mounted.ts
var React18 = __toESM(require("react"));
function useMounted() {
  const [mounted, setMounted] = React18.useState(false);
  React18.useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

// src/components/editor/ui/mention-element.tsx
var import_jsx_runtime62 = require("react/jsx-runtime");
function MentionElement(props) {
  const element = props.element;
  const selected = (0, import_react100.useSelected)();
  const focused = (0, import_react100.useFocused)();
  const mounted = useMounted();
  const readOnly = (0, import_react100.useReadOnly)();
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(BlockWithPlus, { element, children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
    import_react100.PlateElement,
    {
      ...props,
      className: cn(
        "inline-block rounded-md bg-muted px-1.5 py-0.5 align-baseline text-sm font-medium",
        !readOnly && "cursor-pointer",
        selected && focused && "ring-2 ring-ring",
        element.children[0].bold === true && "font-bold",
        element.children[0].italic === true && "italic",
        element.children[0].underline === true && "underline"
      ),
      attributes: {
        ...props.attributes,
        contentEditable: false,
        "data-slate-value": element.value,
        draggable: true
      },
      children: mounted && import_plate34.IS_APPLE ? (
        // Mac OS IME https://github.com/ianstormtaylor/slate/issues/3490
        /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(React19.Fragment, { children: [
          props.children,
          props.prefix,
          element.value
        ] })
      ) : (
        // Others like Android https://github.com/ianstormtaylor/slate/pull/5360
        /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(React19.Fragment, { children: [
          props.prefix,
          element.value,
          props.children
        ] })
      )
    }
  ) });
}

// src/components/editor/ui/mention-input-element.tsx
var React20 = __toESM(require("react"));
var import_plate_mention2 = require("@udecode/plate-mention");
var import_react101 = require("@udecode/plate/react");
var import_jsx_runtime63 = require("react/jsx-runtime");
var onSelectItem = (0, import_plate_mention2.getMentionOnSelectItem)();
function MentionInputElement(props) {
  const { editor, element } = props;
  const [search, setSearch] = React20.useState("");
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(BlockWithPlus, { element, children: /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(import_react101.PlateElement, { ...props, as: "span", "data-slate-value": element.value, children: [
    /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(
      InlineCombobox,
      {
        value: search,
        element,
        setValue: setSearch,
        showTrigger: false,
        trigger: "@",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("span", { className: "inline-block rounded-md bg-muted px-1.5 py-0.5 align-baseline text-sm ring-ring focus-within:ring-2", children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(InlineComboboxInput, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(InlineComboboxContent, { className: "my-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(InlineComboboxEmpty, { children: "No results" }),
            /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(InlineComboboxGroup, { children: MENTIONABLES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
              InlineComboboxItem,
              {
                value: item.text,
                onClick: () => onSelectItem(editor, item, search),
                children: item.text
              },
              item.key
            )) })
          ] })
        ]
      }
    ),
    props.children
  ] }) });
}
var MENTIONABLES = [
  { key: "0", text: "Aayla Secura" },
  { key: "1", text: "Adi Gallia" },
  {
    key: "2",
    text: "Admiral Dodd Rancit"
  },
  {
    key: "3",
    text: "Admiral Firmus Piett"
  },
  {
    key: "4",
    text: "Admiral Gial Ackbar"
  },
  { key: "5", text: "Admiral Ozzel" },
  { key: "6", text: "Admiral Raddus" },
  {
    key: "7",
    text: "Admiral Terrinald Screed"
  },
  { key: "8", text: "Admiral Trench" },
  {
    key: "9",
    text: "Admiral U.O. Statura"
  },
  { key: "10", text: "Agen Kolar" },
  { key: "11", text: "Agent Kallus" },
  {
    key: "12",
    text: "Aiolin and Morit Astarte"
  },
  { key: "13", text: "Aks Moe" },
  { key: "14", text: "Almec" },
  { key: "15", text: "Alton Kastle" },
  { key: "16", text: "Amee" },
  { key: "17", text: "AP-5" },
  { key: "18", text: "Armitage Hux" },
  { key: "19", text: "Artoo" },
  { key: "20", text: "Arvel Crynyd" },
  { key: "21", text: "Asajj Ventress" },
  { key: "22", text: "Aurra Sing" },
  { key: "23", text: "AZI-3" },
  { key: "24", text: "Bala-Tik" },
  { key: "25", text: "Barada" },
  { key: "26", text: "Bargwill Tomder" },
  { key: "27", text: "Baron Papanoida" },
  { key: "28", text: "Barriss Offee" },
  { key: "29", text: "Baze Malbus" },
  { key: "30", text: "Bazine Netal" },
  { key: "31", text: "BB-8" },
  { key: "32", text: "BB-9E" },
  { key: "33", text: "Ben Quadinaros" },
  { key: "34", text: "Berch Teller" },
  { key: "35", text: "Beru Lars" },
  { key: "36", text: "Bib Fortuna" },
  {
    key: "37",
    text: "Biggs Darklighter"
  },
  { key: "38", text: "Black Krrsantan" },
  { key: "39", text: "Bo-Katan Kryze" },
  { key: "40", text: "Boba Fett" },
  { key: "41", text: "Bobbajo" },
  { key: "42", text: "Bodhi Rook" },
  { key: "43", text: "Borvo the Hutt" },
  { key: "44", text: "Boss Nass" },
  { key: "45", text: "Bossk" },
  {
    key: "46",
    text: "Breha Antilles-Organa"
  },
  { key: "47", text: "Bren Derlin" },
  { key: "48", text: "Brendol Hux" },
  { key: "49", text: "BT-1" }
];

// src/components/editor/ui/comment-create-form.tsx
var import_jsx_runtime64 = require("react/jsx-runtime");
var useCommentEditor = (options = {}, deps = []) => {
  const commentEditor = useCreateEditor(
    {
      id: "comment",
      components: {
        [import_react102.AIPlugin.key]: AILeaf,
        [import_react103.BoldPlugin.key]: (0, import_cn3.withProps)(import_react110.PlateLeaf, { as: "strong" }),
        [import_react105.DatePlugin.key]: DateElement,
        [import_react106.EmojiInputPlugin.key]: EmojiInputElement,
        [import_react108.InlineEquationPlugin.key]: InlineEquationElement,
        [import_react103.ItalicPlugin.key]: (0, import_cn3.withProps)(import_react110.PlateLeaf, { as: "em" }),
        [import_react107.LinkPlugin.key]: LinkElement,
        [import_react109.MentionInputPlugin.key]: MentionInputElement,
        [import_react109.MentionPlugin.key]: MentionElement,
        [import_react103.StrikethroughPlugin.key]: (0, import_cn3.withProps)(import_react110.PlateLeaf, { as: "s" }),
        [import_react103.UnderlinePlugin.key]: (0, import_cn3.withProps)(import_react110.PlateLeaf, { as: "u" })
        // [SlashInputPlugin.key]: SlashInputElement,
      },
      placeholders: false,
      plugins: [import_react103.BasicMarksPlugin],
      value: [],
      ...options
    },
    deps
  );
  return commentEditor;
};
function CommentCreateForm({
  autoFocus = false,
  className,
  discussionId: discussionIdProp,
  focusOnMount = false
}) {
  const discussions = (0, import_react110.usePluginOption)(discussionPlugin, "discussions");
  const editor = (0, import_react110.useEditorRef)();
  const commentId = (0, import_react104.useCommentId)();
  const discussionId = discussionIdProp ?? commentId;
  const userInfo = (0, import_react110.usePluginOption)(discussionPlugin, "currentUser");
  const [commentValue, setCommentValue] = React21.useState();
  const commentContent = React21.useMemo(
    () => commentValue ? import_plate35.NodeApi.string({ children: commentValue, type: "p" }) : "",
    [commentValue]
  );
  const commentEditor = useCommentEditor({}, []);
  React21.useEffect(() => {
    if (commentEditor && focusOnMount) {
      commentEditor.tf.focus();
    }
  }, [commentEditor, focusOnMount]);
  const onAddComment = React21.useCallback(async () => {
    if (!commentValue) return;
    commentEditor.tf.reset();
    if (discussionId) {
      const discussion = discussions.find((d) => d.id === discussionId);
      if (!discussion) {
        const newDiscussion2 = {
          id: discussionId,
          comments: [
            {
              id: (0, import_plate35.nanoid)(),
              contentRich: commentValue,
              createdAt: /* @__PURE__ */ new Date(),
              discussionId,
              isEdited: false,
              userId: editor.getOption(discussionPlugin, "currentUserId")
            }
          ],
          createdAt: /* @__PURE__ */ new Date(),
          isResolved: false,
          userId: editor.getOption(discussionPlugin, "currentUserId")
        };
        editor.setOption(discussionPlugin, "discussions", [
          ...discussions,
          newDiscussion2
        ]);
        return;
      }
      const comment = {
        id: (0, import_plate35.nanoid)(),
        contentRich: commentValue,
        createdAt: /* @__PURE__ */ new Date(),
        discussionId,
        isEdited: false,
        userId: editor.getOption(discussionPlugin, "currentUserId")
      };
      const updatedDiscussion = {
        ...discussion,
        comments: [...discussion.comments, comment]
      };
      const updatedDiscussions = discussions.filter((d) => d.id !== discussionId).concat(updatedDiscussion);
      editor.setOption(discussionPlugin, "discussions", updatedDiscussions);
      return;
    }
    const commentsNodeEntry = editor.getApi(import_react104.CommentsPlugin).comment.nodes({ at: [], isDraft: true });
    if (commentsNodeEntry.length === 0) return;
    const documentContent = commentsNodeEntry.map(([node]) => node.text).join("");
    const _discussionId = (0, import_plate35.nanoid)();
    const newDiscussion = {
      id: _discussionId,
      comments: [
        {
          id: (0, import_plate35.nanoid)(),
          contentRich: commentValue,
          createdAt: /* @__PURE__ */ new Date(),
          discussionId: _discussionId,
          isEdited: false,
          userId: editor.getOption(discussionPlugin, "currentUserId")
        }
      ],
      createdAt: /* @__PURE__ */ new Date(),
      documentContent,
      isResolved: false,
      userId: editor.getOption(discussionPlugin, "currentUserId")
    };
    editor.setOption(discussionPlugin, "discussions", [
      ...discussions,
      newDiscussion
    ]);
    const id = newDiscussion.id;
    commentsNodeEntry.forEach(([, path]) => {
      editor.tf.setNodes(
        {
          [(0, import_plate_comments2.getCommentKey)(id)]: true
        },
        { at: path, split: true }
      );
      editor.tf.unsetNodes([(0, import_plate_comments2.getDraftCommentKey)()], { at: path });
    });
  }, [commentValue, commentEditor.tf, discussionId, editor, discussions]);
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { className: cn("flex w-full", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("div", { className: "mt-2 mr-1 shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(Avatar, { className: "size-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(AvatarImage, { alt: userInfo?.name, src: userInfo?.avatarUrl }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(AvatarFallback, { children: userInfo?.name?.[0] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("div", { className: "relative flex grow gap-2", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
      import_react110.Plate,
      {
        onChange: ({ value }) => {
          setCommentValue(value);
        },
        editor: commentEditor,
        children: /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(EditorContainer, { variant: "comment", children: [
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
            Editor,
            {
              variant: "comment",
              className: "min-h-[25px] grow pt-0.5 pr-8",
              onKeyDown: (e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  onAddComment();
                }
              },
              placeholder: "Reply...",
              autoComplete: "off",
              autoFocus
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
            Button,
            {
              size: "icon",
              variant: "ghost",
              className: "absolute right-0.5 bottom-0.5 ml-auto shrink-0",
              disabled: commentContent.trim().length === 0,
              onClick: (e) => {
                e.stopPropagation();
                onAddComment();
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("div", { className: "flex size-6 items-center justify-center rounded-full", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_lucide_react18.ArrowUpIcon, {}) })
            }
          )
        ] })
      }
    ) })
  ] });
}

// src/components/editor/ui/comment.tsx
var import_jsx_runtime65 = require("react/jsx-runtime");
var formatCommentDate = (date) => {
  const now = /* @__PURE__ */ new Date();
  const diffMinutes = (0, import_date_fns.differenceInMinutes)(now, date);
  const diffHours = (0, import_date_fns.differenceInHours)(now, date);
  const diffDays = (0, import_date_fns.differenceInDays)(now, date);
  if (diffMinutes < 60) {
    return `${diffMinutes}m`;
  }
  if (diffHours < 24) {
    return `${diffHours}h`;
  }
  if (diffDays < 2) {
    return `${diffDays}d`;
  }
  return (0, import_date_fns.format)(date, "MM/dd/yyyy");
};
function Comment(props) {
  const {
    comment,
    discussionLength,
    documentContent,
    editingId,
    index,
    setEditingId,
    showDocumentContent = false,
    onEditorClick
  } = props;
  const editor = (0, import_react112.useEditorRef)();
  const userInfo = (0, import_react112.usePluginOption)(discussionPlugin, "user", comment.userId);
  const currentUserId = (0, import_react112.usePluginOption)(discussionPlugin, "currentUserId");
  const resolveDiscussion = async (id) => {
    const updatedDiscussions = editor.getOption(discussionPlugin, "discussions").map((discussion) => {
      if (discussion.id === id) {
        return { ...discussion, isResolved: true };
      }
      return discussion;
    });
    editor.setOption(discussionPlugin, "discussions", updatedDiscussions);
  };
  const removeDiscussion = async (id) => {
    const updatedDiscussions = editor.getOption(discussionPlugin, "discussions").filter((discussion) => discussion.id !== id);
    editor.setOption(discussionPlugin, "discussions", updatedDiscussions);
  };
  const updateComment = async (input) => {
    const updatedDiscussions = editor.getOption(discussionPlugin, "discussions").map((discussion) => {
      if (discussion.id === input.discussionId) {
        const updatedComments = discussion.comments.map((comment2) => {
          if (comment2.id === input.id) {
            return {
              ...comment2,
              contentRich: input.contentRich,
              isEdited: true,
              updatedAt: /* @__PURE__ */ new Date()
            };
          }
          return comment2;
        });
        return { ...discussion, comments: updatedComments };
      }
      return discussion;
    });
    editor.setOption(discussionPlugin, "discussions", updatedDiscussions);
  };
  const { tf } = (0, import_react112.useEditorPlugin)(import_react111.CommentsPlugin);
  const isMyComment = currentUserId === comment.userId;
  const initialValue = comment.contentRich;
  const commentEditor = useCommentEditor(
    {
      id: comment.id,
      value: initialValue
    },
    [initialValue]
  );
  const onCancel = () => {
    setEditingId(null);
    commentEditor.tf.replaceNodes(initialValue, {
      at: [],
      children: true
    });
  };
  const onSave = () => {
    void updateComment({
      id: comment.id,
      contentRich: commentEditor.children,
      discussionId: comment.discussionId,
      isEdited: true
    });
    setEditingId(null);
  };
  const onResolveComment = () => {
    void resolveDiscussion(comment.discussionId);
    tf.comment.unsetMark({ id: comment.discussionId });
  };
  const isFirst = index === 0;
  const isLast = index === discussionLength - 1;
  const isEditing = editingId && editingId === comment.id;
  const [hovering, setHovering] = React22.useState(false);
  const [dropdownOpen, setDropdownOpen] = React22.useState(false);
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(
    "div",
    {
      onMouseEnter: () => setHovering(true),
      onMouseLeave: () => setHovering(false),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { className: "relative flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(Avatar, { className: "size-5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(AvatarImage, { alt: userInfo?.name, src: userInfo?.avatarUrl }),
            /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(AvatarFallback, { children: userInfo?.name?.[0] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("h4", { className: "mx-2 text-sm leading-none font-semibold", children: userInfo?.name }),
          /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { className: "text-xs leading-none text-muted-foreground/80", children: [
            /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("span", { className: "mr-1", children: formatCommentDate(new Date(comment.createdAt)) }),
            comment.isEdited && /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("span", { children: "(edited)" })
          ] }),
          isMyComment && (hovering || dropdownOpen) && /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { className: "absolute top-0 right-0 flex space-x-1", children: [
            index === 0 && /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
              Button,
              {
                variant: "ghost",
                className: "h-6 p-1 text-muted-foreground",
                onClick: onResolveComment,
                type: "button",
                children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_lucide_react19.CheckIcon, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
              CommentMoreDropdown,
              {
                onCloseAutoFocus: () => {
                  setTimeout(() => {
                    commentEditor.tf.focus({ edge: "endEditor" });
                  }, 0);
                },
                onRemoveComment: () => {
                  if (discussionLength === 1) {
                    tf.comment.unsetMark({ id: comment.discussionId });
                    void removeDiscussion(comment.discussionId);
                  }
                },
                comment,
                dropdownOpen,
                setDropdownOpen,
                setEditingId
              }
            )
          ] })
        ] }),
        isFirst && showDocumentContent && /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { className: "text-subtle-foreground relative mt-1 flex pl-[32px] text-sm", children: [
          discussionLength > 1 && /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { className: "absolute top-[5px] left-3 h-full w-0.5 shrink-0 bg-muted" }),
          /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { className: "my-px w-0.5 shrink-0 bg-highlight" }),
          documentContent && /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { className: "ml-2", children: documentContent })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { className: "relative my-1 pl-[26px]", children: [
          !isLast && /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { className: "absolute top-0 left-3 h-full w-0.5 shrink-0 bg-muted" }),
          /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_react112.Plate, { readOnly: !isEditing, editor: commentEditor, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(EditorContainer, { variant: "comment", children: [
            /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
              Editor,
              {
                variant: "comment",
                className: "w-auto grow",
                onClick: () => onEditorClick?.()
              }
            ),
            isEditing && /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { className: "ml-auto flex shrink-0 gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                Button,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "size-[28px]",
                  onClick: (e) => {
                    e.stopPropagation();
                    void onCancel();
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { className: "flex size-5 shrink-0 items-center justify-center rounded-[50%] bg-primary/40", children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_lucide_react19.XIcon, { className: "size-3 stroke-[3px] text-background" }) })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                Button,
                {
                  size: "icon",
                  variant: "ghost",
                  onClick: (e) => {
                    e.stopPropagation();
                    void onSave();
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { className: "flex size-5 shrink-0 items-center justify-center rounded-[50%] bg-brand", children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_lucide_react19.CheckIcon, { className: "size-3 stroke-[3px] text-background" }) })
                }
              )
            ] })
          ] }) })
        ] })
      ]
    }
  );
}
function CommentMoreDropdown(props) {
  const {
    comment,
    dropdownOpen,
    setDropdownOpen,
    setEditingId,
    onCloseAutoFocus,
    onRemoveComment
  } = props;
  const editor = (0, import_react112.useEditorRef)();
  const selectedEditCommentRef = React22.useRef(false);
  const onDeleteComment = React22.useCallback(() => {
    if (!comment.id)
      return alert("You are operating too quickly, please try again later.");
    const updatedDiscussions = editor.getOption(discussionPlugin, "discussions").map((discussion) => {
      if (discussion.id !== comment.discussionId) {
        return discussion;
      }
      const commentIndex = discussion.comments.findIndex(
        (c) => c.id === comment.id
      );
      if (commentIndex === -1) {
        return discussion;
      }
      return {
        ...discussion,
        comments: [
          ...discussion.comments.slice(0, commentIndex),
          ...discussion.comments.slice(commentIndex + 1)
        ]
      };
    });
    editor.setOption(discussionPlugin, "discussions", updatedDiscussions);
    onRemoveComment?.();
  }, [comment.discussionId, comment.id, editor, onRemoveComment]);
  const onEditComment = React22.useCallback(() => {
    selectedEditCommentRef.current = true;
    if (!comment.id)
      return alert("You are operating too quickly, please try again later.");
    setEditingId(comment.id);
  }, [comment.id, setEditingId]);
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(
    DropdownMenu,
    {
      open: dropdownOpen,
      onOpenChange: setDropdownOpen,
      modal: false,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(DropdownMenuTrigger, { asChild: true, onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(Button, { variant: "ghost", className: cn("h-6 p-1 text-muted-foreground"), children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_lucide_react19.MoreHorizontalIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
          DropdownMenuContent,
          {
            className: "w-48",
            onCloseAutoFocus: (e) => {
              if (selectedEditCommentRef.current) {
                onCloseAutoFocus?.();
                selectedEditCommentRef.current = false;
              }
              return e.preventDefault();
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(DropdownMenuGroup, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(DropdownMenuItem, { onClick: onEditComment, children: [
                /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_lucide_react19.PencilIcon, { className: "size-4" }),
                "Edit comment"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(DropdownMenuItem, { onClick: onDeleteComment, children: [
                /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_lucide_react19.TrashIcon, { className: "size-4" }),
                "Delete comment"
              ] })
            ] })
          }
        )
      ]
    }
  );
}

// src/components/editor/ui/block-suggestion.tsx
var import_jsx_runtime66 = require("react/jsx-runtime");
var BLOCK_SUGGESTION = "__block__";
var TYPE_TEXT_MAP = {
  [import_react121.AudioPlugin.key]: () => "Audio",
  [import_react113.BlockquotePlugin.key]: () => "Blockquote",
  [import_react114.CalloutPlugin.key]: () => "Callout",
  [import_react115.CodeBlockPlugin.key]: () => "Code Block",
  [import_react119.ColumnPlugin.key]: () => "Column",
  [import_react120.EquationPlugin.key]: () => "Equation",
  [import_react121.FilePlugin.key]: () => "File",
  [import_plate_heading9.HEADING_KEYS.h1]: () => `Heading 1`,
  [import_plate_heading9.HEADING_KEYS.h2]: () => `Heading 2`,
  [import_plate_heading9.HEADING_KEYS.h3]: () => `Heading 3`,
  [import_plate_heading9.HEADING_KEYS.h4]: () => `Heading 4`,
  [import_plate_heading9.HEADING_KEYS.h5]: () => `Heading 5`,
  [import_plate_heading9.HEADING_KEYS.h6]: () => `Heading 6`,
  [import_react117.HorizontalRulePlugin.key]: () => "Horizontal Rule",
  [import_react121.ImagePlugin.key]: () => "Image",
  [import_react121.MediaEmbedPlugin.key]: () => "Media",
  [import_react125.ParagraphPlugin.key]: (node) => {
    if (node?.[import_react118.IndentListPlugin.key] === import_plate_indent_list5.INDENT_LIST_KEYS.todo)
      return "Todo List";
    if (node?.[import_react118.IndentListPlugin.key] === import_plate_indent_list5.ListStyleType.Decimal)
      return "Ordered List";
    if (node?.[import_react118.IndentListPlugin.key] === import_plate_indent_list5.ListStyleType.Disc) return "List";
    return "Paragraph";
  },
  [import_react123.TablePlugin.key]: () => "Table",
  [import_react116.TocPlugin.key]: () => "Table of Contents",
  [import_react124.TogglePlugin.key]: () => "Toggle",
  [import_react121.VideoPlugin.key]: () => "Video"
};
var BlockSuggestionCard = ({
  idx,
  isLast,
  suggestion
}) => {
  const { api, editor } = (0, import_react125.useEditorPlugin)(import_react122.SuggestionPlugin);
  const userInfo = (0, import_react125.usePluginOption)(discussionPlugin, "user", suggestion.userId);
  const accept = (suggestion2) => {
    api.suggestion.withoutSuggestions(() => {
      (0, import_plate_suggestion.acceptSuggestion)(editor, suggestion2);
    });
  };
  const reject = (suggestion2) => {
    api.suggestion.withoutSuggestions(() => {
      (0, import_plate_suggestion.rejectSuggestion)(editor, suggestion2);
    });
  };
  const [hovering, setHovering] = React23.useState(false);
  const suggestionText2Array = (text) => {
    if (text === BLOCK_SUGGESTION) return ["line breaks"];
    return text.split(BLOCK_SUGGESTION).filter(Boolean);
  };
  const [editingId, setEditingId] = React23.useState(null);
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(
    "div",
    {
      className: "relative",
      onMouseEnter: () => setHovering(true),
      onMouseLeave: () => setHovering(false),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex flex-col p-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "relative flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(Avatar, { className: "size-5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(AvatarImage, { alt: userInfo?.name, src: userInfo?.avatarUrl }),
              /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(AvatarFallback, { children: userInfo?.name?.[0] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("h4", { className: "mx-2 text-sm leading-none font-semibold", children: userInfo?.name }),
            /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "text-xs leading-none text-muted-foreground/80", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("span", { className: "mr-1", children: formatCommentDate(new Date(suggestion.createdAt)) }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "relative mt-1 mb-4 pl-[32px]", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex flex-col gap-2", children: [
            suggestion.type === "remove" && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(React23.Fragment, { children: suggestionText2Array(suggestion.text).map((text, index) => /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("span", { className: "text-sm text-muted-foreground", children: "Delete:" }),
              /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("span", { className: "text-sm", children: text }, index)
            ] }, index)) }),
            suggestion.type === "insert" && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(React23.Fragment, { children: suggestionText2Array(suggestion.newText).map(
              (text, index) => /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("span", { className: "text-sm text-muted-foreground", children: "Add:" }),
                /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("span", { className: "text-sm", children: text || "line breaks" }, index)
              ] }, index)
            ) }),
            suggestion.type === "replace" && /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex flex-col gap-2", children: [
              suggestionText2Array(suggestion.newText).map(
                (text, index) => /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(React23.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(
                  "div",
                  {
                    className: "flex items-start gap-2 text-brand/80",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("span", { className: "text-sm", children: "with:" }),
                      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("span", { className: "text-sm", children: text || "line breaks" })
                    ]
                  },
                  index
                ) }, index)
              ),
              suggestionText2Array(suggestion.text).map((text, index) => /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(React23.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("span", { className: "text-sm text-muted-foreground", children: index === 0 ? "Replace:" : "Delete:" }),
                /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("span", { className: "text-sm", children: text || "line breaks" })
              ] }, index) }, index))
            ] }),
            suggestion.type === "update" && /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("span", { className: "text-sm text-muted-foreground", children: [
                Object.keys(suggestion.properties).map((key) => /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("span", { children: [
                  "Un",
                  key
                ] }, key)),
                Object.keys(suggestion.newProperties).map((key) => /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("span", { children: key.charAt(0).toUpperCase() + key.slice(1) }, key))
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("span", { className: "text-sm", children: suggestion.newText })
            ] })
          ] }) }),
          suggestion.comments.map((comment, index) => /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
            Comment,
            {
              comment,
              discussionLength: suggestion.comments.length,
              documentContent: "__suggestion__",
              editingId,
              index,
              setEditingId
            },
            comment.id ?? index
          )),
          hovering && /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "absolute top-4 right-4 flex gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
              Button,
              {
                variant: "ghost",
                className: "h-6 p-1 text-muted-foreground",
                onClick: () => accept(suggestion),
                children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_lucide_react20.CheckIcon, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
              Button,
              {
                variant: "ghost",
                className: "h-6 p-1 text-muted-foreground",
                onClick: () => reject(suggestion),
                children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_lucide_react20.XIcon, { className: "size-4" })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(CommentCreateForm, { discussionId: suggestion.suggestionId })
        ] }),
        !isLast && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "h-px w-full bg-muted" })
      ]
    },
    `${suggestion.suggestionId}-${idx}`
  );
};
var useResolveSuggestion = (suggestionNodes, blockPath) => {
  const discussions = (0, import_react125.usePluginOption)(discussionPlugin, "discussions");
  const { api, editor, getOption, setOption } = (0, import_react125.useEditorPlugin)(suggestionPlugin);
  suggestionNodes.forEach(([node]) => {
    const id = api.suggestion.nodeId(node);
    const map = getOption("uniquePathMap");
    if (!id) return;
    const previousPath = map.get(id);
    if (import_plate36.PathApi.isPath(previousPath)) {
      const nodes = api.suggestion.node({ id, at: previousPath, isText: true });
      const parentNode = api.node(previousPath);
      let lineBreakId = null;
      if (parentNode && import_plate36.ElementApi.isElement(parentNode[0])) {
        lineBreakId = api.suggestion.nodeId(parentNode[0]) ?? null;
      }
      if (!nodes && lineBreakId !== id) {
        return setOption("uniquePathMap", new Map(map).set(id, blockPath));
      }
      return;
    }
    setOption("uniquePathMap", new Map(map).set(id, blockPath));
  });
  const resolvedSuggestion = React23.useMemo(() => {
    const map = getOption("uniquePathMap");
    if (suggestionNodes.length === 0) return [];
    const suggestionIds = new Set(
      suggestionNodes.flatMap(([node]) => {
        if (import_plate36.TextApi.isText(node)) {
          const dataList = api.suggestion.dataList(node);
          const includeUpdate = dataList.some(
            (data) => data.type === "update"
          );
          if (!includeUpdate) return api.suggestion.nodeId(node);
          return dataList.filter((data) => data.type === "update").map((d) => d.id);
        }
        if (import_plate36.ElementApi.isElement(node)) {
          return api.suggestion.nodeId(node);
        }
      }).filter(Boolean)
    );
    const res = [];
    suggestionIds.forEach((id) => {
      if (!id) return;
      const path = map.get(id);
      if (!path || !import_plate36.PathApi.isPath(path)) return;
      if (!import_plate36.PathApi.equals(path, blockPath)) return;
      const entries = [
        ...editor.api.nodes({
          at: [],
          mode: "all",
          match: (n) => n[import_react122.SuggestionPlugin.key] && n[(0, import_plate_suggestion.getSuggestionKey)(id)] || api.suggestion.nodeId(n) === id
        })
      ];
      entries.sort(([, path1], [, path2]) => {
        return import_plate36.PathApi.isChild(path1, path2) ? -1 : 1;
      });
      let newText = "";
      let text = "";
      let properties = {};
      let newProperties = {};
      entries.forEach(([node]) => {
        if (import_plate36.TextApi.isText(node)) {
          const dataList = api.suggestion.dataList(node);
          dataList.forEach((data) => {
            if (data.id !== id) return;
            switch (data.type) {
              case "insert": {
                newText += node.text;
                break;
              }
              case "remove": {
                text += node.text;
                break;
              }
              case "update": {
                properties = {
                  ...properties,
                  ...data.properties
                };
                newProperties = {
                  ...newProperties,
                  ...data.newProperties
                };
                newText += node.text;
                break;
              }
            }
          });
        } else {
          const lineBreakData = api.suggestion.isBlockSuggestion(node) ? node.suggestion : void 0;
          if (lineBreakData?.id !== (0, import_plate_suggestion.keyId2SuggestionId)(id)) return;
          if (lineBreakData.type === "insert") {
            newText += lineBreakData.isLineBreak ? BLOCK_SUGGESTION : BLOCK_SUGGESTION + TYPE_TEXT_MAP[node.type](node);
          } else if (lineBreakData.type === "remove") {
            text += lineBreakData.isLineBreak ? BLOCK_SUGGESTION : BLOCK_SUGGESTION + TYPE_TEXT_MAP[node.type](node);
          }
        }
      });
      if (entries.length === 0) return;
      const nodeData = api.suggestion.suggestionData(entries[0][0]);
      if (!nodeData) return;
      const comments = discussions.find((s) => s.id === id)?.comments || [];
      const createdAt = new Date(nodeData.createdAt);
      const keyId = (0, import_plate_suggestion.getSuggestionKey)(id);
      if (nodeData.type === "update") {
        return res.push({
          comments,
          createdAt,
          keyId,
          newProperties,
          newText,
          properties,
          suggestionId: (0, import_plate_suggestion.keyId2SuggestionId)(id),
          type: "update",
          userId: nodeData.userId
        });
      }
      if (newText.length > 0 && text.length > 0) {
        return res.push({
          comments,
          createdAt,
          keyId,
          newText,
          suggestionId: (0, import_plate_suggestion.keyId2SuggestionId)(id),
          text,
          type: "replace",
          userId: nodeData.userId
        });
      }
      if (newText.length > 0) {
        return res.push({
          comments,
          createdAt,
          keyId,
          newText,
          suggestionId: (0, import_plate_suggestion.keyId2SuggestionId)(id),
          type: "insert",
          userId: nodeData.userId
        });
      }
      if (text.length > 0) {
        return res.push({
          comments,
          createdAt,
          keyId,
          suggestionId: (0, import_plate_suggestion.keyId2SuggestionId)(id),
          text,
          type: "remove",
          userId: nodeData.userId
        });
      }
    });
    return res;
  }, [
    api.suggestion,
    blockPath,
    discussions,
    editor.api,
    getOption,
    suggestionNodes
  ]);
  return resolvedSuggestion;
};
var isResolvedSuggestion = (suggestion) => {
  return "suggestionId" in suggestion;
};
function BlockSuggestion({ element }) {
  const suggestionData = element.suggestion;
  if (suggestionData?.isLineBreak) return null;
  const isRemove = suggestionData?.type === "remove";
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
    "div",
    {
      className: cn(
        "pointer-events-none absolute inset-0 z-1 border-2 border-brand/[0.8] transition-opacity",
        isRemove && "border-gray-300"
      ),
      contentEditable: false
    }
  );
}

// src/components/editor/plugins/suggestion-plugin.tsx
var import_jsx_runtime67 = require("react/jsx-runtime");
var suggestionPlugin = (0, import_react126.toTPlatePlugin)(
  import_plate_suggestion2.BaseSuggestionPlugin,
  ({ editor }) => ({
    handlers: {
      // unset active suggestion when clicking outside of suggestion
      onClick: ({ api, event, setOption, type }) => {
        let leaf = event.target;
        let isSet = false;
        const unsetActiveSuggestion = () => {
          setOption("activeId", null);
          isSet = true;
        };
        if (!(0, import_plate37.isSlateString)(leaf)) unsetActiveSuggestion();
        while (leaf.parentElement && !(0, import_plate37.isSlateElement)(leaf.parentElement) && !(0, import_plate37.isSlateEditor)(leaf.parentElement)) {
          if (leaf.classList.contains(`slate-${type}`)) {
            const suggestionEntry = api.suggestion.node({ isText: true });
            if (!suggestionEntry) {
              unsetActiveSuggestion();
              break;
            }
            const id = api.suggestion.nodeId(suggestionEntry[0]);
            setOption("activeId", id ?? null);
            isSet = true;
            break;
          }
          leaf = leaf.parentElement;
        }
        if (!isSet) unsetActiveSuggestion();
      }
    },
    options: {
      activeId: null,
      currentUserId: editor.getOption(discussionPlugin, "currentUserId"),
      hoverId: null,
      uniquePathMap: /* @__PURE__ */ new Map()
    },
    render: {
      belowRootNodes: ({ api, element }) => {
        if (!api.suggestion.isBlockSuggestion(element)) {
          return null;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(BlockSuggestion, { element });
      }
    }
  })
);

// src/components/editor/ui/block-discussion.tsx
var import_jsx_runtime68 = require("react/jsx-runtime");
var BlockDiscussion = (props) => {
  const { editor, element } = props;
  const commentsApi = editor.getApi(import_react127.CommentsPlugin).comment;
  const blockPath = editor.api.findPath(element);
  if (!blockPath || blockPath.length > 1) return;
  const draftCommentNode = commentsApi.node({ at: blockPath, isDraft: true });
  const commentNodes = [...commentsApi.nodes({ at: blockPath })];
  const suggestionNodes = [
    ...editor.getApi(import_react128.SuggestionPlugin).suggestion.nodes({ at: blockPath })
  ];
  if (commentNodes.length === 0 && suggestionNodes.length === 0 && !draftCommentNode) {
    return;
  }
  return (props2) => /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
    BlockCommentsContent,
    {
      blockPath,
      commentNodes,
      draftCommentNode,
      suggestionNodes,
      ...props2
    }
  );
};
var BlockCommentsContent = ({
  blockPath,
  children,
  commentNodes,
  draftCommentNode,
  suggestionNodes
}) => {
  const editor = (0, import_react129.useEditorRef)();
  const resolvedSuggestions = useResolveSuggestion(suggestionNodes, blockPath);
  const resolvedDiscussions = useResolvedDiscussion(commentNodes, blockPath);
  const suggestionsCount = resolvedSuggestions.length;
  const discussionsCount = resolvedDiscussions.length;
  const totalCount = suggestionsCount + discussionsCount;
  const activeSuggestionId = (0, import_react129.usePluginOption)(suggestionPlugin, "activeId");
  const activeSuggestion = activeSuggestionId && resolvedSuggestions.find((s) => s.suggestionId === activeSuggestionId);
  const commentingBlock = (0, import_react129.usePluginOption)(commentsPlugin, "commentingBlock");
  const activeCommentId = (0, import_react129.usePluginOption)(commentsPlugin, "activeId");
  const isCommenting = activeCommentId === (0, import_plate_comments3.getDraftCommentKey)();
  const activeDiscussion = activeCommentId && resolvedDiscussions.find((d) => d.id === activeCommentId);
  const noneActive = !activeSuggestion && !activeDiscussion;
  const sortedMergedData = [
    ...resolvedDiscussions,
    ...resolvedSuggestions
  ].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  const selected = resolvedDiscussions.some((d) => d.id === activeCommentId) || resolvedSuggestions.some((s) => s.suggestionId === activeSuggestionId);
  const [_open, setOpen] = React24.useState(selected);
  const commentingCurrent = !!commentingBlock && import_plate38.PathApi.equals(blockPath, commentingBlock);
  const open = _open || selected || isCommenting && !!draftCommentNode && commentingCurrent;
  const anchorElement = React24.useMemo(() => {
    let activeNode;
    if (activeSuggestion) {
      activeNode = suggestionNodes.find(
        ([node]) => import_plate38.TextApi.isText(node) && editor.getApi(import_react128.SuggestionPlugin).suggestion.nodeId(node) === activeSuggestion.suggestionId
      );
    }
    if (activeCommentId) {
      if (activeCommentId === (0, import_plate_comments3.getDraftCommentKey)()) {
        activeNode = draftCommentNode;
      } else {
        activeNode = commentNodes.find(
          ([node]) => editor.getApi(import_react127.CommentsPlugin).comment.nodeId(node) === activeCommentId
        );
      }
    }
    if (!activeNode) return null;
    return editor.api.toDOMNode(activeNode[0]);
  }, [
    open,
    activeSuggestion,
    activeCommentId,
    editor.api,
    suggestionNodes,
    draftCommentNode,
    commentNodes
  ]);
  if (suggestionsCount + resolvedDiscussions.length === 0 && !draftCommentNode)
    return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "w-full", children });
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "flex w-full justify-between", children: /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
    Popover,
    {
      open,
      onOpenChange: (_open_) => {
        if (!_open_ && isCommenting && draftCommentNode) {
          editor.tf.unsetNodes((0, import_plate_comments3.getDraftCommentKey)(), {
            at: [],
            mode: "lowest",
            match: (n) => n[(0, import_plate_comments3.getDraftCommentKey)()]
          });
        }
        setOpen(_open_);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "w-full", children }),
        anchorElement && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
          PopoverAnchor,
          {
            asChild: true,
            className: "w-full",
            virtualRef: { current: anchorElement }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
          PopoverContent,
          {
            className: "max-h-[min(50dvh,calc(-24px+var(--radix-popper-available-height)))] w-[380px] max-w-[calc(100vw-24px)] min-w-[130px] overflow-y-auto p-0 data-[state=closed]:opacity-0",
            onCloseAutoFocus: (e) => e.preventDefault(),
            onOpenAutoFocus: (e) => e.preventDefault(),
            align: "center",
            side: "bottom",
            children: isCommenting ? /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(CommentCreateForm, { className: "p-4", focusOnMount: true }) : /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(React24.Fragment, { children: noneActive ? sortedMergedData.map(
              (item, index) => isResolvedSuggestion(item) ? /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
                BlockSuggestionCard,
                {
                  idx: index,
                  isLast: index === sortedMergedData.length - 1,
                  suggestion: item
                },
                item.suggestionId
              ) : /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
                BlockComment,
                {
                  discussion: item,
                  isLast: index === sortedMergedData.length - 1
                },
                item.id
              )
            ) : /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(React24.Fragment, { children: [
              activeSuggestion && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
                BlockSuggestionCard,
                {
                  idx: 0,
                  isLast: true,
                  suggestion: activeSuggestion
                },
                activeSuggestion.suggestionId
              ),
              activeDiscussion && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(BlockComment, { discussion: activeDiscussion, isLast: true })
            ] }) })
          }
        ),
        totalCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "relative left-0 size-0 select-none", children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
          Button,
          {
            variant: "ghost",
            className: "mt-1 ml-1 flex h-6 gap-1 px-1.5 py-0 text-muted-foreground/80 hover:text-muted-foreground/80 data-[active=true]:bg-muted",
            "data-active": open,
            contentEditable: false,
            children: [
              suggestionsCount > 0 && discussionsCount === 0 && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_lucide_react21.PencilLineIcon, { className: "size-4 shrink-0" }),
              suggestionsCount === 0 && discussionsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_lucide_react21.MessageSquareTextIcon, { className: "size-4 shrink-0" }),
              suggestionsCount > 0 && discussionsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_lucide_react21.MessagesSquareIcon, { className: "size-4 shrink-0" }),
              /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("span", { className: "text-xs font-semibold", children: totalCount })
            ]
          }
        ) }) })
      ]
    }
  ) });
};
var BlockComment = ({
  discussion,
  isLast
}) => {
  const [editingId, setEditingId] = React24.useState(null);
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(React24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { className: "p-4", children: [
      discussion.comments.map((comment, index) => /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
        Comment,
        {
          comment,
          discussionLength: discussion.comments.length,
          documentContent: discussion?.documentContent,
          editingId,
          index,
          setEditingId,
          showDocumentContent: true
        },
        comment.id ?? index
      )),
      /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(CommentCreateForm, { discussionId: discussion.id })
    ] }),
    !isLast && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "h-px w-full bg-muted" })
  ] }, discussion.id);
};
var useResolvedDiscussion = (commentNodes, blockPath) => {
  const { api, getOption, setOption } = (0, import_react129.useEditorPlugin)(commentsPlugin);
  const discussions = (0, import_react129.usePluginOption)(discussionPlugin, "discussions");
  commentNodes.forEach(([node]) => {
    const id = api.comment.nodeId(node);
    const map = getOption("uniquePathMap");
    if (!id) return;
    const previousPath = map.get(id);
    if (import_plate38.PathApi.isPath(previousPath)) {
      const nodes = api.comment.node({ id, at: previousPath });
      if (!nodes) {
        setOption("uniquePathMap", new Map(map).set(id, blockPath));
        return;
      }
      return;
    }
    setOption("uniquePathMap", new Map(map).set(id, blockPath));
  });
  const commentsIds = new Set(
    commentNodes.map(([node]) => api.comment.nodeId(node)).filter(Boolean)
  );
  const resolvedDiscussions = discussions.map((d) => ({
    ...d,
    createdAt: new Date(d.createdAt)
  })).filter((item) => {
    const commentsPathMap = getOption("uniquePathMap");
    const firstBlockPath = commentsPathMap.get(item.id);
    if (!firstBlockPath) return false;
    if (!import_plate38.PathApi.equals(firstBlockPath, blockPath)) return false;
    return api.comment.has({ id: item.id }) && commentsIds.has(item.id) && !item.isResolved;
  });
  return resolvedDiscussions;
};

// src/components/editor/plugins/discussion-plugin.tsx
var discussionsData = [
  {
    id: "discussion1",
    comments: [
      {
        id: "comment1",
        contentRich: [
          {
            children: [
              {
                text: "This is a comment"
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 9e5),
        discussionId: "discussion1",
        isEdited: false,
        userId: "alice"
      }
    ],
    createdAt: /* @__PURE__ */ new Date(),
    documentContent: "comments to your content",
    isResolved: false,
    userId: "alice"
  },
  {
    id: "discussion2",
    comments: [
      {
        id: "comment1",
        contentRich: [
          {
            children: [
              {
                text: "Hey, what do you think about this approach?"
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 9e5),
        discussionId: "discussion1",
        isEdited: false,
        userId: "alice"
      },
      {
        id: "comment2",
        contentRich: [
          {
            children: [
              {
                text: "Looks good!"
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 8e5),
        discussionId: "discussion1",
        isEdited: false,
        userId: "bob"
      },
      {
        id: "comment3",
        contentRich: [
          {
            children: [
              {
                text: "Thanks for the feedback!"
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 7e5),
        discussionId: "discussion1",
        isEdited: false,
        userId: "alice"
      }
    ],
    createdAt: /* @__PURE__ */ new Date(),
    documentContent: "collaborate",
    isResolved: false,
    userId: "bob"
  },
  {
    id: "discussion4",
    comments: [
      {
        id: "comment1",
        contentRich: [
          {
            children: [
              {
                text: "Comments are a great way to provide feedback and discuss changes."
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 6e5),
        discussionId: "discussion4",
        isEdited: false,
        userId: "charlie"
      },
      {
        id: "comment2",
        contentRich: [
          {
            children: [
              {
                text: "Agreed! The link to the docs makes it easy to learn more."
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 5e5),
        discussionId: "discussion4",
        isEdited: false,
        userId: "bob"
      }
    ],
    createdAt: /* @__PURE__ */ new Date(),
    documentContent: "comments",
    isResolved: false,
    userId: "charlie"
  },
  {
    id: "discussion5",
    comments: [
      {
        id: "comment1",
        contentRich: [
          {
            children: [
              {
                text: "This is a good example of how to use comments."
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 4e5),
        discussionId: "discussion5",
        isEdited: false,
        userId: "alice"
      }
    ],
    createdAt: /* @__PURE__ */ new Date(),
    documentContent: "comments on many text segments",
    isResolved: false,
    userId: "alice"
  },
  {
    id: "discussion6",
    comments: [
      {
        id: "comment1",
        contentRich: [
          {
            children: [
              {
                text: "Nice demonstration of overlapping annotations with both comments and suggestions!"
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 3e5),
        discussionId: "discussion6",
        isEdited: false,
        userId: "bob"
      },
      {
        id: "comment2",
        contentRich: [
          {
            children: [
              {
                text: "This helps users understand how powerful the editor can be."
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 2e5),
        discussionId: "discussion6",
        isEdited: false,
        userId: "charlie"
      }
    ],
    createdAt: /* @__PURE__ */ new Date(),
    documentContent: "overlapping",
    isResolved: false,
    userId: "bob"
  }
];
var avatarUrl = (seed) => `https://api.dicebear.com/9.x/glass/svg?seed=${seed}`;
var usersData = {
  alice: {
    id: "alice",
    avatarUrl: avatarUrl("alice6"),
    name: "Alice"
  },
  bob: {
    id: "bob",
    avatarUrl: avatarUrl("bob4"),
    name: "Bob"
  },
  charlie: {
    id: "charlie",
    avatarUrl: avatarUrl("charlie2"),
    name: "Charlie"
  }
};
var discussionPlugin = (0, import_react130.createPlatePlugin)({
  key: "discussion",
  options: {
    currentUserId: "alice",
    discussions: discussionsData,
    users: usersData
  }
}).configure({
  render: { aboveNodes: BlockDiscussion }
}).extendSelectors(({ getOption }) => ({
  currentUser: () => getOption("users")[getOption("currentUserId")],
  user: (id) => getOption("users")[id]
}));

// src/components/editor/plugins/dnd-plugins.tsx
var import_plate_dnd3 = require("@udecode/plate-dnd");
var import_react140 = require("@udecode/plate-media/react");
var import_plate_node_id = require("@udecode/plate-node-id");

// src/components/editor/ui/draggable.tsx
var React25 = __toESM(require("react"));
var import_lucide_react22 = require("lucide-react");
var import_plate39 = require("@udecode/plate");
var import_react131 = require("@udecode/plate-block-quote/react");
var import_react132 = require("@udecode/plate-code-block/react");
var import_plate_dnd2 = require("@udecode/plate-dnd");
var import_react133 = require("@udecode/plate-excalidraw/react");
var import_plate_heading10 = require("@udecode/plate-heading");
var import_react134 = require("@udecode/plate-layout/react");
var import_react135 = require("@udecode/plate-media/react");
var import_react136 = require("@udecode/plate-selection/react");
var import_react137 = require("@udecode/plate-table/react");
var import_react138 = require("@udecode/plate-toggle/react");
var import_react139 = require("@udecode/plate/react");
var import_jsx_runtime69 = require("react/jsx-runtime");
var UNDRAGGABLE_KEYS = [
  import_react134.ColumnItemPlugin.key,
  import_react137.TableRowPlugin.key,
  import_react137.TableCellPlugin.key
];
var DraggableAboveNodes = (props) => {
  const { editor, element, path } = props;
  const readOnly = (0, import_react139.useReadOnly)();
  const enabled = React25.useMemo(() => {
    if (readOnly) return false;
    if (path.length === 1 && !(0, import_plate39.isType)(editor, element, UNDRAGGABLE_KEYS)) {
      return true;
    }
    if (path.length === 3 && !(0, import_plate39.isType)(editor, element, UNDRAGGABLE_KEYS)) {
      const block = editor.api.some({
        at: path,
        match: {
          type: editor.getType(import_react134.ColumnPlugin)
        }
      });
      if (block) {
        return true;
      }
    }
    if (path.length === 4 && !(0, import_plate39.isType)(editor, element, UNDRAGGABLE_KEYS)) {
      const block = editor.api.some({
        at: path,
        match: {
          type: editor.getType(import_react137.TablePlugin)
        }
      });
      if (block) {
        return true;
      }
    }
    return false;
  }, [editor, element, path, readOnly]);
  if (!enabled) return;
  return (props2) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(Draggable, { ...props2 });
};
function Draggable(props) {
  const { children, editor, element, path } = props;
  const blockSelectionApi = editor.getApi(import_react136.BlockSelectionPlugin).blockSelection;
  const { isDragging, previewRef, handleRef } = (0, import_plate_dnd2.useDraggable)({
    element,
    onDropHandler: (_, { dragItem }) => {
      const id = dragItem.id;
      if (blockSelectionApi && id) {
        blockSelectionApi.set(id);
      }
    }
  });
  const isInColumn = path.length === 3;
  const isInTable = path.length === 4;
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(
    "div",
    {
      className: cn(
        "relative",
        isDragging && "opacity-50",
        STRUCTURAL_TYPES.includes(element.type) ? "group/structural" : "group"
      ),
      children: [
        !isInTable && /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(Gutter, { children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
          "div",
          {
            className: cn(
              "slate-blockToolbarWrapper",
              "flex h-[1.5em]",
              (0, import_plate39.isType)(editor, element, [
                import_plate_heading10.HEADING_KEYS.h1,
                import_plate_heading10.HEADING_KEYS.h2,
                import_plate_heading10.HEADING_KEYS.h3,
                import_plate_heading10.HEADING_KEYS.h4,
                import_plate_heading10.HEADING_KEYS.h5
              ]) && "h-[1.3em]",
              isInColumn && "h-4"
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
              "div",
              {
                className: cn(
                  "slate-blockToolbar",
                  "pointer-events-auto mr-1 flex items-center",
                  isInColumn && "mr-1.5"
                ),
                children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
                  Button,
                  {
                    ref: handleRef,
                    variant: "ghost",
                    className: "h-6 w-4.5 p-0",
                    "data-plate-prevent-deselect": true,
                    children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(DragHandle, {})
                  }
                )
              }
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { ref: previewRef, className: "slate-blockWrapper", children: [
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_react139.MemoizedChildren, { children }),
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(DropLine, {})
        ] })
      ]
    }
  );
}
function Gutter({
  children,
  className,
  ...props
}) {
  const editor = (0, import_react139.useEditorRef)();
  const element = (0, import_react139.useElement)();
  const path = (0, import_react139.usePath)();
  const isSelectionAreaVisible = (0, import_react139.usePluginOption)(
    import_react136.BlockSelectionPlugin,
    "isSelectionAreaVisible"
  );
  const selected = (0, import_react139.useSelected)();
  const isNodeType = (keys) => (0, import_plate39.isType)(editor, element, keys);
  const isInColumn = path.length === 3;
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    "div",
    {
      ...props,
      className: cn(
        "slate-gutterLeft",
        "absolute top-0 z-50 flex h-full -translate-x-full cursor-text hover:opacity-100 sm:opacity-0",
        STRUCTURAL_TYPES.includes(element.type) ? "group-hover/structural:opacity-100" : "group-hover:opacity-100",
        isSelectionAreaVisible && "hidden",
        !selected && "opacity-0",
        isNodeType(import_plate_heading10.HEADING_KEYS.h1) && "pb-1 text-[1.875em]",
        isNodeType(import_plate_heading10.HEADING_KEYS.h2) && "pb-1 text-[1.5em]",
        isNodeType(import_plate_heading10.HEADING_KEYS.h3) && "pt-[2px] pb-1 text-[1.25em]",
        isNodeType([import_plate_heading10.HEADING_KEYS.h4, import_plate_heading10.HEADING_KEYS.h5]) && "pt-1 pb-0 text-[1.1em]",
        isNodeType(import_plate_heading10.HEADING_KEYS.h6) && "pb-0",
        isNodeType(import_react139.ParagraphPlugin.key) && "pt-1 pb-0",
        isNodeType(["ul", "ol"]) && "pb-0",
        isNodeType(import_react131.BlockquotePlugin.key) && "pb-0",
        isNodeType(import_react132.CodeBlockPlugin.key) && "pt-6 pb-0",
        isNodeType([
          import_react135.ImagePlugin.key,
          import_react135.MediaEmbedPlugin.key,
          import_react133.ExcalidrawPlugin.key,
          import_react138.TogglePlugin.key,
          import_react134.ColumnPlugin.key
        ]) && "py-0",
        isNodeType([import_react135.PlaceholderPlugin.key, import_react137.TablePlugin.key]) && "pt-3 pb-0",
        isInColumn && "mt-2 h-4 pt-0",
        className
      ),
      contentEditable: false,
      children
    }
  );
}
var DragHandle = React25.memo(function DragHandle2() {
  const editor = (0, import_react139.useEditorRef)();
  const element = (0, import_react139.useElement)();
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(Tooltip, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
      "div",
      {
        className: "flex size-full items-center justify-center",
        onClick: () => {
          editor.getApi(import_react136.BlockSelectionPlugin).blockSelection.set(element.id);
        },
        role: "button",
        children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_lucide_react22.GripVertical, { className: "text-muted-foreground" })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(TooltipContent, { children: "Drag to move" })
  ] });
});
var DropLine = React25.memo(function DropLine2({
  className,
  ...props
}) {
  const { dropLine } = (0, import_plate_dnd2.useDropLine)();
  if (!dropLine) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    "div",
    {
      ...props,
      className: cn(
        "slate-dropLine",
        "absolute inset-x-0 h-0.5 opacity-100 transition-opacity",
        "bg-brand/50",
        dropLine === "top" && "-top-px",
        dropLine === "bottom" && "-bottom-px",
        className
      )
    }
  );
});

// src/components/editor/plugins/dnd-plugins.tsx
var dndPlugins = [
  import_plate_node_id.NodeIdPlugin,
  import_plate_dnd3.DndPlugin.configure({
    options: {
      enableScroller: true,
      onDropFiles: ({ dragItem, editor, target }) => {
        editor.getTransforms(import_react140.PlaceholderPlugin).insert.media(dragItem.files, { at: target, nextBlock: false });
      }
    },
    render: {
      aboveNodes: DraggableAboveNodes
    }
  })
];

// src/components/editor/plugins/equation-plugins.ts
var import_react141 = require("@udecode/plate-math/react");
var equationPlugins = [import_react141.InlineEquationPlugin, import_react141.EquationPlugin];

// src/components/editor/plugins/exit-break-plugin.ts
var import_react142 = require("@udecode/plate-break/react");
var import_plate_heading11 = require("@udecode/plate-heading");
var exitBreakPlugin = import_react142.ExitBreakPlugin.configure({
  options: {
    rules: [
      {
        hotkey: "mod+enter"
      },
      {
        before: true,
        hotkey: "mod+shift+enter"
      },
      {
        hotkey: "enter",
        level: 1,
        query: {
          allow: import_plate_heading11.HEADING_LEVELS,
          end: true,
          start: true
        },
        relative: true
      }
    ]
  }
});

// src/components/editor/plugins/indent-list-plugins.ts
var import_react145 = require("@udecode/plate-block-quote/react");
var import_react146 = require("@udecode/plate-code-block/react");
var import_plate_heading12 = require("@udecode/plate-heading");
var import_react147 = require("@udecode/plate-indent-list/react");
var import_react148 = require("@udecode/plate-indent/react");
var import_react149 = require("@udecode/plate-toggle/react");
var import_react150 = require("@udecode/plate/react");

// src/components/editor/ui/indent-fire-marker.tsx
var import_jsx_runtime70 = require("react/jsx-runtime");
var FireMarker = (props) => {
  const { element } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { contentEditable: false, children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
    "span",
    {
      className: "select-none",
      style: { left: -26, position: "absolute", top: -1 },
      "data-plate-prevent-deserialization": true,
      contentEditable: false,
      children: element.indent % 2 === 0 ? "\u{1F525}" : "\u{1F680}"
    }
  ) });
};
var FireLiComponent = (props) => {
  const { children } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("li", { className: "list-none", children });
};

// src/components/editor/ui/indent-todo-marker.tsx
var import_react143 = require("@udecode/plate-indent-list/react");
var import_react144 = require("@udecode/plate/react");

// src/components/editor/ui/checkbox.tsx
var import_lucide_react23 = require("lucide-react");
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));
var import_jsx_runtime71 = require("react/jsx-runtime");
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_lucide_react23.CheckIcon, { className: "size-3.5" })
        }
      )
    }
  );
}

// src/components/editor/ui/indent-todo-marker.tsx
var import_jsx_runtime72 = require("react/jsx-runtime");
function TodoMarker(props) {
  const state = (0, import_react143.useIndentTodoListElementState)({ element: props.element });
  const { checkboxProps } = (0, import_react143.useIndentTodoListElement)(state);
  const readOnly = (0, import_react144.useReadOnly)();
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("div", { contentEditable: false, children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
    Checkbox,
    {
      className: cn(
        "absolute top-1 -left-6",
        readOnly && "pointer-events-none"
      ),
      ...checkboxProps
    }
  ) });
}
function TodoLi(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
    "li",
    {
      className: cn(
        "list-none",
        props.element.checked && "text-muted-foreground line-through"
      ),
      children: props.children
    }
  );
}

// src/components/editor/plugins/indent-list-plugins.ts
var indentListPlugins = [
  import_react148.IndentPlugin.extend({
    inject: {
      targetPlugins: [
        import_react150.ParagraphPlugin.key,
        ...import_plate_heading12.HEADING_LEVELS,
        import_react145.BlockquotePlugin.key,
        import_react146.CodeBlockPlugin.key,
        import_react149.TogglePlugin.key
      ]
    }
  }),
  import_react147.IndentListPlugin.extend({
    inject: {
      targetPlugins: [
        import_react150.ParagraphPlugin.key,
        ...import_plate_heading12.HEADING_LEVELS,
        import_react145.BlockquotePlugin.key,
        import_react146.CodeBlockPlugin.key,
        import_react149.TogglePlugin.key
      ]
    },
    options: {
      listStyleTypes: {
        fire: {
          liComponent: FireLiComponent,
          markerComponent: FireMarker,
          type: "fire"
        },
        todo: {
          liComponent: TodoLi,
          markerComponent: TodoMarker,
          type: "todo"
        }
      }
    }
  })
];

// src/components/editor/plugins/line-height-plugin.ts
var import_plate_heading13 = require("@udecode/plate-heading");
var import_react151 = require("@udecode/plate-line-height/react");
var import_react152 = require("@udecode/plate/react");
var lineHeightPlugin = import_react151.LineHeightPlugin.configure({
  inject: {
    nodeProps: {
      defaultNodeValue: 1.5,
      validNodeValues: [1, 1.2, 1.5, 2, 3]
    },
    targetPlugins: [import_react152.ParagraphPlugin.key, ...import_plate_heading13.HEADING_LEVELS]
  }
});

// src/components/editor/plugins/link-plugin.tsx
var import_react155 = require("@udecode/plate-link/react");

// src/components/editor/ui/link-floating-toolbar.tsx
var React26 = __toESM(require("react"));
var import_class_variance_authority10 = require("class-variance-authority");
var import_lucide_react24 = require("lucide-react");
var import_plate_floating = require("@udecode/plate-floating");
var import_plate_link2 = require("@udecode/plate-link");
var import_react153 = require("@udecode/plate-link/react");
var import_react154 = require("@udecode/plate/react");
var import_jsx_runtime73 = require("react/jsx-runtime");
var popoverVariants = (0, import_class_variance_authority10.cva)(
  "z-50 w-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-hidden"
);
var inputVariants = (0, import_class_variance_authority10.cva)(
  "flex h-[28px] w-full rounded-md border-none bg-transparent px-1.5 py-1 text-base placeholder:text-muted-foreground focus-visible:ring-transparent focus-visible:outline-none md:text-sm"
);
function LinkFloatingToolbar({
  state
}) {
  const activeCommentId = (0, import_react154.usePluginOption)({ key: "comment" }, "activeId");
  const activeSuggestionId = (0, import_react154.usePluginOption)({ key: "suggestion" }, "activeId");
  const floatingOptions = React26.useMemo(() => {
    return {
      middleware: [
        (0, import_plate_floating.offset)(8),
        (0, import_plate_floating.flip)({
          fallbackPlacements: ["bottom-end", "top-start", "top-end"],
          padding: 12
        })
      ],
      placement: activeSuggestionId || activeCommentId ? "top-start" : "bottom-start"
    };
  }, [activeCommentId, activeSuggestionId]);
  const insertState = (0, import_react153.useFloatingLinkInsertState)({
    ...state,
    floatingOptions: {
      ...floatingOptions,
      ...state?.floatingOptions
    }
  });
  const {
    hidden,
    props: insertProps,
    ref: insertRef,
    textInputProps
  } = (0, import_react153.useFloatingLinkInsert)(insertState);
  const editState = (0, import_react153.useFloatingLinkEditState)({
    ...state,
    floatingOptions: {
      ...floatingOptions,
      ...state?.floatingOptions
    }
  });
  const {
    editButtonProps,
    props: editProps,
    ref: editRef,
    unlinkButtonProps
  } = (0, import_react153.useFloatingLinkEdit)(editState);
  const inputProps = (0, import_react154.useFormInputProps)({
    preventDefaultOnEnterKeydown: true
  });
  if (hidden) return null;
  const input = /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { className: "flex w-[330px] flex-col", ...inputProps, children: [
    /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("div", { className: "flex items-center pr-1 pl-2 text-muted-foreground", children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_lucide_react24.Link, { className: "size-4" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
        import_react153.FloatingLinkUrlInput,
        {
          className: inputVariants(),
          placeholder: "Paste link",
          "data-plate-focus": true
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(Separator2, { className: "my-1" }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("div", { className: "flex items-center pr-1 pl-2 text-muted-foreground", children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_lucide_react24.Text, { className: "size-4" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
        "input",
        {
          className: inputVariants(),
          placeholder: "Text to display",
          "data-plate-focus": true,
          ...textInputProps
        }
      )
    ] })
  ] });
  const editContent = editState.isEditing ? input : /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { className: "box-content flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
      "button",
      {
        className: buttonVariants({ size: "sm", variant: "ghost" }),
        type: "button",
        ...editButtonProps,
        children: "Edit link"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(Separator2, { orientation: "vertical" }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(LinkOpenButton, {}),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(Separator2, { orientation: "vertical" }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
      "button",
      {
        className: buttonVariants({
          size: "icon",
          variant: "ghost"
        }),
        type: "button",
        ...unlinkButtonProps,
        children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_lucide_react24.Unlink, { width: 18 })
      }
    )
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(import_jsx_runtime73.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("div", { ref: insertRef, className: popoverVariants(), ...insertProps, children: input }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("div", { ref: editRef, className: popoverVariants(), ...editProps, children: editContent })
  ] });
}
function LinkOpenButton() {
  const editor = (0, import_react154.useEditorRef)();
  const selection = (0, import_react154.useEditorSelection)();
  const attributes = React26.useMemo(
    () => {
      const entry = editor.api.node({
        match: { type: editor.getType(import_react153.LinkPlugin) }
      });
      if (!entry) {
        return {};
      }
      const [element] = entry;
      return (0, import_plate_link2.getLinkAttributes)(editor, element);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [editor, selection]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
    "a",
    {
      ...attributes,
      className: buttonVariants({
        size: "icon",
        variant: "ghost"
      }),
      onMouseOver: (e) => {
        e.stopPropagation();
      },
      "aria-label": "Open link in a new tab",
      target: "_blank",
      children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_lucide_react24.ExternalLink, { width: 18 })
    }
  );
}

// src/components/editor/plugins/link-plugin.tsx
var import_jsx_runtime74 = require("react/jsx-runtime");
var linkPlugin = import_react155.LinkPlugin.extend({
  render: { afterEditable: () => /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(LinkFloatingToolbar, {}) }
});

// src/components/editor/plugins/media-plugins.tsx
var import_react160 = require("@udecode/plate-caption/react");
var import_react161 = require("@udecode/plate-media/react");

// src/components/editor/ui/image-preview.tsx
var import_class_variance_authority11 = require("class-variance-authority");
var import_lucide_react25 = require("lucide-react");
var import_react156 = require("@udecode/plate-media/react");
var import_react157 = require("@udecode/plate/react");
var import_jsx_runtime75 = require("react/jsx-runtime");
var toolButtonVariants = (0, import_class_variance_authority11.cva)("rounded bg-[rgba(0,0,0,0.5)] px-1", {
  defaultVariants: {
    variant: "default"
  },
  variants: {
    variant: {
      default: "text-white",
      disabled: "cursor-not-allowed text-gray-400"
    }
  }
});
var SCROLL_SPEED = 4;
var ImagePreview = () => {
  const editor = (0, import_react157.useEditorRef)();
  const isOpen = (0, import_react156.useImagePreviewValue)("isOpen", editor.id);
  const scale = (0, import_react156.useImagePreviewValue)("scale");
  const isEditingScale = (0, import_react156.useImagePreviewValue)("isEditingScale");
  const {
    closeProps,
    currentUrlIndex,
    maskLayerProps,
    nextDisabled,
    nextProps,
    prevDisabled,
    prevProps,
    scaleTextProps,
    zommOutProps,
    zoomInDisabled,
    zoomInProps,
    zoomOutDisabled
  } = (0, import_react156.useImagePreview)({ scrollSpeed: SCROLL_SPEED });
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(
    "div",
    {
      className: cn(
        "fixed top-0 left-0 z-50 h-screen w-screen select-none",
        !isOpen && "hidden"
      ),
      onContextMenu: (e) => e.stopPropagation(),
      ...maskLayerProps,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("div", { className: "absolute inset-0 size-full bg-black opacity-30" }),
        /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("div", { className: "absolute inset-0 size-full bg-black opacity-30" }),
        /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { className: "relative flex max-h-screen w-full items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
            import_react156.PreviewImage,
            {
              className: cn(
                "mx-auto block max-h-[calc(100vh-4rem)] w-auto object-contain transition-transform"
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(
            "div",
            {
              className: "absolute bottom-0 left-1/2 z-40 flex w-fit -translate-x-1/2 justify-center gap-4 p-2 text-center text-white",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { className: "flex gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
                    "button",
                    {
                      ...prevProps,
                      className: cn(
                        toolButtonVariants({
                          variant: prevDisabled ? "disabled" : "default"
                        })
                      ),
                      type: "button",
                      children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_lucide_react25.ArrowLeft, {})
                    }
                  ),
                  (currentUrlIndex ?? 0) + 1,
                  /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
                    "button",
                    {
                      ...nextProps,
                      className: cn(
                        toolButtonVariants({
                          variant: nextDisabled ? "disabled" : "default"
                        })
                      ),
                      type: "button",
                      children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_lucide_react25.ArrowRight, {})
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { className: "flex", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
                    "button",
                    {
                      className: cn(
                        toolButtonVariants({
                          variant: zoomOutDisabled ? "disabled" : "default"
                        })
                      ),
                      ...zommOutProps,
                      type: "button",
                      children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_lucide_react25.Minus, { className: "size-4" })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("div", { className: "mx-px", children: isEditingScale ? /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(import_jsx_runtime75.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(ScaleInput, { className: "w-10 rounded px-1 text-slate-500 outline" }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("span", { children: "%" })
                  ] }) : /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("span", { ...scaleTextProps, children: scale * 100 + "%" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
                    "button",
                    {
                      className: cn(
                        toolButtonVariants({
                          variant: zoomInDisabled ? "disabled" : "default"
                        })
                      ),
                      ...zoomInProps,
                      type: "button",
                      children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_lucide_react25.Plus, { className: "size-4" })
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("button", { className: cn(toolButtonVariants()), type: "button", children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_lucide_react25.Download, { className: "size-4" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
                  "button",
                  {
                    ...closeProps,
                    className: cn(toolButtonVariants()),
                    type: "button",
                    children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_lucide_react25.X, { className: "size-4" })
                  }
                )
              ]
            }
          )
        ] }) })
      ]
    }
  );
};
function ScaleInput(props) {
  const { props: scaleInputProps, ref } = (0, import_react156.useScaleInput)();
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("input", { ...scaleInputProps, ...props, ref });
}

// src/components/editor/ui/media-upload-toast.tsx
var React27 = __toESM(require("react"));
var import_sonner = require("sonner");
var import_react158 = require("@udecode/plate-media/react");
var import_react159 = require("@udecode/plate/react");
var useUploadErrorToast = () => {
  const uploadError = (0, import_react159.usePluginOption)(import_react158.PlaceholderPlugin, "error");
  React27.useEffect(() => {
    if (!uploadError) return;
    const { code, data } = uploadError;
    switch (code) {
      case import_react158.UploadErrorCode.INVALID_FILE_SIZE: {
        import_sonner.toast.error(
          `The size of files ${data.files.map((f) => f.name).join(", ")} is invalid`
        );
        break;
      }
      case import_react158.UploadErrorCode.INVALID_FILE_TYPE: {
        import_sonner.toast.error(
          `The type of files ${data.files.map((f) => f.name).join(", ")} is invalid`
        );
        break;
      }
      case import_react158.UploadErrorCode.TOO_LARGE: {
        import_sonner.toast.error(
          `The size of files ${data.files.map((f) => f.name).join(", ")} is too large than ${data.maxFileSize}`
        );
        break;
      }
      case import_react158.UploadErrorCode.TOO_LESS_FILES: {
        import_sonner.toast.error(
          `The mini um number of files is ${data.minFileCount} for ${data.fileType}`
        );
        break;
      }
      case import_react158.UploadErrorCode.TOO_MANY_FILES: {
        import_sonner.toast.error(
          `The maximum number of files is ${data.maxFileCount} ${data.fileType ? `for ${data.fileType}` : ""}`
        );
        break;
      }
    }
  }, [uploadError]);
};
var MediaUploadToast = () => {
  useUploadErrorToast();
  return null;
};

// src/components/editor/plugins/media-plugins.tsx
var mediaPlugins = [
  import_react161.ImagePlugin.extend({
    options: { disableUploadInsert: true },
    render: { afterEditable: ImagePreview }
  }),
  import_react161.MediaEmbedPlugin,
  import_react161.VideoPlugin,
  import_react161.AudioPlugin,
  import_react161.FilePlugin,
  import_react160.CaptionPlugin.configure({
    options: {
      plugins: [
        import_react161.ImagePlugin,
        import_react161.VideoPlugin,
        import_react161.AudioPlugin,
        import_react161.FilePlugin,
        import_react161.MediaEmbedPlugin
      ]
    }
  }),
  import_react161.PlaceholderPlugin.configure({
    options: { disableEmptyPlaceholder: true },
    render: { afterEditable: MediaUploadToast }
  })
];

// src/components/editor/plugins/mention-plugin.ts
var import_react162 = require("@udecode/plate-mention/react");
var mentionPlugin = import_react162.MentionPlugin.configure({
  options: { triggerPreviousCharPattern: /^$|^[\s"']$/ }
});

// src/components/editor/plugins/reset-block-type-plugin.ts
var import_react163 = require("@udecode/plate-block-quote/react");
var import_react164 = require("@udecode/plate-callout/react");
var import_plate_code_block4 = require("@udecode/plate-code-block");
var import_react165 = require("@udecode/plate-code-block/react");
var import_plate_heading14 = require("@udecode/plate-heading");
var import_plate_indent_list6 = require("@udecode/plate-indent-list");
var import_react166 = require("@udecode/plate-reset-node/react");
var import_react167 = require("@udecode/plate/react");
var resetBlockTypesCommonRule = {
  defaultType: import_react167.ParagraphPlugin.key,
  types: [
    ...import_plate_heading14.HEADING_LEVELS,
    import_react163.BlockquotePlugin.key,
    import_plate_indent_list6.INDENT_LIST_KEYS.todo,
    import_plate_indent_list6.ListStyleType.Disc,
    import_plate_indent_list6.ListStyleType.Decimal,
    import_react164.CalloutPlugin.key
  ]
};
var resetBlockTypesCodeBlockRule = {
  defaultType: import_react167.ParagraphPlugin.key,
  types: [import_react165.CodeBlockPlugin.key],
  onReset: import_plate_code_block4.unwrapCodeBlock
};
var resetBlockTypePlugin = import_react166.ResetNodePlugin.configure({
  options: {
    rules: [
      {
        ...resetBlockTypesCommonRule,
        hotkey: "Enter",
        predicate: (editor) => editor.api.isEmpty(editor.selection, { block: true })
      },
      {
        ...resetBlockTypesCommonRule,
        hotkey: "Backspace",
        predicate: (editor) => editor.api.isAt({ start: true })
      },
      {
        ...resetBlockTypesCodeBlockRule,
        hotkey: "Enter",
        predicate: import_plate_code_block4.isCodeBlockEmpty
      },
      {
        ...resetBlockTypesCodeBlockRule,
        hotkey: "Backspace",
        predicate: import_plate_code_block4.isSelectionAtCodeBlockStart
      }
    ]
  }
});

// src/components/editor/plugins/skip-mark-plugin.ts
var import_react168 = require("@udecode/plate-basic-marks/react");
var import_react169 = require("@udecode/plate-comments/react");
var import_react170 = require("@udecode/plate-suggestion/react");
var skipMarkPlugin = import_react168.SkipMarkPlugin.configure({
  options: {
    query: {
      allow: [import_react170.SuggestionPlugin.key, import_react168.CodePlugin.key, import_react169.CommentsPlugin.key]
    }
  }
});

// src/components/editor/plugins/soft-break-plugin.ts
var import_react171 = require("@udecode/plate-block-quote/react");
var import_react172 = require("@udecode/plate-break/react");
var import_react173 = require("@udecode/plate-callout/react");
var import_react174 = require("@udecode/plate-code-block/react");
var import_react175 = require("@udecode/plate-table/react");
var softBreakPlugin = import_react172.SoftBreakPlugin.configure({
  options: {
    rules: [
      { hotkey: "shift+enter" },
      {
        hotkey: "enter",
        query: {
          allow: [
            import_react174.CodeBlockPlugin.key,
            import_react171.BlockquotePlugin.key,
            import_react175.TableCellPlugin.key,
            import_react175.TableCellHeaderPlugin.key,
            import_react173.CalloutPlugin.key
          ]
        }
      }
    ]
  }
});

// src/components/editor/plugins/table-plugin.ts
var import_react176 = require("@udecode/plate-table/react");
var tablePlugin = import_react176.TablePlugin.configure({
  options: {}
});

// src/components/editor/plugins/toc-plugin.ts
var import_react177 = require("@udecode/plate-heading/react");
var tocPlugin = import_react177.TocPlugin.configure({
  options: {
    // isScroll: true,
    topOffset: 80
  }
});

// src/components/editor/plugins/editor-plugins.tsx
var viewPlugins = [
  ...basicNodesPlugins,
  import_react184.HorizontalRulePlugin,
  linkPlugin,
  import_react180.DatePlugin,
  mentionPlugin,
  tablePlugin,
  import_react188.TogglePlugin,
  tocPlugin,
  ...mediaPlugins,
  ...equationPlugins,
  import_react178.CalloutPlugin,
  import_react186.ColumnPlugin,
  // Marks
  import_react182.FontColorPlugin,
  import_react182.FontBackgroundColorPlugin,
  import_react182.FontSizePlugin,
  import_react183.HighlightPlugin,
  import_react185.KbdPlugin,
  skipMarkPlugin,
  // Block Style
  alignPlugin,
  ...indentListPlugins,
  lineHeightPlugin,
  // Collaboration
  discussionPlugin,
  commentsPlugin,
  // suggestionPlugin.configure({
  //   render: { belowNodes: SuggestionBelowNodes as any },
  // }),
  suggestionPlugin
];
var editorPlugins = [
  // AI
  ...aiPlugins,
  // Nodes
  ...viewPlugins,
  // Functionality
  import_react187.SlashPlugin.extend({
    options: {
      triggerQuery(editor) {
        return !editor.api.some({
          match: { type: editor.getType(import_react179.CodeBlockPlugin) }
        });
      }
    }
  }),
  autoformatPlugin,
  cursorOverlayPlugin,
  ...blockMenuPlugins,
  ...dndPlugins,
  import_react181.EmojiPlugin.configure({ options: { data: import_data.default } }),
  exitBreakPlugin,
  resetBlockTypePlugin,
  ...deletePlugins,
  softBreakPlugin,
  import_plate_trailing_block.TrailingBlockPlugin,
  // Deserialization
  import_plate_docx.DocxPlugin,
  markdownPlugin,
  import_plate_juice.JuicePlugin
  // UI
  // FixedToolbarPlugin,
  // FloatingToolbarPlugin,
];

// src/components/editor/plugins/fixed-toolbar-plugin.tsx
var import_react229 = require("@udecode/plate/react");

// src/components/editor/ui/fixed-toolbar.tsx
var import_jsx_runtime76 = require("react/jsx-runtime");
function FixedToolbar(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
    Toolbar,
    {
      ...props,
      className: cn(
        "sticky top-0 left-0 z-50 scrollbar-hide w-full justify-between overflow-x-auto rounded-t-lg border-b border-b-border bg-background/95 p-1 backdrop-blur-sm supports-backdrop-blur:bg-background/60",
        props.className
      )
    }
  );
}

// src/components/editor/ui/fixed-toolbar-buttons.tsx
var import_lucide_react49 = require("lucide-react");
var import_react224 = require("@udecode/plate-basic-marks/react");
var import_react225 = require("@udecode/plate-font/react");
var import_react226 = require("@udecode/plate-highlight/react");
var import_react227 = require("@udecode/plate-media/react");
var import_react228 = require("@udecode/plate/react");

// src/components/editor/ui/ai-toolbar-button.tsx
var import_react189 = require("@udecode/plate-ai/react");
var import_react190 = require("@udecode/plate/react");
var import_jsx_runtime77 = require("react/jsx-runtime");
function AIToolbarButton(props) {
  const { api } = (0, import_react190.useEditorPlugin)(import_react189.AIChatPlugin);
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
    ToolbarButton,
    {
      ...props,
      onClick: () => {
        api.aiChat.show();
      },
      onMouseDown: (e) => {
        e.preventDefault();
      }
    }
  );
}

// src/components/editor/ui/align-dropdown-menu.tsx
var React28 = __toESM(require("react"));
var import_lucide_react26 = require("lucide-react");
var import_plate_alignment = require("@udecode/plate-alignment");
var import_react191 = require("@udecode/plate/react");
var import_jsx_runtime78 = require("react/jsx-runtime");
var items = [
  {
    icon: import_lucide_react26.AlignLeftIcon,
    value: "left"
  },
  {
    icon: import_lucide_react26.AlignCenterIcon,
    value: "center"
  },
  {
    icon: import_lucide_react26.AlignRightIcon,
    value: "right"
  },
  {
    icon: import_lucide_react26.AlignJustifyIcon,
    value: "justify"
  }
];
function AlignDropdownMenu(props) {
  const editor = (0, import_react191.useEditorRef)();
  const value = (0, import_react191.useSelectionFragmentProp)({
    defaultValue: "start",
    structuralTypes: STRUCTURAL_TYPES,
    getProp: (node) => node.align
  });
  const [open, setOpen] = React28.useState(false);
  const IconValue = items.find((item) => item.value === value)?.icon ?? import_lucide_react26.AlignLeftIcon;
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(ToolbarButton, { pressed: open, tooltip: "Align", isDropdown: true, children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(IconValue, {}) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(DropdownMenuContent, { className: "min-w-0", align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
      DropdownMenuRadioGroup,
      {
        value,
        onValueChange: (value2) => {
          (0, import_plate_alignment.setAlign)(editor, { value: value2 });
          editor.tf.focus();
        },
        children: items.map(({ icon: Icon, value: itemValue }) => /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
          DropdownMenuRadioItem,
          {
            className: "pl-2 *:first:[span]:hidden",
            value: itemValue,
            children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(Icon, {})
          },
          itemValue
        ))
      }
    ) })
  ] });
}

// src/components/editor/ui/color-dropdown-menu.tsx
var import_react195 = require("@udecode/plate-font/react");

// src/components/editor/ui/color-constants.ts
var DEFAULT_COLORS = [
  {
    isBrightColor: false,
    name: "black",
    value: "#000000"
  },
  {
    isBrightColor: false,
    name: "dark grey 4",
    value: "#434343"
  },
  {
    isBrightColor: false,
    name: "dark grey 3",
    value: "#666666"
  },
  {
    isBrightColor: false,
    name: "dark grey 2",
    value: "#999999"
  },
  {
    isBrightColor: false,
    name: "dark grey 1",
    value: "#B7B7B7"
  },
  {
    isBrightColor: false,
    name: "grey",
    value: "#CCCCCC"
  },
  {
    isBrightColor: false,
    name: "light grey 1",
    value: "#D9D9D9"
  },
  {
    isBrightColor: true,
    name: "light grey 2",
    value: "#EFEFEF"
  },
  {
    isBrightColor: true,
    name: "light grey 3",
    value: "#F3F3F3"
  },
  {
    isBrightColor: true,
    name: "white",
    value: "#FFFFFF"
  },
  {
    isBrightColor: false,
    name: "red berry",
    value: "#980100"
  },
  {
    isBrightColor: false,
    name: "red",
    value: "#FE0000"
  },
  {
    isBrightColor: false,
    name: "orange",
    value: "#FE9900"
  },
  {
    isBrightColor: true,
    name: "yellow",
    value: "#FEFF00"
  },
  {
    isBrightColor: false,
    name: "green",
    value: "#00FF00"
  },
  {
    isBrightColor: false,
    name: "cyan",
    value: "#00FFFF"
  },
  {
    isBrightColor: false,
    name: "cornflower blue",
    value: "#4B85E8"
  },
  {
    isBrightColor: false,
    name: "blue",
    value: "#1300FF"
  },
  {
    isBrightColor: false,
    name: "purple",
    value: "#9900FF"
  },
  {
    isBrightColor: false,
    name: "magenta",
    value: "#FF00FF"
  },
  {
    isBrightColor: false,
    name: "light red berry 3",
    value: "#E6B8AF"
  },
  {
    isBrightColor: false,
    name: "light red 3",
    value: "#F4CCCC"
  },
  {
    isBrightColor: true,
    name: "light orange 3",
    value: "#FCE4CD"
  },
  {
    isBrightColor: true,
    name: "light yellow 3",
    value: "#FFF2CC"
  },
  {
    isBrightColor: true,
    name: "light green 3",
    value: "#D9EAD3"
  },
  {
    isBrightColor: false,
    name: "light cyan 3",
    value: "#D0DFE3"
  },
  {
    isBrightColor: false,
    name: "light cornflower blue 3",
    value: "#C9DAF8"
  },
  {
    isBrightColor: true,
    name: "light blue 3",
    value: "#CFE1F3"
  },
  {
    isBrightColor: true,
    name: "light purple 3",
    value: "#D9D2E9"
  },
  {
    isBrightColor: true,
    name: "light magenta 3",
    value: "#EAD1DB"
  },
  {
    isBrightColor: false,
    name: "light red berry 2",
    value: "#DC7E6B"
  },
  {
    isBrightColor: false,
    name: "light red 2",
    value: "#EA9999"
  },
  {
    isBrightColor: false,
    name: "light orange 2",
    value: "#F9CB9C"
  },
  {
    isBrightColor: true,
    name: "light yellow 2",
    value: "#FFE598"
  },
  {
    isBrightColor: false,
    name: "light green 2",
    value: "#B7D6A8"
  },
  {
    isBrightColor: false,
    name: "light cyan 2",
    value: "#A1C4C9"
  },
  {
    isBrightColor: false,
    name: "light cornflower blue 2",
    value: "#A4C2F4"
  },
  {
    isBrightColor: false,
    name: "light blue 2",
    value: "#9FC5E8"
  },
  {
    isBrightColor: false,
    name: "light purple 2",
    value: "#B5A7D5"
  },
  {
    isBrightColor: false,
    name: "light magenta 2",
    value: "#D5A6BD"
  },
  {
    isBrightColor: false,
    name: "light red berry 1",
    value: "#CC4125"
  },
  {
    isBrightColor: false,
    name: "light red 1",
    value: "#E06666"
  },
  {
    isBrightColor: false,
    name: "light orange 1",
    value: "#F6B26B"
  },
  {
    isBrightColor: false,
    name: "light yellow 1",
    value: "#FFD966"
  },
  {
    isBrightColor: false,
    name: "light green 1",
    value: "#93C47D"
  },
  {
    isBrightColor: false,
    name: "light cyan 1",
    value: "#76A5AE"
  },
  {
    isBrightColor: false,
    name: "light cornflower blue 1",
    value: "#6C9EEB"
  },
  {
    isBrightColor: false,
    name: "light blue 1",
    value: "#6FA8DC"
  },
  {
    isBrightColor: false,
    name: "light purple 1",
    value: "#8D7CC3"
  },
  {
    isBrightColor: false,
    name: "light magenta 1",
    value: "#C27BA0"
  },
  {
    isBrightColor: false,
    name: "dark red berry 1",
    value: "#A61B00"
  },
  {
    isBrightColor: false,
    name: "dark red 1",
    value: "#CC0000"
  },
  {
    isBrightColor: false,
    name: "dark orange 1",
    value: "#E59138"
  },
  {
    isBrightColor: false,
    name: "dark yellow 1",
    value: "#F1C231"
  },
  {
    isBrightColor: false,
    name: "dark green 1",
    value: "#6AA74F"
  },
  {
    isBrightColor: false,
    name: "dark cyan 1",
    value: "#45818E"
  },
  {
    isBrightColor: false,
    name: "dark cornflower blue 1",
    value: "#3B78D8"
  },
  {
    isBrightColor: false,
    name: "dark blue 1",
    value: "#3E84C6"
  },
  {
    isBrightColor: false,
    name: "dark purple 1",
    value: "#664EA6"
  },
  {
    isBrightColor: false,
    name: "dark magenta 1",
    value: "#A64D78"
  },
  {
    isBrightColor: false,
    name: "dark red berry 2",
    value: "#84200D"
  },
  {
    isBrightColor: false,
    name: "dark red 2",
    value: "#990001"
  },
  {
    isBrightColor: false,
    name: "dark orange 2",
    value: "#B45F05"
  },
  {
    isBrightColor: false,
    name: "dark yellow 2",
    value: "#BF9002"
  },
  {
    isBrightColor: false,
    name: "dark green 2",
    value: "#38761D"
  },
  {
    isBrightColor: false,
    name: "dark cyan 2",
    value: "#124F5C"
  },
  {
    isBrightColor: false,
    name: "dark cornflower blue 2",
    value: "#1155CB"
  },
  {
    isBrightColor: false,
    name: "dark blue 2",
    value: "#0C5394"
  },
  {
    isBrightColor: false,
    name: "dark purple 2",
    value: "#351C75"
  },
  {
    isBrightColor: false,
    name: "dark magenta 2",
    value: "#741B47"
  },
  {
    isBrightColor: false,
    name: "dark red berry 3",
    value: "#5B0F00"
  },
  {
    isBrightColor: false,
    name: "dark red 3",
    value: "#660000"
  },
  {
    isBrightColor: false,
    name: "dark orange 3",
    value: "#783F04"
  },
  {
    isBrightColor: false,
    name: "dark yellow 3",
    value: "#7E6000"
  },
  {
    isBrightColor: false,
    name: "dark green 3",
    value: "#274E12"
  },
  {
    isBrightColor: false,
    name: "dark cyan 3",
    value: "#0D343D"
  },
  {
    isBrightColor: false,
    name: "dark cornflower blue 3",
    value: "#1B4487"
  },
  {
    isBrightColor: false,
    name: "dark blue 3",
    value: "#083763"
  },
  {
    isBrightColor: false,
    name: "dark purple 3",
    value: "#1F124D"
  },
  {
    isBrightColor: false,
    name: "dark magenta 3",
    value: "#4C1130"
  }
];
var DEFAULT_CUSTOM_COLORS = [
  {
    isBrightColor: false,
    name: "dark orange 3",
    value: "#783F04"
  },
  {
    isBrightColor: false,
    name: "dark grey 3",
    value: "#666666"
  },
  {
    isBrightColor: false,
    name: "dark grey 2",
    value: "#999999"
  },
  {
    isBrightColor: false,
    name: "light cornflower blue 1",
    value: "#6C9EEB"
  },
  {
    isBrightColor: false,
    name: "dark magenta 3",
    value: "#4C1130"
  }
];

// src/components/editor/ui/color-picker.tsx
var React30 = __toESM(require("react"));
var import_lucide_react28 = require("lucide-react");

// src/components/editor/ui/color-dropdown-menu-items.tsx
var import_jsx_runtime79 = require("react/jsx-runtime");
function ColorDropdownMenuItem({
  className,
  isBrightColor,
  isSelected,
  name,
  updateColor,
  value,
  ...props
}) {
  const content = /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
    DropdownMenuItem,
    {
      className: cn(
        buttonVariants({
          size: "icon",
          variant: "outline"
        }),
        "my-1 flex size-6 items-center justify-center rounded-full border border-solid border-muted p-0 transition-all hover:scale-125",
        !isBrightColor && "border-transparent",
        isSelected && "border-2 border-primary",
        className
      ),
      style: { backgroundColor: value },
      onSelect: (e) => {
        e.preventDefault();
        updateColor(value);
      },
      ...props
    }
  );
  return name ? /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(Tooltip, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(TooltipTrigger, { children: content }),
    /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(TooltipContent, { className: "mb-1 capitalize", children: name })
  ] }) : content;
}
function ColorDropdownMenuItems({
  className,
  color,
  colors,
  updateColor,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
    "div",
    {
      className: cn(
        "grid grid-cols-[repeat(10,1fr)] place-items-center gap-x-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(TooltipProvider, { children: [
        colors.map(({ isBrightColor, name, value }) => /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
          ColorDropdownMenuItem,
          {
            name,
            value,
            isBrightColor,
            isSelected: color === value,
            updateColor
          },
          name ?? value
        )),
        props.children
      ] })
    }
  );
}

// src/components/editor/ui/colors-custom.tsx
var import_lucide_react27 = require("lucide-react");
var import_react194 = require("@udecode/plate-font/react");

// src/components/editor/ui/color-input.tsx
var React29 = __toESM(require("react"));
var import_react192 = require("@udecode/plate-font/react");
var import_react193 = require("@udecode/plate/react");
var import_jsx_runtime80 = require("react/jsx-runtime");
function ColorInput({
  children,
  className,
  value = "#000000",
  ...props
}) {
  const { childProps, inputRef } = (0, import_react192.useColorInput)();
  return /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("div", { className: "flex flex-col items-center", children: [
    React29.Children.map(children, (child) => {
      if (!child) return child;
      return React29.cloneElement(child, childProps);
    }),
    /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
      "input",
      {
        ...props,
        ref: (0, import_react193.useComposedRef)(props.ref, inputRef),
        className: cn("size-0 overflow-hidden border-0 p-0", className),
        value,
        type: "color"
      }
    )
  ] });
}

// src/components/editor/ui/colors-custom.tsx
var import_jsx_runtime81 = require("react/jsx-runtime");
function ColorCustom({
  className,
  color,
  colors,
  customColors,
  updateColor,
  updateCustomColor,
  ...props
}) {
  const state = (0, import_react194.useColorsCustomState)({
    color,
    colors,
    customColors,
    updateCustomColor
  });
  const { inputProps, menuItemProps } = (0, import_react194.useColorsCustom)(state);
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("div", { className: cn("relative flex flex-col gap-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
    ColorDropdownMenuItems,
    {
      color,
      colors: state.computedColors,
      updateColor,
      children: /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(ColorInput, { ...inputProps, children: /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)(
        DropdownMenuItem,
        {
          className: cn(
            buttonVariants({
              size: "icon",
              variant: "outline"
            }),
            "absolute top-1 right-2 bottom-2 flex size-8 items-center justify-center rounded-full"
          ),
          ...menuItemProps,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("span", { className: "sr-only", children: "Custom" }),
            /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(import_lucide_react27.PlusIcon, {})
          ]
        }
      ) })
    }
  ) });
}

// src/components/editor/ui/color-picker.tsx
var import_jsx_runtime82 = require("react/jsx-runtime");
function ColorPickerContent({
  className,
  clearColor,
  color,
  colors,
  customColors,
  updateColor,
  updateCustomColor,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { className: cn("flex flex-col", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(ToolbarMenuGroup, { label: "Custom Colors", children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
      ColorCustom,
      {
        color,
        className: "px-2",
        colors,
        customColors,
        updateColor,
        updateCustomColor
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(ToolbarMenuGroup, { label: "Default Colors", children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
      ColorDropdownMenuItems,
      {
        color,
        className: "px-2",
        colors,
        updateColor
      }
    ) }),
    color && /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(ToolbarMenuGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)(DropdownMenuItem, { className: "p-2", onClick: clearColor, children: [
      /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_lucide_react28.EraserIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("span", { children: "Clear" })
    ] }) })
  ] });
}
var ColorPicker = React30.memo(
  ColorPickerContent,
  (prev, next) => prev.color === next.color && prev.colors === next.colors && prev.customColors === next.customColors
);

// src/components/editor/ui/color-dropdown-menu.tsx
var import_jsx_runtime83 = require("react/jsx-runtime");
function ColorDropdownMenu({
  children,
  nodeType,
  tooltip
}) {
  const state = (0, import_react195.useColorDropdownMenuState)({
    closeOnSelect: true,
    colors: DEFAULT_COLORS,
    customColors: DEFAULT_CUSTOM_COLORS,
    nodeType
  });
  const { buttonProps, menuProps } = (0, import_react195.useColorDropdownMenu)(state);
  return /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)(DropdownMenu, { modal: false, ...menuProps, children: [
    /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(ToolbarButton, { tooltip, ...buttonProps, children }) }),
    /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(DropdownMenuContent, { align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
      ColorPicker,
      {
        color: state.selectedColor || state.color,
        clearColor: state.clearColor,
        colors: state.colors,
        customColors: state.customColors,
        updateColor: state.updateColorAndClose,
        updateCustomColor: state.updateColor
      }
    ) })
  ] });
}

// src/components/editor/ui/comment-toolbar-button.tsx
var React31 = __toESM(require("react"));
var import_lucide_react29 = require("lucide-react");
var import_plate_comments4 = require("@udecode/plate-comments");
var import_react196 = require("@udecode/plate/react");
var import_jsx_runtime84 = require("react/jsx-runtime");
function CommentToolbarButton() {
  const { editor, setOption, tf } = (0, import_react196.useEditorPlugin)(commentsPlugin);
  const onCommentToolbarButton = React31.useCallback(() => {
    if (!editor.selection) return;
    tf.comment.setDraft();
    editor.tf.collapse();
    setOption("activeId", (0, import_plate_comments4.getDraftCommentKey)());
    setOption("commentingBlock", editor.selection.focus.path.slice(0, 1));
  }, [editor.selection, editor.tf, setOption, tf.comment]);
  return /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
    ToolbarButton,
    {
      onClick: onCommentToolbarButton,
      "data-plate-prevent-overlay": true,
      tooltip: "Comment",
      children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_lucide_react29.MessageSquareTextIcon, {})
    }
  );
}

// src/components/editor/ui/emoji-dropdown-menu.tsx
var import_lucide_react31 = require("lucide-react");
var import_react197 = require("@udecode/plate-emoji/react");

// src/components/editor/ui/emoji-icons.tsx
var import_lucide_react30 = require("lucide-react");
var import_jsx_runtime85 = require("react/jsx-runtime");
var emojiCategoryIcons = {
  activity: {
    outline: /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(
      "svg",
      {
        className: "size-full",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("path", { d: "M2.1 13.4A10.1 10.1 0 0 0 13.4 2.1" }),
          /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("path", { d: "m5 4.9 14 14.2" }),
          /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("path", { d: "M21.9 10.6a10.1 10.1 0 0 0-11.3 11.3" })
        ]
      }
    ),
    solid: /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(
      "svg",
      {
        className: "size-full",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("path", { d: "M2.1 13.4A10.1 10.1 0 0 0 13.4 2.1" }),
          /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("path", { d: "m5 4.9 14 14.2" }),
          /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("path", { d: "M21.9 10.6a10.1 10.1 0 0 0-11.3 11.3" })
        ]
      }
    )
  },
  custom: {
    outline: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.StarIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.StarIcon, { className: "size-full" })
  },
  flags: {
    outline: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.FlagIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.FlagIcon, { className: "size-full" })
  },
  foods: {
    outline: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.AppleIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.AppleIcon, { className: "size-full" })
  },
  frequent: {
    outline: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.ClockIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.ClockIcon, { className: "size-full" })
  },
  nature: {
    outline: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.LeafIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.LeafIcon, { className: "size-full" })
  },
  objects: {
    outline: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.LightbulbIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.LightbulbIcon, { className: "size-full" })
  },
  people: {
    outline: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.SmileIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.SmileIcon, { className: "size-full" })
  },
  places: {
    outline: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.CompassIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.CompassIcon, { className: "size-full" })
  },
  symbols: {
    outline: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.MusicIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.MusicIcon, { className: "size-full" })
  }
};
var emojiSearchIcons = {
  delete: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.XIcon, { className: "size-4 text-current" }),
  loupe: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react30.SearchIcon, { className: "size-4 text-current" })
};

// src/components/editor/ui/emoji-picker.tsx
var import_plate_emoji3 = require("@udecode/plate-emoji");

// src/components/editor/ui/emoji-picker-content.tsx
var React32 = __toESM(require("react"));
var import_plate_emoji2 = require("@udecode/plate-emoji");
var import_jsx_runtime86 = require("react/jsx-runtime");
var Button3 = React32.memo(
  ({ emoji, index, onMouseOver, onSelect }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(
      "button",
      {
        className: "group relative flex size-9 cursor-pointer items-center justify-center border-none bg-transparent text-2xl leading-none",
        onClick: () => onSelect(emoji),
        onMouseEnter: () => onMouseOver(emoji),
        onMouseLeave: () => onMouseOver(),
        "aria-label": emoji.skins[0].native,
        "data-index": index,
        tabIndex: -1,
        type: "button",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
            "div",
            {
              className: "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
            "span",
            {
              className: "relative",
              style: {
                fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols'
              },
              "data-emoji-set": "native",
              children: emoji.skins[0].native
            }
          )
        ]
      }
    );
  }
);
Button3.displayName = "Button";
var RowOfButtons = React32.memo(
  ({ emojiLibrary, row, onMouseOver, onSelectEmoji }) => /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("div", { className: "flex", "data-index": row.id, children: row.elements.map((emojiId, index) => /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
    Button3,
    {
      onMouseOver,
      onSelect: onSelectEmoji,
      emoji: emojiLibrary.getEmoji(emojiId),
      index
    },
    emojiId
  )) }, row.id)
);
RowOfButtons.displayName = "RowOfButtons";
function EmojiPickerContent({
  emojiLibrary,
  i18n,
  isSearching = false,
  refs,
  searchResult,
  settings = import_plate_emoji2.EmojiSettings,
  visibleCategories,
  onMouseOver,
  onSelectEmoji
}) {
  const getRowWidth = settings.perLine.value * settings.buttonSize.value;
  const isCategoryVisible = React32.useCallback(
    (categoryId) => {
      return visibleCategories.has(categoryId) ? visibleCategories.get(categoryId) : false;
    },
    [visibleCategories]
  );
  const EmojiList = React32.useCallback(() => {
    return emojiLibrary.getGrid().sections().map(({ id: categoryId }) => {
      const section = emojiLibrary.getGrid().section(categoryId);
      const { buttonSize } = settings;
      return /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(
        "div",
        {
          ref: section.root,
          style: { width: getRowWidth },
          "data-id": categoryId,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("div", { className: "sticky -top-px z-1 bg-popover/90 p-1 py-2 text-sm font-semibold backdrop-blur-xs", children: i18n.categories[categoryId] }),
            /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
              "div",
              {
                className: "relative flex flex-wrap",
                style: { height: section.getRows().length * buttonSize.value },
                children: isCategoryVisible(categoryId) && section.getRows().map((row) => /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
                  RowOfButtons,
                  {
                    onMouseOver,
                    onSelectEmoji,
                    emojiLibrary,
                    row
                  },
                  row.id
                ))
              }
            )
          ]
        },
        categoryId
      );
    });
  }, [
    emojiLibrary,
    getRowWidth,
    i18n.categories,
    isCategoryVisible,
    onSelectEmoji,
    onMouseOver,
    settings
  ]);
  const SearchList = React32.useCallback(() => {
    return /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { style: { width: getRowWidth }, "data-id": "search", children: [
      /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("div", { className: "sticky -top-px z-1 bg-popover/90 p-1 py-2 text-sm font-semibold text-card-foreground backdrop-blur-xs", children: i18n.searchResult }),
      /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("div", { className: "relative flex flex-wrap", children: searchResult.map((emoji, index) => /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
        Button3,
        {
          onMouseOver,
          onSelect: onSelectEmoji,
          emoji: emojiLibrary.getEmoji(emoji.id),
          index
        },
        emoji.id
      )) })
    ] });
  }, [
    emojiLibrary,
    getRowWidth,
    i18n.searchResult,
    searchResult,
    onSelectEmoji,
    onMouseOver
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
    "div",
    {
      ref: refs.current.contentRoot,
      className: cn(
        "h-full min-h-[50%] overflow-x-hidden overflow-y-auto px-2",
        "[&::-webkit-scrollbar]:w-4",
        "[&::-webkit-scrollbar-button]:hidden [&::-webkit-scrollbar-button]:size-0",
        "[&::-webkit-scrollbar-thumb]:min-h-11 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb]:hover:bg-muted-foreground/25",
        "[&::-webkit-scrollbar-thumb]:border-4 [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-popover [&::-webkit-scrollbar-thumb]:bg-clip-padding"
      ),
      "data-id": "scroll",
      children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("div", { ref: refs.current.content, className: "h-full", children: isSearching ? SearchList() : EmojiList() })
    }
  );
}

// src/components/editor/ui/emoji-picker-navigation.tsx
var import_jsx_runtime87 = require("react/jsx-runtime");
function EmojiPickerNavigation({
  emojiLibrary,
  focusedCategory,
  i18n,
  icons,
  onClick
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(TooltipProvider, { delayDuration: 500, children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
    "nav",
    {
      id: "emoji-nav",
      className: "mb-2.5 border-0 border-b border-solid border-b-border p-1.5",
      children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("div", { className: "relative flex items-center justify-evenly", children: emojiLibrary.getGrid().sections().map(({ id }) => /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)(Tooltip, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
          Button,
          {
            size: "sm",
            variant: "ghost",
            className: cn(
              "h-fit rounded-full fill-current p-1.5 text-muted-foreground hover:bg-muted hover:text-muted-foreground",
              id === focusedCategory && "pointer-events-none bg-accent fill-current text-accent-foreground"
            ),
            onClick: () => {
              onClick(id);
            },
            "aria-label": i18n.categories[id],
            type: "button",
            children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("span", { className: "inline-flex size-5 items-center justify-center", children: icons.categories[id].outline })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(TooltipContent, { side: "bottom", children: i18n.categories[id] })
      ] }, id)) })
    }
  ) });
}

// src/components/editor/ui/emoji-picker-preview.tsx
var import_jsx_runtime88 = require("react/jsx-runtime");
function EmojiPreview({ emoji }) {
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("div", { className: "flex h-14 max-h-14 min-h-14 items-center border-t border-muted p-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("div", { className: "flex items-center justify-center text-2xl", children: emoji?.skins[0].native }),
    /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("div", { className: "overflow-hidden pl-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("div", { className: "truncate text-sm font-semibold", children: emoji?.name }),
      /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("div", { className: "truncate text-sm", children: `:${emoji?.id}:` })
    ] })
  ] });
}
function NoEmoji({ i18n }) {
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("div", { className: "flex h-14 max-h-14 min-h-14 items-center border-t border-muted p-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("div", { className: "flex items-center justify-center text-2xl", children: "\u{1F622}" }),
    /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("div", { className: "overflow-hidden pl-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("div", { className: "truncate text-sm font-bold", children: i18n.searchNoResultsTitle }),
      /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("div", { className: "truncate text-sm", children: i18n.searchNoResultsSubtitle })
    ] })
  ] });
}
function PickAnEmoji({ i18n }) {
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("div", { className: "flex h-14 max-h-14 min-h-14 items-center border-t border-muted p-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("div", { className: "flex items-center justify-center text-2xl", children: "\u261D\uFE0F" }),
    /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("div", { className: "overflow-hidden pl-2", children: /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("div", { className: "truncate text-sm font-semibold", children: i18n.pick }) })
  ] });
}
function EmojiPickerPreview({
  emoji,
  hasFound = true,
  i18n,
  isSearching = false,
  ...props
}) {
  const showPickEmoji = !emoji && (!isSearching || hasFound);
  const showNoEmoji = isSearching && !hasFound;
  const showPreview = emoji && !showNoEmoji && !showNoEmoji;
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)(import_jsx_runtime88.Fragment, { children: [
    showPreview && /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(EmojiPreview, { emoji, ...props }),
    showPickEmoji && /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(PickAnEmoji, { i18n, ...props }),
    showNoEmoji && /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(NoEmoji, { i18n, ...props })
  ] });
}

// src/components/editor/ui/emoji-picker-search-and-clear.tsx
var import_jsx_runtime89 = require("react/jsx-runtime");
function EmojiPickerSearchAndClear({
  clearSearch,
  i18n,
  searchValue
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)("div", { className: "flex items-center text-foreground", children: [
    /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
      "div",
      {
        className: cn(
          "absolute top-1/2 left-2.5 z-10 flex size-5 -translate-y-1/2 items-center justify-center text-foreground"
        ),
        children: emojiSearchIcons.loupe
      }
    ),
    searchValue && /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
      Button,
      {
        size: "icon",
        variant: "ghost",
        className: cn(
          "absolute top-1/2 right-0.5 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-popover-foreground hover:bg-transparent"
        ),
        onClick: clearSearch,
        title: i18n.clear,
        "aria-label": "Clear",
        type: "button",
        children: emojiSearchIcons.delete
      }
    )
  ] });
}

// src/components/editor/ui/emoji-picker-search-bar.tsx
var import_jsx_runtime90 = require("react/jsx-runtime");
function EmojiPickerSearchBar({
  children,
  i18n,
  searchValue,
  setSearch
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("div", { className: "flex items-center px-2", children: /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("div", { className: "relative flex grow items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
      "input",
      {
        className: "block w-full appearance-none rounded-full border-0 bg-muted px-10 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:outline-none",
        value: searchValue,
        onChange: (event) => setSearch(event.target.value),
        placeholder: i18n.search,
        "aria-label": "Search",
        autoComplete: "off",
        type: "text",
        autoFocus: true
      }
    ),
    children
  ] }) });
}

// src/components/editor/ui/emoji-picker.tsx
var import_jsx_runtime91 = require("react/jsx-runtime");
function EmojiPicker({
  clearSearch,
  emoji,
  emojiLibrary,
  focusedCategory,
  hasFound,
  i18n,
  icons,
  isSearching,
  refs,
  searchResult,
  searchValue,
  setSearch,
  settings = import_plate_emoji3.EmojiSettings,
  visibleCategories,
  handleCategoryClick,
  onMouseOver,
  onSelectEmoji
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)(
    "div",
    {
      className: cn(
        "flex flex-col rounded-xl bg-popover text-popover-foreground",
        "h-[23rem] w-80 border shadow-md"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(
          EmojiPickerNavigation,
          {
            onClick: handleCategoryClick,
            emojiLibrary,
            focusedCategory,
            i18n,
            icons
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(
          EmojiPickerSearchBar,
          {
            i18n,
            searchValue,
            setSearch,
            children: /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(
              EmojiPickerSearchAndClear,
              {
                clearSearch,
                i18n,
                searchValue
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(
          EmojiPickerContent,
          {
            onMouseOver,
            onSelectEmoji,
            emojiLibrary,
            i18n,
            isSearching,
            refs,
            searchResult,
            settings,
            visibleCategories
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(
          EmojiPickerPreview,
          {
            emoji,
            hasFound,
            i18n,
            isSearching
          }
        )
      ]
    }
  );
}

// src/components/editor/ui/emoji-toolbar-dropdown.tsx
var Popover2 = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime92 = require("react/jsx-runtime");
function EmojiToolbarDropdown({
  children,
  control,
  isOpen,
  setIsOpen
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(Popover2.Root, { open: isOpen, onOpenChange: setIsOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(Popover2.Trigger, { asChild: true, children: control }),
    /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(Popover2.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(Popover2.Content, { className: "z-100", children }) })
  ] });
}

// src/components/editor/ui/emoji-dropdown-menu.tsx
var import_jsx_runtime93 = require("react/jsx-runtime");
function EmojiDropdownMenu({
  options,
  ...props
}) {
  const { emojiPickerState, isOpen, setIsOpen } = (0, import_react197.useEmojiDropdownMenuState)(options);
  return /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
    EmojiToolbarDropdown,
    {
      control: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(ToolbarButton, { pressed: isOpen, tooltip: "Emoji", isDropdown: true, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react31.Smile, {}) }),
      isOpen,
      setIsOpen,
      children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
        EmojiPicker,
        {
          ...emojiPickerState,
          icons: {
            categories: emojiCategoryIcons,
            search: emojiSearchIcons
          },
          isOpen,
          setIsOpen,
          settings: options?.settings
        }
      )
    }
  );
}

// src/components/editor/ui/export-toolbar-button.tsx
var React33 = __toESM(require("react"));
var import_html2canvas_pro = __toESM(require("html2canvas-pro"));
var import_lowlight3 = require("lowlight");
var import_lucide_react33 = require("lucide-react");
var import_cn4 = require("@udecode/cn");
var import_plate44 = require("@udecode/plate");
var import_plate_alignment2 = require("@udecode/plate-alignment");
var import_plate_basic_marks2 = require("@udecode/plate-basic-marks");
var import_plate_block_quote2 = require("@udecode/plate-block-quote");
var import_plate_code_block5 = require("@udecode/plate-code-block");
var import_plate_comments5 = require("@udecode/plate-comments");
var import_plate_date3 = require("@udecode/plate-date");
var import_plate_font2 = require("@udecode/plate-font");
var import_plate_heading15 = require("@udecode/plate-heading");
var import_plate_highlight2 = require("@udecode/plate-highlight");
var import_plate_horizontal_rule2 = require("@udecode/plate-horizontal-rule");
var import_plate_indent2 = require("@udecode/plate-indent");
var import_plate_indent_list7 = require("@udecode/plate-indent-list");
var import_plate_kbd2 = require("@udecode/plate-kbd");
var import_plate_layout3 = require("@udecode/plate-layout");
var import_plate_line_height = require("@udecode/plate-line-height");
var import_plate_link3 = require("@udecode/plate-link");
var import_plate_markdown3 = require("@udecode/plate-markdown");
var import_plate_math5 = require("@udecode/plate-math");
var import_plate_media3 = require("@udecode/plate-media");
var import_plate_mention3 = require("@udecode/plate-mention");
var import_plate_table4 = require("@udecode/plate-table");
var import_plate_toggle = require("@udecode/plate-toggle");
var import_react198 = require("@udecode/plate/react");

// src/components/editor/ui/comment-leaf-static.tsx
var import_plate40 = require("@udecode/plate");
var import_jsx_runtime94 = require("react/jsx-runtime");
function CommentLeafStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
    import_plate40.SlateLeaf,
    {
      ...props,
      className: "border-b-2 border-b-highlight/35 bg-highlight/15",
      children: props.children
    }
  );
}

// src/components/editor/ui/date-element-static.tsx
var import_plate41 = require("@udecode/plate");
var import_jsx_runtime95 = require("react/jsx-runtime");
function DateElementStatic(props) {
  const { element } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)(import_plate41.SlateElement, { className: "inline-block", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("span", { className: "w-fit rounded-sm bg-muted px-1 text-muted-foreground", children: element.date ? (() => {
      const today = /* @__PURE__ */ new Date();
      const elementDate = new Date(element.date);
      const isToday = elementDate.getDate() === today.getDate() && elementDate.getMonth() === today.getMonth() && elementDate.getFullYear() === today.getFullYear();
      const isYesterday = new Date(today.setDate(today.getDate() - 1)).toDateString() === elementDate.toDateString();
      const isTomorrow = new Date(today.setDate(today.getDate() + 2)).toDateString() === elementDate.toDateString();
      if (isToday) return "Today";
      if (isYesterday) return "Yesterday";
      if (isTomorrow) return "Tomorrow";
      return elementDate.toLocaleDateString(void 0, {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    })() : /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("span", { children: "Pick a date" }) }),
    props.children
  ] });
}

// src/components/editor/ui/kbd-leaf-static.tsx
var import_plate42 = require("@udecode/plate");
var import_jsx_runtime96 = require("react/jsx-runtime");
function KbdLeafStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(
    import_plate42.SlateLeaf,
    {
      ...props,
      as: "kbd",
      className: "rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-sm shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(248,_249,_250)_0px_1px_5px_0px_inset,_rgb(193,_200,_205)_0px_0px_0px_0.5px,_rgb(193,_200,_205)_0px_2px_1px_-1px,_rgb(193,_200,_205)_0px_1px_0px_0px] dark:shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(26,_29,_30)_0px_1px_5px_0px_inset,_rgb(76,_81,_85)_0px_0px_0px_0.5px,_rgb(76,_81,_85)_0px_2px_1px_-1px,_rgb(76,_81,_85)_0px_1px_0px_0px]",
      children: props.children
    }
  );
}

// src/components/editor/ui/toggle-element-static.tsx
var import_plate43 = require("@udecode/plate");
var import_lucide_react32 = require("lucide-react");
var import_jsx_runtime97 = require("react/jsx-runtime");
function ToggleElementStatic(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(import_plate43.SlateElement, { ...props, className: "pl-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
      "div",
      {
        className: "absolute top-0 -left-0.5 size-6 cursor-pointer items-center justify-center rounded-md p-px text-muted-foreground transition-colors select-none hover:bg-accent [&_svg]:size-4",
        contentEditable: false,
        children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react32.ChevronRight, { className: "rotate-0 transition-transform duration-75" })
      }
    ),
    props.children
  ] });
}

// src/components/editor/ui/export-toolbar-button.tsx
var import_jsx_runtime98 = require("react/jsx-runtime");
var siteUrl = process.env.WEBSITE_URL || "https://platejs.org";
var lowlight3 = (0, import_lowlight3.createLowlight)(import_lowlight3.all);
function ExportToolbarButton(props) {
  const editor = (0, import_react198.useEditorRef)();
  const [open, setOpen] = React33.useState(false);
  const getCanvas = async () => {
    const style = document.createElement("style");
    document.head.append(style);
    const canvas = await (0, import_html2canvas_pro.default)(editor.api.toDOMNode(editor), {
      onclone: (document2) => {
        const editorElement = document2.querySelector(
          '[contenteditable="true"]'
        );
        if (editorElement) {
          Array.from(editorElement.querySelectorAll("*")).forEach((element) => {
            const existingStyle = element.getAttribute("style") || "";
            element.setAttribute(
              "style",
              `${existingStyle}; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important`
            );
          });
        }
      }
    });
    style.remove();
    return canvas;
  };
  const downloadFile = async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(blobUrl);
  };
  const exportToPdf = async () => {
    const canvas = await getCanvas();
    const PDFLib = await import("pdf-lib");
    const pdfDoc = await PDFLib.PDFDocument.create();
    const page = pdfDoc.addPage([canvas.width, canvas.height]);
    const imageEmbed = await pdfDoc.embedPng(canvas.toDataURL("PNG"));
    const { height, width } = imageEmbed.scale(1);
    page.drawImage(imageEmbed, {
      height,
      width,
      x: 0,
      y: 0
    });
    const pdfBase64 = await pdfDoc.saveAsBase64({ dataUri: true });
    await downloadFile(pdfBase64, "plate.pdf");
  };
  const exportToImage = async () => {
    const canvas = await getCanvas();
    await downloadFile(canvas.toDataURL("image/png"), "plate.png");
  };
  const exportToHtml = async (type) => {
    const components2 = {
      [import_plate_media3.BaseAudioPlugin.key]: MediaAudioElementStatic,
      [import_plate_block_quote2.BaseBlockquotePlugin.key]: BlockquoteElementStatic,
      [import_plate_basic_marks2.BaseBoldPlugin.key]: (0, import_cn4.withProps)(import_plate44.SlateLeaf, { as: "strong" }),
      [import_plate_code_block5.BaseCodeBlockPlugin.key]: CodeBlockElementStatic,
      [import_plate_code_block5.BaseCodeLinePlugin.key]: CodeLineElementStatic,
      [import_plate_basic_marks2.BaseCodePlugin.key]: CodeLeafStatic,
      [import_plate_code_block5.BaseCodeSyntaxPlugin.key]: CodeSyntaxLeafStatic,
      [import_plate_layout3.BaseColumnItemPlugin.key]: ColumnElementStatic,
      [import_plate_layout3.BaseColumnPlugin.key]: ColumnGroupElementStatic,
      [import_plate_comments5.BaseCommentsPlugin.key]: CommentLeafStatic,
      [import_plate_date3.BaseDatePlugin.key]: DateElementStatic,
      [import_plate_math5.BaseEquationPlugin.key]: EquationElementStatic,
      [import_plate_media3.BaseFilePlugin.key]: MediaFileElementStatic,
      [import_plate_highlight2.BaseHighlightPlugin.key]: HighlightLeafStatic,
      [import_plate_horizontal_rule2.BaseHorizontalRulePlugin.key]: HrElementStatic,
      [import_plate_media3.BaseImagePlugin.key]: ImageElementStatic,
      [import_plate_math5.BaseInlineEquationPlugin.key]: InlineEquationElementStatic,
      [import_plate_basic_marks2.BaseItalicPlugin.key]: (0, import_cn4.withProps)(import_plate44.SlateLeaf, { as: "em" }),
      [import_plate_kbd2.BaseKbdPlugin.key]: KbdLeafStatic,
      [import_plate_link3.BaseLinkPlugin.key]: LinkElementStatic,
      // [BaseMediaEmbedPlugin.key]: MediaEmbedElementStatic,
      [import_plate_mention3.BaseMentionPlugin.key]: MentionElementStatic,
      [import_plate44.BaseParagraphPlugin.key]: ParagraphElementStatic,
      [import_plate_basic_marks2.BaseStrikethroughPlugin.key]: (0, import_cn4.withProps)(import_plate44.SlateLeaf, { as: "del" }),
      [import_plate_basic_marks2.BaseSubscriptPlugin.key]: (0, import_cn4.withProps)(import_plate44.SlateLeaf, { as: "sub" }),
      [import_plate_basic_marks2.BaseSuperscriptPlugin.key]: (0, import_cn4.withProps)(import_plate44.SlateLeaf, { as: "sup" }),
      [import_plate_table4.BaseTableCellHeaderPlugin.key]: TableCellHeaderStaticElement,
      [import_plate_table4.BaseTableCellPlugin.key]: TableCellElementStatic,
      [import_plate_table4.BaseTablePlugin.key]: TableElementStatic,
      [import_plate_table4.BaseTableRowPlugin.key]: TableRowElementStatic,
      [import_plate_heading15.BaseTocPlugin.key]: TocElementStatic,
      [import_plate_toggle.BaseTogglePlugin.key]: ToggleElementStatic,
      [import_plate_basic_marks2.BaseUnderlinePlugin.key]: (0, import_cn4.withProps)(import_plate44.SlateLeaf, { as: "u" }),
      [import_plate_media3.BaseVideoPlugin.key]: MediaVideoElementStatic,
      [import_plate_heading15.HEADING_KEYS.h1]: (0, import_cn4.withProps)(HeadingElementStatic, { variant: "h1" }),
      [import_plate_heading15.HEADING_KEYS.h2]: (0, import_cn4.withProps)(HeadingElementStatic, { variant: "h2" }),
      [import_plate_heading15.HEADING_KEYS.h3]: (0, import_cn4.withProps)(HeadingElementStatic, { variant: "h3" }),
      [import_plate_heading15.HEADING_KEYS.h4]: (0, import_cn4.withProps)(HeadingElementStatic, { variant: "h4" }),
      [import_plate_heading15.HEADING_KEYS.h5]: (0, import_cn4.withProps)(HeadingElementStatic, { variant: "h5" }),
      [import_plate_heading15.HEADING_KEYS.h6]: (0, import_cn4.withProps)(HeadingElementStatic, { variant: "h6" })
    };
    const editorStatic = (0, import_plate44.createSlateEditor)({
      plugins: [
        import_plate_layout3.BaseColumnPlugin,
        import_plate_layout3.BaseColumnItemPlugin,
        import_plate_heading15.BaseTocPlugin,
        import_plate_media3.BaseVideoPlugin,
        import_plate_media3.BaseAudioPlugin,
        import_plate44.BaseParagraphPlugin,
        import_plate_heading15.BaseHeadingPlugin,
        import_plate_media3.BaseMediaEmbedPlugin,
        import_plate_basic_marks2.BaseBoldPlugin,
        import_plate_basic_marks2.BaseCodePlugin,
        import_plate_basic_marks2.BaseItalicPlugin,
        import_plate_basic_marks2.BaseStrikethroughPlugin,
        import_plate_basic_marks2.BaseSubscriptPlugin,
        import_plate_basic_marks2.BaseSuperscriptPlugin,
        import_plate_basic_marks2.BaseUnderlinePlugin,
        import_plate_block_quote2.BaseBlockquotePlugin,
        import_plate_date3.BaseDatePlugin,
        import_plate_math5.BaseEquationPlugin,
        import_plate_math5.BaseInlineEquationPlugin,
        import_plate_code_block5.BaseCodeBlockPlugin.configure({
          options: {
            lowlight: lowlight3
          }
        }),
        import_plate_indent2.BaseIndentPlugin.extend({
          inject: {
            targetPlugins: [
              import_plate44.BaseParagraphPlugin.key,
              import_plate_block_quote2.BaseBlockquotePlugin.key,
              import_plate_code_block5.BaseCodeBlockPlugin.key
            ]
          }
        }),
        import_plate_indent_list7.BaseIndentListPlugin.extend({
          inject: {
            targetPlugins: [
              import_plate44.BaseParagraphPlugin.key,
              ...import_plate_heading15.HEADING_LEVELS,
              import_plate_block_quote2.BaseBlockquotePlugin.key,
              import_plate_code_block5.BaseCodeBlockPlugin.key,
              import_plate_toggle.BaseTogglePlugin.key
            ]
          },
          options: {
            listStyleTypes: {
              fire: {
                liComponent: FireLiComponent,
                markerComponent: FireMarker,
                type: "fire"
              },
              todo: {
                liComponent: TodoLiStatic,
                markerComponent: TodoMarkerStatic,
                type: "todo"
              }
            }
          }
        }),
        import_plate_link3.BaseLinkPlugin,
        import_plate_table4.BaseTableRowPlugin,
        import_plate_table4.BaseTablePlugin,
        import_plate_table4.BaseTableCellPlugin,
        import_plate_horizontal_rule2.BaseHorizontalRulePlugin,
        import_plate_font2.BaseFontColorPlugin,
        import_plate_font2.BaseFontBackgroundColorPlugin,
        import_plate_font2.BaseFontSizePlugin,
        import_plate_kbd2.BaseKbdPlugin,
        import_plate_alignment2.BaseAlignPlugin.extend({
          inject: {
            targetPlugins: [
              import_plate44.BaseParagraphPlugin.key,
              import_plate_media3.BaseMediaEmbedPlugin.key,
              ...import_plate_heading15.HEADING_LEVELS,
              import_plate_media3.BaseImagePlugin.key
            ]
          }
        }),
        import_plate_line_height.BaseLineHeightPlugin,
        import_plate_highlight2.BaseHighlightPlugin,
        import_plate_media3.BaseFilePlugin,
        import_plate_media3.BaseImagePlugin,
        import_plate_mention3.BaseMentionPlugin,
        import_plate_comments5.BaseCommentsPlugin,
        import_plate_toggle.BaseTogglePlugin
      ],
      value: editor.children
    });
    const editorHtml = await (0, import_plate44.serializeHtml)(editorStatic, {
      components: components2,
      editorComponent: EditorStatic,
      props: { style: { padding: "0 calc(50% - 350px)", paddingBottom: "" } }
    });
    const tailwindCss = `<link rel="stylesheet" href="${siteUrl}/tailwind.css">`;
    const katexCss = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.18/dist/katex.css" integrity="sha384-9PvLvaiSKCPkFKB1ZsEoTjgnJn+O3KvEwtsz37/XrkYft3DTk2gHdYvd9oWgW3tV" crossorigin="anonymous">`;
    const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&family=JetBrains+Mono:wght@400..700&display=swap"
          rel="stylesheet"
        />
        ${tailwindCss}
        ${katexCss}
        <style>
          :root {
            --font-sans: 'Inter', 'Inter Fallback';
            --font-mono: 'JetBrains Mono', 'JetBrains Mono Fallback';
          }
        </style>
      </head>
      <body>
        ${editorHtml}
      </body>
    </html>`;
    const url = `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
    type === "copy" && await navigator.clipboard.writeText(url);
    type === "download" && await downloadFile(url, "plate.html");
  };
  const exportToMarkdown = async (type) => {
    const md = editor.getApi(import_plate_markdown3.MarkdownPlugin).markdown.serialize();
    const url = `data:text/markdown;charset=utf-8,${encodeURIComponent(md)}`;
    type === "copy" && await navigator.clipboard.writeText(url);
    type === "download" && await downloadFile(url, "plate.md");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(ToolbarButton, { pressed: open, tooltip: "Export", isDropdown: true, children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react33.ArrowDownToLineIcon, { className: "size-4" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(DropdownMenuContent, { align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(DropdownMenuGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(DropdownMenuItem, { onSelect: () => exportToHtml("download"), children: "Export as HTML" }),
      /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(DropdownMenuItem, { onSelect: () => exportToHtml("copy"), children: "Export as Copy HTML" }),
      /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(DropdownMenuItem, { onSelect: exportToPdf, children: "Export as PDF" }),
      /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(DropdownMenuItem, { onSelect: exportToImage, children: "Export as Image" }),
      /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(DropdownMenuItem, { onSelect: () => exportToMarkdown("download"), children: "Export as Markdown" }),
      /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(DropdownMenuItem, { onSelect: () => exportToMarkdown("copy"), children: "Export as Copy Markdown" })
    ] }) })
  ] });
}

// src/components/editor/ui/font-size-toolbar-button.tsx
var React34 = __toESM(require("react"));
var import_lucide_react34 = require("lucide-react");
var import_plate_font3 = require("@udecode/plate-font");
var import_react199 = require("@udecode/plate-font/react");
var import_plate_heading16 = require("@udecode/plate-heading");
var import_react200 = require("@udecode/plate/react");
var import_jsx_runtime99 = require("react/jsx-runtime");
var DEFAULT_FONT_SIZE = "16";
var FONT_SIZE_MAP = {
  [import_plate_heading16.HEADING_KEYS.h1]: "36",
  [import_plate_heading16.HEADING_KEYS.h2]: "24",
  [import_plate_heading16.HEADING_KEYS.h3]: "20"
};
var FONT_SIZES = [
  "8",
  "9",
  "10",
  "12",
  "14",
  "16",
  "18",
  "24",
  "30",
  "36",
  "48",
  "60",
  "72",
  "96"
];
function FontSizeToolbarButton() {
  const [inputValue, setInputValue] = React34.useState(DEFAULT_FONT_SIZE);
  const [isFocused, setIsFocused] = React34.useState(false);
  const { api, editor } = (0, import_react200.useEditorPlugin)(import_react199.FontSizePlugin);
  const cursorFontSize = (0, import_react200.useEditorSelector)((editor2) => {
    const fontSize = editor2.api.marks()?.[import_react199.FontSizePlugin.key];
    if (fontSize) {
      return (0, import_plate_font3.toUnitLess)(fontSize);
    }
    const [block] = editor2.api.block() || [];
    if (!block?.type) return DEFAULT_FONT_SIZE;
    return block.type in FONT_SIZE_MAP ? FONT_SIZE_MAP[block.type] : DEFAULT_FONT_SIZE;
  }, []);
  const handleInputChange = () => {
    const newSize = (0, import_plate_font3.toUnitLess)(inputValue);
    if (Number.parseInt(newSize) < 1 || Number.parseInt(newSize) > 100) {
      editor.tf.focus();
      return;
    }
    if (newSize !== (0, import_plate_font3.toUnitLess)(cursorFontSize)) {
      api.fontSize.setMark(`${newSize}px`);
    }
    editor.tf.focus();
  };
  const handleFontSizeChange = (delta) => {
    const newSize = Number(displayValue) + delta;
    api.fontSize.setMark(`${newSize}px`);
    editor.tf.focus();
  };
  const displayValue = isFocused ? inputValue : cursorFontSize;
  return /* @__PURE__ */ (0, import_jsx_runtime99.jsxs)("div", { className: "flex h-7 items-center gap-1 rounded-md bg-muted/60 p-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(ToolbarButton, { onClick: () => handleFontSizeChange(-1), children: /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(import_lucide_react34.Minus, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime99.jsxs)(Popover, { open: isFocused, modal: false, children: [
      /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(
        "input",
        {
          className: cn(
            "h-full w-10 shrink-0 bg-transparent px-1 text-center text-sm hover:bg-muted"
          ),
          value: displayValue,
          onBlur: () => {
            setIsFocused(false);
            handleInputChange();
          },
          onChange: (e) => setInputValue(e.target.value),
          onFocus: () => {
            setIsFocused(true);
            setInputValue((0, import_plate_font3.toUnitLess)(cursorFontSize));
          },
          onKeyDown: (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleInputChange();
            }
          },
          "data-plate-focus": "true",
          type: "text"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(
        PopoverContent,
        {
          className: "w-10 px-px py-1",
          onOpenAutoFocus: (e) => e.preventDefault(),
          children: FONT_SIZES.map((size) => /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(
            "button",
            {
              className: cn(
                "flex h-8 w-full items-center justify-center text-sm hover:bg-accent data-[highlighted=true]:bg-accent"
              ),
              onClick: () => {
                api.fontSize.setMark(`${size}px`);
                setIsFocused(false);
              },
              "data-highlighted": size === displayValue,
              type: "button",
              children: size
            },
            size
          ))
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(ToolbarButton, { onClick: () => handleFontSizeChange(1), children: /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(import_lucide_react34.Plus, {}) })
  ] });
}

// src/components/editor/ui/history-toolbar-button.tsx
var import_react201 = require("@udecode/plate/react");
var import_lucide_react35 = require("lucide-react");
var import_jsx_runtime100 = require("react/jsx-runtime");
function RedoToolbarButton(props) {
  const editor = (0, import_react201.useEditorRef)();
  const disabled = (0, import_react201.useEditorSelector)(
    (editor2) => editor2.history.redos.length === 0,
    []
  );
  return /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
    ToolbarButton,
    {
      ...props,
      disabled,
      onClick: () => editor.redo(),
      onMouseDown: (e) => e.preventDefault(),
      tooltip: "Redo",
      children: /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(import_lucide_react35.Redo2Icon, {})
    }
  );
}
function UndoToolbarButton(props) {
  const editor = (0, import_react201.useEditorRef)();
  const disabled = (0, import_react201.useEditorSelector)(
    (editor2) => editor2.history.undos.length === 0,
    []
  );
  return /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
    ToolbarButton,
    {
      ...props,
      disabled,
      onClick: () => editor.undo(),
      onMouseDown: (e) => e.preventDefault(),
      tooltip: "Undo",
      children: /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(import_lucide_react35.Undo2Icon, {})
    }
  );
}

// src/components/editor/ui/import-toolbar-button.tsx
var React35 = __toESM(require("react"));
var import_lucide_react36 = require("lucide-react");
var import_use_file_picker = require("use-file-picker");
var import_plate45 = require("@udecode/plate");
var import_plate_markdown4 = require("@udecode/plate-markdown");
var import_react202 = require("@udecode/plate/react");
var import_jsx_runtime101 = require("react/jsx-runtime");
function ImportToolbarButton(props) {
  const editor = (0, import_react202.useEditorRef)();
  const [open, setOpen] = React35.useState(false);
  const getFileNodes = (text, type) => {
    if (type === "html") {
      const editorNode = (0, import_plate45.getEditorDOMFromHtmlString)(text);
      const nodes = editor.api.html.deserialize({
        element: editorNode
      });
      return nodes;
    }
    if (type === "markdown") {
      return editor.getApi(import_plate_markdown4.MarkdownPlugin).markdown.deserialize(text);
    }
    return [];
  };
  const { openFilePicker: openMdFilePicker } = (0, import_use_file_picker.useFilePicker)({
    accept: [".md", ".mdx"],
    multiple: false,
    onFilesSelected: async ({ plainFiles }) => {
      const text = await plainFiles[0].text();
      const nodes = getFileNodes(text, "markdown");
      editor.tf.insertNodes(nodes);
    }
  });
  const { openFilePicker: openHtmlFilePicker } = (0, import_use_file_picker.useFilePicker)({
    accept: ["text/html"],
    multiple: false,
    onFilesSelected: async ({ plainFiles }) => {
      const text = await plainFiles[0].text();
      const nodes = getFileNodes(text, "html");
      editor.tf.insertNodes(nodes);
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(ToolbarButton, { pressed: open, tooltip: "Import", isDropdown: true, children: /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_lucide_react36.ArrowUpToLineIcon, { className: "size-4" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(DropdownMenuContent, { align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(DropdownMenuGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
        DropdownMenuItem,
        {
          onSelect: () => {
            openHtmlFilePicker();
          },
          children: "Import from HTML"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
        DropdownMenuItem,
        {
          onSelect: () => {
            openMdFilePicker();
          },
          children: "Import from Markdown"
        }
      )
    ] }) })
  ] });
}

// src/components/editor/ui/indent-list-toolbar-button.tsx
var React36 = __toESM(require("react"));
var import_lucide_react37 = require("lucide-react");
var import_plate_indent_list8 = require("@udecode/plate-indent-list");
var import_react203 = require("@udecode/plate/react");
var import_jsx_runtime102 = require("react/jsx-runtime");
function NumberedIndentListToolbarButton() {
  const editor = (0, import_react203.useEditorRef)();
  const [open, setOpen] = React36.useState(false);
  const pressed = (0, import_react203.useEditorSelector)(
    (editor2) => (0, import_plate_indent_list8.someIndentList)(editor2, [
      import_plate_indent_list8.ListStyleType.Decimal,
      import_plate_indent_list8.ListStyleType.LowerAlpha,
      import_plate_indent_list8.ListStyleType.UpperAlpha,
      import_plate_indent_list8.ListStyleType.LowerRoman,
      import_plate_indent_list8.ListStyleType.UpperRoman
    ]),
    []
  );
  return /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(ToolbarSplitButton, { pressed: open, children: [
    /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
      ToolbarSplitButtonPrimary,
      {
        className: "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        onClick: () => (0, import_plate_indent_list8.toggleIndentList)(editor, {
          listStyleType: import_plate_indent_list8.ListStyleType.Decimal
        }),
        "data-state": pressed ? "on" : "off",
        children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_lucide_react37.ListOrdered, { className: "size-4" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(DropdownMenu, { open, onOpenChange: setOpen, modal: false, children: [
      /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(ToolbarSplitButtonSecondary, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(DropdownMenuContent, { align: "start", alignOffset: -32, children: /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(DropdownMenuGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
          DropdownMenuItem,
          {
            onSelect: () => (0, import_plate_indent_list8.toggleIndentList)(editor, {
              listStyleType: import_plate_indent_list8.ListStyleType.Decimal
            }),
            children: "Decimal (1, 2, 3)"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
          DropdownMenuItem,
          {
            onSelect: () => (0, import_plate_indent_list8.toggleIndentList)(editor, {
              listStyleType: import_plate_indent_list8.ListStyleType.LowerAlpha
            }),
            children: "Lower Alpha (a, b, c)"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
          DropdownMenuItem,
          {
            onSelect: () => (0, import_plate_indent_list8.toggleIndentList)(editor, {
              listStyleType: import_plate_indent_list8.ListStyleType.UpperAlpha
            }),
            children: "Upper Alpha (A, B, C)"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
          DropdownMenuItem,
          {
            onSelect: () => (0, import_plate_indent_list8.toggleIndentList)(editor, {
              listStyleType: import_plate_indent_list8.ListStyleType.LowerRoman
            }),
            children: "Lower Roman (i, ii, iii)"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
          DropdownMenuItem,
          {
            onSelect: () => (0, import_plate_indent_list8.toggleIndentList)(editor, {
              listStyleType: import_plate_indent_list8.ListStyleType.UpperRoman
            }),
            children: "Upper Roman (I, II, III)"
          }
        )
      ] }) })
    ] })
  ] });
}
function BulletedIndentListToolbarButton() {
  const editor = (0, import_react203.useEditorRef)();
  const [open, setOpen] = React36.useState(false);
  const pressed = (0, import_react203.useEditorSelector)(
    (editor2) => (0, import_plate_indent_list8.someIndentList)(editor2, [
      import_plate_indent_list8.ListStyleType.Disc,
      import_plate_indent_list8.ListStyleType.Circle,
      import_plate_indent_list8.ListStyleType.Square
    ]),
    []
  );
  return /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(ToolbarSplitButton, { pressed: open, children: [
    /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
      ToolbarSplitButtonPrimary,
      {
        className: "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        onClick: () => {
          (0, import_plate_indent_list8.toggleIndentList)(editor, {
            listStyleType: import_plate_indent_list8.ListStyleType.Disc
          });
        },
        "data-state": pressed ? "on" : "off",
        children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_lucide_react37.List, { className: "size-4" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(DropdownMenu, { open, onOpenChange: setOpen, modal: false, children: [
      /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(ToolbarSplitButtonSecondary, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(DropdownMenuContent, { align: "start", alignOffset: -32, children: /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(DropdownMenuGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
          DropdownMenuItem,
          {
            onClick: () => (0, import_plate_indent_list8.toggleIndentList)(editor, {
              listStyleType: import_plate_indent_list8.ListStyleType.Disc
            }),
            children: /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime102.jsx)("div", { className: "size-2 rounded-full border border-current bg-current" }),
              "Default"
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
          DropdownMenuItem,
          {
            onClick: () => (0, import_plate_indent_list8.toggleIndentList)(editor, {
              listStyleType: import_plate_indent_list8.ListStyleType.Circle
            }),
            children: /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime102.jsx)("div", { className: "size-2 rounded-full border border-current" }),
              "Circle"
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
          DropdownMenuItem,
          {
            onClick: () => (0, import_plate_indent_list8.toggleIndentList)(editor, {
              listStyleType: import_plate_indent_list8.ListStyleType.Square
            }),
            children: /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime102.jsx)("div", { className: "size-2 border border-current bg-current" }),
              "Square"
            ] })
          }
        )
      ] }) })
    ] })
  ] });
}

// src/components/editor/ui/indent-todo-toolbar-button.tsx
var import_react204 = require("@udecode/plate-indent-list/react");
var import_lucide_react38 = require("lucide-react");
var import_jsx_runtime103 = require("react/jsx-runtime");
function IndentTodoToolbarButton(props) {
  const state = (0, import_react204.useIndentTodoToolBarButtonState)({ nodeType: "todo" });
  const { props: buttonProps } = (0, import_react204.useIndentTodoToolBarButton)(state);
  return /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(ToolbarButton, { ...props, ...buttonProps, tooltip: "Todo", children: /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(import_lucide_react38.ListTodoIcon, {}) });
}

// src/components/editor/ui/indent-toolbar-button.tsx
var import_react205 = require("@udecode/plate-indent/react");
var import_lucide_react39 = require("lucide-react");
var import_jsx_runtime104 = require("react/jsx-runtime");
function IndentToolbarButton(props) {
  const { props: buttonProps } = (0, import_react205.useIndentButton)();
  return /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(ToolbarButton, { ...props, ...buttonProps, tooltip: "Indent", children: /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(import_lucide_react39.Indent, {}) });
}

// src/components/editor/ui/line-height-dropdown-menu.tsx
var React37 = __toESM(require("react"));
var import_lucide_react40 = require("lucide-react");
var import_react_dropdown_menu = require("@radix-ui/react-dropdown-menu");
var import_react206 = require("@udecode/plate-line-height/react");
var import_jsx_runtime105 = require("react/jsx-runtime");
function LineHeightDropdownMenu({ ...props }) {
  const [open, setOpen] = React37.useState(false);
  const state = (0, import_react206.useLineHeightDropdownMenuState)();
  const { radioGroupProps } = (0, import_react206.useLineHeightDropdownMenu)(state);
  return /* @__PURE__ */ (0, import_jsx_runtime105.jsxs)(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(ToolbarButton, { pressed: open, tooltip: "Line height", isDropdown: true, children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_lucide_react40.WrapText, {}) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(DropdownMenuContent, { className: "min-w-0", align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(DropdownMenuRadioGroup, { ...radioGroupProps, children: state.values.map((_value) => /* @__PURE__ */ (0, import_jsx_runtime105.jsxs)(
      DropdownMenuRadioItem,
      {
        className: "min-w-[180px] pl-2 *:first:[span]:hidden",
        value: _value,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime105.jsx)("span", { className: "pointer-events-none absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_react_dropdown_menu.DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_lucide_react40.CheckIcon, {}) }) }),
          _value
        ]
      },
      _value
    )) }) })
  ] });
}

// src/components/editor/ui/link-toolbar-button.tsx
var import_react207 = require("@udecode/plate-link/react");
var import_lucide_react41 = require("lucide-react");
var import_jsx_runtime106 = require("react/jsx-runtime");
function LinkToolbarButton(props) {
  const state = (0, import_react207.useLinkToolbarButtonState)();
  const { props: buttonProps } = (0, import_react207.useLinkToolbarButton)(state);
  return /* @__PURE__ */ (0, import_jsx_runtime106.jsx)(ToolbarButton, { ...props, ...buttonProps, "data-plate-focus": true, tooltip: "Link", children: /* @__PURE__ */ (0, import_jsx_runtime106.jsx)(import_lucide_react41.Link, {}) });
}

// src/components/editor/ui/mark-toolbar-button.tsx
var import_react208 = require("@udecode/plate/react");
var import_jsx_runtime107 = require("react/jsx-runtime");
function MarkToolbarButton({
  clear,
  nodeType,
  ...props
}) {
  const state = (0, import_react208.useMarkToolbarButtonState)({ clear, nodeType });
  const { props: buttonProps } = (0, import_react208.useMarkToolbarButton)(state);
  return /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(ToolbarButton, { ...props, ...buttonProps });
}

// src/components/editor/ui/media-toolbar-button.tsx
var React38 = __toESM(require("react"));
var import_lucide_react42 = require("lucide-react");
var import_sonner2 = require("sonner");
var import_use_file_picker2 = require("use-file-picker");
var import_plate46 = require("@udecode/plate");
var import_react209 = require("@udecode/plate-media/react");
var import_react210 = require("@udecode/plate/react");

// src/components/editor/ui/alert-dialog.tsx
var AlertDialogPrimitive = __toESM(require("@radix-ui/react-alert-dialog"));
var import_jsx_runtime108 = require("react/jsx-runtime");
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(AlertDialogPrimitive.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(AlertDialogPrimitive.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
    AlertDialogPrimitive.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsxs)(AlertDialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(AlertDialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
      AlertDialogPrimitive.Content,
      {
        "data-slot": "alert-dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
    AlertDialogPrimitive.Title,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
    AlertDialogPrimitive.Description,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
    AlertDialogPrimitive.Action,
    {
      className: cn(buttonVariants(), className),
      ...props
    }
  );
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
    AlertDialogPrimitive.Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}

// src/components/editor/ui/media-toolbar-button.tsx
var import_jsx_runtime109 = require("react/jsx-runtime");
var MEDIA_CONFIG = {
  [import_react209.AudioPlugin.key]: {
    accept: ["audio/*"],
    icon: /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(import_lucide_react42.AudioLinesIcon, { className: "size-4" }),
    title: "Insert Audio",
    tooltip: "Audio"
  },
  [import_react209.FilePlugin.key]: {
    accept: ["*"],
    icon: /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(import_lucide_react42.FileUpIcon, { className: "size-4" }),
    title: "Insert File",
    tooltip: "File"
  },
  [import_react209.ImagePlugin.key]: {
    accept: ["image/*"],
    icon: /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(import_lucide_react42.ImageIcon, { className: "size-4" }),
    title: "Insert Image",
    tooltip: "Image"
  },
  [import_react209.VideoPlugin.key]: {
    accept: ["video/*"],
    icon: /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(import_lucide_react42.FilmIcon, { className: "size-4" }),
    title: "Insert Video",
    tooltip: "Video"
  }
};
function MediaToolbarButton({
  nodeType,
  ...props
}) {
  const currentConfig = MEDIA_CONFIG[nodeType];
  const editor = (0, import_react210.useEditorRef)();
  const [open, setOpen] = React38.useState(false);
  const [dialogOpen, setDialogOpen] = React38.useState(false);
  const { openFilePicker } = (0, import_use_file_picker2.useFilePicker)({
    accept: currentConfig.accept,
    multiple: true,
    onFilesSelected: ({ plainFiles: updatedFiles }) => {
      editor.getTransforms(import_react209.PlaceholderPlugin).insert.media(updatedFiles);
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime109.jsxs)(import_jsx_runtime109.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime109.jsxs)(
      ToolbarSplitButton,
      {
        onClick: () => {
          openFilePicker();
        },
        onKeyDown: (e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        },
        pressed: open,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(ToolbarSplitButtonPrimary, { children: currentConfig.icon }),
          /* @__PURE__ */ (0, import_jsx_runtime109.jsxs)(
            DropdownMenu,
            {
              open,
              onOpenChange: setOpen,
              modal: false,
              ...props,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(ToolbarSplitButtonSecondary, {}) }),
                /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(
                  DropdownMenuContent,
                  {
                    onClick: (e) => e.stopPropagation(),
                    align: "start",
                    alignOffset: -32,
                    children: /* @__PURE__ */ (0, import_jsx_runtime109.jsxs)(DropdownMenuGroup, { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime109.jsxs)(DropdownMenuItem, { onSelect: () => openFilePicker(), children: [
                        currentConfig.icon,
                        "Upload from computer"
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime109.jsxs)(DropdownMenuItem, { onSelect: () => setDialogOpen(true), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(import_lucide_react42.LinkIcon, {}),
                        "Insert via URL"
                      ] })
                    ] })
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(
      AlertDialog,
      {
        open: dialogOpen,
        onOpenChange: (value) => {
          setDialogOpen(value);
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(AlertDialogContent, { className: "gap-6", children: /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(
          MediaUrlDialogContent,
          {
            currentConfig,
            nodeType,
            setOpen: setDialogOpen
          }
        ) })
      }
    )
  ] });
}
function MediaUrlDialogContent({
  currentConfig,
  nodeType,
  setOpen
}) {
  const editor = (0, import_react210.useEditorRef)();
  const [url, setUrl] = React38.useState("");
  const embedMedia = React38.useCallback(() => {
    if (!(0, import_plate46.isUrl)(url)) return import_sonner2.toast.error("Invalid URL");
    setOpen(false);
    editor.tf.insertNodes({
      children: [{ text: "" }],
      name: nodeType === import_react209.FilePlugin.key ? url.split("/").pop() : void 0,
      type: nodeType,
      url
    });
  }, [url, editor, nodeType, setOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime109.jsxs)(import_jsx_runtime109.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(AlertDialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(AlertDialogTitle, { children: currentConfig.title }) }),
    /* @__PURE__ */ (0, import_jsx_runtime109.jsxs)(AlertDialogDescription, { className: "group relative w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(
        "label",
        {
          className: "absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground",
          htmlFor: "url",
          children: /* @__PURE__ */ (0, import_jsx_runtime109.jsx)("span", { className: "inline-flex bg-background px-2", children: "URL" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(
        Input,
        {
          id: "url",
          className: "w-full",
          value: url,
          onChange: (e) => setUrl(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter") embedMedia();
          },
          placeholder: "",
          type: "url",
          autoFocus: true
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime109.jsxs)(AlertDialogFooter, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(AlertDialogCancel, { children: "Cancel" }),
      /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(
        AlertDialogAction,
        {
          onClick: (e) => {
            e.preventDefault();
            embedMedia();
          },
          children: "Accept"
        }
      )
    ] })
  ] });
}

// src/components/editor/ui/mode-dropdown-menu.tsx
var React39 = __toESM(require("react"));
var import_lucide_react43 = require("lucide-react");
var import_react_dropdown_menu2 = require("@radix-ui/react-dropdown-menu");
var import_react211 = require("@udecode/plate-suggestion/react");
var import_react212 = require("@udecode/plate/react");
var import_jsx_runtime110 = require("react/jsx-runtime");
function ModeDropdownMenu(props) {
  const editor = (0, import_react212.useEditorRef)();
  const [readOnly, setReadOnly] = (0, import_react212.usePlateState)("readOnly");
  const [open, setOpen] = React39.useState(false);
  const isSuggesting = (0, import_react212.usePluginOption)(import_react211.SuggestionPlugin, "isSuggesting");
  let value = "editing";
  if (readOnly) value = "viewing";
  if (isSuggesting) value = "suggestion";
  const item = {
    editing: {
      icon: /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(import_lucide_react43.PenIcon, {}),
      label: "Editing"
    },
    suggestion: {
      icon: /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(import_lucide_react43.PencilLineIcon, {}),
      label: "Suggestion"
    },
    viewing: {
      icon: /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(import_lucide_react43.EyeIcon, {}),
      label: "Viewing"
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(ToolbarButton, { pressed: open, tooltip: "Editing mode", isDropdown: true, children: [
      item[value].icon,
      /* @__PURE__ */ (0, import_jsx_runtime110.jsx)("span", { className: "hidden lg:inline", children: item[value].label })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(DropdownMenuContent, { className: "min-w-[180px]", align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(
      DropdownMenuRadioGroup,
      {
        value,
        onValueChange: (newValue) => {
          if (newValue === "viewing") {
            setReadOnly(true);
            return;
          } else {
            setReadOnly(false);
          }
          if (newValue === "suggestion") {
            editor.setOption(import_react211.SuggestionPlugin, "isSuggesting", true);
            return;
          } else {
            editor.setOption(import_react211.SuggestionPlugin, "isSuggesting", false);
          }
          if (newValue === "editing") {
            editor.tf.focus();
            return;
          }
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(
            DropdownMenuRadioItem,
            {
              className: "pl-2 *:first:[span]:hidden *:[svg]:text-muted-foreground",
              value: "editing",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(Indicator2, {}),
                item.editing.icon,
                item.editing.label
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(
            DropdownMenuRadioItem,
            {
              className: "pl-2 *:first:[span]:hidden *:[svg]:text-muted-foreground",
              value: "viewing",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(Indicator2, {}),
                item.viewing.icon,
                item.viewing.label
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(
            DropdownMenuRadioItem,
            {
              className: "pl-2 *:first:[span]:hidden *:[svg]:text-muted-foreground",
              value: "suggestion",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(Indicator2, {}),
                item.suggestion.icon,
                item.suggestion.label
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
function Indicator2() {
  return /* @__PURE__ */ (0, import_jsx_runtime110.jsx)("span", { className: "pointer-events-none absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(import_react_dropdown_menu2.DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(import_lucide_react43.CheckIcon, {}) }) });
}

// src/components/editor/ui/more-dropdown-menu.tsx
var React40 = __toESM(require("react"));
var import_lucide_react44 = require("lucide-react");
var import_react213 = require("@udecode/plate-basic-marks/react");
var import_react214 = require("@udecode/plate-kbd/react");
var import_react215 = require("@udecode/plate/react");
var import_jsx_runtime111 = require("react/jsx-runtime");
function MoreDropdownMenu(props) {
  const editor = (0, import_react215.useEditorRef)();
  const [open, setOpen] = React40.useState(false);
  return /* @__PURE__ */ (0, import_jsx_runtime111.jsxs)(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(ToolbarButton, { pressed: open, tooltip: "Insert", children: /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(import_lucide_react44.MoreHorizontalIcon, {}) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(
      DropdownMenuContent,
      {
        className: "ignore-click-outside/toolbar flex max-h-[500px] min-w-[180px] flex-col overflow-y-auto",
        align: "start",
        children: /* @__PURE__ */ (0, import_jsx_runtime111.jsxs)(DropdownMenuGroup, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime111.jsxs)(
            DropdownMenuItem,
            {
              onSelect: () => {
                editor.tf.toggleMark(import_react214.KbdPlugin.key);
                editor.tf.collapse({ edge: "end" });
                editor.tf.focus();
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(import_lucide_react44.KeyboardIcon, {}),
                "Keyboard input"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime111.jsxs)(
            DropdownMenuItem,
            {
              onSelect: () => {
                editor.tf.toggleMark(import_react213.SuperscriptPlugin.key, {
                  remove: import_react213.SubscriptPlugin.key
                });
                editor.tf.focus();
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(import_lucide_react44.SuperscriptIcon, {}),
                "Superscript"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime111.jsxs)(
            DropdownMenuItem,
            {
              onSelect: () => {
                editor.tf.toggleMark(import_react213.SubscriptPlugin.key, {
                  remove: import_react213.SuperscriptPlugin.key
                });
                editor.tf.focus();
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(import_lucide_react44.SubscriptIcon, {}),
                "Subscript"
              ]
            }
          )
        ] })
      }
    )
  ] });
}

// src/components/editor/ui/outdent-toolbar-button.tsx
var import_react216 = require("@udecode/plate-indent/react");
var import_lucide_react45 = require("lucide-react");
var import_jsx_runtime112 = require("react/jsx-runtime");
function OutdentToolbarButton(props) {
  const { props: buttonProps } = (0, import_react216.useOutdentButton)();
  return /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(ToolbarButton, { ...props, ...buttonProps, tooltip: "Outdent", children: /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(import_lucide_react45.Outdent, {}) });
}

// src/components/editor/ui/table-dropdown-menu.tsx
var React41 = __toESM(require("react"));
var import_lucide_react46 = require("lucide-react");
var import_react217 = require("@udecode/plate-table/react");
var import_react218 = require("@udecode/plate/react");
var import_jsx_runtime113 = require("react/jsx-runtime");
function TableDropdownMenu(props) {
  const tableSelected = (0, import_react218.useEditorSelector)(
    (editor2) => editor2.api.some({ match: { type: import_react217.TablePlugin.key } }),
    []
  );
  const { editor, tf } = (0, import_react218.useEditorPlugin)(import_react217.TablePlugin);
  const [open, setOpen] = React41.useState(false);
  const mergeState = (0, import_react217.useTableMergeState)();
  return /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(ToolbarButton, { pressed: open, tooltip: "Table", isDropdown: true, children: /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(import_lucide_react46.Table, {}) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(
      DropdownMenuContent,
      {
        className: "flex w-[180px] min-w-0 flex-col",
        align: "start",
        children: /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(DropdownMenuGroup, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(DropdownMenuSub, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(DropdownMenuSubTrigger, { className: "gap-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", children: [
              /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(import_lucide_react46.Grid3x3Icon, { className: "size-4" }),
              /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("span", { children: "Table" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(DropdownMenuSubContent, { className: "m-0 p-0", children: /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(TablePicker, {}) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(DropdownMenuSub, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(
              DropdownMenuSubTrigger,
              {
                className: "gap-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                disabled: !tableSelected,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("div", { className: "size-4" }),
                  /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("span", { children: "Cell" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(DropdownMenuSubContent, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !mergeState.canMerge,
                  onSelect: () => {
                    tf.table.merge();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(import_lucide_react46.Combine, {}),
                    "Merge cells"
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !mergeState.canSplit,
                  onSelect: () => {
                    tf.table.split();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(import_lucide_react46.Ungroup, {}),
                    "Split cell"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(DropdownMenuSub, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(
              DropdownMenuSubTrigger,
              {
                className: "gap-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                disabled: !tableSelected,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("div", { className: "size-4" }),
                  /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("span", { children: "Row" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(DropdownMenuSubContent, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.insert.tableRow({ before: true });
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(import_lucide_react46.ArrowUp, {}),
                    "Insert row before"
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.insert.tableRow();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(import_lucide_react46.ArrowDown, {}),
                    "Insert row after"
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.remove.tableRow();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(import_lucide_react46.XIcon, {}),
                    "Delete row"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(DropdownMenuSub, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(
              DropdownMenuSubTrigger,
              {
                className: "gap-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                disabled: !tableSelected,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("div", { className: "size-4" }),
                  /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("span", { children: "Column" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(DropdownMenuSubContent, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.insert.tableColumn({ before: true });
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(import_lucide_react46.ArrowLeft, {}),
                    "Insert column before"
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.insert.tableColumn();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(import_lucide_react46.ArrowRight, {}),
                    "Insert column after"
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.remove.tableColumn();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(import_lucide_react46.XIcon, {}),
                    "Delete column"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(
            DropdownMenuItem,
            {
              className: "min-w-[180px]",
              disabled: !tableSelected,
              onSelect: () => {
                tf.remove.table();
                editor.tf.focus();
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(import_lucide_react46.Trash2Icon, {}),
                "Delete table"
              ]
            }
          )
        ] })
      }
    )
  ] });
}
function TablePicker() {
  const { editor, tf } = (0, import_react218.useEditorPlugin)(import_react217.TablePlugin);
  const [tablePicker, setTablePicker] = React41.useState({
    grid: Array.from({ length: 8 }, () => Array.from({ length: 8 }).fill(0)),
    size: { colCount: 0, rowCount: 0 }
  });
  const onCellMove = (rowIndex, colIndex) => {
    const newGrid = [...tablePicker.grid];
    for (let i = 0; i < newGrid.length; i++) {
      for (let j = 0; j < newGrid[i].length; j++) {
        newGrid[i][j] = i >= 0 && i <= rowIndex && j >= 0 && j <= colIndex ? 1 : 0;
      }
    }
    setTablePicker({
      grid: newGrid,
      size: { colCount: colIndex + 1, rowCount: rowIndex + 1 }
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(
    "div",
    {
      className: "m-0 flex! flex-col p-0",
      onClick: () => {
        tf.insert.table(tablePicker.size, { select: true });
        editor.tf.focus();
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("div", { className: "grid size-[130px] grid-cols-8 gap-0.5 p-1", children: tablePicker.grid.map(
          (rows, rowIndex) => rows.map((value, columIndex) => {
            return /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(
              "div",
              {
                className: cn(
                  "col-span-1 size-3 border border-solid bg-secondary",
                  !!value && "border-current"
                ),
                onMouseMove: () => {
                  onCellMove(rowIndex, columIndex);
                }
              },
              `(${rowIndex},${columIndex})`
            );
          })
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)("div", { className: "text-center text-xs text-current", children: [
          tablePicker.size.rowCount,
          " x ",
          tablePicker.size.colCount
        ] })
      ]
    }
  );
}

// src/components/editor/ui/toggle-toolbar-button.tsx
var import_react219 = require("@udecode/plate-toggle/react");
var import_lucide_react47 = require("lucide-react");
var import_jsx_runtime114 = require("react/jsx-runtime");
function ToggleToolbarButton(props) {
  const state = (0, import_react219.useToggleToolbarButtonState)();
  const { props: buttonProps } = (0, import_react219.useToggleToolbarButton)(state);
  return /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(ToolbarButton, { ...props, ...buttonProps, tooltip: "Toggle", children: /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(import_lucide_react47.ListCollapseIcon, {}) });
}

// src/components/editor/ui/turn-into-dropdown-menu.tsx
var React42 = __toESM(require("react"));
var import_lucide_react48 = require("lucide-react");
var import_react_dropdown_menu3 = require("@radix-ui/react-dropdown-menu");
var import_react220 = require("@udecode/plate-block-quote/react");
var import_react221 = require("@udecode/plate-code-block/react");
var import_plate_heading17 = require("@udecode/plate-heading");
var import_plate_indent_list9 = require("@udecode/plate-indent-list");
var import_react222 = require("@udecode/plate-toggle/react");
var import_react223 = require("@udecode/plate/react");
var import_jsx_runtime115 = require("react/jsx-runtime");
var turnIntoItems = [
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react48.PilcrowIcon, {}),
    keywords: ["paragraph"],
    label: "Text",
    value: import_react223.ParagraphPlugin.key
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react48.Heading1Icon, {}),
    keywords: ["title", "h1"],
    label: "Heading 1",
    value: import_plate_heading17.HEADING_KEYS.h1
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react48.Heading2Icon, {}),
    keywords: ["subtitle", "h2"],
    label: "Heading 2",
    value: import_plate_heading17.HEADING_KEYS.h2
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react48.Heading3Icon, {}),
    keywords: ["subtitle", "h3"],
    label: "Heading 3",
    value: import_plate_heading17.HEADING_KEYS.h3
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react48.ListIcon, {}),
    keywords: ["unordered", "ul", "-"],
    label: "Bulleted list",
    value: import_plate_indent_list9.ListStyleType.Disc
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react48.ListOrderedIcon, {}),
    keywords: ["ordered", "ol", "1"],
    label: "Numbered list",
    value: import_plate_indent_list9.ListStyleType.Decimal
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react48.SquareIcon, {}),
    keywords: ["checklist", "task", "checkbox", "[]"],
    label: "To-do list",
    value: import_plate_indent_list9.INDENT_LIST_KEYS.todo
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react48.ChevronRightIcon, {}),
    keywords: ["collapsible", "expandable"],
    label: "Toggle list",
    value: import_react222.TogglePlugin.key
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react48.FileCodeIcon, {}),
    keywords: ["```"],
    label: "Code",
    value: import_react221.CodeBlockPlugin.key
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react48.QuoteIcon, {}),
    keywords: ["citation", "blockquote", ">"],
    label: "Quote",
    value: import_react220.BlockquotePlugin.key
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react48.Columns3Icon, {}),
    label: "3 columns",
    value: "action_three_columns"
  }
];
function TurnIntoDropdownMenu(props) {
  const editor = (0, import_react223.useEditorRef)();
  const [open, setOpen] = React42.useState(false);
  const value = (0, import_react223.useSelectionFragmentProp)({
    defaultValue: import_react223.ParagraphPlugin.key,
    structuralTypes: STRUCTURAL_TYPES,
    getProp: (node) => getBlockType(node)
  });
  const selectedItem = React42.useMemo(
    () => turnIntoItems.find(
      (item) => item.value === (value ?? import_react223.ParagraphPlugin.key)
    ) ?? turnIntoItems[0],
    [value]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
      ToolbarButton,
      {
        className: "min-w-[125px]",
        pressed: open,
        tooltip: "Turn into",
        isDropdown: true,
        children: selectedItem.label
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
      DropdownMenuContent,
      {
        className: "ignore-click-outside/toolbar min-w-0",
        onCloseAutoFocus: (e) => {
          e.preventDefault();
          editor.tf.focus();
        },
        align: "start",
        children: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
          ToolbarMenuGroup,
          {
            value,
            onValueChange: (type) => {
              setBlockType(editor, type);
            },
            label: "Turn into",
            children: turnIntoItems.map(({ icon, label, value: itemValue }) => /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)(
              DropdownMenuRadioItem,
              {
                className: "min-w-[180px] pl-2 *:first:[span]:hidden",
                value: itemValue,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime115.jsx)("span", { className: "pointer-events-none absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_react_dropdown_menu3.DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react48.CheckIcon, {}) }) }),
                  icon,
                  label
                ]
              },
              itemValue
            ))
          }
        )
      }
    )
  ] });
}

// src/components/editor/ui/fixed-toolbar-buttons.tsx
var import_jsx_runtime116 = require("react/jsx-runtime");
function FixedToolbarButtons({ allows, groupClass }) {
  const readOnly = (0, import_react228.useEditorReadOnly)();
  return /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(import_jsx_runtime116.Fragment, { children: [
    !readOnly && /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(import_jsx_runtime116.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("undo") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(UndoToolbarButton, {}),
        allows.includes("redo") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(RedoToolbarButton, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(ToolbarGroup, { className: groupClass || "", children: allows.includes("ai") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(AIToolbarButton, { tooltip: "AI commands", children: /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_lucide_react49.WandSparklesIcon, {}) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("export") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(ExportToolbarButton, { children: /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_lucide_react49.ArrowUpToLineIcon, {}) }),
        allows.includes("import") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(ImportToolbarButton, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("insert") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(InsertDropdownMenu, {}),
        allows.includes("turn_into") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(TurnIntoDropdownMenu, {}),
        allows.includes("font_size") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(FontSizeToolbarButton, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("bold") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(MarkToolbarButton, { nodeType: import_react224.BoldPlugin.key, tooltip: "Bold (\u2318+B)", children: /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_lucide_react49.BoldIcon, {}) }),
        allows.includes("italic") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(MarkToolbarButton, { nodeType: import_react224.ItalicPlugin.key, tooltip: "Italic (\u2318+I)", children: /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_lucide_react49.ItalicIcon, {}) }),
        allows.includes("underline") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(MarkToolbarButton, { nodeType: import_react224.UnderlinePlugin.key, tooltip: "Underline (\u2318+U)", children: /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_lucide_react49.UnderlineIcon, {}) }),
        allows.includes("strikethrough") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(MarkToolbarButton, { nodeType: import_react224.StrikethroughPlugin.key, tooltip: "Strikethrough (\u2318+\u21E7+M)", children: /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_lucide_react49.StrikethroughIcon, {}) }),
        allows.includes("code") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(MarkToolbarButton, { nodeType: import_react224.CodePlugin.key, tooltip: "Code (\u2318+E)", children: /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_lucide_react49.Code2Icon, {}) }),
        allows.includes("font_color") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(ColorDropdownMenu, { nodeType: import_react225.FontColorPlugin.key, tooltip: "Text color", children: /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_lucide_react49.BaselineIcon, {}) }),
        allows.includes("background_color") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(ColorDropdownMenu, { nodeType: import_react225.FontBackgroundColorPlugin.key, tooltip: "Background color", children: /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_lucide_react49.PaintBucketIcon, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("align") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(AlignDropdownMenu, {}),
        allows.includes("indent_list") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(NumberedIndentListToolbarButton, {}),
        allows.includes("bulleted_list") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(BulletedIndentListToolbarButton, {}),
        allows.includes("indent_todo") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(IndentTodoToolbarButton, {}),
        allows.includes("toggle") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(ToggleToolbarButton, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("link") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(LinkToolbarButton, {}),
        allows.includes("table") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(TableDropdownMenu, {}),
        allows.includes("emoji") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(EmojiDropdownMenu, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("image") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(MediaToolbarButton, { nodeType: import_react227.ImagePlugin.key }),
        allows.includes("video") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(MediaToolbarButton, { nodeType: import_react227.VideoPlugin.key }),
        allows.includes("audio") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(MediaToolbarButton, { nodeType: import_react227.AudioPlugin.key }),
        allows.includes("file") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(MediaToolbarButton, { nodeType: import_react227.FilePlugin.key })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("line_height") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(LineHeightDropdownMenu, {}),
        allows.includes("outdent") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(OutdentToolbarButton, {}),
        allows.includes("indent") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(IndentToolbarButton, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(ToolbarGroup, { className: groupClass || "", children: allows.includes("more") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(MoreDropdownMenu, {}) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime116.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(ToolbarGroup, { className: groupClass || "", children: [
      allows.includes("highlight") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(MarkToolbarButton, { nodeType: import_react226.HighlightPlugin.key, tooltip: "Highlight", children: /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_lucide_react49.HighlighterIcon, {}) }),
      allows.includes("comment") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(CommentToolbarButton, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(ToolbarGroup, { className: groupClass || "", children: allows.includes("mode") && /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(ModeDropdownMenu, {}) })
  ] });
}

// src/components/editor/plugins/fixed-toolbar-plugin.tsx
var import_jsx_runtime117 = require("react/jsx-runtime");
var FixedToolbarPlugin = ({ allows, classes }) => {
  return (0, import_react229.createPlatePlugin)({
    key: "fixed-toolbar",
    render: {
      beforeEditable: () => /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(FixedToolbar, { className: classes?.className || "", children: /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(FixedToolbarButtons, { allows, groupClass: classes?.groupClass || "" }) })
    }
  });
};

// src/components/editor/plugins/floating-toolbar-plugin.tsx
var import_react236 = require("@udecode/plate/react");

// src/components/editor/ui/floating-toolbar.tsx
var import_cn5 = require("@udecode/cn");
var import_plate_floating2 = require("@udecode/plate-floating");
var import_react230 = require("@udecode/plate/react");
var import_jsx_runtime118 = require("react/jsx-runtime");
function FloatingToolbar({
  children,
  className,
  state,
  ...props
}) {
  const editorId = (0, import_react230.useEditorId)();
  const focusedEditorId = (0, import_react230.useEventEditorValue)("focus");
  const isFloatingLinkOpen = !!(0, import_react230.usePluginOption)({ key: "a" }, "mode");
  const isAIChatOpen = (0, import_react230.usePluginOption)({ key: "aiChat" }, "open");
  const floatingToolbarState = (0, import_plate_floating2.useFloatingToolbarState)({
    editorId,
    focusedEditorId,
    hideToolbar: isFloatingLinkOpen || isAIChatOpen,
    ...state,
    floatingOptions: {
      middleware: [
        (0, import_plate_floating2.offset)(12),
        (0, import_plate_floating2.flip)({
          fallbackPlacements: [
            "top-start",
            "top-end",
            "bottom-start",
            "bottom-end"
          ],
          padding: 12
        })
      ],
      placement: "top",
      ...state?.floatingOptions
    }
  });
  const {
    clickOutsideRef,
    hidden,
    props: rootProps,
    ref: floatingRef
  } = (0, import_plate_floating2.useFloatingToolbar)(floatingToolbarState);
  const ref = (0, import_cn5.useComposedRef)(props.ref, floatingRef);
  if (hidden) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime118.jsx)("div", { ref: clickOutsideRef, children: /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(
    Toolbar,
    {
      ...props,
      ...rootProps,
      ref,
      className: cn(
        "absolute z-50 scrollbar-hide overflow-x-auto rounded-md border bg-popover p-1 whitespace-nowrap opacity-100 shadow-md print:hidden",
        "max-w-[80vw]",
        className
      ),
      children
    }
  ) });
}

// src/components/editor/ui/floating-toolbar-buttons.tsx
var import_lucide_react52 = require("lucide-react");
var import_react234 = require("@udecode/plate-basic-marks/react");
var import_react235 = require("@udecode/plate/react");

// src/components/editor/ui/inline-equation-toolbar-button.tsx
var import_plate_math6 = require("@udecode/plate-math");
var import_react231 = require("@udecode/plate/react");
var import_lucide_react50 = require("lucide-react");
var import_jsx_runtime119 = require("react/jsx-runtime");
function InlineEquationToolbarButton(props) {
  const editor = (0, import_react231.useEditorRef)();
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
    ToolbarButton,
    {
      ...props,
      onClick: () => {
        (0, import_plate_math6.insertInlineEquation)(editor);
      },
      tooltip: "Mark as equation",
      children: /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(import_lucide_react50.RadicalIcon, {})
    }
  );
}

// src/components/editor/ui/suggestion-toolbar-button.tsx
var import_lucide_react51 = require("lucide-react");
var import_react232 = require("@udecode/plate-suggestion/react");
var import_react233 = require("@udecode/plate/react");
var import_jsx_runtime120 = require("react/jsx-runtime");
function SuggestionToolbarButton() {
  const { setOption } = (0, import_react233.useEditorPlugin)(import_react232.SuggestionPlugin);
  const isSuggesting = (0, import_react233.usePluginOption)(import_react232.SuggestionPlugin, "isSuggesting");
  return /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(
    ToolbarButton,
    {
      className: cn(isSuggesting && "text-brand/80 hover:text-brand/80"),
      onClick: () => setOption("isSuggesting", !isSuggesting),
      onMouseDown: (e) => e.preventDefault(),
      tooltip: isSuggesting ? "Turn off suggesting" : "Suggestion edits",
      children: /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(import_lucide_react51.PencilLineIcon, {})
    }
  );
}

// src/components/editor/ui/floating-toolbar-buttons.tsx
var import_jsx_runtime121 = require("react/jsx-runtime");
function FloatingToolbarButtons({
  allows,
  groupClass
}) {
  const readOnly = (0, import_react235.useEditorReadOnly)();
  return /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(import_jsx_runtime121.Fragment, { children: [
    !readOnly && /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(import_jsx_runtime121.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(ToolbarGroup, { className: groupClass || "", children: allows.includes("ai") && /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(AIToolbarButton, { tooltip: "AI commands", children: [
        /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(import_lucide_react52.WandSparklesIcon, {}),
        "Ask AI"
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("turn_into") && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(TurnIntoDropdownMenu, {}),
        allows.includes("bold") && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(MarkToolbarButton, { nodeType: import_react234.BoldPlugin.key, tooltip: "Bold (\u2318+B)", children: /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(import_lucide_react52.BoldIcon, {}) }),
        allows.includes("italic") && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(MarkToolbarButton, { nodeType: import_react234.ItalicPlugin.key, tooltip: "Italic (\u2318+I)", children: /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(import_lucide_react52.ItalicIcon, {}) }),
        allows.includes("underline") && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(MarkToolbarButton, { nodeType: import_react234.UnderlinePlugin.key, tooltip: "Underline (\u2318+U)", children: /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(import_lucide_react52.UnderlineIcon, {}) }),
        allows.includes("strikethrough") && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(MarkToolbarButton, { nodeType: import_react234.StrikethroughPlugin.key, tooltip: "Strikethrough (\u2318+\u21E7+M)", children: /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(import_lucide_react52.StrikethroughIcon, {}) }),
        allows.includes("code") && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(MarkToolbarButton, { nodeType: import_react234.CodePlugin.key, tooltip: "Code (\u2318+E)", children: /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(import_lucide_react52.Code2Icon, {}) }),
        allows.includes("equation") && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(InlineEquationToolbarButton, {}),
        allows.includes("link") && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(LinkToolbarButton, {})
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(ToolbarGroup, { children: [
      allows.includes("comment") && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(CommentToolbarButton, {}),
      allows.includes("suggestion") && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(SuggestionToolbarButton, {}),
      !readOnly && allows.includes("more") && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(MoreDropdownMenu, {})
    ] })
  ] });
}

// src/components/editor/plugins/floating-toolbar-plugin.tsx
var import_jsx_runtime122 = require("react/jsx-runtime");
var FloatingToolbarPlugin = ({ allows, classes }) => {
  return (0, import_react236.createPlatePlugin)({
    key: "floating-toolbar",
    render: {
      afterEditable: () => /* @__PURE__ */ (0, import_jsx_runtime122.jsx)(FloatingToolbar, { className: classes?.className || "", children: /* @__PURE__ */ (0, import_jsx_runtime122.jsx)(FloatingToolbarButtons, { allows, groupClass: classes?.groupClass || "" }) })
    }
  });
};

// src/components/editor/ui/blockquote-element.tsx
var import_react237 = require("@udecode/plate/react");
var import_jsx_runtime123 = require("react/jsx-runtime");
function BlockquoteElement(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime123.jsx)(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ (0, import_jsx_runtime123.jsx)(
    import_react237.PlateElement,
    {
      as: "blockquote",
      className: "my-1 border-l-2 pl-6 italic",
      ...props
    }
  ) });
}

// src/components/editor/ui/callout-element.tsx
var import_cn6 = require("@udecode/cn");
var import_react238 = require("@udecode/plate-callout/react");
var import_react239 = require("@udecode/plate-emoji/react");
var import_react240 = require("@udecode/plate/react");
var import_jsx_runtime124 = require("react/jsx-runtime");
function CalloutElement({
  attributes,
  children,
  className,
  ...props
}) {
  const { emojiPickerState, isOpen, setIsOpen } = (0, import_react239.useEmojiDropdownMenuState)({
    closeOnSelect: true
  });
  const { emojiToolbarDropdownProps, props: calloutProps } = (0, import_react238.useCalloutEmojiPicker)({
    isOpen,
    setIsOpen
  });
  return /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(
    import_react240.PlateElement,
    {
      className: (0, import_cn6.cn)("my-1 flex rounded-sm bg-muted p-4 pl-3", className),
      style: {
        backgroundColor: props.element.backgroundColor
      },
      attributes: {
        ...attributes,
        "data-plate-open-context-menu": true
      },
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime124.jsxs)("div", { className: "flex w-full gap-2 rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(
          EmojiToolbarDropdown,
          {
            ...emojiToolbarDropdownProps,
            control: /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(
              Button,
              {
                variant: "ghost",
                className: "size-6 p-1 text-[18px] select-none hover:bg-muted-foreground/15",
                style: {
                  fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols'
                },
                contentEditable: false,
                children: props.element.icon || "\u{1F4A1}"
              }
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(
              EmojiPicker,
              {
                ...emojiPickerState,
                ...calloutProps,
                icons: {
                  categories: emojiCategoryIcons,
                  search: emojiSearchIcons
                }
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime124.jsx)("div", { className: "w-full", children })
      ] })
    }
  ) });
}

// src/components/editor/ui/code-block-element.tsx
var React44 = __toESM(require("react"));
var import_lucide_react54 = require("lucide-react");
var import_plate47 = require("@udecode/plate");
var import_plate_code_block6 = require("@udecode/plate-code-block");
var import_react242 = require("@udecode/plate/react");

// src/components/editor/ui/code-block-combobox.tsx
var React43 = __toESM(require("react"));
var import_lucide_react53 = require("lucide-react");
var import_react241 = require("@udecode/plate/react");
var import_jsx_runtime125 = require("react/jsx-runtime");
var languages = [
  { label: "Auto", value: "auto" },
  { label: "Plain Text", value: "plaintext" },
  { label: "ABAP", value: "abap" },
  { label: "Agda", value: "agda" },
  { label: "Arduino", value: "arduino" },
  { label: "ASCII Art", value: "ascii" },
  { label: "Assembly", value: "x86asm" },
  { label: "Bash", value: "bash" },
  { label: "BASIC", value: "basic" },
  { label: "BNF", value: "bnf" },
  { label: "C", value: "c" },
  { label: "C#", value: "csharp" },
  { label: "C++", value: "cpp" },
  { label: "Clojure", value: "clojure" },
  { label: "CoffeeScript", value: "coffeescript" },
  { label: "Coq", value: "coq" },
  { label: "CSS", value: "css" },
  { label: "Dart", value: "dart" },
  { label: "Dhall", value: "dhall" },
  { label: "Diff", value: "diff" },
  { label: "Docker", value: "dockerfile" },
  { label: "EBNF", value: "ebnf" },
  { label: "Elixir", value: "elixir" },
  { label: "Elm", value: "elm" },
  { label: "Erlang", value: "erlang" },
  { label: "F#", value: "fsharp" },
  { label: "Flow", value: "flow" },
  { label: "Fortran", value: "fortran" },
  { label: "Gherkin", value: "gherkin" },
  { label: "GLSL", value: "glsl" },
  { label: "Go", value: "go" },
  { label: "GraphQL", value: "graphql" },
  { label: "Groovy", value: "groovy" },
  { label: "Haskell", value: "haskell" },
  { label: "HCL", value: "hcl" },
  { label: "HTML", value: "html" },
  { label: "Idris", value: "idris" },
  { label: "Java", value: "java" },
  { label: "JavaScript", value: "javascript" },
  { label: "JSON", value: "json" },
  { label: "Julia", value: "julia" },
  { label: "Kotlin", value: "kotlin" },
  { label: "LaTeX", value: "latex" },
  { label: "Less", value: "less" },
  { label: "Lisp", value: "lisp" },
  { label: "LiveScript", value: "livescript" },
  { label: "LLVM IR", value: "llvm" },
  { label: "Lua", value: "lua" },
  { label: "Makefile", value: "makefile" },
  { label: "Markdown", value: "markdown" },
  { label: "Markup", value: "markup" },
  { label: "MATLAB", value: "matlab" },
  { label: "Mathematica", value: "mathematica" },
  { label: "Mermaid", value: "mermaid" },
  { label: "Nix", value: "nix" },
  { label: "Notion Formula", value: "notion" },
  { label: "Objective-C", value: "objectivec" },
  { label: "OCaml", value: "ocaml" },
  { label: "Pascal", value: "pascal" },
  { label: "Perl", value: "perl" },
  { label: "PHP", value: "php" },
  { label: "PowerShell", value: "powershell" },
  { label: "Prolog", value: "prolog" },
  { label: "Protocol Buffers", value: "protobuf" },
  { label: "PureScript", value: "purescript" },
  { label: "Python", value: "python" },
  { label: "R", value: "r" },
  { label: "Racket", value: "racket" },
  { label: "Reason", value: "reasonml" },
  { label: "Ruby", value: "ruby" },
  { label: "Rust", value: "rust" },
  { label: "Sass", value: "scss" },
  { label: "Scala", value: "scala" },
  { label: "Scheme", value: "scheme" },
  { label: "SCSS", value: "scss" },
  { label: "Shell", value: "shell" },
  { label: "Smalltalk", value: "smalltalk" },
  { label: "Solidity", value: "solidity" },
  { label: "SQL", value: "sql" },
  { label: "Swift", value: "swift" },
  { label: "TOML", value: "toml" },
  { label: "TypeScript", value: "typescript" },
  { label: "VB.Net", value: "vbnet" },
  { label: "Verilog", value: "verilog" },
  { label: "VHDL", value: "vhdl" },
  { label: "Visual Basic", value: "vbnet" },
  { label: "WebAssembly", value: "wasm" },
  { label: "XML", value: "xml" },
  { label: "YAML", value: "yaml" }
];
function CodeBlockCombobox() {
  const [open, setOpen] = React43.useState(false);
  const readOnly = (0, import_react241.useReadOnly)();
  const editor = (0, import_react241.useEditorRef)();
  const element = (0, import_react241.useElement)();
  const value = element.lang || "plaintext";
  const [searchValue, setSearchValue] = React43.useState("");
  const items2 = React43.useMemo(
    () => languages.filter(
      (language) => !searchValue || language.label.toLowerCase().includes(searchValue.toLowerCase())
    ),
    [searchValue]
  );
  if (readOnly) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime125.jsxs)(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(
      Button,
      {
        size: "sm",
        variant: "ghost",
        className: "h-6 justify-between gap-1 px-2 text-xs text-muted-foreground select-none",
        "aria-expanded": open,
        role: "combobox",
        children: languages.find((language) => language.value === value)?.label ?? "Plain Text"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(
      PopoverContent,
      {
        className: "w-[200px] p-0",
        onCloseAutoFocus: () => setSearchValue(""),
        children: /* @__PURE__ */ (0, import_jsx_runtime125.jsxs)(Command, { shouldFilter: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(
            CommandInput,
            {
              className: "h-9",
              value: searchValue,
              onValueChange: (value2) => setSearchValue(value2),
              placeholder: "Search language..."
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(CommandEmpty, { children: "No language found." }),
          /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(CommandList, { className: "h-[344px] overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(CommandGroup, { children: items2.map((language) => /* @__PURE__ */ (0, import_jsx_runtime125.jsxs)(
            CommandItem,
            {
              className: "cursor-pointer",
              value: language.value,
              onSelect: (value2) => {
                editor.tf.setNodes(
                  { lang: value2 },
                  { at: element }
                );
                setSearchValue(value2);
                setOpen(false);
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(
                  import_lucide_react53.Check,
                  {
                    className: cn(
                      value === language.value ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                language.label
              ]
            },
            language.label
          )) }) })
        ] })
      }
    )
  ] });
}

// src/components/editor/ui/code-block-element.tsx
var import_jsx_runtime126 = require("react/jsx-runtime");
function CodeBlockElement(props) {
  const { editor, element } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime126.jsx)(BlockWithPlus, { element, children: /* @__PURE__ */ (0, import_jsx_runtime126.jsx)(
    import_react242.PlateElement,
    {
      className: "py-1 **:[.hljs-addition]:bg-[#f0fff4] **:[.hljs-addition]:text-[#22863a] **:[.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable]:text-[#005cc5] **:[.hljs-built_in,.hljs-symbol]:text-[#e36209] **:[.hljs-bullet]:text-[#735c0f] **:[.hljs-comment,.hljs-code,.hljs-formula]:text-[#6a737d] **:[.hljs-deletion]:bg-[#ffeef0] **:[.hljs-deletion]:text-[#b31d28] **:[.hljs-emphasis]:italic **:[.hljs-keyword,.hljs-doctag,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_]:text-[#d73a49] **:[.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo]:text-[#22863a] **:[.hljs-regexp,.hljs-string,.hljs-meta_.hljs-string]:text-[#032f62] **:[.hljs-section]:font-bold **:[.hljs-section]:text-[#005cc5] **:[.hljs-strong]:font-bold **:[.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_]:text-[#6f42c1]",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime126.jsxs)("div", { className: "relative rounded-md bg-muted/50", children: [
        /* @__PURE__ */ (0, import_jsx_runtime126.jsx)("pre", { className: "overflow-x-auto p-8 pr-4 font-mono text-sm leading-[normal] [tab-size:2] print:break-inside-avoid", children: /* @__PURE__ */ (0, import_jsx_runtime126.jsx)("code", { children: props.children }) }),
        /* @__PURE__ */ (0, import_jsx_runtime126.jsxs)(
          "div",
          {
            className: "absolute top-1 right-1 z-10 flex gap-0.5 select-none",
            contentEditable: false,
            children: [
              (0, import_plate_code_block6.isLangSupported)(element.lang) && /* @__PURE__ */ (0, import_jsx_runtime126.jsx)(
                Button,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "size-6 text-xs",
                  onClick: () => (0, import_plate_code_block6.formatCodeBlock)(editor, { element }),
                  title: "Format code",
                  children: /* @__PURE__ */ (0, import_jsx_runtime126.jsx)(import_lucide_react54.BracesIcon, { className: "!size-3.5 text-muted-foreground" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime126.jsx)(CodeBlockCombobox, {}),
              /* @__PURE__ */ (0, import_jsx_runtime126.jsx)(
                CopyButton,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "size-6 gap-1 text-xs text-muted-foreground",
                  value: () => import_plate47.NodeApi.string(element)
                }
              )
            ]
          }
        )
      ] })
    }
  ) });
}
function CopyButton({
  value,
  ...props
}) {
  const [hasCopied, setHasCopied] = React44.useState(false);
  React44.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2e3);
  }, [hasCopied]);
  return /* @__PURE__ */ (0, import_jsx_runtime126.jsxs)(
    Button,
    {
      onClick: () => {
        void navigator.clipboard.writeText(
          typeof value === "function" ? value() : value
        );
        setHasCopied(true);
      },
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime126.jsx)("span", { className: "sr-only", children: "Copy" }),
        hasCopied ? /* @__PURE__ */ (0, import_jsx_runtime126.jsx)(import_lucide_react54.CheckIcon, { className: "!size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime126.jsx)(import_lucide_react54.CopyIcon, { className: "!size-3" })
      ]
    }
  );
}

// src/components/editor/ui/code-leaf.tsx
var import_react243 = require("@udecode/plate/react");
var import_jsx_runtime127 = require("react/jsx-runtime");
function CodeLeaf(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(
    import_react243.PlateLeaf,
    {
      ...props,
      as: "code",
      className: "rounded-md bg-muted px-[0.3em] py-[0.2em] font-mono text-sm whitespace-pre-wrap",
      children: props.children
    }
  );
}

// src/components/editor/ui/code-line-element.tsx
var import_react244 = require("@udecode/plate/react");
var import_jsx_runtime128 = require("react/jsx-runtime");
function CodeLineElement(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime128.jsx)(import_react244.PlateElement, { ...props });
}

// src/components/editor/ui/code-syntax-leaf.tsx
var import_react245 = require("@udecode/plate/react");
var import_jsx_runtime129 = require("react/jsx-runtime");
function CodeSyntaxLeaf(props) {
  const tokenClassName = props.leaf.className;
  return /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(import_react245.PlateLeaf, { className: tokenClassName, ...props });
}

// src/components/editor/ui/column-element.tsx
var React45 = __toESM(require("react"));
var import_lucide_react55 = require("lucide-react");
var import_cn7 = require("@udecode/cn");
var import_plate48 = require("@udecode/plate");
var import_plate_dnd4 = require("@udecode/plate-dnd");
var import_plate_resizable = require("@udecode/plate-resizable");
var import_react246 = require("@udecode/plate-selection/react");
var import_react247 = require("@udecode/plate/react");
var import_jsx_runtime130 = require("react/jsx-runtime");
var ColumnElement = (0, import_react247.withHOC)(
  import_plate_resizable.ResizableProvider,
  function ColumnElement2(props) {
    const { width } = props.element;
    const readOnly = (0, import_react247.useReadOnly)();
    const isSelectionAreaVisible = (0, import_react247.usePluginOption)(
      import_react246.BlockSelectionPlugin,
      "isSelectionAreaVisible"
    );
    const { isDragging, previewRef, handleRef } = (0, import_plate_dnd4.useDraggable)({
      element: props.element,
      orientation: "horizontal",
      type: "column",
      canDropNode: ({ dragEntry, dropEntry }) => import_plate48.PathApi.equals(
        import_plate48.PathApi.parent(dragEntry[1]),
        import_plate48.PathApi.parent(dropEntry[1])
      )
    });
    return /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "group/column relative", style: { width: width ?? "100%" }, children: [
      !readOnly && !isSelectionAreaVisible && /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
        "div",
        {
          ref: handleRef,
          className: cn(
            "absolute top-2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
            "pointer-events-auto flex items-center",
            "opacity-0 transition-opacity group-hover/column:opacity-100"
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(ColumnDragHandle, {})
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
        import_react247.PlateElement,
        {
          ...props,
          ref: (0, import_cn7.useComposedRef)(props.ref, previewRef),
          className: "h-full px-2 pt-2 group-first/column:pl-0 group-last/column:pr-0",
          children: /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)(
            "div",
            {
              className: cn(
                "relative h-full border border-transparent p-1.5",
                !readOnly && "rounded-lg border-dashed border-border",
                isDragging && "opacity-50"
              ),
              children: [
                props.children,
                !readOnly && !isSelectionAreaVisible && /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(DropLine3, {})
              ]
            }
          )
        }
      )
    ] });
  }
);
var ColumnDragHandle = React45.memo(function ColumnDragHandle2() {
  return /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)(Tooltip, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(Button, { variant: "ghost", className: "h-5 !px-1", children: /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
      import_lucide_react55.GripHorizontal,
      {
        className: "text-muted-foreground",
        onClick: (event) => {
          event.stopPropagation();
          event.preventDefault();
        }
      }
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(TooltipContent, { children: "Drag to move column" })
  ] }) });
});
function DropLine3() {
  const { dropLine } = (0, import_plate_dnd4.useDropLine)({ orientation: "horizontal" });
  if (!dropLine) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
    "div",
    {
      className: cn(
        "slate-dropLine",
        "absolute bg-brand/50",
        dropLine === "left" && "inset-y-0 left-[-10.5px] w-1 group-first/column:-left-1",
        dropLine === "right" && "inset-y-0 right-[-11px] w-1 group-last/column:-right-1"
      )
    }
  );
}

// src/components/editor/ui/column-group-element.tsx
var import_lucide_react56 = require("lucide-react");
var import_plate_layout4 = require("@udecode/plate-layout");
var import_react248 = require("@udecode/plate-layout/react");
var import_react249 = require("@udecode/plate/react");
var import_jsx_runtime131 = require("react/jsx-runtime");
function ColumnGroupElement(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_react249.PlateElement, { className: "mb-2", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(ColumnFloatingToolbar, { children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)("div", { className: "flex size-full rounded", children: props.children }) }) });
}
function ColumnFloatingToolbar({ children }) {
  const editor = (0, import_react249.useEditorRef)();
  const readOnly = (0, import_react249.useReadOnly)();
  const element = (0, import_react249.useElement)();
  const { props: buttonProps } = (0, import_react249.useRemoveNodeButton)({ element });
  const isOpen = (0, import_react248.useDebouncePopoverOpen)();
  const onColumnChange = (widths) => {
    (0, import_plate_layout4.setColumns)(editor, {
      at: element,
      widths
    });
  };
  if (readOnly) return /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_jsx_runtime131.Fragment, { children });
  return /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)(Popover, { open: isOpen, modal: false, children: [
    /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(PopoverAnchor, { children }),
    /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
      PopoverContent,
      {
        className: "w-auto p-1",
        onOpenAutoFocus: (e) => e.preventDefault(),
        align: "center",
        side: "top",
        sideOffset: 10,
        children: /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("div", { className: "box-content flex h-8 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
            Button,
            {
              variant: "ghost",
              className: "size-8",
              onClick: () => onColumnChange(["50%", "50%"]),
              children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(DoubleColumnOutlined, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
            Button,
            {
              variant: "ghost",
              className: "size-8",
              onClick: () => onColumnChange(["33%", "33%", "33%"]),
              children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(ThreeColumnOutlined, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
            Button,
            {
              variant: "ghost",
              className: "size-8",
              onClick: () => onColumnChange(["70%", "30%"]),
              children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(RightSideDoubleColumnOutlined, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
            Button,
            {
              variant: "ghost",
              className: "size-8",
              onClick: () => onColumnChange(["30%", "70%"]),
              children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(LeftSideDoubleColumnOutlined, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
            Button,
            {
              variant: "ghost",
              className: "size-8",
              onClick: () => onColumnChange(["25%", "50%", "25%"]),
              children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(DoubleSideDoubleColumnOutlined, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(Separator2, { orientation: "vertical", className: "mx-1 h-6" }),
          /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(Button, { variant: "ghost", className: "size-8", ...buttonProps, children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_lucide_react56.Trash2Icon, {}) })
        ] })
      }
    )
  ] });
}
var DoubleColumnOutlined = (props) => /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
      "path",
      {
        clipRule: "evenodd",
        d: "M8.5 3H13V13H8.5V3ZM7.5 2H8.5H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H8.5H7.5H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H7.5ZM7.5 13H3L3 3H7.5V13Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);
var ThreeColumnOutlined = (props) => /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
      "path",
      {
        clipRule: "evenodd",
        d: "M9.25 3H6.75V13H9.25V3ZM9.25 2H6.75H5.75H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H5.75H6.75H9.25H10.25H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H10.25H9.25ZM10.25 3V13H13V3H10.25ZM3 13H5.75V3H3L3 13Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);
var RightSideDoubleColumnOutlined = (props) => /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
      "path",
      {
        clipRule: "evenodd",
        d: "M11.25 3H13V13H11.25V3ZM10.25 2H11.25H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H11.25H10.25H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H10.25ZM10.25 13H3L3 3H10.25V13Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);
var LeftSideDoubleColumnOutlined = (props) => /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
      "path",
      {
        clipRule: "evenodd",
        d: "M5.75 3H13V13H5.75V3ZM4.75 2H5.75H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H5.75H4.75H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H4.75ZM4.75 13H3L3 3H4.75V13Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);
var DoubleSideDoubleColumnOutlined = (props) => /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
      "path",
      {
        clipRule: "evenodd",
        d: "M10.25 3H5.75V13H10.25V3ZM10.25 2H5.75H4.75H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H4.75H5.75H10.25H11.25H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H11.25H10.25ZM11.25 3V13H13V3H11.25ZM3 13H4.75V3H3L3 13Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);

// src/components/editor/ui/comment-leaf.tsx
var import_plate_comments6 = require("@udecode/plate-comments");
var import_react250 = require("@udecode/plate/react");
var import_jsx_runtime132 = require("react/jsx-runtime");
function CommentLeaf(props) {
  const { children, leaf } = props;
  const { api, setOption } = (0, import_react250.useEditorPlugin)(commentsPlugin);
  const hoverId = (0, import_react250.usePluginOption)(commentsPlugin, "hoverId");
  const activeId = (0, import_react250.usePluginOption)(commentsPlugin, "activeId");
  const isOverlapping = (0, import_plate_comments6.getCommentCount)(leaf) > 1;
  const currentId = api.comment.nodeId(leaf);
  const isActive = activeId === currentId;
  const isHover = hoverId === currentId;
  return /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(
    import_react250.PlateLeaf,
    {
      ...props,
      className: cn(
        "border-b-2 border-b-highlight/[.36] bg-highlight/[.13] transition-colors duration-200",
        (isHover || isActive) && "border-b-highlight bg-highlight/25",
        isOverlapping && "border-b-2 border-b-highlight/[.7] bg-highlight/25",
        (isHover || isActive) && isOverlapping && "border-b-highlight bg-highlight/45"
      ),
      attributes: {
        ...props.attributes,
        onClick: () => setOption("activeId", currentId ?? null),
        onMouseEnter: () => setOption("hoverId", currentId ?? null),
        onMouseLeave: () => setOption("hoverId", null)
      },
      children
    }
  );
}

// src/components/editor/ui/equation-element.tsx
var React46 = __toESM(require("react"));
var import_lucide_react57 = require("lucide-react");
var import_react251 = require("@udecode/plate-math/react");
var import_react252 = require("@udecode/plate/react");
var import_jsx_runtime133 = require("react/jsx-runtime");
function EquationElement(props) {
  const selected = (0, import_react252.useSelected)();
  const [open, setOpen] = React46.useState(selected);
  const katexRef = React46.useRef(null);
  (0, import_react251.useEquationElement)({
    element: props.element,
    katexRef,
    options: {
      displayMode: true,
      errorColor: "#cc0000",
      fleqn: false,
      leqno: false,
      macros: { "\\f": "#1f(#2)" },
      output: "htmlAndMathml",
      strict: "warn",
      throwOnError: false,
      trust: false
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(import_react252.PlateElement, { className: "my-1", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(Popover, { open, onOpenChange: setOpen, modal: false, children: [
      /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
        "div",
        {
          className: cn(
            "group flex cursor-pointer items-center justify-center rounded-sm select-none hover:bg-primary/10 data-[selected=true]:bg-primary/10",
            props.element.texExpression.length === 0 ? "bg-muted p-3 pr-9" : "px-2 py-1"
          ),
          "data-selected": selected,
          contentEditable: false,
          role: "button",
          children: props.element.texExpression.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("span", { ref: katexRef }) : /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "flex h-7 w-full items-center gap-2 text-sm whitespace-nowrap text-muted-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_lucide_react57.RadicalIcon, { className: "size-6 text-muted-foreground/80" }),
            /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("div", { children: "Add a Tex equation" })
          ] })
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
        EquationPopoverContent,
        {
          open,
          placeholder: `f(x) = \\begin{cases}
  x^2, &\\quad x > 0 \\\\
  0, &\\quad x = 0 \\\\
  -x^2, &\\quad x < 0
\\end{cases}`,
          isInline: false,
          setOpen
        }
      )
    ] }),
    props.children
  ] }) });
}

// src/components/editor/ui/excalidraw-element.tsx
var import_react253 = require("@udecode/plate-excalidraw/react");
var import_react254 = require("@udecode/plate/react");
var import_jsx_runtime134 = require("react/jsx-runtime");
function ExcalidrawElement(props) {
  const { children, element } = props;
  const { Excalidraw, excalidrawProps } = (0, import_react253.useExcalidrawElement)({
    element
  });
  return /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(BlockWithPlus, { element, children: /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)(import_react254.PlateElement, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime134.jsx)("div", { contentEditable: false, children: /* @__PURE__ */ (0, import_jsx_runtime134.jsx)("div", { className: "mx-auto aspect-video h-[600px] w-[min(100%,600px)] overflow-hidden rounded-sm border", children: Excalidraw && /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(Excalidraw, { ...excalidrawProps }) }) }),
    children
  ] }) });
}

// src/components/editor/ui/heading-element.tsx
var import_class_variance_authority12 = require("class-variance-authority");
var import_react255 = require("@udecode/plate/react");
var import_jsx_runtime135 = require("react/jsx-runtime");
var headingVariants2 = (0, import_class_variance_authority12.cva)("relative mb-1", {
  variants: {
    variant: {
      h1: "mt-[1.6em] pb-1 font-heading text-4xl font-bold",
      h2: "mt-[1.4em] pb-px font-heading text-2xl font-semibold tracking-tight",
      h3: "mt-[1em] pb-px font-heading text-xl font-semibold tracking-tight",
      h4: "mt-[0.75em] font-heading text-lg font-semibold tracking-tight",
      h5: "mt-[0.75em] text-lg font-semibold tracking-tight",
      h6: "mt-[0.75em] text-base font-semibold tracking-tight"
    }
  }
});
function HeadingElement({
  variant = "h1",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
    import_react255.PlateElement,
    {
      as: variant,
      className: headingVariants2({ variant }),
      ...props,
      children: props.children
    }
  ) });
}

// src/components/editor/ui/highlight-leaf.tsx
var import_react256 = require("@udecode/plate/react");
var import_jsx_runtime136 = require("react/jsx-runtime");
function HighlightLeaf(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(import_react256.PlateLeaf, { ...props, as: "mark", className: "bg-highlight/30 text-inherit", children: props.children });
}

// src/components/editor/ui/hr-element.tsx
var import_react257 = require("@udecode/plate/react");
var import_jsx_runtime137 = require("react/jsx-runtime");
function HrElement(props) {
  const readOnly = (0, import_react257.useReadOnly)();
  const selected = (0, import_react257.useSelected)();
  const focused = (0, import_react257.useFocused)();
  return /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)(import_react257.PlateElement, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("div", { className: "py-6", contentEditable: false, children: /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(
      "hr",
      {
        className: cn(
          "h-0.5 rounded-sm border-none bg-muted bg-clip-content",
          selected && focused && "ring-2 ring-ring ring-offset-2",
          !readOnly && "cursor-pointer"
        )
      }
    ) }),
    props.children
  ] }) });
}

// src/components/editor/ui/image-element.tsx
var import_plate_dnd5 = require("@udecode/plate-dnd");
var import_react261 = require("@udecode/plate-media/react");
var import_plate_resizable3 = require("@udecode/plate-resizable");
var import_react262 = require("@udecode/plate/react");

// src/components/editor/ui/caption.tsx
var import_class_variance_authority13 = require("class-variance-authority");
var import_cn8 = require("@udecode/cn");
var import_react258 = require("@udecode/plate-caption/react");
var import_jsx_runtime138 = require("react/jsx-runtime");
var captionVariants = (0, import_class_variance_authority13.cva)("max-w-full", {
  defaultVariants: {
    align: "center"
  },
  variants: {
    align: {
      center: "mx-auto",
      left: "mr-auto",
      right: "ml-auto"
    }
  }
});
function Caption({
  align,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime138.jsx)(
    import_react258.Caption,
    {
      ...props,
      className: cn(captionVariants({ align }), className)
    }
  );
}
function CaptionTextarea(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime138.jsx)(
    import_react258.CaptionTextarea,
    {
      ...props,
      className: cn(
        "mt-2 w-full resize-none border-none bg-inherit p-0 font-[inherit] text-inherit",
        "focus:outline-none focus:[&::placeholder]:opacity-0",
        "text-center print:placeholder:text-transparent",
        props.className
      )
    }
  );
}
var CaptionButton = (0, import_cn8.createPrimitiveComponent)(Button)({
  propsHook: import_react258.useCaptionButton,
  stateHook: import_react258.useCaptionButtonState
});

// src/components/editor/ui/media-popover.tsx
var React47 = __toESM(require("react"));
var import_class_variance_authority14 = require("class-variance-authority");
var import_lucide_react58 = require("lucide-react");
var import_react259 = require("@udecode/plate-media/react");
var import_react260 = require("@udecode/plate/react");
var import_jsx_runtime139 = require("react/jsx-runtime");
var inputVariants2 = (0, import_class_variance_authority14.cva)(
  "flex h-[28px] w-full rounded-md border-none bg-transparent px-1.5 py-1 text-base placeholder:text-muted-foreground focus-visible:ring-transparent focus-visible:outline-none md:text-sm"
);
function MediaPopover({ children, plugin }) {
  const editor = (0, import_react260.useEditorRef)();
  const readOnly = (0, import_react260.useReadOnly)();
  const selected = (0, import_react260.useSelected)();
  const selectionCollapsed = (0, import_react260.useEditorSelector)(
    (editor2) => !editor2.api.isExpanded(),
    []
  );
  const isImagePreviewOpen = (0, import_react259.useImagePreviewValue)("isOpen", editor.id);
  const isOpen = !readOnly && selected && selectionCollapsed && !isImagePreviewOpen;
  const isEditing = (0, import_react259.useFloatingMediaValue)("isEditing");
  React47.useEffect(() => {
    if (!isOpen && isEditing) {
      import_react259.FloatingMediaStore.set("isEditing", false);
    }
  }, [isOpen]);
  const element = (0, import_react260.useElement)();
  const { props: buttonProps } = (0, import_react260.useRemoveNodeButton)({ element });
  if (readOnly) return /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(import_jsx_runtime139.Fragment, { children });
  return /* @__PURE__ */ (0, import_jsx_runtime139.jsxs)(Popover, { open: isOpen, modal: false, children: [
    /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(PopoverAnchor, { children }),
    /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(
      PopoverContent,
      {
        className: "w-auto p-1",
        onOpenAutoFocus: (e) => e.preventDefault(),
        children: isEditing ? /* @__PURE__ */ (0, import_jsx_runtime139.jsx)("div", { className: "flex w-[330px] flex-col", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsxs)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)("div", { className: "flex items-center pr-1 pl-2 text-muted-foreground", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(import_lucide_react58.Link, { className: "size-4" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(
            import_react259.FloatingMedia.UrlInput,
            {
              className: inputVariants2(),
              placeholder: "Paste the embed link...",
              options: { plugin }
            }
          )
        ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime139.jsxs)("div", { className: "box-content flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(
            import_react259.FloatingMedia.EditButton,
            {
              className: buttonVariants({ size: "sm", variant: "ghost" }),
              children: "Edit link"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(CaptionButton, { variant: "ghost", children: "Caption" }),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(Separator2, { orientation: "vertical", className: "mx-1 h-6" }),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(Button, { size: "icon", variant: "ghost", ...buttonProps, children: /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(import_lucide_react58.Trash2Icon, {}) })
        ] })
      }
    )
  ] });
}

// src/components/editor/ui/resize-handle.tsx
var import_class_variance_authority15 = require("class-variance-authority");
var import_plate_resizable2 = require("@udecode/plate-resizable");
var import_jsx_runtime140 = require("react/jsx-runtime");
var mediaResizeHandleVariants = (0, import_class_variance_authority15.cva)(
  cn(
    "top-0 flex w-6 flex-col justify-center select-none",
    "after:flex after:h-16 after:w-[3px] after:rounded-[6px] after:bg-ring after:opacity-0 after:content-['_'] group-hover:after:opacity-100"
  ),
  {
    variants: {
      direction: {
        left: "-left-3 -ml-3 pl-3",
        right: "-right-3 -mr-3 items-end pr-3"
      }
    }
  }
);
var resizeHandleVariants = (0, import_class_variance_authority15.cva)(cn("absolute z-40"), {
  variants: {
    direction: {
      bottom: "w-full cursor-row-resize",
      left: "h-full cursor-col-resize",
      right: "h-full cursor-col-resize",
      top: "w-full cursor-row-resize"
    }
  }
});
function ResizeHandle({
  className,
  direction,
  options,
  ...props
}) {
  const state = (0, import_plate_resizable2.useResizeHandleState)(options ?? {});
  const resizeHandle = (0, import_plate_resizable2.useResizeHandle)(state);
  if (state.readOnly) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(
    "div",
    {
      className: cn(resizeHandleVariants({ direction }), className),
      "data-resizing": state.isResizing,
      ...resizeHandle.props,
      ...props
    }
  );
}
var resizableVariants = (0, import_class_variance_authority15.cva)("", {
  variants: {
    align: {
      center: "mx-auto",
      left: "mr-auto",
      right: "ml-auto"
    }
  }
});
function Resizable({
  align,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(
    import_plate_resizable2.Resizable,
    {
      ...props,
      className: cn(resizableVariants({ align }), className)
    }
  );
}

// src/components/editor/ui/image-element.tsx
var import_jsx_runtime141 = require("react/jsx-runtime");
var ImageElement = (0, import_react262.withHOC)(
  import_plate_resizable3.ResizableProvider,
  function ImageElement2(props) {
    const { align = "center", focused, readOnly, selected } = (0, import_react261.useMediaState)();
    const width = (0, import_plate_resizable3.useResizableValue)("width");
    const { isDragging, handleRef } = (0, import_plate_dnd5.useDraggable)({
      element: props.element
    });
    return /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(MediaPopover, { plugin: import_react261.ImagePlugin, children: /* @__PURE__ */ (0, import_jsx_runtime141.jsxs)(import_react262.PlateElement, { ...props, className: "py-2.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime141.jsxs)("figure", { className: "group relative m-0", contentEditable: false, children: [
        /* @__PURE__ */ (0, import_jsx_runtime141.jsxs)(
          Resizable,
          {
            align,
            options: {
              align,
              readOnly
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(
                ResizeHandle,
                {
                  className: mediaResizeHandleVariants({ direction: "left" }),
                  options: { direction: "left" }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(
                import_react261.Image,
                {
                  ref: handleRef,
                  className: cn(
                    "block w-full max-w-full cursor-pointer object-cover px-0",
                    "rounded-sm",
                    focused && selected && "ring-2 ring-ring ring-offset-2",
                    isDragging && "opacity-50"
                  ),
                  alt: props.attributes.alt
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(
                ResizeHandle,
                {
                  className: mediaResizeHandleVariants({
                    direction: "right"
                  }),
                  options: { direction: "right" }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(Caption, { style: { width }, align, children: /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(
          CaptionTextarea,
          {
            readOnly,
            onFocus: (e) => {
              e.preventDefault();
            },
            placeholder: "Write a caption..."
          }
        ) })
      ] }),
      props.children
    ] }) }) });
  }
);

// src/components/editor/ui/media-audio-element.tsx
var import_react263 = require("@udecode/plate-media/react");
var import_plate_resizable4 = require("@udecode/plate-resizable");
var import_react264 = require("@udecode/plate/react");
var import_jsx_runtime142 = require("react/jsx-runtime");
var MediaAudioElement = (0, import_react264.withHOC)(
  import_plate_resizable4.ResizableProvider,
  function MediaAudioElement2(props) {
    const { align = "center", readOnly, unsafeUrl } = (0, import_react263.useMediaState)();
    return /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ (0, import_jsx_runtime142.jsxs)(import_react264.PlateElement, { ...props, className: "mb-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime142.jsxs)("figure", { className: "group relative cursor-default", contentEditable: false, children: [
        /* @__PURE__ */ (0, import_jsx_runtime142.jsx)("div", { className: "h-16", children: /* @__PURE__ */ (0, import_jsx_runtime142.jsx)("audio", { className: "size-full", src: unsafeUrl, controls: true }) }),
        /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(Caption, { style: { width: "100%" }, align, children: /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(
          CaptionTextarea,
          {
            className: "h-20",
            readOnly,
            placeholder: "Write a caption..."
          }
        ) })
      ] }),
      props.children
    ] }) });
  }
);

// src/components/editor/ui/media-embed-element.tsx
var import_react_lite_youtube_embed = __toESM(require("react-lite-youtube-embed"));
var import_react_tweet = require("react-tweet");
var import_plate_media4 = require("@udecode/plate-media");
var import_react265 = require("@udecode/plate-media/react");
var import_plate_resizable5 = require("@udecode/plate-resizable");
var import_react266 = require("@udecode/plate/react");
var import_jsx_runtime143 = require("react/jsx-runtime");
var MediaEmbedElement = (0, import_react266.withHOC)(
  import_plate_resizable5.ResizableProvider,
  function MediaEmbedElement2(props) {
    const {
      align = "center",
      embed,
      focused,
      isTweet,
      isVideo,
      isYoutube,
      readOnly,
      selected
    } = (0, import_react265.useMediaState)({
      urlParsers: [import_plate_media4.parseTwitterUrl, import_plate_media4.parseVideoUrl]
    });
    const width = (0, import_plate_resizable5.useResizableValue)("width");
    const provider = embed?.provider;
    return /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(MediaPopover, { plugin: import_react265.MediaEmbedPlugin, children: /* @__PURE__ */ (0, import_jsx_runtime143.jsxs)(import_react266.PlateElement, { className: "py-2.5", ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime143.jsxs)(
        "figure",
        {
          className: "group relative m-0 w-full cursor-default",
          contentEditable: false,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime143.jsxs)(
              Resizable,
              {
                align,
                options: {
                  align,
                  maxWidth: isTweet ? 550 : "100%",
                  minWidth: isTweet ? 300 : 100
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(
                    ResizeHandle,
                    {
                      className: mediaResizeHandleVariants({ direction: "left" }),
                      options: { direction: "left" }
                    }
                  ),
                  isVideo ? isYoutube ? /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(
                    import_react_lite_youtube_embed.default,
                    {
                      id: embed.id,
                      title: "youtube",
                      wrapperClass: cn(
                        "rounded-sm",
                        focused && selected && "ring-2 ring-ring ring-offset-2",
                        "relative block cursor-pointer bg-black bg-cover bg-center [contain:content]",
                        "[&.lyt-activated]:before:absolute [&.lyt-activated]:before:top-0 [&.lyt-activated]:before:h-[60px] [&.lyt-activated]:before:w-full [&.lyt-activated]:before:bg-top [&.lyt-activated]:before:bg-repeat-x [&.lyt-activated]:before:pb-[50px] [&.lyt-activated]:before:[transition:all_0.2s_cubic-bezier(0,_0,_0.2,_1)]",
                        "[&.lyt-activated]:before:bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==)]",
                        'after:block after:pb-[var(--aspect-ratio)] after:content-[""]',
                        "[&_>_iframe]:absolute [&_>_iframe]:top-0 [&_>_iframe]:left-0 [&_>_iframe]:size-full",
                        "[&_>_.lty-playbtn]:z-1 [&_>_.lty-playbtn]:h-[46px] [&_>_.lty-playbtn]:w-[70px] [&_>_.lty-playbtn]:rounded-[14%] [&_>_.lty-playbtn]:bg-[#212121] [&_>_.lty-playbtn]:opacity-80 [&_>_.lty-playbtn]:[transition:all_0.2s_cubic-bezier(0,_0,_0.2,_1)]",
                        "[&:hover_>_.lty-playbtn]:bg-[red] [&:hover_>_.lty-playbtn]:opacity-100",
                        '[&_>_.lty-playbtn]:before:border-y-[11px] [&_>_.lty-playbtn]:before:border-r-0 [&_>_.lty-playbtn]:before:border-l-[19px] [&_>_.lty-playbtn]:before:border-[transparent_transparent_transparent_#fff] [&_>_.lty-playbtn]:before:content-[""]',
                        "[&_>_.lty-playbtn]:absolute [&_>_.lty-playbtn]:top-1/2 [&_>_.lty-playbtn]:left-1/2 [&_>_.lty-playbtn]:[transform:translate3d(-50%,-50%,0)]",
                        "[&_>_.lty-playbtn]:before:absolute [&_>_.lty-playbtn]:before:top-1/2 [&_>_.lty-playbtn]:before:left-1/2 [&_>_.lty-playbtn]:before:[transform:translate3d(-50%,-50%,0)]",
                        "[&.lyt-activated]:cursor-[unset]",
                        "[&.lyt-activated]:before:pointer-events-none [&.lyt-activated]:before:opacity-0",
                        "[&.lyt-activated_>_.lty-playbtn]:pointer-events-none [&.lyt-activated_>_.lty-playbtn]:opacity-0!"
                      )
                    }
                  ) : /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(
                    "div",
                    {
                      className: cn(
                        provider === "vimeo" && "pb-[75%]",
                        provider === "youku" && "pb-[56.25%]",
                        provider === "dailymotion" && "pb-[56.0417%]",
                        provider === "coub" && "pb-[51.25%]"
                      ),
                      children: /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(
                        "iframe",
                        {
                          className: cn(
                            "absolute top-0 left-0 size-full rounded-sm",
                            isVideo && "border-0",
                            focused && selected && "ring-2 ring-ring ring-offset-2"
                          ),
                          title: "embed",
                          src: embed.url,
                          allowFullScreen: true
                        }
                      )
                    }
                  ) : null,
                  isTweet && /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(
                    "div",
                    {
                      className: cn(
                        "[&_.react-tweet-theme]:my-0",
                        !readOnly && selected && "[&_.react-tweet-theme]:ring-2 [&_.react-tweet-theme]:ring-ring [&_.react-tweet-theme]:ring-offset-2"
                      ),
                      children: /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(import_react_tweet.Tweet, { id: embed.id })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(
                    ResizeHandle,
                    {
                      className: mediaResizeHandleVariants({ direction: "right" }),
                      options: { direction: "right" }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(Caption, { style: { width }, align, children: /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(CaptionTextarea, { placeholder: "Write a caption..." }) })
          ]
        }
      ),
      props.children
    ] }) }) });
  }
);

// src/components/editor/ui/media-file-element.tsx
var import_lucide_react59 = require("lucide-react");
var import_react267 = require("@udecode/plate-media/react");
var import_plate_resizable6 = require("@udecode/plate-resizable");
var import_react268 = require("@udecode/plate/react");
var import_jsx_runtime144 = require("react/jsx-runtime");
var MediaFileElement = (0, import_react268.withHOC)(
  import_plate_resizable6.ResizableProvider,
  function MediaFileElement2(props) {
    const readOnly = (0, import_react268.useReadOnly)();
    const { name, unsafeUrl } = (0, import_react267.useMediaState)();
    return /* @__PURE__ */ (0, import_jsx_runtime144.jsx)(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ (0, import_jsx_runtime144.jsxs)(import_react268.PlateElement, { className: "my-px rounded-sm", ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime144.jsxs)(
        "a",
        {
          className: "group relative m-0 flex cursor-pointer items-center rounded px-0.5 py-[3px] hover:bg-muted",
          contentEditable: false,
          download: name,
          href: unsafeUrl,
          rel: "noopener noreferrer",
          role: "button",
          target: "_blank",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime144.jsxs)("div", { className: "flex items-center gap-1 p-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime144.jsx)(import_lucide_react59.FileUp, { className: "size-5" }),
              /* @__PURE__ */ (0, import_jsx_runtime144.jsx)("div", { children: name })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime144.jsx)(Caption, { align: "left", children: /* @__PURE__ */ (0, import_jsx_runtime144.jsx)(
              CaptionTextarea,
              {
                className: "text-left",
                readOnly,
                placeholder: "Write a caption..."
              }
            ) })
          ]
        }
      ),
      props.children
    ] }) });
  }
);

// src/components/editor/ui/media-placeholder-element.tsx
var React49 = __toESM(require("react"));
var import_lucide_react60 = require("lucide-react");
var import_use_file_picker3 = require("use-file-picker");
var import_react270 = require("@udecode/plate-media/react");
var import_react271 = require("@udecode/plate/react");

// src/hooks/use-upload-file.ts
var React48 = __toESM(require("react"));
var import_sonner3 = require("sonner");
var import_zod = require("zod");
var import_react269 = require("@uploadthing/react");
function useUploadFile({
  onUploadComplete,
  onUploadError,
  mode = "toCloud",
  ...props
} = {}) {
  const [uploadedFile, setUploadedFile] = React48.useState();
  const [uploadingFile, setUploadingFile] = React48.useState();
  const [progress, setProgress] = React48.useState(0);
  const [isUploading, setIsUploading] = React48.useState(false);
  async function uploadThing(file) {
    setIsUploading(true);
    setUploadingFile(file);
    try {
      const res = await uploadFiles("editorUploader", {
        ...props,
        files: [file],
        onUploadProgress: ({ progress: progress2 }) => {
          setProgress(Math.min(progress2, 100));
        }
      });
      setUploadedFile(res[0]);
      onUploadComplete?.(res[0]);
      return uploadedFile;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      const message = errorMessage.length > 0 ? errorMessage : "Something went wrong, please try again later.";
      import_sonner3.toast.error(message);
      onUploadError?.(error);
      const mockUploadedFile = {
        key: "mock-key-0",
        appUrl: `${process.env.URL}/${file.name}`,
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file)
      };
      let progress2 = 0;
      const simulateProgress = async () => {
        while (progress2 < 100) {
          await new Promise((resolve) => setTimeout(resolve, 50));
          progress2 += 2;
          setProgress(Math.min(progress2, 100));
        }
      };
      await simulateProgress();
      setUploadedFile(mockUploadedFile);
      return mockUploadedFile;
    } finally {
      setProgress(0);
      setIsUploading(false);
      setUploadingFile(void 0);
    }
  }
  async function uploadThingServer(file) {
    setIsUploading(true);
    setUploadingFile(file);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData
      });
      if (!res.ok) {
        throw new Error("Upload failed");
      }
      const data = await res.json();
      const uploaded = {
        key: data.id || file.name,
        appUrl: data.url,
        name: file.name,
        size: file.size,
        type: file.type,
        url: data.url,
        fileHash: data.fileHash,
        ufsUrl: data.ufsUrl,
        lastModified: file.lastModified,
        customId: data.customId,
        serverData: data.serverData
      };
      setUploadedFile(uploaded);
      onUploadComplete?.(uploaded);
      return uploaded;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      import_sonner3.toast.error(errorMessage || "Upload failed");
      onUploadError?.(error);
    } finally {
      setProgress(0);
      setIsUploading(false);
      setUploadingFile(void 0);
    }
  }
  return {
    isUploading,
    progress,
    uploadedFile,
    uploadFile: mode === "toCloud" ? uploadThing : uploadThingServer,
    uploadingFile
  };
}
var { uploadFiles, useUploadThing } = (0, import_react269.generateReactHelpers)();
function getErrorMessage(err) {
  const unknownError = "Something went wrong, please try again later.";
  if (err instanceof import_zod.z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });
    return errors.join("\n");
  } else if (err instanceof Error) {
    return err.message;
  } else {
    return unknownError;
  }
}

// src/components/editor/ui/media-placeholder-element.tsx
var import_jsx_runtime145 = require("react/jsx-runtime");
var CONTENT = {
  [import_react270.AudioPlugin.key]: {
    accept: ["audio/*"],
    content: "Add an audio file",
    icon: /* @__PURE__ */ (0, import_jsx_runtime145.jsx)(import_lucide_react60.AudioLines, {})
  },
  [import_react270.FilePlugin.key]: {
    accept: ["*"],
    content: "Add a file",
    icon: /* @__PURE__ */ (0, import_jsx_runtime145.jsx)(import_lucide_react60.FileUp, {})
  },
  [import_react270.ImagePlugin.key]: {
    accept: ["image/*"],
    content: "Add an image",
    icon: /* @__PURE__ */ (0, import_jsx_runtime145.jsx)(import_lucide_react60.ImageIcon, {})
  },
  [import_react270.VideoPlugin.key]: {
    accept: ["video/*"],
    content: "Add a video",
    icon: /* @__PURE__ */ (0, import_jsx_runtime145.jsx)(import_lucide_react60.Film, {})
  }
};
var MediaPlaceholderElement = (0, import_react271.withHOC)(
  import_react270.PlaceholderProvider,
  function MediaPlaceholderElement2(props) {
    const { editor, element } = props;
    const { api } = (0, import_react271.useEditorPlugin)(import_react270.PlaceholderPlugin);
    const { isUploading, progress, uploadedFile, uploadFile, uploadingFile } = useUploadFile({ mode: "toCloud" });
    const loading = isUploading && uploadingFile;
    const currentContent = CONTENT[element.mediaType];
    const isImage = element.mediaType === import_react270.ImagePlugin.key;
    const imageRef = React49.useRef(null);
    const { openFilePicker } = (0, import_use_file_picker3.useFilePicker)({
      accept: currentContent.accept,
      multiple: true,
      onFilesSelected: ({ plainFiles: updatedFiles }) => {
        const firstFile = updatedFiles[0];
        const restFiles = updatedFiles.slice(1);
        replaceCurrentPlaceholder(firstFile);
        if (restFiles.length > 0) {
          editor.getTransforms(import_react270.PlaceholderPlugin).insert.media(restFiles);
        }
      }
    });
    const replaceCurrentPlaceholder = React49.useCallback(
      (file) => {
        void uploadFile(file);
        api.placeholder.addUploadingFile(element.id, file);
      },
      [api.placeholder, element.id, uploadFile]
    );
    React49.useEffect(() => {
      if (!uploadedFile) return;
      const path = editor.api.findPath(element);
      editor.tf.withoutSaving(() => {
        editor.tf.removeNodes({ at: path });
        const node = {
          children: [{ text: "" }],
          initialHeight: imageRef.current?.height,
          initialWidth: imageRef.current?.width,
          isUpload: true,
          name: element.mediaType === import_react270.FilePlugin.key ? uploadedFile.name : "",
          placeholderId: element.id,
          type: element.mediaType,
          url: uploadedFile.url
        };
        editor.tf.insertNodes(node, { at: path });
        (0, import_react270.updateUploadHistory)(editor, node);
      });
      api.placeholder.removeUploadingFile(element.id);
    }, [uploadedFile, element.id]);
    const isReplaced = React49.useRef(false);
    React49.useEffect(() => {
      if (isReplaced.current) return;
      isReplaced.current = true;
      const currentFiles = api.placeholder.getUploadingFile(
        element.id
      );
      if (!currentFiles) return;
      replaceCurrentPlaceholder(currentFiles);
    }, [isReplaced]);
    return /* @__PURE__ */ (0, import_jsx_runtime145.jsx)(BlockWithPlus, { element, children: /* @__PURE__ */ (0, import_jsx_runtime145.jsxs)(import_react271.PlateElement, { className: "my-1", ...props, children: [
      (!loading || !isImage) && /* @__PURE__ */ (0, import_jsx_runtime145.jsxs)(
        "div",
        {
          className: cn(
            "flex cursor-pointer items-center rounded-sm bg-muted p-3 pr-9 select-none hover:bg-primary/10"
          ),
          onClick: () => !loading && openFilePicker(),
          contentEditable: false,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime145.jsx)("div", { className: "relative mr-3 flex text-muted-foreground/80 [&_svg]:size-6", children: currentContent.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime145.jsxs)("div", { className: "text-sm whitespace-nowrap text-muted-foreground", children: [
              /* @__PURE__ */ (0, import_jsx_runtime145.jsx)("div", { children: loading ? uploadingFile?.name : currentContent.content }),
              loading && !isImage && /* @__PURE__ */ (0, import_jsx_runtime145.jsxs)("div", { className: "mt-1 flex items-center gap-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime145.jsx)("div", { children: formatBytes(uploadingFile?.size ?? 0) }),
                /* @__PURE__ */ (0, import_jsx_runtime145.jsx)("div", { children: "\u2013" }),
                /* @__PURE__ */ (0, import_jsx_runtime145.jsxs)("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime145.jsx)(import_lucide_react60.Loader2Icon, { className: "mr-1 size-3.5 animate-spin text-muted-foreground" }),
                  progress ?? 0,
                  "%"
                ] })
              ] })
            ] })
          ]
        }
      ),
      isImage && loading && /* @__PURE__ */ (0, import_jsx_runtime145.jsx)(
        ImageProgress,
        {
          file: uploadingFile,
          imageRef,
          progress
        }
      ),
      props.children
    ] }) });
  }
);
function ImageProgress({
  className,
  file,
  imageRef,
  progress = 0
}) {
  const [objectUrl, setObjectUrl] = React49.useState(null);
  React49.useEffect(() => {
    const url = URL.createObjectURL(file);
    setObjectUrl(url);
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);
  if (!objectUrl) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime145.jsxs)("div", { className: cn("relative", className), contentEditable: false, children: [
    /* @__PURE__ */ (0, import_jsx_runtime145.jsx)(
      "img",
      {
        ref: imageRef,
        className: "h-auto w-full rounded-sm object-cover",
        alt: file.name,
        src: objectUrl
      }
    ),
    progress < 100 && /* @__PURE__ */ (0, import_jsx_runtime145.jsxs)("div", { className: "absolute right-1 bottom-1 flex items-center space-x-2 rounded-full bg-black/50 px-1 py-0.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime145.jsx)(import_lucide_react60.Loader2Icon, { className: "size-3.5 animate-spin text-muted-foreground" }),
      /* @__PURE__ */ (0, import_jsx_runtime145.jsxs)("span", { className: "text-xs font-medium text-white", children: [
        Math.round(progress),
        "%"
      ] })
    ] })
  ] });
}
function formatBytes(bytes, opts = {}) {
  const { decimals = 0, sizeType = "normal" } = opts;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${sizeType === "accurate" ? accurateSizes[i] ?? "Bytest" : sizes[i] ?? "Bytes"}`;
}

// src/components/editor/ui/media-video-element.tsx
var import_react_lite_youtube_embed2 = __toESM(require("react-lite-youtube-embed"));
var import_react_player = __toESM(require("react-player"));
var import_plate_dnd6 = require("@udecode/plate-dnd");
var import_plate_media5 = require("@udecode/plate-media");
var import_react272 = require("@udecode/plate-media/react");
var import_plate_resizable7 = require("@udecode/plate-resizable");
var import_react273 = require("@udecode/plate/react");
var import_jsx_runtime146 = require("react/jsx-runtime");
var MediaVideoElement = (0, import_react273.withHOC)(
  import_plate_resizable7.ResizableProvider,
  function MediaVideoElement2(props) {
    const {
      align = "center",
      embed,
      isUpload,
      isYoutube,
      readOnly,
      unsafeUrl
    } = (0, import_react272.useMediaState)({
      urlParsers: [import_plate_media5.parseTwitterUrl, import_plate_media5.parseVideoUrl]
    });
    const width = (0, import_plate_resizable7.useResizableValue)("width");
    const isEditorMounted = (0, import_react273.useEditorMounted)();
    const isTweet = true;
    const { isDragging, handleRef } = (0, import_plate_dnd6.useDraggable)({
      element: props.element
    });
    return /* @__PURE__ */ (0, import_jsx_runtime146.jsx)(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ (0, import_jsx_runtime146.jsxs)(import_react273.PlateElement, { className: "py-2.5", ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime146.jsxs)("figure", { className: "relative m-0 cursor-default", contentEditable: false, children: [
        /* @__PURE__ */ (0, import_jsx_runtime146.jsx)(
          Resizable,
          {
            className: cn(isDragging && "opacity-50"),
            align,
            options: {
              align,
              maxWidth: isTweet ? 550 : "100%",
              minWidth: isTweet ? 300 : 100,
              readOnly
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime146.jsxs)("div", { className: "group/media", children: [
              /* @__PURE__ */ (0, import_jsx_runtime146.jsx)(
                ResizeHandle,
                {
                  className: mediaResizeHandleVariants({ direction: "left" }),
                  options: { direction: "left" }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime146.jsx)(
                ResizeHandle,
                {
                  className: mediaResizeHandleVariants({ direction: "right" }),
                  options: { direction: "right" }
                }
              ),
              !isUpload && isYoutube && /* @__PURE__ */ (0, import_jsx_runtime146.jsx)("div", { ref: handleRef, children: /* @__PURE__ */ (0, import_jsx_runtime146.jsx)(
                import_react_lite_youtube_embed2.default,
                {
                  id: embed.id,
                  title: "youtube",
                  wrapperClass: cn(
                    "aspect-video rounded-sm",
                    "relative block cursor-pointer bg-black bg-cover bg-center [contain:content]",
                    "[&.lyt-activated]:before:absolute [&.lyt-activated]:before:top-0 [&.lyt-activated]:before:h-[60px] [&.lyt-activated]:before:w-full [&.lyt-activated]:before:bg-top [&.lyt-activated]:before:bg-repeat-x [&.lyt-activated]:before:pb-[50px] [&.lyt-activated]:before:[transition:all_0.2s_cubic-bezier(0,_0,_0.2,_1)]",
                    "[&.lyt-activated]:before:bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==)]",
                    'after:block after:pb-[var(--aspect-ratio)] after:content-[""]',
                    "[&_>_iframe]:absolute [&_>_iframe]:top-0 [&_>_iframe]:left-0 [&_>_iframe]:size-full",
                    "[&_>_.lty-playbtn]:z-1 [&_>_.lty-playbtn]:h-[46px] [&_>_.lty-playbtn]:w-[70px] [&_>_.lty-playbtn]:rounded-[14%] [&_>_.lty-playbtn]:bg-[#212121] [&_>_.lty-playbtn]:opacity-80 [&_>_.lty-playbtn]:[transition:all_0.2s_cubic-bezier(0,_0,_0.2,_1)]",
                    "[&:hover_>_.lty-playbtn]:bg-[red] [&:hover_>_.lty-playbtn]:opacity-100",
                    '[&_>_.lty-playbtn]:before:border-y-[11px] [&_>_.lty-playbtn]:before:border-r-0 [&_>_.lty-playbtn]:before:border-l-[19px] [&_>_.lty-playbtn]:before:border-[transparent_transparent_transparent_#fff] [&_>_.lty-playbtn]:before:content-[""]',
                    "[&_>_.lty-playbtn]:absolute [&_>_.lty-playbtn]:top-1/2 [&_>_.lty-playbtn]:left-1/2 [&_>_.lty-playbtn]:[transform:translate3d(-50%,-50%,0)]",
                    "[&_>_.lty-playbtn]:before:absolute [&_>_.lty-playbtn]:before:top-1/2 [&_>_.lty-playbtn]:before:left-1/2 [&_>_.lty-playbtn]:before:[transform:translate3d(-50%,-50%,0)]",
                    "[&.lyt-activated]:cursor-[unset]",
                    "[&.lyt-activated]:before:pointer-events-none [&.lyt-activated]:before:opacity-0",
                    "[&.lyt-activated_>_.lty-playbtn]:pointer-events-none [&.lyt-activated_>_.lty-playbtn]:opacity-0!"
                  )
                }
              ) }),
              isUpload && isEditorMounted && /* @__PURE__ */ (0, import_jsx_runtime146.jsx)("div", { ref: handleRef, children: /* @__PURE__ */ (0, import_jsx_runtime146.jsx)(
                import_react_player.default,
                {
                  height: "100%",
                  url: unsafeUrl,
                  width: "100%",
                  controls: true
                }
              ) })
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime146.jsx)(Caption, { style: { width }, align, children: /* @__PURE__ */ (0, import_jsx_runtime146.jsx)(
          CaptionTextarea,
          {
            readOnly,
            placeholder: "Write a caption..."
          }
        ) })
      ] }),
      props.children
    ] }) });
  }
);

// src/components/editor/ui/paragraph-element.tsx
var import_react274 = require("@udecode/plate/react");
var import_jsx_runtime147 = require("react/jsx-runtime");
function ParagraphElement(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime147.jsx)(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ (0, import_jsx_runtime147.jsx)(import_react274.PlateElement, { ...props, className: cn("m-0 px-0 py-1"), children: props.children }) });
}

// src/components/editor/ui/placeholder.tsx
var React50 = __toESM(require("react"));
var import_plate_heading18 = require("@udecode/plate-heading");
var import_react275 = require("@udecode/plate/react");
var Placeholder = (props) => {
  const { attributes, children, placeholder } = props;
  const { enabled } = (0, import_react275.usePlaceholderState)(props);
  return React50.Children.map(children, (child) => {
    return React50.cloneElement(child, {
      attributes: {
        ...attributes,
        className: cn(
          attributes.className,
          enabled && "before:absolute before:cursor-text before:opacity-30 before:content-[attr(placeholder)]"
        ),
        placeholder
      }
    });
  });
};
var withPlaceholder = (0, import_react275.createNodeHOC)(Placeholder);
var withPlaceholdersPrimitive = (0, import_react275.createNodesHOC)(Placeholder);
var withPlaceholders = (components2) => withPlaceholdersPrimitive(components2, [
  {
    key: import_react275.ParagraphPlugin.key,
    hideOnBlur: true,
    placeholder: "Type a paragraph",
    query: {
      maxLevel: 1
    }
  },
  {
    key: import_plate_heading18.HEADING_KEYS.h1,
    hideOnBlur: false,
    placeholder: "Untitled"
  }
]);

// src/components/editor/ui/slash-input-element.tsx
var import_lucide_react61 = require("lucide-react");
var import_react276 = require("@udecode/plate-ai/react");
var import_react277 = require("@udecode/plate-block-quote/react");
var import_react278 = require("@udecode/plate-callout/react");
var import_react279 = require("@udecode/plate-code-block/react");
var import_react280 = require("@udecode/plate-date/react");
var import_plate_heading19 = require("@udecode/plate-heading");
var import_react281 = require("@udecode/plate-heading/react");
var import_plate_indent_list10 = require("@udecode/plate-indent-list");
var import_react282 = require("@udecode/plate-math/react");
var import_react283 = require("@udecode/plate-table/react");
var import_react284 = require("@udecode/plate-toggle/react");
var import_react285 = require("@udecode/plate/react");
var import_jsx_runtime148 = require("react/jsx-runtime");
var groups2 = [
  {
    group: "AI",
    items: [
      {
        focusEditor: false,
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.SparklesIcon, {}),
        value: "AI",
        onSelect: (editor) => {
          editor.getApi(import_react276.AIChatPlugin).aiChat.show();
        }
      }
    ]
  },
  {
    group: "Basic blocks",
    items: [
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.PilcrowIcon, {}),
        keywords: ["paragraph"],
        label: "Text",
        value: import_react285.ParagraphPlugin.key
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.Heading1Icon, {}),
        keywords: ["title", "h1"],
        label: "Heading 1",
        value: import_plate_heading19.HEADING_KEYS.h1
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.Heading2Icon, {}),
        keywords: ["subtitle", "h2"],
        label: "Heading 2",
        value: import_plate_heading19.HEADING_KEYS.h2
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.Heading3Icon, {}),
        keywords: ["subtitle", "h3"],
        label: "Heading 3",
        value: import_plate_heading19.HEADING_KEYS.h3
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.ListIcon, {}),
        keywords: ["unordered", "ul", "-"],
        label: "Bulleted list",
        value: import_plate_indent_list10.ListStyleType.Disc
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.ListOrdered, {}),
        keywords: ["ordered", "ol", "1"],
        label: "Numbered list",
        value: import_plate_indent_list10.ListStyleType.Decimal
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.Square, {}),
        keywords: ["checklist", "task", "checkbox", "[]"],
        label: "To-do list",
        value: import_plate_indent_list10.INDENT_LIST_KEYS.todo
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.ChevronRightIcon, {}),
        keywords: ["collapsible", "expandable"],
        label: "Toggle",
        value: import_react284.TogglePlugin.key
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.Code2, {}),
        keywords: ["```"],
        label: "Code Block",
        value: import_react279.CodeBlockPlugin.key
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.Table, {}),
        label: "Table",
        value: import_react283.TablePlugin.key
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.Quote, {}),
        keywords: ["citation", "blockquote", "quote", ">"],
        label: "Blockquote",
        value: import_react277.BlockquotePlugin.key
      },
      {
        description: "Insert a highlighted block.",
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.LightbulbIcon, {}),
        keywords: ["note"],
        label: "Callout",
        value: import_react278.CalloutPlugin.key
      }
    ].map((item) => ({
      ...item,
      onSelect: (editor, value) => {
        insertBlock(editor, value);
      }
    }))
  },
  {
    group: "Advanced blocks",
    items: [
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.TableOfContentsIcon, {}),
        keywords: ["toc"],
        label: "Table of contents",
        value: import_react281.TocPlugin.key
      },
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.Columns3Icon, {}),
        label: "3 columns",
        value: "action_three_columns"
      },
      {
        focusEditor: false,
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.RadicalIcon, {}),
        label: "Equation",
        value: import_react282.EquationPlugin.key
      }
    ].map((item) => ({
      ...item,
      onSelect: (editor, value) => {
        insertBlock(editor, value);
      }
    }))
  },
  {
    group: "Inline",
    items: [
      {
        focusEditor: true,
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.CalendarIcon, {}),
        keywords: ["time"],
        label: "Date",
        value: import_react280.DatePlugin.key
      },
      {
        focusEditor: false,
        icon: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_lucide_react61.RadicalIcon, {}),
        label: "Inline Equation",
        value: import_react282.InlineEquationPlugin.key
      }
    ].map((item) => ({
      ...item,
      onSelect: (editor, value) => {
        insertInlineElement(editor, value);
      }
    }))
  }
];
function SlashInputElement(props) {
  const { editor, element } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime148.jsxs)(import_react285.PlateElement, { ...props, as: "span", "data-slate-value": element.value, children: [
    /* @__PURE__ */ (0, import_jsx_runtime148.jsxs)(InlineCombobox, { element, trigger: "/", children: [
      /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(InlineComboboxInput, {}),
      /* @__PURE__ */ (0, import_jsx_runtime148.jsxs)(InlineComboboxContent, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(InlineComboboxEmpty, { children: "No results" }),
        groups2.map(({ group, items: items2 }) => /* @__PURE__ */ (0, import_jsx_runtime148.jsxs)(InlineComboboxGroup, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(InlineComboboxGroupLabel, { children: group }),
          items2.map(
            ({ focusEditor, icon, keywords, label, value, onSelect }) => /* @__PURE__ */ (0, import_jsx_runtime148.jsxs)(
              InlineComboboxItem,
              {
                value,
                onClick: () => onSelect(editor, value),
                label,
                focusEditor,
                group,
                keywords,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime148.jsx)("div", { className: "mr-2 text-muted-foreground", children: icon }),
                  label ?? value
                ]
              },
              value
            )
          )
        ] }, group))
      ] })
    ] }),
    props.children
  ] });
}

// src/components/editor/ui/suggestion-leaf.tsx
var import_react286 = require("@udecode/plate/react");
var import_jsx_runtime149 = require("react/jsx-runtime");
function SuggestionLeaf(props) {
  const { api, setOption } = (0, import_react286.useEditorPlugin)(suggestionPlugin);
  const leaf = props.leaf;
  const leafId = api.suggestion.nodeId(leaf) ?? "";
  const activeSuggestionId = (0, import_react286.usePluginOption)(suggestionPlugin, "activeId");
  const hoverSuggestionId = (0, import_react286.usePluginOption)(suggestionPlugin, "hoverId");
  const dataList = api.suggestion.dataList(leaf);
  const hasRemove = dataList.some((data) => data.type === "remove");
  const hasActive = dataList.some((data) => data.id === activeSuggestionId);
  const hasHover = dataList.some((data) => data.id === hoverSuggestionId);
  const diffOperation = { type: hasRemove ? "delete" : "insert" };
  const Component = { delete: "del", insert: "ins", update: "span" }[diffOperation.type];
  return /* @__PURE__ */ (0, import_jsx_runtime149.jsx)(
    import_react286.PlateLeaf,
    {
      ...props,
      as: Component,
      className: cn(
        "bg-emerald-100 text-emerald-700 no-underline transition-colors duration-200",
        (hasActive || hasHover) && "bg-emerald-200/80",
        hasRemove && "bg-red-100 text-red-700",
        (hasActive || hasHover) && hasRemove && "bg-red-200/80 no-underline"
      ),
      attributes: {
        ...props.attributes,
        onMouseEnter: () => setOption("hoverId", leafId),
        onMouseLeave: () => setOption("hoverId", null)
      },
      children: props.children
    }
  );
}

// src/components/editor/ui/table-cell-element.tsx
var import_class_variance_authority16 = require("class-variance-authority");
var import_react287 = require("@udecode/plate-selection/react");
var import_react288 = require("@udecode/plate-table/react");
var import_react289 = require("@udecode/plate/react");
var import_jsx_runtime150 = require("react/jsx-runtime");
function TableCellElement({
  isHeader,
  ...props
}) {
  const { api } = (0, import_react289.useEditorPlugin)(import_react288.TablePlugin);
  const readOnly = (0, import_react289.useReadOnly)();
  const element = props.element;
  const rowId = (0, import_react289.useElementSelector)(([node]) => node.id, [], {
    key: import_react288.TableRowPlugin.key
  });
  const isSelectingRow = (0, import_react287.useBlockSelected)(rowId);
  const isSelectionAreaVisible = (0, import_react289.usePluginOption)(
    import_react287.BlockSelectionPlugin,
    "isSelectionAreaVisible"
  );
  const { borders, colIndex, colSpan, minHeight, rowIndex, selected, width } = (0, import_react288.useTableCellElement)();
  const { bottomProps, hiddenLeft, leftProps, rightProps } = (0, import_react288.useTableCellElementResizable)({
    colIndex,
    colSpan,
    rowIndex
  });
  return /* @__PURE__ */ (0, import_jsx_runtime150.jsxs)(
    import_react289.PlateElement,
    {
      ...props,
      as: isHeader ? "th" : "td",
      className: cn(
        "h-full overflow-visible border-none bg-background p-0",
        element.background ? "bg-(--cellBackground)" : "bg-background",
        isHeader && "text-left *:m-0",
        "before:size-full",
        selected && "before:z-10 before:bg-brand/5",
        "before:absolute before:box-border before:content-[''] before:select-none",
        borders.bottom?.size && `before:border-b before:border-b-border`,
        borders.right?.size && `before:border-r before:border-r-border`,
        borders.left?.size && `before:border-l before:border-l-border`,
        borders.top?.size && `before:border-t before:border-t-border`
      ),
      style: {
        "--cellBackground": element.background,
        maxWidth: width || 240,
        minWidth: width || 120
      },
      attributes: {
        ...props.attributes,
        colSpan: api.table.getColSpan(element),
        rowSpan: api.table.getRowSpan(element)
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime150.jsx)(
          "div",
          {
            className: "relative z-20 box-border h-full px-3 py-2",
            style: { minHeight },
            children: props.children
          }
        ),
        !isSelectionAreaVisible && /* @__PURE__ */ (0, import_jsx_runtime150.jsx)(
          "div",
          {
            className: "group absolute top-0 size-full select-none",
            contentEditable: false,
            suppressContentEditableWarning: true,
            children: !readOnly && /* @__PURE__ */ (0, import_jsx_runtime150.jsxs)(import_jsx_runtime150.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime150.jsx)(
                ResizeHandle,
                {
                  ...rightProps,
                  className: "-top-2 -right-1 h-[calc(100%_+_8px)] w-2",
                  "data-col": colIndex
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime150.jsx)(ResizeHandle, { ...bottomProps, className: "-bottom-1 h-2" }),
              !hiddenLeft && /* @__PURE__ */ (0, import_jsx_runtime150.jsx)(
                ResizeHandle,
                {
                  ...leftProps,
                  className: "top-0 -left-1 w-2",
                  "data-resizer-left": colIndex === 0 ? "true" : void 0
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime150.jsx)(
                "div",
                {
                  className: cn(
                    "absolute top-0 z-30 hidden h-full w-1 bg-ring",
                    "right-[-1.5px]",
                    columnResizeVariants({ colIndex })
                  )
                }
              ),
              colIndex === 0 && /* @__PURE__ */ (0, import_jsx_runtime150.jsx)(
                "div",
                {
                  className: cn(
                    "absolute top-0 z-30 h-full w-1 bg-ring",
                    "left-[-1.5px]",
                    'hidden animate-in fade-in group-has-[[data-resizer-left]:hover]/table:block group-has-[[data-resizer-left][data-resizing="true"]]/table:block'
                  )
                }
              )
            ] })
          }
        ),
        isSelectingRow && /* @__PURE__ */ (0, import_jsx_runtime150.jsx)("div", { className: blockSelectionVariants(), contentEditable: false })
      ]
    }
  );
}
function TableCellHeaderElement(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime150.jsx)(TableCellElement, { ...props, isHeader: true });
}
var columnResizeVariants = (0, import_class_variance_authority16.cva)("hidden animate-in fade-in", {
  variants: {
    colIndex: {
      0: 'group-has-[[data-col="0"]:hover]/table:block group-has-[[data-col="0"][data-resizing="true"]]/table:block',
      1: 'group-has-[[data-col="1"]:hover]/table:block group-has-[[data-col="1"][data-resizing="true"]]/table:block',
      2: 'group-has-[[data-col="2"]:hover]/table:block group-has-[[data-col="2"][data-resizing="true"]]/table:block',
      3: 'group-has-[[data-col="3"]:hover]/table:block group-has-[[data-col="3"][data-resizing="true"]]/table:block',
      4: 'group-has-[[data-col="4"]:hover]/table:block group-has-[[data-col="4"][data-resizing="true"]]/table:block',
      5: 'group-has-[[data-col="5"]:hover]/table:block group-has-[[data-col="5"][data-resizing="true"]]/table:block',
      6: 'group-has-[[data-col="6"]:hover]/table:block group-has-[[data-col="6"][data-resizing="true"]]/table:block',
      7: 'group-has-[[data-col="7"]:hover]/table:block group-has-[[data-col="7"][data-resizing="true"]]/table:block',
      8: 'group-has-[[data-col="8"]:hover]/table:block group-has-[[data-col="8"][data-resizing="true"]]/table:block',
      9: 'group-has-[[data-col="9"]:hover]/table:block group-has-[[data-col="9"][data-resizing="true"]]/table:block',
      10: 'group-has-[[data-col="10"]:hover]/table:block group-has-[[data-col="10"][data-resizing="true"]]/table:block'
    }
  }
});

// src/components/editor/ui/table-element.tsx
var React51 = __toESM(require("react"));
var import_lucide_react62 = require("lucide-react");
var import_react_popover = require("@radix-ui/react-popover");
var import_react290 = require("@udecode/plate-selection/react");
var import_plate_table5 = require("@udecode/plate-table");
var import_react291 = require("@udecode/plate-table/react");
var import_react292 = require("@udecode/plate/react");

// src/components/editor/ui/table-icons.tsx
var import_jsx_runtime151 = require("react/jsx-runtime");
var BorderAll = (props) => /* @__PURE__ */ (0, import_jsx_runtime151.jsxs)(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "path",
        {
          clipRule: "evenodd",
          d: "M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H14C14.4142 0.25 14.75 0.585786 14.75 1V14C14.75 14.4142 14.4142 14.75 14 14.75H1C0.585786 14.75 0.25 14.4142 0.25 14V1ZM1.75 1.75V13.25H13.25V1.75H1.75Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "5" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "3" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "5", y: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "3", y: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "9", y: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "11", y: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "9" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "11" })
    ]
  }
);
var BorderBottom = (props) => /* @__PURE__ */ (0, import_jsx_runtime151.jsxs)(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "path",
        {
          clipRule: "evenodd",
          d: "M1 13.25L14 13.25V14.75L1 14.75V13.25Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "5" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "5" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "3" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "3" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "1" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "1" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "5", y: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "5", y: "1" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "3", y: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "3", y: "1" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "9", y: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "9", y: "1" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "11", y: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "11", y: "1" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "9" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "9" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "11" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "11" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "5" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "3" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "1" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "9" }),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "11" })
    ]
  }
);
var BorderLeft = (props) => /* @__PURE__ */ (0, import_jsx_runtime151.jsxs)(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "path",
        {
          clipRule: "evenodd",
          d: "M1.75 1L1.75 14L0.249999 14L0.25 1L1.75 1Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 10 7)",
          width: "1",
          x: "10",
          y: "7"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 10 13)",
          width: "1",
          x: "10",
          y: "13"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 12 7)",
          width: "1",
          x: "12",
          y: "7"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 12 13)",
          width: "1",
          x: "12",
          y: "13"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 8 7)",
          width: "1",
          x: "8",
          y: "7"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 14 7)",
          width: "1",
          x: "14",
          y: "7"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 8 13)",
          width: "1",
          x: "8",
          y: "13"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 14 13)",
          width: "1",
          x: "14",
          y: "13"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 8 5)",
          width: "1",
          x: "8",
          y: "5"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 14 5)",
          width: "1",
          x: "14",
          y: "5"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 8 3)",
          width: "1",
          x: "8",
          y: "3"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 14 3)",
          width: "1",
          x: "14",
          y: "3"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 8 9)",
          width: "1",
          x: "8",
          y: "9"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 14 9)",
          width: "1",
          x: "14",
          y: "9"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 8 11)",
          width: "1",
          x: "8",
          y: "11"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 14 11)",
          width: "1",
          x: "14",
          y: "11"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 6 7)",
          width: "1",
          x: "6",
          y: "7"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 6 13)",
          width: "1",
          x: "6",
          y: "13"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 4 7)",
          width: "1",
          x: "4",
          y: "7"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 4 13)",
          width: "1",
          x: "4",
          y: "13"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 10 1)",
          width: "1",
          x: "10",
          y: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 12 1)",
          width: "1",
          x: "12",
          y: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 8 1)",
          width: "1",
          x: "8",
          y: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 14 1)",
          width: "1",
          x: "14",
          y: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 6 1)",
          width: "1",
          x: "6",
          y: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 4 1)",
          width: "1",
          x: "4",
          y: "1"
        }
      )
    ]
  }
);
var BorderNone = (props) => /* @__PURE__ */ (0, import_jsx_runtime151.jsxs)(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "7",
          y: "5.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "13",
          y: "5.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "7",
          y: "3.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "13",
          y: "3.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "7",
          y: "7.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "7",
          y: "13.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "7",
          y: "1.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "13",
          y: "7.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "13",
          y: "13.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "13",
          y: "1.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "5",
          y: "7.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "5",
          y: "13.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "5",
          y: "1.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "3",
          y: "7.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "3",
          y: "13.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "3",
          y: "1.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "9",
          y: "7.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "9",
          y: "13.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "9",
          y: "1.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "11",
          y: "7.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "11",
          y: "13.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "11",
          y: "1.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "7",
          y: "9.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "13",
          y: "9.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "7",
          y: "11.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "13",
          y: "11.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "1",
          y: "5.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "1",
          y: "3.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "1",
          y: "7.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "1",
          y: "13.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "1",
          y: "1.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "1",
          y: "9.025"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "1",
          y: "11.025"
        }
      )
    ]
  }
);
var BorderRight = (props) => /* @__PURE__ */ (0, import_jsx_runtime151.jsxs)(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "path",
        {
          clipRule: "evenodd",
          d: "M13.25 1L13.25 14L14.75 14L14.75 1L13.25 1Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 5 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 5 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 3 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 3 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 5)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 5)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 3)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 3)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 9)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 9)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 11)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 11)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 9 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 9 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 11 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 11 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 5 1)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 3 1)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 1)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 1)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 9 1)",
          width: "1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 11 1)",
          width: "1"
        }
      )
    ]
  }
);
var BorderTop = (props) => /* @__PURE__ */ (0, import_jsx_runtime151.jsxs)(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "path",
        {
          clipRule: "evenodd",
          d: "M14 1.75L1 1.75L1 0.249999L14 0.25L14 1.75Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 8 10)",
          width: "1",
          x: "8",
          y: "10"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 2 10)",
          width: "1",
          x: "2",
          y: "10"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 8 12)",
          width: "1",
          x: "8",
          y: "12"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 2 12)",
          width: "1",
          x: "2",
          y: "12"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 8 8)",
          width: "1",
          x: "8",
          y: "8"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 8 14)",
          width: "1",
          x: "8",
          y: "14"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 2 8)",
          width: "1",
          x: "2",
          y: "8"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 2 14)",
          width: "1",
          x: "2",
          y: "14"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 10 8)",
          width: "1",
          x: "10",
          y: "8"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 10 14)",
          width: "1",
          x: "10",
          y: "14"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 12 8)",
          width: "1",
          x: "12",
          y: "8"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 12 14)",
          width: "1",
          x: "12",
          y: "14"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 6 8)",
          width: "1",
          x: "6",
          y: "8"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 6 14)",
          width: "1",
          x: "6",
          y: "14"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 4 8)",
          width: "1",
          x: "4",
          y: "8"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 4 14)",
          width: "1",
          x: "4",
          y: "14"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 8 6)",
          width: "1",
          x: "8",
          y: "6"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 2 6)",
          width: "1",
          x: "2",
          y: "6"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 8 4)",
          width: "1",
          x: "8",
          y: "4"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 2 4)",
          width: "1",
          x: "2",
          y: "4"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 14 10)",
          width: "1",
          x: "14",
          y: "10"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 14 12)",
          width: "1",
          x: "14",
          y: "12"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 14 8)",
          width: "1",
          x: "14",
          y: "8"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 14 14)",
          width: "1",
          x: "14",
          y: "14"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 14 6)",
          width: "1",
          x: "14",
          y: "6"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 14 4)",
          width: "1",
          x: "14",
          y: "4"
        }
      )
    ]
  }
);

// src/components/editor/ui/table-element.tsx
var import_jsx_runtime152 = require("react/jsx-runtime");
var TableElement = (0, import_react292.withHOC)(
  import_react291.TableProvider,
  function TableElement2({
    children,
    ...props
  }) {
    const readOnly = (0, import_react292.useReadOnly)();
    const isSelectionAreaVisible = (0, import_react292.usePluginOption)(
      import_react290.BlockSelectionPlugin,
      "isSelectionAreaVisible"
    );
    const hasControls = !readOnly && !isSelectionAreaVisible;
    const selected = (0, import_react292.useSelected)();
    const {
      isSelectingCell,
      marginLeft,
      props: tableProps
    } = (0, import_react291.useTableElement)();
    const content = /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(
      import_react292.PlateElement,
      {
        ...props,
        className: cn(
          "overflow-x-auto py-5",
          hasControls && "-ml-2 *:data-[slot=block-selection]:left-2"
        ),
        style: { paddingLeft: marginLeft },
        children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)("div", { className: "group/table relative w-fit", children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(
          "table",
          {
            className: cn(
              "mr-0 ml-px table h-px table-fixed border-collapse",
              isSelectingCell && "selection:bg-transparent"
            ),
            ...tableProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)("tbody", { className: "min-w-full", children })
          }
        ) })
      }
    ) });
    if (readOnly || !selected) {
      return content;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(TableFloatingToolbar, { children: content });
  }
);
function TableFloatingToolbar({
  children,
  ...props
}) {
  const { tf } = (0, import_react292.useEditorPlugin)(import_react291.TablePlugin);
  const element = (0, import_react292.useElement)();
  const { props: buttonProps } = (0, import_react292.useRemoveNodeButton)({ element });
  const collapsed = (0, import_react292.useEditorSelector)((editor) => !editor.api.isExpanded(), []);
  const { canMerge, canSplit } = (0, import_react291.useTableMergeState)();
  return /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(Popover, { open: canMerge || canSplit || collapsed, modal: false, children: [
    /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(import_react_popover.PopoverAnchor, { asChild: true, children }),
    /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(
      PopoverContent,
      {
        asChild: true,
        onOpenAutoFocus: (e) => e.preventDefault(),
        contentEditable: false,
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(
          Toolbar,
          {
            className: "scrollbar-hide flex w-auto max-w-[80vw] flex-row overflow-x-auto rounded-md border bg-popover p-1 shadow-md print:hidden",
            contentEditable: false,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(ToolbarGroup, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(ColorDropdownMenu2, { tooltip: "Background color", children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(import_lucide_react62.PaintBucketIcon, {}) }),
                canMerge && /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(
                  ToolbarButton,
                  {
                    onClick: () => tf.table.merge(),
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Merge cells",
                    children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(import_lucide_react62.CombineIcon, {})
                  }
                ),
                canSplit && /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(
                  ToolbarButton,
                  {
                    onClick: () => tf.table.split(),
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Split cell",
                    children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(import_lucide_react62.SquareSplitHorizontalIcon, {})
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(DropdownMenu, { modal: false, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(ToolbarButton, { tooltip: "Cell borders", children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(import_lucide_react62.Grid2X2Icon, {}) }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(TableBordersDropdownMenuContent, {}) })
                ] }),
                collapsed && /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(ToolbarGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(ToolbarButton, { tooltip: "Delete table", ...buttonProps, children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(import_lucide_react62.Trash2Icon, {}) }) })
              ] }),
              collapsed && /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(ToolbarGroup, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.insert.tableRow({ before: true });
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Insert row before",
                    children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(import_lucide_react62.ArrowUp, {})
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.insert.tableRow();
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Insert row after",
                    children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(import_lucide_react62.ArrowDown, {})
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.remove.tableRow();
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Delete row",
                    children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(import_lucide_react62.XIcon, {})
                  }
                )
              ] }),
              collapsed && /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(ToolbarGroup, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.insert.tableColumn({ before: true });
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Insert column before",
                    children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(import_lucide_react62.ArrowLeft, {})
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.insert.tableColumn();
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Insert column after",
                    children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(import_lucide_react62.ArrowRight, {})
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.remove.tableColumn();
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Delete column",
                    children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(import_lucide_react62.XIcon, {})
                  }
                )
              ] })
            ]
          }
        )
      }
    )
  ] });
}
function TableBordersDropdownMenuContent(props) {
  const editor = (0, import_react292.useEditorRef)();
  const {
    getOnSelectTableBorder,
    hasBottomBorder,
    hasLeftBorder,
    hasNoBorders,
    hasOuterBorders,
    hasRightBorder,
    hasTopBorder
  } = (0, import_react291.useTableBordersDropdownMenuContentState)();
  return /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(
    DropdownMenuContent,
    {
      className: "min-w-[220px]",
      onCloseAutoFocus: (e) => {
        e.preventDefault();
        editor.tf.focus();
      },
      align: "start",
      side: "right",
      sideOffset: 0,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(DropdownMenuGroup, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(
            DropdownMenuCheckboxItem,
            {
              checked: hasTopBorder,
              onCheckedChange: getOnSelectTableBorder("top"),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(BorderTop, {}),
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)("div", { children: "Top Border" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(
            DropdownMenuCheckboxItem,
            {
              checked: hasRightBorder,
              onCheckedChange: getOnSelectTableBorder("right"),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(BorderRight, {}),
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)("div", { children: "Right Border" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(
            DropdownMenuCheckboxItem,
            {
              checked: hasBottomBorder,
              onCheckedChange: getOnSelectTableBorder("bottom"),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(BorderBottom, {}),
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)("div", { children: "Bottom Border" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(
            DropdownMenuCheckboxItem,
            {
              checked: hasLeftBorder,
              onCheckedChange: getOnSelectTableBorder("left"),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(BorderLeft, {}),
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)("div", { children: "Left Border" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(DropdownMenuGroup, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(
            DropdownMenuCheckboxItem,
            {
              checked: hasNoBorders,
              onCheckedChange: getOnSelectTableBorder("none"),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(BorderNone, {}),
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)("div", { children: "No Border" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(
            DropdownMenuCheckboxItem,
            {
              checked: hasOuterBorders,
              onCheckedChange: getOnSelectTableBorder("outer"),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(BorderAll, {}),
                /* @__PURE__ */ (0, import_jsx_runtime152.jsx)("div", { children: "Outside Borders" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ColorDropdownMenu2({ children, tooltip }) {
  const [open, setOpen] = React51.useState(false);
  const editor = (0, import_react292.useEditorRef)();
  const selectedCells = (0, import_react292.usePluginOption)(import_react291.TablePlugin, "selectedCells");
  const onUpdateColor = React51.useCallback(
    (color) => {
      setOpen(false);
      (0, import_plate_table5.setCellBackground)(editor, { color, selectedCells: selectedCells ?? [] });
    },
    [selectedCells, editor]
  );
  const onClearColor = React51.useCallback(() => {
    setOpen(false);
    (0, import_plate_table5.setCellBackground)(editor, {
      color: null,
      selectedCells: selectedCells ?? []
    });
  }, [selectedCells, editor]);
  return /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(DropdownMenu, { open, onOpenChange: setOpen, modal: false, children: [
    /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(ToolbarButton, { tooltip, children }) }),
    /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(DropdownMenuContent, { align: "start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(ToolbarMenuGroup, { label: "Colors", children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(
        ColorDropdownMenuItems,
        {
          className: "px-2",
          colors: DEFAULT_COLORS,
          updateColor: onUpdateColor
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(DropdownMenuGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime152.jsxs)(DropdownMenuItem, { className: "p-2", onClick: onClearColor, children: [
        /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(import_lucide_react62.EraserIcon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime152.jsx)("span", { children: "Clear" })
      ] }) })
    ] })
  ] });
}

// src/components/editor/ui/table-row-element.tsx
var import_lucide_react63 = require("lucide-react");
var import_cn9 = require("@udecode/cn");
var import_plate49 = require("@udecode/plate");
var import_plate_dnd7 = require("@udecode/plate-dnd");
var import_react293 = require("@udecode/plate-selection/react");
var import_react294 = require("@udecode/plate/react");
var import_jsx_runtime153 = require("react/jsx-runtime");
function TableRowElement(props) {
  const { element } = props;
  const readOnly = (0, import_react294.useReadOnly)();
  const selected = (0, import_react294.useSelected)();
  const editor = (0, import_react294.useEditorRef)();
  const isSelectionAreaVisible = (0, import_react294.usePluginOption)(
    import_react293.BlockSelectionPlugin,
    "isSelectionAreaVisible"
  );
  const hasControls = !readOnly && !isSelectionAreaVisible;
  const { isDragging, previewRef, handleRef } = (0, import_plate_dnd7.useDraggable)({
    element,
    type: element.type,
    canDropNode: ({ dragEntry, dropEntry }) => import_plate49.PathApi.equals(
      import_plate49.PathApi.parent(dragEntry[1]),
      import_plate49.PathApi.parent(dropEntry[1])
    ),
    onDropHandler: (_, { dragItem }) => {
      const dragElement = dragItem.element;
      if (dragElement) {
        editor.tf.select(dragElement);
      }
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime153.jsxs)(
    import_react294.PlateElement,
    {
      ...props,
      ref: (0, import_cn9.useComposedRef)(props.ref, previewRef),
      as: "tr",
      className: cn("group/row", isDragging && "opacity-50"),
      attributes: {
        ...props.attributes,
        "data-selected": selected ? "true" : void 0
      },
      children: [
        hasControls && /* @__PURE__ */ (0, import_jsx_runtime153.jsxs)("td", { className: "w-2 select-none", contentEditable: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime153.jsx)(RowDragHandle, { dragRef: handleRef }),
          /* @__PURE__ */ (0, import_jsx_runtime153.jsx)(DropLine4, {})
        ] }),
        props.children
      ]
    }
  );
}
function RowDragHandle({ dragRef }) {
  const editor = (0, import_react294.useEditorRef)();
  const element = (0, import_react294.useElement)();
  return /* @__PURE__ */ (0, import_jsx_runtime153.jsx)(
    Button,
    {
      ref: dragRef,
      variant: "outline",
      className: cn(
        "absolute top-1/2 left-0 z-51 h-6 w-4 -translate-y-1/2 p-0 focus-visible:ring-0 focus-visible:ring-offset-0",
        "cursor-grab active:cursor-grabbing",
        'opacity-0 transition-opacity duration-100 group-hover/row:opacity-100 group-has-data-[resizing="true"]/row:opacity-0'
      ),
      onClick: () => {
        editor.tf.select(element);
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime153.jsx)(import_lucide_react63.GripVertical, { className: "text-muted-foreground" })
    }
  );
}
function DropLine4() {
  const { dropLine } = (0, import_plate_dnd7.useDropLine)();
  if (!dropLine) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime153.jsx)(
    "div",
    {
      className: cn(
        "absolute inset-x-0 left-2 z-50 h-0.5 bg-brand/50",
        dropLine === "top" ? "-top-px" : "-bottom-px"
      )
    }
  );
}

// src/components/editor/ui/toc-element.tsx
var import_class_variance_authority17 = require("class-variance-authority");
var import_react295 = require("@udecode/plate-heading/react");
var import_react296 = require("@udecode/plate/react");
var import_jsx_runtime154 = require("react/jsx-runtime");
var headingItemVariants2 = (0, import_class_variance_authority17.cva)(
  "block h-auto w-full cursor-pointer truncate rounded-none px-0.5 py-1.5 text-left font-medium text-muted-foreground underline decoration-[0.5px] underline-offset-4 hover:bg-accent hover:text-muted-foreground",
  {
    variants: {
      depth: {
        1: "pl-0.5",
        2: "pl-[26px]",
        3: "pl-[50px]"
      }
    }
  }
);
function TocElement(props) {
  const state = (0, import_react295.useTocElementState)();
  const { props: btnProps } = (0, import_react295.useTocElement)(state);
  const { headingList } = state;
  return /* @__PURE__ */ (0, import_jsx_runtime154.jsx)(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ (0, import_jsx_runtime154.jsxs)(import_react296.PlateElement, { ...props, className: "mb-1 p-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime154.jsx)("div", { contentEditable: false, children: headingList.length > 0 ? headingList.map((item) => /* @__PURE__ */ (0, import_jsx_runtime154.jsx)(
      Button,
      {
        variant: "ghost",
        className: headingItemVariants2({
          depth: item.depth
        }),
        onClick: (e) => btnProps.onClick(e, item, "smooth"),
        "aria-current": true,
        children: item.title
      },
      item.id
    )) : /* @__PURE__ */ (0, import_jsx_runtime154.jsx)("div", { className: "text-sm text-gray-500", children: "Create a heading to display the table of contents." }) }),
    props.children
  ] }) });
}

// src/components/editor/ui/toggle-element.tsx
var import_lucide_react64 = require("lucide-react");
var import_react297 = require("@udecode/plate-toggle/react");
var import_react298 = require("@udecode/plate/react");
var import_jsx_runtime155 = require("react/jsx-runtime");
function ToggleElement(props) {
  const element = props.element;
  const state = (0, import_react297.useToggleButtonState)(element.id);
  const { buttonProps, open } = (0, import_react297.useToggleButton)(state);
  return /* @__PURE__ */ (0, import_jsx_runtime155.jsx)(BlockWithPlus, { element, children: /* @__PURE__ */ (0, import_jsx_runtime155.jsxs)(import_react298.PlateElement, { ...props, className: "pl-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime155.jsx)(
      Button,
      {
        size: "icon",
        variant: "ghost",
        className: "absolute top-0 -left-0.5 size-6 cursor-pointer items-center justify-center rounded-md p-px text-muted-foreground transition-colors select-none hover:bg-accent [&_svg]:size-4",
        contentEditable: false,
        ...buttonProps,
        children: /* @__PURE__ */ (0, import_jsx_runtime155.jsx)(
          import_lucide_react64.ChevronRight,
          {
            className: open ? "rotate-90 transition-transform duration-75" : "rotate-0 transition-transform duration-75"
          }
        )
      }
    ),
    props.children
  ] }) });
}

// src/components/editor/core/use-create-editor.ts
var viewComponents = {
  [import_react315.AudioPlugin.key]: MediaAudioElement,
  [import_react301.BlockquotePlugin.key]: BlockquoteElement,
  [import_react300.BoldPlugin.key]: (0, import_cn10.withProps)(import_react321.PlateLeaf, { as: "strong" }),
  [import_react302.CalloutPlugin.key]: CalloutElement,
  [import_react303.CodeBlockPlugin.key]: CodeBlockElement,
  [import_react303.CodeLinePlugin.key]: CodeLineElement,
  [import_react300.CodePlugin.key]: CodeLeaf,
  [import_react303.CodeSyntaxPlugin.key]: CodeSyntaxLeaf,
  [import_react312.ColumnItemPlugin.key]: ColumnElement,
  [import_react312.ColumnPlugin.key]: ColumnGroupElement,
  [import_react304.CommentsPlugin.key]: CommentLeaf,
  [import_react305.DatePlugin.key]: DateElement,
  [import_react314.EquationPlugin.key]: EquationElement,
  [import_react307.ExcalidrawPlugin.key]: ExcalidrawElement,
  [import_react315.FilePlugin.key]: MediaFileElement,
  [import_plate_heading20.HEADING_KEYS.h1]: (0, import_cn10.withProps)(HeadingElement, { variant: "h1" }),
  [import_plate_heading20.HEADING_KEYS.h2]: (0, import_cn10.withProps)(HeadingElement, { variant: "h2" }),
  [import_plate_heading20.HEADING_KEYS.h3]: (0, import_cn10.withProps)(HeadingElement, { variant: "h3" }),
  [import_plate_heading20.HEADING_KEYS.h4]: (0, import_cn10.withProps)(HeadingElement, { variant: "h4" }),
  [import_plate_heading20.HEADING_KEYS.h5]: (0, import_cn10.withProps)(HeadingElement, { variant: "h5" }),
  [import_plate_heading20.HEADING_KEYS.h6]: (0, import_cn10.withProps)(HeadingElement, { variant: "h6" }),
  [import_react309.HighlightPlugin.key]: HighlightLeaf,
  [import_react310.HorizontalRulePlugin.key]: HrElement,
  [import_react315.ImagePlugin.key]: ImageElement,
  [import_react314.InlineEquationPlugin.key]: InlineEquationElement,
  [import_react300.ItalicPlugin.key]: (0, import_cn10.withProps)(import_react321.PlateLeaf, { as: "em" }),
  [import_react311.KbdPlugin.key]: KbdLeaf,
  [import_react313.LinkPlugin.key]: LinkElement,
  [import_react315.MediaEmbedPlugin.key]: MediaEmbedElement,
  [import_react316.MentionPlugin.key]: MentionElement,
  [import_react321.ParagraphPlugin.key]: ParagraphElement,
  [import_react315.PlaceholderPlugin.key]: MediaPlaceholderElement,
  [import_react300.StrikethroughPlugin.key]: (0, import_cn10.withProps)(import_react321.PlateLeaf, { as: "s" }),
  [import_react300.SubscriptPlugin.key]: (0, import_cn10.withProps)(import_react321.PlateLeaf, { as: "sub" }),
  [import_react318.SuggestionPlugin.key]: SuggestionLeaf,
  [import_react300.SuperscriptPlugin.key]: (0, import_cn10.withProps)(import_react321.PlateLeaf, { as: "sup" }),
  [import_react319.TableCellHeaderPlugin.key]: TableCellHeaderElement,
  [import_react319.TableCellPlugin.key]: TableCellElement,
  [import_react319.TablePlugin.key]: TableElement,
  [import_react319.TableRowPlugin.key]: TableRowElement,
  [import_react308.TocPlugin.key]: TocElement,
  [import_react320.TogglePlugin.key]: ToggleElement,
  [import_react300.UnderlinePlugin.key]: (0, import_cn10.withProps)(import_react321.PlateLeaf, { as: "u" }),
  [import_react315.VideoPlugin.key]: MediaVideoElement
};
var editorComponents = {
  ...viewComponents,
  [import_react299.AIPlugin.key]: AILeaf,
  [import_react306.EmojiInputPlugin.key]: EmojiInputElement,
  [import_react316.MentionInputPlugin.key]: MentionInputElement,
  [import_react317.SlashInputPlugin.key]: SlashInputElement
};
var PLUGIN_DEFAULTS = ["undo", "redo", "ai", "export", "import", "insert", "turn_into", "font_size", "bold", "italic", "underline", "strikethrough", "code", "font_color", "background_color", "align", "indent_list", "bulleted_list", "indent_todo", "toggle", "link", "table", "emoji", "image", "video", "audio", "file", "line_height", "outdent", "indent", "more", "highlight", "comment", "mode"];
var useCreateEditor = ({
  isFixedToolbar = true,
  isFloatingToolbar = true,
  allowPlugins = PLUGIN_DEFAULTS,
  toolbarClasses = {},
  floatingClasses = {},
  components: components2,
  override,
  placeholders,
  readOnly,
  ...options
} = {}, deps = []) => {
  return (0, import_react321.usePlateEditor)(
    {
      override: {
        components: {
          ...readOnly ? viewComponents : placeholders ? withPlaceholders(editorComponents) : editorComponents,
          ...components2
        },
        ...override
      },
      plugins: [
        ...copilotPlugins,
        ...editorPlugins,
        ...isFixedToolbar ? [FixedToolbarPlugin({ allows: PLUGIN_DEFAULTS, classes: toolbarClasses })] : allowPlugins?.length > 0 ? [FixedToolbarPlugin({ allows: allowPlugins, classes: toolbarClasses })] : [],
        ...isFloatingToolbar ? [FloatingToolbarPlugin({ allows: PLUGIN_DEFAULTS, classes: floatingClasses })] : allowPlugins?.length > 0 ? [FloatingToolbarPlugin({ allows: allowPlugins, classes: floatingClasses })] : []
      ],
      value: [],
      ...options
    },
    deps
  );
};

// src/components/editor/core/plate-editor.tsx
var import_jsx_runtime156 = require("react/jsx-runtime");
var EditorProvider = ({
  children,
  isToolbar = true,
  isFloating = true,
  allowPlugins = PLUGIN_DEFAULTS,
  toolbarClasses
}) => {
  const editor = useCreateEditor(
    {
      isFixedToolbar: isToolbar,
      isFloatingToolbar: isFloating,
      allowPlugins,
      toolbarClasses
    },
    [isToolbar, isFloating, allowPlugins, toolbarClasses]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime156.jsx)("div", { className: "h-screen w-full", "data-registry": "plate", children: /* @__PURE__ */ (0, import_jsx_runtime156.jsx)(SettingsProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime156.jsx)(import_react_dnd.DndProvider, { backend: import_react_dnd_html5_backend.HTML5Backend, children: /* @__PURE__ */ (0, import_jsx_runtime156.jsx)(import_react322.Plate, { editor, children }) }) }) });
};
var CoreEditor = ({ editorRef, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime156.jsx)(EditorContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime156.jsx)(Editor, { ref: editorRef, ...props }) });
};

// src/components/editor/core/tool-base.tsx
var import_lucide_react65 = require("lucide-react");
var import_react323 = require("@udecode/plate-basic-marks/react");
var import_react324 = require("@udecode/plate-font/react");
var import_react325 = require("@udecode/plate-highlight/react");
var import_react326 = require("@udecode/plate-media/react");
var import_jsx_runtime157 = require("react/jsx-runtime");
var Undo = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(UndoToolbarButton, {})
        }
      )
    }
  );
};
var Redo = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(RedoToolbarButton, {})
        }
      )
    }
  );
};
var AI = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(AIToolbarButton, {})
        }
      )
    }
  );
};
var Export = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(ExportToolbarButton, { children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(import_lucide_react65.ArrowUpToLineIcon, {}) })
        }
      )
    }
  );
};
var Import = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(ImportToolbarButton, {})
        }
      )
    }
  );
};
var Insert = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(InsertDropdownMenu, {})
        }
      )
    }
  );
};
var TurnInto = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(TurnIntoDropdownMenu, {})
        }
      )
    }
  );
};
var FontSize = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(FontSizeToolbarButton, {})
        }
      )
    }
  );
};
var Bold = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(MarkToolbarButton, { nodeType: import_react323.BoldPlugin.key, tooltip: "Bold (\u2318+B)", children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(import_lucide_react65.BoldIcon, {}) })
        }
      )
    }
  );
};
var Italic = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(MarkToolbarButton, { nodeType: import_react323.ItalicPlugin.key, tooltip: "Italic (\u2318+I)", children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(import_lucide_react65.ItalicIcon, {}) })
        }
      )
    }
  );
};
var Underline = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(MarkToolbarButton, { nodeType: import_react323.UnderlinePlugin.key, tooltip: "Underline (\u2318+U)", children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(import_lucide_react65.UnderlineIcon, {}) })
        }
      )
    }
  );
};
var StrikeThrough = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(MarkToolbarButton, { nodeType: import_react323.StrikethroughPlugin.key, tooltip: "Strikethrough (\u2318+\u21E7+M)", children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(import_lucide_react65.StrikethroughIcon, {}) })
        }
      )
    }
  );
};
var Code = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(MarkToolbarButton, { nodeType: import_react323.CodePlugin.key, tooltip: "Code (\u2318+E)", children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(import_lucide_react65.Code2Icon, {}) })
        }
      )
    }
  );
};
var FontColor = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(ColorDropdownMenu, { nodeType: import_react324.FontColorPlugin.key, tooltip: "Text color", children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(import_lucide_react65.BaselineIcon, {}) })
        }
      )
    }
  );
};
var BackgroundColor = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(ColorDropdownMenu, { nodeType: import_react324.FontBackgroundColorPlugin.key, tooltip: "Background color", children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(import_lucide_react65.PaintBucketIcon, {}) })
        }
      )
    }
  );
};
var Align = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(AlignDropdownMenu, {})
        }
      )
    }
  );
};
var NumberIndentList = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(NumberedIndentListToolbarButton, {})
        }
      )
    }
  );
};
var BulletedIndentList = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(BulletedIndentListToolbarButton, {})
        }
      )
    }
  );
};
var TodoIndentList = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(IndentTodoToolbarButton, {})
        }
      )
    }
  );
};
var Toggle = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(ToggleToolbarButton, {})
        }
      )
    }
  );
};
var Link5 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(LinkToolbarButton, {})
        }
      )
    }
  );
};
var Table3 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(TableDropdownMenu, {})
        }
      )
    }
  );
};
var Emoji = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(EmojiDropdownMenu, {})
        }
      )
    }
  );
};
var ImageMedia = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(MediaToolbarButton, { nodeType: import_react326.ImagePlugin.key })
        }
      )
    }
  );
};
var VideoMedia = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(MediaToolbarButton, { nodeType: import_react326.VideoPlugin.key })
        }
      )
    }
  );
};
var AudioMedia = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(MediaToolbarButton, { nodeType: import_react326.AudioPlugin.key })
        }
      )
    }
  );
};
var FileMedia = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(MediaToolbarButton, { nodeType: import_react326.FilePlugin.key })
        }
      )
    }
  );
};
var LineHeight = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(LineHeightDropdownMenu, {})
        }
      )
    }
  );
};
var Outdent2 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(OutdentToolbarButton, {})
        }
      )
    }
  );
};
var Indent2 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(IndentToolbarButton, {})
        }
      )
    }
  );
};
var More = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(MoreDropdownMenu, {})
        }
      )
    }
  );
};
var Highlight = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(MarkToolbarButton, { nodeType: import_react325.HighlightPlugin.key, tooltip: "Highlight", children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(import_lucide_react65.HighlighterIcon, {}) })
        }
      )
    }
  );
};
var Comment2 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(CommentToolbarButton, {})
        }
      )
    }
  );
};
var Mode = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(ModeDropdownMenu, {})
        }
      )
    }
  );
};

// src/api/hooks/useApi.ts
var import_react328 = require("react");
var import_axios = __toESM(require("axios"));

// src/api/apiProvider.tsx
var import_react327 = require("react");
var import_jsx_runtime158 = require("react/jsx-runtime");
var ApiContext = (0, import_react327.createContext)(void 0);
var ApiProvider = ({ children, host, resources }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime158.jsx)(ApiContext.Provider, { value: { host, resources }, children });
};
var useApiContext = () => {
  const context = (0, import_react327.useContext)(ApiContext);
  if (!context) throw new Error("useApiContext must be used inside ApiProvider");
  return context;
};

// src/api/hooks/useApi.ts
var useApi = (resourceKey, params, options) => {
  const { host, resources } = useApiContext();
  const endpoint = resources[resourceKey];
  const [data, setData] = (0, import_react328.useState)(null);
  const [loading, setLoading] = (0, import_react328.useState)(false);
  const [error, setError] = (0, import_react328.useState)(null);
  (0, import_react328.useEffect)(() => {
    if (!endpoint || options?.skip) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await import_axios.default.get(`${host}${endpoint}`, { params });
        setData(res.data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [host, endpoint, JSON.stringify(params)]);
  return { data, loading, error };
};

// src/api/hooks/useMutation.ts
var import_react329 = require("react");
var import_axios2 = __toESM(require("axios"));
var useApiMutation = (resourceKey, options) => {
  const { host, resources } = useApiContext();
  const endpoint = resources[resourceKey];
  const [loading, setLoading] = (0, import_react329.useState)(false);
  const [error, setError] = (0, import_react329.useState)(null);
  const [data, setData] = (0, import_react329.useState)(null);
  const mutate = async (body, extraParams) => {
    setLoading(true);
    try {
      const res = await import_axios2.default.request({
        url: `${host}${endpoint}`,
        method: options?.method || "POST",
        data: body,
        params: extraParams
      });
      setData(res.data);
      setError(null);
      options?.onSuccess?.(res.data);
      return res.data;
    } catch (err) {
      setError(err);
      options?.onError?.(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  return { mutate, loading, error, data };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ACTION_THREE_COLUMNS,
  AI,
  Align,
  ApiProvider,
  AudioMedia,
  BackgroundColor,
  BlockWithPlus,
  Bold,
  BulletedIndentList,
  Code,
  Comment,
  CoreEditor,
  EditorProvider,
  Emoji,
  Export,
  FileMedia,
  FixedToolbarPlugin,
  FloatingToolbarPlugin,
  FontColor,
  FontSize,
  Highlight,
  ImageMedia,
  Import,
  Indent,
  Insert,
  Italic,
  LineHeight,
  Link,
  Mode,
  More,
  NumberIndentList,
  Outdent,
  PLUGIN_DEFAULTS,
  PROMPT_TEMPLATES,
  Redo,
  STRUCTURAL_TYPES,
  SettingsDialog,
  SettingsProvider,
  StrikeThrough,
  Table,
  TodoIndentList,
  Toggle,
  TurnInto,
  Underline,
  Undo,
  VideoMedia,
  aiPlugins,
  alignPlugin,
  autoformatPlugin,
  avatarUrl,
  basicNodesPlugins,
  blockMenuPlugins,
  blockSelectionPlugins,
  blockSelectionReadOnlyPlugin,
  commentsPlugin,
  copilotPlugins,
  cursorOverlayPlugin,
  deletePlugins,
  discussionPlugin,
  discussionsData,
  dndPlugins,
  editorPlugins,
  equationPlugins,
  exitBreakPlugin,
  getBlockType,
  indentListPlugins,
  insertBlock,
  insertBlockMap,
  insertInlineElement,
  insertInlineMap,
  insertList,
  isSelectionAtTopLevel,
  lineHeightPlugin,
  linkPlugin,
  markdownPlugin,
  mediaPlugins,
  mentionPlugin,
  models,
  resetBlockTypePlugin,
  resetBlockTypesCodeBlockRule,
  resetBlockTypesCommonRule,
  setBlockMap,
  setBlockType,
  setList,
  skipMarkPlugin,
  softBreakPlugin,
  suggestionPlugin,
  tablePlugin,
  tocPlugin,
  useApi,
  useApiContext,
  useApiMutation,
  useChat,
  useCreateEditor,
  useSettings,
  viewPlugins
});
//# sourceMappingURL=index.js.map