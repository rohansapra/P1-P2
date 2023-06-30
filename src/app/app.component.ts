import { Component, DoCheck, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  file: any;
  arrayBuffer: any;
  filelist: any;
  websiteList: Array<String>=[];
  elem: any;
  websiteDict:any = {}; 
  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });
  ngOnInit(){
    //var workbook = XLSX.readFile('a.xlsx');
    
    //Logic to convert XLSX to Blob and assign to this.file
    //this.file = (<HTMLInputElement>document.getElementById('hiddenField')).value;
  }
  get f(){
    return this.form.controls;
  }
  dispAlert()
  {
    // Logic to create and open msg file 
    // alert("File selected");
    
    console.log("in dispAlert");

  }
//   fetchLocal(url:any) {
//     return new Promise(function (resolve, reject) {
//         var xhr = new XMLHttpRequest
//         xhr.onload = function () {
//             resolve(new Response(xhr.response, { status: xhr.status }))
//         }
//         xhr.onerror = function () {
//             reject(new TypeError('Local request failed'))
//         }
//         xhr.open('GET', url)
//         xhr.responseType = "arraybuffer";
//         xhr.send(null)
//     })
// };
  uploadFile(event:any)
  {
    console.log("file uploaded")
    console.log(event)
  //   var workbook = XLSX.read('C:/Users/10685554/Downloads/a.xlsx', {
  //     type: 'binary'
  // }); 
  // this.fetchLocal('C:/Users/10685554/Downloads/a.xlsx').then(resolve => resolve.blob()).then(fileBlob => this.file=fileBlob);
  // var workbook=fetch('../a.xlsx').then(response =>  {if(!response.ok){console.log("Error !")}return response.blob();});
  // this.file=workbook;
  // const reader = response.body.getReader();
  // console.log(workbook);
  // debugger;   
    this.file= event.target.files[0];     
    // this.file=workbook;
    let fileReader = new FileReader();    
    fileReader.readAsArrayBuffer(this.file);     
    fileReader.onload = (e) => {    
        this.arrayBuffer = fileReader.result;    
        var data = new Uint8Array(this.arrayBuffer);    
        var arr = new Array();    
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
        var bstr = arr.join("");    
        var workbook = XLSX.read(bstr, {type:"binary"});    
        var first_sheet_name = workbook.SheetNames[0];    
        var worksheet = workbook.Sheets[first_sheet_name];    
        var arraylist = XLSX.utils.sheet_to_json(worksheet,{raw:true});
        //logic to iterate over array list
        for(this.elem of arraylist)
        {
          this.websiteList.push(this.elem["Site Name"]);
          //let recipent= new msg.Recipient
          // logic to push key value pair in dictionary
          // key =site name
          // value = msg object
          //this.websiteDict.this.elem["Site Name"]=
          (<HTMLInputElement>document.getElementById('Ro')).style.display="block";
        }

  }
}
  // submit(strName){
  //   console.log(this.websiteDict.strName);
  // }
  constructor(private router:Router){}
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}