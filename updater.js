
// Modules
const { dialog } = require('electron')
const { autoUpdater } = require('electron-updater')

// Configure log debugging
autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"

// Disable auto downloading of updates
autoUpdater.autoDownload = false

// Single export to check for and apply any available updates
module.exports = () => {

    // Check for updates (GH Releases)
    autoUpdater.checkForUpdates()

    // Listen for update found
    autoUpdater.on('update-available', () => {

      // Prompt user to start download
      dialog.showMessageBox({
        type: 'info',
        title: 'Update available',
        message: 'A new version of Readit is available. Do you want to update now?',
        buttons: ['Update', 'No']
      }, buttonIndex => {

        // If button 0 (Update), start downloading the update
        if (buttonIndex === 0) autoUpdater.downloadUpdate()
      })

    })

    // Listen for update found
    autoUpdater.on('update-downloaded', () => {

      // Prompt the user to install the update
      dialog.showMessageBox({
        type: 'info',
        title: 'Update ready',
        message: 'Install and restart now?',
        buttons: ['Yes', 'Later']
      }, buttonIndex => {

        // Install and restart if button 0 (Yes)
        if (buttonIndex === 0) autoUpdater.quitAndInstall(false, true)
      })

    })

}
