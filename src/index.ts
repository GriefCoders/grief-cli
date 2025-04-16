#!/usr/bin/env node

import chalk from 'chalk';
import { App } from './app/app';

async function main() {
	const app = new App();
	await app.run();
}

main();
