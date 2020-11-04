var data = ""
var filename = ""
// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

var carve = function () {
    if (val == 1) {
        data = ""
        data += "<!DOCTYPE html>";
        data += "<html>";
        data += "<head>";
        data += "<title>테스트</title>";
        data += "<script>var tt=tl;</script>";
        data += "<link rel=\"stylesheet\" href=\"main.css\" type=\"text/css\">";
        data += "<style>#cell {width: 600px;height: 600px;}</style>";
        data += "</head>";
        data += "<body>";
        data += "<header class=\"header\"><table id=\"title\" border=\"1\"><tr><td>";

        data += tl;

        data += "</td></tr></table></header>";
        data += "<nav class=\"nav\">nav</nav>";
        data += "<section class=\"section\"><div id=\"sec1\">";

        for (var j = 0; j < fn.length; j++) {
            data += "<img src=\""
            data += fn[j];
            data += "\" width = \"600\" height = \"600\">"

            if (j % 2 != 0) {
                data += "<br>"
            }
        }
    }

    else{

    }


    filename = "class1.html";
    type = "html";
}
