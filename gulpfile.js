'use strict';

let Gulp = require('gulp'),
	Nodemon = require('nodemon'),
	TSC = require('gulp-typescript');


var CONFIGURATION = {
	sourceDirectory: __dirname+'/src',
	sourceDirectoryAssets: __dirname+'/src/assets',
	deploymentDirectory: __dirname+'/app',
	deploymentDirectoryAssets: __dirname+'/app/assets',
	serverReloadWatchFileTypes: ['js', 'html'],
	tsLintConfig: {
		configuration: './tslint.json'
	}
};
var STATIC_FILES = [ 'js', 'html', 'png', 'jpg', 'svg', 'css' ].map(
	(format) => CONFIGURATION.sourceDirectory+'/**/*.'+format
);


var tsProject = TSC.createProject('tsconfig.json');
Gulp.task('typescript', function() {
	var compilerOptions = JSON.parse(JSON.stringify(tsProject.config.compilerOptions));
	delete compilerOptions.outDir;

	var tsResult = Gulp.src(tsProject.config.include)
		.pipe(TSC(compilerOptions));

    return tsResult.js.pipe(Gulp.dest(tsProject.config.compilerOptions.outDir));
});

Gulp.task('tslint', function() {
	Gulp.src([CONFIGURATION.sourceDirectory + '/**/*.ts'])
		.pipe(tslint(CONFIGURATION.tsLintConfig))
		.pipe(tslint.report());
});

Gulp.task('watch', function() {
	Gulp.watch(CONFIGURATION.sourceDirectory+'/**/*.ts', ['typescript']);
	Gulp.watch(STATIC_FILES, ['deploy static']);
});

Gulp.task('deploy', ['typescript', 'deploy static'], function() {});

Gulp.task('serve', ['deploy','watch'], function() {
	Nodemon({
		script: CONFIGURATION.deploymentDirectory+'/index.js',
		ext: CONFIGURATION.serverReloadWatchFileTypes.join(' ')
	})
});

Gulp.task('deploy static', [], function() {
	return Gulp.src(STATIC_FILES, {
			base: CONFIGURATION.sourceDirectory
		})
		.pipe(Gulp.dest(CONFIGURATION.deploymentDirectory));
});

Gulp.task('default', ['serve']);