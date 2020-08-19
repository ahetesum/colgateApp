import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ng2ImgMaxService } from 'ng2-img-max';



@Component({
  selector: 'app-photo-capture',
  templateUrl: './photo-capture.component.html',
  styleUrls: ['./photo-capture.component.css']
})
export class PhotoCaptureComponent implements OnInit {

  uploadImage=null;
  images=null;
  constructor(private httpClient: HttpClient, private imageCompress: Ng2ImgMaxService) { }

  ngOnInit(): void {
  }


  onSelectFile(event) { // called each time file input changes
    let image = event.target.files[0];

    this.imageCompress.compressImage(image, 0.400).subscribe(
      result => {
        getBase64ImageFromUrl(result).then((base64)=>{
          this.uploadImage= base64;
          console.log('base64',this.uploadImage)
        })

      },
      error => {
        console.log('😢 Oh no!', error);
      }
    );
}

uploadImageServer()
  {
    console.log('Upload the the Camera Image..');



      let headHeaders = new HttpHeaders({ "content-type": "application/json", "Accept": "application/json" });
      let bodyJason= { image_url: this.uploadImage };

      console.log(JSON.stringify(bodyJason ))


      this.httpClient.post<any>('https://cors-anywhere.herokuapp.com/http://staging30api.bigcityexperiences.co.in:5000/api/v1/imageteething',JSON.stringify(bodyJason ),{headers: headHeaders})
      .subscribe(data => {
        console.log('The result data is->',JSON.stringify(data))
        this.images =data
      }) 


  }





}





async function getBase64ImageFromUrl(imageFile) {

  return new Promise((resolve, reject) => {
    var reader  = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.addEventListener("load", function () {
      var strImage:string = (<string>reader.result).split(',')[1];

        resolve(strImage);
    }, false);

    reader.onerror = () => {
      return reject(this);
    };
  })
}


