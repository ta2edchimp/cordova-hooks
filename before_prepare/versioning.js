#!/usr/bin/env node

// AUTOINCREMENT "z" IN config.xml's VERSION "x.y.z"

var cu		= require('cordova/src/util'),
	pr		= cu.isCordova(process.cwd()),
	pXml	= cu.projectConfig(pr),
	cp		= require('cordova/src/ConfigParser'),
	pCfg	= new cp(pXml),
	re		= /\.([\d]+)$/,
	oVer	= pCfg.version(),
	mVer	= (parseInt(re.exec(oVer)[1], 10) || 0) + 1,
	nVer	= oVer.replace(re, '.' + mVer);

pCfg.setVersion(nVer);
pCfg.write();

console.log('\n\nNEW BUILD NO. IS: ' + nVer + '\n\n');
