var color = '';

$('.color-palette li').each(function() {
    var x = $(this).css('backgroundColor');
    hexc(x);
    // $(this).append('<span class="swatch-label">'+color+'</span>').css("color", isDark($(this).css("background-color")) ? 'white' : 'black').css('text-transform','uppercase').addClass('img-thumbnail');
    $(this).append('<span class="swatch-label">'+color+'</span>').addClass('img-thumbnail');
});

function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');
};

// function isDark(dcolor) {
//     var match = /rgb\((\d+).*?(\d+).*?(\d+)\)/.exec(dcolor);
//     return parseFloat(match[1])
//          + parseFloat(match[2])
//          + parseFloat(match[3])
//            < 3 * 256 / 2; // r+g+b should be less than half of max (3 * 256)
// };