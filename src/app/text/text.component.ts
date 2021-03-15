import { Component, ElementRef, OnInit, ViewChild, ViewRef } from '@angular/core';
import { fromEvent, Subscription, pipe, from, } from 'rxjs';
import { debounceTime, throttleTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @ViewChild('dom')
  myDom!: ElementRef;

  triger = {
    img_1: false,
    img_2: false,
    img_3: false,
    img_4: false,
    img_5: false,
    img_6: false,
    img_7: false,
    img_8: false,
    img_9: false,
    img_10: false,
    img_11: false,
    img_12: false,
    img_13: false,
    img_14: false,
    img_15: false,
    img_16: false,
    img_17: false,
    img_18: false,
    img_19: false,
    img_20: false
  }

  constructor() { }

  ngOnInit(): void {



    let img_height = window.outerHeight;



    const dom: HTMLElement = document.getElementById('all') as HTMLElement;
    fromEvent(window, 'scroll').pipe(debounceTime(500)).subscribe((data: any) => {

      console.log(window.scrollY);
      console.log(img_height);

      if (window.scrollY > 0.5 * img_height && window.scrollY < 1 * img_height) {
        if (!this.triger.img_1) {

          console.log("此内填写第一个文字事件");

          this.triger.img_1 = true;
        }


        console.log("触发第一个");
      } else if (window.scrollY > 1 * img_height && window.scrollY < 1.5 * img_height) {

        console.log("触发第二个");
      }






    })

  }




}
