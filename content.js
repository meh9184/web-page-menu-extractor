

window.onload = function() {

    // let webPage = new WebPage(document.body);
    //
    // webPage.run();
    // console.log(webPage.paintCandidateNodes());

    // webPage.selectionRootNode();

    // webPage.paintRootCandidateNodes();

    // let a = new Node(document.body);


    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

        console.log(request.code);

        switch(request.code){
            case 0:

                webPage.paintCandidateNodes();

                break;
            case 1:
                // webPage.paintRootCandidateNodes();

                break;

            case 2:


                break;

            default:

                console.log("Wrong Command");
                break;
        }
    });
};
