const defaultProject = require('./defaultProject');

/**
 * @returns {Promise<string>} A promise that resolves into the absolute path
 * to the projects' directory
 */
const getDefaultProjectDir = function () {
    const {getProjectsDir} = require('./../../platformUtils');
    return getProjectsDir();
};

const getExamplesDir = function () {
    const path = require('path');
    try {
        require('gulp');
        // Most likely, we are in a dev environment
        return path.join(nw.App.startPath, 'src/examples');
    } catch (e) {
        return path.join(nw.App.startPath, 'examples');
    }
};

module.exports = {
    defaultProject,
    getDefaultProjectDir,
    getExamplesDir
};
