const fs = require('fs-extra')
const { exec, spawn } = require('child_process')

const { templateDir } = require('../../')

function init(projectName) {
    if (!fs.existsSync(projectName)) {
        fs.mkdirSync(projectName)
        fs.copySync(templateDir, process.cwd() + '\\' + projectName)
        console.log(`[${projectName}] created successfully !!`)

        // next, install the project's dependencies
        npmInstall()
    } else {
        console.log(projectName + ' directory already exist')
    }
}

function npmInstall() {
    const child = spawn('npm', ['install'])
}
module.exports = init