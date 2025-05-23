
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
# or
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
│ │ │ │   └── route.ts
│ │ │ └── uploadthing
│ │ │   └── route.ts
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

## Configure AI Content (Optional for use AI Content)
`/api/ai/command/route`
```ts
import type { TextStreamPart, ToolSet } from 'ai';
import type { NextRequest } from 'next/server';

import { createOpenAI } from '@ai-sdk/openai';
import { InvalidArgumentError } from '@ai-sdk/provider';
import { delay as originalDelay } from '@ai-sdk/provider-utils';
import { convertToCoreMessages, streamText } from 'ai';
import { NextResponse } from 'next/server';

/**
 * Detects the first chunk in a buffer.
 *
 * @param buffer - The buffer to detect the first chunk in.
 * @returns The first detected chunk, or `undefined` if no chunk was detected.
 */
export type ChunkDetector = (buffer: string) => string | null | undefined;

type delayer = (buffer: string) => number;

/**
 * Smooths text streaming output.
 *
 * @param delayInMs - The delay in milliseconds between each chunk. Defaults to
 *   10ms. Can be set to `null` to skip the delay.
 * @param chunking - Controls how the text is chunked for streaming. Use "word"
 *   to stream word by word (default), "line" to stream line by line, or provide
 *   a custom RegExp pattern for custom chunking.
 * @returns A transform stream that smooths text streaming output.
 */
function smoothStream<TOOLS extends ToolSet>({
  _internal: { delay = originalDelay } = {},
  chunking = 'word',
  delayInMs = 10,
}: {
  /** Internal. For test use only. May change without notice. */
  _internal?: {
    delay?: (delayInMs: number | null) => Promise<void>;
  };
  chunking?: ChunkDetector | RegExp | 'line' | 'word';
  delayInMs?: delayer | number | null;
} = {}): (options: {
  tools: TOOLS;
}) => TransformStream<TextStreamPart<TOOLS>, TextStreamPart<TOOLS>> {
  let detectChunk: ChunkDetector;

  if (typeof chunking === 'function') {
    detectChunk = (buffer) => {
      const match = chunking(buffer);

      if (match == null) {
        return null;
      }

      if (match.length === 0) {
        throw new Error(`Chunking function must return a non-empty string.`);
      }

      if (!buffer.startsWith(match)) {
        throw new Error(
          `Chunking function must return a match that is a prefix of the buffer. Received: "${match}" expected to start with "${buffer}"`
        );
      }

      return match;
    };
  } else {
    const chunkingRegex =
      typeof chunking === 'string' ? CHUNKING_REGEXPS[chunking] : chunking;

    if (chunkingRegex == null) {
      throw new InvalidArgumentError({
        argument: 'chunking',
        message: `Chunking must be "word" or "line" or a RegExp. Received: ${chunking}`,
      });
    }

    detectChunk = (buffer) => {
      const match = chunkingRegex.exec(buffer);

      if (!match) {
        return null;
      }

      return buffer.slice(0, match.index) + match?.[0];
    };
  }

  return () => {
    let buffer = '';

    return new TransformStream<TextStreamPart<TOOLS>, TextStreamPart<TOOLS>>({
      async transform(chunk, controller) {
        if (chunk.type !== 'text-delta') {
          console.log(buffer, 'finished');

          if (buffer.length > 0) {
            controller.enqueue({ textDelta: buffer, type: 'text-delta' });
            buffer = '';
          }

          controller.enqueue(chunk);
          return;
        }

        buffer += chunk.textDelta;

        let match;

        while ((match = detectChunk(buffer)) != null) {
          controller.enqueue({ textDelta: match, type: 'text-delta' });
          buffer = buffer.slice(match.length);

          const _delayInMs =
            typeof delayInMs === 'number'
              ? delayInMs
              : (delayInMs?.(buffer) ?? 10);

          await delay(_delayInMs);
        }
      },
    });
  };
}

const CHUNKING_REGEXPS = {
  line: /\n+/m,
  list: /.{8}/m,
  word: /\S+\s+/m,
};

export async function POST(req: NextRequest) {
  const { apiKey: key, messages, system } = await req.json();

  const apiKey = key || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Missing OpenAI API key.' },
      { status: 401 }
    );
  }

  const openai = createOpenAI({ apiKey });

  let isInCodeBlock = false;
  let isInTable = false;
  let isInList = false;
  let isInLink = false;
  try {
    const result = streamText({
      experimental_transform: smoothStream({
        chunking: (buffer) => {
          // Check for code block markers
          if (/```[^\s]+/.test(buffer)) {
            isInCodeBlock = true;
          } else if (isInCodeBlock && buffer.includes('```')) {
            isInCodeBlock = false;
          }
          // test case: should not deserialize link with markdown syntax
          if (buffer.includes('http')) {
            isInLink = true;
          } else if (buffer.includes('https')) {
            isInLink = true;
          } else if (buffer.includes('\n') && isInLink) {
            isInLink = false;
          }
          if (buffer.includes('*') || buffer.includes('-')) {
            isInList = true;
          } else if (buffer.includes('\n') && isInList) {
            isInList = false;
          }
          // Simple table detection: enter on |, exit on double newline
          if (!isInTable && buffer.includes('|')) {
            isInTable = true;
          } else if (isInTable && buffer.includes('\n\n')) {
            isInTable = false;
          }

          // Use line chunking for code blocks and tables, word chunking otherwise
          // Choose the appropriate chunking strategy based on content type
          let match;

          if (isInCodeBlock || isInTable || isInLink) {
            // Use line chunking for code blocks and tables
            match = CHUNKING_REGEXPS.line.exec(buffer);
          } else if (isInList) {
            // Use list chunking for lists
            match = CHUNKING_REGEXPS.list.exec(buffer);
          } else {
            // Use word chunking for regular text
            match = CHUNKING_REGEXPS.word.exec(buffer);
          }
          if (!match) {
            return null;
          }

          return buffer.slice(0, match.index) + match?.[0];
        },
        delayInMs: () => (isInCodeBlock || isInTable ? 100 : 30),
      }),
      maxTokens: 2048,
      messages: convertToCoreMessages(messages),
      model: openai('gpt-4o'),
      system: system,
    });

    return result.toDataStreamResponse();
  } catch {
    return NextResponse.json(
      { error: 'Failed to process AI request' },
      { status: 500 }
    );
  }
}
```
`/api/ai/copilot/route`
```ts
import type { NextRequest } from 'next/server';

import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const {
    apiKey: key,
    model = 'gpt-4o-mini',
    prompt,
    system,
  } = await req.json();

  const apiKey = key || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Missing OpenAI API key.' },
      { status: 401 }
    );
  }

  const openai = createOpenAI({ apiKey });

  try {
    const result = await generateText({
      abortSignal: req.signal,
      maxTokens: 50,
      model: openai(model),
      prompt: prompt,
      system,
      temperature: 0.7,
    });

    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json(null, { status: 408 });
    }

    return NextResponse.json(
      { error: 'Failed to process AI request' },
      { status: 500 }
    );
  }
}
```
`/api/uploadthing/route`
```ts
import { createRouteHandler } from 'uploadthing/next';

import { ourFileRouter } from '@/lib/uploadthing';

export const { GET, POST } = createRouteHandler({ router: ourFileRouter });
```

## API Context & Hooks

 *API Context & Hooks:* A simple and reusable API context solution using React Context, Axios, and custom hooks for managing API interactions in your app.

*Features:*

> -   Centralized API configuration using React Context
>     
> -   Custom hook to fetch data: `useApi`
>     
> -   Custom hook to mutate data (POST/PUT/DELETE): `useApiMutation`

##### Define Your API Provider

```tsx
import { ApiProvider } from './apiProvider';

const apiConfig = {
  host: 'https://your-api-host.com',
  resources: {
    users: '/users',
    posts: '/posts',
    // add more resources here
  },
};

function App() {
  return (
    <ApiProvider host={apiConfig.host} resources={apiConfig.resources}>
      <YourAppComponents />
    </ApiProvider>
  );
}

```

----------

## 📡 `useApi` – Fetch Data

Fetches data from the API based on the resource key and optional query parameters.

```tsx
import { useApi } from './hooks/useApi';

const UserList = () => {
  const { data, loading, error } = useApi('users', { page: 1 });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <ul>
      {data?.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

```

##### Parameters:

-   `resourceKey` – key defined in `resources` (e.g., `'users'`)
    
-   `params` – query parameters (optional)
    
-   `options.skip` – set `true` to skip fetching initially
    

----------

## ✏️ `useApiMutation` – Mutate Data (POST/PUT/DELETE)

Handles data mutation (e.g., submitting a form or deleting a record).

```tsx
import { useApiMutation } from './hooks/useApiMutation';

const CreateUser = () => {
  const { mutate, loading, error, data } = useApiMutation('users', {
    method: 'POST',
    onSuccess: () => alert('User created!'),
    onError: (err) => console.error(err),
  });

  const handleSubmit = () => {
    mutate({ name: 'John Doe', email: 'john@example.com' });
  };

  return (
    <div>
      <button onClick={handleSubmit} disabled={loading}>
        Create User
      </button>
      {error && <p>Error creating user</p>}
    </div>
  );
};

```

##### Parameters:

-   `resourceKey` – key defined in `resources` (e.g., `'users'`)
    
-   `options.method` – HTTP method (default is `'POST'`)
    
-   `options.onSuccess` – callback on successful response
    
-   `options.onError` – callback on error
    

----------

##### 🧠 Accessing Context Directly

If needed, access the context manually with:

```tsx
import { useApiContext } from './apiProvider';

const Component = () => {
  const { host, resources } = useApiContext();
  console.log(host, resources);
};

```

----------

##### ⚠️ Error Handling

Both `useApi` and `useApiMutation` expose `error` which you can use to display or log errors.

```
~project/
  ├─ src
    ├─ api
      ├─ apiProvider.ts
      ├─ useApi.ts
      └─ useApiMutation.ts
```

## Props of TKEditor

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