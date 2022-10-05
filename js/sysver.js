function devideType() {
    var u = navigator.userAgent;
    var ua = navigator.userAgent.toLocaleLowerCase();
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android終端 
    var isiOS = !!u.match(/\(i[^;] ;( U;)? CPU. Mac OS X/); //ios終端 

    /* 平台系統判斷 -- navigator.platform
     * Return Value:  HP-UX 
     * Linux i686
     * Linux armv7l
     * Mac68K
     * MacPPC
     * MacIntel
     * SunOS
     * Win16
     * Win32
     * WinCE
     * Etc..
     */
    var devSys = navigator;
    var isWin = false;        
    switch (devSys.platform) {
        case "Win32":
        case "Win16":
            return [true,devSys.platform]; break;
        default:
            return [false,devSys.platform]; break;
    }
}

$(function(){
    /* 平台系統判斷 */    
    var isWinarry = devideType();    
    var isWin = isWinarry[0];    
    var WinName = isWinarry[1];
    var a = document.getElementById("download_btn");
    if (isWin == false) {
        $('a.test-btn').attr("href", "");
        a.onclick = function () {
            alert("此程式適用於 【Windows 7 以上版本 】。 請至此系統下載並安裝！")
            return false;
        }

    } else {        
        a.onclick = function () {
            //alert(WinName + "！")
            if(WinName == "Win32") {
                a.href = "https://github.com/hwang6291/bswebsite/raw/gh-pages/mgzapp_x64.exe";
            } else {
                a.href = "https://github.com/hwang6291/bswebsite/raw/gh-pages/mgzapp_x32.exe";
            }
            return true;
        }
        //index是要下載的檔案編號，使用QueryString方式加入網址後方        
        a.href = url + "?index=eied/Eied_v10";
    }
})