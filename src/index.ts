#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program.name("grief").description("CLI description").version("1.0.0");

program
  .command("hello")
  .description("Say hello")
  .argument("<n>", "name to say hello to")
  .action((name) => {
    console.log(`Hello, ${name}!`);
  });

program.parse();
