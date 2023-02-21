// const assert = require('assert');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require('vscode');
// const myExtension = require('../extension');

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Open folder in new window', () => {
		const path = '/c:/Users/Duan/Desktop/腾讯动漫/看7天.jpg';
		vscode.commands.executeCommand('vscode.openFolder', vscode.Uri.file(path), {forceNewWindow: true}).then(()=>{}, (err)=>{
			console.log(err);
		});
	});
});
