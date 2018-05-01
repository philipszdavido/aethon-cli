const fs = require('fs-extra')
const { templateDir } = require('../../')

function init(projectName) {
    if (!fs.existsSync(projectName)) {
        fs.mkdirSync(projectName)
        fs.copySync(templateDir, process.cwd() + '\\' + projectName)
        console.log(`[${projectName}] created successfully !!`)
    } else {
        console.log(projectName + ' directory already exist')
    }
}

module.exports = init