import * as vscode from 'vscode';
import { AbstractAction } from './AbstractAction';

export class QuerySelectedSQLToCSV extends AbstractAction {

    execution(editor: vscode.TextEditor) {
        if (!editor || !editor.document || editor.selection.isEmpty) {
            return;
        }

        const selection = editor.document.getText(editor.selection);
        if (selection) {
            this.sqlMenager.runAsQueryToCSV(selection);
        }
    }
}
