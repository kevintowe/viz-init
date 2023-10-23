/**
 * The is the primary interface of `viz-init`.
 * A manifest is created via the UI and stored as a json file in the `manifest` library in this repository.
 * I wonder if we can ship the cli library and the manifest library separately, such that the cli library always consumes
 * the latest version of the manifest library, allowing for independent deployments of each.
 */
export class Manifest {
  name!: string;
  projects?: Project[];
  tooling?: ToolingDoctor[];
}

export class Project {
    repositoryUrl!: string;
    name!: string;
    dependencyInstallationCommand?: string;
    startcommand?: string;
}

export class ToolingDoctor {
  name!: string;
  verificationCommand!: string;
  minVersion?: string;
  priority!: 'warn' | 'error' // warn will simply log to the user they should install while error will exit the process and demands installation.
}
