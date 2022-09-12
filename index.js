#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const parser = require("lightshot-parser")
program
  .name('l-parser')
  .description('CLI for parsing images from the site https://prnt.sc')
  .version('1.0.0');

  program.requiredOption("-s <number of images>","How many images to parse")
  program.requiredOption("-f <path to folder>","Path to folder")
  program.option("-d <delay> ","the delay before each request is in milliseconds, it is better to put 1 or 2 seconds (default 1000 milliseconds)",1000)
  program.option("-t <url>","the characters that the url will start with","")

  program.parse(process.argv)

  let options = program.opts()

  parser(Math.floor(parseInt(options.s)),options.f,parseInt(options.d),options.t)


  
  