/* global Package */
Package.describe({
    name: 'socialize:linkable-model',
    summary: 'A package allowing linking of records in one collection with records from many other collections',
    version: '2.0.0',
    git: 'https://github.com/copleykj/socialize-linkable-model.git',
});

Package.onUse(function _(api) {
    api.versionsFrom(['1.10.2', '2.3', '3.0-rc.0']);

    api.use([
        'socialize:base-model@2.0.0',
        'aldeed:simple-schema@1.13.1'
    ]);
    api.imply(['socialize:base-model']);

    api.mainModule('common/common.js');
});
