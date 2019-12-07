//Thanks, Themroc and Majid Laissi!
//Example 1: readTextFile("file:///C:/your/path/to/file.txt");
//Example 2: readTextFile("path/to/file.txt");
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
