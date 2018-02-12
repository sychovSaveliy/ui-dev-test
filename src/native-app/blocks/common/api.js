var $api = (function () {

    return {
        getAPI: getAPI
    };

    function getAPI() {
        return $config.api.protocol + '://' + $config.api.host + ':' + $config.api.port; 
    }
})();