#!/usr/bin/env node

import 'module-alias/register';
import { App } from './app/app';

async function main() {
	const app = new App();
	await app.run();
}

main();
