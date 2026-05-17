export type SkillNode = {
  name: string;
  type: "folder" | "file";
  children?: SkillNode[];
  content?: string;
  language?: string;
};

export type Skill = {
  id: string;
  name: string;
  description: string;
  tree: SkillNode[];
};

export const skills: Skill[] = [
  {
    id: "skill-creator",
    name: "skill-creator",
    description: "Crée et structure des compétences réutilisables pour Claude.",
    tree: [
      { name: "SKILL.md", type: "file", language: "md", content: "# skill-creator\n\nA meta-skill that helps you build new skills." },
      {
        name: "agents",
        type: "folder",
        children: [
          { name: "analyzer.md", type: "file", language: "md", content: "# Analyzer agent" },
          { name: "comparator.md", type: "file", language: "md", content: "# Comparator agent" },
          { name: "grader.md", type: "file", language: "md", content: "# Grader agent" },
        ],
      },
      { name: "assets", type: "folder", children: [] },
      {
        name: "eval-viewer",
        type: "folder",
        children: [
          { name: "generate_review.py", type: "file", language: "python", content: "# python script" },
          { name: "viewer.html", type: "file", language: "html", content: "<!doctype html>" },
        ],
      },
      {
        name: "references",
        type: "folder",
        children: [
          {
            name: "schemas.md",
            type: "file",
            language: "md",
            content: `# JSON Schemas\n\nThis document defines the JSON schemas used by skill-creator.\n\n## evals.json\n\nDefines the evals for a skill. Located at \`evals/evals.json\` within the skill directory.\n\n\`\`\`json\n{\n  "skill_name": "example-skill",\n  "evals": [\n    {\n      "id": 1,\n      "prompt": "User's example prompt",\n      "expected_output": "Description of expected result",\n      "files": ["evals/files/sample1.pdf"],\n      "expectations": [\n        "The output includes X",\n        "The skill used script Y"\n      ]\n    }\n  ]\n}\n\`\`\``,
          },
        ],
      },
      { name: "scripts", type: "folder", children: [{ name: "init.py", type: "file", language: "python", content: "# init" }] },
    ],
  },
];