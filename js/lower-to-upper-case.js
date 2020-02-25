let text = prompt('Nhap chuoi ki tu');
let blank = '';
for (i=0;i<text.length;i++) {
    let c = text[i];
    if (c == c.toUpperCase()) {
        blank+=c.toLowerCase();
    } else if (c==c.toLowerCase()) {
        blank+=c.toUpperCase();
    } else {
        blank+=c;
    }
}
document.write('Day ki tu sau khi chuyen doi la '+blank);