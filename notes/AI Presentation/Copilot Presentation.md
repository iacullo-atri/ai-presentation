	# GitHub Copilot Presentation


## Inline Completions
- Helps manual code writing
- _Quick example_
- Unlimited usage
### Guide
- Eagerness
- Open completions panel
- Using comments to guide output
- Show auto next edit capabilities with rename
- Trigger next edit suggestion
- Dismiss quick suggestions panel:  <kbd>⇧</kbd><kbd>Esc</kbd>


## Copilot Chat

### Intro
- Interfaces
	- Chat sidebar <kbd>⌃</kbd><kbd>⌘</kbd><kbd>I</kbd>
	- Full screen editor
		- `Chat: New Chat Editor`
	- Inline chat <kbd>⌘</kbd><kbd>I</kbd>
	- Quick chat
		- `Chat: Open Quick Chat`
		- Top bar navigation
		- Ridiculous keybinding: <kbd>⇧</kbd><kbd>⌥</kbd><kbd>⌘</kbd><kbd>L</kbd>
- Models
	- Effort
	- Thinking
- *Example: Add a search-bar to the todo list [[Search Bar]]*
- Show how to review files
- Adding file references
	- Show file references
	- Things considered
		- Closest proximity to cursor
		- Explicitly referenced files
		- Recently modified files: Files you’ve edited recently
		- Direct dependencies: Files imported by your current file
		- Workspace context (package.json)
		- Open tabs
	- Highlighting
		- *Example: Add a remaining task count below the title using highlighting*
	- Element selection
		- *Example: Remove footer*

### Token Usage and Context Window
- Explain tokens
	- One token is roughly equal to 4 characters
	- Spaces, punctuation, suffixes and prefixes (-ing)
	- Tokenization algorithm is model-specific
- Explain allowance (subject to change)
- [Model Pricing](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing)
- Show Figma context example
	- Input token usage grows exponentially
	- Context window usage grows linearly
- Explain how to view current context window
	- Show /compact button and command

### Customization
These are files that provide custom instructions to Copilot

* Touch on folder structure mess
- Instruction Files
	- [Documentation](https://code.visualstudio.com/docs/agent-customization/custom-instructions)
	- AGENTS.md
	- Scoped instructions
		- Documentation
		- Path: `.github/instructions`
		- Properties: `description`, `applyTo`
- Skills
	- Instructions that are used as-needed
	- [Open specification](https://agentskills.io)
	- [Documentation](https://code.visualstudio.com/docs/agent-customization/agent-skills)
	- Path: `.agents/skills/<skill-name>/SKILL.md`
	- *Example: Add a delete button before and after adding a frontend skill**
- Tools
	- Explain
	- Show tools list
- Custom prompts / slash commands
	- Explain
	- Use builtin prompt
	- Create prompt using command palette
	- Path: `.github/prompts/<prompt-name>.prompt.md`
	- [Documentation](https://code.visualstudio.com/docs/agent-customization/prompt-files
- Agents
	- Touch on custom agents
- Revisit Figma prompt example
### Extras 
- Permissions
	- *Example: delete some files*
	- *Example: add prettier to project*
- Planning:
	- *Example: tagging system*
- Show Agent program for managing resources