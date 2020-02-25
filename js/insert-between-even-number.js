let n = prompt('Nhap day so ');
let split = n.split('');
for (i=0;i<split.length;i++) {
    if (split[i] %2==0 && split[i+1]%2==0) {
        split[i]+="-";
    }
}
splitJoin = split.join('')
document.write(splitJoin);
