/*eslint strict: ['error', 'global'], no-implicit-globals: 'off'*/ 'use strict'; /* globals module, */ // license: MPL-2.0
module.exports = function({ options, /*packageJson,*/ manifestJson, files, }) {

	manifestJson.permissions.push(
		'menus',
		'notifications',
		'tabs',
		// 'webRequest', 'webRequestBlocking',
	);

	!options.viewRoot && (options.viewRoot = options.chrome ? 'UnloadTabs.html' : 'UnloadTabs');
	delete manifestJson.browser_action;

	manifestJson.commands = {
		prevLoadedTab: {
			suggested_key: { default: 'Alt+PageUp',	},
			description: 'Switch to the previous loaded Tab',
		},
		nextLoadedTab: {
			suggested_key: { default: 'Alt+PageDown',	},
			description: 'Switch to the next loaded Tab',
		},
	};

	files['.'].push(
		'dim-unloaded-tabs.css',
		'many.png',
	);

	files.node_modules = [
		'web-ext-utils/browser/index.js',
		'web-ext-utils/browser/storage.js',
		'web-ext-utils/browser/version.js',
		'web-ext-utils/lib/multiport/index.js',
		'web-ext-utils/lib/pbq/require.js',
		'web-ext-utils/loader/_background.html',
		'web-ext-utils/loader/_background.js',
		'web-ext-utils/loader/_view.html',
		'web-ext-utils/loader/_view.js',
		'web-ext-utils/loader/views.js',
		'web-ext-utils/options/editor/about.css',
		'web-ext-utils/options/editor/about.js',
		'web-ext-utils/options/editor/index.css',
		'web-ext-utils/options/editor/index.js',
		'web-ext-utils/options/editor/inline.js',
		'web-ext-utils/options/editor/inline.css',
		'web-ext-utils/options/index.js',
		'web-ext-utils/update/index.js',
		'web-ext-utils/utils/icons/',
		'web-ext-utils/utils/event.js',
		'web-ext-utils/utils/files.js',
		'web-ext-utils/utils/index.js',
		'web-ext-utils/utils/semver.js',
	];
};