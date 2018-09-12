exports.config = {

	seleniumAddress: 'http://localhost:4444/wd/hub',

	capabilities: {
		platformName: 'Android',
		platformVersion: '8.0',
		deviceName: 'Prueba',
		devicePackage: 'io.selendroid.testapp',
		appActivity: '.HomeScreenActivity',
		dontStopAppOnReset: true,
		disableAndroidWatchers: true,
		autoGrantPermissions: true,
		fastReset: true,
	},

	directConnect: true,
	framework: 'custom',
	frameworkPath: require.resolve('serenity-js'),

	specs: ['features/**/*.feature'],

	logLevel: 'silent',
    coloredLogs: true,
    framework: 'cucumber',
	cucumberOpts: {
		require: ['features/**/*.ts'],
		format: 'pretty',
		compiler: 'ts:ts-node/register',
		tags: []
	},

}