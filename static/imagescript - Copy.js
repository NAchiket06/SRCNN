/*
const dropArea = document.querySelector(".drag-area")
const imagedisp = document.querySelector(".image-wrapper")
const butt = document.querySelector(".output-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
predictbutton = butt.querySelector("button"),
input = dropArea.querySelector("input");
let file //this is a global variable and we'll use it inside multiple functions
let result;

button.onclick = ()=>{
  input.click(); //if user click on the button then the input also clicked
  console.log("button clicked");
}

input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file= this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

predictbutton.onclick = ()=>{
  
    console.log("button clicked");
    var url = "http://127.0.0.1:5000/predict_image";

      const pythonProcess = spawn('python',["script.py"]);
  
      pythonProcess.stdin.write(file);
      pythonProcess.stdin.end();
      pythonProcess.stdout.on('data', (result) => {
          handleResult(result);
      }); 


     var url = "http://127.0.0.1:5000/predict_image";
    var formdata = new FormData();
    formdata.append('file', $(file[0]));
    
    console.log(formdata[0]);
    $.ajax({
      type: 'POST',
      url: url,
      data: formdata,
      contentType: false,
      cache: false,
      processData: false,
      success: function(data) {
          console.log('Success!');
          handleResult(data);
      },
  }); 

    
  } 



function showFile(){
  let fileType = file.type; //getting selected file type
  console.log(fileType);
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array

  if(validExtensions.includes(fileType)){ //if user selected file is an image file



        SEND THE MODEL FILE FROM HERE



    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
        // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
      let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file); 


   
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}

function handleResult(result){

  let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
        // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
      let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
      imagedisp.innerHTML = imgTag; //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(result);
}


*/

//selecting all required elements
const dropArea = document.querySelector(".drag-area")
const imagedisplay = document.querySelector(".image-wrapper"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions

button.onclick = ()=>{
  input.click(); //if user click on the button then the input also clicked
}

input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file

    /*

        SEND THE MODEL FILE FROM HERE

    */

    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
        // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
      let imgTag = `<img src="${fileURL}" alt="Mobirise">`; //creating an img tag and passing user selected file source inside src attribute
      imagedisplay.innerHTML = imgTag; //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}
  
    
