// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "open-file-in-new-vscode-window" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('open-file-in-new-vscode-window.openFileInNewVscodeWindow', function (fileInfo) {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from Open File In New Vscode Window!');

		// 获取点击文件/文件夹的路径
		console.log(fileInfo._fsPath, fileInfo.path);

		// 使用新vscode窗口打开该文件/文件夹
		vscode.commands.executeCommand('workbench.action.newWindow').then(()=>{
			vscode.commands.executeCommand('vscode.openFolder', vscode.Uri.file(fileInfo.path));
		})
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}