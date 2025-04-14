#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
program.name("grief").description("CLI description").version("1.0.0");
program
    .command("hello")
    .description("Say hello")
    .argument("<n>", "name to say hello to")
    .action((name) => {
    console.log(`Привет, ${name}!`);
});
program.parse();
