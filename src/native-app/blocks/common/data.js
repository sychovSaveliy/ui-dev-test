var $data = (function () {

    var self = this;

    self._request = _request;
    self._getAPI = _getAPI;

    return {
        favoriteList: favoriteList
    };

    function _getAPI() {
        return $config.api.protocol + '://' + $config.api.host + ':' + $config.api.port; 
    }

    function _request(settings, body){
        var xhr = new XMLHttpRequest();

        settings = settings || {};
        settings.method = settings.method || 'GET';
        settings.path = settings.path || '/';

        xhr.open(settings.method, self._getAPI() + settings.path, true);
        xhr.send(body);

        return xhr;
    }

    function favoriteList() {
        return new Promise(function(resolve, reject) {
            var xhr = self._request();

            xhr.onreadystatechange = function() {
                if (xhr.readyState != 4) return;
    
                if (xhr.status != 200) {
                    reject(xhr.statusText);
                } else {
                    resolve(xhr.responseText);
                }
            
            }
        });
    }
})();