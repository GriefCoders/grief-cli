import { BaseCommand } from '@commands/command.base';
import { InfoCommand } from '@commands/info.cmd';

export const COMMANDS: BaseCommand[] = [new InfoCommand()];
