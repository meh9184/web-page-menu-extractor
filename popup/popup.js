window.onload = function() {


    $("#print_candidates_button").on("click", sendToContent);
 
    function sendToContent () {

        let value = this.getAttribute('value');

        chrome.tabs.getSelected(null, function(tab) {  // 현재 선택된 탭 얻기
            chrome.tabs.sendMessage(tab.id, { code: parseInt(value) }, function(response) {
                // 응답 처리
            });
        });
    }
};


const POPUPCOMMAND = {

    a:1,
    b:2


};