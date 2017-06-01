'use strict';
var path = require('path');

const SAVE_DIRECTORY = "saved_games";

module.exports = {
    SAVE_DIRECTORY: SAVE_DIRECTORY,
    getConversationSaveFile: function(app) {
        return path.resolve(SAVE_DIRECTORY + "/user-" + app.getUser().user_id + "-conversation-" + app.getConversationId());
    },
    getUserSaveFile: function(app) {
        return path.resolve(SAVE_DIRECTORY + "/user-" + app.getUser().user_id);
    }
}
