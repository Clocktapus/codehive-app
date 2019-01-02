import loader from 'monaco-loader';
import { remote } from 'electron';
import FileManager from './filemanager';
//import Dropdown from './userinterface';

loader().then((monaco) => {
    const editor = monaco.editor.create(document.getElementById('container'), {
        language: 'plaintext',
        theme: 'vs-dark',
        automaticLayout: true,
    });

    const fileManager = new FileManager({
        editor,
        monaco
    });

    // const dropDown = new Dropdown({
    //   editor,
    //   monaco
    // });

    remote.getCurrentWindow().show();

    console.log(monaco);
    console.log(editor);
    
    module.exports.monaco = monaco;
    module.exports.editor = editor;
    // module.exports = {
    //   monaco: monaco,
    //   editor: editor
    // }
    //module.exports = { editor: editor };
    console.log(module.exports);
});
