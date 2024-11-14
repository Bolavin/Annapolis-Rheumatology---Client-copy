input.onfocus = function (){
    datalist.style.display = 'block';
    }

for (let option of datalist.options) {
    option.onclick = function (){
        input.value = this.value;
        datalist.style.display = 'none';
    }
}

// datalist.style.width = input.offsetWidth + 'px';
// datalist.style.left = input.offsetLeft + 'px';
// datalist.style.top = input.offsetTop + input.offsefHeight + 'px';