function loadSchema() {
    var tableSchema = document.querySelector(".table-schema");
    var htmlContent = "";

    for (var i = 0; i < 5; i++) {
        htmlContent += `
            <div class="schema1">
                <div class="collapse-show${i} collapse><i class="bi bi-file-earmark-spreadsheet"></i></div>
                <div class="collapse-hide${i}">
                    <ul>
                        <li>
                            <details>
                                <summary><i class="bi bi-table"></i> Database ${i+1}</summary>
                                <ul>
                                    <ul>
                                        <li>Id</li>
                                        <li>Name</li>
                                        <li>Address</li>
                                        <li>Occupations</li>
                                    </ul>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <hr>
            </div>`;
    }
    console.log(htmlContent);

    tableSchema.innerHTML = htmlContent;
}

function changeFont() {
    var font_Size = document.getElementById("textAreaFontsize").value;
    document.getElementById("coding-area").style.fontSize=font_Size + 'px';
    document.getElementById("coding-area").style.lineHeight=font_Size*1.5+'px';
    document.getElementById("change-line").style.fontSize=font_Size + 'px';
    document.getElementById("change-line").style.lineHeight=font_Size*1.5+'px';
}

function countLine(){
    var lines = document.getElementById('coding-area').value.split('\n');
    var lineNumbers = document.getElementById('change-line');
    lineNumbers.innerHTML = '';
    for (var i = 1; i <= lines.length; i++) {
        lineNumbers.innerHTML += i + '<br>';
        console.log(lineNumbers);
        lineNumbers.scrollTop = lines.scrollTop;
    }
}

function hideLeft(){
    var leftPanel=document.querySelector(".left-body");
    var centerPanel=document.querySelector(".center-body");
    var slidbtn=document.querySelector(".left-hide");
    var leftBodyTitle=document.querySelector(".left-body-title");

    if(leftPanel.style.width>=4+"%"){
        leftPanel.style.width=15+"%";
        centerPanel.style.width=57+"%";
        slidbtn.style.left=14.5+"%";
        leftBodyTitle.innerHTML="Table Schema";
        // for(var i=0;i<5;i++){
        //     document.querySelector(".collapse-hide"+i).style.display="block";
        // }
        // for(var i=0;i<5;i++){
        //     document.querySelector(".collapse-show"+i).style.display="none";
        // }
    }
    else{
        leftPanel.style.width=4+"%";
        centerPanel.style.width=80+"%";
        slidbtn.style.left=3+"%";
        leftBodyTitle.innerHTML="<i class='bi bi-file-spreadsheet-fill'></i>";
        // for(var i=0;i<5;i++){
        //     document.querySelector(".collapse-hide"+i).style.display="none";
        // }
        // for(var i=0;i<5;i++){
        //     document.querySelector(".collapse-show"+i).style.display="block";
        // }
    }
}

var scroll_coding=document.getElementById("coding-area");
var content=document.getElementById("changeing-line-outer");
scroll_coding.addEventListener('scroll',function(){
    content.scrollTop = scroll_coding.scrollTop;
})

content.addEventListener('scroll', function() {
    scroll_coding.scrollTop = content.scrollTop;
  });