import { Command } from "commander";

export abstract class BaseCommand {
  public abstract name: string;
  public abstract description: string;

  public abstract action(): void;
}
