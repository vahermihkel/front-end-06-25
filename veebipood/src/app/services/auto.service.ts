import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  autod = [
    {"nimi": "Ferrari", "hind": 200000, "aktiivne": false, pilt: "https://di-uploads-pod15.dealerinspire.com/lakeforestsportscars/uploads/2020/12/Ferrari-F8-Tributo-Front.jpg"}, 
    {"nimi": "Ford", "hind": 30000, "aktiivne": true, pilt: "https://autoportaal.ee/cache/autoportaal/public/a2_advertisement_photo/21d96_1250x934x0/1019729_EkozEI38biMYoOKduXic-g.jpgwidth1250wmno.jpg"}, 
    {"nimi": "Lamborghini", "hind": 250000, "aktiivne": false, pilt: "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_240,q_auto:good,w_385/mhkkhz8qe34ruhsi4xgq.jpg"}, 
    {"nimi": "BMW", "hind": 40000, "aktiivne": true, pilt: "https://a.storyblok.com/f/197805/7a2484c876/how-to-create-a-car-newblogcover.png"}, 
    {"nimi": "Tesla", "hind": 80000, "aktiivne": true, pilt: "https://preview.thenewsmarket.com/Previews/NCAP/StillAssets/1920x1080/684698_v3.jpg"}, 
    {"nimi": "Mercedes", "hind": 90000, "aktiivne": true, pilt: "https://a.storyblok.com/f/197805/7a2484c876/how-to-create-a-car-newblogcover.png"}, 
    {"nimi": "Aston Martin", "hind": 100000, "aktiivne": false, pilt: "https://a.storyblok.com/f/197805/7a2484c876/how-to-create-a-car-newblogcover.png"}, 
    {"nimi": "Volkswagen", "hind": 50000, "aktiivne": true, pilt: "https://images.dealer.com/ddc/vehicles/2025/Volkswagen/Jetta/Sedan/trim_15T_S_09644d/color/Deep%20Black%20Pearl-2T2T-18%2C18%2C20-640-en_US.jpg"}, 
    {"nimi": "Subaru", "hind": 60000, "aktiivne": true, pilt: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Subaru_WRX_STI_-_Blue_%28cropped%29.jpg/1200px-Subaru_WRX_STI_-_Blue_%28cropped%29.jpg"}
  ];

  constructor() { }
}
