
# TEditor - Advanced Rich Text Editor

TEditor is a powerful and extensible rich text editor built with Next.js, Plate.js, and a suite of modern technologies. It offers a comprehensive editing experience with AI-powered features, seamless file uploads, and a highly customizable plugin-based architecture.

#### **[Demo](https://playground.platejs.org)**


## Features

- **Rich Text Editing**: Powered by [Plate.js](https://platejs.org/), offering a robust and flexible core editor.
- **AI Integration**:
    - **AI Command**: Execute AI-powered commands directly within the editor (via `/api/ai/command`).
    - **AI Copilot**: Get AI-assisted writing and suggestions as you type (via `/api/ai/copilot`).
- **File Uploads**: Integrated with [Uploadthing](https://uploadthing.com/) for easy and efficient file handling (images, videos, audio, documents - see `lib/uploadthing.ts` and `app/api/uploadthing/route.ts`).
- **Extensive Plugin System**: A wide array of plugins enhance functionality, including:
    - Basic text formatting (bold, italic, underline, etc.)
    - Headings, blockquotes, code blocks (with syntax highlighting via `lowlight`)
    - Lists (bulleted, numbered, to-do)
    - Tables, images, video, audio, and file embeds
    - Mentions, emojis, dates, horizontal rules
    - Markdown support (import/export, autoformatting)
    - Drag and Drop (DnD) for media
    - Comments, suggestions, and discussion features
    - AI-specific UI elements (`AIMenu`, `AILoadingBar`)
    - See `components/editor/plugins/editor-plugins.tsx` for a full list.
- **Settings & Configuration**:
    - Editor settings dialog for API keys (OpenAI, Uploadthing) and AI model selection (see `components/editor/settings.tsx`).
    - Centralized configuration for AI models and API keys (see `configs/common.ts`).

## Usage

1.  **Install the package:**
    ```bash
    npm install teditor
    # or
    yarn add teditor
    ```
3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add your API keys:
    OPENAI_API_KEY - [Get one here](https://platform.openai.com/account/api-keys)
    UPLOADTHING_TOKEN - [Get one here](https://uploadthing.com/dashboard)
    WEBSITE_URL="<YOUR_WEBSITE_URL>"

4.  **App Routes to AI content and uploads:**
    ```bash
    #structure
    ~project
      ├── src
      │   ├── app
      │   │   ├── api
      │   │   │   ├── ai
      │   │   │   │   ├── command
      │   │   │   │   │   └── route.ts
      │   │   │   │   └── copilot
      │   │   │   │       └── route.ts
      │   │   │   └── uploadthing
      │   │   │       └── route.ts
      ......
    ```
    -   `/api/ai/command` - AI command API route.
    -   `/api/ai/copilot` - AI copilot API route.
    -   `/api/uploadthing` - Uploadthing API route for file uploads.

5.  **Styling and Customization:**
    If you use tailwindcss >=v4.0 use this in init css file in project:

    ```css
    @config  "path_to_your_config_tailwindcss_file"
    /*or*/
    @source "./node_modules/teditor/**/*.{js,ts,jsx,tsx}"

    /* example: @config "../tailwind.config.js" #for vite react */
    /* or use link to index if use simple React base 
    <script  src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> 
    (this maybe difference, should check on tailwindcss official website) */
    ```
    ---
    Add needed packages to your `tailwind.config.js` file:
    ```ts
    {
    content: ["./node_modules/teditor/**/*.{js,ts,jsx,tsx}"],
    theme: {
    // ...
    },
    variants: {
    // ...
    },
    plugins: [],
    };

    ```

## `TEditor` Component Props

The main editor component, `TEditor` (defined in `components/editor/plate-editor.tsx`), can be customized using the following props:

| Prop              | Type                                                  | Default                                  | Description                                                                                                |
| ----------------- | ----------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `isToolbar`       | `boolean`                                             | `true`                                   | Enables or disables the fixed toolbar.                                                                     |
| `isFloating`      | `boolean`                                             | `true`                                   | Enables or disables the floating toolbar.                                                                  |
| `isSettingDialog` | `boolean`                                             | `true`                                   | Enables or disables the settings dialog (for API keys, AI model).                                          |
| `allowPlugins`    | `PLUGIN_KEY[]`                                        | `PLUGIN_DEFAULTS` (all enabled plugins)  | An array of plugin keys to specify which toolbar buttons/features are enabled. See `PLUGIN_KEY` type in `components/editor/use-create-editor.ts`. |
| `toolbarClasses`  | `{ className?: string; groupClass?: string }`         | `{}`                                     | Custom CSS classes for the fixed toolbar container and its groups.                                         |
| `floatingClasses` | `{ className?: string; groupClass?: string }`         | `{}`                                     | Custom CSS classes for the floating toolbar container and its groups (passed via `useCreateEditor`).       |
| `placeholder`     | `string`                                              | `undefined`                              | Placeholder text for the editor.                                                                           |
| `variant`         | `string`                                              | `undefined`                              | Specifies the visual variant of the editor (e.g., 'comment', 'aiChat'). See `components/ui/editor.tsx`.    |
| `readOnly`        | `boolean`                                             | `false`                                  | Sets the editor to read-only mode.                                                                         |
| `value`           | `MyValue` (Plate.js editor value)                     | `[]` (empty document)                    | The initial content of the editor.                                                                         |
| `onChange`        | `(newValue: MyValue) => void`                         | `undefined`                              | Callback function triggered when the editor content changes.                                               |
| `className`       | `string`                                              | `""`                                     | Custom CSS classes for the main editor wrapper.                                                            |
| `ref`             | `React.Ref<HTMLDivElement>`                           | `undefined`                              | A React ref to the underlying editor div element.                                                          |
| `components`      | `Record<string, any>`                                 | (Editor default components)              | Allows overriding default Plate.js components for rendering elements and leaves.                           |
| `override`        | `Record<string, any>`                                 | `{}`                                     | Allows overriding other editor settings.                                                                   |
| `placeholders`    | `boolean`                                             | `undefined`                              | Enables or disables media placeholders (configured in `useCreateEditor`).                                  |

Refer to `components/editor/plate-editor.tsx` for the `TEditorProps` type definition and `components/editor/use-create-editor.ts` for how these props influence the editor's setup. The `PLUGIN_KEY` type in `use-create-editor.ts` lists all available keys for the `allowPlugins` prop.

## Project Structure

The project is organized into the following main directories:

-   **`app/`**: Contains the Next.js App Router pages and API routes.
    -   `app/editor/page.tsx`: The main editor page.
    -   `app/api/ai/command/route.ts`: API route for AI commands.
    -   `app/api/ai/copilot/route.ts`: API route for AI copilot functionality.
    -   `app/api/uploadthing/route.ts`: API route for Uploadthing file uploads.
-   **`components/`**: Reusable React components.
    -   `components/editor/plate-editor.tsx`: The core `TEditor` component.
    -   `components/editor/plugins/`: Contains all Plate.js plugin configurations.
    -   `components/editor/use-create-editor.ts`: Hook for creating and configuring the Plate editor instance.
    -   `components/ui/`: UI components, many from shadcn/ui, customized for the editor.
-   **`configs/`**: Application-wide configurations.
    -   `configs/common.ts`: Common configurations, including AI models and API keys.
-   **`hooks/`**: Custom React hooks.
    -   `hooks/use-upload-file.ts`: Hook for managing file uploads with Uploadthing.
    -   `hooks/use-chat.ts`: Hook for AI chat interactions.
-   **`lib/`**: Utility functions and libraries.
    -   `lib/uploadthing.ts`: Uploadthing configuration.
    -   `lib/utils.ts`: General utility functions (likely includes `cn` for Tailwind class merging).
-   **`plugins/`**: (If present, might contain custom Plate.js plugins not fitting elsewhere)
-   **`public/`**: Static assets.


## Key Technologies

-   [Next.js](https://nextjs.org/) (React Framework)
-   [Plate.js](https://platejs.org/) (Rich Text Editor Framework for Slate.js)
-   [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS Framework)
-   [shadcn/ui](https://ui.shadcn.com/) (UI Components)
-   [Uploadthing](https://uploadthing.com/) (File Upload Service)
-   [Vercel AI SDK](https://sdk.vercel.ai/) (For AI interactions)
-   [Lucide React](https://lucide.dev/) (Icons)
-   TypeScript

## Future Enhancements (Potential)

-   Real-time collaboration features.
-   More advanced AI tools and integrations.
-   Version history for documents.
-   Expanded export/import options.
-   Mobile responsiveness improvements.

---

This README provides an overview of the pakage, its structure, and its key technologies. For detailed usage instructions, refer to the package's documentation.


----------

## 🤝 License

MIT – free to use, modify, and extend.