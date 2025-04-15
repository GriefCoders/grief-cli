import { BaseCommand } from "./command.base";

export class InfoCommand extends BaseCommand {
  public name = "info";
  public description = "Get information about the current project";

  public action() {
    console.log("Info command");
  }
}
