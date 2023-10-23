# Viz-Init CLI

This is the real heart and sole of the entire project.

## Users  execute CLI command and seamleaslly onboard onto new projects.

#### 2 commands;
- doctor
  - This command will have the user select a project to run tooling verifications against.
  - The guilds will be given an alphabatically assigned priority in the display list.
  - After the guild list the team list is derived via the @Viz-Init/manifest libarry.
- project setup-or-sync
  - clone repo, install dependencies, verify startup
  - this command asks the user to select a project. All repos are included for setup by default, but the user may optionally toggle/unselect all options and cusotm select via toggle.
  - When used as a sync command; non-present repositories will be clonded, esisting repos will have their primary branches updated. Installation and startup commands are execture for all respositories.