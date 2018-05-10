const { init, start, build } = require('../scripts');

function cli() {
    let argv = process.argv
    let args = Array.prototype.splice.apply(argv, [2, argv.length])

    //console.log(args)
    parseCmd(args)
}

function parseCmd(args = []) {
    if (args.indexOf('--help') != -1 || args.indexOf('-h') != -1) {
        displayHelp(args)
        return
    }
    switch (args[0]) {
        case 'build':
            build()
            break;
        case 'start':
            start()
            break;
        case 'new':
            const projectName = args[1]
            init(projectName)
            break;
        default:
            console.log('Command not recognized')
            break;
    }
}

function displayHelp(arg) {
    console.log(
        `
                aethon CLI
        ===========================
        commands:
                cmd | shortcut | description
            ***********************************
                new | n | creates new aethon project.
                start | s | starts dev server on port 1000.
                build | b | builds an aethon project.
        `
    )
}
module.exports = cli