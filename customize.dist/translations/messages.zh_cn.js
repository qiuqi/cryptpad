define(function () {
    var out = {Chinese};

    out.main_title = "CryptPad: 零知识, 即时协作编辑";
    out.main_slogan = "团结就是力量 - 合作是关键"; // TODO remove?

    out.type = {};
    out.type.pad = '富文本';
    out.type.code = '代码';
    out.type.poll = '投票';
    out.type.slide = '演示';
    out.type.drive = '密盘';
    out.type.whiteboard = '白板';
    out.type.file = '文件';
    out.type.media = '媒体';
    out.type.todo = "Todo";
    out.type.contacts = '联系人';

    out.button_newpad = '新富文本编辑';
    out.button_newcode = '新代码编辑';
    out.button_newpoll = '新投票';
    out.button_newslide = '新演示';
    out.button_newwhiteboard = '新白板';

    // NOTE: We want to update the 'common_connectionLost' key.
    // Please do not add a new 'updated_common_connectionLostAndInfo' but change directly the value of 'common_connectionLost'
    out.updated_0_common_connectionLost = "<b>服务器失去连接</b><br>你将处于只读状态，直到连接恢复。";
    out.common_connectionLost = out.updated_0_common_connectionLost;

    out.websocketError = '无法连接websocket服务器...';
    out.typeError = "这个编辑器和所选的应用不兼容";
    out.onLogout = '您已登出, <a href="/" target="_blank">点击这里</a>登录<br>或者按下<em>Escape</em>键进入只读模式。';
    out.wrongApp = "无法在你的浏览器里面显示实时更新的内容，请重新载入页面。";

    out.loading = "载入中...";
    out.error = "错误";
    out.saved = "已存储";
    out.synced = "所有内容已存储";
    out.deleted = "已从密盘中删除文件";

    out.realtime_unrecoverableError = "实时协作引擎发现一个无法恢复的错误，请重新载入本页。";

    out.disconnected = '已断开';
    out.synchronizing = '同步中';
    out.reconnecting = '重连中...';
    out.typing = "键入中";
    out.lag = 'Lag';
    out.readonly = '只读';
    out.anonymous = "匿名";
    out.yourself = "你自己";
    out.anonymousUsers = "匿名编辑们";
    out.anonymousUser = "匿名编辑";
    out.users = "用户";
    out.and = "和";
    out.viewer = "阅读者";
    out.viewers = "阅读者们";
    out.editor = "编辑";
    out.editors = "编辑们";

    out.language = "语言";

    out.comingSoon = "即将推出...";

    out.newVersion = '<b>CryptPad已经更新!</b><br>' +
                     '请阅读最新更新内容:<br>'+
                     '<a href="https://github.com/xwiki-labs/cryptpad/releases/tag/{0}" target="_blank">Release notes for CryptPad {0}</a>';

    out.upgrade = "升级";
    out.upgradeTitle = "升级你的账户来提高存储空间";

    out.upgradeAccount = "升级账户";
    out.MB = "MB";
    out.GB = "GB";
    out.KB = "KB";

    out.supportCryptpad = "支持CryptPad";

    out.formattedMB = "{0} MB";
    out.formattedGB = "{0} GB";
    out.formattedKB = "{0} KB";

    out.greenLight = "进展顺利";
    out.orangeLight = "你缓慢的连接速度可能会影响你的使用体验";
    out.redLight = "你已经失去连接";

    out.pinLimitReached = "已经达到你的存储上限";
    out.updated_0_pinLimitReachedAlert = "已经达到您的存储上线，无法在密盘里创建新文件。<br>" +
        '删除部分文件，或者<a href="https://accounts.cryptpad.fr/#!on={0}" target="_blank">升级为付费用户</a>来提高存储上限。';
    out.pinLimitReachedAlert = out.updated_0_pinLimitReachedAlert;
    out.pinLimitReachedAlertNoAccounts = out.pinLimitReached;
    out.pinLimitNotPinned = "已经达到您的存储上线。<br>"+
                            "这个文件没有存储在你的密盘里。";
    out.pinLimitDrive = "已经达到您的存储上线。<br>" +
                        "您无法创建新的文件。";

    out.moreActions = "More actions";

    out.importButton = "导入";
    out.importButtonTitle = '从本地导入一个文件';

    out.exportButton = "导出";
    out.exportButtonTitle = '导出本文档为一个本地文件';
    out.exportPrompt = '你想给文件取什么名字?';

    out.changeNamePrompt = '取一个名字 (如果空白则默认为匿名者): ';
    out.user_rename = "改变显示名称";
    out.user_displayName = "显示名称";
    out.user_accountName = "账户名称";

    out.clickToEdit = "点击编辑";
    out.saveTitle = "保存标题(回车)";

    out.forgetButton = "删除";
    out.forgetButtonTitle = '将本文件移到垃圾箱';
    out.forgetPrompt = '你确定点击"OK"，移动本文件到垃圾箱中？';
    out.movedToTrash = '文件已经被移入垃圾箱。<br><a href="/drive/">访问我的磁盘</a>';

    out.shareButton = '分享';
    out.shareSuccess = '拷贝链接到剪贴板';

    out.userListButton = "用户列表";

    out.userAccountButton = "你的账户";

    out.newButton = '新文件';
    out.newButtonTitle = '建立一个新文件';
    out.uploadButton = '上传文件';
    out.uploadButtonTitle = '上传一个文件到当前目录下';

    out.saveTemplateButton = "存为一个模板";
    out.saveTemplatePrompt = "给模板选一个标题名称";
    out.templateSaved = "模板已存储!";
    out.selectTemplate = "选择一个模板或者按escape键放弃";
    out.useTemplate = "从模板开始编辑一个新文件?"; //Would you like to "You have available templates for this type of pad. Do you want to use one?";
    out.useTemplateOK = '选择一个模板(回车)';
    out.useTemplateCancel = '重新开始(Esc)';

    out.previewButtonTitle = "显示或者隐藏Markdown的预览模式";

    out.presentButtonTitle = "进入演示播放模式";
    out.presentSuccess = '按ESC退出演示播放';

    out.backgroundButtonTitle = '改变演示的背景颜色';
    out.colorButtonTitle = '改变演示的文本颜色';

    out.printText = "打印";
    out.printButton = "打印 (回车)";
    out.printButtonTitle = "打印你的演示卡页或者导出成为一个PDF文件";
    out.printOptions = "排版选项";
    out.printSlideNumber = "显示演示卡页码";
    out.printDate = "显示日期";
    out.printTitle = "显示文件标题";
    out.printCSS = "自定义样式(CSS):";
    out.printTransition = "启动动画翻页";

    out.filePickerButton = "内嵌一个文件";
    out.filePicker_close = "关闭";
    out.filePicker_description = "从密盘选择一个文件内嵌或者重新上传一个";
    out.filePicker_filter = "通过名字过滤";
    out.or = '或';

    out.slideOptionsText = "选项";
    out.slideOptionsTitle = "自定义你的演示卡";
    out.slideOptionsButton = "存储 (回车)";

    out.languageButton = "语言";
    out.languageButtonTitle = "选择要高亮的语法种类";
    out.themeButton = "主题";
    out.themeButtonTitle = "为代码和演示编辑器选择颜色主题";

    out.editShare = "编辑链接";
    out.editShareTitle = "拷贝编辑链接到剪贴板";
    out.editOpen = "在新的标签页打开一个编辑链接";
    out.editOpenTitle = "在新的标签页中以编辑模式打开这个文件";
    out.viewShare = "只读链接";
    out.viewShareTitle = "拷贝只读链接到剪贴板中";
    out.viewOpen = "在新标签页中以只读模式打开链接";
    out.viewOpenTitle = "在新标签页中以只读模式打开这个文件";
    out.fileShare = "拷贝链接";
    out.getEmbedCode = "获得嵌入代码";
    out.viewEmbedTitle = "在外部页面中嵌入这个文件";
    out.viewEmbedTag = "你可以在其他页面中通过iframe内嵌这个文件，通过改变CSS和HTML来自定义显示风格。";
    out.fileEmbedTitle = "在外部页面中内嵌文件";
    out.fileEmbedScript = "你只要在你的页面中嵌入这段script,就可以以Media Tag的方式来内嵌文件:";
    out.fileEmbedTag = "然后你就可以通过Media Tag在你的页面任何位置显示这个内嵌文件:";

    out.notifyJoined = "{0} 加入了合作任务";
    out.notifyRenamed = "{0}改名为{1}";
    out.notifyLeft = "{0}离开了当前的合作任务";

    out.okButton = '确定(回车)';

    out.cancel = "取消";
    out.cancelButton = '取消(esc)';

    out.historyText = "历史";
    out.historyButton = "显示文档历史";
    out.history_next = "跳到下一个版本";
    out.history_prev = "跳到上一个版本";
    out.history_goTo = "跳到指定的版本";
    out.history_close = "返回";
    out.history_closeTitle = "关闭历史";
    out.history_restore = "恢复";
    out.history_restoreTitle = "恢复文档到指定的版本";
    out.history_restorePrompt = "你确定要用当前显示的版本来替换这个文档的版本?";
    out.history_restoreDone = "文档已恢复";
    out.history_version = "版本:";

    // Ckeditor links
    out.openLinkInNewTab = "在新标签页中打开链接";

    // Polls

    out.poll_title = "Zero Knowledge Date Picker";
    out.poll_subtitle = "Zero Knowledge, <em>realtime</em> scheduling";

    out.poll_p_save = "Your settings are updated instantly, so you never need to save.";
    out.poll_p_encryption = "All your input is encrypted so only people who have the link can access it. Even the server cannot see what you change.";

    out.wizardLog = "Click the button in the top left to return to your poll";
    out.wizardTitle = "Use the wizard to create your poll";
    out.wizardConfirm = "Are you really ready to add these options to your poll?";

    out.poll_publish_button = "Publish";
    out.poll_admin_button = "Admin";
    out.poll_create_user = "Add a new user";
    out.poll_create_option = "Add a new option";
    out.poll_commit = "Commit";

    out.poll_closeWizardButton = "Close wizard";
    out.poll_closeWizardButtonTitle = "Close wizard";
    out.poll_wizardComputeButton = "Compute Options";
    out.poll_wizardClearButton = "Clear Table";
    out.poll_wizardDescription = "Automatically create a number of options by entering any number of dates and times segments";
    out.poll_wizardAddDateButton = "+ Dates";
    out.poll_wizardAddTimeButton = "+ Times";

    out.poll_optionPlaceholder = "Option";
    out.poll_userPlaceholder = "Your name";
    out.poll_removeOption = "Are you sure you'd like to remove this option?";
    out.poll_removeUser = "Are you sure you'd like to remove this user?";

    out.poll_titleHint = "Title";
    out.poll_descriptionHint = "Describe your poll, and use the 'publish' button when you're done. Anyone with the link can change the description, but this is discouraged.";

    out.poll_remove = "Remove";
    out.poll_edit = "Edit";
    out.poll_locked = "Locked";
    out.poll_unlocked = "Unlocked";

    out.poll_show_help_button = "Show help";
    out.poll_hide_help_button = "Hide help";

    // Canvas
    out.canvas_clear = "Clear";
    out.canvas_delete = "Delete selection";
    out.canvas_disable = "Disable draw";
    out.canvas_enable = "Enable draw";
    out.canvas_width = "Width";
    out.canvas_opacity = "Opacity";
    out.canvas_opacityLabel = "Opacity: {0}";
    out.canvas_widthLabel = "Width: {0}";
    out.canvas_saveToDrive = "Save this image as a file in your CryptDrive";
    out.canvas_currentBrush = "Current brush";
    out.canvas_chooseColor = "Choose a color";

    // Profile
    out.profileButton = "Profile"; // dropdown menu
    out.profile_urlPlaceholder = 'URL';
    out.profile_namePlaceholder = 'Name displayed in your profile';
    out.profile_avatar = "Avatar";
    out.profile_upload = " Upload a new avatar";
    out.profile_error = "Error while creating your profile: {0}";
    out.profile_register = "You have to sign up to create a profile!";
    out.profile_create = "Create a profile";
    out.profile_description = "Description";
    out.profile_fieldSaved = 'New value saved: {0}';

    out.profile_inviteButton = "Connect";
    out.profile_inviteButtonTitle ='Create a link that will invite this user to connect with you.';
    out.profile_inviteExplanation = "Clicking <strong>OK</strong> will create a link to a secure messaging session that <em>only {0} will be able to redeem.</em><br><br>The link will be copied to your clipboard and can be shared publicly.";
    out.profile_viewMyProfile = "View my profile";

    // contacts/userlist
    out.userlist_addAsFriendTitle = 'Add "{0}" as a contact';
    out.userlist_thisIsYou = 'This is you ("{0}")';
    out.userlist_pending = "Pending...";
    out.contacts_title = "Contacts";
    out.contacts_addError = 'Error while adding that contact to the list';
    out.contacts_added = 'Contact invite accepted.';
    out.contacts_rejected = 'Contact invite rejected';
    out.contacts_request = '<em>{0}</em> would like to add you as a contact. <b>Accept<b>?';
    out.contacts_send = 'Send';
    out.contacts_remove = 'Remove this contact';
    out.contacts_confirmRemove = 'Are you sure you want to remove <em>{0}</em> from your contacts?';
    out.contacts_typeHere = "Type a message here...";

    out.contacts_info1 = "These are your contacts. From here, you can:";
    out.contacts_info2 = "Click your contact's icon to chat with them";
    out.contacts_info3 = "Double-click their icon to view their profile";
    out.contacts_info4 = "Either participant can clear permanently a chat history";

    out.contacts_removeHistoryTitle = 'Clean the chat history';
    out.contacts_confirmRemoveHistory = 'Are you sure you want to permanently remove your chat history? Data cannot be restored';
    out.contacts_removeHistoryServerError = 'There was an error while removing your chat history. Try again later';
    out.contacts_fetchHistory = "Retrieve older history";

    // File manager

    out.fm_rootName = "Documents";
    out.fm_trashName = "Trash";
    out.fm_unsortedName = "Unsorted files";
    out.fm_filesDataName = "All files";
    out.fm_templateName = "Templates";
    out.fm_searchName = "Search";
    out.fm_recentPadsName = "Recent pads";
    out.fm_searchPlaceholder = "Search...";
    out.fm_newButton = "New";
    out.fm_newButtonTitle = "Create a new pad or folder, import a file in the current folder";
    out.fm_newFolder = "New folder";
    out.fm_newFile = "New pad";
    out.fm_folder = "Folder";
    out.fm_folderName = "Folder name";
    out.fm_numberOfFolders = "# of folders";
    out.fm_numberOfFiles = "# of files";
    out.fm_fileName = "File name";
    out.fm_title = "Title";
    out.fm_type = "Type";
    out.fm_lastAccess = "Last access";
    out.fm_creation = "Creation";
    out.fm_forbidden = "Forbidden action";
    out.fm_originalPath = "Original path";
    out.fm_openParent = "Show in folder";
    out.fm_noname = "Untitled Document";
    out.fm_emptyTrashDialog = "Are you sure you want to empty the trash?";
    out.fm_removeSeveralPermanentlyDialog = "Are you sure you want to remove these {0} elements from the trash permanently?";
    out.fm_removePermanentlyDialog = "Are you sure you want to remove that element permanently?";
    out.fm_removeSeveralDialog = "Are you sure you want to move these {0} elements to the trash?";
    out.fm_removeDialog = "Are you sure you want to move {0} to the trash?";
    out.fm_restoreDialog = "Are you sure you want to restore {0} to its previous location?";
    out.fm_unknownFolderError = "The selected or last visited directory no longer exist. Opening the parent folder...";
    out.fm_contextMenuError = "Unable to open the context menu for that element. If the problem persist, try to reload the page.";
    out.fm_selectError = "Unable to select the targetted element. If the problem persist, try to reload the page.";
    out.fm_categoryError = "Unable to open the selected category, displaying root.";
    out.fm_info_root = "Create as many nested folders here as you want to sort your files.";
    out.fm_info_unsorted = 'Contains all the files you\'ve visited that are not yet sorted in "Documents" or moved to the "Trash".'; // "My Documents" should match with the "out.fm_rootName" key, and "Trash" with "out.fm_trashName"
    out.fm_info_template = 'Contains all the pads stored as templates and that you can re-use when you create a new pad.';
    out.fm_info_recent = "List the recently modified or opened pads.";
    out.updated_0_fm_info_trash = 'Empty your trash to free space in your CryptDrive.';
    out.fm_info_trash = out.updated_0_fm_info_trash;
    out.fm_info_allFiles = 'Contains all the files from "Documents", "Unsorted" and "Trash". You can\'t move or remove files from here.'; // Same here
    out.fm_info_anonymous = 'You are not logged in so your pads will expire after 3 months (<a href="https://blog.cryptpad.fr/2017/05/17/You-gotta-log-in/" target="_blank">find out more</a>). ' +
                            '<a href="/register/">Sign up</a> or <a href="/login/">Log in</a> to keep them alive.';
    out.fm_alert_backupUrl = "Backup link for this drive.<br>" +
                             "It is <strong>highly recommended</strong> that you keep it secret.<br>" +
                             "You can use it to retrieve all your files in case your browser memory got erased.<br>" +
                             "Anybody with that link can edit or remove all the files in your file manager.<br>";
    out.fm_alert_anonymous = "Hello there, you are currently using CryptPad anonymously, that's ok but your pads may be deleted after a period of " +
                             "inactivity. We have disabled advanced features of the drive for anonymous users because we want to be clear that it is " +
                             'not a safe place to store things. You can <a href="https://blog.cryptpad.fr/2017/05/17/You-gotta-log-in/" target="_blank">read more</a> about ' +
                             'why we are doing this and why you really should <a href="/register/">Sign up</a> and <a href="/login/">Log in</a>.';
    out.fm_backup_title = 'Backup link';
    out.fm_nameFile = 'How would you like to name that file?';
    out.fm_error_cantPin = "Internal server error. Please reload the page and try again.";
    out.fm_viewListButton = "List view";
    out.fm_viewGridButton = "Grid view";
    // File - Context menu
    out.fc_newfolder = "New folder";
    out.fc_rename = "Rename";
    out.fc_open = "Open";
    out.fc_open_ro = "Open (read-only)";
    out.fc_delete = "Delete";
    out.fc_restore = "Restore";
    out.fc_remove = "Delete permanently";
    out.fc_empty = "Empty the trash";
    out.fc_prop = "Properties";
    out.fc_sizeInKilobytes = "Size in Kilobytes";
    // fileObject.js (logs)
    out.fo_moveUnsortedError = "You can't move a folder to the list of unsorted pads";
    out.fo_existingNameError = "Name already used in that directory. Please choose another one.";
    out.fo_moveFolderToChildError = "You can't move a folder into one of its descendants";
    out.fo_unableToRestore = "Unable to restore that file to its original location. You can try to move it to a new location.";
    out.fo_unavailableName = "A file or a folder with the same name already exist at the new location. Rename the element and try again.";

    out.fs_migration = "Your CryptDrive is being updated to a new version. As a result, the current page has to be reloaded.<br><strong>Please reload this page to continue to use it.</strong>";

    // login
    out.login_login = "Log in";
    out.login_makeAPad = 'Create a pad anonymously';
    out.login_nologin = "Browse local pads";
    out.login_register = "Sign up";
    out.logoutButton = "Log out";
    out.settingsButton = "Settings";

    out.login_username = "Username";
    out.login_password = "Password";
    out.login_confirm = "Confirm your password";
    out.login_remember = "Remember me";

    out.login_hashing = "Hashing your password, this might take some time.";

    out.login_hello = 'Hello {0},'; // {0} is the username
    out.login_helloNoName = 'Hello,';
    out.login_accessDrive = 'Access your drive';
    out.login_orNoLogin = 'or';

    out.login_noSuchUser = 'Invalid username or password. Try again, or sign up';
    out.login_invalUser = 'Username required';
    out.login_invalPass = 'Password required';
    out.login_unhandledError = 'An unexpected error occurred :(';

    out.register_importRecent = "Import pad history (Recommended)";
    out.register_acceptTerms = "I accept <a href='/terms.html' tabindex='-1'>the terms of service</a>";
    out.register_passwordsDontMatch = "Passwords do not match!";
    out.register_passwordTooShort = "Passwords must be at least {0} characters long.";

    out.register_mustAcceptTerms = "You must accept the terms of service.";
    out.register_mustRememberPass = "We cannot reset your password if you forget it. It's very important that you remember it! Please check the checkbox to confirm.";

    out.register_header = "Welcome to CryptPad";
    out.register_explanation = [
        "<h3>Lets go over a couple things first:</h3>",
        "<ul class='list-unstyled'>",
            "<li><i class='fa fa-info-circle'> </i> Your password is your secret key which encrypts all of your pads. If you lose it there is no way we can recover your data.</li>",
            "<li><i class='fa fa-info-circle'> </i> You can import pads which were recently viewed in your browser so you have them in your account.</li>",
            "<li><i class='fa fa-info-circle'> </i> If you are using a shared computer, you need to log out when you are done, closing the tab is not enough.</li>",
        "</ul>"
    ].join('');
    out.register_testimonial =" \"Tools like Etherpad and Google Docs [...] all share a weakness, which is that whomever owns the document server can see everything you're typing. Cryptpad is a free/open project that uses some of the ideas behind blockchain to implement a \"zero-knowledge\" version of a collaborative document editor, ensuring that only the people working on a document can see it.\"  ";
    out.register_testimonial_name = "Cory Doctorow";

    out.register_writtenPassword = "I have written down my username and password, proceed";
    out.register_cancel = "Go back";

    out.register_warning = "Zero Knowledge means that we can't recover your data if you lose your password.";

    out.register_alreadyRegistered = "This user already exists, do you want to log in?";

    // Settings
    out.settings_cat_account = "Account";
    out.settings_cat_drive = "CryptDrive";
    out.settings_cat_code = "Code";
    out.settings_title = "Settings";
    out.settings_save = "Save";

    out.settings_backupCategory = "Backup";
    out.settings_backupTitle = "Backup or restore all your data";
    out.settings_backup = "Backup";
    out.settings_restore = "Restore";

    out.settings_resetNewTitle = "Clean CryptDrive";
    out.settings_resetButton = "Remove";
    out.settings_reset = "Remove all the files and folders from your CryptDrive";
    out.settings_resetPrompt = "This action will remove all the pads from your drive.<br>"+
                               "Are you sure you want to continue?<br>" +
                               "Type “<em>I love CryptPad</em>” to confirm.";
    out.settings_resetDone = "Your drive is now empty!";
    out.settings_resetError = "Incorrect verification text. Your CryptDrive has not been changed.";

    out.settings_resetTipsAction = "Reset";
    out.settings_resetTips = "Tips";
    out.settings_resetTipsButton = "Reset the available tips in CryptDrive";
    out.settings_resetTipsDone = "All the tips are now visible again.";

    out.settings_importTitle = "Import this browser's recent pads in your CryptDrive";
    out.settings_import = "Import";
    out.settings_importConfirm = "Are you sure you want to import recent pads from this browser to your user account's CryptDrive?";
    out.settings_importDone = "Import completed";

    out.settings_userFeedbackTitle = "Feedback";
    out.settings_userFeedbackHint1 = "CryptPad provides some very basic feedback to the server, to let us know how to improve your experience. ";
    out.settings_userFeedbackHint2 = "Your pad's content will never be shared with the server.";
    out.settings_userFeedback = "Enable user feedback";

    out.settings_anonymous = "You are not logged in. Settings here are specific to this browser.";
    out.settings_publicSigningKey = "Public Signing Key";

    out.settings_usage = "Usage";
    out.settings_usageTitle = "See the total size of your pinned pads in MB";
    out.settings_pinningNotAvailable = "Pinned pads are only available to registered users.";
    out.settings_pinningError = "Something went wrong";
    out.settings_usageAmount = "Your pinned pads occupy {0}MB";

    out.settings_logoutEverywhereButton = "Log out";
    out.settings_logoutEverywhereTitle = "Log out everywhere";
    out.settings_logoutEverywhere = "Force log out of all other web sessions";
    out.settings_logoutEverywhereConfirm = "Are you sure? You will need to log in with all your devices.";

    out.settings_codeIndentation = 'Code editor indentation (spaces)';
    out.settings_codeUseTabs = "Indent using tabs (instead of spaces)";

    out.upload_title = "File upload";
    out.upload_serverError = "Server Error: unable to upload your file at this time.";
    out.upload_uploadPending = "You already have an upload in progress. Cancel it and upload your new file?";
    out.upload_success = "Your file ({0}) has been successfully uploaded and added to your drive.";
    out.upload_notEnoughSpace = "There is not enough space for this file in your CryptDrive.";
    out.upload_tooLarge = "This file exceeds the maximum upload size.";
    out.upload_choose = "Choose a file";
    out.upload_pending = "Pending";
    out.upload_cancelled = "Cancelled";
    out.upload_name = "File name";
    out.upload_size = "Size";
    out.upload_progress = "Progress";
    out.upload_mustLogin = "You must be logged in to upload files";
    out.download_button = "Decrypt & Download";
    out.download_mt_button = "Download";

    out.todo_title = "CryptTodo";
    out.todo_newTodoNamePlaceholder = "Describe your task...";
    out.todo_newTodoNameTitle = "Add this task to your todo list";
    out.todo_markAsCompleteTitle = "Mark this task as complete";
    out.todo_markAsIncompleteTitle = "Mark this task as incomplete";
    out.todo_removeTaskTitle = "Remove this task from your todo list";

    // pad
    out.pad_showToolbar = "Show toolbar";
    out.pad_hideToolbar = "Hide toolbar";

    // general warnings
    out.warn_notPinned = "This pad is not in anyone's CryptDrive. It will expire after 3 months. <a href='/about.html#pinning'>Learn more...</a>";

    // index.html


    //about.html
    out.main_p2 = 'This project uses the <a href="http://ckeditor.com/">CKEditor</a> Visual Editor, <a href="https://codemirror.net/">CodeMirror</a>, and the <a href="https://github.com/xwiki-contrib/chainpad">ChainPad</a> realtime engine.';
    out.main_howitworks_p1 = 'CryptPad uses a variant of the <a href="https://en.wikipedia.org/wiki/Operational_transformation">Operational transformation</a> algorithm which is able to find distributed consensus using a <a href="https://bitcoin.org/bitcoin.pdf">Nakamoto Blockchain</a>, a construct popularized by <a href="https://en.wikipedia.org/wiki/Bitcoin">Bitcoin</a>. This way the algorithm can avoid the need for a central server to resolve Operational Transform Edit Conflicts and without the need for resolving conflicts, the server can be kept unaware of the content which is being edited on the pad.';

    // contact.html
    out.main_about_p2 = 'If you have any questions or comments, feel free to reach out!<br/>You can <a href="https://twitter.com/cryptpad"><i class="fa fa-twitter"></i>tweet us</a>, open an issue <a href="https://github.com/xwiki-labs/cryptpad/issues/" title="our issue tracker">on <i class="fa fa-github"></i>GitHub</a>. Come say hi on <a href="https://riot.im/app/#/room/#cryptpad:matrix.org" title="Matrix">our <i class="fa fa-comment"></i>Matrix channel</a> or IRC (#cryptpad on irc.freenode.net), or <a href="mailto:research@xwiki.com"><i class="fa fa-envelope"></i>send us an email</a>.';
    out.main_about_p22 = 'Tweet us';
    out.main_about_p23 = 'open an issue on GitHub';
    out.main_about_p24 = 'say Hello (Matrix)';
    out.main_about_p25 = 'send us an email';
    out.main_about_p26 = 'If you have any questions or comments, feel free to reach out!';

    out.main_info = "<h2>Collaborate in Confidence</h2> Grow your ideas together with shared documents while <strong>Zero Knowledge</strong> technology secures your privacy; <strong>even from us</strong>.";
    out.main_catch_phrase = "The Zero Knowledge Cloud";

    out.main_howitworks = 'How It Works';
    out.main_zeroKnowledge = 'Zero Knowledge';
    out.main_zeroKnowledge_p = "You don't have to trust that we <em>won't</em> look at your pads, with CryptPad's revolutionary Zero Knowledge Technology we <em>can't</em>. Learn more about how we protect your <a href=\"/privacy.html\" title='Privacy'>Privacy and Security</a>.";
    out.main_writeItDown = 'Write it down';

    out.main_writeItDown_p = "The greatest projects come from the smallest ideas. Take down the moments of inspiration and unexpected ideas because you never know which one might be a breakthrough.";
    out.main_share = 'Share the link, share the pad';
    out.main_share_p = "Grow your ideas together: conduct efficient meetings, collaborate on TODO lists and make quick presentations with all your friends and all your devices.";
    out.main_organize = 'Get organized';
    out.main_organize_p = "With CryptPad Drive, you can keep your sights on what's important. Folders allow you to keep track of your projects and have a global vision of where things are going.";
    out.tryIt = 'Try it out!';
    out.main_richText = 'Rich Text editor';
    out.main_richText_p = 'Edit rich text pads collaboratively with our realtime Zero Knowledge <a href="http://ckeditor.com" target="_blank">CkEditor</a> application.';
    out.main_code = 'Code editor';
    out.main_code_p = 'Edit code from your software collaboratively with our realtime Zero Knowledge <a href="https://www.codemirror.net" target="_blank">CodeMirror</a> application.';
    out.main_slide = 'Slide editor';
    out.main_slide_p = 'Create your presentations using the Markdown syntax, and display them in your browser.';
    out.main_poll = 'Polls';
    out.main_poll_p = 'Plan your meeting or your event, or vote for the best solution regarding your problem.';
    out.main_drive = 'CryptDrive';

    out.main_richTextPad = 'Rich Text Pad';
    out.main_codePad = 'Markdown/Code Pad';
    out.main_slidePad = 'Markdown Presentation';
    out.main_pollPad = 'Poll or Schedule';
    out.main_whiteboardPad = 'Whiteboard';
    out.main_localPads = 'Local Pads';
    out.main_yourCryptDrive = 'Your CryptDrive';
    out.main_footerText = "With CryptPad, you can make quick collaborative documents for taking notes and writing down ideas together.";

    out.footer_applications = "Applications";
    out.footer_contact = "Contact";
    out.footer_aboutUs = "About us";

    out.about = "About";
    out.privacy = "Privacy";
    out.contact = "Contact";
    out.terms = "ToS";
    out.blog = "Blog";

    out.topbar_whatIsCryptpad = "What is CryptPad";

    // what-is-cryptpad.html

    out.whatis_title = 'What is CryptPad';
    out.whatis_collaboration = 'Fast, Easy Collaboration';
    out.whatis_collaboration_p1 = 'With CryptPad, you can make quick collaborative documents for taking notes and writing down ideas together. When you sign up and log in, you get file upload capability and a CryptDrive where you can organize all of your pads. As a registered user you get 50MB of space for free.';
    out.whatis_collaboration_p2 = 'You can share access to a CryptPad document simply by sharing the link. You can also share a link which provides <em>read only</em> access to a pad, allowing you to publicise your collaborative work while still being able to edit it.';
    out.whatis_collaboration_p3 = 'You can make simple rich text documents with <a href="http://ckeditor.com/">CKEditor</a> as well as Markdown documents which are rendered in realtime while you type. You can also use the poll app for scheduling events with multiple participants.';
    out.whatis_zeroknowledge = 'Zero Knowledge';
    out.whatis_zeroknowledge_p1 = "We don't want to know what you're typing and with modern cryptography, you can be sure that we can't know. CryptPad uses <strong>100% client side encryption</strong> to protect the content that you type from us, the people who host the server.";
    out.whatis_zeroknowledge_p2 = 'When you sign up and log in, your username and password are computed into a secret key using <a href="https://en.wikipedia.org/wiki/Scrypt">scrypt key derivation function</a>. Neither this key, nor the username and password are ever sent to the server. Instead they are used on the client side to decrypt the content of your CryptDrive, which contains the keys to all pads that you are able to access.';
    out.whatis_zeroknowledge_p3 = 'When you share the link to a document, you\'re sharing the cryptographic key for accessing that document but since the key is in the <a href="https://en.wikipedia.org/wiki/Fragment_identifier">fragment identifier</a>, it is never directly sent to the server. Check out our <a href="https://blog.cryptpad.fr/2017/07/07/cryptpad-analytics-what-we-cant-know-what-we-must-know-what-we-want-to-know/">privacy blog post</a> to learn more about what types of metadata we do and do not have access to.';
    out.whatis_drive = 'Organization with CryptDrive';
    out.whatis_drive_p1 = 'Whenever you access a pad in CryptPad, the pad is automatically added to your CryptDrive in the main folder. Later on, you can organize these pads into folders or you can put them in the trash bin. CryptDrive allows you to search through your pads and to organize them whenever you want, however you want.';
    out.whatis_drive_p2 = 'With intuitive drag-and-drop, you can move pads around in your drive and the link to these pads will stay the same so your collaborators will never lose access.';
    out.whatis_drive_p3 = 'You can also upload files in your CryptDrive and share them with colleagues. Uploaded files can be organized just like collaborative pads.';
    out.whatis_business = 'CryptPad for Business';
    out.whatis_business_p1 = 'CryptPad\'s Zero Knowledge encryption is excellent for multiplying the effectiveness of existing security protocols by mirroring organizational access controls in cryptography. Because sensitive assets can only be decrypted using employee access credentials, CryptPad removes the hacker jackpot which exists in traditional IT servers. Read the <a href="https://blog.cryptpad.fr/images/CryptPad-Whitepaper-v1.0.pdf">CryptPad Whitepaper</a> to learn more about how it can help your business.';
    out.whatis_business_p2 = 'CryptPad is deployable on premises and the <a href="https://cryptpad.fr/about.html">CryptPad developers</a> at XWiki SAS are able to offer commercial support, customization and development. Reach out to <a href="mailto:sales@cryptpad.fr">sales@cryptpad.fr</a> for more information.';

    // privacy.html

    out.policy_title = 'CryptPad Privacy Policy';
    out.policy_whatweknow = 'What we know about you';
    out.policy_whatweknow_p1 = 'As an application that is hosted on the web, CryptPad has access to metadata exposed by the HTTP protocol. This includes your IP address, and various other HTTP headers that can be used to identify your particular browser. You can see what information your browser is sharing by visiting <a target="_blank" rel="noopener noreferrer" href="https://www.whatismybrowser.com/detect/what-http-headers-is-my-browser-sending" title="what http headers is my browser sending">WhatIsMyBrowser.com</a>.';
    out.policy_whatweknow_p2 = 'We use <a href="https://www.elastic.co/products/kibana" target="_blank" rel="noopener noreferrer" title="open source analytics platform">Kibana</a>, an open source analytics platform, to learn more about our users. Kibana tells us about how you found CryptPad, via direct entry, through a search engine, or via a referral from another web service like Reddit or Twitter.';
    out.policy_howweuse = 'How we use what we learn';
    out.policy_howweuse_p1 = 'We use this information to make better decisions about promoting CryptPad, by evaluating which of our past efforts were successful. Information about your location lets us know whether we should consider providing better support for languages other than English.';
    out.policy_howweuse_p2 = "Information about your browser (whether it's a desktop or mobile operating system) helps us make decisions when prioritizing feature improvements. Our development team is small, and we try to make choices that will improve as many users' experience as possible.";
    out.policy_whatwetell = 'What we tell others about you';
    out.policy_whatwetell_p1 = 'We do not furnish to third parties the information that we gather or that you provide to us unless we are legally required to do so.';
    out.policy_links = 'Links to other sites';
    out.policy_links_p1 = 'This site contains links to other sites, including those produced by other organizations. We are not responsible for the privacy practices or the contents of any outside sites. As a general rule, links to outside sites are launched in a new browser window, to make clear that you are leaving CryptPad.fr.';
    out.policy_ads = 'Advertisement';
    out.policy_ads_p1 = 'We do not display any online advertising, though we may link to the bodies which are financing our research.';
    out.policy_choices = 'Choices you have';
    out.policy_choices_open = 'Our code is open source, so you always have the option of hosting your own instance of CryptPad.';
    out.policy_choices_vpn = 'If you want to use our hosted instance, but don\'t want to expose your IP address, you can protect your IP using the <a href="https://www.torproject.org/projects/torbrowser.html.en" title="downloads from the Tor project" target="_blank" rel="noopener noreferrer">Tor browser bundle</a>, or a <a href="https://riseup.net/en/vpn" title="VPNs provided by Riseup" target="_blank" rel="noopener noreferrer">VPN</a>.';
    out.policy_choices_ads = 'If you just want to block our analytics platform, you can use adblocking tools like <a href="https://www.eff.org/privacybadger" title="download privacy badger" target="_blank" rel="noopener noreferrer">Privacy Badger</a>.';

    // terms.html

    out.tos_title = "CryptPad Terms of Service";
    out.tos_legal = "Please don't be malicious, abusive, or do anything illegal.";
    out.tos_availability = "We hope you find this service useful, but availability or performance cannot be guaranteed. Please export your data regularly.";
    out.tos_e2ee = "CryptPad contents can be read or modified by anyone who can guess or otherwise obtain the pad's fragment identifier. We recommend that you use end-to-end-encrypted (e2ee) messaging technology to share links, and assume no liability in the event that such a link is leaked.";
    out.tos_logs = "Metadata provided by your browser to the server may be logged for the purpose of maintaining the service.";
    out.tos_3rdparties = "We do not provide individualized data to third parties unless required to by law.";

    // BottomBar.html

    out.bottom_france = '<a href="http://www.xwiki.com/" target="_blank" rel="noopener noreferrer">Made with <img class="bottom-bar-heart" src="/customize/heart.png" alt="love" /> in <img class="bottom-bar-fr" src="/customize/fr.png" alt="France" /></a>';
    out.bottom_support = '<a href="http://labs.xwiki.com/" title="XWiki Labs" target="_blank" rel="noopener noreferrer">An <img src="/customize/logo-xwiki2.png" alt="XWiki SAS" class="bottom-bar-xwiki"/> Labs Project </a> with the support of <a href="http://ng.open-paas.org/" title="OpenPaaS::ng" target="_blank" rel="noopener noreferrer"> <img src="/customize/openpaasng.png" alt="OpenPaaS-ng" class="bottom-bar-openpaas" /></a>';

    // Header.html

    out.header_france = '<a href="http://www.xwiki.com/" target="_blank" rel="noopener noreferrer">With <img class="bottom-bar-heart" src="/customize/heart.png" alt="love" /> from <img class="bottom-bar-fr" src="/customize/fr.png" title="France" alt="France"/> by <img src="/customize/logo-xwiki.png" alt="XWiki SAS" class="bottom-bar-xwiki"/></a>';

    out.header_support = '<a href="http://ng.open-paas.org/" title="OpenPaaS::ng" target="_blank" rel="noopener noreferrer"> <img src="/customize/openpaasng.png" alt="OpenPaaS-ng" class="bottom-bar-openpaas" /></a>';
    out.updated_0_header_logoTitle = 'Go to your CryptDrive';
    out.header_logoTitle = out.updated_0_header_logoTitle;
    out.header_homeTitle = 'Go to CryptPad homepage';

    // Initial states

    out.initialState = [
        '<p>',
        'This is&nbsp;<strong>CryptPad</strong>, the Zero Knowledge realtime collaborative editor. Everything is saved as you type.',
        '<br>',
        'Share the link to this pad to edit with friends or use the <span class="fa fa-share-alt" style="border: 1px solid black;color:#000;">&nbsp;Share&nbsp;</span> button to share a <em>read-only link</em>&nbsp;which allows viewing but not editing.',
        '</p>',

        '<p><em>',
        'Go ahead, just start typing...',
        '</em></p>',
        '<p>&nbsp;<br></p>'
    ].join('');

    out.codeInitialState = [
        '# CryptPad\'s Zero Knowledge collaborative code editor\n',
        '\n',
        '* What you type here is encrypted so only people who have the link can access it.\n',
        '* You can choose the programming language to highlight and the UI color scheme in the upper right.'
    ].join('');

    out.slideInitialState = [
        '# CryptSlide\n',
        '* This is a zero knowledge realtime collaborative editor.\n',
        '* What you type here is encrypted so only people who have the link can access it.\n',
        '* Even the server cannot see what you type.\n',
        '* What you see here, what you hear here, when you leave here, let it stay here.\n',
        '\n',
        '---',
        '\n',
        '# How to use\n',
        '1. Write your slides content using markdown syntax\n',
        '  - Learn more about markdown syntax [here](http://www.markdowntutorial.com/)\n',
        '2. Separate your slides with ---\n',
        '3. Click on the "Play" button to see the result',
        '  - Your slides are updated in realtime'
    ].join('');

    // Readme

    out.driveReadmeTitle = "What is CryptPad?";
    out.readme_welcome = "Welcome to CryptPad !";
    out.readme_p1 = "Welcome to CryptPad, this is where you can take note of things alone and with friends.";
    out.readme_p2 = "This pad will give you a quick walk through of how you can use CryptPad to take notes, keep them organized and work together on them.";
    out.readme_cat1 = "Get to know your CryptDrive";
    out.readme_cat1_l1 = "Make a pad: In your CryptDrive, click {0} then {1} and you can make a pad."; // 0: New, 1: Rich Text
    out.readme_cat1_l2 = "Open Pads from your CryptDrive: double-click on a pad icon to open it.";
    out.readme_cat1_l3 = "Organize your pads: When you are logged in, every pad you access will be shown as in the {0} section of your drive."; // 0: Unsorted files
    out.readme_cat1_l3_l1 = "You can click and drag files into folders in the {0} section of your drive and make new folders."; // 0: Documents
    out.readme_cat1_l3_l2 = "Remember to try right clicking on icons because there are often additional menus.";
    out.readme_cat1_l4 = "Put old pads in the trash: You can click and drag your pads into the {0} the same way you drag them into folders."; // 0: Trash
    out.readme_cat2 = "Make pads like a pro";
    out.edit = "edit";
    out.view = "view";
    out.readme_cat2_l1 = "The {0} button in your pad allows you to give access to collaborators to either {1} or to {2} the pad."; // 0: Share, 1: edit, 2: view
    out.readme_cat2_l2 = "Change the title of the pad by clicking on the pencil";
    out.readme_cat3 = "Discover CryptPad apps";
    out.readme_cat3_l1 = "With CryptPad code editor, you can collaborate on code like Javascript and markdown like HTML and Markdown";
    out.readme_cat3_l2 = "With CryptPad slide editor, you can make quick presentations using Markdown";
    out.readme_cat3_l3 = "With CryptPoll you can take quick votes, especially for scheduling meetings which fit with everybody's calendar";

    // Tips
    out.tips = {};
    out.tips.shortcuts = "`ctrl+b`, `ctrl+i` and `ctrl+u` are quick shortcuts for bold, italic and underline.";
    out.tips.indent = "In numbered and bulleted lists, you can use tab or shift+tab to quickly increase or decrease indentation.";
    out.tips.store = "Every time you visit a pad, if you're logged in it will be saved to your CryptDrive.";
    out.tips.marker = "You can highlight text in a pad using the \"marker\" item in the styles dropdown menu.";
    out.tips.driveUpload = "Registered users can upload encrypted files by dragging and dropping them into their CryptDrive.";
    out.tips.filenames = "You can rename files in your CryptDrive, this name is just for you.";
    out.tips.drive = "Logged in users can organize their files in their CryptDrive, accessible from the CryptPad icon at the top left of all pads.";
    out.tips.profile = "Registered users can create a profile from the user menu in the top right.";
    out.tips.avatars = "You can upload an avatar in your profile. People will see it when you collaborate in a pad.";

    out.feedback_about = "If you're reading this, you were probably curious why CryptPad is requesting web pages when you perform certain actions";
    out.feedback_privacy = "We care about your privacy, and at the same time we want CryptPad to be very easy to use.  We use this file to figure out which UI features matter to our users, by requesting it along with a parameter specifying which action was taken.";
    out.feedback_optout = "If you would like to opt out, visit <a href='/settings/'>your user settings page</a>, where you'll find a checkbox to enable or disable user feedback";

    return out;
});
