// src/components/editor/core/element-wrapper.tsx
import {
  useEffect as useEffect2,
  useState as useState3
} from "react";
import { Plus } from "lucide-react";
import { isType } from "@udecode/plate";
import { BlockquotePlugin as BlockquotePlugin2 } from "@udecode/plate-block-quote/react";
import { CodeBlockPlugin as CodeBlockPlugin3 } from "@udecode/plate-code-block/react";
import { ExcalidrawPlugin as ExcalidrawPlugin2 } from "@udecode/plate-excalidraw/react";
import { HEADING_KEYS as HEADING_KEYS2 } from "@udecode/plate-heading";
import { ColumnPlugin as ColumnPlugin2 } from "@udecode/plate-layout/react";
import {
  ImagePlugin as ImagePlugin3,
  MediaEmbedPlugin as MediaEmbedPlugin3,
  PlaceholderPlugin
} from "@udecode/plate-media/react";
import { TablePlugin as TablePlugin3 } from "@udecode/plate-table/react";
import { TogglePlugin as TogglePlugin2 } from "@udecode/plate-toggle/react";
import {
  ParagraphPlugin as ParagraphPlugin2,
  useEditorRef as useEditorRef2,
  usePath,
  useReadOnly,
  useSelected
} from "@udecode/plate/react";

// src/libs/utils.ts
import {
  clsx
} from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/editor/ui/button.tsx
import {
  cva
} from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
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
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/editor/ui/insert-dropdown-menu.tsx
import * as React2 from "react";
import {
  CalendarIcon,
  ChevronRightIcon as ChevronRightIcon2,
  Columns3Icon,
  FileCodeIcon,
  FilmIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  ImageIcon,
  Link2Icon,
  ListIcon,
  ListOrderedIcon,
  MinusIcon,
  PenToolIcon,
  PilcrowIcon,
  PlusIcon,
  QuoteIcon,
  RadicalIcon,
  SquareIcon,
  TableIcon,
  TableOfContentsIcon
} from "lucide-react";
import { BlockquotePlugin } from "@udecode/plate-block-quote/react";
import { CodeBlockPlugin as CodeBlockPlugin2 } from "@udecode/plate-code-block/react";
import { DatePlugin as DatePlugin2 } from "@udecode/plate-date/react";
import { ExcalidrawPlugin } from "@udecode/plate-excalidraw/react";
import { HEADING_KEYS } from "@udecode/plate-heading";
import { TocPlugin as TocPlugin2 } from "@udecode/plate-heading/react";
import { HorizontalRulePlugin } from "@udecode/plate-horizontal-rule/react";
import {
  INDENT_LIST_KEYS as INDENT_LIST_KEYS2,
  ListStyleType as ListStyleType2
} from "@udecode/plate-indent-list";
import { LinkPlugin as LinkPlugin2 } from "@udecode/plate-link/react";
import {
  EquationPlugin as EquationPlugin2,
  InlineEquationPlugin as InlineEquationPlugin2
} from "@udecode/plate-math/react";
import {
  ImagePlugin as ImagePlugin2,
  MediaEmbedPlugin as MediaEmbedPlugin2
} from "@udecode/plate-media/react";
import { TablePlugin as TablePlugin2 } from "@udecode/plate-table/react";
import { TogglePlugin } from "@udecode/plate-toggle/react";
import {
  ParagraphPlugin,
  useEditorRef
} from "@udecode/plate/react";

// src/components/editor/core/transforms.ts
import {
  PathApi
} from "@udecode/plate";
import { insertCallout } from "@udecode/plate-callout";
import { CalloutPlugin } from "@udecode/plate-callout/react";
import { insertCodeBlock } from "@udecode/plate-code-block";
import { CodeBlockPlugin } from "@udecode/plate-code-block/react";
import { insertDate } from "@udecode/plate-date";
import { DatePlugin } from "@udecode/plate-date/react";
import { insertToc } from "@udecode/plate-heading";
import { TocPlugin } from "@udecode/plate-heading/react";
import { INDENT_LIST_KEYS, ListStyleType } from "@udecode/plate-indent-list";
import { IndentListPlugin } from "@udecode/plate-indent-list/react";
import { insertColumnGroup, toggleColumnGroup } from "@udecode/plate-layout";
import { ColumnItemPlugin, ColumnPlugin } from "@udecode/plate-layout/react";
import { LinkPlugin, triggerFloatingLink } from "@udecode/plate-link/react";
import { insertEquation, insertInlineEquation } from "@udecode/plate-math";
import {
  EquationPlugin,
  InlineEquationPlugin
} from "@udecode/plate-math/react";
import {
  insertAudioPlaceholder,
  insertFilePlaceholder,
  insertMedia,
  insertVideoPlaceholder
} from "@udecode/plate-media";
import {
  AudioPlugin,
  FilePlugin,
  ImagePlugin,
  MediaEmbedPlugin,
  VideoPlugin
} from "@udecode/plate-media/react";
import { SuggestionPlugin } from "@udecode/plate-suggestion/react";
import {
  TableCellPlugin,
  TablePlugin,
  TableRowPlugin
} from "@udecode/plate-table/react";
var STRUCTURAL_TYPES = [
  ColumnPlugin.key,
  ColumnItemPlugin.key,
  TablePlugin.key,
  TableRowPlugin.key,
  TableCellPlugin.key
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
  [INDENT_LIST_KEYS.todo]: insertList,
  [ListStyleType.Decimal]: insertList,
  [ListStyleType.Disc]: insertList,
  [ACTION_THREE_COLUMNS]: (editor) => insertColumnGroup(editor, { columns: 3, select: true }),
  [AudioPlugin.key]: (editor) => insertAudioPlaceholder(editor, { select: true }),
  [CalloutPlugin.key]: (editor) => insertCallout(editor, { select: true }),
  [CodeBlockPlugin.key]: (editor) => insertCodeBlock(editor, { select: true }),
  [EquationPlugin.key]: (editor) => insertEquation(editor, { select: true }),
  [FilePlugin.key]: (editor) => insertFilePlaceholder(editor, { select: true }),
  [ImagePlugin.key]: (editor) => insertMedia(editor, {
    select: true,
    type: ImagePlugin.key
  }),
  [MediaEmbedPlugin.key]: (editor) => insertMedia(editor, {
    select: true,
    type: MediaEmbedPlugin.key
  }),
  [TablePlugin.key]: (editor) => editor.getTransforms(TablePlugin).insert.table({}, { select: true }),
  [TocPlugin.key]: (editor) => insertToc(editor, { select: true }),
  [VideoPlugin.key]: (editor) => insertVideoPlaceholder(editor, { select: true })
};
var insertInlineMap = {
  [DatePlugin.key]: (editor) => insertDate(editor, { select: true }),
  [InlineEquationPlugin.key]: (editor) => insertInlineEquation(editor, "", { select: true }),
  [LinkPlugin.key]: (editor) => triggerFloatingLink(editor, { focused: true })
};
var insertBlock = (editor, type) => {
  editor.tf.withoutNormalizing(() => {
    const block = editor.api.block();
    if (!block) return;
    if (type in insertBlockMap) {
      insertBlockMap[type](editor, type);
    } else {
      editor.tf.insertNodes(editor.api.create.block({ type }), {
        at: PathApi.next(block[1]),
        select: true
      });
    }
    if (getBlockType(block[0]) !== type) {
      editor.getApi(SuggestionPlugin).suggestion.withoutSuggestions(() => {
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
  [INDENT_LIST_KEYS.todo]: setList,
  [ListStyleType.Decimal]: setList,
  [ListStyleType.Disc]: setList,
  [ACTION_THREE_COLUMNS]: (editor) => toggleColumnGroup(editor, { columns: 3 })
};
var setBlockType = (editor, type, { at } = {}) => {
  editor.tf.withoutNormalizing(() => {
    const setEntry = (entry) => {
      const [node, path] = entry;
      if (node[IndentListPlugin.key]) {
        editor.tf.unsetNodes([IndentListPlugin.key, "indent"], { at: path });
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
  if (block[IndentListPlugin.key]) {
    if (block[IndentListPlugin.key] === ListStyleType.Decimal) {
      return ListStyleType.Decimal;
    } else if (block[IndentListPlugin.key] === INDENT_LIST_KEYS.todo) {
      return INDENT_LIST_KEYS.todo;
    } else {
      return ListStyleType.Disc;
    }
  }
  return block.type;
};

// src/components/editor/ui/dropdown-menu.tsx
import {
  CheckIcon,
  ChevronRightIcon,
  CircleIcon
} from "lucide-react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx2(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx2(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx2("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx2(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx2(CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx2("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx2(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx2(CircleIcon, { className: "size-2 fill-current" }) }) }),
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
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx2(ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
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
import * as React from "react";
import {
  cva as cva2
} from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import * as TooltipPrimitive2 from "@radix-ui/react-tooltip";

// src/components/editor/ui/separator.tsx
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsx as jsx3 } from "react/jsx-runtime";
function Separator2({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
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
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
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
  return /* @__PURE__ */ jsx4(TooltipProvider, { children: /* @__PURE__ */ jsx4(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx4(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx4(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs2(
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
        /* @__PURE__ */ jsx4(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}

// src/components/editor/ui/toolbar.tsx
import { Fragment, jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function Toolbar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
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
  return /* @__PURE__ */ jsx5(
    ToolbarPrimitive.ToolbarToggleGroup,
    {
      className: cn("flex items-center", className),
      ...props
    }
  );
}
var toolbarButtonVariants = cva2(
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
var dropdownArrowVariants = cva2(
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
  return typeof pressed === "boolean" ? /* @__PURE__ */ jsx5(ToolbarToggleGroup2, { disabled: props.disabled, value: "single", type: "single", children: /* @__PURE__ */ jsx5(
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
      children: isDropdown ? /* @__PURE__ */ jsxs3(Fragment, { children: [
        /* @__PURE__ */ jsx5("div", { className: "flex flex-1 items-center gap-2 whitespace-nowrap", children }),
        /* @__PURE__ */ jsx5("div", { children: /* @__PURE__ */ jsx5(
          ChevronDown,
          {
            className: "size-3.5 text-muted-foreground",
            "data-icon": true
          }
        ) })
      ] }) : children
    }
  ) }) : /* @__PURE__ */ jsx5(
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
  return /* @__PURE__ */ jsx5(
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
  return /* @__PURE__ */ jsx5(
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
  return /* @__PURE__ */ jsx5(
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
      children: /* @__PURE__ */ jsx5(ChevronDown, { className: "size-3.5 text-muted-foreground", "data-icon": true })
    }
  );
}
function ToolbarToggleItem({
  className,
  size = "sm",
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
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
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      className: cn(
        "group/toolbar-group",
        "relative hidden has-[button]:flex",
        className
      ),
      children: [
        /* @__PURE__ */ jsx5("div", { className: "flex items-center", children }),
        /* @__PURE__ */ jsx5("div", { className: "mx-1.5 py-0.5 group-last/toolbar-group:hidden!", children: /* @__PURE__ */ jsx5(Separator2, { orientation: "vertical" }) })
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
    const component = /* @__PURE__ */ jsx5(Component, { ...props });
    if (tooltip && mounted) {
      return /* @__PURE__ */ jsxs3(Tooltip, { ...tooltipProps, children: [
        /* @__PURE__ */ jsx5(TooltipTrigger, { asChild: true, ...tooltipTriggerProps, children: component }),
        /* @__PURE__ */ jsx5(TooltipContent2, { ...tooltipContentProps, children: tooltip })
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
  return /* @__PURE__ */ jsx5(TooltipPrimitive2.Portal, { children: /* @__PURE__ */ jsx5(
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
  return /* @__PURE__ */ jsxs3(Fragment, { children: [
    /* @__PURE__ */ jsx5(
      DropdownMenuSeparator,
      {
        className: cn(
          "hidden",
          "mb-0 shrink-0 peer-has-[[role=menuitem]]/menu-group:block peer-has-[[role=menuitemradio]]/menu-group:block peer-has-[[role=option]]/menu-group:block"
        )
      }
    ),
    /* @__PURE__ */ jsxs3(
      DropdownMenuRadioGroup,
      {
        ...props,
        className: cn(
          "hidden",
          "peer/menu-group group/menu-group my-1.5 has-[[role=menuitem]]:block has-[[role=menuitemradio]]:block has-[[role=option]]:block",
          className
        ),
        children: [
          label && /* @__PURE__ */ jsx5(DropdownMenuLabel, { className: "text-xs font-semibold text-muted-foreground select-none", children: label }),
          children
        ]
      }
    )
  ] });
}

// src/components/editor/ui/insert-dropdown-menu.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var groups = [
  {
    group: "Basic blocks",
    items: [
      {
        icon: /* @__PURE__ */ jsx6(PilcrowIcon, {}),
        label: "Paragraph",
        value: ParagraphPlugin.key
      },
      {
        icon: /* @__PURE__ */ jsx6(Heading1Icon, {}),
        label: "Heading 1",
        value: HEADING_KEYS.h1
      },
      {
        icon: /* @__PURE__ */ jsx6(Heading2Icon, {}),
        label: "Heading 2",
        value: HEADING_KEYS.h2
      },
      {
        icon: /* @__PURE__ */ jsx6(Heading3Icon, {}),
        label: "Heading 3",
        value: HEADING_KEYS.h3
      },
      {
        icon: /* @__PURE__ */ jsx6(TableIcon, {}),
        label: "Table",
        value: TablePlugin2.key
      },
      {
        icon: /* @__PURE__ */ jsx6(FileCodeIcon, {}),
        label: "Code",
        value: CodeBlockPlugin2.key
      },
      {
        icon: /* @__PURE__ */ jsx6(QuoteIcon, {}),
        label: "Quote",
        value: BlockquotePlugin.key
      },
      {
        icon: /* @__PURE__ */ jsx6(MinusIcon, {}),
        label: "Divider",
        value: HorizontalRulePlugin.key
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
        icon: /* @__PURE__ */ jsx6(ListIcon, {}),
        label: "Bulleted list",
        value: ListStyleType2.Disc
      },
      {
        icon: /* @__PURE__ */ jsx6(ListOrderedIcon, {}),
        label: "Numbered list",
        value: ListStyleType2.Decimal
      },
      {
        icon: /* @__PURE__ */ jsx6(SquareIcon, {}),
        label: "To-do list",
        value: INDENT_LIST_KEYS2.todo
      },
      {
        icon: /* @__PURE__ */ jsx6(ChevronRightIcon2, {}),
        label: "Toggle list",
        value: TogglePlugin.key
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
        icon: /* @__PURE__ */ jsx6(ImageIcon, {}),
        label: "Image",
        value: ImagePlugin2.key
      },
      {
        icon: /* @__PURE__ */ jsx6(FilmIcon, {}),
        label: "Embed",
        value: MediaEmbedPlugin2.key
      },
      {
        icon: /* @__PURE__ */ jsx6(PenToolIcon, {}),
        label: "Excalidraw",
        value: ExcalidrawPlugin.key
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
        icon: /* @__PURE__ */ jsx6(TableOfContentsIcon, {}),
        label: "Table of contents",
        value: TocPlugin2.key
      },
      {
        icon: /* @__PURE__ */ jsx6(Columns3Icon, {}),
        label: "3 columns",
        value: "action_three_columns"
      },
      {
        focusEditor: false,
        icon: /* @__PURE__ */ jsx6(RadicalIcon, {}),
        label: "Equation",
        value: EquationPlugin2.key
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
        icon: /* @__PURE__ */ jsx6(Link2Icon, {}),
        label: "Link",
        value: LinkPlugin2.key
      },
      {
        focusEditor: true,
        icon: /* @__PURE__ */ jsx6(CalendarIcon, {}),
        label: "Date",
        value: DatePlugin2.key
      },
      {
        focusEditor: false,
        icon: /* @__PURE__ */ jsx6(RadicalIcon, {}),
        label: "Inline Equation",
        value: InlineEquationPlugin2.key
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
  const editor = useEditorRef();
  const [open, setOpen] = React2.useState(false);
  return /* @__PURE__ */ jsxs4(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsx6(DropdownMenuTrigger, { asChild: true, children: !button ? /* @__PURE__ */ jsx6(ToolbarButton, { pressed: open, tooltip: "Insert", isDropdown: true, children: /* @__PURE__ */ jsx6(PlusIcon, {}) }) : button }),
    /* @__PURE__ */ jsx6(
      DropdownMenuContent,
      {
        className: "flex max-h-[500px] min-w-0 flex-col overflow-y-auto",
        align: "start",
        children: groups.map(({ group, items: nestedItems }) => /* @__PURE__ */ jsx6(ToolbarMenuGroup, { label: group, children: nestedItems.map(({ icon, label, value, onSelect }) => /* @__PURE__ */ jsxs4(
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
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var isSelectionAtTopLevel = (editor) => {
  const { selection } = editor;
  if (!selection) return false;
  const anchorPathDepth = selection.anchor.path.length;
  const focusPathDepth = selection.focus.path.length;
  return anchorPathDepth === 2 && focusPathDepth === 2;
};
var BlockWithPlus = ({ children, element }) => {
  const isSelected = useSelected();
  const isReadOnly = useReadOnly();
  const editor = useEditorRef2();
  const path = usePath();
  const isNodeType = (keys) => isType(editor, element, keys);
  const isInColumn = path.length === 3;
  const [count, setCount] = useState3(0);
  useEffect2(() => {
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
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: "relative group",
      children: [
        isActive && /* @__PURE__ */ jsx7(Toolbar, { className: cn(
          "absolute -left-16 -mt-2 z-10",
          isNodeType(HEADING_KEYS2.h1) && "pb-1 text-[1.875em]",
          isNodeType(HEADING_KEYS2.h2) && "pb-1 text-[1.5em]",
          isNodeType(HEADING_KEYS2.h3) && "pt-[2px] pb-1 text-[1.25em]",
          isNodeType([HEADING_KEYS2.h4, HEADING_KEYS2.h5]) && "pt-1 pb-0 text-[1.1em]",
          isNodeType(HEADING_KEYS2.h6) && "pb-0",
          isNodeType(ParagraphPlugin2.key) && "pt-1 pb-0",
          isNodeType(["ul", "ol"]) && "pb-0",
          isNodeType(BlockquotePlugin2.key) && "pb-0",
          isNodeType(CodeBlockPlugin3.key) && "pt-6 pb-0",
          isNodeType([
            ImagePlugin3.key,
            MediaEmbedPlugin3.key,
            ExcalidrawPlugin2.key,
            TogglePlugin2.key,
            ColumnPlugin2.key
          ]) && "py-0",
          isNodeType([PlaceholderPlugin.key, TablePlugin3.key]) && "pt-3 pb-0",
          isInColumn && "mt-2 h-4 pt-0"
        ), children: /* @__PURE__ */ jsx7(ToolbarGroup, { children: /* @__PURE__ */ jsx7(InsertDropdownMenu, { button: /* @__PURE__ */ jsx7(Button, { variant: "outline", size: "icon", className: "rounded-full bg-white z-10 cursor-pointer", children: /* @__PURE__ */ jsx7(Plus, { className: "size-4" }) }) }) }) }),
        children
      ]
    }
  );
};

// src/components/editor/core/plate-editor.tsx
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Plate as Plate3 } from "@udecode/plate/react";

// src/components/editor/ui/editor.tsx
import * as React4 from "react";
import { cva as cva3 } from "class-variance-authority";
import {
  PlateContainer,
  PlateContent
} from "@udecode/plate/react";
import { jsx as jsx8 } from "react/jsx-runtime";
var editorContainerVariants = cva3(
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
  return /* @__PURE__ */ jsx8(
    PlateContainer,
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
var editorVariants = cva3(
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
    return /* @__PURE__ */ jsx8(
      PlateContent,
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
import * as React5 from "react";
import {
  Check,
  ChevronsUpDown,
  ExternalLinkIcon,
  Eye,
  EyeOff,
  Settings,
  Wand2Icon
} from "lucide-react";
import { CopilotPlugin } from "@udecode/plate-ai/react";
import { useEditorPlugin } from "@udecode/plate/react";

// src/components/editor/ui/command.tsx
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";

// src/components/editor/ui/dialog.tsx
import { XIcon } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx9(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx9(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx9(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx9(
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
  return /* @__PURE__ */ jsxs6(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx9(DialogOverlay, {}),
    /* @__PURE__ */ jsxs6(
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
          /* @__PURE__ */ jsxs6(DialogPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ jsx9(XIcon, {}),
            /* @__PURE__ */ jsx9("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
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
  return /* @__PURE__ */ jsx9(
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
  return /* @__PURE__ */ jsx9(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/components/editor/ui/command.tsx
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx10(
    CommandPrimitive,
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
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ jsx10(SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ jsx10(
          CommandPrimitive.Input,
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
  return /* @__PURE__ */ jsx10(
    CommandPrimitive.List,
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
  return /* @__PURE__ */ jsx10(
    CommandPrimitive.Empty,
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
  return /* @__PURE__ */ jsx10(
    CommandPrimitive.Group,
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
  return /* @__PURE__ */ jsx10(
    CommandPrimitive.Item,
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
import { jsx as jsx11 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx11(
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
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsx as jsx12 } from "react/jsx-runtime";
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsx12(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx12(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx12(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx12(
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
  return /* @__PURE__ */ jsx12(PopoverPrimitive.Anchor, { "data-slot": "popover-anchor", ...props });
}

// src/components/editor/core/settings.tsx
import { jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx13(SettingsContext.Provider, { value: { keys, model, setKey, setModel }, children });
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
  const { getOptions, setOption } = useEditorPlugin(CopilotPlugin);
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
  const renderApiKeyInput = (service, label) => /* @__PURE__ */ jsxs8("div", { className: "group relative", children: [
    /* @__PURE__ */ jsxs8("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx13(
        "label",
        {
          className: "absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground",
          htmlFor: label,
          children: /* @__PURE__ */ jsx13("span", { className: "inline-flex bg-background px-2", children: label })
        }
      ),
      /* @__PURE__ */ jsx13(
        Button,
        {
          asChild: true,
          size: "icon",
          variant: "ghost",
          className: "absolute top-0 right-[28px] h-full",
          children: /* @__PURE__ */ jsxs8(
            "a",
            {
              className: "flex items-center",
              href: service === "openai" ? "https://platform.openai.com/api-keys" : "https://uploadthing.com/dashboard",
              rel: "noopener noreferrer",
              target: "_blank",
              children: [
                /* @__PURE__ */ jsx13(ExternalLinkIcon, { className: "size-4" }),
                /* @__PURE__ */ jsxs8("span", { className: "sr-only", children: [
                  "Get ",
                  label
                ] })
              ]
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsx13(
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
    /* @__PURE__ */ jsxs8(
      Button,
      {
        size: "icon",
        variant: "ghost",
        className: "absolute top-0 right-0 h-full",
        onClick: () => toggleKeyVisibility(service),
        type: "button",
        children: [
          showKey[service] ? /* @__PURE__ */ jsx13(EyeOff, { className: "size-4" }) : /* @__PURE__ */ jsx13(Eye, { className: "size-4" }),
          /* @__PURE__ */ jsxs8("span", { className: "sr-only", children: [
            showKey[service] ? "Hide" : "Show",
            " ",
            label
          ] })
        ]
      }
    )
  ] });
  return /* @__PURE__ */ jsxs8(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx13(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx13(
      Button,
      {
        size: "icon",
        variant: "default",
        className: cn(
          "group fixed right-4 bottom-4 z-50 size-10 overflow-hidden",
          "rounded-full shadow-md hover:shadow-lg"
        ),
        "data-block-hide": true,
        children: /* @__PURE__ */ jsx13(Settings, { className: "size-4" })
      }
    ) }),
    /* @__PURE__ */ jsxs8(DialogContent, { children: [
      /* @__PURE__ */ jsxs8(DialogHeader, { children: [
        /* @__PURE__ */ jsx13(DialogTitle, { className: "text-xl", children: "Settings" }),
        /* @__PURE__ */ jsx13(DialogDescription, { children: "Configure your API keys and preferences." })
      ] }),
      /* @__PURE__ */ jsxs8("form", { className: "space-y-10", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs8("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx13("div", { className: "size-8 rounded-full bg-purple-100 p-2 dark:bg-purple-900", children: /* @__PURE__ */ jsx13(Wand2Icon, { className: "size-4 text-purple-600 dark:text-purple-400" }) }),
            /* @__PURE__ */ jsx13("h4", { className: "font-semibold", children: "AI" })
          ] }),
          /* @__PURE__ */ jsxs8("div", { className: "space-y-4", children: [
            renderApiKeyInput("openai", "OpenAI API key"),
            /* @__PURE__ */ jsxs8("div", { className: "group relative", children: [
              /* @__PURE__ */ jsx13(
                "label",
                {
                  className: "absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 text-xs font-medium text-foreground group-has-disabled:opacity-50",
                  htmlFor: "select-model",
                  children: "Model"
                }
              ),
              /* @__PURE__ */ jsxs8(Popover, { open: openModel, onOpenChange: setOpenModel, children: [
                /* @__PURE__ */ jsx13(PopoverTrigger, { id: "select-model", asChild: true, children: /* @__PURE__ */ jsxs8(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "w-full justify-between",
                    "aria-expanded": openModel,
                    role: "combobox",
                    children: [
                      /* @__PURE__ */ jsx13("code", { children: model.label }),
                      /* @__PURE__ */ jsx13(ChevronsUpDown, { className: "ml-2 size-4 shrink-0 opacity-50" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsx13(PopoverContent, { className: "w-full p-0", children: /* @__PURE__ */ jsxs8(Command, { children: [
                  /* @__PURE__ */ jsx13(CommandInput, { placeholder: "Search model..." }),
                  /* @__PURE__ */ jsx13(CommandEmpty, { children: "No model found." }),
                  /* @__PURE__ */ jsx13(CommandList, { children: /* @__PURE__ */ jsx13(CommandGroup, { children: models.map((m) => /* @__PURE__ */ jsxs8(
                    CommandItem,
                    {
                      value: m.value,
                      onSelect: () => {
                        setModel(m);
                        setOpenModel(false);
                      },
                      children: [
                        /* @__PURE__ */ jsx13(
                          Check,
                          {
                            className: cn(
                              "mr-2 size-4",
                              model.value === m.value ? "opacity-100" : "opacity-0"
                            )
                          }
                        ),
                        /* @__PURE__ */ jsx13("code", { children: m.label })
                      ]
                    },
                    m.value
                  )) }) })
                ] }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx13(Button, { size: "lg", className: "w-full", type: "submit", children: "Save changes" })
      ] }),
      /* @__PURE__ */ jsx13("p", { className: "text-sm text-muted-foreground", children: "Not stored anywhere. Used only for current session requests." })
    ] })
  ] });
}

// src/components/editor/core/use-create-editor.ts
import { withProps as withProps4 } from "@udecode/cn";
import { AIPlugin as AIPlugin4 } from "@udecode/plate-ai/react";
import {
  BoldPlugin as BoldPlugin5,
  CodePlugin as CodePlugin5,
  ItalicPlugin as ItalicPlugin5,
  StrikethroughPlugin as StrikethroughPlugin5,
  SubscriptPlugin as SubscriptPlugin3,
  SuperscriptPlugin as SuperscriptPlugin3,
  UnderlinePlugin as UnderlinePlugin5
} from "@udecode/plate-basic-marks/react";
import { BlockquotePlugin as BlockquotePlugin13 } from "@udecode/plate-block-quote/react";
import { CalloutPlugin as CalloutPlugin7 } from "@udecode/plate-callout/react";
import {
  CodeBlockPlugin as CodeBlockPlugin14,
  CodeLinePlugin,
  CodeSyntaxPlugin
} from "@udecode/plate-code-block/react";
import { CommentsPlugin as CommentsPlugin5 } from "@udecode/plate-comments/react";
import { DatePlugin as DatePlugin6 } from "@udecode/plate-date/react";
import { EmojiInputPlugin as EmojiInputPlugin2 } from "@udecode/plate-emoji/react";
import { ExcalidrawPlugin as ExcalidrawPlugin4 } from "@udecode/plate-excalidraw/react";
import { HEADING_KEYS as HEADING_KEYS14 } from "@udecode/plate-heading";
import { TocPlugin as TocPlugin6 } from "@udecode/plate-heading/react";
import { HighlightPlugin as HighlightPlugin4 } from "@udecode/plate-highlight/react";
import { HorizontalRulePlugin as HorizontalRulePlugin6 } from "@udecode/plate-horizontal-rule/react";
import { KbdPlugin as KbdPlugin3 } from "@udecode/plate-kbd/react";
import {
  ColumnItemPlugin as ColumnItemPlugin3,
  ColumnPlugin as ColumnPlugin6
} from "@udecode/plate-layout/react";
import { LinkPlugin as LinkPlugin6 } from "@udecode/plate-link/react";
import {
  EquationPlugin as EquationPlugin6,
  InlineEquationPlugin as InlineEquationPlugin6
} from "@udecode/plate-math/react";
import {
  AudioPlugin as AudioPlugin8,
  FilePlugin as FilePlugin8,
  ImagePlugin as ImagePlugin13,
  MediaEmbedPlugin as MediaEmbedPlugin10,
  PlaceholderPlugin as PlaceholderPlugin8,
  VideoPlugin as VideoPlugin8
} from "@udecode/plate-media/react";
import {
  MentionInputPlugin as MentionInputPlugin2,
  MentionPlugin as MentionPlugin3
} from "@udecode/plate-mention/react";
import { SlashInputPlugin } from "@udecode/plate-slash-command/react";
import { SuggestionPlugin as SuggestionPlugin8 } from "@udecode/plate-suggestion/react";
import {
  TableCellHeaderPlugin as TableCellHeaderPlugin2,
  TableCellPlugin as TableCellPlugin4,
  TablePlugin as TablePlugin11,
  TableRowPlugin as TableRowPlugin4
} from "@udecode/plate-table/react";
import { TogglePlugin as TogglePlugin10 } from "@udecode/plate-toggle/react";
import {
  ParagraphPlugin as ParagraphPlugin14,
  PlateLeaf as PlateLeaf8,
  usePlateEditor as usePlateEditor2
} from "@udecode/plate/react";

// src/components/editor/plugins/copilot-plugins.tsx
import { faker } from "@faker-js/faker";
import { CopilotPlugin as CopilotPlugin3 } from "@udecode/plate-ai/react";
import {
  serializeMd,
  stripMarkdown
} from "@udecode/plate-markdown";

// src/components/editor/ui/ghost-text.tsx
import { CopilotPlugin as CopilotPlugin2 } from "@udecode/plate-ai/react";
import {
  useElement,
  usePluginOption
} from "@udecode/plate/react";
import { jsx as jsx14 } from "react/jsx-runtime";
var GhostText = () => {
  const element = useElement();
  const isSuggested = usePluginOption(
    CopilotPlugin2,
    "isSuggested",
    element.id
  );
  if (!isSuggested) return null;
  return /* @__PURE__ */ jsx14(GhostTextContent, {});
};
function GhostTextContent() {
  const suggestionText = usePluginOption(CopilotPlugin2, "suggestionText");
  return /* @__PURE__ */ jsx14(
    "span",
    {
      className: "pointer-events-none text-muted-foreground/70 max-sm:hidden",
      contentEditable: false,
      children: suggestionText && suggestionText
    }
  );
}

// src/components/editor/plugins/markdown-plugin.tsx
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import {
  MarkdownPlugin,
  remarkMdx,
  remarkMention
} from "@udecode/plate-markdown";
import { SuggestionPlugin as SuggestionPlugin2 } from "@udecode/plate-suggestion/react";
var markdownPlugin = MarkdownPlugin.configure({
  options: {
    disallowedNodes: [SuggestionPlugin2.key],
    remarkPlugins: [remarkMath, remarkGfm, remarkMdx, remarkMention]
  }
});

// src/components/editor/plugins/copilot-plugins.tsx
var copilotPlugins = [
  markdownPlugin,
  CopilotPlugin3.configure(({ api }) => ({
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
            text: stripMarkdown(faker.lorem.sentence())
          });
        },
        onFinish: (_, completion) => {
          if (completion === "0") return;
          api.copilot.setBlockSuggestion({
            text: stripMarkdown(completion)
          });
        }
      },
      debounceDelay: 500,
      renderGhostText: GhostText,
      getPrompt: ({ editor }) => {
        const contextEntry = editor.api.block({ highest: true });
        if (!contextEntry) return "";
        const prompt = serializeMd(editor, {
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
import emojiMartData from "@emoji-mart/data";
import { CalloutPlugin as CalloutPlugin5 } from "@udecode/plate-callout/react";
import { CodeBlockPlugin as CodeBlockPlugin11 } from "@udecode/plate-code-block/react";
import { DatePlugin as DatePlugin4 } from "@udecode/plate-date/react";
import { DocxPlugin } from "@udecode/plate-docx";
import { EmojiPlugin as EmojiPlugin2 } from "@udecode/plate-emoji/react";
import {
  FontBackgroundColorPlugin,
  FontColorPlugin,
  FontSizePlugin
} from "@udecode/plate-font/react";
import { HighlightPlugin as HighlightPlugin2 } from "@udecode/plate-highlight/react";
import { HorizontalRulePlugin as HorizontalRulePlugin5 } from "@udecode/plate-horizontal-rule/react";
import { JuicePlugin } from "@udecode/plate-juice";
import { KbdPlugin } from "@udecode/plate-kbd/react";
import { ColumnPlugin as ColumnPlugin5 } from "@udecode/plate-layout/react";
import { SlashPlugin } from "@udecode/plate-slash-command/react";
import { TogglePlugin as TogglePlugin7 } from "@udecode/plate-toggle/react";
import { TrailingBlockPlugin } from "@udecode/plate-trailing-block";

// src/components/editor/plugins/ai-plugins.tsx
import { PathApi as PathApi2 } from "@udecode/plate";
import {
  streamInsertChunk,
  withAIBatch
} from "@udecode/plate-ai";
import {
  AIChatPlugin as AIChatPlugin5,
  AIPlugin as AIPlugin2,
  useChatChunk
} from "@udecode/plate-ai/react";
import { usePluginOption as usePluginOption6 } from "@udecode/plate/react";

// src/components/editor/ui/ai-loading-bar.tsx
import { Pause } from "lucide-react";
import { AIChatPlugin } from "@udecode/plate-ai/react";
import {
  useEditorPlugin as useEditorPlugin2,
  usePluginOption as usePluginOption2
} from "@udecode/plate/react";
import { jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
var AILoadingBar = () => {
  const chat = usePluginOption2(AIChatPlugin, "chat");
  const mode = usePluginOption2(AIChatPlugin, "mode");
  const { status } = chat;
  const { api } = useEditorPlugin2(AIChatPlugin);
  const isLoading = status === "streaming" || status === "submitted";
  const visible = isLoading && mode === "insert";
  if (!visible) return null;
  return /* @__PURE__ */ jsxs9(
    "div",
    {
      className: cn(
        "absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-md border border-border bg-muted px-3 py-1.5 text-sm text-muted-foreground shadow-md transition-all duration-300"
      ),
      children: [
        /* @__PURE__ */ jsx15("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" }),
        /* @__PURE__ */ jsx15("span", { children: status === "submitted" ? "Thinking..." : "Writing..." }),
        /* @__PURE__ */ jsxs9(
          Button,
          {
            size: "sm",
            variant: "ghost",
            className: "flex items-center gap-1 text-xs",
            onClick: () => api.aiChat.stop(),
            children: [
              /* @__PURE__ */ jsx15(Pause, { className: "h-4 w-4" }),
              "Stop",
              /* @__PURE__ */ jsx15("kbd", { className: "ml-1 rounded bg-border px-1 font-mono text-[10px] text-muted-foreground shadow-sm", children: "Esc" })
            ]
          }
        )
      ]
    }
  );
};

// src/components/editor/ui/ai-menu.tsx
import * as React10 from "react";
import { Command as CommandPrimitive2 } from "cmdk";
import { Loader2Icon } from "lucide-react";
import {
  isHotkey
} from "@udecode/plate";
import {
  AIChatPlugin as AIChatPlugin3,
  useEditorChat,
  useLastAssistantMessage
} from "@udecode/plate-ai/react";
import {
  BlockSelectionPlugin,
  useIsSelecting as useIsSelecting2
} from "@udecode/plate-selection/react";
import {
  useEditorPlugin as useEditorPlugin3,
  useHotkeys,
  usePluginOption as usePluginOption4
} from "@udecode/plate/react";

// src/components/editor/core/use-chat.ts
import * as React6 from "react";
import { useChat as useBaseChat } from "@ai-sdk/react";
import { faker as faker2 } from "@faker-js/faker";

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
  const chat = useBaseChat({
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
var delay = faker2.number.int({ max: 20, min: 5 });
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
    { delay: faker2.number.int({ max: 100, min: 30 }), texts: "readability." },
    { delay, texts: "\n\n" },
    { delay, texts: "Add " },
    {
      delay,
      texts: "[links](https://example.com)"
    },
    { delay: faker2.number.int({ max: 100, min: 30 }), texts: " to " },
    { delay: faker2.number.int({ max: 100, min: 30 }), texts: "external " },
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
import * as React8 from "react";
import {
  all,
  createLowlight
} from "lowlight";
import { withProps } from "@udecode/cn";
import {
  BaseParagraphPlugin,
  SlateLeaf as SlateLeaf4
} from "@udecode/plate";
import { useAIChatEditor } from "@udecode/plate-ai/react";
import {
  BaseBoldPlugin,
  BaseCodePlugin,
  BaseItalicPlugin,
  BaseStrikethroughPlugin,
  BaseSubscriptPlugin,
  BaseSuperscriptPlugin,
  BaseUnderlinePlugin
} from "@udecode/plate-basic-marks";
import { BaseBlockquotePlugin } from "@udecode/plate-block-quote";
import { BaseCalloutPlugin } from "@udecode/plate-callout";
import {
  BaseCodeBlockPlugin,
  BaseCodeLinePlugin,
  BaseCodeSyntaxPlugin
} from "@udecode/plate-code-block";
import { BaseDatePlugin } from "@udecode/plate-date";
import {
  BaseFontBackgroundColorPlugin,
  BaseFontColorPlugin,
  BaseFontFamilyPlugin,
  BaseFontSizePlugin,
  BaseFontWeightPlugin
} from "@udecode/plate-font";
import {
  BaseHeadingPlugin,
  BaseTocPlugin as BaseTocPlugin2,
  HEADING_KEYS as HEADING_KEYS4
} from "@udecode/plate-heading";
import { BaseHighlightPlugin } from "@udecode/plate-highlight";
import { BaseHorizontalRulePlugin } from "@udecode/plate-horizontal-rule";
import { BaseIndentPlugin } from "@udecode/plate-indent";
import { BaseIndentListPlugin } from "@udecode/plate-indent-list";
import { BaseKbdPlugin } from "@udecode/plate-kbd";
import {
  BaseColumnItemPlugin,
  BaseColumnPlugin
} from "@udecode/plate-layout";
import { BaseLinkPlugin } from "@udecode/plate-link";
import {
  BaseEquationPlugin,
  BaseInlineEquationPlugin
} from "@udecode/plate-math";
import {
  BaseAudioPlugin,
  BaseFilePlugin,
  BaseImagePlugin,
  BaseVideoPlugin
} from "@udecode/plate-media";
import { BaseMentionPlugin } from "@udecode/plate-mention";
import {
  BaseTableCellHeaderPlugin,
  BaseTableCellPlugin,
  BaseTablePlugin as BaseTablePlugin3,
  BaseTableRowPlugin
} from "@udecode/plate-table";
import { usePlateEditor } from "@udecode/plate/react";

// src/components/editor/ui/indent-todo-marker-static.tsx
import { CheckIcon as CheckIcon2 } from "lucide-react";
import { jsx as jsx16 } from "react/jsx-runtime";
function TodoMarkerStatic(props) {
  return /* @__PURE__ */ jsx16("div", { contentEditable: false, children: /* @__PURE__ */ jsx16(
    CheckboxStatic,
    {
      className: "pointer-events-none absolute top-1 -left-6",
      checked: props.element.checked
    }
  ) });
}
function TodoLiStatic(props) {
  return /* @__PURE__ */ jsx16(
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
  return /* @__PURE__ */ jsx16(
    "button",
    {
      className: cn(
        "peer size-4 shrink-0 rounded-sm border border-primary bg-background ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        props.className
      ),
      style: props.style,
      "data-state": props.checked ? "checked" : "unchecked",
      type: "button",
      children: /* @__PURE__ */ jsx16("div", { className: cn("flex items-center justify-center text-current"), children: props.checked && /* @__PURE__ */ jsx16(CheckIcon2, { className: "size-4" }) })
    }
  );
}

// src/components/editor/ui/blockquote-element-static.tsx
import { SlateElement } from "@udecode/plate";
import { jsx as jsx17 } from "react/jsx-runtime";
function BlockquoteElementStatic(props) {
  return /* @__PURE__ */ jsx17(
    SlateElement,
    {
      as: "blockquote",
      className: "my-1 border-l-2 pl-6 italic",
      ...props
    }
  );
}

// src/components/editor/ui/callout-element-static.tsx
import { cn as cn2 } from "@udecode/cn";
import { SlateElement as SlateElement2 } from "@udecode/plate";
import { jsx as jsx18, jsxs as jsxs10 } from "react/jsx-runtime";
function CalloutElementStatic({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx18(
    SlateElement2,
    {
      className: cn2("my-1 flex rounded-sm bg-muted p-4 pl-3", className),
      style: {
        backgroundColor: props.element.backgroundColor
      },
      ...props,
      children: /* @__PURE__ */ jsxs10("div", { className: "flex w-full gap-2 rounded-md", children: [
        /* @__PURE__ */ jsx18(
          "div",
          {
            className: "size-6 text-[18px] select-none",
            style: {
              fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols'
            },
            children: /* @__PURE__ */ jsx18("span", { "data-plate-prevent-deserialization": true, children: props.element.icon || "\u{1F4A1}" })
          }
        ),
        /* @__PURE__ */ jsx18("div", { className: "w-full", children })
      ] })
    }
  );
}

// src/components/editor/ui/code-block-element-static.tsx
import { SlateElement as SlateElement3 } from "@udecode/plate";
import { jsx as jsx19 } from "react/jsx-runtime";
function CodeBlockElementStatic(props) {
  return /* @__PURE__ */ jsx19(
    SlateElement3,
    {
      className: "py-1 **:[.hljs-addition]:bg-[#f0fff4] **:[.hljs-addition]:text-[#22863a] **:[.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable]:text-[#005cc5] **:[.hljs-built_in,.hljs-symbol]:text-[#e36209] **:[.hljs-bullet]:text-[#735c0f] **:[.hljs-comment,.hljs-code,.hljs-formula]:text-[#6a737d] **:[.hljs-deletion]:bg-[#ffeef0] **:[.hljs-deletion]:text-[#b31d28] **:[.hljs-emphasis]:italic **:[.hljs-keyword,.hljs-doctag,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_]:text-[#d73a49] **:[.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo]:text-[#22863a] **:[.hljs-regexp,.hljs-string,.hljs-meta_.hljs-string]:text-[#032f62] **:[.hljs-section]:font-bold **:[.hljs-section]:text-[#005cc5] **:[.hljs-strong]:font-bold **:[.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_]:text-[#6f42c1]",
      ...props,
      children: /* @__PURE__ */ jsx19("div", { className: "relative rounded-md bg-muted/50", children: /* @__PURE__ */ jsx19("pre", { className: "overflow-x-auto p-8 pr-4 font-mono text-sm leading-[normal] [tab-size:2] print:break-inside-avoid", children: /* @__PURE__ */ jsx19("code", { children: props.children }) }) })
    }
  );
}

// src/components/editor/ui/code-leaf-static.tsx
import { SlateLeaf } from "@udecode/plate";
import { jsx as jsx20 } from "react/jsx-runtime";
function CodeLeafStatic(props) {
  return /* @__PURE__ */ jsx20(
    SlateLeaf,
    {
      ...props,
      as: "code",
      className: "rounded-md bg-muted px-[0.3em] py-[0.2em] font-mono text-sm whitespace-pre-wrap",
      children: props.children
    }
  );
}

// src/components/editor/ui/code-line-element-static.tsx
import { SlateElement as SlateElement4 } from "@udecode/plate";
import { jsx as jsx21 } from "react/jsx-runtime";
function CodeLineElementStatic(props) {
  return /* @__PURE__ */ jsx21(SlateElement4, { ...props });
}

// src/components/editor/ui/code-syntax-leaf-static.tsx
import { SlateLeaf as SlateLeaf2 } from "@udecode/plate";
import { jsx as jsx22 } from "react/jsx-runtime";
function CodeSyntaxLeafStatic(props) {
  const tokenClassName = props.leaf.className;
  return /* @__PURE__ */ jsx22(SlateLeaf2, { className: tokenClassName, ...props });
}

// src/components/editor/ui/column-element-static.tsx
import { SlateElement as SlateElement5 } from "@udecode/plate";
import { jsx as jsx23 } from "react/jsx-runtime";
function ColumnElementStatic(props) {
  const { width } = props.element;
  return /* @__PURE__ */ jsx23("div", { className: "group/column relative", style: { width: width ?? "100%" }, children: /* @__PURE__ */ jsx23(
    SlateElement5,
    {
      className: "h-full px-2 pt-2 group-first/column:pl-0 group-last/column:pr-0",
      ...props,
      children: /* @__PURE__ */ jsx23("div", { className: "relative h-full border border-transparent p-1.5", children: props.children })
    }
  ) });
}

// src/components/editor/ui/column-group-element-static.tsx
import { SlateElement as SlateElement6 } from "@udecode/plate";
import { jsx as jsx24 } from "react/jsx-runtime";
function ColumnGroupElementStatic(props) {
  return /* @__PURE__ */ jsx24(SlateElement6, { className: "mb-2", ...props, children: /* @__PURE__ */ jsx24("div", { className: "flex size-full rounded", children: props.children }) });
}

// src/components/editor/ui/date-element.tsx
import {
  PlateElement,
  useReadOnly as useReadOnly2
} from "@udecode/plate/react";

// src/components/editor/ui/calendar.tsx
import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { DayPicker } from "react-day-picker";
import { jsx as jsx25 } from "react/jsx-runtime";
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return /* @__PURE__ */ jsx25(
    DayPicker,
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
        IconLeft: ({ className: className2, ...props2 }) => /* @__PURE__ */ jsx25(ChevronLeft, { className: cn("size-4", className2), ...props2 }),
        IconRight: ({ className: className2, ...props2 }) => /* @__PURE__ */ jsx25(ChevronRight, { className: cn("size-4", className2), ...props2 })
      },
      ...props
    }
  );
}

// src/components/editor/ui/date-element.tsx
import { jsx as jsx26, jsxs as jsxs11 } from "react/jsx-runtime";
function DateElement(props) {
  const { editor, element } = props;
  const readOnly = useReadOnly2();
  const trigger = /* @__PURE__ */ jsx26(
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
      })() : /* @__PURE__ */ jsx26("span", { children: "Pick a date" })
    }
  );
  if (readOnly) {
    return trigger;
  }
  return /* @__PURE__ */ jsx26(BlockWithPlus, { element, children: /* @__PURE__ */ jsxs11(
    PlateElement,
    {
      ...props,
      className: "inline-block",
      attributes: {
        ...props.attributes,
        contentEditable: false
      },
      children: [
        /* @__PURE__ */ jsxs11(Popover, { children: [
          /* @__PURE__ */ jsx26(PopoverTrigger, { asChild: true, children: trigger }),
          /* @__PURE__ */ jsx26(PopoverContent, { className: "w-auto p-0", children: /* @__PURE__ */ jsx26(
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
import { cva as cva4 } from "class-variance-authority";
import {
  PlateStatic
} from "@udecode/plate";
import { jsx as jsx27 } from "react/jsx-runtime";
var editorVariants2 = cva4(
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
  return /* @__PURE__ */ jsx27(
    PlateStatic,
    {
      className: cn(editorVariants2({ variant }), className),
      ...props
    }
  );
}

// src/components/editor/ui/equation-element-static.tsx
import { RadicalIcon as RadicalIcon2 } from "lucide-react";
import {
  SlateElement as SlateElement7
} from "@udecode/plate";
import {
  getEquationHtml
} from "@udecode/plate-math";
import { jsx as jsx28, jsxs as jsxs12 } from "react/jsx-runtime";
function EquationElementStatic(props) {
  const { element } = props;
  const html = getEquationHtml({
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
  return /* @__PURE__ */ jsxs12(SlateElement7, { className: "my-1", ...props, children: [
    /* @__PURE__ */ jsx28(
      "div",
      {
        className: cn(
          "group flex items-center justify-center rounded-sm select-none hover:bg-primary/10 data-[selected=true]:bg-primary/10",
          element.texExpression.length === 0 ? "bg-muted p-3 pr-9" : "px-2 py-1"
        ),
        children: element.texExpression.length > 0 ? /* @__PURE__ */ jsx28(
          "span",
          {
            dangerouslySetInnerHTML: {
              __html: html
            }
          }
        ) : /* @__PURE__ */ jsxs12("div", { className: "flex h-7 w-full items-center gap-2 text-sm whitespace-nowrap text-muted-foreground", children: [
          /* @__PURE__ */ jsx28(RadicalIcon2, { className: "size-6 text-muted-foreground/80" }),
          /* @__PURE__ */ jsx28("div", { children: "Add a Tex equation" })
        ] })
      }
    ),
    props.children
  ] });
}

// src/components/editor/ui/heading-element-static.tsx
import { SlateElement as SlateElement8 } from "@udecode/plate";
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx29 } from "react/jsx-runtime";
var headingVariants = cva5("relative mb-1", {
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
  return /* @__PURE__ */ jsx29(
    SlateElement8,
    {
      as: variant,
      className: headingVariants({ variant }),
      ...props,
      children: props.children
    }
  );
}

// src/components/editor/ui/highlight-leaf-static.tsx
import { SlateLeaf as SlateLeaf3 } from "@udecode/plate";
import { jsx as jsx30 } from "react/jsx-runtime";
function HighlightLeafStatic(props) {
  return /* @__PURE__ */ jsx30(SlateLeaf3, { ...props, as: "mark", className: "bg-highlight/30 text-inherit", children: props.children });
}

// src/components/editor/ui/hr-element-static.tsx
import { SlateElement as SlateElement9 } from "@udecode/plate";
import { jsx as jsx31, jsxs as jsxs13 } from "react/jsx-runtime";
function HrElementStatic(props) {
  return /* @__PURE__ */ jsxs13(SlateElement9, { ...props, children: [
    /* @__PURE__ */ jsx31("div", { className: "cursor-text py-6", contentEditable: false, children: /* @__PURE__ */ jsx31(
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
import {
  NodeApi,
  SlateElement as SlateElement10
} from "@udecode/plate";
import { jsx as jsx32, jsxs as jsxs14 } from "react/jsx-runtime";
function ImageElementStatic(props) {
  const { align = "center", caption, url, width } = props.element;
  return /* @__PURE__ */ jsxs14(SlateElement10, { ...props, className: "py-2.5", children: [
    /* @__PURE__ */ jsx32("figure", { className: "group relative m-0 inline-block", style: { width }, children: /* @__PURE__ */ jsxs14(
      "div",
      {
        className: "relative max-w-full min-w-[92px]",
        style: { textAlign: align },
        children: [
          /* @__PURE__ */ jsx32(
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
          caption && /* @__PURE__ */ jsx32("figcaption", { className: "mx-auto mt-2 h-[24px] max-w-full", children: NodeApi.string(caption[0]) })
        ]
      }
    ) }),
    props.children
  ] });
}

// src/components/editor/ui/inline-equation-element-static.tsx
import { SlateElement as SlateElement11 } from "@udecode/plate";
import { getEquationHtml as getEquationHtml2 } from "@udecode/plate-math";
import { jsx as jsx33, jsxs as jsxs15 } from "react/jsx-runtime";
function InlineEquationElementStatic(props) {
  const html = getEquationHtml2({
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
  return /* @__PURE__ */ jsxs15(
    SlateElement11,
    {
      ...props,
      className: "inline-block rounded-sm select-none [&_.katex-display]:my-0",
      children: [
        /* @__PURE__ */ jsx33(
          "div",
          {
            className: cn(
              'after:absolute after:inset-0 after:-top-0.5 after:-left-1 after:z-1 after:h-[calc(100%)+4px] after:w-[calc(100%+8px)] after:rounded-sm after:content-[""]',
              "h-6",
              props.element.texExpression.length === 0 && "text-muted-foreground after:bg-neutral-500/10"
            ),
            children: /* @__PURE__ */ jsx33(
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
import { PlateLeaf } from "@udecode/plate/react";
import { jsx as jsx34 } from "react/jsx-runtime";
function KbdLeaf(props) {
  return /* @__PURE__ */ jsx34(
    PlateLeaf,
    {
      ...props,
      as: "kbd",
      className: "rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-sm shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(248,_249,_250)_0px_1px_5px_0px_inset,_rgb(193,_200,_205)_0px_0px_0px_0.5px,_rgb(193,_200,_205)_0px_2px_1px_-1px,_rgb(193,_200,_205)_0px_1px_0px_0px] dark:shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(26,_29,_30)_0px_1px_5px_0px_inset,_rgb(76,_81,_85)_0px_0px_0px_0.5px,_rgb(76,_81,_85)_0px_2px_1px_-1px,_rgb(76,_81,_85)_0px_1px_0px_0px]",
      children: props.children
    }
  );
}

// src/components/editor/ui/link-element-static.tsx
import { SlateElement as SlateElement12 } from "@udecode/plate";
import { jsx as jsx35 } from "react/jsx-runtime";
function LinkElementStatic(props) {
  return /* @__PURE__ */ jsx35(
    SlateElement12,
    {
      ...props,
      as: "a",
      className: "font-medium text-primary underline decoration-primary underline-offset-4",
      children: props.children
    }
  );
}

// src/components/editor/ui/media-audio-element-static.tsx
import { SlateElement as SlateElement13 } from "@udecode/plate";
import { jsx as jsx36, jsxs as jsxs16 } from "react/jsx-runtime";
function MediaAudioElementStatic(props) {
  return /* @__PURE__ */ jsxs16(SlateElement13, { ...props, className: "mb-1", children: [
    /* @__PURE__ */ jsx36("figure", { className: "group relative cursor-default", children: /* @__PURE__ */ jsx36("div", { className: "h-16", children: /* @__PURE__ */ jsx36("audio", { className: "size-full", src: props.element.url, controls: true }) }) }),
    props.children
  ] });
}

// src/components/editor/ui/media-file-element-static.tsx
import { SlateElement as SlateElement14 } from "@udecode/plate";
import { FileUp } from "lucide-react";
import { jsx as jsx37, jsxs as jsxs17 } from "react/jsx-runtime";
function MediaFileElementStatic(props) {
  const { name, url } = props.element;
  return /* @__PURE__ */ jsxs17(SlateElement14, { className: "my-px rounded-sm", ...props, children: [
    /* @__PURE__ */ jsx37(
      "a",
      {
        className: "group relative m-0 flex cursor-pointer items-center rounded px-0.5 py-[3px] hover:bg-muted",
        contentEditable: false,
        download: name,
        href: url,
        rel: "noopener noreferrer",
        role: "button",
        target: "_blank",
        children: /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-1 p-1", children: [
          /* @__PURE__ */ jsx37(FileUp, { className: "size-5" }),
          /* @__PURE__ */ jsx37("div", { children: name })
        ] })
      }
    ),
    props.children
  ] });
}

// src/components/editor/ui/media-video-element-static.tsx
import { NodeApi as NodeApi2, SlateElement as SlateElement15 } from "@udecode/plate";
import { jsx as jsx38, jsxs as jsxs18 } from "react/jsx-runtime";
function MediaVideoElementStatic(props) {
  const { align = "center", caption, url, width } = props.element;
  return /* @__PURE__ */ jsxs18(SlateElement15, { className: "py-2.5", ...props, children: [
    /* @__PURE__ */ jsx38("div", { style: { textAlign: align }, children: /* @__PURE__ */ jsxs18(
      "figure",
      {
        className: "group relative m-0 inline-block cursor-default",
        style: { width },
        children: [
          /* @__PURE__ */ jsx38(
            "video",
            {
              className: "w-full max-w-full rounded-sm object-cover px-0",
              src: url,
              controls: true
            }
          ),
          caption && /* @__PURE__ */ jsx38("figcaption", { children: NodeApi2.string(caption[0]) })
        ]
      }
    ) }),
    props.children
  ] });
}

// src/components/editor/ui/mention-element-static.tsx
import * as React7 from "react";
import {
  IS_APPLE,
  SlateElement as SlateElement16
} from "@udecode/plate";
import { jsx as jsx39, jsxs as jsxs19 } from "react/jsx-runtime";
function MentionElementStatic(props) {
  const { prefix } = props;
  const element = props.element;
  return /* @__PURE__ */ jsx39(
    SlateElement16,
    {
      className: cn(
        "inline-block rounded-md bg-muted px-1.5 py-0.5 align-baseline text-sm font-medium",
        element.children[0].bold === true && "font-bold",
        element.children[0].italic === true && "italic",
        element.children[0].underline === true && "underline"
      ),
      "data-slate-value": element.value,
      ...props,
      children: IS_APPLE ? (
        // Mac OS IME https://github.com/ianstormtaylor/slate/issues/3490
        /* @__PURE__ */ jsxs19(React7.Fragment, { children: [
          props.children,
          prefix,
          element.value
        ] })
      ) : (
        // Others like Android https://github.com/ianstormtaylor/slate/pull/5360
        /* @__PURE__ */ jsxs19(React7.Fragment, { children: [
          prefix,
          element.value,
          props.children
        ] })
      )
    }
  );
}

// src/components/editor/ui/paragraph-element-static.tsx
import { SlateElement as SlateElement17 } from "@udecode/plate";
import { jsx as jsx40 } from "react/jsx-runtime";
function ParagraphElementStatic(props) {
  return /* @__PURE__ */ jsx40(SlateElement17, { ...props, className: cn("m-0 px-0 py-1"), children: props.children });
}

// src/components/editor/ui/table-cell-element-static.tsx
import { SlateElement as SlateElement18 } from "@udecode/plate";
import { BaseTablePlugin } from "@udecode/plate-table";
import { jsx as jsx41 } from "react/jsx-runtime";
function TableCellElementStatic({
  isHeader,
  ...props
}) {
  const { editor, element } = props;
  const { api } = editor.getPlugin(BaseTablePlugin);
  const { minHeight, width } = api.table.getCellSize({ element });
  const borders = api.table.getCellBorders({ element });
  return /* @__PURE__ */ jsx41(
    SlateElement18,
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
      children: /* @__PURE__ */ jsx41(
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
  return /* @__PURE__ */ jsx41(TableCellElementStatic, { ...props, isHeader: true });
}

// src/components/editor/ui/table-element-static.tsx
import { SlateElement as SlateElement19 } from "@udecode/plate";
import { BaseTablePlugin as BaseTablePlugin2 } from "@udecode/plate-table";
import { jsx as jsx42 } from "react/jsx-runtime";
function TableElementStatic({
  children,
  ...props
}) {
  const { disableMarginLeft } = props.editor.getOptions(BaseTablePlugin2);
  const marginLeft = disableMarginLeft ? 0 : props.element.marginLeft;
  return /* @__PURE__ */ jsx42(
    SlateElement19,
    {
      ...props,
      className: "overflow-x-auto py-5",
      style: { paddingLeft: marginLeft },
      children: /* @__PURE__ */ jsx42("div", { className: "group/table relative w-fit", children: /* @__PURE__ */ jsx42("table", { className: "mr-0 ml-px table h-px table-fixed border-collapse", children: /* @__PURE__ */ jsx42("tbody", { className: "min-w-full", children }) }) })
    }
  );
}

// src/components/editor/ui/table-row-element-static.tsx
import { SlateElement as SlateElement20 } from "@udecode/plate";
import { jsx as jsx43 } from "react/jsx-runtime";
function TableRowElementStatic(props) {
  return /* @__PURE__ */ jsx43(SlateElement20, { ...props, as: "tr", className: "h-full", children: props.children });
}

// src/components/editor/ui/toc-element-static.tsx
import { cva as cva6 } from "class-variance-authority";
import {
  NodeApi as NodeApi3,
  SlateElement as SlateElement21
} from "@udecode/plate";
import {
  BaseTocPlugin,
  HEADING_KEYS as HEADING_KEYS3,
  isHeading
} from "@udecode/plate-heading";
import { jsx as jsx44, jsxs as jsxs20 } from "react/jsx-runtime";
var headingItemVariants = cva6(
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
  return /* @__PURE__ */ jsxs20(SlateElement21, { ...props, className: "mb-1 p-0", children: [
    /* @__PURE__ */ jsx44("div", { children: headingList.length > 0 ? headingList.map((item) => /* @__PURE__ */ jsx44(
      Button,
      {
        variant: "ghost",
        className: headingItemVariants({
          depth: item.depth
        }),
        children: item.title
      },
      item.title
    )) : /* @__PURE__ */ jsx44("div", { className: "text-sm text-gray-500", children: "Create a heading to display the table of contents." }) }),
    props.children
  ] });
}
var headingDepth = {
  [HEADING_KEYS3.h1]: 1,
  [HEADING_KEYS3.h2]: 2,
  [HEADING_KEYS3.h3]: 3,
  [HEADING_KEYS3.h4]: 4,
  [HEADING_KEYS3.h5]: 5,
  [HEADING_KEYS3.h6]: 6
};
var getHeadingList = (editor) => {
  if (!editor) return [];
  const options = editor.getOptions(BaseTocPlugin);
  if (options.queryHeading) {
    return options.queryHeading(editor);
  }
  const headingList = [];
  const values = editor.api.nodes({
    at: [],
    match: (n) => isHeading(n)
  });
  if (!values) return [];
  Array.from(values, ([node, path]) => {
    const { type } = node;
    const title = NodeApi3.string(node);
    const depth = headingDepth[type];
    const id = node.id;
    if (title) {
      headingList.push({ id, depth, path, title, type });
    }
  });
  return headingList;
};

// src/components/editor/ui/ai-chat-editor.tsx
import { jsx as jsx45 } from "react/jsx-runtime";
var components = {
  [BaseAudioPlugin.key]: MediaAudioElementStatic,
  [BaseBlockquotePlugin.key]: BlockquoteElementStatic,
  [BaseBoldPlugin.key]: withProps(SlateLeaf4, { as: "strong" }),
  [BaseCalloutPlugin.key]: CalloutElementStatic,
  [BaseCodeBlockPlugin.key]: CodeBlockElementStatic,
  [BaseCodeLinePlugin.key]: CodeLineElementStatic,
  [BaseCodePlugin.key]: CodeLeafStatic,
  [BaseCodeSyntaxPlugin.key]: CodeSyntaxLeafStatic,
  [BaseColumnItemPlugin.key]: ColumnElementStatic,
  [BaseColumnPlugin.key]: ColumnGroupElementStatic,
  [BaseDatePlugin.key]: DateElement,
  [BaseEquationPlugin.key]: EquationElementStatic,
  [BaseFilePlugin.key]: MediaFileElementStatic,
  [BaseHighlightPlugin.key]: HighlightLeafStatic,
  [BaseHorizontalRulePlugin.key]: HrElementStatic,
  [BaseImagePlugin.key]: ImageElementStatic,
  [BaseInlineEquationPlugin.key]: InlineEquationElementStatic,
  [BaseItalicPlugin.key]: withProps(SlateLeaf4, { as: "em" }),
  [BaseKbdPlugin.key]: KbdLeaf,
  [BaseLinkPlugin.key]: LinkElementStatic,
  [BaseMentionPlugin.key]: MentionElementStatic,
  [BaseParagraphPlugin.key]: ParagraphElementStatic,
  [BaseStrikethroughPlugin.key]: withProps(SlateLeaf4, { as: "s" }),
  [BaseSubscriptPlugin.key]: withProps(SlateLeaf4, { as: "sub" }),
  [BaseSuperscriptPlugin.key]: withProps(SlateLeaf4, { as: "sup" }),
  [BaseTableCellHeaderPlugin.key]: TableCellHeaderStaticElement,
  [BaseTableCellPlugin.key]: TableCellElementStatic,
  [BaseTablePlugin3.key]: TableElementStatic,
  [BaseTableRowPlugin.key]: TableRowElementStatic,
  [BaseTocPlugin2.key]: TocElementStatic,
  [BaseUnderlinePlugin.key]: withProps(SlateLeaf4, { as: "u" }),
  [BaseVideoPlugin.key]: MediaVideoElementStatic,
  [HEADING_KEYS4.h1]: withProps(HeadingElementStatic, { variant: "h1" }),
  [HEADING_KEYS4.h2]: withProps(HeadingElementStatic, { variant: "h2" }),
  [HEADING_KEYS4.h3]: withProps(HeadingElementStatic, { variant: "h3" })
  // [BaseCommentsPlugin.key]: CommentLeafStatic
  // [BaseTogglePlugin.key]: ToggleElementStatic
};
var lowlight = createLowlight(all);
var plugins = [
  BaseColumnItemPlugin,
  BaseColumnPlugin,
  BaseBlockquotePlugin,
  BaseSubscriptPlugin,
  BaseSuperscriptPlugin,
  BaseImagePlugin,
  BaseKbdPlugin,
  BaseBoldPlugin,
  BaseCodeBlockPlugin.configure({ options: { lowlight } }),
  BaseDatePlugin,
  BaseEquationPlugin,
  BaseInlineEquationPlugin,
  BaseCodePlugin,
  BaseItalicPlugin,
  BaseStrikethroughPlugin,
  BaseUnderlinePlugin,
  BaseFontColorPlugin,
  BaseFontSizePlugin,
  BaseFontFamilyPlugin,
  BaseFontWeightPlugin,
  BaseFontBackgroundColorPlugin,
  BaseHeadingPlugin,
  BaseHorizontalRulePlugin,
  BaseTablePlugin3,
  BaseTocPlugin2,
  BaseHighlightPlugin,
  BaseLinkPlugin,
  BaseMentionPlugin,
  BaseParagraphPlugin,
  BaseCalloutPlugin,
  BaseIndentPlugin.extend({
    inject: {
      targetPlugins: [BaseParagraphPlugin.key]
    }
  }),
  BaseIndentListPlugin.extend({
    inject: {
      targetPlugins: [BaseParagraphPlugin.key]
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
  const aiEditor = usePlateEditor({
    plugins
  });
  useAIChatEditor(aiEditor, content);
  return /* @__PURE__ */ jsx45(EditorStatic, { variant: "aiChat", components, editor: aiEditor });
});

// src/components/editor/ui/ai-menu-items.tsx
import * as React9 from "react";
import {
  Album,
  BadgeHelp,
  BookOpenCheck,
  Check as Check2,
  CornerUpLeft,
  FeatherIcon,
  ListEnd,
  ListMinus,
  ListPlus,
  PenLine,
  SmileIcon,
  Wand,
  X
} from "lucide-react";
import {
  NodeApi as NodeApi4
} from "@udecode/plate";
import {
  AIChatPlugin as AIChatPlugin2,
  AIPlugin
} from "@udecode/plate-ai/react";
import { useIsSelecting } from "@udecode/plate-selection/react";
import {
  useEditorRef as useEditorRef3,
  usePluginOption as usePluginOption3
} from "@udecode/plate/react";
import { Fragment as Fragment3, jsx as jsx46, jsxs as jsxs21 } from "react/jsx-runtime";
var aiChatItems = {
  accept: {
    icon: /* @__PURE__ */ jsx46(Check2, {}),
    label: "Accept",
    value: "accept",
    onSelect: ({ editor }) => {
      editor.getTransforms(AIChatPlugin2).aiChat.accept();
      editor.tf.focus({ edge: "end" });
    }
  },
  continueWrite: {
    icon: /* @__PURE__ */ jsx46(PenLine, {}),
    label: "Continue writing",
    value: "continueWrite",
    onSelect: ({ editor }) => {
      const ancestorNode = editor.api.block({ highest: true });
      if (!ancestorNode) return;
      const isEmpty = NodeApi4.string(ancestorNode[0]).trim().length === 0;
      void editor.getApi(AIChatPlugin2).aiChat.submit({
        mode: "insert",
        prompt: isEmpty ? `<Document>
{editor}
</Document>
Start writing a new paragraph AFTER <Document> ONLY ONE SENTENCE` : "Continue writing AFTER <Block> ONLY ONE SENTENCE. DONT REPEAT THE TEXT."
      });
    }
  },
  discard: {
    icon: /* @__PURE__ */ jsx46(X, {}),
    label: "Discard",
    shortcut: "Escape",
    value: "discard",
    onSelect: ({ editor }) => {
      editor.getTransforms(AIPlugin).ai.undo();
      editor.getApi(AIChatPlugin2).aiChat.hide();
    }
  },
  emojify: {
    icon: /* @__PURE__ */ jsx46(SmileIcon, {}),
    label: "Emojify",
    value: "emojify",
    onSelect: ({ editor }) => {
      void editor.getApi(AIChatPlugin2).aiChat.submit({
        prompt: "Emojify"
      });
    }
  },
  explain: {
    icon: /* @__PURE__ */ jsx46(BadgeHelp, {}),
    label: "Explain",
    value: "explain",
    onSelect: ({ editor }) => {
      void editor.getApi(AIChatPlugin2).aiChat.submit({
        prompt: {
          default: "Explain {editor}",
          selecting: "Explain"
        }
      });
    }
  },
  fixSpelling: {
    icon: /* @__PURE__ */ jsx46(Check2, {}),
    label: "Fix spelling & grammar",
    value: "fixSpelling",
    onSelect: ({ editor }) => {
      void editor.getApi(AIChatPlugin2).aiChat.submit({
        prompt: "Fix spelling and grammar"
      });
    }
  },
  generateMarkdownSample: {
    icon: /* @__PURE__ */ jsx46(BookOpenCheck, {}),
    label: "Generate Markdown sample",
    value: "generateMarkdownSample",
    onSelect: ({ editor }) => {
      void editor.getApi(AIChatPlugin2).aiChat.submit({
        prompt: "Generate a markdown sample"
      });
    }
  },
  generateMdxSample: {
    icon: /* @__PURE__ */ jsx46(BookOpenCheck, {}),
    label: "Generate MDX sample",
    value: "generateMdxSample",
    onSelect: ({ editor }) => {
      void editor.getApi(AIChatPlugin2).aiChat.submit({
        prompt: "Generate a mdx sample"
      });
    }
  },
  improveWriting: {
    icon: /* @__PURE__ */ jsx46(Wand, {}),
    label: "Improve writing",
    value: "improveWriting",
    onSelect: ({ editor }) => {
      void editor.getApi(AIChatPlugin2).aiChat.submit({
        prompt: "Improve the writing"
      });
    }
  },
  insertBelow: {
    icon: /* @__PURE__ */ jsx46(ListEnd, {}),
    label: "Insert below",
    value: "insertBelow",
    onSelect: ({ aiEditor, editor }) => {
      void editor.getTransforms(AIChatPlugin2).aiChat.insertBelow(aiEditor);
    }
  },
  makeLonger: {
    icon: /* @__PURE__ */ jsx46(ListPlus, {}),
    label: "Make longer",
    value: "makeLonger",
    onSelect: ({ editor }) => {
      void editor.getApi(AIChatPlugin2).aiChat.submit({
        prompt: "Make longer"
      });
    }
  },
  makeShorter: {
    icon: /* @__PURE__ */ jsx46(ListMinus, {}),
    label: "Make shorter",
    value: "makeShorter",
    onSelect: ({ editor }) => {
      void editor.getApi(AIChatPlugin2).aiChat.submit({
        prompt: "Make shorter"
      });
    }
  },
  replace: {
    icon: /* @__PURE__ */ jsx46(Check2, {}),
    label: "Replace selection",
    value: "replace",
    onSelect: ({ aiEditor, editor }) => {
      void editor.getTransforms(AIChatPlugin2).aiChat.replaceSelection(aiEditor);
    }
  },
  simplifyLanguage: {
    icon: /* @__PURE__ */ jsx46(FeatherIcon, {}),
    label: "Simplify language",
    value: "simplifyLanguage",
    onSelect: ({ editor }) => {
      void editor.getApi(AIChatPlugin2).aiChat.submit({
        prompt: "Simplify the language"
      });
    }
  },
  summarize: {
    icon: /* @__PURE__ */ jsx46(Album, {}),
    label: "Add a summary",
    value: "summarize",
    onSelect: ({ editor }) => {
      void editor.getApi(AIChatPlugin2).aiChat.submit({
        mode: "insert",
        prompt: {
          default: "Summarize {editor}",
          selecting: "Summarize"
        }
      });
    }
  },
  tryAgain: {
    icon: /* @__PURE__ */ jsx46(CornerUpLeft, {}),
    label: "Try again",
    value: "tryAgain",
    onSelect: ({ editor }) => {
      void editor.getApi(AIChatPlugin2).aiChat.reload();
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
  const editor = useEditorRef3();
  const { messages } = usePluginOption3(AIChatPlugin2, "chat");
  const aiEditor = usePluginOption3(AIChatPlugin2, "aiEditor");
  const isSelecting = useIsSelecting();
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
  return /* @__PURE__ */ jsx46(Fragment3, { children: menuGroups.map((group, index) => /* @__PURE__ */ jsx46(CommandGroup, { heading: group.heading, children: group.items.map((menuItem) => /* @__PURE__ */ jsxs21(
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
        /* @__PURE__ */ jsx46("span", { children: menuItem.label })
      ]
    },
    menuItem.value
  )) }, index)) });
};

// src/components/editor/ui/ai-menu.tsx
import { jsx as jsx47, jsxs as jsxs22 } from "react/jsx-runtime";
function AIMenu() {
  const { api, editor } = useEditorPlugin3(AIChatPlugin3);
  const open = usePluginOption4(AIChatPlugin3, "open");
  const mode = usePluginOption4(AIChatPlugin3, "mode");
  const streaming = usePluginOption4(AIChatPlugin3, "streaming");
  const isSelecting = useIsSelecting2();
  const [value, setValue] = React10.useState("");
  const chat = useChat();
  const { input, messages, setInput, status } = chat;
  const [anchorElement, setAnchorElement] = React10.useState(
    null
  );
  const content = useLastAssistantMessage()?.content;
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
  useEditorChat({
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
        editor.getApi(BlockSelectionPlugin).blockSelection.set(ancestor.id);
      }
      show(editor.api.toDOMNode(ancestor));
    },
    onOpenSelection: () => {
      show(editor.api.toDOMNode(editor.api.blocks().at(-1)[0]));
    }
  });
  useHotkeys(
    "meta+j",
    () => {
      api.aiChat.show();
    },
    { enableOnContentEditable: true, enableOnFormTags: true }
  );
  useHotkeys("esc", () => {
    api.aiChat.stop();
    chat._abortFakeStream();
  });
  const isLoading = status === "streaming" || status === "submitted";
  if (isLoading && mode === "insert") {
    return null;
  }
  return /* @__PURE__ */ jsxs22(Popover, { open, onOpenChange: setOpen, modal: false, children: [
    /* @__PURE__ */ jsx47(PopoverAnchor, { virtualRef: { current: anchorElement } }),
    /* @__PURE__ */ jsx47(
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
        children: /* @__PURE__ */ jsxs22(
          Command,
          {
            className: "w-full rounded-lg border shadow-md",
            value,
            onValueChange: setValue,
            children: [
              mode === "chat" && isSelecting && content && /* @__PURE__ */ jsx47(AIChatEditor, { content }),
              isLoading ? /* @__PURE__ */ jsxs22("div", { className: "flex grow items-center gap-2 p-2 text-sm text-muted-foreground select-none", children: [
                /* @__PURE__ */ jsx47(Loader2Icon, { className: "size-4 animate-spin" }),
                messages.length > 1 ? "Editing..." : "Thinking..."
              ] }) : /* @__PURE__ */ jsx47(
                CommandPrimitive2.Input,
                {
                  className: cn(
                    "flex h-9 w-full min-w-0 border-input bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none placeholder:text-muted-foreground md:text-sm dark:bg-input/30",
                    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
                    "border-b focus-visible:ring-transparent"
                  ),
                  value: input,
                  onKeyDown: (e) => {
                    if (isHotkey("backspace")(e) && input.length === 0) {
                      e.preventDefault();
                      api.aiChat.hide();
                    }
                    if (isHotkey("enter")(e) && !e.shiftKey && !value) {
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
              !isLoading && /* @__PURE__ */ jsx47(CommandList, { children: /* @__PURE__ */ jsx47(AIMenuItems, { setValue }) })
            ]
          }
        )
      }
    )
  ] });
}

// src/components/editor/plugins/cursor-overlay-plugin.tsx
import { CursorOverlayPlugin } from "@udecode/plate-selection/react";

// src/components/editor/ui/cursor-overlay.tsx
import { RangeApi } from "@udecode/plate";
import { AIChatPlugin as AIChatPlugin4 } from "@udecode/plate-ai/react";
import {
  useCursorOverlay
} from "@udecode/plate-selection/react";
import { usePluginOption as usePluginOption5 } from "@udecode/plate/react";
import { Fragment as Fragment4, jsx as jsx48, jsxs as jsxs23 } from "react/jsx-runtime";
function Cursor({
  id,
  caretPosition,
  data,
  selection,
  selectionRects
}) {
  const streaming = usePluginOption5(AIChatPlugin4, "streaming");
  const { style, selectionStyle = style } = data ?? {};
  const isCursor = RangeApi.isCollapsed(selection);
  if (streaming) return null;
  return /* @__PURE__ */ jsxs23(Fragment4, { children: [
    selectionRects.map((position, i) => {
      return /* @__PURE__ */ jsx48(
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
    caretPosition && /* @__PURE__ */ jsx48(
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
  const { cursors } = useCursorOverlay();
  return /* @__PURE__ */ jsx48(Fragment4, { children: cursors.map((cursor) => /* @__PURE__ */ jsx48(Cursor, { ...cursor }, cursor.id)) });
}

// src/components/editor/plugins/cursor-overlay-plugin.tsx
import { jsx as jsx49 } from "react/jsx-runtime";
var cursorOverlayPlugin = CursorOverlayPlugin.configure({
  render: {
    afterEditable: () => /* @__PURE__ */ jsx49(CursorOverlay, {})
  }
});

// src/components/editor/plugins/ai-plugins.tsx
import { jsx as jsx50 } from "react/jsx-runtime";
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
  AIPlugin2,
  AIChatPlugin5.configure({
    options: {
      promptTemplate: ({ isBlockSelecting, isSelecting }) => {
        return isBlockSelecting ? PROMPT_TEMPLATES.userBlockSelecting : isSelecting ? PROMPT_TEMPLATES.userSelecting : PROMPT_TEMPLATES.userDefault;
      },
      systemTemplate: ({ isBlockSelecting, isSelecting }) => {
        return isBlockSelecting ? PROMPT_TEMPLATES.systemBlockSelecting : isSelecting ? PROMPT_TEMPLATES.systemSelecting : PROMPT_TEMPLATES.systemDefault;
      }
    },
    render: {
      afterContainer: () => /* @__PURE__ */ jsx50(AILoadingBar, {}),
      afterEditable: () => /* @__PURE__ */ jsx50(AIMenu, {})
    }
  }).extend({
    useHooks: ({ editor, getOption }) => {
      const mode = usePluginOption6(
        { key: "aiChat" },
        "mode"
      );
      useChatChunk({
        onChunk: ({ chunk, isFirst, nodes }) => {
          if (isFirst && mode == "insert") {
            editor.tf.withoutSaving(() => {
              editor.tf.insertNodes(
                {
                  children: [{ text: "" }],
                  type: AIChatPlugin5.key
                },
                {
                  at: PathApi2.next(editor.selection.focus.path.slice(0, 1))
                }
              );
            });
            editor.setOption(AIChatPlugin5, "streaming", true);
          }
          if (mode === "insert" && nodes.length > 0) {
            withAIBatch(
              editor,
              () => {
                if (!getOption("streaming")) return;
                editor.tf.withScrolling(() => {
                  streamInsertChunk(editor, chunk, {
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
          editor.setOption(AIChatPlugin5, "streaming", false);
          editor.setOption(AIChatPlugin5, "_blockChunks", "");
          editor.setOption(AIChatPlugin5, "_blockPath", null);
        }
      });
    }
  })
];

// src/components/editor/plugins/align-plugin.ts
import { AlignPlugin } from "@udecode/plate-alignment/react";
import { HEADING_LEVELS } from "@udecode/plate-heading";
import {
  ImagePlugin as ImagePlugin4,
  MediaEmbedPlugin as MediaEmbedPlugin4
} from "@udecode/plate-media/react";
import { ParagraphPlugin as ParagraphPlugin3 } from "@udecode/plate/react";
var alignPlugin = AlignPlugin.extend({
  inject: {
    targetPlugins: [
      ParagraphPlugin3.key,
      ...HEADING_LEVELS,
      MediaEmbedPlugin4.key,
      ImagePlugin4.key
    ]
  }
});

// src/components/editor/plugins/autoformat-plugin.ts
import {
  autoformatArrow,
  autoformatLegal,
  autoformatLegalHtml,
  autoformatMath,
  autoformatPunctuation,
  autoformatSmartQuotes
} from "@udecode/plate-autoformat";
import { AutoformatPlugin } from "@udecode/plate-autoformat/react";
import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  UnderlinePlugin
} from "@udecode/plate-basic-marks/react";
import { BlockquotePlugin as BlockquotePlugin3 } from "@udecode/plate-block-quote/react";
import { insertEmptyCodeBlock } from "@udecode/plate-code-block";
import { CodeBlockPlugin as CodeBlockPlugin4 } from "@udecode/plate-code-block/react";
import { HEADING_KEYS as HEADING_KEYS5 } from "@udecode/plate-heading";
import { HighlightPlugin } from "@udecode/plate-highlight/react";
import { HorizontalRulePlugin as HorizontalRulePlugin2 } from "@udecode/plate-horizontal-rule/react";
import {
  INDENT_LIST_KEYS as INDENT_LIST_KEYS3,
  ListStyleType as ListStyleType3,
  toggleIndentList
} from "@udecode/plate-indent-list";
import {
  openNextToggles,
  TogglePlugin as TogglePlugin3
} from "@udecode/plate-toggle/react";
import { ParagraphPlugin as ParagraphPlugin4 } from "@udecode/plate/react";
var autoformatMarks = [
  {
    match: "***",
    mode: "mark",
    type: [BoldPlugin.key, ItalicPlugin.key]
  },
  {
    match: "__*",
    mode: "mark",
    type: [UnderlinePlugin.key, ItalicPlugin.key]
  },
  {
    match: "__**",
    mode: "mark",
    type: [UnderlinePlugin.key, BoldPlugin.key]
  },
  {
    match: "___***",
    mode: "mark",
    type: [UnderlinePlugin.key, BoldPlugin.key, ItalicPlugin.key]
  },
  {
    match: "**",
    mode: "mark",
    type: BoldPlugin.key
  },
  {
    match: "__",
    mode: "mark",
    type: UnderlinePlugin.key
  },
  {
    match: "*",
    mode: "mark",
    type: ItalicPlugin.key
  },
  {
    match: "_",
    mode: "mark",
    type: ItalicPlugin.key
  },
  {
    match: "~~",
    mode: "mark",
    type: StrikethroughPlugin.key
  },
  {
    match: "^",
    mode: "mark",
    type: SuperscriptPlugin.key
  },
  {
    match: "~",
    mode: "mark",
    type: SubscriptPlugin.key
  },
  {
    match: "==",
    mode: "mark",
    type: HighlightPlugin.key
  },
  {
    match: "\u2261",
    mode: "mark",
    type: HighlightPlugin.key
  },
  {
    match: "`",
    mode: "mark",
    type: CodePlugin.key
  }
];
var autoformatBlocks = [
  {
    match: "# ",
    mode: "block",
    type: HEADING_KEYS5.h1
  },
  {
    match: "## ",
    mode: "block",
    type: HEADING_KEYS5.h2
  },
  {
    match: "### ",
    mode: "block",
    type: HEADING_KEYS5.h3
  },
  {
    match: "#### ",
    mode: "block",
    type: HEADING_KEYS5.h4
  },
  {
    match: "##### ",
    mode: "block",
    type: HEADING_KEYS5.h5
  },
  {
    match: "###### ",
    mode: "block",
    type: HEADING_KEYS5.h6
  },
  {
    match: "> ",
    mode: "block",
    type: BlockquotePlugin3.key
  },
  {
    match: "```",
    mode: "block",
    type: CodeBlockPlugin4.key,
    format: (editor) => {
      insertEmptyCodeBlock(editor, {
        defaultType: ParagraphPlugin4.key,
        insertNodesOptions: { select: true }
      });
    }
  },
  {
    match: "+ ",
    mode: "block",
    preFormat: openNextToggles,
    type: TogglePlugin3.key
  },
  {
    match: ["---", "\u2014-", "___ "],
    mode: "block",
    type: HorizontalRulePlugin2.key,
    format: (editor) => {
      editor.tf.setNodes({ type: HorizontalRulePlugin2.key });
      editor.tf.insertNodes({
        children: [{ text: "" }],
        type: ParagraphPlugin4.key
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
      toggleIndentList(editor, {
        listStyleType: ListStyleType3.Disc
      });
    }
  },
  {
    match: [String.raw`^\d+\.$ `, String.raw`^\d+\)$ `],
    matchByRegex: true,
    mode: "block",
    type: "list",
    format: (editor, { matchString }) => {
      toggleIndentList(editor, {
        listRestartPolite: Number(matchString) || 1,
        listStyleType: ListStyleType3.Decimal
      });
    }
  },
  {
    match: ["[] "],
    mode: "block",
    type: "list",
    format: (editor) => {
      toggleIndentList(editor, {
        listStyleType: INDENT_LIST_KEYS3.todo
      });
      editor.tf.setNodes({
        checked: false,
        listStyleType: INDENT_LIST_KEYS3.todo
      });
    }
  },
  {
    match: ["[x] "],
    mode: "block",
    type: "list",
    format: (editor) => {
      toggleIndentList(editor, {
        listStyleType: INDENT_LIST_KEYS3.todo
      });
      editor.tf.setNodes({
        checked: true,
        listStyleType: INDENT_LIST_KEYS3.todo
      });
    }
  }
];
var autoformatPlugin = AutoformatPlugin.configure({
  options: {
    enableUndoOnDelete: true,
    rules: [
      ...autoformatBlocks,
      ...autoformatMarks,
      ...autoformatSmartQuotes,
      ...autoformatPunctuation,
      ...autoformatLegal,
      ...autoformatLegalHtml,
      ...autoformatArrow,
      ...autoformatMath,
      ...autoformatIndentLists
    ].map(
      (rule) => ({
        ...rule,
        query: (editor) => !editor.api.some({
          match: { type: editor.getType(CodeBlockPlugin4) }
        })
      })
    )
  }
});

// src/components/editor/plugins/basic-nodes-plugins.tsx
import {
  all as all2,
  createLowlight as createLowlight2
} from "lowlight";
import { BasicMarksPlugin } from "@udecode/plate-basic-marks/react";
import { BlockquotePlugin as BlockquotePlugin4 } from "@udecode/plate-block-quote/react";
import { CodeBlockPlugin as CodeBlockPlugin5 } from "@udecode/plate-code-block/react";
import { HeadingPlugin } from "@udecode/plate-heading/react";
var lowlight2 = createLowlight2(all2);
var basicNodesPlugins = [
  HeadingPlugin.configure({ options: { levels: 3 } }),
  BlockquotePlugin4,
  CodeBlockPlugin5.configure({ options: { lowlight: lowlight2 } }),
  BasicMarksPlugin
];

// src/components/editor/plugins/block-menu-plugins.ts
import { BlockMenuPlugin as BlockMenuPlugin2 } from "@udecode/plate-selection/react";

// src/components/editor/ui/block-context-menu.tsx
import * as React12 from "react";
import { AIChatPlugin as AIChatPlugin6 } from "@udecode/plate-ai/react";
import { BlockquotePlugin as BlockquotePlugin5 } from "@udecode/plate-block-quote/react";
import { HEADING_KEYS as HEADING_KEYS6 } from "@udecode/plate-heading";
import { IndentListPlugin as IndentListPlugin2 } from "@udecode/plate-indent-list/react";
import {
  BLOCK_CONTEXT_MENU_ID,
  BlockMenuPlugin,
  BlockSelectionPlugin as BlockSelectionPlugin2
} from "@udecode/plate-selection/react";
import {
  ParagraphPlugin as ParagraphPlugin5,
  useEditorPlugin as useEditorPlugin4,
  usePlateState
} from "@udecode/plate/react";

// src/hooks/use-is-touch-device.ts
import * as React11 from "react";
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
import {
  CheckIcon as CheckIcon3,
  ChevronRightIcon as ChevronRightIcon3,
  CircleIcon as CircleIcon2
} from "lucide-react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { jsx as jsx51, jsxs as jsxs24 } from "react/jsx-runtime";
function ContextMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx51(ContextMenuPrimitive.Root, { "data-slot": "context-menu", ...props });
}
function ContextMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx51(ContextMenuPrimitive.Trigger, { "data-slot": "context-menu-trigger", ...props });
}
function ContextMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx51(ContextMenuPrimitive.Group, { "data-slot": "context-menu-group", ...props });
}
function ContextMenuSub({
  ...props
}) {
  return /* @__PURE__ */ jsx51(ContextMenuPrimitive.Sub, { "data-slot": "context-menu-sub", ...props });
}
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs24(
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
        /* @__PURE__ */ jsx51(ChevronRightIcon3, { className: "ml-auto" })
      ]
    }
  );
}
function ContextMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx51(
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
  return /* @__PURE__ */ jsx51(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx51(
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
  return /* @__PURE__ */ jsx51(
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
import { jsx as jsx52, jsxs as jsxs25 } from "react/jsx-runtime";
function BlockContextMenu({ children }) {
  const { api, editor } = useEditorPlugin4(BlockMenuPlugin);
  const [value, setValue] = React12.useState(null);
  const isTouch = useIsTouchDevice();
  const [readOnly] = usePlateState("readOnly");
  const handleTurnInto = React12.useCallback(
    (type) => {
      editor.getApi(BlockSelectionPlugin2).blockSelection.getNodes().forEach(([node, path]) => {
        if (node[IndentListPlugin2.key]) {
          editor.tf.unsetNodes([IndentListPlugin2.key, "indent"], {
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
      editor.getTransforms(BlockSelectionPlugin2).blockSelection.setNodes({ align });
    },
    [editor]
  );
  if (isTouch) {
    return children;
  }
  return /* @__PURE__ */ jsxs25(
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
        /* @__PURE__ */ jsx52(
          ContextMenuTrigger,
          {
            asChild: true,
            onContextMenu: (event) => {
              const dataset = event.target.dataset;
              const disabled = dataset?.slateEditor === "true" || readOnly;
              if (disabled) return event.preventDefault();
              api.blockMenu.show(BLOCK_CONTEXT_MENU_ID, {
                x: event.clientX,
                y: event.clientY
              });
            },
            children: /* @__PURE__ */ jsx52("div", { className: "w-full", children })
          }
        ),
        /* @__PURE__ */ jsxs25(
          ContextMenuContent,
          {
            className: "w-64",
            onCloseAutoFocus: (e) => {
              e.preventDefault();
              editor.getApi(BlockSelectionPlugin2).blockSelection.focus();
              if (value === "askAI") {
                editor.getApi(AIChatPlugin6).aiChat.show();
              }
              setValue(null);
            },
            children: [
              /* @__PURE__ */ jsxs25(ContextMenuGroup, { children: [
                /* @__PURE__ */ jsx52(
                  ContextMenuItem,
                  {
                    onClick: () => {
                      setValue("askAI");
                    },
                    children: "Ask AI"
                  }
                ),
                /* @__PURE__ */ jsx52(
                  ContextMenuItem,
                  {
                    onClick: () => {
                      editor.getTransforms(BlockSelectionPlugin2).blockSelection.removeNodes();
                      editor.tf.focus();
                    },
                    children: "Delete"
                  }
                ),
                /* @__PURE__ */ jsx52(
                  ContextMenuItem,
                  {
                    onClick: () => {
                      editor.getTransforms(BlockSelectionPlugin2).blockSelection.duplicate();
                    },
                    children: "Duplicate"
                  }
                ),
                /* @__PURE__ */ jsxs25(ContextMenuSub, { children: [
                  /* @__PURE__ */ jsx52(ContextMenuSubTrigger, { children: "Turn into" }),
                  /* @__PURE__ */ jsxs25(ContextMenuSubContent, { className: "w-48", children: [
                    /* @__PURE__ */ jsx52(
                      ContextMenuItem,
                      {
                        onClick: () => handleTurnInto(ParagraphPlugin5.key),
                        children: "Paragraph"
                      }
                    ),
                    /* @__PURE__ */ jsx52(ContextMenuItem, { onClick: () => handleTurnInto(HEADING_KEYS6.h1), children: "Heading 1" }),
                    /* @__PURE__ */ jsx52(ContextMenuItem, { onClick: () => handleTurnInto(HEADING_KEYS6.h2), children: "Heading 2" }),
                    /* @__PURE__ */ jsx52(ContextMenuItem, { onClick: () => handleTurnInto(HEADING_KEYS6.h3), children: "Heading 3" }),
                    /* @__PURE__ */ jsx52(
                      ContextMenuItem,
                      {
                        onClick: () => handleTurnInto(BlockquotePlugin5.key),
                        children: "Blockquote"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs25(ContextMenuGroup, { children: [
                /* @__PURE__ */ jsx52(
                  ContextMenuItem,
                  {
                    onClick: () => editor.getTransforms(BlockSelectionPlugin2).blockSelection.setIndent(1),
                    children: "Indent"
                  }
                ),
                /* @__PURE__ */ jsx52(
                  ContextMenuItem,
                  {
                    onClick: () => editor.getTransforms(BlockSelectionPlugin2).blockSelection.setIndent(-1),
                    children: "Outdent"
                  }
                ),
                /* @__PURE__ */ jsxs25(ContextMenuSub, { children: [
                  /* @__PURE__ */ jsx52(ContextMenuSubTrigger, { children: "Align" }),
                  /* @__PURE__ */ jsxs25(ContextMenuSubContent, { className: "w-48", children: [
                    /* @__PURE__ */ jsx52(ContextMenuItem, { onClick: () => handleAlign("left"), children: "Left" }),
                    /* @__PURE__ */ jsx52(ContextMenuItem, { onClick: () => handleAlign("center"), children: "Center" }),
                    /* @__PURE__ */ jsx52(ContextMenuItem, { onClick: () => handleAlign("right"), children: "Right" })
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
import { BlockSelectionPlugin as BlockSelectionPlugin3 } from "@udecode/plate-selection/react";

// src/components/editor/ui/block-selection.tsx
import {
  cva as cva7
} from "class-variance-authority";
import { DndPlugin } from "@udecode/plate-dnd";
import { useBlockSelected } from "@udecode/plate-selection/react";
import { usePluginOption as usePluginOption7 } from "@udecode/plate/react";
import { jsx as jsx53 } from "react/jsx-runtime";
var blockSelectionVariants = cva7(
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
  const isBlockSelected = useBlockSelected();
  const isDragging = usePluginOption7(DndPlugin, "isDragging");
  if (!isBlockSelected) return null;
  return /* @__PURE__ */ jsx53(
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
import { jsx as jsx54 } from "react/jsx-runtime";
var blockSelectionPlugins = [
  BlockSelectionPlugin3.configure(({ editor }) => ({
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
        return /* @__PURE__ */ jsx54(BlockSelection, {});
      }
    }
  }))
];
var blockSelectionReadOnlyPlugin = BlockSelectionPlugin3.configure({
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
  BlockMenuPlugin2.configure({
    render: { aboveEditable: BlockContextMenu }
  })
];

// src/components/editor/plugins/comments-plugin.tsx
import { isSlateString } from "@udecode/plate";
import {
  BaseCommentsPlugin
} from "@udecode/plate-comments";
import {
  toTPlatePlugin,
  useHotkeys as useHotkeys2
} from "@udecode/plate/react";
var commentsPlugin = toTPlatePlugin(
  BaseCommentsPlugin,
  {
    handlers: {
      onClick: ({ api, event, setOption, type }) => {
        let leaf = event.target;
        let isSet = false;
        const unsetActiveSuggestion = () => {
          setOption("activeId", null);
          isSet = true;
        };
        if (!isSlateString(leaf)) unsetActiveSuggestion();
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
      useHotkeys2(
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
import { HorizontalRulePlugin as HorizontalRulePlugin3 } from "@udecode/plate-horizontal-rule/react";
import {
  AudioPlugin as AudioPlugin2,
  FilePlugin as FilePlugin2,
  ImagePlugin as ImagePlugin5,
  MediaEmbedPlugin as MediaEmbedPlugin5,
  VideoPlugin as VideoPlugin2
} from "@udecode/plate-media/react";
import {
  DeletePlugin,
  SelectOnBackspacePlugin
} from "@udecode/plate-select";
var deletePlugins = [
  SelectOnBackspacePlugin.configure({
    options: {
      query: {
        allow: [
          ImagePlugin5.key,
          VideoPlugin2.key,
          AudioPlugin2.key,
          FilePlugin2.key,
          MediaEmbedPlugin5.key,
          HorizontalRulePlugin3.key
        ]
      }
    }
  }),
  DeletePlugin
];

// src/components/editor/plugins/discussion-plugin.tsx
import { createPlatePlugin } from "@udecode/plate/react";

// src/components/editor/ui/block-discussion.tsx
import * as React24 from "react";
import {
  MessageSquareTextIcon,
  MessagesSquareIcon,
  PencilLineIcon
} from "lucide-react";
import {
  PathApi as PathApi4,
  TextApi as TextApi2
} from "@udecode/plate";
import {
  getDraftCommentKey as getDraftCommentKey2
} from "@udecode/plate-comments";
import { CommentsPlugin as CommentsPlugin3 } from "@udecode/plate-comments/react";
import { SuggestionPlugin as SuggestionPlugin4 } from "@udecode/plate-suggestion/react";
import {
  useEditorPlugin as useEditorPlugin7,
  useEditorRef as useEditorRef8,
  usePluginOption as usePluginOption12
} from "@udecode/plate/react";

// src/components/editor/plugins/suggestion-plugin.tsx
import {
  isSlateEditor,
  isSlateElement,
  isSlateString as isSlateString2
} from "@udecode/plate";
import {
  BaseSuggestionPlugin
} from "@udecode/plate-suggestion";
import { toTPlatePlugin as toTPlatePlugin2 } from "@udecode/plate/react";

// src/components/editor/ui/block-suggestion.tsx
import * as React23 from "react";
import {
  CheckIcon as CheckIcon5,
  XIcon as XIcon3
} from "lucide-react";
import {
  ElementApi,
  PathApi as PathApi3,
  TextApi
} from "@udecode/plate";
import { BlockquotePlugin as BlockquotePlugin6 } from "@udecode/plate-block-quote/react";
import { CalloutPlugin as CalloutPlugin2 } from "@udecode/plate-callout/react";
import { CodeBlockPlugin as CodeBlockPlugin6 } from "@udecode/plate-code-block/react";
import { HEADING_KEYS as HEADING_KEYS7 } from "@udecode/plate-heading";
import { TocPlugin as TocPlugin3 } from "@udecode/plate-heading/react";
import { HorizontalRulePlugin as HorizontalRulePlugin4 } from "@udecode/plate-horizontal-rule/react";
import {
  INDENT_LIST_KEYS as INDENT_LIST_KEYS4,
  ListStyleType as ListStyleType4
} from "@udecode/plate-indent-list";
import { IndentListPlugin as IndentListPlugin3 } from "@udecode/plate-indent-list/react";
import { ColumnPlugin as ColumnPlugin3 } from "@udecode/plate-layout/react";
import { EquationPlugin as EquationPlugin3 } from "@udecode/plate-math/react";
import {
  AudioPlugin as AudioPlugin3,
  FilePlugin as FilePlugin3,
  ImagePlugin as ImagePlugin6,
  MediaEmbedPlugin as MediaEmbedPlugin6,
  VideoPlugin as VideoPlugin3
} from "@udecode/plate-media/react";
import {
  acceptSuggestion,
  getSuggestionKey,
  keyId2SuggestionId,
  rejectSuggestion
} from "@udecode/plate-suggestion";
import { SuggestionPlugin as SuggestionPlugin3 } from "@udecode/plate-suggestion/react";
import { TablePlugin as TablePlugin4 } from "@udecode/plate-table/react";
import { TogglePlugin as TogglePlugin4 } from "@udecode/plate-toggle/react";
import {
  ParagraphPlugin as ParagraphPlugin6,
  useEditorPlugin as useEditorPlugin6,
  usePluginOption as usePluginOption11
} from "@udecode/plate/react";

// src/components/editor/ui/avatar.tsx
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsx as jsx55 } from "react/jsx-runtime";
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx55(
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
  return /* @__PURE__ */ jsx55(
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
  return /* @__PURE__ */ jsx55(
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
import * as React22 from "react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  format
} from "date-fns";
import {
  CheckIcon as CheckIcon4,
  MoreHorizontalIcon,
  PencilIcon,
  TrashIcon,
  XIcon as XIcon2
} from "lucide-react";
import { CommentsPlugin as CommentsPlugin2 } from "@udecode/plate-comments/react";
import {
  Plate as Plate2,
  useEditorPlugin as useEditorPlugin5,
  useEditorRef as useEditorRef7,
  usePluginOption as usePluginOption10
} from "@udecode/plate/react";

// src/components/editor/ui/comment-create-form.tsx
import * as React21 from "react";
import { ArrowUpIcon } from "lucide-react";
import { withProps as withProps2 } from "@udecode/cn";
import {
  nanoid,
  NodeApi as NodeApi5
} from "@udecode/plate";
import { AIPlugin as AIPlugin3 } from "@udecode/plate-ai/react";
import {
  BasicMarksPlugin as BasicMarksPlugin2,
  BoldPlugin as BoldPlugin2,
  ItalicPlugin as ItalicPlugin2,
  StrikethroughPlugin as StrikethroughPlugin2,
  UnderlinePlugin as UnderlinePlugin2
} from "@udecode/plate-basic-marks/react";
import {
  getCommentKey,
  getDraftCommentKey
} from "@udecode/plate-comments";
import {
  CommentsPlugin,
  useCommentId
} from "@udecode/plate-comments/react";
import { DatePlugin as DatePlugin3 } from "@udecode/plate-date/react";
import { EmojiInputPlugin } from "@udecode/plate-emoji/react";
import { LinkPlugin as LinkPlugin3 } from "@udecode/plate-link/react";
import { InlineEquationPlugin as InlineEquationPlugin3 } from "@udecode/plate-math/react";
import {
  MentionInputPlugin,
  MentionPlugin
} from "@udecode/plate-mention/react";
import {
  Plate,
  PlateLeaf as PlateLeaf2,
  useEditorRef as useEditorRef6,
  usePluginOption as usePluginOption9
} from "@udecode/plate/react";

// src/components/editor/ui/ai-leaf.tsx
import { cva as cva8 } from "class-variance-authority";
import { AIChatPlugin as AIChatPlugin7 } from "@udecode/plate-ai/react";
import {
  PlateText
} from "@udecode/plate/react";
import { jsx as jsx56 } from "react/jsx-runtime";
var aiIndicatorVariants = cva8(
  'after:ml-1.5 after:inline-block after:h-3 after:w-3 after:animate-pulse after:rounded-full after:bg-primary after:align-middle after:content-[""]'
);
function AILeaf(props) {
  const streamingLeaf = props.editor.getApi(AIChatPlugin7).aiChat.node({ streaming: true });
  const isLast = streamingLeaf?.[0] === props.text;
  return /* @__PURE__ */ jsx56(
    PlateText,
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
import * as React15 from "react";
import {
  EmojiInlineIndexSearch,
  insertEmoji
} from "@udecode/plate-emoji";
import { EmojiPlugin } from "@udecode/plate-emoji/react";
import {
  PlateElement as PlateElement2,
  usePluginOption as usePluginOption8
} from "@udecode/plate/react";

// src/hooks/use-debounce.ts
import * as React13 from "react";
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
import * as React14 from "react";
import { cva as cva9 } from "class-variance-authority";
import {
  Combobox,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxItem,
  ComboboxPopover,
  ComboboxProvider,
  ComboboxRow,
  Portal as Portal7,
  useComboboxContext,
  useComboboxStore
} from "@ariakit/react";
import { filterWords } from "@udecode/plate-combobox";
import {
  useComboboxInput,
  useHTMLInputCursorState
} from "@udecode/plate-combobox/react";
import {
  useComposedRef,
  useEditorRef as useEditorRef4
} from "@udecode/plate/react";
import { Fragment as Fragment5, jsx as jsx57, jsxs as jsxs26 } from "react/jsx-runtime";
var InlineComboboxContext = React14.createContext(
  null
);
var defaultFilter = ({ group, keywords = [], label, value }, search) => {
  const uniqueTerms = new Set(
    [value, ...keywords, group, label].filter(Boolean)
  );
  return Array.from(uniqueTerms).some(
    (keyword) => filterWords(keyword, search)
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
  const editor = useEditorRef4();
  const inputRef = React14.useRef(null);
  const cursorState = useHTMLInputCursorState(inputRef);
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
  const { props: inputProps, removeInput } = useComboboxInput({
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
  const store = useComboboxStore({
    // open: ,
    setValue: (newValue) => React14.startTransition(() => setValue(newValue))
  });
  const items2 = store.useState("items");
  React14.useEffect(() => {
    if (!store.getState().activeId) {
      store.setActiveId(store.first());
    }
  }, [items2, store]);
  return /* @__PURE__ */ jsx57("span", { contentEditable: false, children: /* @__PURE__ */ jsx57(
    ComboboxProvider,
    {
      open: (items2.length > 0 || hasEmpty) && (!hideWhenNoValue || value.length > 0),
      store,
      children: /* @__PURE__ */ jsx57(InlineComboboxContext.Provider, { value: contextValue, children })
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
  const store = useComboboxContext();
  const value = store.useState("value");
  const ref = useComposedRef(propRef, contextRef);
  return /* @__PURE__ */ jsxs26(Fragment5, { children: [
    showTrigger && trigger,
    /* @__PURE__ */ jsxs26("span", { className: "relative min-h-[1lh]", children: [
      /* @__PURE__ */ jsx57(
        "span",
        {
          className: "invisible overflow-hidden text-nowrap",
          "aria-hidden": "true",
          children: value || "\u200B"
        }
      ),
      /* @__PURE__ */ jsx57(
        Combobox,
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
  return /* @__PURE__ */ jsx57(Portal7, { children: /* @__PURE__ */ jsx57(
    ComboboxPopover,
    {
      className: cn(
        "z-500 max-h-[288px] w-[300px] overflow-y-auto rounded-md bg-popover shadow-md",
        className
      ),
      ...props
    }
  ) });
};
var comboboxItemVariants = cva9(
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
  const store = useComboboxContext();
  const search = filter && store.useState("value");
  const visible = React14.useMemo(
    () => !filter || filter({ group, keywords, label, value }, search),
    [filter, group, keywords, label, value, search]
  );
  if (!visible) return null;
  return /* @__PURE__ */ jsx57(
    ComboboxItem,
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
  const store = useComboboxContext();
  const items2 = store.useState("items");
  React14.useEffect(() => {
    setHasEmpty(true);
    return () => {
      setHasEmpty(false);
    };
  }, [setHasEmpty]);
  if (items2.length > 0) return null;
  return /* @__PURE__ */ jsx57(
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
  return /* @__PURE__ */ jsx57(
    ComboboxGroup,
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
  return /* @__PURE__ */ jsx57(
    ComboboxGroupLabel,
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
import { jsx as jsx58, jsxs as jsxs27 } from "react/jsx-runtime";
function EmojiInputElement(props) {
  const { children, editor, element } = props;
  const data = usePluginOption8(EmojiPlugin, "data");
  const [value, setValue] = React15.useState("");
  const debouncedValue = useDebounce(value, 100);
  const isPending = value !== debouncedValue;
  const filteredEmojis = React15.useMemo(() => {
    if (debouncedValue.trim().length === 0) return [];
    return EmojiInlineIndexSearch.getInstance(data).search(debouncedValue.replace(/:$/, "")).get();
  }, [data, debouncedValue]);
  return /* @__PURE__ */ jsx58(BlockWithPlus, { element, children: /* @__PURE__ */ jsxs27(PlateElement2, { as: "span", "data-slate-value": element.value, ...props, children: [
    /* @__PURE__ */ jsxs27(
      InlineCombobox,
      {
        value,
        element,
        filter: false,
        setValue,
        trigger: ":",
        hideWhenNoValue: true,
        children: [
          /* @__PURE__ */ jsx58(InlineComboboxInput, {}),
          /* @__PURE__ */ jsxs27(InlineComboboxContent, { children: [
            !isPending && /* @__PURE__ */ jsx58(InlineComboboxEmpty, { children: "No results" }),
            /* @__PURE__ */ jsx58(InlineComboboxGroup, { children: filteredEmojis.map((emoji) => /* @__PURE__ */ jsxs27(
              InlineComboboxItem,
              {
                value: emoji.name,
                onClick: () => insertEmoji(editor, emoji),
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
import * as React17 from "react";
import { RadicalIcon as RadicalIcon3 } from "lucide-react";
import { useEquationElement } from "@udecode/plate-math/react";
import {
  PlateElement as PlateElement3,
  useEditorSelector,
  useSelected as useSelected2
} from "@udecode/plate/react";

// src/components/editor/ui/equation-popover.tsx
import * as React16 from "react";
import { CornerDownLeftIcon } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";
import { useEquationInput } from "@udecode/plate-math/react";
import { BlockSelectionPlugin as BlockSelectionPlugin4 } from "@udecode/plate-selection/react";
import {
  createPrimitiveComponent,
  useEditorRef as useEditorRef5,
  useElement as useElement2,
  useReadOnly as useReadOnly3
} from "@udecode/plate/react";
import { jsx as jsx59, jsxs as jsxs28 } from "react/jsx-runtime";
var EquationInput = createPrimitiveComponent(TextareaAutosize)({
  propsHook: useEquationInput
});
var EquationPopoverContent = ({
  className,
  isInline,
  open,
  setOpen,
  ...props
}) => {
  const editor = useEditorRef5();
  const readOnly = useReadOnly3();
  const element = useElement2();
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
      editor.getApi(BlockSelectionPlugin4).blockSelection.set(element.id);
    }
  };
  return /* @__PURE__ */ jsxs28(
    PopoverContent,
    {
      className: "flex gap-2",
      onEscapeKeyDown: (e) => {
        e.preventDefault();
      },
      contentEditable: false,
      children: [
        /* @__PURE__ */ jsx59(
          EquationInput,
          {
            className: cn("max-h-[50vh] grow resize-none p-2 text-sm", className),
            state: { isInline, open, onClose },
            autoFocus: true,
            ...props
          }
        ),
        /* @__PURE__ */ jsxs28(Button, { variant: "secondary", className: "px-3", onClick: onClose, children: [
          "Done ",
          /* @__PURE__ */ jsx59(CornerDownLeftIcon, { className: "size-3.5" })
        ] })
      ]
    }
  );
};

// src/components/editor/ui/inline-equation-element.tsx
import { jsx as jsx60, jsxs as jsxs29 } from "react/jsx-runtime";
function InlineEquationElement(props) {
  const element = props.element;
  const katexRef = React17.useRef(null);
  const selected = useSelected2();
  const isCollapsed = useEditorSelector(
    (editor) => editor.api.isCollapsed(),
    []
  );
  const [open, setOpen] = React17.useState(selected && isCollapsed);
  useEquationElement({
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
  return /* @__PURE__ */ jsx60(BlockWithPlus, { element, children: /* @__PURE__ */ jsxs29(
    PlateElement3,
    {
      ...props,
      className: cn(
        "inline-block rounded-sm select-none [&_.katex-display]:my-0"
      ),
      children: [
        /* @__PURE__ */ jsxs29(Popover, { open, onOpenChange: setOpen, modal: false, children: [
          /* @__PURE__ */ jsx60(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs29(
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
                /* @__PURE__ */ jsx60(
                  "span",
                  {
                    ref: katexRef,
                    className: cn(
                      element.texExpression.length === 0 && "hidden",
                      "font-mono leading-none"
                    )
                  }
                ),
                element.texExpression.length === 0 && /* @__PURE__ */ jsxs29("span", { children: [
                  /* @__PURE__ */ jsx60(RadicalIcon3, { className: "mr-1 inline-block h-[19px] w-4 py-[1.5px] align-text-bottom" }),
                  "New equation"
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx60(
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
import { useLink } from "@udecode/plate-link/react";
import { PlateElement as PlateElement4 } from "@udecode/plate/react";
import { jsx as jsx61 } from "react/jsx-runtime";
function LinkElement(props) {
  const { props: linkProps } = useLink({ element: props.element });
  return /* @__PURE__ */ jsx61(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ jsx61(
    PlateElement4,
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
import * as React19 from "react";
import { IS_APPLE as IS_APPLE2 } from "@udecode/plate";
import {
  PlateElement as PlateElement5,
  useFocused,
  useReadOnly as useReadOnly4,
  useSelected as useSelected3
} from "@udecode/plate/react";

// src/hooks/use-mounted.ts
import * as React18 from "react";
function useMounted() {
  const [mounted, setMounted] = React18.useState(false);
  React18.useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

// src/components/editor/ui/mention-element.tsx
import { jsx as jsx62, jsxs as jsxs30 } from "react/jsx-runtime";
function MentionElement(props) {
  const element = props.element;
  const selected = useSelected3();
  const focused = useFocused();
  const mounted = useMounted();
  const readOnly = useReadOnly4();
  return /* @__PURE__ */ jsx62(BlockWithPlus, { element, children: /* @__PURE__ */ jsx62(
    PlateElement5,
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
      children: mounted && IS_APPLE2 ? (
        // Mac OS IME https://github.com/ianstormtaylor/slate/issues/3490
        /* @__PURE__ */ jsxs30(React19.Fragment, { children: [
          props.children,
          props.prefix,
          element.value
        ] })
      ) : (
        // Others like Android https://github.com/ianstormtaylor/slate/pull/5360
        /* @__PURE__ */ jsxs30(React19.Fragment, { children: [
          props.prefix,
          element.value,
          props.children
        ] })
      )
    }
  ) });
}

// src/components/editor/ui/mention-input-element.tsx
import * as React20 from "react";
import { getMentionOnSelectItem } from "@udecode/plate-mention";
import { PlateElement as PlateElement6 } from "@udecode/plate/react";
import { jsx as jsx63, jsxs as jsxs31 } from "react/jsx-runtime";
var onSelectItem = getMentionOnSelectItem();
function MentionInputElement(props) {
  const { editor, element } = props;
  const [search, setSearch] = React20.useState("");
  return /* @__PURE__ */ jsx63(BlockWithPlus, { element, children: /* @__PURE__ */ jsxs31(PlateElement6, { ...props, as: "span", "data-slate-value": element.value, children: [
    /* @__PURE__ */ jsxs31(
      InlineCombobox,
      {
        value: search,
        element,
        setValue: setSearch,
        showTrigger: false,
        trigger: "@",
        children: [
          /* @__PURE__ */ jsx63("span", { className: "inline-block rounded-md bg-muted px-1.5 py-0.5 align-baseline text-sm ring-ring focus-within:ring-2", children: /* @__PURE__ */ jsx63(InlineComboboxInput, {}) }),
          /* @__PURE__ */ jsxs31(InlineComboboxContent, { className: "my-1.5", children: [
            /* @__PURE__ */ jsx63(InlineComboboxEmpty, { children: "No results" }),
            /* @__PURE__ */ jsx63(InlineComboboxGroup, { children: MENTIONABLES.map((item) => /* @__PURE__ */ jsx63(
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
import { jsx as jsx64, jsxs as jsxs32 } from "react/jsx-runtime";
var useCommentEditor = (options = {}, deps = []) => {
  const commentEditor = useCreateEditor(
    {
      id: "comment",
      components: {
        [AIPlugin3.key]: AILeaf,
        [BoldPlugin2.key]: withProps2(PlateLeaf2, { as: "strong" }),
        [DatePlugin3.key]: DateElement,
        [EmojiInputPlugin.key]: EmojiInputElement,
        [InlineEquationPlugin3.key]: InlineEquationElement,
        [ItalicPlugin2.key]: withProps2(PlateLeaf2, { as: "em" }),
        [LinkPlugin3.key]: LinkElement,
        [MentionInputPlugin.key]: MentionInputElement,
        [MentionPlugin.key]: MentionElement,
        [StrikethroughPlugin2.key]: withProps2(PlateLeaf2, { as: "s" }),
        [UnderlinePlugin2.key]: withProps2(PlateLeaf2, { as: "u" })
        // [SlashInputPlugin.key]: SlashInputElement,
      },
      placeholders: false,
      plugins: [BasicMarksPlugin2],
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
  const discussions = usePluginOption9(discussionPlugin, "discussions");
  const editor = useEditorRef6();
  const commentId = useCommentId();
  const discussionId = discussionIdProp ?? commentId;
  const userInfo = usePluginOption9(discussionPlugin, "currentUser");
  const [commentValue, setCommentValue] = React21.useState();
  const commentContent = React21.useMemo(
    () => commentValue ? NodeApi5.string({ children: commentValue, type: "p" }) : "",
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
              id: nanoid(),
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
        id: nanoid(),
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
    const commentsNodeEntry = editor.getApi(CommentsPlugin).comment.nodes({ at: [], isDraft: true });
    if (commentsNodeEntry.length === 0) return;
    const documentContent = commentsNodeEntry.map(([node]) => node.text).join("");
    const _discussionId = nanoid();
    const newDiscussion = {
      id: _discussionId,
      comments: [
        {
          id: nanoid(),
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
          [getCommentKey(id)]: true
        },
        { at: path, split: true }
      );
      editor.tf.unsetNodes([getDraftCommentKey()], { at: path });
    });
  }, [commentValue, commentEditor.tf, discussionId, editor, discussions]);
  return /* @__PURE__ */ jsxs32("div", { className: cn("flex w-full", className), children: [
    /* @__PURE__ */ jsx64("div", { className: "mt-2 mr-1 shrink-0", children: /* @__PURE__ */ jsxs32(Avatar, { className: "size-5", children: [
      /* @__PURE__ */ jsx64(AvatarImage, { alt: userInfo?.name, src: userInfo?.avatarUrl }),
      /* @__PURE__ */ jsx64(AvatarFallback, { children: userInfo?.name?.[0] })
    ] }) }),
    /* @__PURE__ */ jsx64("div", { className: "relative flex grow gap-2", children: /* @__PURE__ */ jsx64(
      Plate,
      {
        onChange: ({ value }) => {
          setCommentValue(value);
        },
        editor: commentEditor,
        children: /* @__PURE__ */ jsxs32(EditorContainer, { variant: "comment", children: [
          /* @__PURE__ */ jsx64(
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
          /* @__PURE__ */ jsx64(
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
              children: /* @__PURE__ */ jsx64("div", { className: "flex size-6 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx64(ArrowUpIcon, {}) })
            }
          )
        ] })
      }
    ) })
  ] });
}

// src/components/editor/ui/comment.tsx
import { jsx as jsx65, jsxs as jsxs33 } from "react/jsx-runtime";
var formatCommentDate = (date) => {
  const now = /* @__PURE__ */ new Date();
  const diffMinutes = differenceInMinutes(now, date);
  const diffHours = differenceInHours(now, date);
  const diffDays = differenceInDays(now, date);
  if (diffMinutes < 60) {
    return `${diffMinutes}m`;
  }
  if (diffHours < 24) {
    return `${diffHours}h`;
  }
  if (diffDays < 2) {
    return `${diffDays}d`;
  }
  return format(date, "MM/dd/yyyy");
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
  const editor = useEditorRef7();
  const userInfo = usePluginOption10(discussionPlugin, "user", comment.userId);
  const currentUserId = usePluginOption10(discussionPlugin, "currentUserId");
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
  const { tf } = useEditorPlugin5(CommentsPlugin2);
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
  return /* @__PURE__ */ jsxs33(
    "div",
    {
      onMouseEnter: () => setHovering(true),
      onMouseLeave: () => setHovering(false),
      children: [
        /* @__PURE__ */ jsxs33("div", { className: "relative flex items-center", children: [
          /* @__PURE__ */ jsxs33(Avatar, { className: "size-5", children: [
            /* @__PURE__ */ jsx65(AvatarImage, { alt: userInfo?.name, src: userInfo?.avatarUrl }),
            /* @__PURE__ */ jsx65(AvatarFallback, { children: userInfo?.name?.[0] })
          ] }),
          /* @__PURE__ */ jsx65("h4", { className: "mx-2 text-sm leading-none font-semibold", children: userInfo?.name }),
          /* @__PURE__ */ jsxs33("div", { className: "text-xs leading-none text-muted-foreground/80", children: [
            /* @__PURE__ */ jsx65("span", { className: "mr-1", children: formatCommentDate(new Date(comment.createdAt)) }),
            comment.isEdited && /* @__PURE__ */ jsx65("span", { children: "(edited)" })
          ] }),
          isMyComment && (hovering || dropdownOpen) && /* @__PURE__ */ jsxs33("div", { className: "absolute top-0 right-0 flex space-x-1", children: [
            index === 0 && /* @__PURE__ */ jsx65(
              Button,
              {
                variant: "ghost",
                className: "h-6 p-1 text-muted-foreground",
                onClick: onResolveComment,
                type: "button",
                children: /* @__PURE__ */ jsx65(CheckIcon4, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsx65(
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
        isFirst && showDocumentContent && /* @__PURE__ */ jsxs33("div", { className: "text-subtle-foreground relative mt-1 flex pl-[32px] text-sm", children: [
          discussionLength > 1 && /* @__PURE__ */ jsx65("div", { className: "absolute top-[5px] left-3 h-full w-0.5 shrink-0 bg-muted" }),
          /* @__PURE__ */ jsx65("div", { className: "my-px w-0.5 shrink-0 bg-highlight" }),
          documentContent && /* @__PURE__ */ jsx65("div", { className: "ml-2", children: documentContent })
        ] }),
        /* @__PURE__ */ jsxs33("div", { className: "relative my-1 pl-[26px]", children: [
          !isLast && /* @__PURE__ */ jsx65("div", { className: "absolute top-0 left-3 h-full w-0.5 shrink-0 bg-muted" }),
          /* @__PURE__ */ jsx65(Plate2, { readOnly: !isEditing, editor: commentEditor, children: /* @__PURE__ */ jsxs33(EditorContainer, { variant: "comment", children: [
            /* @__PURE__ */ jsx65(
              Editor,
              {
                variant: "comment",
                className: "w-auto grow",
                onClick: () => onEditorClick?.()
              }
            ),
            isEditing && /* @__PURE__ */ jsxs33("div", { className: "ml-auto flex shrink-0 gap-1", children: [
              /* @__PURE__ */ jsx65(
                Button,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "size-[28px]",
                  onClick: (e) => {
                    e.stopPropagation();
                    void onCancel();
                  },
                  children: /* @__PURE__ */ jsx65("div", { className: "flex size-5 shrink-0 items-center justify-center rounded-[50%] bg-primary/40", children: /* @__PURE__ */ jsx65(XIcon2, { className: "size-3 stroke-[3px] text-background" }) })
                }
              ),
              /* @__PURE__ */ jsx65(
                Button,
                {
                  size: "icon",
                  variant: "ghost",
                  onClick: (e) => {
                    e.stopPropagation();
                    void onSave();
                  },
                  children: /* @__PURE__ */ jsx65("div", { className: "flex size-5 shrink-0 items-center justify-center rounded-[50%] bg-brand", children: /* @__PURE__ */ jsx65(CheckIcon4, { className: "size-3 stroke-[3px] text-background" }) })
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
  const editor = useEditorRef7();
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
  return /* @__PURE__ */ jsxs33(
    DropdownMenu,
    {
      open: dropdownOpen,
      onOpenChange: setDropdownOpen,
      modal: false,
      children: [
        /* @__PURE__ */ jsx65(DropdownMenuTrigger, { asChild: true, onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsx65(Button, { variant: "ghost", className: cn("h-6 p-1 text-muted-foreground"), children: /* @__PURE__ */ jsx65(MoreHorizontalIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx65(
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
            children: /* @__PURE__ */ jsxs33(DropdownMenuGroup, { children: [
              /* @__PURE__ */ jsxs33(DropdownMenuItem, { onClick: onEditComment, children: [
                /* @__PURE__ */ jsx65(PencilIcon, { className: "size-4" }),
                "Edit comment"
              ] }),
              /* @__PURE__ */ jsxs33(DropdownMenuItem, { onClick: onDeleteComment, children: [
                /* @__PURE__ */ jsx65(TrashIcon, { className: "size-4" }),
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
import { jsx as jsx66, jsxs as jsxs34 } from "react/jsx-runtime";
var BLOCK_SUGGESTION = "__block__";
var TYPE_TEXT_MAP = {
  [AudioPlugin3.key]: () => "Audio",
  [BlockquotePlugin6.key]: () => "Blockquote",
  [CalloutPlugin2.key]: () => "Callout",
  [CodeBlockPlugin6.key]: () => "Code Block",
  [ColumnPlugin3.key]: () => "Column",
  [EquationPlugin3.key]: () => "Equation",
  [FilePlugin3.key]: () => "File",
  [HEADING_KEYS7.h1]: () => `Heading 1`,
  [HEADING_KEYS7.h2]: () => `Heading 2`,
  [HEADING_KEYS7.h3]: () => `Heading 3`,
  [HEADING_KEYS7.h4]: () => `Heading 4`,
  [HEADING_KEYS7.h5]: () => `Heading 5`,
  [HEADING_KEYS7.h6]: () => `Heading 6`,
  [HorizontalRulePlugin4.key]: () => "Horizontal Rule",
  [ImagePlugin6.key]: () => "Image",
  [MediaEmbedPlugin6.key]: () => "Media",
  [ParagraphPlugin6.key]: (node) => {
    if (node?.[IndentListPlugin3.key] === INDENT_LIST_KEYS4.todo)
      return "Todo List";
    if (node?.[IndentListPlugin3.key] === ListStyleType4.Decimal)
      return "Ordered List";
    if (node?.[IndentListPlugin3.key] === ListStyleType4.Disc) return "List";
    return "Paragraph";
  },
  [TablePlugin4.key]: () => "Table",
  [TocPlugin3.key]: () => "Table of Contents",
  [TogglePlugin4.key]: () => "Toggle",
  [VideoPlugin3.key]: () => "Video"
};
var BlockSuggestionCard = ({
  idx,
  isLast,
  suggestion
}) => {
  const { api, editor } = useEditorPlugin6(SuggestionPlugin3);
  const userInfo = usePluginOption11(discussionPlugin, "user", suggestion.userId);
  const accept = (suggestion2) => {
    api.suggestion.withoutSuggestions(() => {
      acceptSuggestion(editor, suggestion2);
    });
  };
  const reject = (suggestion2) => {
    api.suggestion.withoutSuggestions(() => {
      rejectSuggestion(editor, suggestion2);
    });
  };
  const [hovering, setHovering] = React23.useState(false);
  const suggestionText2Array = (text) => {
    if (text === BLOCK_SUGGESTION) return ["line breaks"];
    return text.split(BLOCK_SUGGESTION).filter(Boolean);
  };
  const [editingId, setEditingId] = React23.useState(null);
  return /* @__PURE__ */ jsxs34(
    "div",
    {
      className: "relative",
      onMouseEnter: () => setHovering(true),
      onMouseLeave: () => setHovering(false),
      children: [
        /* @__PURE__ */ jsxs34("div", { className: "flex flex-col p-4", children: [
          /* @__PURE__ */ jsxs34("div", { className: "relative flex items-center", children: [
            /* @__PURE__ */ jsxs34(Avatar, { className: "size-5", children: [
              /* @__PURE__ */ jsx66(AvatarImage, { alt: userInfo?.name, src: userInfo?.avatarUrl }),
              /* @__PURE__ */ jsx66(AvatarFallback, { children: userInfo?.name?.[0] })
            ] }),
            /* @__PURE__ */ jsx66("h4", { className: "mx-2 text-sm leading-none font-semibold", children: userInfo?.name }),
            /* @__PURE__ */ jsx66("div", { className: "text-xs leading-none text-muted-foreground/80", children: /* @__PURE__ */ jsx66("span", { className: "mr-1", children: formatCommentDate(new Date(suggestion.createdAt)) }) })
          ] }),
          /* @__PURE__ */ jsx66("div", { className: "relative mt-1 mb-4 pl-[32px]", children: /* @__PURE__ */ jsxs34("div", { className: "flex flex-col gap-2", children: [
            suggestion.type === "remove" && /* @__PURE__ */ jsx66(React23.Fragment, { children: suggestionText2Array(suggestion.text).map((text, index) => /* @__PURE__ */ jsxs34("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx66("span", { className: "text-sm text-muted-foreground", children: "Delete:" }),
              /* @__PURE__ */ jsx66("span", { className: "text-sm", children: text }, index)
            ] }, index)) }),
            suggestion.type === "insert" && /* @__PURE__ */ jsx66(React23.Fragment, { children: suggestionText2Array(suggestion.newText).map(
              (text, index) => /* @__PURE__ */ jsxs34("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx66("span", { className: "text-sm text-muted-foreground", children: "Add:" }),
                /* @__PURE__ */ jsx66("span", { className: "text-sm", children: text || "line breaks" }, index)
              ] }, index)
            ) }),
            suggestion.type === "replace" && /* @__PURE__ */ jsxs34("div", { className: "flex flex-col gap-2", children: [
              suggestionText2Array(suggestion.newText).map(
                (text, index) => /* @__PURE__ */ jsx66(React23.Fragment, { children: /* @__PURE__ */ jsxs34(
                  "div",
                  {
                    className: "flex items-start gap-2 text-brand/80",
                    children: [
                      /* @__PURE__ */ jsx66("span", { className: "text-sm", children: "with:" }),
                      /* @__PURE__ */ jsx66("span", { className: "text-sm", children: text || "line breaks" })
                    ]
                  },
                  index
                ) }, index)
              ),
              suggestionText2Array(suggestion.text).map((text, index) => /* @__PURE__ */ jsx66(React23.Fragment, { children: /* @__PURE__ */ jsxs34("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx66("span", { className: "text-sm text-muted-foreground", children: index === 0 ? "Replace:" : "Delete:" }),
                /* @__PURE__ */ jsx66("span", { className: "text-sm", children: text || "line breaks" })
              ] }, index) }, index))
            ] }),
            suggestion.type === "update" && /* @__PURE__ */ jsxs34("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxs34("span", { className: "text-sm text-muted-foreground", children: [
                Object.keys(suggestion.properties).map((key) => /* @__PURE__ */ jsxs34("span", { children: [
                  "Un",
                  key
                ] }, key)),
                Object.keys(suggestion.newProperties).map((key) => /* @__PURE__ */ jsx66("span", { children: key.charAt(0).toUpperCase() + key.slice(1) }, key))
              ] }),
              /* @__PURE__ */ jsx66("span", { className: "text-sm", children: suggestion.newText })
            ] })
          ] }) }),
          suggestion.comments.map((comment, index) => /* @__PURE__ */ jsx66(
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
          hovering && /* @__PURE__ */ jsxs34("div", { className: "absolute top-4 right-4 flex gap-2", children: [
            /* @__PURE__ */ jsx66(
              Button,
              {
                variant: "ghost",
                className: "h-6 p-1 text-muted-foreground",
                onClick: () => accept(suggestion),
                children: /* @__PURE__ */ jsx66(CheckIcon5, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsx66(
              Button,
              {
                variant: "ghost",
                className: "h-6 p-1 text-muted-foreground",
                onClick: () => reject(suggestion),
                children: /* @__PURE__ */ jsx66(XIcon3, { className: "size-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx66(CommentCreateForm, { discussionId: suggestion.suggestionId })
        ] }),
        !isLast && /* @__PURE__ */ jsx66("div", { className: "h-px w-full bg-muted" })
      ]
    },
    `${suggestion.suggestionId}-${idx}`
  );
};
var useResolveSuggestion = (suggestionNodes, blockPath) => {
  const discussions = usePluginOption11(discussionPlugin, "discussions");
  const { api, editor, getOption, setOption } = useEditorPlugin6(suggestionPlugin);
  suggestionNodes.forEach(([node]) => {
    const id = api.suggestion.nodeId(node);
    const map = getOption("uniquePathMap");
    if (!id) return;
    const previousPath = map.get(id);
    if (PathApi3.isPath(previousPath)) {
      const nodes = api.suggestion.node({ id, at: previousPath, isText: true });
      const parentNode = api.node(previousPath);
      let lineBreakId = null;
      if (parentNode && ElementApi.isElement(parentNode[0])) {
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
        if (TextApi.isText(node)) {
          const dataList = api.suggestion.dataList(node);
          const includeUpdate = dataList.some(
            (data) => data.type === "update"
          );
          if (!includeUpdate) return api.suggestion.nodeId(node);
          return dataList.filter((data) => data.type === "update").map((d) => d.id);
        }
        if (ElementApi.isElement(node)) {
          return api.suggestion.nodeId(node);
        }
      }).filter(Boolean)
    );
    const res = [];
    suggestionIds.forEach((id) => {
      if (!id) return;
      const path = map.get(id);
      if (!path || !PathApi3.isPath(path)) return;
      if (!PathApi3.equals(path, blockPath)) return;
      const entries = [
        ...editor.api.nodes({
          at: [],
          mode: "all",
          match: (n) => n[SuggestionPlugin3.key] && n[getSuggestionKey(id)] || api.suggestion.nodeId(n) === id
        })
      ];
      entries.sort(([, path1], [, path2]) => {
        return PathApi3.isChild(path1, path2) ? -1 : 1;
      });
      let newText = "";
      let text = "";
      let properties = {};
      let newProperties = {};
      entries.forEach(([node]) => {
        if (TextApi.isText(node)) {
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
          if (lineBreakData?.id !== keyId2SuggestionId(id)) return;
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
      const keyId = getSuggestionKey(id);
      if (nodeData.type === "update") {
        return res.push({
          comments,
          createdAt,
          keyId,
          newProperties,
          newText,
          properties,
          suggestionId: keyId2SuggestionId(id),
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
          suggestionId: keyId2SuggestionId(id),
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
          suggestionId: keyId2SuggestionId(id),
          type: "insert",
          userId: nodeData.userId
        });
      }
      if (text.length > 0) {
        return res.push({
          comments,
          createdAt,
          keyId,
          suggestionId: keyId2SuggestionId(id),
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
  return /* @__PURE__ */ jsx66(
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
import { jsx as jsx67 } from "react/jsx-runtime";
var suggestionPlugin = toTPlatePlugin2(
  BaseSuggestionPlugin,
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
        if (!isSlateString2(leaf)) unsetActiveSuggestion();
        while (leaf.parentElement && !isSlateElement(leaf.parentElement) && !isSlateEditor(leaf.parentElement)) {
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
        return /* @__PURE__ */ jsx67(BlockSuggestion, { element });
      }
    }
  })
);

// src/components/editor/ui/block-discussion.tsx
import { jsx as jsx68, jsxs as jsxs35 } from "react/jsx-runtime";
var BlockDiscussion = (props) => {
  const { editor, element } = props;
  const commentsApi = editor.getApi(CommentsPlugin3).comment;
  const blockPath = editor.api.findPath(element);
  if (!blockPath || blockPath.length > 1) return;
  const draftCommentNode = commentsApi.node({ at: blockPath, isDraft: true });
  const commentNodes = [...commentsApi.nodes({ at: blockPath })];
  const suggestionNodes = [
    ...editor.getApi(SuggestionPlugin4).suggestion.nodes({ at: blockPath })
  ];
  if (commentNodes.length === 0 && suggestionNodes.length === 0 && !draftCommentNode) {
    return;
  }
  return (props2) => /* @__PURE__ */ jsx68(
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
  const editor = useEditorRef8();
  const resolvedSuggestions = useResolveSuggestion(suggestionNodes, blockPath);
  const resolvedDiscussions = useResolvedDiscussion(commentNodes, blockPath);
  const suggestionsCount = resolvedSuggestions.length;
  const discussionsCount = resolvedDiscussions.length;
  const totalCount = suggestionsCount + discussionsCount;
  const activeSuggestionId = usePluginOption12(suggestionPlugin, "activeId");
  const activeSuggestion = activeSuggestionId && resolvedSuggestions.find((s) => s.suggestionId === activeSuggestionId);
  const commentingBlock = usePluginOption12(commentsPlugin, "commentingBlock");
  const activeCommentId = usePluginOption12(commentsPlugin, "activeId");
  const isCommenting = activeCommentId === getDraftCommentKey2();
  const activeDiscussion = activeCommentId && resolvedDiscussions.find((d) => d.id === activeCommentId);
  const noneActive = !activeSuggestion && !activeDiscussion;
  const sortedMergedData = [
    ...resolvedDiscussions,
    ...resolvedSuggestions
  ].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  const selected = resolvedDiscussions.some((d) => d.id === activeCommentId) || resolvedSuggestions.some((s) => s.suggestionId === activeSuggestionId);
  const [_open, setOpen] = React24.useState(selected);
  const commentingCurrent = !!commentingBlock && PathApi4.equals(blockPath, commentingBlock);
  const open = _open || selected || isCommenting && !!draftCommentNode && commentingCurrent;
  const anchorElement = React24.useMemo(() => {
    let activeNode;
    if (activeSuggestion) {
      activeNode = suggestionNodes.find(
        ([node]) => TextApi2.isText(node) && editor.getApi(SuggestionPlugin4).suggestion.nodeId(node) === activeSuggestion.suggestionId
      );
    }
    if (activeCommentId) {
      if (activeCommentId === getDraftCommentKey2()) {
        activeNode = draftCommentNode;
      } else {
        activeNode = commentNodes.find(
          ([node]) => editor.getApi(CommentsPlugin3).comment.nodeId(node) === activeCommentId
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
    return /* @__PURE__ */ jsx68("div", { className: "w-full", children });
  return /* @__PURE__ */ jsx68("div", { className: "flex w-full justify-between", children: /* @__PURE__ */ jsxs35(
    Popover,
    {
      open,
      onOpenChange: (_open_) => {
        if (!_open_ && isCommenting && draftCommentNode) {
          editor.tf.unsetNodes(getDraftCommentKey2(), {
            at: [],
            mode: "lowest",
            match: (n) => n[getDraftCommentKey2()]
          });
        }
        setOpen(_open_);
      },
      children: [
        /* @__PURE__ */ jsx68("div", { className: "w-full", children }),
        anchorElement && /* @__PURE__ */ jsx68(
          PopoverAnchor,
          {
            asChild: true,
            className: "w-full",
            virtualRef: { current: anchorElement }
          }
        ),
        /* @__PURE__ */ jsx68(
          PopoverContent,
          {
            className: "max-h-[min(50dvh,calc(-24px+var(--radix-popper-available-height)))] w-[380px] max-w-[calc(100vw-24px)] min-w-[130px] overflow-y-auto p-0 data-[state=closed]:opacity-0",
            onCloseAutoFocus: (e) => e.preventDefault(),
            onOpenAutoFocus: (e) => e.preventDefault(),
            align: "center",
            side: "bottom",
            children: isCommenting ? /* @__PURE__ */ jsx68(CommentCreateForm, { className: "p-4", focusOnMount: true }) : /* @__PURE__ */ jsx68(React24.Fragment, { children: noneActive ? sortedMergedData.map(
              (item, index) => isResolvedSuggestion(item) ? /* @__PURE__ */ jsx68(
                BlockSuggestionCard,
                {
                  idx: index,
                  isLast: index === sortedMergedData.length - 1,
                  suggestion: item
                },
                item.suggestionId
              ) : /* @__PURE__ */ jsx68(
                BlockComment,
                {
                  discussion: item,
                  isLast: index === sortedMergedData.length - 1
                },
                item.id
              )
            ) : /* @__PURE__ */ jsxs35(React24.Fragment, { children: [
              activeSuggestion && /* @__PURE__ */ jsx68(
                BlockSuggestionCard,
                {
                  idx: 0,
                  isLast: true,
                  suggestion: activeSuggestion
                },
                activeSuggestion.suggestionId
              ),
              activeDiscussion && /* @__PURE__ */ jsx68(BlockComment, { discussion: activeDiscussion, isLast: true })
            ] }) })
          }
        ),
        totalCount > 0 && /* @__PURE__ */ jsx68("div", { className: "relative left-0 size-0 select-none", children: /* @__PURE__ */ jsx68(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs35(
          Button,
          {
            variant: "ghost",
            className: "mt-1 ml-1 flex h-6 gap-1 px-1.5 py-0 text-muted-foreground/80 hover:text-muted-foreground/80 data-[active=true]:bg-muted",
            "data-active": open,
            contentEditable: false,
            children: [
              suggestionsCount > 0 && discussionsCount === 0 && /* @__PURE__ */ jsx68(PencilLineIcon, { className: "size-4 shrink-0" }),
              suggestionsCount === 0 && discussionsCount > 0 && /* @__PURE__ */ jsx68(MessageSquareTextIcon, { className: "size-4 shrink-0" }),
              suggestionsCount > 0 && discussionsCount > 0 && /* @__PURE__ */ jsx68(MessagesSquareIcon, { className: "size-4 shrink-0" }),
              /* @__PURE__ */ jsx68("span", { className: "text-xs font-semibold", children: totalCount })
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
  return /* @__PURE__ */ jsxs35(React24.Fragment, { children: [
    /* @__PURE__ */ jsxs35("div", { className: "p-4", children: [
      discussion.comments.map((comment, index) => /* @__PURE__ */ jsx68(
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
      /* @__PURE__ */ jsx68(CommentCreateForm, { discussionId: discussion.id })
    ] }),
    !isLast && /* @__PURE__ */ jsx68("div", { className: "h-px w-full bg-muted" })
  ] }, discussion.id);
};
var useResolvedDiscussion = (commentNodes, blockPath) => {
  const { api, getOption, setOption } = useEditorPlugin7(commentsPlugin);
  const discussions = usePluginOption12(discussionPlugin, "discussions");
  commentNodes.forEach(([node]) => {
    const id = api.comment.nodeId(node);
    const map = getOption("uniquePathMap");
    if (!id) return;
    const previousPath = map.get(id);
    if (PathApi4.isPath(previousPath)) {
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
    if (!PathApi4.equals(firstBlockPath, blockPath)) return false;
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
var discussionPlugin = createPlatePlugin({
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
import { DndPlugin as DndPlugin2 } from "@udecode/plate-dnd";
import { PlaceholderPlugin as PlaceholderPlugin3 } from "@udecode/plate-media/react";
import { NodeIdPlugin } from "@udecode/plate-node-id";

// src/components/editor/ui/draggable.tsx
import * as React25 from "react";
import { GripVertical } from "lucide-react";
import { isType as isType2 } from "@udecode/plate";
import { BlockquotePlugin as BlockquotePlugin7 } from "@udecode/plate-block-quote/react";
import { CodeBlockPlugin as CodeBlockPlugin7 } from "@udecode/plate-code-block/react";
import {
  useDraggable,
  useDropLine
} from "@udecode/plate-dnd";
import { ExcalidrawPlugin as ExcalidrawPlugin3 } from "@udecode/plate-excalidraw/react";
import { HEADING_KEYS as HEADING_KEYS8 } from "@udecode/plate-heading";
import {
  ColumnItemPlugin as ColumnItemPlugin2,
  ColumnPlugin as ColumnPlugin4
} from "@udecode/plate-layout/react";
import {
  ImagePlugin as ImagePlugin7,
  MediaEmbedPlugin as MediaEmbedPlugin7,
  PlaceholderPlugin as PlaceholderPlugin2
} from "@udecode/plate-media/react";
import { BlockSelectionPlugin as BlockSelectionPlugin5 } from "@udecode/plate-selection/react";
import {
  TableCellPlugin as TableCellPlugin2,
  TablePlugin as TablePlugin5,
  TableRowPlugin as TableRowPlugin2
} from "@udecode/plate-table/react";
import { TogglePlugin as TogglePlugin5 } from "@udecode/plate-toggle/react";
import {
  MemoizedChildren,
  ParagraphPlugin as ParagraphPlugin7,
  useEditorRef as useEditorRef9,
  useElement as useElement3,
  usePath as usePath2,
  usePluginOption as usePluginOption13,
  useReadOnly as useReadOnly5,
  useSelected as useSelected4
} from "@udecode/plate/react";
import { jsx as jsx69, jsxs as jsxs36 } from "react/jsx-runtime";
var UNDRAGGABLE_KEYS = [
  ColumnItemPlugin2.key,
  TableRowPlugin2.key,
  TableCellPlugin2.key
];
var DraggableAboveNodes = (props) => {
  const { editor, element, path } = props;
  const readOnly = useReadOnly5();
  const enabled = React25.useMemo(() => {
    if (readOnly) return false;
    if (path.length === 1 && !isType2(editor, element, UNDRAGGABLE_KEYS)) {
      return true;
    }
    if (path.length === 3 && !isType2(editor, element, UNDRAGGABLE_KEYS)) {
      const block = editor.api.some({
        at: path,
        match: {
          type: editor.getType(ColumnPlugin4)
        }
      });
      if (block) {
        return true;
      }
    }
    if (path.length === 4 && !isType2(editor, element, UNDRAGGABLE_KEYS)) {
      const block = editor.api.some({
        at: path,
        match: {
          type: editor.getType(TablePlugin5)
        }
      });
      if (block) {
        return true;
      }
    }
    return false;
  }, [editor, element, path, readOnly]);
  if (!enabled) return;
  return (props2) => /* @__PURE__ */ jsx69(Draggable, { ...props2 });
};
function Draggable(props) {
  const { children, editor, element, path } = props;
  const blockSelectionApi = editor.getApi(BlockSelectionPlugin5).blockSelection;
  const { isDragging, previewRef, handleRef } = useDraggable({
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
  return /* @__PURE__ */ jsxs36(
    "div",
    {
      className: cn(
        "relative",
        isDragging && "opacity-50",
        STRUCTURAL_TYPES.includes(element.type) ? "group/structural" : "group"
      ),
      children: [
        !isInTable && /* @__PURE__ */ jsx69(Gutter, { children: /* @__PURE__ */ jsx69(
          "div",
          {
            className: cn(
              "slate-blockToolbarWrapper",
              "flex h-[1.5em]",
              isType2(editor, element, [
                HEADING_KEYS8.h1,
                HEADING_KEYS8.h2,
                HEADING_KEYS8.h3,
                HEADING_KEYS8.h4,
                HEADING_KEYS8.h5
              ]) && "h-[1.3em]",
              isInColumn && "h-4"
            ),
            children: /* @__PURE__ */ jsx69(
              "div",
              {
                className: cn(
                  "slate-blockToolbar",
                  "pointer-events-auto mr-1 flex items-center",
                  isInColumn && "mr-1.5"
                ),
                children: /* @__PURE__ */ jsx69(
                  Button,
                  {
                    ref: handleRef,
                    variant: "ghost",
                    className: "h-6 w-4.5 p-0",
                    "data-plate-prevent-deselect": true,
                    children: /* @__PURE__ */ jsx69(DragHandle, {})
                  }
                )
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsxs36("div", { ref: previewRef, className: "slate-blockWrapper", children: [
          /* @__PURE__ */ jsx69(MemoizedChildren, { children }),
          /* @__PURE__ */ jsx69(DropLine, {})
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
  const editor = useEditorRef9();
  const element = useElement3();
  const path = usePath2();
  const isSelectionAreaVisible = usePluginOption13(
    BlockSelectionPlugin5,
    "isSelectionAreaVisible"
  );
  const selected = useSelected4();
  const isNodeType = (keys) => isType2(editor, element, keys);
  const isInColumn = path.length === 3;
  return /* @__PURE__ */ jsx69(
    "div",
    {
      ...props,
      className: cn(
        "slate-gutterLeft",
        "absolute top-0 z-50 flex h-full -translate-x-full cursor-text hover:opacity-100 sm:opacity-0",
        STRUCTURAL_TYPES.includes(element.type) ? "group-hover/structural:opacity-100" : "group-hover:opacity-100",
        isSelectionAreaVisible && "hidden",
        !selected && "opacity-0",
        isNodeType(HEADING_KEYS8.h1) && "pb-1 text-[1.875em]",
        isNodeType(HEADING_KEYS8.h2) && "pb-1 text-[1.5em]",
        isNodeType(HEADING_KEYS8.h3) && "pt-[2px] pb-1 text-[1.25em]",
        isNodeType([HEADING_KEYS8.h4, HEADING_KEYS8.h5]) && "pt-1 pb-0 text-[1.1em]",
        isNodeType(HEADING_KEYS8.h6) && "pb-0",
        isNodeType(ParagraphPlugin7.key) && "pt-1 pb-0",
        isNodeType(["ul", "ol"]) && "pb-0",
        isNodeType(BlockquotePlugin7.key) && "pb-0",
        isNodeType(CodeBlockPlugin7.key) && "pt-6 pb-0",
        isNodeType([
          ImagePlugin7.key,
          MediaEmbedPlugin7.key,
          ExcalidrawPlugin3.key,
          TogglePlugin5.key,
          ColumnPlugin4.key
        ]) && "py-0",
        isNodeType([PlaceholderPlugin2.key, TablePlugin5.key]) && "pt-3 pb-0",
        isInColumn && "mt-2 h-4 pt-0",
        className
      ),
      contentEditable: false,
      children
    }
  );
}
var DragHandle = React25.memo(function DragHandle2() {
  const editor = useEditorRef9();
  const element = useElement3();
  return /* @__PURE__ */ jsxs36(Tooltip, { children: [
    /* @__PURE__ */ jsx69(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx69(
      "div",
      {
        className: "flex size-full items-center justify-center",
        onClick: () => {
          editor.getApi(BlockSelectionPlugin5).blockSelection.set(element.id);
        },
        role: "button",
        children: /* @__PURE__ */ jsx69(GripVertical, { className: "text-muted-foreground" })
      }
    ) }),
    /* @__PURE__ */ jsx69(TooltipContent, { children: "Drag to move" })
  ] });
});
var DropLine = React25.memo(function DropLine2({
  className,
  ...props
}) {
  const { dropLine } = useDropLine();
  if (!dropLine) return null;
  return /* @__PURE__ */ jsx69(
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
  NodeIdPlugin,
  DndPlugin2.configure({
    options: {
      enableScroller: true,
      onDropFiles: ({ dragItem, editor, target }) => {
        editor.getTransforms(PlaceholderPlugin3).insert.media(dragItem.files, { at: target, nextBlock: false });
      }
    },
    render: {
      aboveNodes: DraggableAboveNodes
    }
  })
];

// src/components/editor/plugins/equation-plugins.ts
import {
  EquationPlugin as EquationPlugin4,
  InlineEquationPlugin as InlineEquationPlugin4
} from "@udecode/plate-math/react";
var equationPlugins = [InlineEquationPlugin4, EquationPlugin4];

// src/components/editor/plugins/exit-break-plugin.ts
import { ExitBreakPlugin } from "@udecode/plate-break/react";
import { HEADING_LEVELS as HEADING_LEVELS2 } from "@udecode/plate-heading";
var exitBreakPlugin = ExitBreakPlugin.configure({
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
          allow: HEADING_LEVELS2,
          end: true,
          start: true
        },
        relative: true
      }
    ]
  }
});

// src/components/editor/plugins/indent-list-plugins.ts
import { BlockquotePlugin as BlockquotePlugin8 } from "@udecode/plate-block-quote/react";
import { CodeBlockPlugin as CodeBlockPlugin8 } from "@udecode/plate-code-block/react";
import { HEADING_LEVELS as HEADING_LEVELS3 } from "@udecode/plate-heading";
import { IndentListPlugin as IndentListPlugin4 } from "@udecode/plate-indent-list/react";
import { IndentPlugin } from "@udecode/plate-indent/react";
import { TogglePlugin as TogglePlugin6 } from "@udecode/plate-toggle/react";
import { ParagraphPlugin as ParagraphPlugin8 } from "@udecode/plate/react";

// src/components/editor/ui/indent-fire-marker.tsx
import { jsx as jsx70 } from "react/jsx-runtime";
var FireMarker = (props) => {
  const { element } = props;
  return /* @__PURE__ */ jsx70("div", { contentEditable: false, children: /* @__PURE__ */ jsx70(
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
  return /* @__PURE__ */ jsx70("li", { className: "list-none", children });
};

// src/components/editor/ui/indent-todo-marker.tsx
import {
  useIndentTodoListElement,
  useIndentTodoListElementState
} from "@udecode/plate-indent-list/react";
import { useReadOnly as useReadOnly6 } from "@udecode/plate/react";

// src/components/editor/ui/checkbox.tsx
import { CheckIcon as CheckIcon6 } from "lucide-react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { jsx as jsx71 } from "react/jsx-runtime";
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx71(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx71(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsx71(CheckIcon6, { className: "size-3.5" })
        }
      )
    }
  );
}

// src/components/editor/ui/indent-todo-marker.tsx
import { jsx as jsx72 } from "react/jsx-runtime";
function TodoMarker(props) {
  const state = useIndentTodoListElementState({ element: props.element });
  const { checkboxProps } = useIndentTodoListElement(state);
  const readOnly = useReadOnly6();
  return /* @__PURE__ */ jsx72("div", { contentEditable: false, children: /* @__PURE__ */ jsx72(
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
  return /* @__PURE__ */ jsx72(
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
  IndentPlugin.extend({
    inject: {
      targetPlugins: [
        ParagraphPlugin8.key,
        ...HEADING_LEVELS3,
        BlockquotePlugin8.key,
        CodeBlockPlugin8.key,
        TogglePlugin6.key
      ]
    }
  }),
  IndentListPlugin4.extend({
    inject: {
      targetPlugins: [
        ParagraphPlugin8.key,
        ...HEADING_LEVELS3,
        BlockquotePlugin8.key,
        CodeBlockPlugin8.key,
        TogglePlugin6.key
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
import { HEADING_LEVELS as HEADING_LEVELS4 } from "@udecode/plate-heading";
import { LineHeightPlugin } from "@udecode/plate-line-height/react";
import { ParagraphPlugin as ParagraphPlugin9 } from "@udecode/plate/react";
var lineHeightPlugin = LineHeightPlugin.configure({
  inject: {
    nodeProps: {
      defaultNodeValue: 1.5,
      validNodeValues: [1, 1.2, 1.5, 2, 3]
    },
    targetPlugins: [ParagraphPlugin9.key, ...HEADING_LEVELS4]
  }
});

// src/components/editor/plugins/link-plugin.tsx
import { LinkPlugin as LinkPlugin5 } from "@udecode/plate-link/react";

// src/components/editor/ui/link-floating-toolbar.tsx
import * as React26 from "react";
import { cva as cva10 } from "class-variance-authority";
import {
  ExternalLink,
  Link as Link2,
  Text,
  Unlink
} from "lucide-react";
import {
  flip,
  offset
} from "@udecode/plate-floating";
import {
  getLinkAttributes
} from "@udecode/plate-link";
import {
  FloatingLinkUrlInput,
  LinkPlugin as LinkPlugin4,
  useFloatingLinkEdit,
  useFloatingLinkEditState,
  useFloatingLinkInsert,
  useFloatingLinkInsertState
} from "@udecode/plate-link/react";
import {
  useEditorRef as useEditorRef10,
  useEditorSelection,
  useFormInputProps,
  usePluginOption as usePluginOption14
} from "@udecode/plate/react";
import { Fragment as Fragment9, jsx as jsx73, jsxs as jsxs37 } from "react/jsx-runtime";
var popoverVariants = cva10(
  "z-50 w-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-hidden"
);
var inputVariants = cva10(
  "flex h-[28px] w-full rounded-md border-none bg-transparent px-1.5 py-1 text-base placeholder:text-muted-foreground focus-visible:ring-transparent focus-visible:outline-none md:text-sm"
);
function LinkFloatingToolbar({
  state
}) {
  const activeCommentId = usePluginOption14({ key: "comment" }, "activeId");
  const activeSuggestionId = usePluginOption14({ key: "suggestion" }, "activeId");
  const floatingOptions = React26.useMemo(() => {
    return {
      middleware: [
        offset(8),
        flip({
          fallbackPlacements: ["bottom-end", "top-start", "top-end"],
          padding: 12
        })
      ],
      placement: activeSuggestionId || activeCommentId ? "top-start" : "bottom-start"
    };
  }, [activeCommentId, activeSuggestionId]);
  const insertState = useFloatingLinkInsertState({
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
  } = useFloatingLinkInsert(insertState);
  const editState = useFloatingLinkEditState({
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
  } = useFloatingLinkEdit(editState);
  const inputProps = useFormInputProps({
    preventDefaultOnEnterKeydown: true
  });
  if (hidden) return null;
  const input = /* @__PURE__ */ jsxs37("div", { className: "flex w-[330px] flex-col", ...inputProps, children: [
    /* @__PURE__ */ jsxs37("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx73("div", { className: "flex items-center pr-1 pl-2 text-muted-foreground", children: /* @__PURE__ */ jsx73(Link2, { className: "size-4" }) }),
      /* @__PURE__ */ jsx73(
        FloatingLinkUrlInput,
        {
          className: inputVariants(),
          placeholder: "Paste link",
          "data-plate-focus": true
        }
      )
    ] }),
    /* @__PURE__ */ jsx73(Separator2, { className: "my-1" }),
    /* @__PURE__ */ jsxs37("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx73("div", { className: "flex items-center pr-1 pl-2 text-muted-foreground", children: /* @__PURE__ */ jsx73(Text, { className: "size-4" }) }),
      /* @__PURE__ */ jsx73(
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
  const editContent = editState.isEditing ? input : /* @__PURE__ */ jsxs37("div", { className: "box-content flex items-center", children: [
    /* @__PURE__ */ jsx73(
      "button",
      {
        className: buttonVariants({ size: "sm", variant: "ghost" }),
        type: "button",
        ...editButtonProps,
        children: "Edit link"
      }
    ),
    /* @__PURE__ */ jsx73(Separator2, { orientation: "vertical" }),
    /* @__PURE__ */ jsx73(LinkOpenButton, {}),
    /* @__PURE__ */ jsx73(Separator2, { orientation: "vertical" }),
    /* @__PURE__ */ jsx73(
      "button",
      {
        className: buttonVariants({
          size: "icon",
          variant: "ghost"
        }),
        type: "button",
        ...unlinkButtonProps,
        children: /* @__PURE__ */ jsx73(Unlink, { width: 18 })
      }
    )
  ] });
  return /* @__PURE__ */ jsxs37(Fragment9, { children: [
    /* @__PURE__ */ jsx73("div", { ref: insertRef, className: popoverVariants(), ...insertProps, children: input }),
    /* @__PURE__ */ jsx73("div", { ref: editRef, className: popoverVariants(), ...editProps, children: editContent })
  ] });
}
function LinkOpenButton() {
  const editor = useEditorRef10();
  const selection = useEditorSelection();
  const attributes = React26.useMemo(
    () => {
      const entry = editor.api.node({
        match: { type: editor.getType(LinkPlugin4) }
      });
      if (!entry) {
        return {};
      }
      const [element] = entry;
      return getLinkAttributes(editor, element);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [editor, selection]
  );
  return /* @__PURE__ */ jsx73(
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
      children: /* @__PURE__ */ jsx73(ExternalLink, { width: 18 })
    }
  );
}

// src/components/editor/plugins/link-plugin.tsx
import { jsx as jsx74 } from "react/jsx-runtime";
var linkPlugin = LinkPlugin5.extend({
  render: { afterEditable: () => /* @__PURE__ */ jsx74(LinkFloatingToolbar, {}) }
});

// src/components/editor/plugins/media-plugins.tsx
import { CaptionPlugin } from "@udecode/plate-caption/react";
import {
  AudioPlugin as AudioPlugin4,
  FilePlugin as FilePlugin4,
  ImagePlugin as ImagePlugin8,
  MediaEmbedPlugin as MediaEmbedPlugin8,
  PlaceholderPlugin as PlaceholderPlugin5,
  VideoPlugin as VideoPlugin4
} from "@udecode/plate-media/react";

// src/components/editor/ui/image-preview.tsx
import { cva as cva11 } from "class-variance-authority";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Minus,
  Plus as Plus2,
  X as X2
} from "lucide-react";
import {
  PreviewImage,
  useImagePreview,
  useImagePreviewValue,
  useScaleInput
} from "@udecode/plate-media/react";
import { useEditorRef as useEditorRef11 } from "@udecode/plate/react";
import { Fragment as Fragment10, jsx as jsx75, jsxs as jsxs38 } from "react/jsx-runtime";
var toolButtonVariants = cva11("rounded bg-[rgba(0,0,0,0.5)] px-1", {
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
  const editor = useEditorRef11();
  const isOpen = useImagePreviewValue("isOpen", editor.id);
  const scale = useImagePreviewValue("scale");
  const isEditingScale = useImagePreviewValue("isEditingScale");
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
  } = useImagePreview({ scrollSpeed: SCROLL_SPEED });
  return /* @__PURE__ */ jsxs38(
    "div",
    {
      className: cn(
        "fixed top-0 left-0 z-50 h-screen w-screen select-none",
        !isOpen && "hidden"
      ),
      onContextMenu: (e) => e.stopPropagation(),
      ...maskLayerProps,
      children: [
        /* @__PURE__ */ jsx75("div", { className: "absolute inset-0 size-full bg-black opacity-30" }),
        /* @__PURE__ */ jsx75("div", { className: "absolute inset-0 size-full bg-black opacity-30" }),
        /* @__PURE__ */ jsx75("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs38("div", { className: "relative flex max-h-screen w-full items-center", children: [
          /* @__PURE__ */ jsx75(
            PreviewImage,
            {
              className: cn(
                "mx-auto block max-h-[calc(100vh-4rem)] w-auto object-contain transition-transform"
              )
            }
          ),
          /* @__PURE__ */ jsxs38(
            "div",
            {
              className: "absolute bottom-0 left-1/2 z-40 flex w-fit -translate-x-1/2 justify-center gap-4 p-2 text-center text-white",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxs38("div", { className: "flex gap-1", children: [
                  /* @__PURE__ */ jsx75(
                    "button",
                    {
                      ...prevProps,
                      className: cn(
                        toolButtonVariants({
                          variant: prevDisabled ? "disabled" : "default"
                        })
                      ),
                      type: "button",
                      children: /* @__PURE__ */ jsx75(ArrowLeft, {})
                    }
                  ),
                  (currentUrlIndex ?? 0) + 1,
                  /* @__PURE__ */ jsx75(
                    "button",
                    {
                      ...nextProps,
                      className: cn(
                        toolButtonVariants({
                          variant: nextDisabled ? "disabled" : "default"
                        })
                      ),
                      type: "button",
                      children: /* @__PURE__ */ jsx75(ArrowRight, {})
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs38("div", { className: "flex", children: [
                  /* @__PURE__ */ jsx75(
                    "button",
                    {
                      className: cn(
                        toolButtonVariants({
                          variant: zoomOutDisabled ? "disabled" : "default"
                        })
                      ),
                      ...zommOutProps,
                      type: "button",
                      children: /* @__PURE__ */ jsx75(Minus, { className: "size-4" })
                    }
                  ),
                  /* @__PURE__ */ jsx75("div", { className: "mx-px", children: isEditingScale ? /* @__PURE__ */ jsxs38(Fragment10, { children: [
                    /* @__PURE__ */ jsx75(ScaleInput, { className: "w-10 rounded px-1 text-slate-500 outline" }),
                    " ",
                    /* @__PURE__ */ jsx75("span", { children: "%" })
                  ] }) : /* @__PURE__ */ jsx75("span", { ...scaleTextProps, children: scale * 100 + "%" }) }),
                  /* @__PURE__ */ jsx75(
                    "button",
                    {
                      className: cn(
                        toolButtonVariants({
                          variant: zoomInDisabled ? "disabled" : "default"
                        })
                      ),
                      ...zoomInProps,
                      type: "button",
                      children: /* @__PURE__ */ jsx75(Plus2, { className: "size-4" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx75("button", { className: cn(toolButtonVariants()), type: "button", children: /* @__PURE__ */ jsx75(Download, { className: "size-4" }) }),
                /* @__PURE__ */ jsx75(
                  "button",
                  {
                    ...closeProps,
                    className: cn(toolButtonVariants()),
                    type: "button",
                    children: /* @__PURE__ */ jsx75(X2, { className: "size-4" })
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
  const { props: scaleInputProps, ref } = useScaleInput();
  return /* @__PURE__ */ jsx75("input", { ...scaleInputProps, ...props, ref });
}

// src/components/editor/ui/media-upload-toast.tsx
import * as React27 from "react";
import { toast } from "sonner";
import {
  PlaceholderPlugin as PlaceholderPlugin4,
  UploadErrorCode
} from "@udecode/plate-media/react";
import { usePluginOption as usePluginOption15 } from "@udecode/plate/react";
var useUploadErrorToast = () => {
  const uploadError = usePluginOption15(PlaceholderPlugin4, "error");
  React27.useEffect(() => {
    if (!uploadError) return;
    const { code, data } = uploadError;
    switch (code) {
      case UploadErrorCode.INVALID_FILE_SIZE: {
        toast.error(
          `The size of files ${data.files.map((f) => f.name).join(", ")} is invalid`
        );
        break;
      }
      case UploadErrorCode.INVALID_FILE_TYPE: {
        toast.error(
          `The type of files ${data.files.map((f) => f.name).join(", ")} is invalid`
        );
        break;
      }
      case UploadErrorCode.TOO_LARGE: {
        toast.error(
          `The size of files ${data.files.map((f) => f.name).join(", ")} is too large than ${data.maxFileSize}`
        );
        break;
      }
      case UploadErrorCode.TOO_LESS_FILES: {
        toast.error(
          `The mini um number of files is ${data.minFileCount} for ${data.fileType}`
        );
        break;
      }
      case UploadErrorCode.TOO_MANY_FILES: {
        toast.error(
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
  ImagePlugin8.extend({
    options: { disableUploadInsert: true },
    render: { afterEditable: ImagePreview }
  }),
  MediaEmbedPlugin8,
  VideoPlugin4,
  AudioPlugin4,
  FilePlugin4,
  CaptionPlugin.configure({
    options: {
      plugins: [
        ImagePlugin8,
        VideoPlugin4,
        AudioPlugin4,
        FilePlugin4,
        MediaEmbedPlugin8
      ]
    }
  }),
  PlaceholderPlugin5.configure({
    options: { disableEmptyPlaceholder: true },
    render: { afterEditable: MediaUploadToast }
  })
];

// src/components/editor/plugins/mention-plugin.ts
import { MentionPlugin as MentionPlugin2 } from "@udecode/plate-mention/react";
var mentionPlugin = MentionPlugin2.configure({
  options: { triggerPreviousCharPattern: /^$|^[\s"']$/ }
});

// src/components/editor/plugins/reset-block-type-plugin.ts
import { BlockquotePlugin as BlockquotePlugin9 } from "@udecode/plate-block-quote/react";
import { CalloutPlugin as CalloutPlugin3 } from "@udecode/plate-callout/react";
import {
  isCodeBlockEmpty,
  isSelectionAtCodeBlockStart,
  unwrapCodeBlock
} from "@udecode/plate-code-block";
import { CodeBlockPlugin as CodeBlockPlugin9 } from "@udecode/plate-code-block/react";
import { HEADING_LEVELS as HEADING_LEVELS5 } from "@udecode/plate-heading";
import {
  INDENT_LIST_KEYS as INDENT_LIST_KEYS5,
  ListStyleType as ListStyleType5
} from "@udecode/plate-indent-list";
import { ResetNodePlugin } from "@udecode/plate-reset-node/react";
import { ParagraphPlugin as ParagraphPlugin10 } from "@udecode/plate/react";
var resetBlockTypesCommonRule = {
  defaultType: ParagraphPlugin10.key,
  types: [
    ...HEADING_LEVELS5,
    BlockquotePlugin9.key,
    INDENT_LIST_KEYS5.todo,
    ListStyleType5.Disc,
    ListStyleType5.Decimal,
    CalloutPlugin3.key
  ]
};
var resetBlockTypesCodeBlockRule = {
  defaultType: ParagraphPlugin10.key,
  types: [CodeBlockPlugin9.key],
  onReset: unwrapCodeBlock
};
var resetBlockTypePlugin = ResetNodePlugin.configure({
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
        predicate: isCodeBlockEmpty
      },
      {
        ...resetBlockTypesCodeBlockRule,
        hotkey: "Backspace",
        predicate: isSelectionAtCodeBlockStart
      }
    ]
  }
});

// src/components/editor/plugins/skip-mark-plugin.ts
import {
  CodePlugin as CodePlugin2,
  SkipMarkPlugin
} from "@udecode/plate-basic-marks/react";
import { CommentsPlugin as CommentsPlugin4 } from "@udecode/plate-comments/react";
import { SuggestionPlugin as SuggestionPlugin5 } from "@udecode/plate-suggestion/react";
var skipMarkPlugin = SkipMarkPlugin.configure({
  options: {
    query: {
      allow: [SuggestionPlugin5.key, CodePlugin2.key, CommentsPlugin4.key]
    }
  }
});

// src/components/editor/plugins/soft-break-plugin.ts
import { BlockquotePlugin as BlockquotePlugin10 } from "@udecode/plate-block-quote/react";
import { SoftBreakPlugin } from "@udecode/plate-break/react";
import { CalloutPlugin as CalloutPlugin4 } from "@udecode/plate-callout/react";
import { CodeBlockPlugin as CodeBlockPlugin10 } from "@udecode/plate-code-block/react";
import {
  TableCellHeaderPlugin,
  TableCellPlugin as TableCellPlugin3
} from "@udecode/plate-table/react";
var softBreakPlugin = SoftBreakPlugin.configure({
  options: {
    rules: [
      { hotkey: "shift+enter" },
      {
        hotkey: "enter",
        query: {
          allow: [
            CodeBlockPlugin10.key,
            BlockquotePlugin10.key,
            TableCellPlugin3.key,
            TableCellHeaderPlugin.key,
            CalloutPlugin4.key
          ]
        }
      }
    ]
  }
});

// src/components/editor/plugins/table-plugin.ts
import { TablePlugin as TablePlugin6 } from "@udecode/plate-table/react";
var tablePlugin = TablePlugin6.configure({
  options: {}
});

// src/components/editor/plugins/toc-plugin.ts
import { TocPlugin as TocPlugin4 } from "@udecode/plate-heading/react";
var tocPlugin = TocPlugin4.configure({
  options: {
    // isScroll: true,
    topOffset: 80
  }
});

// src/components/editor/plugins/editor-plugins.tsx
var viewPlugins = [
  ...basicNodesPlugins,
  HorizontalRulePlugin5,
  linkPlugin,
  DatePlugin4,
  mentionPlugin,
  tablePlugin,
  TogglePlugin7,
  tocPlugin,
  ...mediaPlugins,
  ...equationPlugins,
  CalloutPlugin5,
  ColumnPlugin5,
  // Marks
  FontColorPlugin,
  FontBackgroundColorPlugin,
  FontSizePlugin,
  HighlightPlugin2,
  KbdPlugin,
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
  SlashPlugin.extend({
    options: {
      triggerQuery(editor) {
        return !editor.api.some({
          match: { type: editor.getType(CodeBlockPlugin11) }
        });
      }
    }
  }),
  autoformatPlugin,
  cursorOverlayPlugin,
  ...blockMenuPlugins,
  ...dndPlugins,
  EmojiPlugin2.configure({ options: { data: emojiMartData } }),
  exitBreakPlugin,
  resetBlockTypePlugin,
  ...deletePlugins,
  softBreakPlugin,
  TrailingBlockPlugin,
  // Deserialization
  DocxPlugin,
  markdownPlugin,
  JuicePlugin
  // UI
  // FixedToolbarPlugin,
  // FloatingToolbarPlugin,
];

// src/components/editor/plugins/fixed-toolbar-plugin.tsx
import { createPlatePlugin as createPlatePlugin2 } from "@udecode/plate/react";

// src/components/editor/ui/fixed-toolbar.tsx
import { jsx as jsx76 } from "react/jsx-runtime";
function FixedToolbar(props) {
  return /* @__PURE__ */ jsx76(
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
import {
  ArrowUpToLineIcon as ArrowUpToLineIcon2,
  BaselineIcon,
  BoldIcon,
  Code2Icon,
  HighlighterIcon,
  ItalicIcon,
  PaintBucketIcon,
  StrikethroughIcon,
  UnderlineIcon,
  WandSparklesIcon
} from "lucide-react";
import {
  BoldPlugin as BoldPlugin3,
  CodePlugin as CodePlugin3,
  ItalicPlugin as ItalicPlugin3,
  StrikethroughPlugin as StrikethroughPlugin3,
  UnderlinePlugin as UnderlinePlugin3
} from "@udecode/plate-basic-marks/react";
import {
  FontBackgroundColorPlugin as FontBackgroundColorPlugin2,
  FontColorPlugin as FontColorPlugin2
} from "@udecode/plate-font/react";
import { HighlightPlugin as HighlightPlugin3 } from "@udecode/plate-highlight/react";
import {
  AudioPlugin as AudioPlugin6,
  FilePlugin as FilePlugin6,
  ImagePlugin as ImagePlugin10,
  VideoPlugin as VideoPlugin6
} from "@udecode/plate-media/react";
import { useEditorReadOnly } from "@udecode/plate/react";

// src/components/editor/ui/ai-toolbar-button.tsx
import { AIChatPlugin as AIChatPlugin8 } from "@udecode/plate-ai/react";
import { useEditorPlugin as useEditorPlugin8 } from "@udecode/plate/react";
import { jsx as jsx77 } from "react/jsx-runtime";
function AIToolbarButton(props) {
  const { api } = useEditorPlugin8(AIChatPlugin8);
  return /* @__PURE__ */ jsx77(
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
import * as React28 from "react";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon
} from "lucide-react";
import {
  setAlign
} from "@udecode/plate-alignment";
import {
  useEditorRef as useEditorRef12,
  useSelectionFragmentProp
} from "@udecode/plate/react";
import { jsx as jsx78, jsxs as jsxs39 } from "react/jsx-runtime";
var items = [
  {
    icon: AlignLeftIcon,
    value: "left"
  },
  {
    icon: AlignCenterIcon,
    value: "center"
  },
  {
    icon: AlignRightIcon,
    value: "right"
  },
  {
    icon: AlignJustifyIcon,
    value: "justify"
  }
];
function AlignDropdownMenu(props) {
  const editor = useEditorRef12();
  const value = useSelectionFragmentProp({
    defaultValue: "start",
    structuralTypes: STRUCTURAL_TYPES,
    getProp: (node) => node.align
  });
  const [open, setOpen] = React28.useState(false);
  const IconValue = items.find((item) => item.value === value)?.icon ?? AlignLeftIcon;
  return /* @__PURE__ */ jsxs39(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsx78(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx78(ToolbarButton, { pressed: open, tooltip: "Align", isDropdown: true, children: /* @__PURE__ */ jsx78(IconValue, {}) }) }),
    /* @__PURE__ */ jsx78(DropdownMenuContent, { className: "min-w-0", align: "start", children: /* @__PURE__ */ jsx78(
      DropdownMenuRadioGroup,
      {
        value,
        onValueChange: (value2) => {
          setAlign(editor, { value: value2 });
          editor.tf.focus();
        },
        children: items.map(({ icon: Icon, value: itemValue }) => /* @__PURE__ */ jsx78(
          DropdownMenuRadioItem,
          {
            className: "pl-2 *:first:[span]:hidden",
            value: itemValue,
            children: /* @__PURE__ */ jsx78(Icon, {})
          },
          itemValue
        ))
      }
    ) })
  ] });
}

// src/components/editor/ui/color-dropdown-menu.tsx
import {
  useColorDropdownMenu,
  useColorDropdownMenuState
} from "@udecode/plate-font/react";

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
import * as React30 from "react";
import { EraserIcon } from "lucide-react";

// src/components/editor/ui/color-dropdown-menu-items.tsx
import { jsx as jsx79, jsxs as jsxs40 } from "react/jsx-runtime";
function ColorDropdownMenuItem({
  className,
  isBrightColor,
  isSelected,
  name,
  updateColor,
  value,
  ...props
}) {
  const content = /* @__PURE__ */ jsx79(
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
  return name ? /* @__PURE__ */ jsxs40(Tooltip, { children: [
    /* @__PURE__ */ jsx79(TooltipTrigger, { children: content }),
    /* @__PURE__ */ jsx79(TooltipContent, { className: "mb-1 capitalize", children: name })
  ] }) : content;
}
function ColorDropdownMenuItems({
  className,
  color,
  colors,
  updateColor,
  ...props
}) {
  return /* @__PURE__ */ jsx79(
    "div",
    {
      className: cn(
        "grid grid-cols-[repeat(10,1fr)] place-items-center gap-x-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxs40(TooltipProvider, { children: [
        colors.map(({ isBrightColor, name, value }) => /* @__PURE__ */ jsx79(
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
import { PlusIcon as PlusIcon2 } from "lucide-react";
import {
  useColorsCustom,
  useColorsCustomState
} from "@udecode/plate-font/react";

// src/components/editor/ui/color-input.tsx
import * as React29 from "react";
import { useColorInput } from "@udecode/plate-font/react";
import { useComposedRef as useComposedRef2 } from "@udecode/plate/react";
import { jsx as jsx80, jsxs as jsxs41 } from "react/jsx-runtime";
function ColorInput({
  children,
  className,
  value = "#000000",
  ...props
}) {
  const { childProps, inputRef } = useColorInput();
  return /* @__PURE__ */ jsxs41("div", { className: "flex flex-col items-center", children: [
    React29.Children.map(children, (child) => {
      if (!child) return child;
      return React29.cloneElement(child, childProps);
    }),
    /* @__PURE__ */ jsx80(
      "input",
      {
        ...props,
        ref: useComposedRef2(props.ref, inputRef),
        className: cn("size-0 overflow-hidden border-0 p-0", className),
        value,
        type: "color"
      }
    )
  ] });
}

// src/components/editor/ui/colors-custom.tsx
import { jsx as jsx81, jsxs as jsxs42 } from "react/jsx-runtime";
function ColorCustom({
  className,
  color,
  colors,
  customColors,
  updateColor,
  updateCustomColor,
  ...props
}) {
  const state = useColorsCustomState({
    color,
    colors,
    customColors,
    updateCustomColor
  });
  const { inputProps, menuItemProps } = useColorsCustom(state);
  return /* @__PURE__ */ jsx81("div", { className: cn("relative flex flex-col gap-4", className), ...props, children: /* @__PURE__ */ jsx81(
    ColorDropdownMenuItems,
    {
      color,
      colors: state.computedColors,
      updateColor,
      children: /* @__PURE__ */ jsx81(ColorInput, { ...inputProps, children: /* @__PURE__ */ jsxs42(
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
            /* @__PURE__ */ jsx81("span", { className: "sr-only", children: "Custom" }),
            /* @__PURE__ */ jsx81(PlusIcon2, {})
          ]
        }
      ) })
    }
  ) });
}

// src/components/editor/ui/color-picker.tsx
import { jsx as jsx82, jsxs as jsxs43 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs43("div", { className: cn("flex flex-col", className), ...props, children: [
    /* @__PURE__ */ jsx82(ToolbarMenuGroup, { label: "Custom Colors", children: /* @__PURE__ */ jsx82(
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
    /* @__PURE__ */ jsx82(ToolbarMenuGroup, { label: "Default Colors", children: /* @__PURE__ */ jsx82(
      ColorDropdownMenuItems,
      {
        color,
        className: "px-2",
        colors,
        updateColor
      }
    ) }),
    color && /* @__PURE__ */ jsx82(ToolbarMenuGroup, { children: /* @__PURE__ */ jsxs43(DropdownMenuItem, { className: "p-2", onClick: clearColor, children: [
      /* @__PURE__ */ jsx82(EraserIcon, {}),
      /* @__PURE__ */ jsx82("span", { children: "Clear" })
    ] }) })
  ] });
}
var ColorPicker = React30.memo(
  ColorPickerContent,
  (prev, next) => prev.color === next.color && prev.colors === next.colors && prev.customColors === next.customColors
);

// src/components/editor/ui/color-dropdown-menu.tsx
import { jsx as jsx83, jsxs as jsxs44 } from "react/jsx-runtime";
function ColorDropdownMenu({
  children,
  nodeType,
  tooltip
}) {
  const state = useColorDropdownMenuState({
    closeOnSelect: true,
    colors: DEFAULT_COLORS,
    customColors: DEFAULT_CUSTOM_COLORS,
    nodeType
  });
  const { buttonProps, menuProps } = useColorDropdownMenu(state);
  return /* @__PURE__ */ jsxs44(DropdownMenu, { modal: false, ...menuProps, children: [
    /* @__PURE__ */ jsx83(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx83(ToolbarButton, { tooltip, ...buttonProps, children }) }),
    /* @__PURE__ */ jsx83(DropdownMenuContent, { align: "start", children: /* @__PURE__ */ jsx83(
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
import * as React31 from "react";
import { MessageSquareTextIcon as MessageSquareTextIcon2 } from "lucide-react";
import { getDraftCommentKey as getDraftCommentKey3 } from "@udecode/plate-comments";
import { useEditorPlugin as useEditorPlugin9 } from "@udecode/plate/react";
import { jsx as jsx84 } from "react/jsx-runtime";
function CommentToolbarButton() {
  const { editor, setOption, tf } = useEditorPlugin9(commentsPlugin);
  const onCommentToolbarButton = React31.useCallback(() => {
    if (!editor.selection) return;
    tf.comment.setDraft();
    editor.tf.collapse();
    setOption("activeId", getDraftCommentKey3());
    setOption("commentingBlock", editor.selection.focus.path.slice(0, 1));
  }, [editor.selection, editor.tf, setOption, tf.comment]);
  return /* @__PURE__ */ jsx84(
    ToolbarButton,
    {
      onClick: onCommentToolbarButton,
      "data-plate-prevent-overlay": true,
      tooltip: "Comment",
      children: /* @__PURE__ */ jsx84(MessageSquareTextIcon2, {})
    }
  );
}

// src/components/editor/ui/emoji-dropdown-menu.tsx
import { Smile } from "lucide-react";
import {
  useEmojiDropdownMenuState
} from "@udecode/plate-emoji/react";

// src/components/editor/ui/emoji-icons.tsx
import {
  AppleIcon,
  ClockIcon,
  CompassIcon,
  FlagIcon,
  LeafIcon,
  LightbulbIcon,
  MusicIcon,
  SearchIcon as SearchIcon2,
  SmileIcon as SmileIcon2,
  StarIcon,
  XIcon as XIcon4
} from "lucide-react";
import { jsx as jsx85, jsxs as jsxs45 } from "react/jsx-runtime";
var emojiCategoryIcons = {
  activity: {
    outline: /* @__PURE__ */ jsxs45(
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
          /* @__PURE__ */ jsx85("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ jsx85("path", { d: "M2.1 13.4A10.1 10.1 0 0 0 13.4 2.1" }),
          /* @__PURE__ */ jsx85("path", { d: "m5 4.9 14 14.2" }),
          /* @__PURE__ */ jsx85("path", { d: "M21.9 10.6a10.1 10.1 0 0 0-11.3 11.3" })
        ]
      }
    ),
    solid: /* @__PURE__ */ jsxs45(
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
          /* @__PURE__ */ jsx85("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ jsx85("path", { d: "M2.1 13.4A10.1 10.1 0 0 0 13.4 2.1" }),
          /* @__PURE__ */ jsx85("path", { d: "m5 4.9 14 14.2" }),
          /* @__PURE__ */ jsx85("path", { d: "M21.9 10.6a10.1 10.1 0 0 0-11.3 11.3" })
        ]
      }
    )
  },
  custom: {
    outline: /* @__PURE__ */ jsx85(StarIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsx85(StarIcon, { className: "size-full" })
  },
  flags: {
    outline: /* @__PURE__ */ jsx85(FlagIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsx85(FlagIcon, { className: "size-full" })
  },
  foods: {
    outline: /* @__PURE__ */ jsx85(AppleIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsx85(AppleIcon, { className: "size-full" })
  },
  frequent: {
    outline: /* @__PURE__ */ jsx85(ClockIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsx85(ClockIcon, { className: "size-full" })
  },
  nature: {
    outline: /* @__PURE__ */ jsx85(LeafIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsx85(LeafIcon, { className: "size-full" })
  },
  objects: {
    outline: /* @__PURE__ */ jsx85(LightbulbIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsx85(LightbulbIcon, { className: "size-full" })
  },
  people: {
    outline: /* @__PURE__ */ jsx85(SmileIcon2, { className: "size-full" }),
    solid: /* @__PURE__ */ jsx85(SmileIcon2, { className: "size-full" })
  },
  places: {
    outline: /* @__PURE__ */ jsx85(CompassIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsx85(CompassIcon, { className: "size-full" })
  },
  symbols: {
    outline: /* @__PURE__ */ jsx85(MusicIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsx85(MusicIcon, { className: "size-full" })
  }
};
var emojiSearchIcons = {
  delete: /* @__PURE__ */ jsx85(XIcon4, { className: "size-4 text-current" }),
  loupe: /* @__PURE__ */ jsx85(SearchIcon2, { className: "size-4 text-current" })
};

// src/components/editor/ui/emoji-picker.tsx
import { EmojiSettings as EmojiSettings2 } from "@udecode/plate-emoji";

// src/components/editor/ui/emoji-picker-content.tsx
import * as React32 from "react";
import {
  EmojiSettings
} from "@udecode/plate-emoji";
import { jsx as jsx86, jsxs as jsxs46 } from "react/jsx-runtime";
var Button3 = React32.memo(
  ({ emoji, index, onMouseOver, onSelect }) => {
    return /* @__PURE__ */ jsxs46(
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
          /* @__PURE__ */ jsx86(
            "div",
            {
              className: "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsx86(
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
  ({ emojiLibrary, row, onMouseOver, onSelectEmoji }) => /* @__PURE__ */ jsx86("div", { className: "flex", "data-index": row.id, children: row.elements.map((emojiId, index) => /* @__PURE__ */ jsx86(
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
  settings = EmojiSettings,
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
      return /* @__PURE__ */ jsxs46(
        "div",
        {
          ref: section.root,
          style: { width: getRowWidth },
          "data-id": categoryId,
          children: [
            /* @__PURE__ */ jsx86("div", { className: "sticky -top-px z-1 bg-popover/90 p-1 py-2 text-sm font-semibold backdrop-blur-xs", children: i18n.categories[categoryId] }),
            /* @__PURE__ */ jsx86(
              "div",
              {
                className: "relative flex flex-wrap",
                style: { height: section.getRows().length * buttonSize.value },
                children: isCategoryVisible(categoryId) && section.getRows().map((row) => /* @__PURE__ */ jsx86(
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
    return /* @__PURE__ */ jsxs46("div", { style: { width: getRowWidth }, "data-id": "search", children: [
      /* @__PURE__ */ jsx86("div", { className: "sticky -top-px z-1 bg-popover/90 p-1 py-2 text-sm font-semibold text-card-foreground backdrop-blur-xs", children: i18n.searchResult }),
      /* @__PURE__ */ jsx86("div", { className: "relative flex flex-wrap", children: searchResult.map((emoji, index) => /* @__PURE__ */ jsx86(
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
  return /* @__PURE__ */ jsx86(
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
      children: /* @__PURE__ */ jsx86("div", { ref: refs.current.content, className: "h-full", children: isSearching ? SearchList() : EmojiList() })
    }
  );
}

// src/components/editor/ui/emoji-picker-navigation.tsx
import { jsx as jsx87, jsxs as jsxs47 } from "react/jsx-runtime";
function EmojiPickerNavigation({
  emojiLibrary,
  focusedCategory,
  i18n,
  icons,
  onClick
}) {
  return /* @__PURE__ */ jsx87(TooltipProvider, { delayDuration: 500, children: /* @__PURE__ */ jsx87(
    "nav",
    {
      id: "emoji-nav",
      className: "mb-2.5 border-0 border-b border-solid border-b-border p-1.5",
      children: /* @__PURE__ */ jsx87("div", { className: "relative flex items-center justify-evenly", children: emojiLibrary.getGrid().sections().map(({ id }) => /* @__PURE__ */ jsxs47(Tooltip, { children: [
        /* @__PURE__ */ jsx87(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx87(
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
            children: /* @__PURE__ */ jsx87("span", { className: "inline-flex size-5 items-center justify-center", children: icons.categories[id].outline })
          }
        ) }),
        /* @__PURE__ */ jsx87(TooltipContent, { side: "bottom", children: i18n.categories[id] })
      ] }, id)) })
    }
  ) });
}

// src/components/editor/ui/emoji-picker-preview.tsx
import { Fragment as Fragment11, jsx as jsx88, jsxs as jsxs48 } from "react/jsx-runtime";
function EmojiPreview({ emoji }) {
  return /* @__PURE__ */ jsxs48("div", { className: "flex h-14 max-h-14 min-h-14 items-center border-t border-muted p-2", children: [
    /* @__PURE__ */ jsx88("div", { className: "flex items-center justify-center text-2xl", children: emoji?.skins[0].native }),
    /* @__PURE__ */ jsxs48("div", { className: "overflow-hidden pl-2", children: [
      /* @__PURE__ */ jsx88("div", { className: "truncate text-sm font-semibold", children: emoji?.name }),
      /* @__PURE__ */ jsx88("div", { className: "truncate text-sm", children: `:${emoji?.id}:` })
    ] })
  ] });
}
function NoEmoji({ i18n }) {
  return /* @__PURE__ */ jsxs48("div", { className: "flex h-14 max-h-14 min-h-14 items-center border-t border-muted p-2", children: [
    /* @__PURE__ */ jsx88("div", { className: "flex items-center justify-center text-2xl", children: "\u{1F622}" }),
    /* @__PURE__ */ jsxs48("div", { className: "overflow-hidden pl-2", children: [
      /* @__PURE__ */ jsx88("div", { className: "truncate text-sm font-bold", children: i18n.searchNoResultsTitle }),
      /* @__PURE__ */ jsx88("div", { className: "truncate text-sm", children: i18n.searchNoResultsSubtitle })
    ] })
  ] });
}
function PickAnEmoji({ i18n }) {
  return /* @__PURE__ */ jsxs48("div", { className: "flex h-14 max-h-14 min-h-14 items-center border-t border-muted p-2", children: [
    /* @__PURE__ */ jsx88("div", { className: "flex items-center justify-center text-2xl", children: "\u261D\uFE0F" }),
    /* @__PURE__ */ jsx88("div", { className: "overflow-hidden pl-2", children: /* @__PURE__ */ jsx88("div", { className: "truncate text-sm font-semibold", children: i18n.pick }) })
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
  return /* @__PURE__ */ jsxs48(Fragment11, { children: [
    showPreview && /* @__PURE__ */ jsx88(EmojiPreview, { emoji, ...props }),
    showPickEmoji && /* @__PURE__ */ jsx88(PickAnEmoji, { i18n, ...props }),
    showNoEmoji && /* @__PURE__ */ jsx88(NoEmoji, { i18n, ...props })
  ] });
}

// src/components/editor/ui/emoji-picker-search-and-clear.tsx
import { jsx as jsx89, jsxs as jsxs49 } from "react/jsx-runtime";
function EmojiPickerSearchAndClear({
  clearSearch,
  i18n,
  searchValue
}) {
  return /* @__PURE__ */ jsxs49("div", { className: "flex items-center text-foreground", children: [
    /* @__PURE__ */ jsx89(
      "div",
      {
        className: cn(
          "absolute top-1/2 left-2.5 z-10 flex size-5 -translate-y-1/2 items-center justify-center text-foreground"
        ),
        children: emojiSearchIcons.loupe
      }
    ),
    searchValue && /* @__PURE__ */ jsx89(
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
import { jsx as jsx90, jsxs as jsxs50 } from "react/jsx-runtime";
function EmojiPickerSearchBar({
  children,
  i18n,
  searchValue,
  setSearch
}) {
  return /* @__PURE__ */ jsx90("div", { className: "flex items-center px-2", children: /* @__PURE__ */ jsxs50("div", { className: "relative flex grow items-center", children: [
    /* @__PURE__ */ jsx90(
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
import { jsx as jsx91, jsxs as jsxs51 } from "react/jsx-runtime";
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
  settings = EmojiSettings2,
  visibleCategories,
  handleCategoryClick,
  onMouseOver,
  onSelectEmoji
}) {
  return /* @__PURE__ */ jsxs51(
    "div",
    {
      className: cn(
        "flex flex-col rounded-xl bg-popover text-popover-foreground",
        "h-[23rem] w-80 border shadow-md"
      ),
      children: [
        /* @__PURE__ */ jsx91(
          EmojiPickerNavigation,
          {
            onClick: handleCategoryClick,
            emojiLibrary,
            focusedCategory,
            i18n,
            icons
          }
        ),
        /* @__PURE__ */ jsx91(
          EmojiPickerSearchBar,
          {
            i18n,
            searchValue,
            setSearch,
            children: /* @__PURE__ */ jsx91(
              EmojiPickerSearchAndClear,
              {
                clearSearch,
                i18n,
                searchValue
              }
            )
          }
        ),
        /* @__PURE__ */ jsx91(
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
        /* @__PURE__ */ jsx91(
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
import * as Popover2 from "@radix-ui/react-popover";
import { jsx as jsx92, jsxs as jsxs52 } from "react/jsx-runtime";
function EmojiToolbarDropdown({
  children,
  control,
  isOpen,
  setIsOpen
}) {
  return /* @__PURE__ */ jsxs52(Popover2.Root, { open: isOpen, onOpenChange: setIsOpen, children: [
    /* @__PURE__ */ jsx92(Popover2.Trigger, { asChild: true, children: control }),
    /* @__PURE__ */ jsx92(Popover2.Portal, { children: /* @__PURE__ */ jsx92(Popover2.Content, { className: "z-100", children }) })
  ] });
}

// src/components/editor/ui/emoji-dropdown-menu.tsx
import { jsx as jsx93 } from "react/jsx-runtime";
function EmojiDropdownMenu({
  options,
  ...props
}) {
  const { emojiPickerState, isOpen, setIsOpen } = useEmojiDropdownMenuState(options);
  return /* @__PURE__ */ jsx93(
    EmojiToolbarDropdown,
    {
      control: /* @__PURE__ */ jsx93(ToolbarButton, { pressed: isOpen, tooltip: "Emoji", isDropdown: true, ...props, children: /* @__PURE__ */ jsx93(Smile, {}) }),
      isOpen,
      setIsOpen,
      children: /* @__PURE__ */ jsx93(
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
import * as React33 from "react";
import html2canvas from "html2canvas-pro";
import {
  all as all3,
  createLowlight as createLowlight3
} from "lowlight";
import { ArrowDownToLineIcon } from "lucide-react";
import { withProps as withProps3 } from "@udecode/cn";
import {
  BaseParagraphPlugin as BaseParagraphPlugin2,
  createSlateEditor,
  serializeHtml,
  SlateLeaf as SlateLeaf7
} from "@udecode/plate";
import { BaseAlignPlugin } from "@udecode/plate-alignment";
import {
  BaseBoldPlugin as BaseBoldPlugin2,
  BaseCodePlugin as BaseCodePlugin2,
  BaseItalicPlugin as BaseItalicPlugin2,
  BaseStrikethroughPlugin as BaseStrikethroughPlugin2,
  BaseSubscriptPlugin as BaseSubscriptPlugin2,
  BaseSuperscriptPlugin as BaseSuperscriptPlugin2,
  BaseUnderlinePlugin as BaseUnderlinePlugin2
} from "@udecode/plate-basic-marks";
import { BaseBlockquotePlugin as BaseBlockquotePlugin2 } from "@udecode/plate-block-quote";
import {
  BaseCodeBlockPlugin as BaseCodeBlockPlugin2,
  BaseCodeLinePlugin as BaseCodeLinePlugin2,
  BaseCodeSyntaxPlugin as BaseCodeSyntaxPlugin2
} from "@udecode/plate-code-block";
import { BaseCommentsPlugin as BaseCommentsPlugin2 } from "@udecode/plate-comments";
import { BaseDatePlugin as BaseDatePlugin2 } from "@udecode/plate-date";
import {
  BaseFontBackgroundColorPlugin as BaseFontBackgroundColorPlugin2,
  BaseFontColorPlugin as BaseFontColorPlugin2,
  BaseFontSizePlugin as BaseFontSizePlugin2
} from "@udecode/plate-font";
import {
  BaseHeadingPlugin as BaseHeadingPlugin2,
  BaseTocPlugin as BaseTocPlugin3,
  HEADING_KEYS as HEADING_KEYS9,
  HEADING_LEVELS as HEADING_LEVELS6
} from "@udecode/plate-heading";
import { BaseHighlightPlugin as BaseHighlightPlugin2 } from "@udecode/plate-highlight";
import { BaseHorizontalRulePlugin as BaseHorizontalRulePlugin2 } from "@udecode/plate-horizontal-rule";
import { BaseIndentPlugin as BaseIndentPlugin2 } from "@udecode/plate-indent";
import { BaseIndentListPlugin as BaseIndentListPlugin2 } from "@udecode/plate-indent-list";
import { BaseKbdPlugin as BaseKbdPlugin2 } from "@udecode/plate-kbd";
import {
  BaseColumnItemPlugin as BaseColumnItemPlugin2,
  BaseColumnPlugin as BaseColumnPlugin2
} from "@udecode/plate-layout";
import { BaseLineHeightPlugin } from "@udecode/plate-line-height";
import { BaseLinkPlugin as BaseLinkPlugin2 } from "@udecode/plate-link";
import { MarkdownPlugin as MarkdownPlugin2 } from "@udecode/plate-markdown";
import {
  BaseEquationPlugin as BaseEquationPlugin2,
  BaseInlineEquationPlugin as BaseInlineEquationPlugin2
} from "@udecode/plate-math";
import {
  BaseAudioPlugin as BaseAudioPlugin2,
  BaseFilePlugin as BaseFilePlugin2,
  BaseImagePlugin as BaseImagePlugin2,
  BaseMediaEmbedPlugin,
  BaseVideoPlugin as BaseVideoPlugin2
} from "@udecode/plate-media";
import { BaseMentionPlugin as BaseMentionPlugin2 } from "@udecode/plate-mention";
import {
  BaseTableCellHeaderPlugin as BaseTableCellHeaderPlugin2,
  BaseTableCellPlugin as BaseTableCellPlugin2,
  BaseTablePlugin as BaseTablePlugin4,
  BaseTableRowPlugin as BaseTableRowPlugin2
} from "@udecode/plate-table";
import { BaseTogglePlugin } from "@udecode/plate-toggle";
import { useEditorRef as useEditorRef13 } from "@udecode/plate/react";

// src/components/editor/ui/comment-leaf-static.tsx
import { SlateLeaf as SlateLeaf5 } from "@udecode/plate";
import { jsx as jsx94 } from "react/jsx-runtime";
function CommentLeafStatic(props) {
  return /* @__PURE__ */ jsx94(
    SlateLeaf5,
    {
      ...props,
      className: "border-b-2 border-b-highlight/35 bg-highlight/15",
      children: props.children
    }
  );
}

// src/components/editor/ui/date-element-static.tsx
import { SlateElement as SlateElement22 } from "@udecode/plate";
import { jsx as jsx95, jsxs as jsxs53 } from "react/jsx-runtime";
function DateElementStatic(props) {
  const { element } = props;
  return /* @__PURE__ */ jsxs53(SlateElement22, { className: "inline-block", ...props, children: [
    /* @__PURE__ */ jsx95("span", { className: "w-fit rounded-sm bg-muted px-1 text-muted-foreground", children: element.date ? (() => {
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
    })() : /* @__PURE__ */ jsx95("span", { children: "Pick a date" }) }),
    props.children
  ] });
}

// src/components/editor/ui/kbd-leaf-static.tsx
import { SlateLeaf as SlateLeaf6 } from "@udecode/plate";
import { jsx as jsx96 } from "react/jsx-runtime";
function KbdLeafStatic(props) {
  return /* @__PURE__ */ jsx96(
    SlateLeaf6,
    {
      ...props,
      as: "kbd",
      className: "rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-sm shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(248,_249,_250)_0px_1px_5px_0px_inset,_rgb(193,_200,_205)_0px_0px_0px_0.5px,_rgb(193,_200,_205)_0px_2px_1px_-1px,_rgb(193,_200,_205)_0px_1px_0px_0px] dark:shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(26,_29,_30)_0px_1px_5px_0px_inset,_rgb(76,_81,_85)_0px_0px_0px_0.5px,_rgb(76,_81,_85)_0px_2px_1px_-1px,_rgb(76,_81,_85)_0px_1px_0px_0px]",
      children: props.children
    }
  );
}

// src/components/editor/ui/toggle-element-static.tsx
import { SlateElement as SlateElement23 } from "@udecode/plate";
import { ChevronRight as ChevronRight2 } from "lucide-react";
import { jsx as jsx97, jsxs as jsxs54 } from "react/jsx-runtime";
function ToggleElementStatic(props) {
  return /* @__PURE__ */ jsxs54(SlateElement23, { ...props, className: "pl-6", children: [
    /* @__PURE__ */ jsx97(
      "div",
      {
        className: "absolute top-0 -left-0.5 size-6 cursor-pointer items-center justify-center rounded-md p-px text-muted-foreground transition-colors select-none hover:bg-accent [&_svg]:size-4",
        contentEditable: false,
        children: /* @__PURE__ */ jsx97(ChevronRight2, { className: "rotate-0 transition-transform duration-75" })
      }
    ),
    props.children
  ] });
}

// src/components/editor/ui/export-toolbar-button.tsx
import { jsx as jsx98, jsxs as jsxs55 } from "react/jsx-runtime";
var siteUrl = process.env.WEBSITE_URL || "https://platejs.org";
var lowlight3 = createLowlight3(all3);
function ExportToolbarButton(props) {
  const editor = useEditorRef13();
  const [open, setOpen] = React33.useState(false);
  const getCanvas = async () => {
    const style = document.createElement("style");
    document.head.append(style);
    const canvas = await html2canvas(editor.api.toDOMNode(editor), {
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
      [BaseAudioPlugin2.key]: MediaAudioElementStatic,
      [BaseBlockquotePlugin2.key]: BlockquoteElementStatic,
      [BaseBoldPlugin2.key]: withProps3(SlateLeaf7, { as: "strong" }),
      [BaseCodeBlockPlugin2.key]: CodeBlockElementStatic,
      [BaseCodeLinePlugin2.key]: CodeLineElementStatic,
      [BaseCodePlugin2.key]: CodeLeafStatic,
      [BaseCodeSyntaxPlugin2.key]: CodeSyntaxLeafStatic,
      [BaseColumnItemPlugin2.key]: ColumnElementStatic,
      [BaseColumnPlugin2.key]: ColumnGroupElementStatic,
      [BaseCommentsPlugin2.key]: CommentLeafStatic,
      [BaseDatePlugin2.key]: DateElementStatic,
      [BaseEquationPlugin2.key]: EquationElementStatic,
      [BaseFilePlugin2.key]: MediaFileElementStatic,
      [BaseHighlightPlugin2.key]: HighlightLeafStatic,
      [BaseHorizontalRulePlugin2.key]: HrElementStatic,
      [BaseImagePlugin2.key]: ImageElementStatic,
      [BaseInlineEquationPlugin2.key]: InlineEquationElementStatic,
      [BaseItalicPlugin2.key]: withProps3(SlateLeaf7, { as: "em" }),
      [BaseKbdPlugin2.key]: KbdLeafStatic,
      [BaseLinkPlugin2.key]: LinkElementStatic,
      // [BaseMediaEmbedPlugin.key]: MediaEmbedElementStatic,
      [BaseMentionPlugin2.key]: MentionElementStatic,
      [BaseParagraphPlugin2.key]: ParagraphElementStatic,
      [BaseStrikethroughPlugin2.key]: withProps3(SlateLeaf7, { as: "del" }),
      [BaseSubscriptPlugin2.key]: withProps3(SlateLeaf7, { as: "sub" }),
      [BaseSuperscriptPlugin2.key]: withProps3(SlateLeaf7, { as: "sup" }),
      [BaseTableCellHeaderPlugin2.key]: TableCellHeaderStaticElement,
      [BaseTableCellPlugin2.key]: TableCellElementStatic,
      [BaseTablePlugin4.key]: TableElementStatic,
      [BaseTableRowPlugin2.key]: TableRowElementStatic,
      [BaseTocPlugin3.key]: TocElementStatic,
      [BaseTogglePlugin.key]: ToggleElementStatic,
      [BaseUnderlinePlugin2.key]: withProps3(SlateLeaf7, { as: "u" }),
      [BaseVideoPlugin2.key]: MediaVideoElementStatic,
      [HEADING_KEYS9.h1]: withProps3(HeadingElementStatic, { variant: "h1" }),
      [HEADING_KEYS9.h2]: withProps3(HeadingElementStatic, { variant: "h2" }),
      [HEADING_KEYS9.h3]: withProps3(HeadingElementStatic, { variant: "h3" }),
      [HEADING_KEYS9.h4]: withProps3(HeadingElementStatic, { variant: "h4" }),
      [HEADING_KEYS9.h5]: withProps3(HeadingElementStatic, { variant: "h5" }),
      [HEADING_KEYS9.h6]: withProps3(HeadingElementStatic, { variant: "h6" })
    };
    const editorStatic = createSlateEditor({
      plugins: [
        BaseColumnPlugin2,
        BaseColumnItemPlugin2,
        BaseTocPlugin3,
        BaseVideoPlugin2,
        BaseAudioPlugin2,
        BaseParagraphPlugin2,
        BaseHeadingPlugin2,
        BaseMediaEmbedPlugin,
        BaseBoldPlugin2,
        BaseCodePlugin2,
        BaseItalicPlugin2,
        BaseStrikethroughPlugin2,
        BaseSubscriptPlugin2,
        BaseSuperscriptPlugin2,
        BaseUnderlinePlugin2,
        BaseBlockquotePlugin2,
        BaseDatePlugin2,
        BaseEquationPlugin2,
        BaseInlineEquationPlugin2,
        BaseCodeBlockPlugin2.configure({
          options: {
            lowlight: lowlight3
          }
        }),
        BaseIndentPlugin2.extend({
          inject: {
            targetPlugins: [
              BaseParagraphPlugin2.key,
              BaseBlockquotePlugin2.key,
              BaseCodeBlockPlugin2.key
            ]
          }
        }),
        BaseIndentListPlugin2.extend({
          inject: {
            targetPlugins: [
              BaseParagraphPlugin2.key,
              ...HEADING_LEVELS6,
              BaseBlockquotePlugin2.key,
              BaseCodeBlockPlugin2.key,
              BaseTogglePlugin.key
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
        BaseLinkPlugin2,
        BaseTableRowPlugin2,
        BaseTablePlugin4,
        BaseTableCellPlugin2,
        BaseHorizontalRulePlugin2,
        BaseFontColorPlugin2,
        BaseFontBackgroundColorPlugin2,
        BaseFontSizePlugin2,
        BaseKbdPlugin2,
        BaseAlignPlugin.extend({
          inject: {
            targetPlugins: [
              BaseParagraphPlugin2.key,
              BaseMediaEmbedPlugin.key,
              ...HEADING_LEVELS6,
              BaseImagePlugin2.key
            ]
          }
        }),
        BaseLineHeightPlugin,
        BaseHighlightPlugin2,
        BaseFilePlugin2,
        BaseImagePlugin2,
        BaseMentionPlugin2,
        BaseCommentsPlugin2,
        BaseTogglePlugin
      ],
      value: editor.children
    });
    const editorHtml = await serializeHtml(editorStatic, {
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
    const md = editor.getApi(MarkdownPlugin2).markdown.serialize();
    const url = `data:text/markdown;charset=utf-8,${encodeURIComponent(md)}`;
    type === "copy" && await navigator.clipboard.writeText(url);
    type === "download" && await downloadFile(url, "plate.md");
  };
  return /* @__PURE__ */ jsxs55(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsx98(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx98(ToolbarButton, { pressed: open, tooltip: "Export", isDropdown: true, children: /* @__PURE__ */ jsx98(ArrowDownToLineIcon, { className: "size-4" }) }) }),
    /* @__PURE__ */ jsx98(DropdownMenuContent, { align: "start", children: /* @__PURE__ */ jsxs55(DropdownMenuGroup, { children: [
      /* @__PURE__ */ jsx98(DropdownMenuItem, { onSelect: () => exportToHtml("download"), children: "Export as HTML" }),
      /* @__PURE__ */ jsx98(DropdownMenuItem, { onSelect: () => exportToHtml("copy"), children: "Export as Copy HTML" }),
      /* @__PURE__ */ jsx98(DropdownMenuItem, { onSelect: exportToPdf, children: "Export as PDF" }),
      /* @__PURE__ */ jsx98(DropdownMenuItem, { onSelect: exportToImage, children: "Export as Image" }),
      /* @__PURE__ */ jsx98(DropdownMenuItem, { onSelect: () => exportToMarkdown("download"), children: "Export as Markdown" }),
      /* @__PURE__ */ jsx98(DropdownMenuItem, { onSelect: () => exportToMarkdown("copy"), children: "Export as Copy Markdown" })
    ] }) })
  ] });
}

// src/components/editor/ui/font-size-toolbar-button.tsx
import * as React34 from "react";
import {
  Minus as Minus2,
  Plus as Plus3
} from "lucide-react";
import { toUnitLess } from "@udecode/plate-font";
import { FontSizePlugin as FontSizePlugin2 } from "@udecode/plate-font/react";
import { HEADING_KEYS as HEADING_KEYS10 } from "@udecode/plate-heading";
import {
  useEditorPlugin as useEditorPlugin10,
  useEditorSelector as useEditorSelector2
} from "@udecode/plate/react";
import { jsx as jsx99, jsxs as jsxs56 } from "react/jsx-runtime";
var DEFAULT_FONT_SIZE = "16";
var FONT_SIZE_MAP = {
  [HEADING_KEYS10.h1]: "36",
  [HEADING_KEYS10.h2]: "24",
  [HEADING_KEYS10.h3]: "20"
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
  const { api, editor } = useEditorPlugin10(FontSizePlugin2);
  const cursorFontSize = useEditorSelector2((editor2) => {
    const fontSize = editor2.api.marks()?.[FontSizePlugin2.key];
    if (fontSize) {
      return toUnitLess(fontSize);
    }
    const [block] = editor2.api.block() || [];
    if (!block?.type) return DEFAULT_FONT_SIZE;
    return block.type in FONT_SIZE_MAP ? FONT_SIZE_MAP[block.type] : DEFAULT_FONT_SIZE;
  }, []);
  const handleInputChange = () => {
    const newSize = toUnitLess(inputValue);
    if (Number.parseInt(newSize) < 1 || Number.parseInt(newSize) > 100) {
      editor.tf.focus();
      return;
    }
    if (newSize !== toUnitLess(cursorFontSize)) {
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
  return /* @__PURE__ */ jsxs56("div", { className: "flex h-7 items-center gap-1 rounded-md bg-muted/60 p-0", children: [
    /* @__PURE__ */ jsx99(ToolbarButton, { onClick: () => handleFontSizeChange(-1), children: /* @__PURE__ */ jsx99(Minus2, {}) }),
    /* @__PURE__ */ jsxs56(Popover, { open: isFocused, modal: false, children: [
      /* @__PURE__ */ jsx99(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx99(
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
            setInputValue(toUnitLess(cursorFontSize));
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
      /* @__PURE__ */ jsx99(
        PopoverContent,
        {
          className: "w-10 px-px py-1",
          onOpenAutoFocus: (e) => e.preventDefault(),
          children: FONT_SIZES.map((size) => /* @__PURE__ */ jsx99(
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
    /* @__PURE__ */ jsx99(ToolbarButton, { onClick: () => handleFontSizeChange(1), children: /* @__PURE__ */ jsx99(Plus3, {}) })
  ] });
}

// src/components/editor/ui/history-toolbar-button.tsx
import { useEditorRef as useEditorRef14, useEditorSelector as useEditorSelector3 } from "@udecode/plate/react";
import { Redo2Icon, Undo2Icon } from "lucide-react";
import { jsx as jsx100 } from "react/jsx-runtime";
function RedoToolbarButton(props) {
  const editor = useEditorRef14();
  const disabled = useEditorSelector3(
    (editor2) => editor2.history.redos.length === 0,
    []
  );
  return /* @__PURE__ */ jsx100(
    ToolbarButton,
    {
      ...props,
      disabled,
      onClick: () => editor.redo(),
      onMouseDown: (e) => e.preventDefault(),
      tooltip: "Redo",
      children: /* @__PURE__ */ jsx100(Redo2Icon, {})
    }
  );
}
function UndoToolbarButton(props) {
  const editor = useEditorRef14();
  const disabled = useEditorSelector3(
    (editor2) => editor2.history.undos.length === 0,
    []
  );
  return /* @__PURE__ */ jsx100(
    ToolbarButton,
    {
      ...props,
      disabled,
      onClick: () => editor.undo(),
      onMouseDown: (e) => e.preventDefault(),
      tooltip: "Undo",
      children: /* @__PURE__ */ jsx100(Undo2Icon, {})
    }
  );
}

// src/components/editor/ui/import-toolbar-button.tsx
import * as React35 from "react";
import { ArrowUpToLineIcon } from "lucide-react";
import { useFilePicker } from "use-file-picker";
import { getEditorDOMFromHtmlString } from "@udecode/plate";
import { MarkdownPlugin as MarkdownPlugin3 } from "@udecode/plate-markdown";
import { useEditorRef as useEditorRef15 } from "@udecode/plate/react";
import { jsx as jsx101, jsxs as jsxs57 } from "react/jsx-runtime";
function ImportToolbarButton(props) {
  const editor = useEditorRef15();
  const [open, setOpen] = React35.useState(false);
  const getFileNodes = (text, type) => {
    if (type === "html") {
      const editorNode = getEditorDOMFromHtmlString(text);
      const nodes = editor.api.html.deserialize({
        element: editorNode
      });
      return nodes;
    }
    if (type === "markdown") {
      return editor.getApi(MarkdownPlugin3).markdown.deserialize(text);
    }
    return [];
  };
  const { openFilePicker: openMdFilePicker } = useFilePicker({
    accept: [".md", ".mdx"],
    multiple: false,
    onFilesSelected: async ({ plainFiles }) => {
      const text = await plainFiles[0].text();
      const nodes = getFileNodes(text, "markdown");
      editor.tf.insertNodes(nodes);
    }
  });
  const { openFilePicker: openHtmlFilePicker } = useFilePicker({
    accept: ["text/html"],
    multiple: false,
    onFilesSelected: async ({ plainFiles }) => {
      const text = await plainFiles[0].text();
      const nodes = getFileNodes(text, "html");
      editor.tf.insertNodes(nodes);
    }
  });
  return /* @__PURE__ */ jsxs57(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsx101(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx101(ToolbarButton, { pressed: open, tooltip: "Import", isDropdown: true, children: /* @__PURE__ */ jsx101(ArrowUpToLineIcon, { className: "size-4" }) }) }),
    /* @__PURE__ */ jsx101(DropdownMenuContent, { align: "start", children: /* @__PURE__ */ jsxs57(DropdownMenuGroup, { children: [
      /* @__PURE__ */ jsx101(
        DropdownMenuItem,
        {
          onSelect: () => {
            openHtmlFilePicker();
          },
          children: "Import from HTML"
        }
      ),
      /* @__PURE__ */ jsx101(
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
import * as React36 from "react";
import {
  List,
  ListOrdered
} from "lucide-react";
import {
  ListStyleType as ListStyleType6,
  someIndentList,
  toggleIndentList as toggleIndentList2
} from "@udecode/plate-indent-list";
import {
  useEditorRef as useEditorRef16,
  useEditorSelector as useEditorSelector4
} from "@udecode/plate/react";
import { jsx as jsx102, jsxs as jsxs58 } from "react/jsx-runtime";
function NumberedIndentListToolbarButton() {
  const editor = useEditorRef16();
  const [open, setOpen] = React36.useState(false);
  const pressed = useEditorSelector4(
    (editor2) => someIndentList(editor2, [
      ListStyleType6.Decimal,
      ListStyleType6.LowerAlpha,
      ListStyleType6.UpperAlpha,
      ListStyleType6.LowerRoman,
      ListStyleType6.UpperRoman
    ]),
    []
  );
  return /* @__PURE__ */ jsxs58(ToolbarSplitButton, { pressed: open, children: [
    /* @__PURE__ */ jsx102(
      ToolbarSplitButtonPrimary,
      {
        className: "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        onClick: () => toggleIndentList2(editor, {
          listStyleType: ListStyleType6.Decimal
        }),
        "data-state": pressed ? "on" : "off",
        children: /* @__PURE__ */ jsx102(ListOrdered, { className: "size-4" })
      }
    ),
    /* @__PURE__ */ jsxs58(DropdownMenu, { open, onOpenChange: setOpen, modal: false, children: [
      /* @__PURE__ */ jsx102(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx102(ToolbarSplitButtonSecondary, {}) }),
      /* @__PURE__ */ jsx102(DropdownMenuContent, { align: "start", alignOffset: -32, children: /* @__PURE__ */ jsxs58(DropdownMenuGroup, { children: [
        /* @__PURE__ */ jsx102(
          DropdownMenuItem,
          {
            onSelect: () => toggleIndentList2(editor, {
              listStyleType: ListStyleType6.Decimal
            }),
            children: "Decimal (1, 2, 3)"
          }
        ),
        /* @__PURE__ */ jsx102(
          DropdownMenuItem,
          {
            onSelect: () => toggleIndentList2(editor, {
              listStyleType: ListStyleType6.LowerAlpha
            }),
            children: "Lower Alpha (a, b, c)"
          }
        ),
        /* @__PURE__ */ jsx102(
          DropdownMenuItem,
          {
            onSelect: () => toggleIndentList2(editor, {
              listStyleType: ListStyleType6.UpperAlpha
            }),
            children: "Upper Alpha (A, B, C)"
          }
        ),
        /* @__PURE__ */ jsx102(
          DropdownMenuItem,
          {
            onSelect: () => toggleIndentList2(editor, {
              listStyleType: ListStyleType6.LowerRoman
            }),
            children: "Lower Roman (i, ii, iii)"
          }
        ),
        /* @__PURE__ */ jsx102(
          DropdownMenuItem,
          {
            onSelect: () => toggleIndentList2(editor, {
              listStyleType: ListStyleType6.UpperRoman
            }),
            children: "Upper Roman (I, II, III)"
          }
        )
      ] }) })
    ] })
  ] });
}
function BulletedIndentListToolbarButton() {
  const editor = useEditorRef16();
  const [open, setOpen] = React36.useState(false);
  const pressed = useEditorSelector4(
    (editor2) => someIndentList(editor2, [
      ListStyleType6.Disc,
      ListStyleType6.Circle,
      ListStyleType6.Square
    ]),
    []
  );
  return /* @__PURE__ */ jsxs58(ToolbarSplitButton, { pressed: open, children: [
    /* @__PURE__ */ jsx102(
      ToolbarSplitButtonPrimary,
      {
        className: "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        onClick: () => {
          toggleIndentList2(editor, {
            listStyleType: ListStyleType6.Disc
          });
        },
        "data-state": pressed ? "on" : "off",
        children: /* @__PURE__ */ jsx102(List, { className: "size-4" })
      }
    ),
    /* @__PURE__ */ jsxs58(DropdownMenu, { open, onOpenChange: setOpen, modal: false, children: [
      /* @__PURE__ */ jsx102(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx102(ToolbarSplitButtonSecondary, {}) }),
      /* @__PURE__ */ jsx102(DropdownMenuContent, { align: "start", alignOffset: -32, children: /* @__PURE__ */ jsxs58(DropdownMenuGroup, { children: [
        /* @__PURE__ */ jsx102(
          DropdownMenuItem,
          {
            onClick: () => toggleIndentList2(editor, {
              listStyleType: ListStyleType6.Disc
            }),
            children: /* @__PURE__ */ jsxs58("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx102("div", { className: "size-2 rounded-full border border-current bg-current" }),
              "Default"
            ] })
          }
        ),
        /* @__PURE__ */ jsx102(
          DropdownMenuItem,
          {
            onClick: () => toggleIndentList2(editor, {
              listStyleType: ListStyleType6.Circle
            }),
            children: /* @__PURE__ */ jsxs58("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx102("div", { className: "size-2 rounded-full border border-current" }),
              "Circle"
            ] })
          }
        ),
        /* @__PURE__ */ jsx102(
          DropdownMenuItem,
          {
            onClick: () => toggleIndentList2(editor, {
              listStyleType: ListStyleType6.Square
            }),
            children: /* @__PURE__ */ jsxs58("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx102("div", { className: "size-2 border border-current bg-current" }),
              "Square"
            ] })
          }
        )
      ] }) })
    ] })
  ] });
}

// src/components/editor/ui/indent-todo-toolbar-button.tsx
import {
  useIndentTodoToolBarButton,
  useIndentTodoToolBarButtonState
} from "@udecode/plate-indent-list/react";
import { ListTodoIcon } from "lucide-react";
import { jsx as jsx103 } from "react/jsx-runtime";
function IndentTodoToolbarButton(props) {
  const state = useIndentTodoToolBarButtonState({ nodeType: "todo" });
  const { props: buttonProps } = useIndentTodoToolBarButton(state);
  return /* @__PURE__ */ jsx103(ToolbarButton, { ...props, ...buttonProps, tooltip: "Todo", children: /* @__PURE__ */ jsx103(ListTodoIcon, {}) });
}

// src/components/editor/ui/indent-toolbar-button.tsx
import { useIndentButton } from "@udecode/plate-indent/react";
import { Indent } from "lucide-react";
import { jsx as jsx104 } from "react/jsx-runtime";
function IndentToolbarButton(props) {
  const { props: buttonProps } = useIndentButton();
  return /* @__PURE__ */ jsx104(ToolbarButton, { ...props, ...buttonProps, tooltip: "Indent", children: /* @__PURE__ */ jsx104(Indent, {}) });
}

// src/components/editor/ui/line-height-dropdown-menu.tsx
import * as React37 from "react";
import {
  CheckIcon as CheckIcon7,
  WrapText
} from "lucide-react";
import { DropdownMenuItemIndicator } from "@radix-ui/react-dropdown-menu";
import {
  useLineHeightDropdownMenu,
  useLineHeightDropdownMenuState
} from "@udecode/plate-line-height/react";
import { jsx as jsx105, jsxs as jsxs59 } from "react/jsx-runtime";
function LineHeightDropdownMenu({ ...props }) {
  const [open, setOpen] = React37.useState(false);
  const state = useLineHeightDropdownMenuState();
  const { radioGroupProps } = useLineHeightDropdownMenu(state);
  return /* @__PURE__ */ jsxs59(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsx105(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx105(ToolbarButton, { pressed: open, tooltip: "Line height", isDropdown: true, children: /* @__PURE__ */ jsx105(WrapText, {}) }) }),
    /* @__PURE__ */ jsx105(DropdownMenuContent, { className: "min-w-0", align: "start", children: /* @__PURE__ */ jsx105(DropdownMenuRadioGroup, { ...radioGroupProps, children: state.values.map((_value) => /* @__PURE__ */ jsxs59(
      DropdownMenuRadioItem,
      {
        className: "min-w-[180px] pl-2 *:first:[span]:hidden",
        value: _value,
        children: [
          /* @__PURE__ */ jsx105("span", { className: "pointer-events-none absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx105(DropdownMenuItemIndicator, { children: /* @__PURE__ */ jsx105(CheckIcon7, {}) }) }),
          _value
        ]
      },
      _value
    )) }) })
  ] });
}

// src/components/editor/ui/link-toolbar-button.tsx
import {
  useLinkToolbarButton,
  useLinkToolbarButtonState
} from "@udecode/plate-link/react";
import { Link as Link3 } from "lucide-react";
import { jsx as jsx106 } from "react/jsx-runtime";
function LinkToolbarButton(props) {
  const state = useLinkToolbarButtonState();
  const { props: buttonProps } = useLinkToolbarButton(state);
  return /* @__PURE__ */ jsx106(ToolbarButton, { ...props, ...buttonProps, "data-plate-focus": true, tooltip: "Link", children: /* @__PURE__ */ jsx106(Link3, {}) });
}

// src/components/editor/ui/mark-toolbar-button.tsx
import {
  useMarkToolbarButton,
  useMarkToolbarButtonState
} from "@udecode/plate/react";
import { jsx as jsx107 } from "react/jsx-runtime";
function MarkToolbarButton({
  clear,
  nodeType,
  ...props
}) {
  const state = useMarkToolbarButtonState({ clear, nodeType });
  const { props: buttonProps } = useMarkToolbarButton(state);
  return /* @__PURE__ */ jsx107(ToolbarButton, { ...props, ...buttonProps });
}

// src/components/editor/ui/media-toolbar-button.tsx
import * as React38 from "react";
import {
  AudioLinesIcon,
  FileUpIcon,
  FilmIcon as FilmIcon2,
  ImageIcon as ImageIcon2,
  LinkIcon
} from "lucide-react";
import { toast as toast2 } from "sonner";
import { useFilePicker as useFilePicker2 } from "use-file-picker";
import { isUrl } from "@udecode/plate";
import {
  AudioPlugin as AudioPlugin5,
  FilePlugin as FilePlugin5,
  ImagePlugin as ImagePlugin9,
  PlaceholderPlugin as PlaceholderPlugin6,
  VideoPlugin as VideoPlugin5
} from "@udecode/plate-media/react";
import { useEditorRef as useEditorRef17 } from "@udecode/plate/react";

// src/components/editor/ui/alert-dialog.tsx
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { jsx as jsx108, jsxs as jsxs60 } from "react/jsx-runtime";
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsx108(AlertDialogPrimitive.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx108(AlertDialogPrimitive.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx108(
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
  return /* @__PURE__ */ jsxs60(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsx108(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsx108(
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
  return /* @__PURE__ */ jsx108(
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
  return /* @__PURE__ */ jsx108(
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
  return /* @__PURE__ */ jsx108(
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
  return /* @__PURE__ */ jsx108(
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
  return /* @__PURE__ */ jsx108(
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
  return /* @__PURE__ */ jsx108(
    AlertDialogPrimitive.Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}

// src/components/editor/ui/media-toolbar-button.tsx
import { Fragment as Fragment12, jsx as jsx109, jsxs as jsxs61 } from "react/jsx-runtime";
var MEDIA_CONFIG = {
  [AudioPlugin5.key]: {
    accept: ["audio/*"],
    icon: /* @__PURE__ */ jsx109(AudioLinesIcon, { className: "size-4" }),
    title: "Insert Audio",
    tooltip: "Audio"
  },
  [FilePlugin5.key]: {
    accept: ["*"],
    icon: /* @__PURE__ */ jsx109(FileUpIcon, { className: "size-4" }),
    title: "Insert File",
    tooltip: "File"
  },
  [ImagePlugin9.key]: {
    accept: ["image/*"],
    icon: /* @__PURE__ */ jsx109(ImageIcon2, { className: "size-4" }),
    title: "Insert Image",
    tooltip: "Image"
  },
  [VideoPlugin5.key]: {
    accept: ["video/*"],
    icon: /* @__PURE__ */ jsx109(FilmIcon2, { className: "size-4" }),
    title: "Insert Video",
    tooltip: "Video"
  }
};
function MediaToolbarButton({
  nodeType,
  ...props
}) {
  const currentConfig = MEDIA_CONFIG[nodeType];
  const editor = useEditorRef17();
  const [open, setOpen] = React38.useState(false);
  const [dialogOpen, setDialogOpen] = React38.useState(false);
  const { openFilePicker } = useFilePicker2({
    accept: currentConfig.accept,
    multiple: true,
    onFilesSelected: ({ plainFiles: updatedFiles }) => {
      editor.getTransforms(PlaceholderPlugin6).insert.media(updatedFiles);
    }
  });
  return /* @__PURE__ */ jsxs61(Fragment12, { children: [
    /* @__PURE__ */ jsxs61(
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
          /* @__PURE__ */ jsx109(ToolbarSplitButtonPrimary, { children: currentConfig.icon }),
          /* @__PURE__ */ jsxs61(
            DropdownMenu,
            {
              open,
              onOpenChange: setOpen,
              modal: false,
              ...props,
              children: [
                /* @__PURE__ */ jsx109(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx109(ToolbarSplitButtonSecondary, {}) }),
                /* @__PURE__ */ jsx109(
                  DropdownMenuContent,
                  {
                    onClick: (e) => e.stopPropagation(),
                    align: "start",
                    alignOffset: -32,
                    children: /* @__PURE__ */ jsxs61(DropdownMenuGroup, { children: [
                      /* @__PURE__ */ jsxs61(DropdownMenuItem, { onSelect: () => openFilePicker(), children: [
                        currentConfig.icon,
                        "Upload from computer"
                      ] }),
                      /* @__PURE__ */ jsxs61(DropdownMenuItem, { onSelect: () => setDialogOpen(true), children: [
                        /* @__PURE__ */ jsx109(LinkIcon, {}),
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
    /* @__PURE__ */ jsx109(
      AlertDialog,
      {
        open: dialogOpen,
        onOpenChange: (value) => {
          setDialogOpen(value);
        },
        children: /* @__PURE__ */ jsx109(AlertDialogContent, { className: "gap-6", children: /* @__PURE__ */ jsx109(
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
  const editor = useEditorRef17();
  const [url, setUrl] = React38.useState("");
  const embedMedia = React38.useCallback(() => {
    if (!isUrl(url)) return toast2.error("Invalid URL");
    setOpen(false);
    editor.tf.insertNodes({
      children: [{ text: "" }],
      name: nodeType === FilePlugin5.key ? url.split("/").pop() : void 0,
      type: nodeType,
      url
    });
  }, [url, editor, nodeType, setOpen]);
  return /* @__PURE__ */ jsxs61(Fragment12, { children: [
    /* @__PURE__ */ jsx109(AlertDialogHeader, { children: /* @__PURE__ */ jsx109(AlertDialogTitle, { children: currentConfig.title }) }),
    /* @__PURE__ */ jsxs61(AlertDialogDescription, { className: "group relative w-full", children: [
      /* @__PURE__ */ jsx109(
        "label",
        {
          className: "absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground",
          htmlFor: "url",
          children: /* @__PURE__ */ jsx109("span", { className: "inline-flex bg-background px-2", children: "URL" })
        }
      ),
      /* @__PURE__ */ jsx109(
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
    /* @__PURE__ */ jsxs61(AlertDialogFooter, { children: [
      /* @__PURE__ */ jsx109(AlertDialogCancel, { children: "Cancel" }),
      /* @__PURE__ */ jsx109(
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
import * as React39 from "react";
import {
  CheckIcon as CheckIcon8,
  EyeIcon,
  PencilLineIcon as PencilLineIcon2,
  PenIcon
} from "lucide-react";
import {
  DropdownMenuItemIndicator as DropdownMenuItemIndicator2
} from "@radix-ui/react-dropdown-menu";
import { SuggestionPlugin as SuggestionPlugin6 } from "@udecode/plate-suggestion/react";
import {
  useEditorRef as useEditorRef18,
  usePlateState as usePlateState2,
  usePluginOption as usePluginOption16
} from "@udecode/plate/react";
import { jsx as jsx110, jsxs as jsxs62 } from "react/jsx-runtime";
function ModeDropdownMenu(props) {
  const editor = useEditorRef18();
  const [readOnly, setReadOnly] = usePlateState2("readOnly");
  const [open, setOpen] = React39.useState(false);
  const isSuggesting = usePluginOption16(SuggestionPlugin6, "isSuggesting");
  let value = "editing";
  if (readOnly) value = "viewing";
  if (isSuggesting) value = "suggestion";
  const item = {
    editing: {
      icon: /* @__PURE__ */ jsx110(PenIcon, {}),
      label: "Editing"
    },
    suggestion: {
      icon: /* @__PURE__ */ jsx110(PencilLineIcon2, {}),
      label: "Suggestion"
    },
    viewing: {
      icon: /* @__PURE__ */ jsx110(EyeIcon, {}),
      label: "Viewing"
    }
  };
  return /* @__PURE__ */ jsxs62(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsx110(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs62(ToolbarButton, { pressed: open, tooltip: "Editing mode", isDropdown: true, children: [
      item[value].icon,
      /* @__PURE__ */ jsx110("span", { className: "hidden lg:inline", children: item[value].label })
    ] }) }),
    /* @__PURE__ */ jsx110(DropdownMenuContent, { className: "min-w-[180px]", align: "start", children: /* @__PURE__ */ jsxs62(
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
            editor.setOption(SuggestionPlugin6, "isSuggesting", true);
            return;
          } else {
            editor.setOption(SuggestionPlugin6, "isSuggesting", false);
          }
          if (newValue === "editing") {
            editor.tf.focus();
            return;
          }
        },
        children: [
          /* @__PURE__ */ jsxs62(
            DropdownMenuRadioItem,
            {
              className: "pl-2 *:first:[span]:hidden *:[svg]:text-muted-foreground",
              value: "editing",
              children: [
                /* @__PURE__ */ jsx110(Indicator2, {}),
                item.editing.icon,
                item.editing.label
              ]
            }
          ),
          /* @__PURE__ */ jsxs62(
            DropdownMenuRadioItem,
            {
              className: "pl-2 *:first:[span]:hidden *:[svg]:text-muted-foreground",
              value: "viewing",
              children: [
                /* @__PURE__ */ jsx110(Indicator2, {}),
                item.viewing.icon,
                item.viewing.label
              ]
            }
          ),
          /* @__PURE__ */ jsxs62(
            DropdownMenuRadioItem,
            {
              className: "pl-2 *:first:[span]:hidden *:[svg]:text-muted-foreground",
              value: "suggestion",
              children: [
                /* @__PURE__ */ jsx110(Indicator2, {}),
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
  return /* @__PURE__ */ jsx110("span", { className: "pointer-events-none absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx110(DropdownMenuItemIndicator2, { children: /* @__PURE__ */ jsx110(CheckIcon8, {}) }) });
}

// src/components/editor/ui/more-dropdown-menu.tsx
import * as React40 from "react";
import {
  KeyboardIcon,
  MoreHorizontalIcon as MoreHorizontalIcon2,
  SubscriptIcon,
  SuperscriptIcon
} from "lucide-react";
import {
  SubscriptPlugin as SubscriptPlugin2,
  SuperscriptPlugin as SuperscriptPlugin2
} from "@udecode/plate-basic-marks/react";
import { KbdPlugin as KbdPlugin2 } from "@udecode/plate-kbd/react";
import { useEditorRef as useEditorRef19 } from "@udecode/plate/react";
import { jsx as jsx111, jsxs as jsxs63 } from "react/jsx-runtime";
function MoreDropdownMenu(props) {
  const editor = useEditorRef19();
  const [open, setOpen] = React40.useState(false);
  return /* @__PURE__ */ jsxs63(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsx111(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx111(ToolbarButton, { pressed: open, tooltip: "Insert", children: /* @__PURE__ */ jsx111(MoreHorizontalIcon2, {}) }) }),
    /* @__PURE__ */ jsx111(
      DropdownMenuContent,
      {
        className: "ignore-click-outside/toolbar flex max-h-[500px] min-w-[180px] flex-col overflow-y-auto",
        align: "start",
        children: /* @__PURE__ */ jsxs63(DropdownMenuGroup, { children: [
          /* @__PURE__ */ jsxs63(
            DropdownMenuItem,
            {
              onSelect: () => {
                editor.tf.toggleMark(KbdPlugin2.key);
                editor.tf.collapse({ edge: "end" });
                editor.tf.focus();
              },
              children: [
                /* @__PURE__ */ jsx111(KeyboardIcon, {}),
                "Keyboard input"
              ]
            }
          ),
          /* @__PURE__ */ jsxs63(
            DropdownMenuItem,
            {
              onSelect: () => {
                editor.tf.toggleMark(SuperscriptPlugin2.key, {
                  remove: SubscriptPlugin2.key
                });
                editor.tf.focus();
              },
              children: [
                /* @__PURE__ */ jsx111(SuperscriptIcon, {}),
                "Superscript"
              ]
            }
          ),
          /* @__PURE__ */ jsxs63(
            DropdownMenuItem,
            {
              onSelect: () => {
                editor.tf.toggleMark(SubscriptPlugin2.key, {
                  remove: SuperscriptPlugin2.key
                });
                editor.tf.focus();
              },
              children: [
                /* @__PURE__ */ jsx111(SubscriptIcon, {}),
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
import { useOutdentButton } from "@udecode/plate-indent/react";
import { Outdent } from "lucide-react";
import { jsx as jsx112 } from "react/jsx-runtime";
function OutdentToolbarButton(props) {
  const { props: buttonProps } = useOutdentButton();
  return /* @__PURE__ */ jsx112(ToolbarButton, { ...props, ...buttonProps, tooltip: "Outdent", children: /* @__PURE__ */ jsx112(Outdent, {}) });
}

// src/components/editor/ui/table-dropdown-menu.tsx
import * as React41 from "react";
import {
  ArrowDown,
  ArrowLeft as ArrowLeft2,
  ArrowRight as ArrowRight2,
  ArrowUp,
  Combine,
  Grid3x3Icon,
  Table,
  Trash2Icon,
  Ungroup,
  XIcon as XIcon5
} from "lucide-react";
import {
  TablePlugin as TablePlugin7,
  useTableMergeState
} from "@udecode/plate-table/react";
import {
  useEditorPlugin as useEditorPlugin11,
  useEditorSelector as useEditorSelector5
} from "@udecode/plate/react";
import { jsx as jsx113, jsxs as jsxs64 } from "react/jsx-runtime";
function TableDropdownMenu(props) {
  const tableSelected = useEditorSelector5(
    (editor2) => editor2.api.some({ match: { type: TablePlugin7.key } }),
    []
  );
  const { editor, tf } = useEditorPlugin11(TablePlugin7);
  const [open, setOpen] = React41.useState(false);
  const mergeState = useTableMergeState();
  return /* @__PURE__ */ jsxs64(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsx113(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx113(ToolbarButton, { pressed: open, tooltip: "Table", isDropdown: true, children: /* @__PURE__ */ jsx113(Table, {}) }) }),
    /* @__PURE__ */ jsx113(
      DropdownMenuContent,
      {
        className: "flex w-[180px] min-w-0 flex-col",
        align: "start",
        children: /* @__PURE__ */ jsxs64(DropdownMenuGroup, { children: [
          /* @__PURE__ */ jsxs64(DropdownMenuSub, { children: [
            /* @__PURE__ */ jsxs64(DropdownMenuSubTrigger, { className: "gap-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", children: [
              /* @__PURE__ */ jsx113(Grid3x3Icon, { className: "size-4" }),
              /* @__PURE__ */ jsx113("span", { children: "Table" })
            ] }),
            /* @__PURE__ */ jsx113(DropdownMenuSubContent, { className: "m-0 p-0", children: /* @__PURE__ */ jsx113(TablePicker, {}) })
          ] }),
          /* @__PURE__ */ jsxs64(DropdownMenuSub, { children: [
            /* @__PURE__ */ jsxs64(
              DropdownMenuSubTrigger,
              {
                className: "gap-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                disabled: !tableSelected,
                children: [
                  /* @__PURE__ */ jsx113("div", { className: "size-4" }),
                  /* @__PURE__ */ jsx113("span", { children: "Cell" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs64(DropdownMenuSubContent, { children: [
              /* @__PURE__ */ jsxs64(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !mergeState.canMerge,
                  onSelect: () => {
                    tf.table.merge();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsx113(Combine, {}),
                    "Merge cells"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs64(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !mergeState.canSplit,
                  onSelect: () => {
                    tf.table.split();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsx113(Ungroup, {}),
                    "Split cell"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs64(DropdownMenuSub, { children: [
            /* @__PURE__ */ jsxs64(
              DropdownMenuSubTrigger,
              {
                className: "gap-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                disabled: !tableSelected,
                children: [
                  /* @__PURE__ */ jsx113("div", { className: "size-4" }),
                  /* @__PURE__ */ jsx113("span", { children: "Row" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs64(DropdownMenuSubContent, { children: [
              /* @__PURE__ */ jsxs64(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.insert.tableRow({ before: true });
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsx113(ArrowUp, {}),
                    "Insert row before"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs64(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.insert.tableRow();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsx113(ArrowDown, {}),
                    "Insert row after"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs64(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.remove.tableRow();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsx113(XIcon5, {}),
                    "Delete row"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs64(DropdownMenuSub, { children: [
            /* @__PURE__ */ jsxs64(
              DropdownMenuSubTrigger,
              {
                className: "gap-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                disabled: !tableSelected,
                children: [
                  /* @__PURE__ */ jsx113("div", { className: "size-4" }),
                  /* @__PURE__ */ jsx113("span", { children: "Column" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs64(DropdownMenuSubContent, { children: [
              /* @__PURE__ */ jsxs64(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.insert.tableColumn({ before: true });
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsx113(ArrowLeft2, {}),
                    "Insert column before"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs64(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.insert.tableColumn();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsx113(ArrowRight2, {}),
                    "Insert column after"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs64(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.remove.tableColumn();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsx113(XIcon5, {}),
                    "Delete column"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs64(
            DropdownMenuItem,
            {
              className: "min-w-[180px]",
              disabled: !tableSelected,
              onSelect: () => {
                tf.remove.table();
                editor.tf.focus();
              },
              children: [
                /* @__PURE__ */ jsx113(Trash2Icon, {}),
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
  const { editor, tf } = useEditorPlugin11(TablePlugin7);
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
  return /* @__PURE__ */ jsxs64(
    "div",
    {
      className: "m-0 flex! flex-col p-0",
      onClick: () => {
        tf.insert.table(tablePicker.size, { select: true });
        editor.tf.focus();
      },
      children: [
        /* @__PURE__ */ jsx113("div", { className: "grid size-[130px] grid-cols-8 gap-0.5 p-1", children: tablePicker.grid.map(
          (rows, rowIndex) => rows.map((value, columIndex) => {
            return /* @__PURE__ */ jsx113(
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
        /* @__PURE__ */ jsxs64("div", { className: "text-center text-xs text-current", children: [
          tablePicker.size.rowCount,
          " x ",
          tablePicker.size.colCount
        ] })
      ]
    }
  );
}

// src/components/editor/ui/toggle-toolbar-button.tsx
import {
  useToggleToolbarButton,
  useToggleToolbarButtonState
} from "@udecode/plate-toggle/react";
import { ListCollapseIcon } from "lucide-react";
import { jsx as jsx114 } from "react/jsx-runtime";
function ToggleToolbarButton(props) {
  const state = useToggleToolbarButtonState();
  const { props: buttonProps } = useToggleToolbarButton(state);
  return /* @__PURE__ */ jsx114(ToolbarButton, { ...props, ...buttonProps, tooltip: "Toggle", children: /* @__PURE__ */ jsx114(ListCollapseIcon, {}) });
}

// src/components/editor/ui/turn-into-dropdown-menu.tsx
import * as React42 from "react";
import {
  CheckIcon as CheckIcon9,
  ChevronRightIcon as ChevronRightIcon4,
  Columns3Icon as Columns3Icon2,
  FileCodeIcon as FileCodeIcon2,
  Heading1Icon as Heading1Icon2,
  Heading2Icon as Heading2Icon2,
  Heading3Icon as Heading3Icon2,
  ListIcon as ListIcon2,
  ListOrderedIcon as ListOrderedIcon2,
  PilcrowIcon as PilcrowIcon2,
  QuoteIcon as QuoteIcon2,
  SquareIcon as SquareIcon2
} from "lucide-react";
import { DropdownMenuItemIndicator as DropdownMenuItemIndicator3 } from "@radix-ui/react-dropdown-menu";
import { BlockquotePlugin as BlockquotePlugin11 } from "@udecode/plate-block-quote/react";
import { CodeBlockPlugin as CodeBlockPlugin12 } from "@udecode/plate-code-block/react";
import { HEADING_KEYS as HEADING_KEYS11 } from "@udecode/plate-heading";
import {
  INDENT_LIST_KEYS as INDENT_LIST_KEYS6,
  ListStyleType as ListStyleType7
} from "@udecode/plate-indent-list";
import { TogglePlugin as TogglePlugin8 } from "@udecode/plate-toggle/react";
import {
  ParagraphPlugin as ParagraphPlugin11,
  useEditorRef as useEditorRef20,
  useSelectionFragmentProp as useSelectionFragmentProp2
} from "@udecode/plate/react";
import { jsx as jsx115, jsxs as jsxs65 } from "react/jsx-runtime";
var turnIntoItems = [
  {
    icon: /* @__PURE__ */ jsx115(PilcrowIcon2, {}),
    keywords: ["paragraph"],
    label: "Text",
    value: ParagraphPlugin11.key
  },
  {
    icon: /* @__PURE__ */ jsx115(Heading1Icon2, {}),
    keywords: ["title", "h1"],
    label: "Heading 1",
    value: HEADING_KEYS11.h1
  },
  {
    icon: /* @__PURE__ */ jsx115(Heading2Icon2, {}),
    keywords: ["subtitle", "h2"],
    label: "Heading 2",
    value: HEADING_KEYS11.h2
  },
  {
    icon: /* @__PURE__ */ jsx115(Heading3Icon2, {}),
    keywords: ["subtitle", "h3"],
    label: "Heading 3",
    value: HEADING_KEYS11.h3
  },
  {
    icon: /* @__PURE__ */ jsx115(ListIcon2, {}),
    keywords: ["unordered", "ul", "-"],
    label: "Bulleted list",
    value: ListStyleType7.Disc
  },
  {
    icon: /* @__PURE__ */ jsx115(ListOrderedIcon2, {}),
    keywords: ["ordered", "ol", "1"],
    label: "Numbered list",
    value: ListStyleType7.Decimal
  },
  {
    icon: /* @__PURE__ */ jsx115(SquareIcon2, {}),
    keywords: ["checklist", "task", "checkbox", "[]"],
    label: "To-do list",
    value: INDENT_LIST_KEYS6.todo
  },
  {
    icon: /* @__PURE__ */ jsx115(ChevronRightIcon4, {}),
    keywords: ["collapsible", "expandable"],
    label: "Toggle list",
    value: TogglePlugin8.key
  },
  {
    icon: /* @__PURE__ */ jsx115(FileCodeIcon2, {}),
    keywords: ["```"],
    label: "Code",
    value: CodeBlockPlugin12.key
  },
  {
    icon: /* @__PURE__ */ jsx115(QuoteIcon2, {}),
    keywords: ["citation", "blockquote", ">"],
    label: "Quote",
    value: BlockquotePlugin11.key
  },
  {
    icon: /* @__PURE__ */ jsx115(Columns3Icon2, {}),
    label: "3 columns",
    value: "action_three_columns"
  }
];
function TurnIntoDropdownMenu(props) {
  const editor = useEditorRef20();
  const [open, setOpen] = React42.useState(false);
  const value = useSelectionFragmentProp2({
    defaultValue: ParagraphPlugin11.key,
    structuralTypes: STRUCTURAL_TYPES,
    getProp: (node) => getBlockType(node)
  });
  const selectedItem = React42.useMemo(
    () => turnIntoItems.find(
      (item) => item.value === (value ?? ParagraphPlugin11.key)
    ) ?? turnIntoItems[0],
    [value]
  );
  return /* @__PURE__ */ jsxs65(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsx115(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx115(
      ToolbarButton,
      {
        className: "min-w-[125px]",
        pressed: open,
        tooltip: "Turn into",
        isDropdown: true,
        children: selectedItem.label
      }
    ) }),
    /* @__PURE__ */ jsx115(
      DropdownMenuContent,
      {
        className: "ignore-click-outside/toolbar min-w-0",
        onCloseAutoFocus: (e) => {
          e.preventDefault();
          editor.tf.focus();
        },
        align: "start",
        children: /* @__PURE__ */ jsx115(
          ToolbarMenuGroup,
          {
            value,
            onValueChange: (type) => {
              setBlockType(editor, type);
            },
            label: "Turn into",
            children: turnIntoItems.map(({ icon, label, value: itemValue }) => /* @__PURE__ */ jsxs65(
              DropdownMenuRadioItem,
              {
                className: "min-w-[180px] pl-2 *:first:[span]:hidden",
                value: itemValue,
                children: [
                  /* @__PURE__ */ jsx115("span", { className: "pointer-events-none absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx115(DropdownMenuItemIndicator3, { children: /* @__PURE__ */ jsx115(CheckIcon9, {}) }) }),
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
import { Fragment as Fragment13, jsx as jsx116, jsxs as jsxs66 } from "react/jsx-runtime";
function FixedToolbarButtons({ allows, groupClass }) {
  const readOnly = useEditorReadOnly();
  return /* @__PURE__ */ jsxs66(Fragment13, { children: [
    !readOnly && /* @__PURE__ */ jsxs66(Fragment13, { children: [
      /* @__PURE__ */ jsxs66(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("undo") && /* @__PURE__ */ jsx116(UndoToolbarButton, {}),
        allows.includes("redo") && /* @__PURE__ */ jsx116(RedoToolbarButton, {})
      ] }),
      /* @__PURE__ */ jsx116(ToolbarGroup, { className: groupClass || "", children: allows.includes("ai") && /* @__PURE__ */ jsx116(AIToolbarButton, { tooltip: "AI commands", children: /* @__PURE__ */ jsx116(WandSparklesIcon, {}) }) }),
      /* @__PURE__ */ jsxs66(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("export") && /* @__PURE__ */ jsx116(ExportToolbarButton, { children: /* @__PURE__ */ jsx116(ArrowUpToLineIcon2, {}) }),
        allows.includes("import") && /* @__PURE__ */ jsx116(ImportToolbarButton, {})
      ] }),
      /* @__PURE__ */ jsxs66(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("insert") && /* @__PURE__ */ jsx116(InsertDropdownMenu, {}),
        allows.includes("turn_into") && /* @__PURE__ */ jsx116(TurnIntoDropdownMenu, {}),
        allows.includes("font_size") && /* @__PURE__ */ jsx116(FontSizeToolbarButton, {})
      ] }),
      /* @__PURE__ */ jsxs66(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("bold") && /* @__PURE__ */ jsx116(MarkToolbarButton, { nodeType: BoldPlugin3.key, tooltip: "Bold (\u2318+B)", children: /* @__PURE__ */ jsx116(BoldIcon, {}) }),
        allows.includes("italic") && /* @__PURE__ */ jsx116(MarkToolbarButton, { nodeType: ItalicPlugin3.key, tooltip: "Italic (\u2318+I)", children: /* @__PURE__ */ jsx116(ItalicIcon, {}) }),
        allows.includes("underline") && /* @__PURE__ */ jsx116(MarkToolbarButton, { nodeType: UnderlinePlugin3.key, tooltip: "Underline (\u2318+U)", children: /* @__PURE__ */ jsx116(UnderlineIcon, {}) }),
        allows.includes("strikethrough") && /* @__PURE__ */ jsx116(MarkToolbarButton, { nodeType: StrikethroughPlugin3.key, tooltip: "Strikethrough (\u2318+\u21E7+M)", children: /* @__PURE__ */ jsx116(StrikethroughIcon, {}) }),
        allows.includes("code") && /* @__PURE__ */ jsx116(MarkToolbarButton, { nodeType: CodePlugin3.key, tooltip: "Code (\u2318+E)", children: /* @__PURE__ */ jsx116(Code2Icon, {}) }),
        allows.includes("font_color") && /* @__PURE__ */ jsx116(ColorDropdownMenu, { nodeType: FontColorPlugin2.key, tooltip: "Text color", children: /* @__PURE__ */ jsx116(BaselineIcon, {}) }),
        allows.includes("background_color") && /* @__PURE__ */ jsx116(ColorDropdownMenu, { nodeType: FontBackgroundColorPlugin2.key, tooltip: "Background color", children: /* @__PURE__ */ jsx116(PaintBucketIcon, {}) })
      ] }),
      /* @__PURE__ */ jsxs66(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("align") && /* @__PURE__ */ jsx116(AlignDropdownMenu, {}),
        allows.includes("indent_list") && /* @__PURE__ */ jsx116(NumberedIndentListToolbarButton, {}),
        allows.includes("bulleted_list") && /* @__PURE__ */ jsx116(BulletedIndentListToolbarButton, {}),
        allows.includes("indent_todo") && /* @__PURE__ */ jsx116(IndentTodoToolbarButton, {}),
        allows.includes("toggle") && /* @__PURE__ */ jsx116(ToggleToolbarButton, {})
      ] }),
      /* @__PURE__ */ jsxs66(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("link") && /* @__PURE__ */ jsx116(LinkToolbarButton, {}),
        allows.includes("table") && /* @__PURE__ */ jsx116(TableDropdownMenu, {}),
        allows.includes("emoji") && /* @__PURE__ */ jsx116(EmojiDropdownMenu, {})
      ] }),
      /* @__PURE__ */ jsxs66(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("image") && /* @__PURE__ */ jsx116(MediaToolbarButton, { nodeType: ImagePlugin10.key }),
        allows.includes("video") && /* @__PURE__ */ jsx116(MediaToolbarButton, { nodeType: VideoPlugin6.key }),
        allows.includes("audio") && /* @__PURE__ */ jsx116(MediaToolbarButton, { nodeType: AudioPlugin6.key }),
        allows.includes("file") && /* @__PURE__ */ jsx116(MediaToolbarButton, { nodeType: FilePlugin6.key })
      ] }),
      /* @__PURE__ */ jsxs66(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("line_height") && /* @__PURE__ */ jsx116(LineHeightDropdownMenu, {}),
        allows.includes("outdent") && /* @__PURE__ */ jsx116(OutdentToolbarButton, {}),
        allows.includes("indent") && /* @__PURE__ */ jsx116(IndentToolbarButton, {})
      ] }),
      /* @__PURE__ */ jsx116(ToolbarGroup, { className: groupClass || "", children: allows.includes("more") && /* @__PURE__ */ jsx116(MoreDropdownMenu, {}) })
    ] }),
    /* @__PURE__ */ jsx116("div", { className: "grow" }),
    /* @__PURE__ */ jsxs66(ToolbarGroup, { className: groupClass || "", children: [
      allows.includes("highlight") && /* @__PURE__ */ jsx116(MarkToolbarButton, { nodeType: HighlightPlugin3.key, tooltip: "Highlight", children: /* @__PURE__ */ jsx116(HighlighterIcon, {}) }),
      allows.includes("comment") && /* @__PURE__ */ jsx116(CommentToolbarButton, {})
    ] }),
    /* @__PURE__ */ jsx116(ToolbarGroup, { className: groupClass || "", children: allows.includes("mode") && /* @__PURE__ */ jsx116(ModeDropdownMenu, {}) })
  ] });
}

// src/components/editor/plugins/fixed-toolbar-plugin.tsx
import { jsx as jsx117 } from "react/jsx-runtime";
var FixedToolbarPlugin = ({ allows, classes }) => {
  return createPlatePlugin2({
    key: "fixed-toolbar",
    render: {
      beforeEditable: () => /* @__PURE__ */ jsx117(FixedToolbar, { className: classes?.className || "", children: /* @__PURE__ */ jsx117(FixedToolbarButtons, { allows, groupClass: classes?.groupClass || "" }) })
    }
  });
};

// src/components/editor/plugins/floating-toolbar-plugin.tsx
import { createPlatePlugin as createPlatePlugin3 } from "@udecode/plate/react";

// src/components/editor/ui/floating-toolbar.tsx
import { useComposedRef as useComposedRef3 } from "@udecode/cn";
import {
  flip as flip2,
  offset as offset2,
  useFloatingToolbar,
  useFloatingToolbarState
} from "@udecode/plate-floating";
import {
  useEditorId,
  useEventEditorValue,
  usePluginOption as usePluginOption17
} from "@udecode/plate/react";
import { jsx as jsx118 } from "react/jsx-runtime";
function FloatingToolbar({
  children,
  className,
  state,
  ...props
}) {
  const editorId = useEditorId();
  const focusedEditorId = useEventEditorValue("focus");
  const isFloatingLinkOpen = !!usePluginOption17({ key: "a" }, "mode");
  const isAIChatOpen = usePluginOption17({ key: "aiChat" }, "open");
  const floatingToolbarState = useFloatingToolbarState({
    editorId,
    focusedEditorId,
    hideToolbar: isFloatingLinkOpen || isAIChatOpen,
    ...state,
    floatingOptions: {
      middleware: [
        offset2(12),
        flip2({
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
  } = useFloatingToolbar(floatingToolbarState);
  const ref = useComposedRef3(props.ref, floatingRef);
  if (hidden) return null;
  return /* @__PURE__ */ jsx118("div", { ref: clickOutsideRef, children: /* @__PURE__ */ jsx118(
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
import {
  BoldIcon as BoldIcon2,
  Code2Icon as Code2Icon2,
  ItalicIcon as ItalicIcon2,
  StrikethroughIcon as StrikethroughIcon2,
  UnderlineIcon as UnderlineIcon2,
  WandSparklesIcon as WandSparklesIcon2
} from "lucide-react";
import {
  BoldPlugin as BoldPlugin4,
  CodePlugin as CodePlugin4,
  ItalicPlugin as ItalicPlugin4,
  StrikethroughPlugin as StrikethroughPlugin4,
  UnderlinePlugin as UnderlinePlugin4
} from "@udecode/plate-basic-marks/react";
import { useEditorReadOnly as useEditorReadOnly2 } from "@udecode/plate/react";

// src/components/editor/ui/inline-equation-toolbar-button.tsx
import { insertInlineEquation as insertInlineEquation2 } from "@udecode/plate-math";
import { useEditorRef as useEditorRef21 } from "@udecode/plate/react";
import { RadicalIcon as RadicalIcon4 } from "lucide-react";
import { jsx as jsx119 } from "react/jsx-runtime";
function InlineEquationToolbarButton(props) {
  const editor = useEditorRef21();
  return /* @__PURE__ */ jsx119(
    ToolbarButton,
    {
      ...props,
      onClick: () => {
        insertInlineEquation2(editor);
      },
      tooltip: "Mark as equation",
      children: /* @__PURE__ */ jsx119(RadicalIcon4, {})
    }
  );
}

// src/components/editor/ui/suggestion-toolbar-button.tsx
import { PencilLineIcon as PencilLineIcon3 } from "lucide-react";
import { SuggestionPlugin as SuggestionPlugin7 } from "@udecode/plate-suggestion/react";
import {
  useEditorPlugin as useEditorPlugin12,
  usePluginOption as usePluginOption18
} from "@udecode/plate/react";
import { jsx as jsx120 } from "react/jsx-runtime";
function SuggestionToolbarButton() {
  const { setOption } = useEditorPlugin12(SuggestionPlugin7);
  const isSuggesting = usePluginOption18(SuggestionPlugin7, "isSuggesting");
  return /* @__PURE__ */ jsx120(
    ToolbarButton,
    {
      className: cn(isSuggesting && "text-brand/80 hover:text-brand/80"),
      onClick: () => setOption("isSuggesting", !isSuggesting),
      onMouseDown: (e) => e.preventDefault(),
      tooltip: isSuggesting ? "Turn off suggesting" : "Suggestion edits",
      children: /* @__PURE__ */ jsx120(PencilLineIcon3, {})
    }
  );
}

// src/components/editor/ui/floating-toolbar-buttons.tsx
import { Fragment as Fragment14, jsx as jsx121, jsxs as jsxs67 } from "react/jsx-runtime";
function FloatingToolbarButtons({
  allows,
  groupClass
}) {
  const readOnly = useEditorReadOnly2();
  return /* @__PURE__ */ jsxs67(Fragment14, { children: [
    !readOnly && /* @__PURE__ */ jsxs67(Fragment14, { children: [
      /* @__PURE__ */ jsx121(ToolbarGroup, { className: groupClass || "", children: allows.includes("ai") && /* @__PURE__ */ jsxs67(AIToolbarButton, { tooltip: "AI commands", children: [
        /* @__PURE__ */ jsx121(WandSparklesIcon2, {}),
        "Ask AI"
      ] }) }),
      /* @__PURE__ */ jsxs67(ToolbarGroup, { className: groupClass || "", children: [
        allows.includes("turn_into") && /* @__PURE__ */ jsx121(TurnIntoDropdownMenu, {}),
        allows.includes("bold") && /* @__PURE__ */ jsx121(MarkToolbarButton, { nodeType: BoldPlugin4.key, tooltip: "Bold (\u2318+B)", children: /* @__PURE__ */ jsx121(BoldIcon2, {}) }),
        allows.includes("italic") && /* @__PURE__ */ jsx121(MarkToolbarButton, { nodeType: ItalicPlugin4.key, tooltip: "Italic (\u2318+I)", children: /* @__PURE__ */ jsx121(ItalicIcon2, {}) }),
        allows.includes("underline") && /* @__PURE__ */ jsx121(MarkToolbarButton, { nodeType: UnderlinePlugin4.key, tooltip: "Underline (\u2318+U)", children: /* @__PURE__ */ jsx121(UnderlineIcon2, {}) }),
        allows.includes("strikethrough") && /* @__PURE__ */ jsx121(MarkToolbarButton, { nodeType: StrikethroughPlugin4.key, tooltip: "Strikethrough (\u2318+\u21E7+M)", children: /* @__PURE__ */ jsx121(StrikethroughIcon2, {}) }),
        allows.includes("code") && /* @__PURE__ */ jsx121(MarkToolbarButton, { nodeType: CodePlugin4.key, tooltip: "Code (\u2318+E)", children: /* @__PURE__ */ jsx121(Code2Icon2, {}) }),
        allows.includes("equation") && /* @__PURE__ */ jsx121(InlineEquationToolbarButton, {}),
        allows.includes("link") && /* @__PURE__ */ jsx121(LinkToolbarButton, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxs67(ToolbarGroup, { children: [
      allows.includes("comment") && /* @__PURE__ */ jsx121(CommentToolbarButton, {}),
      allows.includes("suggestion") && /* @__PURE__ */ jsx121(SuggestionToolbarButton, {}),
      !readOnly && allows.includes("more") && /* @__PURE__ */ jsx121(MoreDropdownMenu, {})
    ] })
  ] });
}

// src/components/editor/plugins/floating-toolbar-plugin.tsx
import { jsx as jsx122 } from "react/jsx-runtime";
var FloatingToolbarPlugin = ({ allows, classes }) => {
  return createPlatePlugin3({
    key: "floating-toolbar",
    render: {
      afterEditable: () => /* @__PURE__ */ jsx122(FloatingToolbar, { className: classes?.className || "", children: /* @__PURE__ */ jsx122(FloatingToolbarButtons, { allows, groupClass: classes?.groupClass || "" }) })
    }
  });
};

// src/components/editor/ui/blockquote-element.tsx
import {
  PlateElement as PlateElement7
} from "@udecode/plate/react";
import { jsx as jsx123 } from "react/jsx-runtime";
function BlockquoteElement(props) {
  return /* @__PURE__ */ jsx123(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ jsx123(
    PlateElement7,
    {
      as: "blockquote",
      className: "my-1 border-l-2 pl-6 italic",
      ...props
    }
  ) });
}

// src/components/editor/ui/callout-element.tsx
import { cn as cn3 } from "@udecode/cn";
import { useCalloutEmojiPicker } from "@udecode/plate-callout/react";
import { useEmojiDropdownMenuState as useEmojiDropdownMenuState2 } from "@udecode/plate-emoji/react";
import { PlateElement as PlateElement8 } from "@udecode/plate/react";
import { jsx as jsx124, jsxs as jsxs68 } from "react/jsx-runtime";
function CalloutElement({
  attributes,
  children,
  className,
  ...props
}) {
  const { emojiPickerState, isOpen, setIsOpen } = useEmojiDropdownMenuState2({
    closeOnSelect: true
  });
  const { emojiToolbarDropdownProps, props: calloutProps } = useCalloutEmojiPicker({
    isOpen,
    setIsOpen
  });
  return /* @__PURE__ */ jsx124(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ jsx124(
    PlateElement8,
    {
      className: cn3("my-1 flex rounded-sm bg-muted p-4 pl-3", className),
      style: {
        backgroundColor: props.element.backgroundColor
      },
      attributes: {
        ...attributes,
        "data-plate-open-context-menu": true
      },
      ...props,
      children: /* @__PURE__ */ jsxs68("div", { className: "flex w-full gap-2 rounded-md", children: [
        /* @__PURE__ */ jsx124(
          EmojiToolbarDropdown,
          {
            ...emojiToolbarDropdownProps,
            control: /* @__PURE__ */ jsx124(
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
            children: /* @__PURE__ */ jsx124(
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
        /* @__PURE__ */ jsx124("div", { className: "w-full", children })
      ] })
    }
  ) });
}

// src/components/editor/ui/code-block-element.tsx
import * as React44 from "react";
import {
  BracesIcon,
  CheckIcon as CheckIcon10,
  CopyIcon
} from "lucide-react";
import { NodeApi as NodeApi6 } from "@udecode/plate";
import {
  formatCodeBlock,
  isLangSupported
} from "@udecode/plate-code-block";
import {
  PlateElement as PlateElement9
} from "@udecode/plate/react";

// src/components/editor/ui/code-block-combobox.tsx
import * as React43 from "react";
import { Check as Check3 } from "lucide-react";
import {
  useEditorRef as useEditorRef22,
  useElement as useElement4,
  useReadOnly as useReadOnly7
} from "@udecode/plate/react";
import { jsx as jsx125, jsxs as jsxs69 } from "react/jsx-runtime";
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
  const readOnly = useReadOnly7();
  const editor = useEditorRef22();
  const element = useElement4();
  const value = element.lang || "plaintext";
  const [searchValue, setSearchValue] = React43.useState("");
  const items2 = React43.useMemo(
    () => languages.filter(
      (language) => !searchValue || language.label.toLowerCase().includes(searchValue.toLowerCase())
    ),
    [searchValue]
  );
  if (readOnly) return null;
  return /* @__PURE__ */ jsxs69(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx125(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx125(
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
    /* @__PURE__ */ jsx125(
      PopoverContent,
      {
        className: "w-[200px] p-0",
        onCloseAutoFocus: () => setSearchValue(""),
        children: /* @__PURE__ */ jsxs69(Command, { shouldFilter: false, children: [
          /* @__PURE__ */ jsx125(
            CommandInput,
            {
              className: "h-9",
              value: searchValue,
              onValueChange: (value2) => setSearchValue(value2),
              placeholder: "Search language..."
            }
          ),
          /* @__PURE__ */ jsx125(CommandEmpty, { children: "No language found." }),
          /* @__PURE__ */ jsx125(CommandList, { className: "h-[344px] overflow-y-auto", children: /* @__PURE__ */ jsx125(CommandGroup, { children: items2.map((language) => /* @__PURE__ */ jsxs69(
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
                /* @__PURE__ */ jsx125(
                  Check3,
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
import { jsx as jsx126, jsxs as jsxs70 } from "react/jsx-runtime";
function CodeBlockElement(props) {
  const { editor, element } = props;
  return /* @__PURE__ */ jsx126(BlockWithPlus, { element, children: /* @__PURE__ */ jsx126(
    PlateElement9,
    {
      className: "py-1 **:[.hljs-addition]:bg-[#f0fff4] **:[.hljs-addition]:text-[#22863a] **:[.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable]:text-[#005cc5] **:[.hljs-built_in,.hljs-symbol]:text-[#e36209] **:[.hljs-bullet]:text-[#735c0f] **:[.hljs-comment,.hljs-code,.hljs-formula]:text-[#6a737d] **:[.hljs-deletion]:bg-[#ffeef0] **:[.hljs-deletion]:text-[#b31d28] **:[.hljs-emphasis]:italic **:[.hljs-keyword,.hljs-doctag,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_]:text-[#d73a49] **:[.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo]:text-[#22863a] **:[.hljs-regexp,.hljs-string,.hljs-meta_.hljs-string]:text-[#032f62] **:[.hljs-section]:font-bold **:[.hljs-section]:text-[#005cc5] **:[.hljs-strong]:font-bold **:[.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_]:text-[#6f42c1]",
      ...props,
      children: /* @__PURE__ */ jsxs70("div", { className: "relative rounded-md bg-muted/50", children: [
        /* @__PURE__ */ jsx126("pre", { className: "overflow-x-auto p-8 pr-4 font-mono text-sm leading-[normal] [tab-size:2] print:break-inside-avoid", children: /* @__PURE__ */ jsx126("code", { children: props.children }) }),
        /* @__PURE__ */ jsxs70(
          "div",
          {
            className: "absolute top-1 right-1 z-10 flex gap-0.5 select-none",
            contentEditable: false,
            children: [
              isLangSupported(element.lang) && /* @__PURE__ */ jsx126(
                Button,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "size-6 text-xs",
                  onClick: () => formatCodeBlock(editor, { element }),
                  title: "Format code",
                  children: /* @__PURE__ */ jsx126(BracesIcon, { className: "!size-3.5 text-muted-foreground" })
                }
              ),
              /* @__PURE__ */ jsx126(CodeBlockCombobox, {}),
              /* @__PURE__ */ jsx126(
                CopyButton,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "size-6 gap-1 text-xs text-muted-foreground",
                  value: () => NodeApi6.string(element)
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
  return /* @__PURE__ */ jsxs70(
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
        /* @__PURE__ */ jsx126("span", { className: "sr-only", children: "Copy" }),
        hasCopied ? /* @__PURE__ */ jsx126(CheckIcon10, { className: "!size-3" }) : /* @__PURE__ */ jsx126(CopyIcon, { className: "!size-3" })
      ]
    }
  );
}

// src/components/editor/ui/code-leaf.tsx
import { PlateLeaf as PlateLeaf3 } from "@udecode/plate/react";
import { jsx as jsx127 } from "react/jsx-runtime";
function CodeLeaf(props) {
  return /* @__PURE__ */ jsx127(
    PlateLeaf3,
    {
      ...props,
      as: "code",
      className: "rounded-md bg-muted px-[0.3em] py-[0.2em] font-mono text-sm whitespace-pre-wrap",
      children: props.children
    }
  );
}

// src/components/editor/ui/code-line-element.tsx
import {
  PlateElement as PlateElement10
} from "@udecode/plate/react";
import { jsx as jsx128 } from "react/jsx-runtime";
function CodeLineElement(props) {
  return /* @__PURE__ */ jsx128(PlateElement10, { ...props });
}

// src/components/editor/ui/code-syntax-leaf.tsx
import { PlateLeaf as PlateLeaf4 } from "@udecode/plate/react";
import { jsx as jsx129 } from "react/jsx-runtime";
function CodeSyntaxLeaf(props) {
  const tokenClassName = props.leaf.className;
  return /* @__PURE__ */ jsx129(PlateLeaf4, { className: tokenClassName, ...props });
}

// src/components/editor/ui/column-element.tsx
import * as React45 from "react";
import { GripHorizontal } from "lucide-react";
import { useComposedRef as useComposedRef4 } from "@udecode/cn";
import { PathApi as PathApi5 } from "@udecode/plate";
import {
  useDraggable as useDraggable2,
  useDropLine as useDropLine2
} from "@udecode/plate-dnd";
import { ResizableProvider } from "@udecode/plate-resizable";
import { BlockSelectionPlugin as BlockSelectionPlugin6 } from "@udecode/plate-selection/react";
import {
  PlateElement as PlateElement11,
  usePluginOption as usePluginOption19,
  useReadOnly as useReadOnly8,
  withHOC
} from "@udecode/plate/react";
import { jsx as jsx130, jsxs as jsxs71 } from "react/jsx-runtime";
var ColumnElement = withHOC(
  ResizableProvider,
  function ColumnElement2(props) {
    const { width } = props.element;
    const readOnly = useReadOnly8();
    const isSelectionAreaVisible = usePluginOption19(
      BlockSelectionPlugin6,
      "isSelectionAreaVisible"
    );
    const { isDragging, previewRef, handleRef } = useDraggable2({
      element: props.element,
      orientation: "horizontal",
      type: "column",
      canDropNode: ({ dragEntry, dropEntry }) => PathApi5.equals(
        PathApi5.parent(dragEntry[1]),
        PathApi5.parent(dropEntry[1])
      )
    });
    return /* @__PURE__ */ jsxs71("div", { className: "group/column relative", style: { width: width ?? "100%" }, children: [
      !readOnly && !isSelectionAreaVisible && /* @__PURE__ */ jsx130(
        "div",
        {
          ref: handleRef,
          className: cn(
            "absolute top-2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
            "pointer-events-auto flex items-center",
            "opacity-0 transition-opacity group-hover/column:opacity-100"
          ),
          children: /* @__PURE__ */ jsx130(ColumnDragHandle, {})
        }
      ),
      /* @__PURE__ */ jsx130(
        PlateElement11,
        {
          ...props,
          ref: useComposedRef4(props.ref, previewRef),
          className: "h-full px-2 pt-2 group-first/column:pl-0 group-last/column:pr-0",
          children: /* @__PURE__ */ jsxs71(
            "div",
            {
              className: cn(
                "relative h-full border border-transparent p-1.5",
                !readOnly && "rounded-lg border-dashed border-border",
                isDragging && "opacity-50"
              ),
              children: [
                props.children,
                !readOnly && !isSelectionAreaVisible && /* @__PURE__ */ jsx130(DropLine3, {})
              ]
            }
          )
        }
      )
    ] });
  }
);
var ColumnDragHandle = React45.memo(function ColumnDragHandle2() {
  return /* @__PURE__ */ jsx130(TooltipProvider, { children: /* @__PURE__ */ jsxs71(Tooltip, { children: [
    /* @__PURE__ */ jsx130(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx130(Button, { variant: "ghost", className: "h-5 !px-1", children: /* @__PURE__ */ jsx130(
      GripHorizontal,
      {
        className: "text-muted-foreground",
        onClick: (event) => {
          event.stopPropagation();
          event.preventDefault();
        }
      }
    ) }) }),
    /* @__PURE__ */ jsx130(TooltipContent, { children: "Drag to move column" })
  ] }) });
});
function DropLine3() {
  const { dropLine } = useDropLine2({ orientation: "horizontal" });
  if (!dropLine) return null;
  return /* @__PURE__ */ jsx130(
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
import {
  Trash2Icon as Trash2Icon2
} from "lucide-react";
import { setColumns } from "@udecode/plate-layout";
import { useDebouncePopoverOpen } from "@udecode/plate-layout/react";
import {
  PlateElement as PlateElement12,
  useEditorRef as useEditorRef23,
  useElement as useElement5,
  useReadOnly as useReadOnly9,
  useRemoveNodeButton
} from "@udecode/plate/react";
import { Fragment as Fragment15, jsx as jsx131, jsxs as jsxs72 } from "react/jsx-runtime";
function ColumnGroupElement(props) {
  return /* @__PURE__ */ jsx131(PlateElement12, { className: "mb-2", ...props, children: /* @__PURE__ */ jsx131(ColumnFloatingToolbar, { children: /* @__PURE__ */ jsx131("div", { className: "flex size-full rounded", children: props.children }) }) });
}
function ColumnFloatingToolbar({ children }) {
  const editor = useEditorRef23();
  const readOnly = useReadOnly9();
  const element = useElement5();
  const { props: buttonProps } = useRemoveNodeButton({ element });
  const isOpen = useDebouncePopoverOpen();
  const onColumnChange = (widths) => {
    setColumns(editor, {
      at: element,
      widths
    });
  };
  if (readOnly) return /* @__PURE__ */ jsx131(Fragment15, { children });
  return /* @__PURE__ */ jsxs72(Popover, { open: isOpen, modal: false, children: [
    /* @__PURE__ */ jsx131(PopoverAnchor, { children }),
    /* @__PURE__ */ jsx131(
      PopoverContent,
      {
        className: "w-auto p-1",
        onOpenAutoFocus: (e) => e.preventDefault(),
        align: "center",
        side: "top",
        sideOffset: 10,
        children: /* @__PURE__ */ jsxs72("div", { className: "box-content flex h-8 items-center", children: [
          /* @__PURE__ */ jsx131(
            Button,
            {
              variant: "ghost",
              className: "size-8",
              onClick: () => onColumnChange(["50%", "50%"]),
              children: /* @__PURE__ */ jsx131(DoubleColumnOutlined, {})
            }
          ),
          /* @__PURE__ */ jsx131(
            Button,
            {
              variant: "ghost",
              className: "size-8",
              onClick: () => onColumnChange(["33%", "33%", "33%"]),
              children: /* @__PURE__ */ jsx131(ThreeColumnOutlined, {})
            }
          ),
          /* @__PURE__ */ jsx131(
            Button,
            {
              variant: "ghost",
              className: "size-8",
              onClick: () => onColumnChange(["70%", "30%"]),
              children: /* @__PURE__ */ jsx131(RightSideDoubleColumnOutlined, {})
            }
          ),
          /* @__PURE__ */ jsx131(
            Button,
            {
              variant: "ghost",
              className: "size-8",
              onClick: () => onColumnChange(["30%", "70%"]),
              children: /* @__PURE__ */ jsx131(LeftSideDoubleColumnOutlined, {})
            }
          ),
          /* @__PURE__ */ jsx131(
            Button,
            {
              variant: "ghost",
              className: "size-8",
              onClick: () => onColumnChange(["25%", "50%", "25%"]),
              children: /* @__PURE__ */ jsx131(DoubleSideDoubleColumnOutlined, {})
            }
          ),
          /* @__PURE__ */ jsx131(Separator2, { orientation: "vertical", className: "mx-1 h-6" }),
          /* @__PURE__ */ jsx131(Button, { variant: "ghost", className: "size-8", ...buttonProps, children: /* @__PURE__ */ jsx131(Trash2Icon2, {}) })
        ] })
      }
    )
  ] });
}
var DoubleColumnOutlined = (props) => /* @__PURE__ */ jsx131(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx131(
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
var ThreeColumnOutlined = (props) => /* @__PURE__ */ jsx131(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx131(
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
var RightSideDoubleColumnOutlined = (props) => /* @__PURE__ */ jsx131(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx131(
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
var LeftSideDoubleColumnOutlined = (props) => /* @__PURE__ */ jsx131(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx131(
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
var DoubleSideDoubleColumnOutlined = (props) => /* @__PURE__ */ jsx131(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx131(
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
import { getCommentCount } from "@udecode/plate-comments";
import {
  PlateLeaf as PlateLeaf5,
  useEditorPlugin as useEditorPlugin13,
  usePluginOption as usePluginOption20
} from "@udecode/plate/react";
import { jsx as jsx132 } from "react/jsx-runtime";
function CommentLeaf(props) {
  const { children, leaf } = props;
  const { api, setOption } = useEditorPlugin13(commentsPlugin);
  const hoverId = usePluginOption20(commentsPlugin, "hoverId");
  const activeId = usePluginOption20(commentsPlugin, "activeId");
  const isOverlapping = getCommentCount(leaf) > 1;
  const currentId = api.comment.nodeId(leaf);
  const isActive = activeId === currentId;
  const isHover = hoverId === currentId;
  return /* @__PURE__ */ jsx132(
    PlateLeaf5,
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
import * as React46 from "react";
import { RadicalIcon as RadicalIcon5 } from "lucide-react";
import { useEquationElement as useEquationElement2 } from "@udecode/plate-math/react";
import {
  PlateElement as PlateElement13,
  useSelected as useSelected5
} from "@udecode/plate/react";
import { jsx as jsx133, jsxs as jsxs73 } from "react/jsx-runtime";
function EquationElement(props) {
  const selected = useSelected5();
  const [open, setOpen] = React46.useState(selected);
  const katexRef = React46.useRef(null);
  useEquationElement2({
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
  return /* @__PURE__ */ jsx133(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ jsxs73(PlateElement13, { className: "my-1", ...props, children: [
    /* @__PURE__ */ jsxs73(Popover, { open, onOpenChange: setOpen, modal: false, children: [
      /* @__PURE__ */ jsx133(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx133(
        "div",
        {
          className: cn(
            "group flex cursor-pointer items-center justify-center rounded-sm select-none hover:bg-primary/10 data-[selected=true]:bg-primary/10",
            props.element.texExpression.length === 0 ? "bg-muted p-3 pr-9" : "px-2 py-1"
          ),
          "data-selected": selected,
          contentEditable: false,
          role: "button",
          children: props.element.texExpression.length > 0 ? /* @__PURE__ */ jsx133("span", { ref: katexRef }) : /* @__PURE__ */ jsxs73("div", { className: "flex h-7 w-full items-center gap-2 text-sm whitespace-nowrap text-muted-foreground", children: [
            /* @__PURE__ */ jsx133(RadicalIcon5, { className: "size-6 text-muted-foreground/80" }),
            /* @__PURE__ */ jsx133("div", { children: "Add a Tex equation" })
          ] })
        }
      ) }),
      /* @__PURE__ */ jsx133(
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
import { useExcalidrawElement } from "@udecode/plate-excalidraw/react";
import { PlateElement as PlateElement14 } from "@udecode/plate/react";
import { jsx as jsx134, jsxs as jsxs74 } from "react/jsx-runtime";
function ExcalidrawElement(props) {
  const { children, element } = props;
  const { Excalidraw, excalidrawProps } = useExcalidrawElement({
    element
  });
  return /* @__PURE__ */ jsx134(BlockWithPlus, { element, children: /* @__PURE__ */ jsxs74(PlateElement14, { ...props, children: [
    /* @__PURE__ */ jsx134("div", { contentEditable: false, children: /* @__PURE__ */ jsx134("div", { className: "mx-auto aspect-video h-[600px] w-[min(100%,600px)] overflow-hidden rounded-sm border", children: Excalidraw && /* @__PURE__ */ jsx134(Excalidraw, { ...excalidrawProps }) }) }),
    children
  ] }) });
}

// src/components/editor/ui/heading-element.tsx
import {
  cva as cva12
} from "class-variance-authority";
import { PlateElement as PlateElement15 } from "@udecode/plate/react";
import { jsx as jsx135 } from "react/jsx-runtime";
var headingVariants2 = cva12("relative mb-1", {
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
  return /* @__PURE__ */ jsx135(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ jsx135(
    PlateElement15,
    {
      as: variant,
      className: headingVariants2({ variant }),
      ...props,
      children: props.children
    }
  ) });
}

// src/components/editor/ui/highlight-leaf.tsx
import { PlateLeaf as PlateLeaf6 } from "@udecode/plate/react";
import { jsx as jsx136 } from "react/jsx-runtime";
function HighlightLeaf(props) {
  return /* @__PURE__ */ jsx136(PlateLeaf6, { ...props, as: "mark", className: "bg-highlight/30 text-inherit", children: props.children });
}

// src/components/editor/ui/hr-element.tsx
import {
  PlateElement as PlateElement16,
  useFocused as useFocused2,
  useReadOnly as useReadOnly10,
  useSelected as useSelected6
} from "@udecode/plate/react";
import { jsx as jsx137, jsxs as jsxs75 } from "react/jsx-runtime";
function HrElement(props) {
  const readOnly = useReadOnly10();
  const selected = useSelected6();
  const focused = useFocused2();
  return /* @__PURE__ */ jsx137(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ jsxs75(PlateElement16, { ...props, children: [
    /* @__PURE__ */ jsx137("div", { className: "py-6", contentEditable: false, children: /* @__PURE__ */ jsx137(
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
import { useDraggable as useDraggable3 } from "@udecode/plate-dnd";
import {
  Image as Image2,
  ImagePlugin as ImagePlugin11,
  useMediaState
} from "@udecode/plate-media/react";
import {
  ResizableProvider as ResizableProvider2,
  useResizableValue
} from "@udecode/plate-resizable";
import {
  PlateElement as PlateElement17,
  withHOC as withHOC2
} from "@udecode/plate/react";

// src/components/editor/ui/caption.tsx
import { cva as cva13 } from "class-variance-authority";
import { createPrimitiveComponent as createPrimitiveComponent2 } from "@udecode/cn";
import {
  Caption as CaptionPrimitive,
  CaptionTextarea as CaptionTextareaPrimitive,
  useCaptionButton,
  useCaptionButtonState
} from "@udecode/plate-caption/react";
import { jsx as jsx138 } from "react/jsx-runtime";
var captionVariants = cva13("max-w-full", {
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
  return /* @__PURE__ */ jsx138(
    CaptionPrimitive,
    {
      ...props,
      className: cn(captionVariants({ align }), className)
    }
  );
}
function CaptionTextarea(props) {
  return /* @__PURE__ */ jsx138(
    CaptionTextareaPrimitive,
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
var CaptionButton = createPrimitiveComponent2(Button)({
  propsHook: useCaptionButton,
  stateHook: useCaptionButtonState
});

// src/components/editor/ui/media-popover.tsx
import * as React47 from "react";
import { cva as cva14 } from "class-variance-authority";
import {
  Link as Link4,
  Trash2Icon as Trash2Icon3
} from "lucide-react";
import {
  FloatingMedia as FloatingMediaPrimitive,
  FloatingMediaStore,
  useFloatingMediaValue,
  useImagePreviewValue as useImagePreviewValue2
} from "@udecode/plate-media/react";
import {
  useEditorRef as useEditorRef24,
  useEditorSelector as useEditorSelector6,
  useElement as useElement6,
  useReadOnly as useReadOnly11,
  useRemoveNodeButton as useRemoveNodeButton2,
  useSelected as useSelected7
} from "@udecode/plate/react";
import { Fragment as Fragment16, jsx as jsx139, jsxs as jsxs76 } from "react/jsx-runtime";
var inputVariants2 = cva14(
  "flex h-[28px] w-full rounded-md border-none bg-transparent px-1.5 py-1 text-base placeholder:text-muted-foreground focus-visible:ring-transparent focus-visible:outline-none md:text-sm"
);
function MediaPopover({ children, plugin }) {
  const editor = useEditorRef24();
  const readOnly = useReadOnly11();
  const selected = useSelected7();
  const selectionCollapsed = useEditorSelector6(
    (editor2) => !editor2.api.isExpanded(),
    []
  );
  const isImagePreviewOpen = useImagePreviewValue2("isOpen", editor.id);
  const isOpen = !readOnly && selected && selectionCollapsed && !isImagePreviewOpen;
  const isEditing = useFloatingMediaValue("isEditing");
  React47.useEffect(() => {
    if (!isOpen && isEditing) {
      FloatingMediaStore.set("isEditing", false);
    }
  }, [isOpen]);
  const element = useElement6();
  const { props: buttonProps } = useRemoveNodeButton2({ element });
  if (readOnly) return /* @__PURE__ */ jsx139(Fragment16, { children });
  return /* @__PURE__ */ jsxs76(Popover, { open: isOpen, modal: false, children: [
    /* @__PURE__ */ jsx139(PopoverAnchor, { children }),
    /* @__PURE__ */ jsx139(
      PopoverContent,
      {
        className: "w-auto p-1",
        onOpenAutoFocus: (e) => e.preventDefault(),
        children: isEditing ? /* @__PURE__ */ jsx139("div", { className: "flex w-[330px] flex-col", children: /* @__PURE__ */ jsxs76("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx139("div", { className: "flex items-center pr-1 pl-2 text-muted-foreground", children: /* @__PURE__ */ jsx139(Link4, { className: "size-4" }) }),
          /* @__PURE__ */ jsx139(
            FloatingMediaPrimitive.UrlInput,
            {
              className: inputVariants2(),
              placeholder: "Paste the embed link...",
              options: { plugin }
            }
          )
        ] }) }) : /* @__PURE__ */ jsxs76("div", { className: "box-content flex items-center", children: [
          /* @__PURE__ */ jsx139(
            FloatingMediaPrimitive.EditButton,
            {
              className: buttonVariants({ size: "sm", variant: "ghost" }),
              children: "Edit link"
            }
          ),
          /* @__PURE__ */ jsx139(CaptionButton, { variant: "ghost", children: "Caption" }),
          /* @__PURE__ */ jsx139(Separator2, { orientation: "vertical", className: "mx-1 h-6" }),
          /* @__PURE__ */ jsx139(Button, { size: "icon", variant: "ghost", ...buttonProps, children: /* @__PURE__ */ jsx139(Trash2Icon3, {}) })
        ] })
      }
    )
  ] });
}

// src/components/editor/ui/resize-handle.tsx
import { cva as cva15 } from "class-variance-authority";
import {
  Resizable as ResizablePrimitive,
  useResizeHandle,
  useResizeHandleState
} from "@udecode/plate-resizable";
import { jsx as jsx140 } from "react/jsx-runtime";
var mediaResizeHandleVariants = cva15(
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
var resizeHandleVariants = cva15(cn("absolute z-40"), {
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
  const state = useResizeHandleState(options ?? {});
  const resizeHandle = useResizeHandle(state);
  if (state.readOnly) return null;
  return /* @__PURE__ */ jsx140(
    "div",
    {
      className: cn(resizeHandleVariants({ direction }), className),
      "data-resizing": state.isResizing,
      ...resizeHandle.props,
      ...props
    }
  );
}
var resizableVariants = cva15("", {
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
  return /* @__PURE__ */ jsx140(
    ResizablePrimitive,
    {
      ...props,
      className: cn(resizableVariants({ align }), className)
    }
  );
}

// src/components/editor/ui/image-element.tsx
import { jsx as jsx141, jsxs as jsxs77 } from "react/jsx-runtime";
var ImageElement = withHOC2(
  ResizableProvider2,
  function ImageElement2(props) {
    const { align = "center", focused, readOnly, selected } = useMediaState();
    const width = useResizableValue("width");
    const { isDragging, handleRef } = useDraggable3({
      element: props.element
    });
    return /* @__PURE__ */ jsx141(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ jsx141(MediaPopover, { plugin: ImagePlugin11, children: /* @__PURE__ */ jsxs77(PlateElement17, { ...props, className: "py-2.5", children: [
      /* @__PURE__ */ jsxs77("figure", { className: "group relative m-0", contentEditable: false, children: [
        /* @__PURE__ */ jsxs77(
          Resizable,
          {
            align,
            options: {
              align,
              readOnly
            },
            children: [
              /* @__PURE__ */ jsx141(
                ResizeHandle,
                {
                  className: mediaResizeHandleVariants({ direction: "left" }),
                  options: { direction: "left" }
                }
              ),
              /* @__PURE__ */ jsx141(
                Image2,
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
              /* @__PURE__ */ jsx141(
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
        /* @__PURE__ */ jsx141(Caption, { style: { width }, align, children: /* @__PURE__ */ jsx141(
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
import { useMediaState as useMediaState2 } from "@udecode/plate-media/react";
import { ResizableProvider as ResizableProvider3 } from "@udecode/plate-resizable";
import {
  PlateElement as PlateElement18,
  withHOC as withHOC3
} from "@udecode/plate/react";
import { jsx as jsx142, jsxs as jsxs78 } from "react/jsx-runtime";
var MediaAudioElement = withHOC3(
  ResizableProvider3,
  function MediaAudioElement2(props) {
    const { align = "center", readOnly, unsafeUrl } = useMediaState2();
    return /* @__PURE__ */ jsx142(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ jsxs78(PlateElement18, { ...props, className: "mb-1", children: [
      /* @__PURE__ */ jsxs78("figure", { className: "group relative cursor-default", contentEditable: false, children: [
        /* @__PURE__ */ jsx142("div", { className: "h-16", children: /* @__PURE__ */ jsx142("audio", { className: "size-full", src: unsafeUrl, controls: true }) }),
        /* @__PURE__ */ jsx142(Caption, { style: { width: "100%" }, align, children: /* @__PURE__ */ jsx142(
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
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { Tweet } from "react-tweet";
import {
  parseTwitterUrl,
  parseVideoUrl
} from "@udecode/plate-media";
import {
  MediaEmbedPlugin as MediaEmbedPlugin9,
  useMediaState as useMediaState3
} from "@udecode/plate-media/react";
import {
  ResizableProvider as ResizableProvider4,
  useResizableValue as useResizableValue2
} from "@udecode/plate-resizable";
import {
  PlateElement as PlateElement19,
  withHOC as withHOC4
} from "@udecode/plate/react";
import { jsx as jsx143, jsxs as jsxs79 } from "react/jsx-runtime";
var MediaEmbedElement = withHOC4(
  ResizableProvider4,
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
    } = useMediaState3({
      urlParsers: [parseTwitterUrl, parseVideoUrl]
    });
    const width = useResizableValue2("width");
    const provider = embed?.provider;
    return /* @__PURE__ */ jsx143(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ jsx143(MediaPopover, { plugin: MediaEmbedPlugin9, children: /* @__PURE__ */ jsxs79(PlateElement19, { className: "py-2.5", ...props, children: [
      /* @__PURE__ */ jsxs79(
        "figure",
        {
          className: "group relative m-0 w-full cursor-default",
          contentEditable: false,
          children: [
            /* @__PURE__ */ jsxs79(
              Resizable,
              {
                align,
                options: {
                  align,
                  maxWidth: isTweet ? 550 : "100%",
                  minWidth: isTweet ? 300 : 100
                },
                children: [
                  /* @__PURE__ */ jsx143(
                    ResizeHandle,
                    {
                      className: mediaResizeHandleVariants({ direction: "left" }),
                      options: { direction: "left" }
                    }
                  ),
                  isVideo ? isYoutube ? /* @__PURE__ */ jsx143(
                    LiteYouTubeEmbed,
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
                  ) : /* @__PURE__ */ jsx143(
                    "div",
                    {
                      className: cn(
                        provider === "vimeo" && "pb-[75%]",
                        provider === "youku" && "pb-[56.25%]",
                        provider === "dailymotion" && "pb-[56.0417%]",
                        provider === "coub" && "pb-[51.25%]"
                      ),
                      children: /* @__PURE__ */ jsx143(
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
                  isTweet && /* @__PURE__ */ jsx143(
                    "div",
                    {
                      className: cn(
                        "[&_.react-tweet-theme]:my-0",
                        !readOnly && selected && "[&_.react-tweet-theme]:ring-2 [&_.react-tweet-theme]:ring-ring [&_.react-tweet-theme]:ring-offset-2"
                      ),
                      children: /* @__PURE__ */ jsx143(Tweet, { id: embed.id })
                    }
                  ),
                  /* @__PURE__ */ jsx143(
                    ResizeHandle,
                    {
                      className: mediaResizeHandleVariants({ direction: "right" }),
                      options: { direction: "right" }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx143(Caption, { style: { width }, align, children: /* @__PURE__ */ jsx143(CaptionTextarea, { placeholder: "Write a caption..." }) })
          ]
        }
      ),
      props.children
    ] }) }) });
  }
);

// src/components/editor/ui/media-file-element.tsx
import { FileUp as FileUp2 } from "lucide-react";
import { useMediaState as useMediaState4 } from "@udecode/plate-media/react";
import { ResizableProvider as ResizableProvider5 } from "@udecode/plate-resizable";
import {
  PlateElement as PlateElement20,
  useReadOnly as useReadOnly12,
  withHOC as withHOC5
} from "@udecode/plate/react";
import { jsx as jsx144, jsxs as jsxs80 } from "react/jsx-runtime";
var MediaFileElement = withHOC5(
  ResizableProvider5,
  function MediaFileElement2(props) {
    const readOnly = useReadOnly12();
    const { name, unsafeUrl } = useMediaState4();
    return /* @__PURE__ */ jsx144(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ jsxs80(PlateElement20, { className: "my-px rounded-sm", ...props, children: [
      /* @__PURE__ */ jsxs80(
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
            /* @__PURE__ */ jsxs80("div", { className: "flex items-center gap-1 p-1", children: [
              /* @__PURE__ */ jsx144(FileUp2, { className: "size-5" }),
              /* @__PURE__ */ jsx144("div", { children: name })
            ] }),
            /* @__PURE__ */ jsx144(Caption, { align: "left", children: /* @__PURE__ */ jsx144(
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
import * as React49 from "react";
import {
  AudioLines,
  FileUp as FileUp3,
  Film,
  ImageIcon as ImageIcon3,
  Loader2Icon as Loader2Icon2
} from "lucide-react";
import { useFilePicker as useFilePicker3 } from "use-file-picker";
import {
  AudioPlugin as AudioPlugin7,
  FilePlugin as FilePlugin7,
  ImagePlugin as ImagePlugin12,
  PlaceholderPlugin as PlaceholderPlugin7,
  PlaceholderProvider,
  updateUploadHistory,
  VideoPlugin as VideoPlugin7
} from "@udecode/plate-media/react";
import {
  PlateElement as PlateElement21,
  useEditorPlugin as useEditorPlugin14,
  withHOC as withHOC6
} from "@udecode/plate/react";

// src/hooks/use-upload-file.ts
import * as React48 from "react";
import { toast as toast3 } from "sonner";
import { z } from "zod";
import { generateReactHelpers } from "@uploadthing/react";
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
      toast3.error(message);
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
      toast3.error(errorMessage || "Upload failed");
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
var { uploadFiles, useUploadThing } = generateReactHelpers();
function getErrorMessage(err) {
  const unknownError = "Something went wrong, please try again later.";
  if (err instanceof z.ZodError) {
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
import { jsx as jsx145, jsxs as jsxs81 } from "react/jsx-runtime";
var CONTENT = {
  [AudioPlugin7.key]: {
    accept: ["audio/*"],
    content: "Add an audio file",
    icon: /* @__PURE__ */ jsx145(AudioLines, {})
  },
  [FilePlugin7.key]: {
    accept: ["*"],
    content: "Add a file",
    icon: /* @__PURE__ */ jsx145(FileUp3, {})
  },
  [ImagePlugin12.key]: {
    accept: ["image/*"],
    content: "Add an image",
    icon: /* @__PURE__ */ jsx145(ImageIcon3, {})
  },
  [VideoPlugin7.key]: {
    accept: ["video/*"],
    content: "Add a video",
    icon: /* @__PURE__ */ jsx145(Film, {})
  }
};
var MediaPlaceholderElement = withHOC6(
  PlaceholderProvider,
  function MediaPlaceholderElement2(props) {
    const { editor, element } = props;
    const { api } = useEditorPlugin14(PlaceholderPlugin7);
    const { isUploading, progress, uploadedFile, uploadFile, uploadingFile } = useUploadFile({ mode: "toCloud" });
    const loading = isUploading && uploadingFile;
    const currentContent = CONTENT[element.mediaType];
    const isImage = element.mediaType === ImagePlugin12.key;
    const imageRef = React49.useRef(null);
    const { openFilePicker } = useFilePicker3({
      accept: currentContent.accept,
      multiple: true,
      onFilesSelected: ({ plainFiles: updatedFiles }) => {
        const firstFile = updatedFiles[0];
        const restFiles = updatedFiles.slice(1);
        replaceCurrentPlaceholder(firstFile);
        if (restFiles.length > 0) {
          editor.getTransforms(PlaceholderPlugin7).insert.media(restFiles);
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
          name: element.mediaType === FilePlugin7.key ? uploadedFile.name : "",
          placeholderId: element.id,
          type: element.mediaType,
          url: uploadedFile.url
        };
        editor.tf.insertNodes(node, { at: path });
        updateUploadHistory(editor, node);
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
    return /* @__PURE__ */ jsx145(BlockWithPlus, { element, children: /* @__PURE__ */ jsxs81(PlateElement21, { className: "my-1", ...props, children: [
      (!loading || !isImage) && /* @__PURE__ */ jsxs81(
        "div",
        {
          className: cn(
            "flex cursor-pointer items-center rounded-sm bg-muted p-3 pr-9 select-none hover:bg-primary/10"
          ),
          onClick: () => !loading && openFilePicker(),
          contentEditable: false,
          children: [
            /* @__PURE__ */ jsx145("div", { className: "relative mr-3 flex text-muted-foreground/80 [&_svg]:size-6", children: currentContent.icon }),
            /* @__PURE__ */ jsxs81("div", { className: "text-sm whitespace-nowrap text-muted-foreground", children: [
              /* @__PURE__ */ jsx145("div", { children: loading ? uploadingFile?.name : currentContent.content }),
              loading && !isImage && /* @__PURE__ */ jsxs81("div", { className: "mt-1 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx145("div", { children: formatBytes(uploadingFile?.size ?? 0) }),
                /* @__PURE__ */ jsx145("div", { children: "\u2013" }),
                /* @__PURE__ */ jsxs81("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx145(Loader2Icon2, { className: "mr-1 size-3.5 animate-spin text-muted-foreground" }),
                  progress ?? 0,
                  "%"
                ] })
              ] })
            ] })
          ]
        }
      ),
      isImage && loading && /* @__PURE__ */ jsx145(
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
  return /* @__PURE__ */ jsxs81("div", { className: cn("relative", className), contentEditable: false, children: [
    /* @__PURE__ */ jsx145(
      "img",
      {
        ref: imageRef,
        className: "h-auto w-full rounded-sm object-cover",
        alt: file.name,
        src: objectUrl
      }
    ),
    progress < 100 && /* @__PURE__ */ jsxs81("div", { className: "absolute right-1 bottom-1 flex items-center space-x-2 rounded-full bg-black/50 px-1 py-0.5", children: [
      /* @__PURE__ */ jsx145(Loader2Icon2, { className: "size-3.5 animate-spin text-muted-foreground" }),
      /* @__PURE__ */ jsxs81("span", { className: "text-xs font-medium text-white", children: [
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
import LiteYouTubeEmbed2 from "react-lite-youtube-embed";
import ReactPlayer from "react-player";
import { useDraggable as useDraggable4 } from "@udecode/plate-dnd";
import {
  parseTwitterUrl as parseTwitterUrl2,
  parseVideoUrl as parseVideoUrl2
} from "@udecode/plate-media";
import { useMediaState as useMediaState5 } from "@udecode/plate-media/react";
import {
  ResizableProvider as ResizableProvider6,
  useResizableValue as useResizableValue3
} from "@udecode/plate-resizable";
import {
  PlateElement as PlateElement22,
  useEditorMounted,
  withHOC as withHOC7
} from "@udecode/plate/react";
import { jsx as jsx146, jsxs as jsxs82 } from "react/jsx-runtime";
var MediaVideoElement = withHOC7(
  ResizableProvider6,
  function MediaVideoElement2(props) {
    const {
      align = "center",
      embed,
      isUpload,
      isYoutube,
      readOnly,
      unsafeUrl
    } = useMediaState5({
      urlParsers: [parseTwitterUrl2, parseVideoUrl2]
    });
    const width = useResizableValue3("width");
    const isEditorMounted = useEditorMounted();
    const isTweet = true;
    const { isDragging, handleRef } = useDraggable4({
      element: props.element
    });
    return /* @__PURE__ */ jsx146(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ jsxs82(PlateElement22, { className: "py-2.5", ...props, children: [
      /* @__PURE__ */ jsxs82("figure", { className: "relative m-0 cursor-default", contentEditable: false, children: [
        /* @__PURE__ */ jsx146(
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
            children: /* @__PURE__ */ jsxs82("div", { className: "group/media", children: [
              /* @__PURE__ */ jsx146(
                ResizeHandle,
                {
                  className: mediaResizeHandleVariants({ direction: "left" }),
                  options: { direction: "left" }
                }
              ),
              /* @__PURE__ */ jsx146(
                ResizeHandle,
                {
                  className: mediaResizeHandleVariants({ direction: "right" }),
                  options: { direction: "right" }
                }
              ),
              !isUpload && isYoutube && /* @__PURE__ */ jsx146("div", { ref: handleRef, children: /* @__PURE__ */ jsx146(
                LiteYouTubeEmbed2,
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
              isUpload && isEditorMounted && /* @__PURE__ */ jsx146("div", { ref: handleRef, children: /* @__PURE__ */ jsx146(
                ReactPlayer,
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
        /* @__PURE__ */ jsx146(Caption, { style: { width }, align, children: /* @__PURE__ */ jsx146(
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
import { PlateElement as PlateElement23 } from "@udecode/plate/react";
import { jsx as jsx147 } from "react/jsx-runtime";
function ParagraphElement(props) {
  return /* @__PURE__ */ jsx147(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ jsx147(PlateElement23, { ...props, className: cn("m-0 px-0 py-1"), children: props.children }) });
}

// src/components/editor/ui/placeholder.tsx
import * as React50 from "react";
import { HEADING_KEYS as HEADING_KEYS12 } from "@udecode/plate-heading";
import {
  createNodeHOC,
  createNodesHOC,
  ParagraphPlugin as ParagraphPlugin12,
  usePlaceholderState
} from "@udecode/plate/react";
var Placeholder = (props) => {
  const { attributes, children, placeholder } = props;
  const { enabled } = usePlaceholderState(props);
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
var withPlaceholder = createNodeHOC(Placeholder);
var withPlaceholdersPrimitive = createNodesHOC(Placeholder);
var withPlaceholders = (components2) => withPlaceholdersPrimitive(components2, [
  {
    key: ParagraphPlugin12.key,
    hideOnBlur: true,
    placeholder: "Type a paragraph",
    query: {
      maxLevel: 1
    }
  },
  {
    key: HEADING_KEYS12.h1,
    hideOnBlur: false,
    placeholder: "Untitled"
  }
]);

// src/components/editor/ui/slash-input-element.tsx
import {
  CalendarIcon as CalendarIcon2,
  ChevronRightIcon as ChevronRightIcon5,
  Code2,
  Columns3Icon as Columns3Icon3,
  Heading1Icon as Heading1Icon3,
  Heading2Icon as Heading2Icon3,
  Heading3Icon as Heading3Icon3,
  LightbulbIcon as LightbulbIcon2,
  ListIcon as ListIcon3,
  ListOrdered as ListOrdered2,
  PilcrowIcon as PilcrowIcon3,
  Quote,
  RadicalIcon as RadicalIcon6,
  SparklesIcon,
  Square,
  Table as Table2,
  TableOfContentsIcon as TableOfContentsIcon2
} from "lucide-react";
import { AIChatPlugin as AIChatPlugin9 } from "@udecode/plate-ai/react";
import { BlockquotePlugin as BlockquotePlugin12 } from "@udecode/plate-block-quote/react";
import { CalloutPlugin as CalloutPlugin6 } from "@udecode/plate-callout/react";
import { CodeBlockPlugin as CodeBlockPlugin13 } from "@udecode/plate-code-block/react";
import { DatePlugin as DatePlugin5 } from "@udecode/plate-date/react";
import { HEADING_KEYS as HEADING_KEYS13 } from "@udecode/plate-heading";
import { TocPlugin as TocPlugin5 } from "@udecode/plate-heading/react";
import {
  INDENT_LIST_KEYS as INDENT_LIST_KEYS7,
  ListStyleType as ListStyleType8
} from "@udecode/plate-indent-list";
import {
  EquationPlugin as EquationPlugin5,
  InlineEquationPlugin as InlineEquationPlugin5
} from "@udecode/plate-math/react";
import { TablePlugin as TablePlugin8 } from "@udecode/plate-table/react";
import { TogglePlugin as TogglePlugin9 } from "@udecode/plate-toggle/react";
import {
  ParagraphPlugin as ParagraphPlugin13,
  PlateElement as PlateElement24
} from "@udecode/plate/react";
import { jsx as jsx148, jsxs as jsxs83 } from "react/jsx-runtime";
var groups2 = [
  {
    group: "AI",
    items: [
      {
        focusEditor: false,
        icon: /* @__PURE__ */ jsx148(SparklesIcon, {}),
        value: "AI",
        onSelect: (editor) => {
          editor.getApi(AIChatPlugin9).aiChat.show();
        }
      }
    ]
  },
  {
    group: "Basic blocks",
    items: [
      {
        icon: /* @__PURE__ */ jsx148(PilcrowIcon3, {}),
        keywords: ["paragraph"],
        label: "Text",
        value: ParagraphPlugin13.key
      },
      {
        icon: /* @__PURE__ */ jsx148(Heading1Icon3, {}),
        keywords: ["title", "h1"],
        label: "Heading 1",
        value: HEADING_KEYS13.h1
      },
      {
        icon: /* @__PURE__ */ jsx148(Heading2Icon3, {}),
        keywords: ["subtitle", "h2"],
        label: "Heading 2",
        value: HEADING_KEYS13.h2
      },
      {
        icon: /* @__PURE__ */ jsx148(Heading3Icon3, {}),
        keywords: ["subtitle", "h3"],
        label: "Heading 3",
        value: HEADING_KEYS13.h3
      },
      {
        icon: /* @__PURE__ */ jsx148(ListIcon3, {}),
        keywords: ["unordered", "ul", "-"],
        label: "Bulleted list",
        value: ListStyleType8.Disc
      },
      {
        icon: /* @__PURE__ */ jsx148(ListOrdered2, {}),
        keywords: ["ordered", "ol", "1"],
        label: "Numbered list",
        value: ListStyleType8.Decimal
      },
      {
        icon: /* @__PURE__ */ jsx148(Square, {}),
        keywords: ["checklist", "task", "checkbox", "[]"],
        label: "To-do list",
        value: INDENT_LIST_KEYS7.todo
      },
      {
        icon: /* @__PURE__ */ jsx148(ChevronRightIcon5, {}),
        keywords: ["collapsible", "expandable"],
        label: "Toggle",
        value: TogglePlugin9.key
      },
      {
        icon: /* @__PURE__ */ jsx148(Code2, {}),
        keywords: ["```"],
        label: "Code Block",
        value: CodeBlockPlugin13.key
      },
      {
        icon: /* @__PURE__ */ jsx148(Table2, {}),
        label: "Table",
        value: TablePlugin8.key
      },
      {
        icon: /* @__PURE__ */ jsx148(Quote, {}),
        keywords: ["citation", "blockquote", "quote", ">"],
        label: "Blockquote",
        value: BlockquotePlugin12.key
      },
      {
        description: "Insert a highlighted block.",
        icon: /* @__PURE__ */ jsx148(LightbulbIcon2, {}),
        keywords: ["note"],
        label: "Callout",
        value: CalloutPlugin6.key
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
        icon: /* @__PURE__ */ jsx148(TableOfContentsIcon2, {}),
        keywords: ["toc"],
        label: "Table of contents",
        value: TocPlugin5.key
      },
      {
        icon: /* @__PURE__ */ jsx148(Columns3Icon3, {}),
        label: "3 columns",
        value: "action_three_columns"
      },
      {
        focusEditor: false,
        icon: /* @__PURE__ */ jsx148(RadicalIcon6, {}),
        label: "Equation",
        value: EquationPlugin5.key
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
        icon: /* @__PURE__ */ jsx148(CalendarIcon2, {}),
        keywords: ["time"],
        label: "Date",
        value: DatePlugin5.key
      },
      {
        focusEditor: false,
        icon: /* @__PURE__ */ jsx148(RadicalIcon6, {}),
        label: "Inline Equation",
        value: InlineEquationPlugin5.key
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
  return /* @__PURE__ */ jsxs83(PlateElement24, { ...props, as: "span", "data-slate-value": element.value, children: [
    /* @__PURE__ */ jsxs83(InlineCombobox, { element, trigger: "/", children: [
      /* @__PURE__ */ jsx148(InlineComboboxInput, {}),
      /* @__PURE__ */ jsxs83(InlineComboboxContent, { children: [
        /* @__PURE__ */ jsx148(InlineComboboxEmpty, { children: "No results" }),
        groups2.map(({ group, items: items2 }) => /* @__PURE__ */ jsxs83(InlineComboboxGroup, { children: [
          /* @__PURE__ */ jsx148(InlineComboboxGroupLabel, { children: group }),
          items2.map(
            ({ focusEditor, icon, keywords, label, value, onSelect }) => /* @__PURE__ */ jsxs83(
              InlineComboboxItem,
              {
                value,
                onClick: () => onSelect(editor, value),
                label,
                focusEditor,
                group,
                keywords,
                children: [
                  /* @__PURE__ */ jsx148("div", { className: "mr-2 text-muted-foreground", children: icon }),
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
import {
  PlateLeaf as PlateLeaf7,
  useEditorPlugin as useEditorPlugin15,
  usePluginOption as usePluginOption21
} from "@udecode/plate/react";
import { jsx as jsx149 } from "react/jsx-runtime";
function SuggestionLeaf(props) {
  const { api, setOption } = useEditorPlugin15(suggestionPlugin);
  const leaf = props.leaf;
  const leafId = api.suggestion.nodeId(leaf) ?? "";
  const activeSuggestionId = usePluginOption21(suggestionPlugin, "activeId");
  const hoverSuggestionId = usePluginOption21(suggestionPlugin, "hoverId");
  const dataList = api.suggestion.dataList(leaf);
  const hasRemove = dataList.some((data) => data.type === "remove");
  const hasActive = dataList.some((data) => data.id === activeSuggestionId);
  const hasHover = dataList.some((data) => data.id === hoverSuggestionId);
  const diffOperation = { type: hasRemove ? "delete" : "insert" };
  const Component = { delete: "del", insert: "ins", update: "span" }[diffOperation.type];
  return /* @__PURE__ */ jsx149(
    PlateLeaf7,
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
import { cva as cva16 } from "class-variance-authority";
import {
  BlockSelectionPlugin as BlockSelectionPlugin7,
  useBlockSelected as useBlockSelected2
} from "@udecode/plate-selection/react";
import {
  TablePlugin as TablePlugin9,
  TableRowPlugin as TableRowPlugin3,
  useTableCellElement,
  useTableCellElementResizable
} from "@udecode/plate-table/react";
import {
  PlateElement as PlateElement25,
  useEditorPlugin as useEditorPlugin16,
  useElementSelector,
  usePluginOption as usePluginOption22,
  useReadOnly as useReadOnly13
} from "@udecode/plate/react";
import { Fragment as Fragment17, jsx as jsx150, jsxs as jsxs84 } from "react/jsx-runtime";
function TableCellElement({
  isHeader,
  ...props
}) {
  const { api } = useEditorPlugin16(TablePlugin9);
  const readOnly = useReadOnly13();
  const element = props.element;
  const rowId = useElementSelector(([node]) => node.id, [], {
    key: TableRowPlugin3.key
  });
  const isSelectingRow = useBlockSelected2(rowId);
  const isSelectionAreaVisible = usePluginOption22(
    BlockSelectionPlugin7,
    "isSelectionAreaVisible"
  );
  const { borders, colIndex, colSpan, minHeight, rowIndex, selected, width } = useTableCellElement();
  const { bottomProps, hiddenLeft, leftProps, rightProps } = useTableCellElementResizable({
    colIndex,
    colSpan,
    rowIndex
  });
  return /* @__PURE__ */ jsxs84(
    PlateElement25,
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
        /* @__PURE__ */ jsx150(
          "div",
          {
            className: "relative z-20 box-border h-full px-3 py-2",
            style: { minHeight },
            children: props.children
          }
        ),
        !isSelectionAreaVisible && /* @__PURE__ */ jsx150(
          "div",
          {
            className: "group absolute top-0 size-full select-none",
            contentEditable: false,
            suppressContentEditableWarning: true,
            children: !readOnly && /* @__PURE__ */ jsxs84(Fragment17, { children: [
              /* @__PURE__ */ jsx150(
                ResizeHandle,
                {
                  ...rightProps,
                  className: "-top-2 -right-1 h-[calc(100%_+_8px)] w-2",
                  "data-col": colIndex
                }
              ),
              /* @__PURE__ */ jsx150(ResizeHandle, { ...bottomProps, className: "-bottom-1 h-2" }),
              !hiddenLeft && /* @__PURE__ */ jsx150(
                ResizeHandle,
                {
                  ...leftProps,
                  className: "top-0 -left-1 w-2",
                  "data-resizer-left": colIndex === 0 ? "true" : void 0
                }
              ),
              /* @__PURE__ */ jsx150(
                "div",
                {
                  className: cn(
                    "absolute top-0 z-30 hidden h-full w-1 bg-ring",
                    "right-[-1.5px]",
                    columnResizeVariants({ colIndex })
                  )
                }
              ),
              colIndex === 0 && /* @__PURE__ */ jsx150(
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
        isSelectingRow && /* @__PURE__ */ jsx150("div", { className: blockSelectionVariants(), contentEditable: false })
      ]
    }
  );
}
function TableCellHeaderElement(props) {
  return /* @__PURE__ */ jsx150(TableCellElement, { ...props, isHeader: true });
}
var columnResizeVariants = cva16("hidden animate-in fade-in", {
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
import * as React51 from "react";
import {
  ArrowDown as ArrowDown2,
  ArrowLeft as ArrowLeft3,
  ArrowRight as ArrowRight3,
  ArrowUp as ArrowUp2,
  CombineIcon,
  EraserIcon as EraserIcon2,
  Grid2X2Icon,
  PaintBucketIcon as PaintBucketIcon2,
  SquareSplitHorizontalIcon,
  Trash2Icon as Trash2Icon4,
  XIcon as XIcon6
} from "lucide-react";
import { PopoverAnchor as PopoverAnchor2 } from "@radix-ui/react-popover";
import { BlockSelectionPlugin as BlockSelectionPlugin8 } from "@udecode/plate-selection/react";
import { setCellBackground } from "@udecode/plate-table";
import {
  TablePlugin as TablePlugin10,
  TableProvider,
  useTableBordersDropdownMenuContentState,
  useTableElement,
  useTableMergeState as useTableMergeState2
} from "@udecode/plate-table/react";
import {
  PlateElement as PlateElement26,
  useEditorPlugin as useEditorPlugin17,
  useEditorRef as useEditorRef25,
  useEditorSelector as useEditorSelector7,
  useElement as useElement7,
  usePluginOption as usePluginOption23,
  useReadOnly as useReadOnly14,
  useRemoveNodeButton as useRemoveNodeButton3,
  useSelected as useSelected8,
  withHOC as withHOC8
} from "@udecode/plate/react";

// src/components/editor/ui/table-icons.tsx
import { jsx as jsx151, jsxs as jsxs85 } from "react/jsx-runtime";
var BorderAll = (props) => /* @__PURE__ */ jsxs85(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx151(
        "path",
        {
          clipRule: "evenodd",
          d: "M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H14C14.4142 0.25 14.75 0.585786 14.75 1V14C14.75 14.4142 14.4142 14.75 14 14.75H1C0.585786 14.75 0.25 14.4142 0.25 14V1ZM1.75 1.75V13.25H13.25V1.75H1.75Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "5" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "3" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "7" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "5", y: "7" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "3", y: "7" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "9", y: "7" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "11", y: "7" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "9" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "11" })
    ]
  }
);
var BorderBottom = (props) => /* @__PURE__ */ jsxs85(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx151(
        "path",
        {
          clipRule: "evenodd",
          d: "M1 13.25L14 13.25V14.75L1 14.75V13.25Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "5" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "5" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "3" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "3" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "7" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "1" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "7" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "1" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "5", y: "7" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "5", y: "1" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "3", y: "7" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "3", y: "1" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "9", y: "7" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "9", y: "1" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "11", y: "7" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "11", y: "1" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "9" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "9" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "11" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "11" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "5" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "3" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "7" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "1" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "9" }),
      /* @__PURE__ */ jsx151("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "11" })
    ]
  }
);
var BorderLeft = (props) => /* @__PURE__ */ jsxs85(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx151(
        "path",
        {
          clipRule: "evenodd",
          d: "M1.75 1L1.75 14L0.249999 14L0.25 1L1.75 1Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
var BorderNone = (props) => /* @__PURE__ */ jsxs85(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
var BorderRight = (props) => /* @__PURE__ */ jsxs85(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx151(
        "path",
        {
          clipRule: "evenodd",
          d: "M13.25 1L13.25 14L14.75 14L14.75 1L13.25 1Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 5 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 5 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 3 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 3 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 5)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 5)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 3)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 3)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 9)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 9)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 11)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 11)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 9 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 9 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 11 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 11 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 5 1)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 3 1)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 1)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 1)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 9 1)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsx151(
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
var BorderTop = (props) => /* @__PURE__ */ jsxs85(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx151(
        "path",
        {
          clipRule: "evenodd",
          d: "M14 1.75L1 1.75L1 0.249999L14 0.25L14 1.75Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
      /* @__PURE__ */ jsx151(
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
import { jsx as jsx152, jsxs as jsxs86 } from "react/jsx-runtime";
var TableElement = withHOC8(
  TableProvider,
  function TableElement2({
    children,
    ...props
  }) {
    const readOnly = useReadOnly14();
    const isSelectionAreaVisible = usePluginOption23(
      BlockSelectionPlugin8,
      "isSelectionAreaVisible"
    );
    const hasControls = !readOnly && !isSelectionAreaVisible;
    const selected = useSelected8();
    const {
      isSelectingCell,
      marginLeft,
      props: tableProps
    } = useTableElement();
    const content = /* @__PURE__ */ jsx152(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ jsx152(
      PlateElement26,
      {
        ...props,
        className: cn(
          "overflow-x-auto py-5",
          hasControls && "-ml-2 *:data-[slot=block-selection]:left-2"
        ),
        style: { paddingLeft: marginLeft },
        children: /* @__PURE__ */ jsx152("div", { className: "group/table relative w-fit", children: /* @__PURE__ */ jsx152(
          "table",
          {
            className: cn(
              "mr-0 ml-px table h-px table-fixed border-collapse",
              isSelectingCell && "selection:bg-transparent"
            ),
            ...tableProps,
            children: /* @__PURE__ */ jsx152("tbody", { className: "min-w-full", children })
          }
        ) })
      }
    ) });
    if (readOnly || !selected) {
      return content;
    }
    return /* @__PURE__ */ jsx152(TableFloatingToolbar, { children: content });
  }
);
function TableFloatingToolbar({
  children,
  ...props
}) {
  const { tf } = useEditorPlugin17(TablePlugin10);
  const element = useElement7();
  const { props: buttonProps } = useRemoveNodeButton3({ element });
  const collapsed = useEditorSelector7((editor) => !editor.api.isExpanded(), []);
  const { canMerge, canSplit } = useTableMergeState2();
  return /* @__PURE__ */ jsxs86(Popover, { open: canMerge || canSplit || collapsed, modal: false, children: [
    /* @__PURE__ */ jsx152(PopoverAnchor2, { asChild: true, children }),
    /* @__PURE__ */ jsx152(
      PopoverContent,
      {
        asChild: true,
        onOpenAutoFocus: (e) => e.preventDefault(),
        contentEditable: false,
        ...props,
        children: /* @__PURE__ */ jsxs86(
          Toolbar,
          {
            className: "scrollbar-hide flex w-auto max-w-[80vw] flex-row overflow-x-auto rounded-md border bg-popover p-1 shadow-md print:hidden",
            contentEditable: false,
            children: [
              /* @__PURE__ */ jsxs86(ToolbarGroup, { children: [
                /* @__PURE__ */ jsx152(ColorDropdownMenu2, { tooltip: "Background color", children: /* @__PURE__ */ jsx152(PaintBucketIcon2, {}) }),
                canMerge && /* @__PURE__ */ jsx152(
                  ToolbarButton,
                  {
                    onClick: () => tf.table.merge(),
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Merge cells",
                    children: /* @__PURE__ */ jsx152(CombineIcon, {})
                  }
                ),
                canSplit && /* @__PURE__ */ jsx152(
                  ToolbarButton,
                  {
                    onClick: () => tf.table.split(),
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Split cell",
                    children: /* @__PURE__ */ jsx152(SquareSplitHorizontalIcon, {})
                  }
                ),
                /* @__PURE__ */ jsxs86(DropdownMenu, { modal: false, children: [
                  /* @__PURE__ */ jsx152(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx152(ToolbarButton, { tooltip: "Cell borders", children: /* @__PURE__ */ jsx152(Grid2X2Icon, {}) }) }),
                  /* @__PURE__ */ jsx152(DropdownMenuPortal, { children: /* @__PURE__ */ jsx152(TableBordersDropdownMenuContent, {}) })
                ] }),
                collapsed && /* @__PURE__ */ jsx152(ToolbarGroup, { children: /* @__PURE__ */ jsx152(ToolbarButton, { tooltip: "Delete table", ...buttonProps, children: /* @__PURE__ */ jsx152(Trash2Icon4, {}) }) })
              ] }),
              collapsed && /* @__PURE__ */ jsxs86(ToolbarGroup, { children: [
                /* @__PURE__ */ jsx152(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.insert.tableRow({ before: true });
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Insert row before",
                    children: /* @__PURE__ */ jsx152(ArrowUp2, {})
                  }
                ),
                /* @__PURE__ */ jsx152(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.insert.tableRow();
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Insert row after",
                    children: /* @__PURE__ */ jsx152(ArrowDown2, {})
                  }
                ),
                /* @__PURE__ */ jsx152(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.remove.tableRow();
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Delete row",
                    children: /* @__PURE__ */ jsx152(XIcon6, {})
                  }
                )
              ] }),
              collapsed && /* @__PURE__ */ jsxs86(ToolbarGroup, { children: [
                /* @__PURE__ */ jsx152(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.insert.tableColumn({ before: true });
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Insert column before",
                    children: /* @__PURE__ */ jsx152(ArrowLeft3, {})
                  }
                ),
                /* @__PURE__ */ jsx152(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.insert.tableColumn();
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Insert column after",
                    children: /* @__PURE__ */ jsx152(ArrowRight3, {})
                  }
                ),
                /* @__PURE__ */ jsx152(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.remove.tableColumn();
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Delete column",
                    children: /* @__PURE__ */ jsx152(XIcon6, {})
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
  const editor = useEditorRef25();
  const {
    getOnSelectTableBorder,
    hasBottomBorder,
    hasLeftBorder,
    hasNoBorders,
    hasOuterBorders,
    hasRightBorder,
    hasTopBorder
  } = useTableBordersDropdownMenuContentState();
  return /* @__PURE__ */ jsxs86(
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
        /* @__PURE__ */ jsxs86(DropdownMenuGroup, { children: [
          /* @__PURE__ */ jsxs86(
            DropdownMenuCheckboxItem,
            {
              checked: hasTopBorder,
              onCheckedChange: getOnSelectTableBorder("top"),
              children: [
                /* @__PURE__ */ jsx152(BorderTop, {}),
                /* @__PURE__ */ jsx152("div", { children: "Top Border" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs86(
            DropdownMenuCheckboxItem,
            {
              checked: hasRightBorder,
              onCheckedChange: getOnSelectTableBorder("right"),
              children: [
                /* @__PURE__ */ jsx152(BorderRight, {}),
                /* @__PURE__ */ jsx152("div", { children: "Right Border" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs86(
            DropdownMenuCheckboxItem,
            {
              checked: hasBottomBorder,
              onCheckedChange: getOnSelectTableBorder("bottom"),
              children: [
                /* @__PURE__ */ jsx152(BorderBottom, {}),
                /* @__PURE__ */ jsx152("div", { children: "Bottom Border" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs86(
            DropdownMenuCheckboxItem,
            {
              checked: hasLeftBorder,
              onCheckedChange: getOnSelectTableBorder("left"),
              children: [
                /* @__PURE__ */ jsx152(BorderLeft, {}),
                /* @__PURE__ */ jsx152("div", { children: "Left Border" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs86(DropdownMenuGroup, { children: [
          /* @__PURE__ */ jsxs86(
            DropdownMenuCheckboxItem,
            {
              checked: hasNoBorders,
              onCheckedChange: getOnSelectTableBorder("none"),
              children: [
                /* @__PURE__ */ jsx152(BorderNone, {}),
                /* @__PURE__ */ jsx152("div", { children: "No Border" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs86(
            DropdownMenuCheckboxItem,
            {
              checked: hasOuterBorders,
              onCheckedChange: getOnSelectTableBorder("outer"),
              children: [
                /* @__PURE__ */ jsx152(BorderAll, {}),
                /* @__PURE__ */ jsx152("div", { children: "Outside Borders" })
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
  const editor = useEditorRef25();
  const selectedCells = usePluginOption23(TablePlugin10, "selectedCells");
  const onUpdateColor = React51.useCallback(
    (color) => {
      setOpen(false);
      setCellBackground(editor, { color, selectedCells: selectedCells ?? [] });
    },
    [selectedCells, editor]
  );
  const onClearColor = React51.useCallback(() => {
    setOpen(false);
    setCellBackground(editor, {
      color: null,
      selectedCells: selectedCells ?? []
    });
  }, [selectedCells, editor]);
  return /* @__PURE__ */ jsxs86(DropdownMenu, { open, onOpenChange: setOpen, modal: false, children: [
    /* @__PURE__ */ jsx152(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx152(ToolbarButton, { tooltip, children }) }),
    /* @__PURE__ */ jsxs86(DropdownMenuContent, { align: "start", children: [
      /* @__PURE__ */ jsx152(ToolbarMenuGroup, { label: "Colors", children: /* @__PURE__ */ jsx152(
        ColorDropdownMenuItems,
        {
          className: "px-2",
          colors: DEFAULT_COLORS,
          updateColor: onUpdateColor
        }
      ) }),
      /* @__PURE__ */ jsx152(DropdownMenuGroup, { children: /* @__PURE__ */ jsxs86(DropdownMenuItem, { className: "p-2", onClick: onClearColor, children: [
        /* @__PURE__ */ jsx152(EraserIcon2, {}),
        /* @__PURE__ */ jsx152("span", { children: "Clear" })
      ] }) })
    ] })
  ] });
}

// src/components/editor/ui/table-row-element.tsx
import { GripVertical as GripVertical2 } from "lucide-react";
import { useComposedRef as useComposedRef5 } from "@udecode/cn";
import {
  PathApi as PathApi6
} from "@udecode/plate";
import {
  useDraggable as useDraggable5,
  useDropLine as useDropLine3
} from "@udecode/plate-dnd";
import { BlockSelectionPlugin as BlockSelectionPlugin9 } from "@udecode/plate-selection/react";
import {
  PlateElement as PlateElement27,
  useEditorRef as useEditorRef26,
  useElement as useElement8,
  usePluginOption as usePluginOption24,
  useReadOnly as useReadOnly15,
  useSelected as useSelected9
} from "@udecode/plate/react";
import { jsx as jsx153, jsxs as jsxs87 } from "react/jsx-runtime";
function TableRowElement(props) {
  const { element } = props;
  const readOnly = useReadOnly15();
  const selected = useSelected9();
  const editor = useEditorRef26();
  const isSelectionAreaVisible = usePluginOption24(
    BlockSelectionPlugin9,
    "isSelectionAreaVisible"
  );
  const hasControls = !readOnly && !isSelectionAreaVisible;
  const { isDragging, previewRef, handleRef } = useDraggable5({
    element,
    type: element.type,
    canDropNode: ({ dragEntry, dropEntry }) => PathApi6.equals(
      PathApi6.parent(dragEntry[1]),
      PathApi6.parent(dropEntry[1])
    ),
    onDropHandler: (_, { dragItem }) => {
      const dragElement = dragItem.element;
      if (dragElement) {
        editor.tf.select(dragElement);
      }
    }
  });
  return /* @__PURE__ */ jsxs87(
    PlateElement27,
    {
      ...props,
      ref: useComposedRef5(props.ref, previewRef),
      as: "tr",
      className: cn("group/row", isDragging && "opacity-50"),
      attributes: {
        ...props.attributes,
        "data-selected": selected ? "true" : void 0
      },
      children: [
        hasControls && /* @__PURE__ */ jsxs87("td", { className: "w-2 select-none", contentEditable: false, children: [
          /* @__PURE__ */ jsx153(RowDragHandle, { dragRef: handleRef }),
          /* @__PURE__ */ jsx153(DropLine4, {})
        ] }),
        props.children
      ]
    }
  );
}
function RowDragHandle({ dragRef }) {
  const editor = useEditorRef26();
  const element = useElement8();
  return /* @__PURE__ */ jsx153(
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
      children: /* @__PURE__ */ jsx153(GripVertical2, { className: "text-muted-foreground" })
    }
  );
}
function DropLine4() {
  const { dropLine } = useDropLine3();
  if (!dropLine) return null;
  return /* @__PURE__ */ jsx153(
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
import { cva as cva17 } from "class-variance-authority";
import {
  useTocElement,
  useTocElementState
} from "@udecode/plate-heading/react";
import { PlateElement as PlateElement28 } from "@udecode/plate/react";
import { jsx as jsx154, jsxs as jsxs88 } from "react/jsx-runtime";
var headingItemVariants2 = cva17(
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
  const state = useTocElementState();
  const { props: btnProps } = useTocElement(state);
  const { headingList } = state;
  return /* @__PURE__ */ jsx154(BlockWithPlus, { element: props.element, children: /* @__PURE__ */ jsxs88(PlateElement28, { ...props, className: "mb-1 p-0", children: [
    /* @__PURE__ */ jsx154("div", { contentEditable: false, children: headingList.length > 0 ? headingList.map((item) => /* @__PURE__ */ jsx154(
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
    )) : /* @__PURE__ */ jsx154("div", { className: "text-sm text-gray-500", children: "Create a heading to display the table of contents." }) }),
    props.children
  ] }) });
}

// src/components/editor/ui/toggle-element.tsx
import { ChevronRight as ChevronRight3 } from "lucide-react";
import {
  useToggleButton,
  useToggleButtonState
} from "@udecode/plate-toggle/react";
import { PlateElement as PlateElement29 } from "@udecode/plate/react";
import { jsx as jsx155, jsxs as jsxs89 } from "react/jsx-runtime";
function ToggleElement(props) {
  const element = props.element;
  const state = useToggleButtonState(element.id);
  const { buttonProps, open } = useToggleButton(state);
  return /* @__PURE__ */ jsx155(BlockWithPlus, { element, children: /* @__PURE__ */ jsxs89(PlateElement29, { ...props, className: "pl-6", children: [
    /* @__PURE__ */ jsx155(
      Button,
      {
        size: "icon",
        variant: "ghost",
        className: "absolute top-0 -left-0.5 size-6 cursor-pointer items-center justify-center rounded-md p-px text-muted-foreground transition-colors select-none hover:bg-accent [&_svg]:size-4",
        contentEditable: false,
        ...buttonProps,
        children: /* @__PURE__ */ jsx155(
          ChevronRight3,
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
  [AudioPlugin8.key]: MediaAudioElement,
  [BlockquotePlugin13.key]: BlockquoteElement,
  [BoldPlugin5.key]: withProps4(PlateLeaf8, { as: "strong" }),
  [CalloutPlugin7.key]: CalloutElement,
  [CodeBlockPlugin14.key]: CodeBlockElement,
  [CodeLinePlugin.key]: CodeLineElement,
  [CodePlugin5.key]: CodeLeaf,
  [CodeSyntaxPlugin.key]: CodeSyntaxLeaf,
  [ColumnItemPlugin3.key]: ColumnElement,
  [ColumnPlugin6.key]: ColumnGroupElement,
  [CommentsPlugin5.key]: CommentLeaf,
  [DatePlugin6.key]: DateElement,
  [EquationPlugin6.key]: EquationElement,
  [ExcalidrawPlugin4.key]: ExcalidrawElement,
  [FilePlugin8.key]: MediaFileElement,
  [HEADING_KEYS14.h1]: withProps4(HeadingElement, { variant: "h1" }),
  [HEADING_KEYS14.h2]: withProps4(HeadingElement, { variant: "h2" }),
  [HEADING_KEYS14.h3]: withProps4(HeadingElement, { variant: "h3" }),
  [HEADING_KEYS14.h4]: withProps4(HeadingElement, { variant: "h4" }),
  [HEADING_KEYS14.h5]: withProps4(HeadingElement, { variant: "h5" }),
  [HEADING_KEYS14.h6]: withProps4(HeadingElement, { variant: "h6" }),
  [HighlightPlugin4.key]: HighlightLeaf,
  [HorizontalRulePlugin6.key]: HrElement,
  [ImagePlugin13.key]: ImageElement,
  [InlineEquationPlugin6.key]: InlineEquationElement,
  [ItalicPlugin5.key]: withProps4(PlateLeaf8, { as: "em" }),
  [KbdPlugin3.key]: KbdLeaf,
  [LinkPlugin6.key]: LinkElement,
  [MediaEmbedPlugin10.key]: MediaEmbedElement,
  [MentionPlugin3.key]: MentionElement,
  [ParagraphPlugin14.key]: ParagraphElement,
  [PlaceholderPlugin8.key]: MediaPlaceholderElement,
  [StrikethroughPlugin5.key]: withProps4(PlateLeaf8, { as: "s" }),
  [SubscriptPlugin3.key]: withProps4(PlateLeaf8, { as: "sub" }),
  [SuggestionPlugin8.key]: SuggestionLeaf,
  [SuperscriptPlugin3.key]: withProps4(PlateLeaf8, { as: "sup" }),
  [TableCellHeaderPlugin2.key]: TableCellHeaderElement,
  [TableCellPlugin4.key]: TableCellElement,
  [TablePlugin11.key]: TableElement,
  [TableRowPlugin4.key]: TableRowElement,
  [TocPlugin6.key]: TocElement,
  [TogglePlugin10.key]: ToggleElement,
  [UnderlinePlugin5.key]: withProps4(PlateLeaf8, { as: "u" }),
  [VideoPlugin8.key]: MediaVideoElement
};
var editorComponents = {
  ...viewComponents,
  [AIPlugin4.key]: AILeaf,
  [EmojiInputPlugin2.key]: EmojiInputElement,
  [MentionInputPlugin2.key]: MentionInputElement,
  [SlashInputPlugin.key]: SlashInputElement
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
  return usePlateEditor2(
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
import { jsx as jsx156 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx156("div", { className: "h-screen w-full", "data-registry": "plate", children: /* @__PURE__ */ jsx156(SettingsProvider, { children: /* @__PURE__ */ jsx156(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ jsx156(Plate3, { editor, children }) }) }) });
};
var CoreEditor = ({ editorRef, ...props }) => {
  return /* @__PURE__ */ jsx156(EditorContainer, { children: /* @__PURE__ */ jsx156(Editor, { ref: editorRef, ...props }) });
};

// src/components/editor/core/tool-base.tsx
import {
  ArrowUpToLineIcon as ArrowUpToLineIcon3,
  BaselineIcon as BaselineIcon2,
  BoldIcon as BoldIcon3,
  Code2Icon as Code2Icon3,
  HighlighterIcon as HighlighterIcon2,
  ItalicIcon as ItalicIcon3,
  PaintBucketIcon as PaintBucketIcon3,
  StrikethroughIcon as StrikethroughIcon3,
  UnderlineIcon as UnderlineIcon3
} from "lucide-react";
import {
  BoldPlugin as BoldPlugin6,
  CodePlugin as CodePlugin6,
  ItalicPlugin as ItalicPlugin6,
  StrikethroughPlugin as StrikethroughPlugin6,
  UnderlinePlugin as UnderlinePlugin6
} from "@udecode/plate-basic-marks/react";
import {
  FontBackgroundColorPlugin as FontBackgroundColorPlugin3,
  FontColorPlugin as FontColorPlugin3
} from "@udecode/plate-font/react";
import { HighlightPlugin as HighlightPlugin5 } from "@udecode/plate-highlight/react";
import {
  AudioPlugin as AudioPlugin9,
  FilePlugin as FilePlugin9,
  ImagePlugin as ImagePlugin14,
  VideoPlugin as VideoPlugin9
} from "@udecode/plate-media/react";
import { jsx as jsx157 } from "react/jsx-runtime";
var Undo = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(UndoToolbarButton, {})
        }
      )
    }
  );
};
var Redo = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(RedoToolbarButton, {})
        }
      )
    }
  );
};
var AI = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(AIToolbarButton, {})
        }
      )
    }
  );
};
var Export = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(ExportToolbarButton, { children: /* @__PURE__ */ jsx157(ArrowUpToLineIcon3, {}) })
        }
      )
    }
  );
};
var Import = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(ImportToolbarButton, {})
        }
      )
    }
  );
};
var Insert = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(InsertDropdownMenu, {})
        }
      )
    }
  );
};
var TurnInto = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(TurnIntoDropdownMenu, {})
        }
      )
    }
  );
};
var FontSize = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(FontSizeToolbarButton, {})
        }
      )
    }
  );
};
var Bold = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(MarkToolbarButton, { nodeType: BoldPlugin6.key, tooltip: "Bold (\u2318+B)", children: /* @__PURE__ */ jsx157(BoldIcon3, {}) })
        }
      )
    }
  );
};
var Italic = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(MarkToolbarButton, { nodeType: ItalicPlugin6.key, tooltip: "Italic (\u2318+I)", children: /* @__PURE__ */ jsx157(ItalicIcon3, {}) })
        }
      )
    }
  );
};
var Underline = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(MarkToolbarButton, { nodeType: UnderlinePlugin6.key, tooltip: "Underline (\u2318+U)", children: /* @__PURE__ */ jsx157(UnderlineIcon3, {}) })
        }
      )
    }
  );
};
var StrikeThrough = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(MarkToolbarButton, { nodeType: StrikethroughPlugin6.key, tooltip: "Strikethrough (\u2318+\u21E7+M)", children: /* @__PURE__ */ jsx157(StrikethroughIcon3, {}) })
        }
      )
    }
  );
};
var Code = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(MarkToolbarButton, { nodeType: CodePlugin6.key, tooltip: "Code (\u2318+E)", children: /* @__PURE__ */ jsx157(Code2Icon3, {}) })
        }
      )
    }
  );
};
var FontColor = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(ColorDropdownMenu, { nodeType: FontColorPlugin3.key, tooltip: "Text color", children: /* @__PURE__ */ jsx157(BaselineIcon2, {}) })
        }
      )
    }
  );
};
var BackgroundColor = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(ColorDropdownMenu, { nodeType: FontBackgroundColorPlugin3.key, tooltip: "Background color", children: /* @__PURE__ */ jsx157(PaintBucketIcon3, {}) })
        }
      )
    }
  );
};
var Align = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(AlignDropdownMenu, {})
        }
      )
    }
  );
};
var NumberIndentList = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(NumberedIndentListToolbarButton, {})
        }
      )
    }
  );
};
var BulletedIndentList = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(BulletedIndentListToolbarButton, {})
        }
      )
    }
  );
};
var TodoIndentList = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(IndentTodoToolbarButton, {})
        }
      )
    }
  );
};
var Toggle = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(ToggleToolbarButton, {})
        }
      )
    }
  );
};
var Link5 = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(LinkToolbarButton, {})
        }
      )
    }
  );
};
var Table3 = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(TableDropdownMenu, {})
        }
      )
    }
  );
};
var Emoji = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(EmojiDropdownMenu, {})
        }
      )
    }
  );
};
var ImageMedia = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(MediaToolbarButton, { nodeType: ImagePlugin14.key })
        }
      )
    }
  );
};
var VideoMedia = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(MediaToolbarButton, { nodeType: VideoPlugin9.key })
        }
      )
    }
  );
};
var AudioMedia = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(MediaToolbarButton, { nodeType: AudioPlugin9.key })
        }
      )
    }
  );
};
var FileMedia = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(MediaToolbarButton, { nodeType: FilePlugin9.key })
        }
      )
    }
  );
};
var LineHeight = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(LineHeightDropdownMenu, {})
        }
      )
    }
  );
};
var Outdent2 = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(OutdentToolbarButton, {})
        }
      )
    }
  );
};
var Indent2 = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(IndentToolbarButton, {})
        }
      )
    }
  );
};
var More = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(MoreDropdownMenu, {})
        }
      )
    }
  );
};
var Highlight = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(MarkToolbarButton, { nodeType: HighlightPlugin5.key, tooltip: "Highlight", children: /* @__PURE__ */ jsx157(HighlighterIcon2, {}) })
        }
      )
    }
  );
};
var Comment2 = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(CommentToolbarButton, {})
        }
      )
    }
  );
};
var Mode = () => {
  return /* @__PURE__ */ jsx157(
    Toolbar,
    {
      style: {
        padding: 0,
        border: "none"
      },
      children: /* @__PURE__ */ jsx157(
        ToolbarGroup,
        {
          style: {
            padding: 0,
            border: "none"
          },
          children: /* @__PURE__ */ jsx157(ModeDropdownMenu, {})
        }
      )
    }
  );
};

// src/api/hooks/useApi.ts
import {
  useEffect as useEffect15,
  useState as useState35
} from "react";
import axios from "axios";

// src/api/apiProvider.tsx
import {
  createContext as createContext3,
  useContext as useContext3
} from "react";
import { jsx as jsx158 } from "react/jsx-runtime";
var ApiContext = createContext3(void 0);
var ApiProvider = ({ children, host, resources }) => {
  return /* @__PURE__ */ jsx158(ApiContext.Provider, { value: { host, resources }, children });
};
var useApiContext = () => {
  const context = useContext3(ApiContext);
  if (!context) throw new Error("useApiContext must be used inside ApiProvider");
  return context;
};

// src/api/hooks/useApi.ts
var useApi = (resourceKey, params, options) => {
  const { host, resources } = useApiContext();
  const endpoint = resources[resourceKey];
  const [data, setData] = useState35(null);
  const [loading, setLoading] = useState35(false);
  const [error, setError] = useState35(null);
  useEffect15(() => {
    if (!endpoint || options?.skip) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${host}${endpoint}`, { params });
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
import { useState as useState36 } from "react";
import axios2 from "axios";
var useApiMutation = (resourceKey, options) => {
  const { host, resources } = useApiContext();
  const endpoint = resources[resourceKey];
  const [loading, setLoading] = useState36(false);
  const [error, setError] = useState36(null);
  const [data, setData] = useState36(null);
  const mutate = async (body, extraParams) => {
    setLoading(true);
    try {
      const res = await axios2.request({
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
export {
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
  Comment2 as Comment,
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
  Indent2 as Indent,
  Insert,
  Italic,
  LineHeight,
  Link5 as Link,
  Mode,
  More,
  NumberIndentList,
  Outdent2 as Outdent,
  PLUGIN_DEFAULTS,
  PROMPT_TEMPLATES,
  Redo,
  STRUCTURAL_TYPES,
  SettingsDialog,
  SettingsProvider,
  StrikeThrough,
  Table3 as Table,
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
};
//# sourceMappingURL=index.mjs.map