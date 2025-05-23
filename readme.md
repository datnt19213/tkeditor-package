
# TKEditor - Advanced Rich Text Editor

TKEditor is a powerful and extensible rich text editor built with Next.js, Plate.js, and a suite of modern technologies. It offers a comprehensive editing experience with AI-powered features, seamless file uploads, and a highly customizable plugin-based architecture.

<p align="center"><img src="https://live.staticflickr.com/65535/54538881909_1feb28856a_n.jpg" width="320" height="320" alt="TKEditor NPM Package Logo"/></p>

<p align="center"><a href="https://tkeditor-demo.vercel.app/"><strong>Demo</strong></a></p>


# TKEditor 📝✨

[![NPM Version](https://img.shields.io/npm/v/tkeditor.svg)](https://www.npmjs.com/package/tkeditor)
[![License](https://img.shields.io/npm/l/tkeditor.svg)](https://github.com/datnt19213/tkeditor-package/blob/main/LICENCE)
[![NPM Downloads](https://img.shields.io/npm/dm/tkeditor.svg)](https://www.npmjs.com/package/tkeditor)

TKEditor is a powerful and scalable feature-rich text editor (rich text editor), built with React, Plate.js, and a modern tech stack. It provides a comprehensive editing experience with AI-powered features, seamless file uploads, and a highly customizable plugin-based architecture.

**List of contents**

*   [ Features ](#tính-năng-)
*   [ Installation ](#cài-đặt-)
*   [ Usage ](#sử-dụng-)
*   [ TKEditor Props ](#props-của-tkeditor-)
*   [ Plugins ](#plugins-)
*   [ Customization ](#tùy-chỉnh-)
*   [ Contributing ](#đóng-góp-)
*   [ License ](#giấy-phép-)

## Features 🚀

*   **Powerful Plate.js Foundation:** Built on Plate.js, providing a solid and high-performance foundation for text editing.
*   **AI-Powered 🤖:**
    *   **AI Copilot:** Intelligent real-time text suggestions.
    *   **AI Chat & Commands:** Interact with AI directly within the editor to generate, modify, or improve content.
    *   **Custom Prompts:** Ability to define prompt templates to optimize interaction with AI.
*   **Easy File Uploads ☁️:** Integration with Uploadthing allows for smooth uploading of images, videos, audio, PDFs, and text files.
*   **Flexible Plugin Architecture 🧩:** Easily extend and customize functionality through a rich plugin system.
*   **Comprehensive Markdown Support Ⓜ️:** Compose content using Markdown syntax and preview directly.
*   **Highly Customizable User Interface 🎨:** Uses Tailwind CSS and Radix UI, allowing for flexible interface customization to fit your application.
*   **Diverse Content Types 🧱:** Supports various block and inline elements:
    *   Headings (H1-H6)
    *   Paragraph
    *   Lists (ordered, unordered, task list)
    *   Blockquote
    *   Code Block with syntax highlighting
    *   Table
    *   Images, Videos, Audio
    *   Link
    *   Mention
    *   Emoji
    *   Date
    *   Horizontal Rule
    *   Table of Contents
    *   Callout
    *   And much more!
*   **Collaboration Features 🤝:**
    *   **Comments:** Discuss content directly.
    *   **Suggestions:** Propose changes and track editing history.
*   **Optimized for Developers ✨:**
    *   Written in TypeScript.
    *   Easy integration into React projects.

## Install 📦

Install `tkeditor` and the necessary peer dependencies:

```bash
npm install tkeditor clsx react react-dom
# hoặc
yarn add tkeditor clsx react react-dom
```

`You also need to install Tailwind CSS in your project if you haven't already. TKEditor is designed to work best with Tailwind CSS.`

## Usage 🛠️
Here is a basic example of how to integrate TKEditor into your application:

``` typescript
"use client"; //Use it if your project is NextJS
import  'tkeditor/index.css'; //Maybe not but it will better when use it

import { CoreEditor, EditorProvider } from  'tkeditor';

function App() {
  return (
    <EditorProvider  >
	   <CoreEditor />
	</EditorProvider>
  );
}

export default App;
```

``` css
/* use it when u use Tailwindcss v4 (same like `content: [...]` in tailwind.config.js/ts of tailwindcss v3)*/
@source  "../../node_modules/tkeditor";
```
****Structure app (structure folder appply for NextJS)****
```bash
#structure

~project

├── src
│ ├── app
│ │ ├── api
│ │ │ ├── ai
│ │ │ │ ├── command
│ │ │ │ │ └── route.ts
│ │ │ │ └── copilot
│ │ │ │ └── route.ts
│ │ │ └── uploadthing
│ │ │ └── route.ts
		...

```
****AI content routes****
```ts
-  `/api/ai/command` - AI command API route.
-  `/api/ai/copilot` - AI copilot API route.
-  `/api/uploadthing` - Uploadthing API route to file uploads.
```

```env
OPENAI_API_KEY=<your_open_api_key_here>
UPLOADTHING_TOKEN=<your_uploadthing_token_here>
WEBSITE_URL=<your_website_url>
```
<i>if you are useing NextJS `your_website_url` is your web host url (cuz this is the host to use call AI Content)</i><br>
<i>if you are useing base React `your_website_url`  may be your <strong>Backend </strong>host url  to use call AI Content)</i>

- [Get Open Api Key here](https://platform.openai.com/account/api-keys)
- [Get Uploadthing Token here](https://uploadthing.com/dashboard)

## Props

#### `CoreEditor` Props
| Prop                   | Type          | Required | Description    |
| ---------------------- | ------------- | -------- | ------------------------------------------------- |
| `editorRef`            | `React.Ref<HTMLDivElement>`   | ✖️       | Reference to the editor container DOM node.       |
| `variant`              | `"default" | "select" | "none" | "comment" | "demo" | "ai" | "aiChat" | "fullWidth"` | ✖️       | Determines the visual style of the editor.        |
| `focused`              | `boolean`                                                                            | ✖️       | Indicates if the editor is currently focused.     |
| `disabled`             | `boolean`                                                                            | ✖️       | Disables editing capabilities when set to `true`. |
| `className`            | `string`                                                                             | ✖️       | Custom CSS class for the editor container.        |
| `...PlateContentProps` | [PlateContentProps](https://platejs.org/docs/api/plate-content#props)                | ✖️       | Props passed to the Plate content component.      |

#### `EditorProvider` Props
| Prop             | Type                                          | Required | Description                                 |
| ---------------- | --------------------------------------------- | -------- | ------------------------------------------- |
| `children`       | `React.ReactNode`                             | ✅        | Editor children components.                 |
| `isToolbar`      | `boolean`                                     | ✖️       | Show or hide the main toolbar.              |
| `isFloating`     | `boolean`                                     | ✖️       | Enable floating toolbar behavior.           |
| `allowPlugins`   | `PLUGIN_KEY[]`                                | ✖️       | List of allowed plugins (see below).        |
| `toolbarClasses` | `{ className?: string; groupClass?: string }` | ✖️       | Classes for styling the toolbar and groups. |

#### Available Plugin Keys (`PLUGIN_KEY`)
`"undo" | "redo" | "ai" | "export" | "import" | "insert" | "turn_into" | "font_size" |
"bold" | "italic" | "underline" | "strikethrough" | "code" | "font_color" |
"background_color" | "align" | "indent_list" | "bulleted_list" | "indent_todo" |
"toggle" | "link" | "table" | "emoji" | "image" | "video" | "audio" | "file" |
"line_height" | "outdent" | "indent" | "more" | "highlight" | "comment" |
"mode" | "equation" | "suggestion"`
#### `useCreateEditor` Options
| Prop                | Type      | Required | Description                                   |
| ------------------- | ----------- | -------- | --------------------------------------------- |
| `isFixedToolbar`    | `boolean`                                                                          | ✖️       | Enables a fixed (non-scrolling) toolbar.      |
| `isFloatingToolbar` | `boolean`                                                                          | ✖️       | Enables a floating toolbar on text selection. |
| `allowPlugins`      | `PLUGIN_KEY[]`                                                                     | ✖️       | Limit editor features by allowed plugin keys. |
| `toolbarClasses`    | `{ className?: string; groupClass?: string }`                                      | ✖️       | Customize classes for fixed toolbar.          |
| `floatingClasses`   | `{ className?: string; groupClass?: string }`                                      | ✖️       | Customize classes for floating toolbar.       |
| `components`        | `Record<string, any>`                                                              | ✖️       | Override or extend default UI components.     |
| `placeholders`      | `boolean`                                                                          | ✖️       | Enable placeholder behavior.                  |
| `readOnly`          | `boolean`                                                                          | ✖️       | Set editor to read-only mode.                 |
| `...options`        | [`CreatePlateEditorOptions`](https://platejs.org/docs/api/plate#createplateeditor) | ✖️       | Additional editor configuration.              |


## Contributing 🤝
We welcome all contributions! If you would like to contribute to TKEditor, please:

* **Fork** this repository.
* Create a new **branch** for your feature or bug fix `git checkout -b feature/amazing-feature`.
* **Commit** your changes `git commit -m 'Add some amazing feature'`.
* **Push** to your branch `git push origin feature/amazing-feature`.
* Open a **Pull Request**.
* Please ensure that your code adheres to the standards and includes necessary tests. You can report bugs or request new features on [GitHub Issues](https://github.com/datnt19213/tkeditor/issues).

## License 📄
TKEditor is released under the [MIT License](https://github.com/datnt19213/tkeditor-package/blob/main/LICENCE).

Thank you for using TKEditor! We hope it helps you build great editing experiences. 🎉