function ipaddress(str) {
    var s = str.split('.');
    for (var i = 0; i <= str; i++) {
        if (s[i] < 1 || s[i] > 255) {
            return "invalid";
        }
    }
    return "valid";
}