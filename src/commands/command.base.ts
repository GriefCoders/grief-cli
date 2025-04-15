import { Command } from 'commander';

export abstract class BaseCommand {
	public abstract name: string;
	public abstract alias: string;
	public abstract description: string;

	public abstract action(): Promise<void>;
}
