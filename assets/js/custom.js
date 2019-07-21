$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '294073045',
        limit: 18,
        resolution: 'standard_resolution',
        accessToken: '294073045.1677ed0.5a297064ac2943e39db6d7657df7502e',
        clientId: 'b374966a7b2e486b9ad783345a40f896',
        template: '<a href="{{image}}" title="{{caption}}" target="_blank"><img width="100px" height="100px" style="margin:5px;display:inline;object-fit:cover;" src="{{image}}" alt="{{caption}}"/></a>',
    });
    userFeed.run();
});