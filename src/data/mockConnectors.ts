export type Permission = {
  name: string;
  approval: "auto" | "ask" | "never";
};

export type Connector = {
  id: string;
  name: string;
  category: "web" | "disconnected";
  connected: boolean;
  description?: string;
  readPermissions?: Permission[];
  writePermissions?: Permission[];
};

export const connectors: Connector[] = [
  {
    id: "gdrive",
    name: "Google Drive",
    category: "web",
    connected: true,
    description:
      "Connect Google Drive to Claude to search through your documents, read file contents, upload new files, and analyze your data. Claude can find specific documents even when you don't remember the exact name, read and analyze the content of Google Docs, Sheets, Slides, and PDFs, and upload files directly to your Drive.",
    readPermissions: [
      { name: "download_file_content", approval: "ask" },
      { name: "get_file_metadata", approval: "ask" },
      { name: "get_file_permissions", approval: "ask" },
      { name: "list_recent_files", approval: "ask" },
      { name: "read_file_content", approval: "ask" },
      { name: "search_files", approval: "ask" },
    ],
    writePermissions: [
      { name: "upload_file", approval: "ask" },
      { name: "share_file", approval: "ask" },
    ],
  },
  { id: "gmail", name: "Gmail", category: "disconnected", connected: false },
  { id: "gcal", name: "Google Calendar", category: "disconnected", connected: false },
  { id: "github", name: "Intégration GitHub", category: "disconnected", connected: false },
];