import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ng2ImgMaxService } from 'ng2-img-max';



@Component({
  selector: 'app-photo-capture',
  templateUrl: './photo-capture.component.html',
  styleUrls: ['./photo-capture.component.css']
})
export class PhotoCaptureComponent implements OnInit {
  imgurl=null;
  uploadImage=null;
  images=null;
  compressSize=null;
  constructor(private httpClient: HttpClient, private imageCompress: Ng2ImgMaxService) { }

  ngOnInit(): void {
  }


  onSelectFile(event) { // called each time file input changes
    let image = event.target.files[0];

    console.log('size of the image in KB -',(image.size/1024))

    this.compressSize= ((image.size/1024)*40)/100000;

    console.log('this.compressSize --> '+this.compressSize)

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imgurl = event.target.result;
      }
    }


    this.imageCompress.compressImage(image, this.compressSize).subscribe(
      result => {
        console.log('converted base64 in KB' ,(result.size/1024))
        getBase64ImageFromUrl(result).then((base64)=>{
          this.uploadImage = base64;
         // console.log('base64',this.uploadImage)
         console.log('converted base64')

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

      console.log('Post api calling')

      this.httpClient.post<any>('http://staging30api.bigcityexperiences.co.in:5000/api/v1/imageteething',JSON.stringify(bodyJason ),{headers: headHeaders})
      .subscribe(data => {
        console.log('The Success data is->',JSON.stringify(data))
        this.images =data
      },
      error => console.log('oops', error)
      )
   
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


